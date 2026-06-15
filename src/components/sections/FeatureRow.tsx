import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Card } from "@/components/ui/Card";
import { RadialGlow } from "@/components/ui/RadialGlow";
import { URLS } from "@/lib/site";

type FeatureRowProps = {
  id?: string;
  eyebrow: string;
  title: ReactNode;
  body: ReactNode;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  imageOverlay?: ReactNode;
  imagePosition?: "left" | "right";
  glowColor?: "purple" | "blue" | "pink" | "indigo";
  cta?: { label: string; href: string };
};

export function FeatureRow({
  id,
  eyebrow,
  title,
  body,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  imageOverlay,
  imagePosition = "right",
  glowColor = "purple",
  cta = { label: "Get Started Free", href: URLS.signup },
}: FeatureRowProps) {
  const textBlock = (
    <div className="flex flex-col items-start">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 text-balance text-3xl font-medium leading-[1.1] tracking-tight text-purple-900 sm:text-[36px] md:text-[44px]">
        {title}
      </h2>
      <div className="mt-5 text-[15px] leading-[1.6] text-purple-800/80 sm:text-base">
        {body}
      </div>
      {cta ? (
        <div className="mt-7">
          <Button href={cta.href} showArrow>
            {cta.label}
          </Button>
        </div>
      ) : null}
    </div>
  );

  const imageBlock = (
    <div className="relative">
      <RadialGlow
        className={cn(
          "size-[460px] -top-12",
          imagePosition === "left" ? "-left-20" : "-right-20",
        )}
        color={glowColor}
        opacity={0.45}
        blur={130}
      />
      <Card
        variant="solid"
        className="relative overflow-hidden bg-white p-4 sm:p-6"
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          sizes="(max-width: 1024px) 100vw, 560px"
          className="h-auto w-full"
        />
        {imageOverlay ? (
          <div className="pointer-events-none absolute inset-0 flex flex-col justify-start p-6 sm:p-8">
            {imageOverlay}
          </div>
        ) : null}
      </Card>
    </div>
  );

  return (
    <Section id={id} className="relative">
      <Container className="relative z-10">
        <div className="grid items-center gap-12 md:gap-16 lg:grid-cols-2">
          {imagePosition === "left" ? (
            <>
              {imageBlock}
              {textBlock}
            </>
          ) : (
            <>
              {textBlock}
              {imageBlock}
            </>
          )}
        </div>
      </Container>
    </Section>
  );
}
