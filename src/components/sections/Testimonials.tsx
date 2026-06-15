import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Card } from "@/components/ui/Card";
import { RadialGlow } from "@/components/ui/RadialGlow";

type Testimonial = {
  quote: string;
  author: string;
  role?: string;
  avatarSrc?: string;
  avatarAlt?: string;
  stars?: number;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "I was one of the early adapters of Appskale. The set up was time consuming and tricky but I needed that to work because I needed to optimize my budget and my ads campaigns. At the beginning, I encountered some bugs and I reported them but they addressed those pretty quickly. Now I am able to see which keywords are working and which aren't. So it is pretty useful for us.",
    author: "Mike",
    role: "CEO of RapidNova.co",
    avatarSrc: "/images/testimonials/testimonial_logo.webp",
    avatarAlt: "RapidNova logo",
    stars: 5,
  },
];

function Star({ filled }: { filled: boolean }) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="size-4">
      <path
        d="m10 2 2.47 5.005L18 7.81l-4 3.9.945 5.51L10 14.62 5.055 17.22 6 11.71 2 7.81l5.53-.805L10 2z"
        fill={filled ? "var(--purple-400)" : "none"}
        stroke="var(--purple-400)"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlaceholderMark() {
  return (
    <div
      className="flex size-12 items-center justify-center rounded-2xl text-white"
      style={{
        backgroundImage:
          "linear-gradient(140deg, #271f36 0%, #483953 60%, #573e69 100%)",
      }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="size-7" fill="none">
        <path
          d="M6 18 12 6l6 12-6-3.5L6 18z"
          stroke="white"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export function Testimonials() {
  return (
    <Section id="testimonials" className="relative">
      <RadialGlow
        className="size-[600px] -top-32 left-1/2 -translate-x-1/2"
        color="purple"
        opacity={0.35}
        blur={140}
      />

      <Container className="relative z-10">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <Eyebrow>Testimonials</Eyebrow>
          <h2 className="mt-4 text-balance text-3xl font-medium leading-[1.05] tracking-tight text-purple-900 sm:text-[44px] md:text-[52px]">
            What clients are saying
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          {testimonials.map((t) => (
            <Card
              key={t.author}
              variant="solid"
              className="px-6 py-10 sm:px-10 sm:py-12"
            >
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  {t.avatarSrc ? (
                    <Image
                      src={t.avatarSrc}
                      alt={t.avatarAlt ?? ""}
                      width={48}
                      height={48}
                      className="size-12 rounded-2xl object-cover"
                    />
                  ) : (
                    <PlaceholderMark />
                  )}
                </div>
                <blockquote className="text-[15px] leading-[1.65] text-purple-800/85 sm:text-[17px]">
                  {t.quote}
                </blockquote>
                <div className="flex items-center gap-1" aria-label={`${t.stars ?? 5} out of 5 stars`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} filled={i < (t.stars ?? 5)} />
                  ))}
                </div>
                <p className="text-sm text-purple-800/75">
                  <span className="font-medium text-purple-900">
                    {t.author}
                  </span>
                  {t.role ? `, ${t.role}` : null}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
