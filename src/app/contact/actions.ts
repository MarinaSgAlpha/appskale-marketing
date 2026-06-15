"use server";

import { Resend } from "resend";

/**
 * Contact form submission.
 *
 * Required env vars (set in .env.local for dev, project env for prod):
 *   RESEND_API_KEY      — your Resend API key (https://resend.com/api-keys)
 *   CONTACT_TO_EMAIL    — inbox that receives form submissions (e.g. hello@appskale.ai)
 *   CONTACT_FROM_EMAIL  — sender on a domain verified in Resend (e.g. hello@appskale.ai)
 *
 * Optional:
 *   CONTACT_BCC_EMAIL   — comma-separated list of BCC addresses
 *
 * Behavior:
 *   - Honeypot fields short-circuit to a silent success.
 *   - Validates the required fields and email format.
 *   - In dev with missing env vars, logs the payload and returns success so the
 *     UI is testable without keys.
 *   - In production with missing env vars, returns a generic error.
 */

export type ContactFormState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

const HONEYPOT_FIELDS = ["hp_website", "hp_url"] as const;

function getString(formData: FormData, name: string): string {
  const v = formData.get(name);
  return typeof v === "string" ? v.trim() : "";
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

type ContactPayload = {
  name: string;
  surname: string;
  email: string;
  phone: string;
  companyName: string;
  userMessage: string;
  newsletter: boolean;
};

function buildPlainText(p: ContactPayload): string {
  return [
    `New contact form submission`,
    ``,
    `Name:        ${p.name} ${p.surname}`,
    `Email:       ${p.email}`,
    `Phone:       ${p.phone || "—"}`,
    `Company:     ${p.companyName}`,
    `Newsletter:  ${p.newsletter ? "yes" : "no"}`,
    ``,
    `Message:`,
    p.userMessage || "(none)",
  ].join("\n");
}

function buildHtml(p: ContactPayload): string {
  const row = (label: string, value: string) =>
    `<tr><td style="padding:6px 12px 6px 0;color:#6b6680;font:14px/1.5 -apple-system,BlinkMacSystemFont,Segoe UI,Inter,sans-serif">${label}</td><td style="padding:6px 0;color:#1c1430;font:14px/1.5 -apple-system,BlinkMacSystemFont,Segoe UI,Inter,sans-serif">${escapeHtml(value)}</td></tr>`;

  return `<!doctype html>
<html><body style="margin:0;padding:24px;background:#faf9fc;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Inter,sans-serif;color:#1c1430">
  <div style="max-width:560px;margin:0 auto;background:#fff;border:1px solid #ece7f5;border-radius:16px;padding:24px">
    <h1 style="margin:0 0 16px;font-size:18px;color:#1c1430">New contact form submission</h1>
    <table style="border-collapse:collapse;margin-bottom:16px">
      ${row("Name", `${p.name} ${p.surname}`)}
      ${row("Email", p.email)}
      ${row("Phone", p.phone || "—")}
      ${row("Company", p.companyName)}
      ${row("Newsletter", p.newsletter ? "yes" : "no")}
    </table>
    <div style="border-top:1px solid #ece7f5;padding-top:16px">
      <div style="font-size:13px;color:#6b6680;margin-bottom:6px">Message</div>
      <div style="white-space:pre-wrap;font-size:14px;line-height:1.55;color:#1c1430">${p.userMessage ? escapeHtml(p.userMessage) : "<em style='color:#a39fb6'>(none)</em>"}</div>
    </div>
  </div>
</body></html>`;
}

export async function submitContact(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  for (const field of HONEYPOT_FIELDS) {
    if (getString(formData, field).length > 0) {
      return { status: "success" };
    }
  }

  const payload: ContactPayload = {
    name: getString(formData, "name"),
    surname: getString(formData, "surname"),
    email: getString(formData, "email"),
    phone: getString(formData, "phone"),
    companyName: getString(formData, "company_name"),
    userMessage: getString(formData, "user_message"),
    newsletter: formData.get("newsletter") === "on",
  };

  if (!payload.name || !payload.surname || !payload.email || !payload.companyName) {
    return {
      status: "error",
      message: "Please fill in name, surname, email, and company.",
    };
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email);
  if (!emailOk) {
    return { status: "error", message: "That email address looks off." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  const bccRaw = process.env.CONTACT_BCC_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        "[contact] Resend env vars missing — skipping send. Set RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL in .env.local.",
      );
      console.log("[contact] payload:", payload);
      return { status: "success" };
    }
    console.error("[contact] Resend env vars missing in production.");
    return {
      status: "error",
      message: "We couldn't send your message just now. Please email hello@appskale.ai directly.",
    };
  }

  const bcc = bccRaw
    ? bccRaw
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean)
    : undefined;

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      ...(bcc && bcc.length > 0 ? { bcc } : {}),
      replyTo: payload.email,
      subject: `New contact: ${payload.name} ${payload.surname} @ ${payload.companyName}`,
      text: buildPlainText(payload),
      html: buildHtml(payload),
    });

    if (error) {
      console.error("[contact] Resend send error:", error);
      return {
        status: "error",
        message: "We couldn't send your message just now. Please try again or email hello@appskale.ai directly.",
      };
    }
  } catch (err) {
    console.error("[contact] Resend send failed:", err);
    return {
      status: "error",
      message: "We couldn't send your message just now. Please try again or email hello@appskale.ai directly.",
    };
  }

  return { status: "success" };
}
