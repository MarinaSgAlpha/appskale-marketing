import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Card } from "@/components/ui/Card";
import { RadialGlow } from "@/components/ui/RadialGlow";

const steps = [
  {
    n: 1,
    title: "Sign up",
    body: "Create your account and connect with Google - get instant access to your analytics dashboard.",
  },
  {
    n: 2,
    title: "Connect your data",
    body: "Link Apple Search Ads and integrate RevenueCat. We guide you through the technical setup so you can start tracking revenue attribution.",
  },
  {
    n: 3,
    title: "Discover & Scale",
    body: "See which keywords drive paying users, not just installs. Find your 10 winning keywords and scale with confidence.",
  },
];

export function HowItWorks() {
  return (
    <Section id="how" className="relative">
      <RadialGlow
        className="size-[520px] -top-20 left-1/2 -translate-x-1/2"
        color="purple"
        opacity={0.35}
        blur={130}
      />

      <Container className="relative z-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-4 text-balance text-3xl font-medium leading-[1.05] tracking-tight text-purple-900 sm:text-[44px] md:text-[56px]">
            Apple Search Ads → RevenueCat → Keyword-level ROAS
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3 md:gap-6">
          {steps.map((s) => (
            <Card key={s.n} variant="solid" className="p-7 md:p-8">
              <div
                className="inline-flex size-11 items-center justify-center rounded-2xl text-[15px] font-semibold text-purple-700"
                style={{
                  backgroundImage:
                    "linear-gradient(140deg, rgba(204,205,255,0.6) 0%, rgba(236,216,243,0.9) 100%)",
                }}
                aria-hidden="true"
              >
                {s.n}
              </div>
              <h3 className="mt-6 text-[19px] font-medium text-purple-900">
                {s.title}
              </h3>
              <p className="mt-3 text-[14.5px] leading-[1.6] text-purple-800/80">
                {s.body}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
