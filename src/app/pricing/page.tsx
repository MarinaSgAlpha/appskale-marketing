import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { TrustTags } from "@/components/ui/TrustTags";
import { RadialGlow } from "@/components/ui/RadialGlow";
import { cn } from "@/lib/cn";
import { URLS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, scalable plans for Apple Search Ads attribution. Start free, upgrade when you need keyword-level ROAS, or talk to us about Enterprise.",
};

type Plan = {
  id: "free" | "pro" | "enterprise";
  name: string;
  icon?: string;
  highlight?: boolean;
  rows: {
    price: string;
    feature: string;
    apps: string;
    spend: string;
    setup: string;
    support: string;
  };
  cta: { label: string; href: string };
};

const plans: Plan[] = [
  {
    id: "free",
    name: "Free",
    rows: {
      price: "$0",
      feature: "LTV & Transaction Data",
      apps: "1 App",
      spend: "Up to $2k/month ad spend",
      setup: "Self-service",
      support: "Email Support",
    },
    cta: { label: "Signup Free", href: URLS.signup },
  },
  {
    id: "pro",
    name: "Pro",
    icon: "🚀",
    highlight: true,
    rows: {
      price: "$129",
      feature: "Keyword Level ROAS",
      apps: "3 Apps",
      spend: "Up to $15k/month",
      setup: "Self-service",
      support: "Priority Email Support",
    },
    cta: { label: "Start For Free", href: URLS.signup },
  },
  {
    id: "enterprise",
    name: "Enterprise",
    rows: {
      price: "Contact us",
      feature: "Everything +",
      apps: "Unlimited Apps",
      spend: "$15k+/month ad spend",
      setup: "White-glove setup",
      support: "Dedicated Support",
    },
    cta: { label: "Contact Sales", href: "/contact" },
  },
];

const rowLabels: { key: keyof Plan["rows"]; label: string }[] = [
  { key: "price", label: "Price" },
  { key: "feature", label: "Features" },
  { key: "apps", label: "Apps" },
  { key: "spend", label: "Ad spend" },
  { key: "setup", label: "Setup" },
  { key: "support", label: "Support" },
];

function ProBorder({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-[28px] opacity-90"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(204,205,255,0.7) 0%, rgba(218,158,240,0.7) 100%)",
          padding: "1.5px",
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}

export default function PricingPage() {
  return (
    <Section tone="dark" spacing="hero" className="relative">
      <RadialGlow
        className="size-[700px] -top-32 left-1/2 -translate-x-1/2"
        color="indigo"
        opacity={0.18}
        blur={160}
      />
      <RadialGlow
        className="size-[500px] top-1/3 -right-32"
        color="pink"
        opacity={0.12}
        blur={140}
      />

      <Container className="relative z-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Eyebrow tone="dark" icon={<span>🚀</span>}>
            Knowing ROAS is your unfair advantage
          </Eyebrow>
          <h1 className="mt-5 text-balance text-4xl font-medium uppercase leading-[1.02] tracking-[-0.02em] text-white sm:text-[56px] md:text-[72px]">
            Stop wasting money on bad keywords
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-purple-200/75 sm:text-base">
            While your competitors guess, you&apos;ll know exactly which
            keywords are profitable
          </p>
        </div>

        {/* Desktop grid (3 cols) — hidden on mobile */}
        <div className="mt-16 hidden md:block">
          <div className="grid grid-cols-3 gap-4 lg:gap-6">
            {plans.map((plan) => {
              const card = (
                <div
                  className={cn(
                    "flex h-full flex-col rounded-[28px] px-6 py-10 text-center backdrop-blur-sm lg:px-8",
                    plan.highlight
                      ? "bg-white/[0.04]"
                      : "bg-transparent text-purple-200/85",
                  )}
                >
                  <header className="text-[20px] font-medium text-white">
                    {plan.name}
                    {plan.icon ? (
                      <span className="ml-1" aria-hidden="true">
                        {plan.icon}
                      </span>
                    ) : null}
                  </header>
                  <ul className="mt-10 flex flex-1 flex-col gap-7 text-[15px]">
                    {rowLabels.map((r) => (
                      <li
                        key={r.key}
                        className={cn(
                          "border-b border-white/10 pb-7 last:border-b-0",
                          plan.highlight && r.key === "price"
                            ? "text-white text-[28px] font-medium"
                            : !plan.highlight && r.key === "price"
                              ? "text-purple-100 text-[22px]"
                              : "",
                          plan.highlight &&
                            r.key !== "price" &&
                            "text-white font-medium",
                        )}
                      >
                        {plan.rows[r.key]}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10 flex flex-col items-center gap-3">
                    <Button
                      href={plan.cta.href}
                      variant={plan.highlight ? "primary" : "ghost-dark"}
                      showArrow={plan.highlight}
                      className={plan.highlight ? "" : "min-w-[140px]"}
                    >
                      {plan.cta.label}
                    </Button>
                    {plan.highlight ? <TrustTags tone="dark" /> : null}
                  </div>
                </div>
              );

              return plan.highlight ? (
                <ProBorder key={plan.id}>{card}</ProBorder>
              ) : (
                <div key={plan.id}>{card}</div>
              );
            })}
          </div>
        </div>

        {/* Mobile stacked cards */}
        <div className="mt-12 flex flex-col gap-4 md:hidden">
          {plans.map((plan) => {
            const card = (
              <div
                className={cn(
                  "rounded-[24px] px-6 py-8",
                  plan.highlight
                    ? "bg-white/[0.04]"
                    : "bg-white/[0.02] border border-white/10",
                )}
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="text-[20px] font-medium text-white">
                    {plan.name}
                    {plan.icon ? (
                      <span className="ml-1" aria-hidden="true">
                        {plan.icon}
                      </span>
                    ) : null}
                  </h3>
                  <p className="text-[22px] font-medium text-white">
                    {plan.rows.price}
                  </p>
                </div>
                <dl className="mt-6 grid grid-cols-1 gap-4 text-[14px]">
                  {rowLabels
                    .filter((r) => r.key !== "price")
                    .map((r) => (
                      <div
                        key={r.key}
                        className="flex justify-between gap-4 border-b border-white/10 pb-3 last:border-b-0 last:pb-0"
                      >
                        <dt className="text-purple-200/70">{r.label}</dt>
                        <dd className="text-right text-white">
                          {plan.rows[r.key]}
                        </dd>
                      </div>
                    ))}
                </dl>
                <div className="mt-8">
                  <Button
                    href={plan.cta.href}
                    variant={plan.highlight ? "primary" : "ghost-dark"}
                    showArrow={plan.highlight}
                    className="w-full"
                  >
                    {plan.cta.label}
                  </Button>
                </div>
                {plan.highlight ? (
                  <div className="mt-5 flex justify-center">
                    <TrustTags tone="dark" />
                  </div>
                ) : null}
              </div>
            );
            return plan.highlight ? (
              <ProBorder key={plan.id}>{card}</ProBorder>
            ) : (
              <div key={plan.id}>{card}</div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
