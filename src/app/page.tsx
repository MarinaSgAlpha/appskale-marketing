import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { FeatureRow } from "@/components/sections/FeatureRow";
import { Testimonials } from "@/components/sections/Testimonials";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FAQ } from "@/components/sections/FAQ";
import { URLS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Apple Search Ads analytics & keyword ROAS",
  description:
    "The Apple Search Ads analytics platform to track conversions and ROAS. AppSkale provides keyword-level LTV and revenue data, so you see which campaigns drive real subscriptions—not just installs.",
  verification: {
    google: "QOn0T33XujIhb9VPPTmAYUpQ-zALQWMG5a6O3WK2264",
  },
};

export default function Home() {
  return (
    <>
      <Hero />

      <FeatureRow
        eyebrow="Real-time conversion tracking"
        title={
          <>
            Your best keyword in Canada
            <br />
            might be your worst in the US.
          </>
        }
        body={
          <p>
            Apple shows you country-level performance, but not keyword-level ROI
            by country. So you don&apos;t know which specific keywords to scale
            in Canada vs which to pause. AppSkale shows you keyword performance
            by country, so you can scale the right keywords in the right
            regions.
          </p>
        }
        imageSrc="/images/feature-countries.webp"
        imageAlt="Spreadsheet showing per-app, per-country Apple Search Ads ROI calculations"
        imageWidth={2048}
        imageHeight={1336}
        imagePosition="left"
        glowColor="purple"
        cta={{ label: "Get Started Free", href: URLS.signup }}
      />

      <FeatureRow
        eyebrow="REVENUECAT + APPLE SEARCH ADS"
        title={<>Stop calculating LTV in spreadsheets</>}
        body={
          <p>
            Most app developers export Apple Search Ads data and RevenueCat
            transactions, then spend hours matching purchases to keywords in
            spreadsheets. Even then, you&apos;re working with approximations and
            can&apos;t easily slice the data different ways. AppSkale
            automatically tracks every subscription back to its keyword,
            campaign, and country. Want to see 30-day LTV by keyword? 90-day
            LTV by country? Revenue from a specific campaign last month? Just
            filter and view - no formulas, no pivot tables, no manual work. See
            keyword-level LTV across any time range, compare campaign
            performance by country, track cohort retention automatically. The
            data updates in real-time as purchases happen. Connect Apple Search
            Ads and RevenueCat once. Setup takes 20 minutes, then attribution
            runs automatically forever.
          </p>
        }
        imageSrc="/images/feature-ltv.webp"
        imageAlt="AppSkale LTV Analytics card showing average LTV, total subscribers, total revenue, and weekly cohort retention"
        imageWidth={2048}
        imageHeight={1426}
        imagePosition="right"
        glowColor="pink"
        cta={{ label: "Get Started Free", href: URLS.signup }}
      />

      <Testimonials />
      <HowItWorks />
      <FAQ />
    </>
  );
}
