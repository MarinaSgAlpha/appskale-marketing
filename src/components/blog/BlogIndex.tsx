import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { RadialGlow } from "@/components/ui/RadialGlow";
import {
  getBlogPageCount,
  getBlogPageHref,
  getPostsForPage,
  type BlogPost,
} from "@/lib/blog";

type BlogIndexProps = {
  page: number;
};

function Pagination({
  page,
  totalPages,
}: {
  page: number;
  totalPages: number;
}) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      aria-label="Blog pagination"
      className="mx-auto mt-14 flex max-w-[960px] flex-col items-center gap-4 sm:mt-16"
    >
      <p className="text-sm text-purple-700/75">
        Page {page} of {totalPages}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {page > 1 ? (
          <Link
            href={getBlogPageHref(page - 1)}
            className="inline-flex h-10 items-center rounded-xl border border-purple-200/70 bg-white/70 px-4 text-sm font-medium text-purple-800 transition-colors hover:border-purple-300 hover:bg-white hover:text-purple-900"
          >
            ← Previous
          </Link>
        ) : (
          <span
            aria-disabled="true"
            className="inline-flex h-10 items-center rounded-xl border border-purple-100 bg-purple-50/40 px-4 text-sm font-medium text-purple-400"
          >
            ← Previous
          </span>
        )}

        {pages.map((p) => {
          const isCurrent = p === page;
          return isCurrent ? (
            <span
              key={p}
              aria-current="page"
              className="inline-flex size-10 items-center justify-center rounded-xl bg-purple-900 text-sm font-semibold text-white"
            >
              {p}
            </span>
          ) : (
            <Link
              key={p}
              href={getBlogPageHref(p)}
              className="inline-flex size-10 items-center justify-center rounded-xl border border-purple-200/70 bg-white/70 text-sm font-medium text-purple-800 transition-colors hover:border-purple-300 hover:bg-white hover:text-purple-900"
            >
              {p}
            </Link>
          );
        })}

        {page < totalPages ? (
          <Link
            href={getBlogPageHref(page + 1)}
            className="inline-flex h-10 items-center rounded-xl border border-purple-200/70 bg-white/70 px-4 text-sm font-medium text-purple-800 transition-colors hover:border-purple-300 hover:bg-white hover:text-purple-900"
          >
            Next →
          </Link>
        ) : (
          <span
            aria-disabled="true"
            className="inline-flex h-10 items-center rounded-xl border border-purple-100 bg-purple-50/40 px-4 text-sm font-medium text-purple-400"
          >
            Next →
          </span>
        )}
      </div>
    </nav>
  );
}

function PostCard({
  post,
  priority,
}: {
  post: BlogPost;
  priority?: boolean;
}) {
  return (
    <li>
      <Link
        href={`/blog/${post.slug}`}
        className="group flex h-full flex-col gap-3"
      >
        <div className="relative overflow-hidden rounded-2xl border border-purple-200/40 bg-purple-50 shadow-[0_8px_24px_-12px_rgba(39,31,54,0.18)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_12px_32px_-12px_rgba(39,31,54,0.25)]">
          <Image
            src={post.image.src}
            alt={post.image.alt}
            width={post.image.width}
            height={post.image.height}
            priority={priority}
            sizes="(min-width: 1024px) 460px, (min-width: 640px) 45vw, 100vw"
            className="h-auto w-full"
          />
        </div>
        <h2 className="text-balance text-[17px] font-semibold leading-snug tracking-tight text-purple-900 transition-colors group-hover:text-purple-700 sm:text-[18px]">
          {post.title}
        </h2>
        <p className="text-pretty text-sm leading-relaxed text-purple-800/75 line-clamp-2">
          {post.description}
        </p>
      </Link>
    </li>
  );
}

export function BlogIndex({ page }: BlogIndexProps) {
  const totalPages = getBlogPageCount();
  const safePage = Math.min(Math.max(1, page), totalPages);
  const posts = getPostsForPage(safePage);

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

        <ul className="mx-auto mt-14 grid max-w-[960px] grid-cols-1 gap-10 sm:mt-16 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12">
          {posts.map((post, index) => (
            <PostCard
              key={post.slug}
              post={post}
              priority={safePage === 1 && index < 2}
            />
          ))}
        </ul>

        <Pagination page={safePage} totalPages={totalPages} />
      </Container>
    </Section>
  );
}
