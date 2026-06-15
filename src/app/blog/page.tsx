import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { RadialGlow } from "@/components/ui/RadialGlow";
import { BLOG_POSTS } from "@/lib/blog";
import { SITE } from "@/lib/site";

const PAGE_TITLE =
  "AppSkale Blog | Apple Search Ads, RevenueCat & ROAS Guides";
const PAGE_DESCRIPTION =
  "Learn Apple Search Ads attribution, RevenueCat tracking, ROAS analysis, and keyword-level growth strategies for subscription apps.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${SITE.url}/blog` },
  openGraph: {
    type: "website",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${SITE.url}/blog`,
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

export default function BlogPage() {
  return (
    <Section spacing="hero" className="relative">
      <RadialGlow
        className="size-[680px] -top-32 left-1/2 -translate-x-1/2"
        color="purple"
        opacity={0.35}
        blur={140}
      />
      <Container className="relative z-10">
        <header className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-[28px] font-medium leading-[1.08] tracking-tight text-purple-900 sm:text-[40px] md:text-[48px]">
            AppSkale Blog
          </h1>
          <p className="mt-5 text-pretty text-[15px] leading-relaxed text-purple-800/80 sm:text-base">
            Apple Search Ads attribution, RevenueCat tracking, ROAS analysis,
            and keyword-level growth strategies for subscription apps.
          </p>
        </header>

        <ul className="mx-auto mt-16 flex max-w-[960px] flex-col gap-12 sm:mt-20 sm:gap-16 lg:gap-[60px]">
          {BLOG_POSTS.map((post, index) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col gap-4 sm:gap-5"
              >
                <h2 className="text-balance text-[18px] font-semibold leading-snug tracking-tight text-purple-900 transition-colors group-hover:text-purple-700 sm:text-[22px] lg:text-[26px]">
                  {post.title}
                </h2>
                <div className="relative overflow-hidden rounded-2xl border border-purple-200/40 bg-purple-50 shadow-[0_8px_24px_-12px_rgba(39,31,54,0.18)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_12px_32px_-12px_rgba(39,31,54,0.25)]">
                  <Image
                    src={post.image.src}
                    alt={post.image.alt}
                    width={post.image.width}
                    height={post.image.height}
                    priority={index === 0}
                    sizes="(min-width: 1024px) 960px, (min-width: 640px) 90vw, 100vw"
                    className="h-auto w-full"
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
