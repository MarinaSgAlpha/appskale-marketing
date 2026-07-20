import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { BlogIndex } from "@/components/blog/BlogIndex";
import { getBlogPageCount } from "@/lib/blog";
import { SITE } from "@/lib/site";

type Params = { page: string };

export function generateStaticParams(): Params[] {
  const totalPages = getBlogPageCount();
  return Array.from({ length: Math.max(0, totalPages - 1) }, (_, i) => ({
    page: String(i + 2),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { page: pageParam } = await params;
  const page = Number.parseInt(pageParam, 10);
  const totalPages = getBlogPageCount();

  if (!Number.isFinite(page) || page < 2 || page > totalPages) {
    return { title: "Blog page not found" };
  }

  const title = `AppSkale Blog — Page ${page} | Apple Search Ads Guides`;
  const description =
    "Learn Apple Search Ads attribution, RevenueCat tracking, ROAS analysis, and keyword-level growth strategies for subscription apps.";
  const url = `${SITE.url}/blog/page/${page}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      title,
      description,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function BlogPagedPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { page: pageParam } = await params;
  const page = Number.parseInt(pageParam, 10);
  const totalPages = getBlogPageCount();

  if (!Number.isFinite(page) || page < 1) notFound();
  if (page === 1) redirect("/blog");
  if (page > totalPages) notFound();

  return <BlogIndex page={page} />;
}
