import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";

const faqs = [
  {
    q: "How secure is AppSkale?",
    a: "AppSkale is GDPR compliant and ISO27001 certified. We treat your data with the same care as banks treat yours. All connections to Apple Search Ads and RevenueCat are made over encrypted channels using read-only credentials you control, and we never store raw user-identifying information. Our infrastructure is hosted in a SOC 2 audited environment, and we monitor 24/7 for unusual activity.",
  },
  {
    q: "Why does AppSkale use AI?",
    a: "Apple Search Ads and RevenueCat each return tens of thousands of rows per day per app. We use AI to match those streams together, deduplicate noisy events, and surface the keywords and cohorts that drive real revenue. The AI never trains on your data outside your account; it's used purely to power the matching and ranking inside your own dashboard.",
  },
  {
    q: "How quickly can I see results?",
    a: "Setup typically takes about 20 minutes. Once Apple Search Ads and RevenueCat are connected, we backfill the last 90 days of data so you see ROAS by keyword almost immediately. Most customers find their first set of \"actually profitable\" keywords inside the first week.",
  },
  {
    q: "Do you offer customer support?",
    a: "Yes. Free plans get email support, Pro plans get priority email support, and Enterprise plans get a dedicated point of contact for onboarding and ongoing optimisation.",
  },
  {
    q: "Is there a free trial available?",
    a: "Yes — the Free plan is genuinely free, with no time limit. It includes LTV & transaction data for one app and up to $2k/month ad spend. Upgrade to Pro when you outgrow it.",
  },
];

function Chevron() {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className="size-5 shrink-0 text-purple-500 transition-transform duration-200 group-open:rotate-180"
      fill="none"
    >
      <path
        d="m6 8 4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FAQ() {
  return (
    <Section id="faq" tone="tinted">
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Eyebrow>Frequently asked questions</Eyebrow>
          <h2 className="mt-4 text-balance text-3xl font-medium leading-[1.05] tracking-tight text-purple-900 sm:text-[44px] md:text-[52px]">
            Common questions answered
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {faqs.map((item, idx) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-purple-200/60 bg-white px-5 py-4 shadow-[0_1px_2px_rgba(39,31,54,0.03)] open:shadow-[0_4px_12px_-4px_rgba(39,31,54,0.08)] sm:px-6 sm:py-5"
              open={idx === 0}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-medium text-purple-900 sm:text-base">
                <span>{item.q}</span>
                <Chevron />
              </summary>
              <div className="mt-3 text-[14.5px] leading-[1.65] text-purple-800/80 sm:text-[15px]">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}
