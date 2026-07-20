import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { BLOG_POSTS, getBlogPageCount, getBlogPageHref } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const blogPages = Array.from({ length: getBlogPageCount() }, (_, i) => {
    const page = i + 1;
    return {
      url: `${SITE.url}${getBlogPageHref(page)}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: page === 1 ? 0.6 : 0.5,
    };
  });
  const routes: MetadataRoute.Sitemap = [
    { url: `${SITE.url}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE.url}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    ...blogPages,
    ...BLOG_POSTS.map((post) => ({
      url: `${SITE.url}/blog/${post.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
    {
      url: `${SITE.url}/apple-search-ads-attribution-setup-guide`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    { url: `${SITE.url}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
  return routes;
}
