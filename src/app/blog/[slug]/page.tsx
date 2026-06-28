import type { ComponentType } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { RadialGlow } from "@/components/ui/RadialGlow";
import { Button } from "@/components/ui/Button";
import {
  BLOG_POSTS,
  getAdjacentPosts,
  getPostBySlug,
  type BlogPost,
} from "@/lib/blog";
import { SITE, URLS } from "@/lib/site";
import { AdaptyVsAppSkaleBody } from "@/components/blog/posts/adapty-vs-appskale";
import { KeywordAudit30DayBody } from "@/components/blog/posts/apple-search-ads-keyword-audit";
import { AppsFlyerAlternativeIndieDevsBody } from "@/components/blog/posts/appsflyer-alternative-indie-devs";
import { SpendVsOrganicRankBody } from "@/components/blog/posts/does-apple-search-ads-spend-actually-affect-your-organic-app-store-ranking";
import { CalculateRoasRevenueCatBody } from "@/components/blog/posts/how-to-calculate-apple-search-ads-roas-with-revenuecat";
import { ImproveKeywordRankings2026Body } from "@/components/blog/posts/how-to-improve-your-app-store-keyword-rankings-in-2026";
import { LaunchIosApp2026Body } from "@/components/blog/posts/how-to-launch-an-ios-app-in-2026";
import { ScaleCustomProductPagesBody } from "@/components/blog/posts/how-to-scale-your-app-with-custom-product-pages";
import { LongTailKeywordsRankBody } from "@/components/blog/posts/long-tail-keywords-main-keyword-rank";

type Params = { slug: string };

const POST_BODIES: Record<string, ComponentType> = {
  "apple-search-ads-keyword-audit": KeywordAudit30DayBody,
  "long-tail-keywords-main-keyword-rank": LongTailKeywordsRankBody,
  "appsflyer-alternative-indie-devs": AppsFlyerAlternativeIndieDevsBody,
  "how-to-scale-your-app-with-custom-product-pages":
    ScaleCustomProductPagesBody,
  "how-to-calculate-apple-search-ads-roas-with-revenuecat":
    CalculateRoasRevenueCatBody,
  "adapty-vs-appskale": AdaptyVsAppSkaleBody,
  "how-to-launch-an-ios-app-in-2026": LaunchIosApp2026Body,
  "how-to-improve-your-app-store-keyword-rankings-in-2026":
    ImproveKeywordRankings2026Body,
  "does-apple-search-ads-spend-actually-affect-your-organic-app-store-ranking":
    SpendVsOrganicRankBody,
};

export function generateStaticParams(): Params[] {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: `${post.title} | ${SITE.name} Blog`,
    description: post.description,
    alternates: { canonical: `${SITE.url}/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `${SITE.url}/blog/${post.slug}`,
      images: [{ url: post.image.src, alt: post.image.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image.src],
    },
  };
}

function buildJsonLd(post: BlogPost): string {
  const blogPosting: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE.url}/blog/${post.slug}`,
    },
    image: `${SITE.url}${post.image.src}`,
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
  };
  if (post.author) {
    blogPosting.author = {
      "@type": "Person",
      name: post.author.name,
      ...(post.author.url ? { url: post.author.url } : {}),
    };
  }
  if (post.faq && post.faq.length > 0) {
    blogPosting.hasPart = {
      "@type": "FAQPage",
      mainEntity: post.faq.map((q) => ({
        "@type": "Question",
        name: q.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: q.answer,
        },
      })),
    };
  }
  if (post.steps && post.steps.length > 0) {
    blogPosting.step = post.steps.map((s) => ({
      "@type": "HowToStep",
      name: s.name,
      text: s.text,
    }));
  }
  if (post.about && post.about.length > 0) {
    blogPosting.about = post.about.map((t) => ({
      "@type": "Thing",
      name: t.name,
      ...(t.url ? { url: t.url } : {}),
    }));
  }
  if (post.mentions && post.mentions.length > 0) {
    blogPosting.mentions = post.mentions.map((m) => {
      if (m.type === "SoftwareApplication") {
        return {
          "@type": "SoftwareApplication",
          name: m.name,
          applicationCategory: m.applicationCategory,
          operatingSystem: m.operatingSystem,
          description: m.description,
          ...(m.url ? { url: m.url } : {}),
        };
      }
      return {
        "@type": m.type,
        name: m.name,
        ...(m.url ? { url: m.url } : {}),
      };
    });
  }
  if (post.keywords && post.keywords.length > 0) {
    blogPosting.keywords = post.keywords;
  }
  return JSON.stringify(blogPosting);
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const Body = post.hasBody ? POST_BODIES[post.slug] : undefined;
  const { newer, older } = getAdjacentPosts(post.slug);
  const jsonLd = buildJsonLd(post);

  return (
    <Section spacing="hero" className="relative">
      <RadialGlow
        className="size-[600px] -top-24 left-1/2 -translate-x-1/2"
        color="purple"
        opacity={0.3}
        blur={140}
      />
      <Container className="relative z-10">
        <div className="mx-auto max-w-[760px]">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-purple-700 transition-colors hover:text-purple-900"
          >
            <span aria-hidden="true">←</span> Back to blog
          </Link>

          {Body ? (
            <article>
              <header className="mt-8 text-center">
                <h1 className="text-balance text-[28px] font-medium leading-[1.1] -tracking-[0.03em] text-purple-950 sm:text-[36px] md:text-[40px]">
                  {post.title}
                </h1>
                {post.author ? (
                  <p className="mt-5 text-sm text-purple-700/80">
                    By{" "}
                    {post.author.url ? (
                      <a
                        href={post.author.url}
                        target="_blank"
                        rel="noopener"
                        className="font-medium text-purple-700 underline decoration-purple-300 underline-offset-[3px] transition-colors hover:text-purple-900 hover:decoration-purple-500"
                      >
                        {post.author.name}
                      </a>
                    ) : (
                      <span className="font-medium text-purple-700">
                        {post.author.name}
                      </span>
                    )}
                  </p>
                ) : null}
              </header>
              <div className="mt-12">
                <Body />
              </div>
              {newer || older ? (
                <nav
                  aria-label="More blog posts"
                  className="mt-16 border-t border-purple-200/60 pt-8"
                >
                  <p className="text-center text-xs font-medium uppercase tracking-[0.18em] text-purple-700/70">
                    Keep reading
                  </p>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    {older ? (
                      <Link
                        href={`/blog/${older.slug}`}
                        className="group flex flex-col rounded-2xl border border-purple-200/60 bg-white/60 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-purple-300 hover:bg-white hover:shadow-[0_10px_28px_-16px_rgba(39,31,54,0.22)]"
                      >
                        <span className="inline-flex items-center gap-1 text-xs font-medium uppercase tracking-[0.12em] text-purple-700/70">
                          <span aria-hidden="true">←</span> Previous post
                        </span>
                        <span className="mt-2 text-pretty text-[15px] font-semibold leading-snug text-purple-900 group-hover:text-purple-700">
                          {older.title}
                        </span>
                      </Link>
                    ) : (
                      <span aria-hidden="true" className="hidden sm:block" />
                    )}
                    {newer ? (
                      <Link
                        href={`/blog/${newer.slug}`}
                        className="group flex flex-col rounded-2xl border border-purple-200/60 bg-white/60 p-5 text-right transition-all duration-200 hover:-translate-y-0.5 hover:border-purple-300 hover:bg-white hover:shadow-[0_10px_28px_-16px_rgba(39,31,54,0.22)]"
                      >
                        <span className="inline-flex items-center justify-end gap-1 text-xs font-medium uppercase tracking-[0.12em] text-purple-700/70">
                          Next post <span aria-hidden="true">→</span>
                        </span>
                        <span className="mt-2 text-pretty text-[15px] font-semibold leading-snug text-purple-900 group-hover:text-purple-700">
                          {newer.title}
                        </span>
                      </Link>
                    ) : (
                      <span aria-hidden="true" className="hidden sm:block" />
                    )}
                  </div>
                </nav>
              ) : null}
            </article>
          ) : (
            <>
              <h1 className="mt-6 text-balance text-[28px] font-medium leading-[1.1] tracking-tight text-purple-900 sm:text-[36px] md:text-[44px]">
                {post.title}
              </h1>
              <p className="mt-5 text-pretty text-base leading-relaxed text-purple-800/80">
                {post.description}
              </p>

              <div className="mt-10 overflow-hidden rounded-2xl border border-purple-200/40 bg-purple-50 shadow-[0_8px_24px_-12px_rgba(39,31,54,0.18)]">
                <Image
                  src={post.image.src}
                  alt={post.image.alt}
                  width={post.image.width}
                  height={post.image.height}
                  priority
                  sizes="(min-width: 1024px) 760px, 100vw"
                  className="h-auto w-full"
                />
              </div>

              <div className="mt-12 rounded-2xl border border-purple-200/50 bg-white/60 p-6 backdrop-blur-sm sm:p-8">
                <h2 className="text-lg font-semibold text-purple-900 sm:text-xl">
                  Full article coming soon
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-purple-800/80">
                  We&rsquo;re polishing this one for publication. In the
                  meantime, try AppSkale free and see exactly which Apple Search
                  Ads keywords drive paying users.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button href={URLS.signup} variant="primary">
                    Get started free
                  </Button>
                  <Button href="/blog" variant="secondary">
                    Read other posts
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </Container>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
    </Section>
  );
}
