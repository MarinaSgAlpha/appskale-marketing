import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { RadialGlow } from "@/components/ui/RadialGlow";
import { Card } from "@/components/ui/Card";
import { TrustTags } from "@/components/ui/TrustTags";
import { URLS } from "@/lib/site";

export function Hero() {
  return (
    <Section id="hero" spacing="hero" className="relative">
      <RadialGlow
        className="size-[640px] -top-32 left-1/2 -translate-x-1/2"
        color="purple"
        opacity={0.55}
        blur={140}
      />
      <RadialGlow
        className="size-[420px] -top-10 -left-32"
        color="blue"
        opacity={0.45}
        blur={120}
      />
      <RadialGlow
        className="size-[420px] top-32 -right-32"
        color="pink"
        opacity={0.4}
        blur={120}
      />

      <Container className="relative z-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <h1 className="text-balance text-[40px] font-medium leading-[1.05] tracking-[-0.03em] text-purple-900 sm:text-[56px] md:text-[68px] lg:text-[76px]">
            Find out which keywords actually sell in Apple Search Ads
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-[1.55] text-purple-800/80 sm:text-base">
            The Apple Search Ads analytics platform to track conversions and
            ROAS. Stop wasting money on keywords that don&apos;t convert.
            AppSkale provides keyword-level LTV and revenue data, so you can see
            exactly which campaigns drive real subscriptions—not just installs.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
            <Button href="/#how" variant="secondary">
              See How It Works
            </Button>
            <Button href={URLS.signup} showArrow>
              Get Started Free
            </Button>
          </div>

          <TrustTags className="mt-6" />
        </div>

        <div className="relative mt-16 sm:mt-20">
          <RadialGlow
            className="absolute inset-x-10 -bottom-10 h-[260px] rounded-[100%]"
            color="purple"
            opacity={0.55}
            blur={100}
          />
          <Card
            variant="gradient"
            className="relative mx-auto max-w-[1080px] p-2 sm:p-3"
          >
            <div className="overflow-hidden rounded-[20px] bg-white">
              <Image
                src="/images/hero-dashboard.webp"
                alt="AppSkale keywords dashboard showing total spend, ad revenue, ROAS, purchases and CAC by keyword"
                width={2048}
                height={1322}
                priority
                sizes="(max-width: 1024px) 100vw, 1080px"
                className="h-auto w-full"
              />
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
