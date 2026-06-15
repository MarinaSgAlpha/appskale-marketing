"use client";

import { useActionState } from "react";
import { submitContact, type ContactFormState } from "./actions";
import { Button } from "@/components/ui/Button";
import { TrustTags } from "@/components/ui/TrustTags";

const initialState: ContactFormState = { status: "idle" };

const inputClasses =
  "w-full rounded-2xl border border-purple-200/60 bg-white px-4 py-3 text-[15px] text-purple-900 placeholder:text-purple-300 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-200";

const labelClasses = "block text-[14px] font-medium text-purple-900";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContact,
    initialState,
  );

  if (state.status === "success") {
    return (
      <div className="rounded-3xl border border-purple-200 bg-white p-10 text-center">
        <h2 className="text-2xl font-medium text-purple-900">Thanks!</h2>
        <p className="mt-3 text-[15px] text-purple-800/80">
          We&apos;ve got your message and will reply within 24 hours. In the
          meantime, you can email us directly at{" "}
          <a
            href="mailto:support@appskale.ai"
            className="underline-offset-4 hover:underline text-purple-700"
          >
            support@appskale.ai
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className="flex flex-col gap-5"
      noValidate
    >
      {/* Honeypot fields — keep first, hidden from real users and screen readers. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[9999px] h-0 w-0 overflow-hidden"
      >
        <label>
          Website <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
        <label>
          Company URL{" "}
          <input type="text" name="company_url" tabIndex={-1} autoComplete="off" />
        </label>
        <label>
          Message <input type="text" name="message_bot" tabIndex={-1} autoComplete="off" />
        </label>
        <label>
          Subject <input type="text" name="subject" tabIndex={-1} autoComplete="off" />
        </label>
        <label>
          Title <input type="text" name="title" tabIndex={-1} autoComplete="off" />
        </label>
        <label>
          Description{" "}
          <input type="text" name="description" tabIndex={-1} autoComplete="off" />
        </label>
        <label>
          Feedback <input type="text" name="feedback" tabIndex={-1} autoComplete="off" />
        </label>
        <label>
          Notes <input type="text" name="notes" tabIndex={-1} autoComplete="off" />
        </label>
        <label>
          Details <input type="text" name="details" tabIndex={-1} autoComplete="off" />
        </label>
        <label>
          Remarks <input type="text" name="remarks" tabIndex={-1} autoComplete="off" />
        </label>
        <label>
          Comments <input type="text" name="comments" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Name*
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="given-name"
            placeholder="Jane"
            className={`${inputClasses} mt-2`}
          />
        </div>
        <div>
          <label htmlFor="surname" className={labelClasses}>
            Surname*
          </label>
          <input
            id="surname"
            name="surname"
            type="text"
            required
            autoComplete="family-name"
            placeholder="Smith"
            className={`${inputClasses} mt-2`}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClasses}>
          Business Email*
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="jane@company.com"
          className={`${inputClasses} mt-2`}
        />
      </div>

      <div>
        <label htmlFor="phone" className={labelClasses}>
          Telephone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+44"
          className={`${inputClasses} mt-2`}
        />
      </div>

      <div>
        <label htmlFor="company_name" className={labelClasses}>
          Company*
        </label>
        <input
          id="company_name"
          name="company_name"
          type="text"
          required
          autoComplete="organization"
          placeholder="Your company name"
          className={`${inputClasses} mt-2`}
        />
      </div>

      <div>
        <label htmlFor="user_message" className={labelClasses}>
          Message
        </label>
        <textarea
          id="user_message"
          name="user_message"
          rows={4}
          placeholder="Message"
          className={`${inputClasses} mt-2 resize-y`}
        />
      </div>

      <label className="flex items-start gap-3 text-[13.5px] text-purple-800/80">
        <input
          type="checkbox"
          name="newsletter"
          className="mt-0.5 size-4 rounded border-purple-300 text-purple-600"
        />
        <span>
          You agree to our{" "}
          <a
            href="/terms"
            className="underline-offset-4 hover:underline text-purple-700"
          >
            privacy policy
          </a>
          .
        </span>
      </label>

      {state.status === "error" ? (
        <p
          role="alert"
          className="rounded-2xl border border-pink-200 bg-pink-50 px-4 py-3 text-[14px] text-purple-900"
        >
          {state.message}
        </p>
      ) : null}

      <Button
        type="submit"
        showArrow
        className="mt-2 w-full"
        disabled={pending}
      >
        {pending ? "Sending…" : "Submit"}
      </Button>

      <div className="mt-2 flex justify-center">
        <TrustTags />
      </div>
    </form>
  );
}
