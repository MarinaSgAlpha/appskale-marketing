import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { Button } from "@/components/ui/Button";
import { RadialGlow } from "@/components/ui/RadialGlow";
import { URLS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Apple Search Ads Attribution Setup Guide",
  description:
    "Step-by-step Apple Search Ads attribution guide. Connect ad spend to subscription revenue and see which keywords drive paying users.",
  alternates: {
    canonical: "/apple-search-ads-attribution-setup-guide",
  },
  openGraph: {
    title: "Apple Search Ads Attribution Setup Guide | AppSkale",
    description:
      "Step-by-step Apple Search Ads attribution guide. Connect ad spend to subscription revenue and see which keywords drive paying users.",
    url: "/apple-search-ads-attribution-setup-guide",
    type: "article",
  },
};

const APPLE_SEARCH_ADS_PUBLIC_KEY = `MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEIQKaSROKEZSXTyRZIyBhwSoY04x8
/GNCv3cyfsuNSeDV0UCKWbxDZljPo0DEWwDUeiw3wgTaFndxzwnR3s9qvQ`;

const WEBHOOK_URL = `https://api.appskale.ai/api/webhooks/revenuecat`;

const SDK_INSTALL = `Installation
You can install the AppSkale SDK using either CocoaPods or Swift Package Manager:

Option 1: CocoaPods
Add to your Podfile:
  pod 'AppSkaleSDK'
Then run in your Terminal:
  pod install

Option 2: Swift Package Manager (SPM)
1. In Xcode, go to File > Add Packages…
2. Enter the repository URL:
     https://github.com/appskale/appskale-sdk-ios
3. Select the latest version and target your project
4. Click "Add Package"`;

const APP_DELEGATE_CODE = `import AppSkaleSDK

@main
class AppDelegate: UIResponder, UIApplicationDelegate {

    func application(
        _ application: UIApplication,
        didFinishLaunchingWithOptions launchOptions:
            [UIApplication.LaunchOptionsKey: Any]?
    ) -> Bool {

        ApplicationDelegate.shared.application(
            application,
            didFinishLaunchingWithOptions: launchOptions
        )

        AppSkaleAttribution.shared.configure(
            apiKey: "YOUR_API_KEY_HERE"
        )

        return true
    }
}`;

const PURCHASE_CODE = `Purchases.shared.purchase(package: package) {
    (transaction, purchaserInfo, error, userCancelled) in

    // After successful purchase, track with AppSkale:
    if let transaction = transaction {
        let price = package.storeProduct.price as Decimal
        let currency = package.storeProduct.priceFormatter?
            .currencyCode ?? "USD"

        AppSkaleAttribution.shared.trackPurchase(
            transactionId: transaction.transactionIdentifier ?? "unknown",
            productId: package.storeProduct.productIdentifier,
            price: NSDecimalNumber(decimal: price).doubleValue,
            currency: currency
        )
    }
}`;

const tableOfContents = [
  { id: "api-credentials", label: "1. Apple Search Ads API credentials" },
  { id: "sdk-setup", label: "2. Configure your iOS app in AppSkale" },
  { id: "webhook", label: "3. Set up the RevenueCat webhook" },
  { id: "install-sdk", label: "4. Install the AppSkale SDK" },
  { id: "track-purchases", label: "5. Track purchases" },
];

function StepHeading({ id, eyebrow, children }: { id: string; eyebrow: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2
        id={id}
        className="scroll-mt-28 text-balance text-[28px] font-medium leading-[1.1] tracking-tight text-purple-900 sm:text-[36px]"
      >
        {children}
      </h2>
    </div>
  );
}

function SubHeading({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <h3
      id={id}
      className="scroll-mt-28 text-[20px] font-medium leading-snug tracking-tight text-purple-900 sm:text-[22px]"
    >
      {children}
    </h3>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[15.5px] leading-[1.65] text-purple-800/85 sm:text-[16px]">
      {children}
    </p>
  );
}

function OL({ children }: { children: React.ReactNode }) {
  return (
    <ol className="ml-5 list-decimal space-y-2 text-[15.5px] leading-[1.65] text-purple-800/85 marker:text-purple-400 sm:text-[16px]">
      {children}
    </ol>
  );
}

function UL({ children }: { children: React.ReactNode }) {
  return (
    <ul className="ml-5 list-disc space-y-2 text-[15.5px] leading-[1.65] text-purple-800/85 marker:text-purple-400 sm:text-[16px]">
      {children}
    </ul>
  );
}

function Callout({ tone = "info", children }: { tone?: "info" | "warning"; children: React.ReactNode }) {
  return (
    <div
      className={
        tone === "warning"
          ? "rounded-2xl border border-amber-200 bg-amber-50/80 p-4 text-[14.5px] leading-[1.6] text-amber-900 sm:p-5"
          : "rounded-2xl border border-purple-200 bg-purple-50/70 p-4 text-[14.5px] leading-[1.6] text-purple-900 sm:p-5"
      }
    >
      {children}
    </div>
  );
}

export default function SetupGuidePage() {
  return (
    <>
      {/* Hero */}
      <Section spacing="hero" tone="tinted" className="relative">
        <RadialGlow
          className="size-[700px] -top-32 left-1/2 -translate-x-1/2"
          color="purple"
          opacity={0.4}
          blur={140}
        />
        <Container className="relative z-10" size="narrow">
          <div className="flex flex-col items-center gap-6 text-center">
            <Eyebrow>Setup Guide</Eyebrow>
            <h1 className="text-balance text-[36px] font-medium leading-[1.05] tracking-tight text-purple-900 sm:text-[48px] md:text-[56px]">
              Apple Search Ads Attribution Setup Guide
            </h1>
            <p className="text-balance text-[16px] leading-[1.6] text-purple-800/80 sm:text-[17px]">
              This guide walks you through setting up Apple Search Ads
              attribution tracking with AppSkale. Once complete, you&apos;ll
              see exactly which keywords drive subscription revenue — not just
              installs. Setup takes about 10 minutes and requires an Apple
              Search Ads account, a RevenueCat account, and an iOS app live on
              the App Store.
            </p>
          </div>
        </Container>
      </Section>

      {/* Body */}
      <Section spacing="tight">
        <Container size="narrow">
          <div className="grid gap-12 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16">
            {/* TOC (sticky on desktop) */}
            <aside className="hidden lg:block">
              <nav
                aria-label="On this page"
                className="sticky top-28 flex flex-col gap-3"
              >
                <div className="text-[12px] font-semibold uppercase tracking-wider text-purple-400">
                  On this page
                </div>
                <ul className="flex flex-col gap-2">
                  {tableOfContents.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="block text-[14px] leading-snug text-purple-800/80 hover:text-purple-900"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            <article className="flex flex-col gap-16">
              {/* Step 1: API credentials */}
              <section className="flex flex-col gap-6">
                <StepHeading id="api-credentials" eyebrow="Step 1">
                  Generate Apple Search Ads API credentials
                </StepHeading>

                <P>
                  Apple Search Ads requires you to create a separate{" "}
                  <strong>API user</strong> account to generate credentials —
                  this is different from your regular login account. You&apos;ll
                  need to invite yourself using another email address you own
                  (or create one for this purpose).
                </P>

                <SubHeading id="invite-api-user">
                  Invite an API user
                </SubHeading>
                <OL>
                  <li>
                    In Apple Search Ads, go to{" "}
                    <strong>Settings → User Management</strong>.
                  </li>
                  <li>
                    Click <strong>Invite Users</strong>.
                  </li>
                  <li>Enter another email address you own.</li>
                  <li>
                    Set the role to{" "}
                    <strong>API Account — Read Only</strong>.
                  </li>
                </OL>

                <SubHeading id="account-id">Get your Account ID</SubHeading>
                <OL>
                  <li>
                    Go to{" "}
                    <a
                      href="https://searchads.apple.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-700 underline-offset-4 hover:underline"
                    >
                      searchads.apple.com
                    </a>{" "}
                    and log in with your main account.
                  </li>
                  <li>
                    Click your name in the top-right corner and look for{" "}
                    <strong>Account ID</strong> next to your organization name
                    (e.g. <code className="rounded bg-purple-100 px-1.5 py-0.5 font-mono text-[13px] text-purple-900">Account ID: 391139</code>).
                  </li>
                  <li>Copy this Account ID and paste it into the AppSkale form field.</li>
                </OL>

                <SubHeading id="generate-credentials">
                  Generate API credentials
                </SubHeading>
                <OL>
                  <li>Log out of your main Apple Search Ads account.</li>
                  <li>Log back in with your secondary email (the API account).</li>
                  <li>
                    Go to <strong>Settings → API</strong>.
                  </li>
                  <li>
                    Click <strong>Create Credential</strong> (or{" "}
                    <strong>Add Certificate</strong>).
                  </li>
                  <li>
                    When you see the <strong>Public Key</strong> field, paste
                    the key below:
                  </li>
                </OL>

                <CodeBlock language="text" filename="public-key.pem">
                  {APPLE_SEARCH_ADS_PUBLIC_KEY}
                </CodeBlock>

                <OL>
                  <li>
                    Click <strong>Generate</strong> (or{" "}
                    <strong>Create</strong>).
                  </li>
                </OL>

                <Callout tone="warning">
                  <strong>Critical:</strong> copy these three values
                  immediately — they&apos;re only shown once. Paste all three
                  into the AppSkale form:
                  <ul className="mt-2 ml-5 list-disc space-y-1">
                    <li>
                      <strong>Client ID</strong> (e.g. <code className="font-mono text-[13px]">SEARCHADS.abc123…</code>)
                    </li>
                    <li>
                      <strong>Team ID</strong> (e.g. <code className="font-mono text-[13px]">SEARCHADS.def456…</code>)
                    </li>
                    <li>
                      <strong>Key ID</strong> (e.g. <code className="font-mono text-[13px]">a1b2c3d4-5678…</code>)
                    </li>
                  </ul>
                  <p className="mt-3">
                    Then click <strong>Save &amp; Continue</strong>.
                  </p>
                </Callout>
              </section>

              {/* Step 2: SDK app setup */}
              <section className="flex flex-col gap-6">
                <StepHeading id="sdk-setup" eyebrow="Step 2">
                  Configure your iOS app in AppSkale
                </StepHeading>
                <P>
                  Next, add your iOS app to AppSkale so it can start tracking
                  attribution and revenue.
                </P>

                <SubHeading id="add-app">Add your app</SubHeading>
                <UL>
                  <li>
                    <strong>App Name *</strong> — the name of your app as it
                    appears in the App Store.
                  </li>
                  <li>
                    <strong>App Store URL *</strong> — your app&apos;s URL from
                    the App Store; must include the app ID. Format:{" "}
                    <code className="rounded bg-purple-100 px-1.5 py-0.5 font-mono text-[13px] text-purple-900">
                      https://apps.apple.com/us/app/your-app/id1234567890
                    </code>
                  </li>
                  <li>
                    <strong>Bundle ID *</strong> — your app&apos;s unique
                    identifier, found in Xcode or App Store Connect. Format:{" "}
                    <code className="rounded bg-purple-100 px-1.5 py-0.5 font-mono text-[13px] text-purple-900">
                      com.yourcompany.yourapp
                    </code>
                  </li>
                </UL>

                <Callout>
                  Once your app is added, you&apos;ll see a confirmation
                  message and your unique <strong>API key</strong>. Save it
                  somewhere secure — you&apos;ll need it for both SDK
                  integration and RevenueCat webhook authentication. Example
                  format:{" "}
                  <code className="font-mono text-[13px]">
                    appskale_abc123def456…
                  </code>
                </Callout>
              </section>

              {/* Step 3: RevenueCat webhook */}
              <section className="flex flex-col gap-6">
                <StepHeading id="webhook" eyebrow="Step 3">
                  Set up the RevenueCat webhook
                </StepHeading>
                <P>
                  The webhook is how RevenueCat tells AppSkale about real-time
                  purchases, renewals, and refunds — so we can attribute
                  revenue back to the keyword that drove each user.
                </P>

                <OL>
                  <li>
                    Go to{" "}
                    <a
                      href="https://app.revenuecat.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-700 underline-offset-4 hover:underline"
                    >
                      app.revenuecat.com
                    </a>{" "}
                    and navigate to <strong>Integrations → Webhooks</strong>.
                  </li>
                  <li>
                    Click <strong>+ Add</strong> (or{" "}
                    <strong>Add Webhook</strong>).
                  </li>
                  <li>Paste this Webhook URL:</li>
                </OL>

                <CodeBlock language="url">{WEBHOOK_URL}</CodeBlock>

                <OL>
                  <li>
                    <strong>Authorization Header Value:</strong> paste your
                    AppSkale API key directly — e.g.{" "}
                    <code className="font-mono text-[13px]">
                      appskale_abc123def456…
                    </code>
                  </li>
                  <li>
                    <strong>Environment:</strong> select both Production and
                    Sandbox.
                  </li>
                  <li>
                    <strong>Apps:</strong> select your app.{" "}
                    <strong>Events:</strong> select all events.
                  </li>
                  <li>
                    Click <strong>Save</strong>.
                  </li>
                </OL>
              </section>

              {/* Step 4: Install SDK */}
              <section className="flex flex-col gap-6">
                <StepHeading id="install-sdk" eyebrow="Step 4">
                  Install the AppSkale SDK
                </StepHeading>
                <P>
                  The SDK automatically tracks installs and retrieves Apple
                  Search Ads attribution data on device.
                </P>

                <CodeBlock language="shell" filename="Installation">
                  {SDK_INSTALL}
                </CodeBlock>

                <P>
                  After installing the SDK, add this code to your{" "}
                  <code className="rounded bg-purple-100 px-1.5 py-0.5 font-mono text-[13px] text-purple-900">
                    AppDelegate.swift
                  </code>{" "}
                  file:
                </P>

                <CodeBlock language="swift" filename="AppDelegate.swift">
                  {APP_DELEGATE_CODE}
                </CodeBlock>

                <Callout>
                  Replace <code className="font-mono text-[13px]">YOUR_API_KEY_HERE</code> with the
                  actual API key from the setup page.
                </Callout>
              </section>

              {/* Step 5: Track purchases */}
              <section className="flex flex-col gap-6">
                <StepHeading id="track-purchases" eyebrow="Step 5">
                  Track purchases
                </StepHeading>
                <P>
                  Add this code wherever you handle successful purchases —
                  typically inside your RevenueCat purchase completion
                  handler:
                </P>

                <CodeBlock language="swift" filename="PurchaseHandler.swift">
                  {PURCHASE_CODE}
                </CodeBlock>

                <Callout>
                  <strong>That&apos;s it!</strong> The SDK automatically
                  tracks app installs, retrieves Apple Search Ads attribution
                  data, and links every purchase back to the keyword that
                  drove it.
                </Callout>
              </section>

              {/* CTA */}
              <section className="rounded-3xl border border-purple-200 bg-white p-8 text-center shadow-[0_8px_24px_-12px_rgba(39,31,54,0.12)] sm:p-10">
                <h2 className="text-balance text-[24px] font-medium leading-tight tracking-tight text-purple-900 sm:text-[28px]">
                  Need a hand?
                </h2>
                <p className="mx-auto mt-3 max-w-md text-[15px] leading-[1.6] text-purple-800/80">
                  If you get stuck on any step, email{" "}
                  <a
                    href="mailto:support@appskale.ai"
                    className="text-purple-700 underline-offset-4 hover:underline"
                  >
                    support@appskale.ai
                  </a>{" "}
                  and we&apos;ll walk you through it.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <Button href={URLS.signup} showArrow>
                    Get Started Free
                  </Button>
                  <Button href="/contact" variant="secondary">
                    Contact us
                  </Button>
                </div>
              </section>

              <div>
                <Link
                  href="/"
                  className="text-[14px] text-purple-700 underline-offset-4 hover:underline"
                >
                  ← Back to home
                </Link>
              </div>
            </article>
          </div>
        </Container>
      </Section>
    </>
  );
}
