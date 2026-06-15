import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { RadialGlow } from "@/components/ui/RadialGlow";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Have questions about Apple Search Ads Analytics? Need help setting up your dashboard? Email support@appskale.ai or get in touch via the form.",
};

export default function ContactPage() {
  return (
    <Section spacing="hero" className="relative">
      <RadialGlow
        className="size-[520px] -top-20 -left-32"
        color="blue"
        opacity={0.45}
        blur={130}
      />
      <RadialGlow
        className="size-[520px] top-1/3 -right-32"
        color="pink"
        opacity={0.4}
        blur={130}
      />

      <Container className="relative z-10">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <h1 className="text-balance text-4xl font-medium leading-[1.05] tracking-tight text-purple-900 sm:text-5xl md:text-[64px]">
            Contact Us
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-purple-800/80 sm:text-base">
            Have questions about Apple Search Ads Analytics? Need help setting
            up your dashboard? We&apos;re here to help. Email us at{" "}
            <a
              href="mailto:support@appskale.ai"
              className="underline-offset-4 hover:underline text-purple-700"
            >
              support@appskale.ai
            </a>{" "}
            and we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-xl">
          <Card variant="gradient" className="relative p-1.5 sm:p-2">
            <div className="relative rounded-[24px] bg-white p-6 sm:p-10">
              <ContactForm />
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
