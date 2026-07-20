import type { Metadata } from "next";
import { BlogIndex } from "@/components/blog/BlogIndex";
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
  return <BlogIndex page={1} />;
}
