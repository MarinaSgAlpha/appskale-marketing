import { SITE, URLS } from "@/lib/site";

/**
 * SoftwareApplication JSON-LD structured data — mirrors the Framer site.
 */
export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE.name,
    description: SITE.description,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: SITE.url,
    author: { "@type": "Person", name: "Sam H" },
    offers: [
      {
        "@type": "Offer",
        name: "Free",
        price: "0",
        priceCurrency: "USD",
      },
      {
        "@type": "Offer",
        name: "Pro",
        price: "129",
        priceCurrency: "USD",
      },
      {
        "@type": "Offer",
        name: "Enterprise",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: `${SITE.url}/contact`,
      },
    ],
    potentialAction: {
      "@type": "RegisterAction",
      target: URLS.signup,
    },
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
