import type { Metadata, Viewport } from "next";
import { inter, satoshi } from "./fonts";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Analytics, MetaPixelNoScript } from "@/components/layout/Analytics";
import { StructuredData } from "@/components/layout/StructuredData";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Apple Search Ads analytics & keyword ROAS`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: SITE.name,
    title: `${SITE.name} — Apple Search Ads analytics & keyword ROAS`,
    description: SITE.description,
    url: SITE.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Apple Search Ads analytics & keyword ROAS`,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/images/favicon.avif", type: "image/avif" },
    ],
    shortcut: ["/images/favicon.avif"],
    apple: [{ url: "/images/favicon.avif" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-GB"
      dir="ltr"
      className={`${satoshi.variable} ${inter.variable}`}
    >
      <body className="min-h-dvh bg-white antialiased">
        <StructuredData />
        <MetaPixelNoScript />
        <Nav />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
