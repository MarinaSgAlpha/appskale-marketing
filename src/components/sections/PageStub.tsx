import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { RadialGlow } from "@/components/ui/RadialGlow";

type PageStubProps = {
  title: string;
  body: ReactNode;
};

export function PageStub({ title, body }: PageStubProps) {
  return (
    <Section spacing="hero" className="relative">
      <RadialGlow
        className="size-[560px] -top-20 left-1/2 -translate-x-1/2"
        color="purple"
        opacity={0.4}
        blur={130}
      />
      <Container className="relative z-10">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <h1 className="text-balance text-4xl font-medium leading-[1.05] tracking-tight text-purple-900 sm:text-5xl md:text-[64px]">
            {title}
          </h1>
          <div className="mt-5 max-w-xl text-[15px] leading-relaxed text-purple-800/80 sm:text-base">
            {body}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function makeStubMetadata(
  title: string,
  description: string,
): Metadata {
  return { title, description };
}
