import {
  A,
  H2,
  LI,
  OL,
  P,
  Strong,
  UL,
} from "@/components/blog/Prose";

export function AsaSubscriptionVsOneTimePurchaseBody() {
  return (
    <>
      <P>
        Apple Search Ads advice often assumes subscriptions. If your app is a
        one-time purchase, some of that advice still holds and some of it will
        waste your time. The auction is the same. The payback math is not.
      </P>
      <P>
        This post compares how ASA learning differs for subscription apps versus
        paid or one-time IAP apps, and which metrics each model should trust.
      </P>

      <H2>What stays the same</H2>
      <UL>
        <LI>
          Exact brand defense still comes first
        </LI>
        <LI>
          Long-tail category beats head terms while learning
        </LI>
        <LI>
          Search Match and Broad can pollute signal. See{" "}
          <A href="/blog/search-match-eating-your-budget">
            Search Match
          </A>{" "}
          and{" "}
          <A href="/blog/exact-vs-broad-match-apple-search-ads">
            Exact vs Broad
          </A>
          .
        </LI>
        <LI>
          Structure still matters: separate brand and category. See{" "}
          <A href="/blog/ad-groups-vs-campaigns-apple-search-ads">
            ad groups vs campaigns
          </A>
          .
        </LI>
      </UL>
      <P>
        The channel mechanics do not change because your price box changed.
      </P>

      <H2>What changes for subscriptions</H2>
      <P>
        Subscriptions delay revenue. Trials create a lag between spend and ROAS.
        CPI becomes especially misleading. You need cohort patience and revenue
        joined to keywords. See{" "}
        <A href="/blog/trial-started-roas-didnt-move">
          trial ROAS lag
        </A>{" "}
        and{" "}
        <A href="/blog/asa-cpi-great-paywall-conversion-terrible">
          paywall conversion
        </A>
        .
      </P>
      <P>
        Decision metric: revenue or ROAS by keyword over a window that includes
        trial conversion and ideally early renewals.
      </P>

      <H2>What changes for one-time purchase</H2>
      <P>
        Paid apps and one-time unlocks usually get faster feedback. If someone
        buys, revenue often lands closer to the install. That means:
      </P>
      <UL>
        <LI>
          You can often judge keywords sooner than a seven- or thirty-day trial
          app
        </LI>
        <LI>
          Purchase conversion rate and revenue per install matter more than
          trial-start proxies
        </LI>
        <LI>
          Refunds and chargebacks still exist, but the lag shape is different
        </LI>
      </UL>
      <P>
        CPT and CPI remain diagnostics. They still are not the scoreboard. See{" "}
        <A href="/blog/cpt-vs-cpi-apple-search-ads">
          CPT vs CPI
        </A>
        .
      </P>

      <H2>Budget and patience by model</H2>
      <UL>
        <LI>
          <Strong>Subscriptions:</Strong>{" "}need runway through the trial cycle
          before scale calls. See{" "}
          <A href="/blog/apple-search-ads-daily-budget">
            daily budget
          </A>{" "}
          and{" "}
          <A href="/blog/how-long-run-asa-keyword-before-deciding">
            how long to run a keyword
          </A>
          .
        </LI>
        <LI>
          <Strong>One-time purchase:</Strong>{" "}can often run a shorter learning
          loop, but still needs enough sample per keyword. Do not pause after
          two taps.
        </LI>
      </UL>
      <P>
        Both models fail the same beginner way: too many keywords, expansion on,
        no search-term harvest. See{" "}
        <A href="/blog/how-many-keywords-apple-search-ads">
          how many keywords
        </A>{" "}
        and the{" "}
        <A href="/blog/apple-search-ads-search-terms-report">
          search terms report
        </A>
        .
      </P>

      <H2>Measurement checklist</H2>
      <OL>
        <LI>
          Connect attribution before scaling. Use the{" "}
          <A href="/apple-search-ads-attribution-setup-guide">
            setup guide
          </A>
          .
        </LI>
        <LI>
          For subscriptions, join RevenueCat revenue to keywords. See{" "}
          <A href="/blog/how-to-calculate-apple-search-ads-roas-with-revenuecat">
            ROAS with RevenueCat
          </A>
          .
        </LI>
        <LI>
          For one-time purchase, still judge by revenue per keyword, not install
          count.
        </LI>
        <LI>
          Keep Exact learning clean until the model&rsquo;s conversion event is
          measurable.
        </LI>
      </OL>
      <P>
        <A href="https://appskale.ai/">AppSkale</A>{" "}focuses on the subscription
        case: ASA spend beside RevenueCat revenue. The operating lesson is the
        same for paid apps: optimize the money event, not the download.
      </P>

      <H2>Where to go next</H2>
      <P>
        Same channel. Different payback clocks. Subscriptions need lag-aware
        ROAS. One-time purchases can decide faster, but both need keyword-level
        revenue discipline.
      </P>
      <P>
        Start with{" "}
        <A href="/blog/apple-search-ads-for-beginners">
          ASA for beginners
        </A>{" "}
        and{" "}
        <A href="/blog/brand-vs-category-keywords-first-500">
          the first $500 split
        </A>
        . When subscription revenue is the goal,{" "}
        <A href="https://appskale.ai/">AppSkale</A> connects Apple Search Ads to
        RevenueCat.
      </P>
    </>
  );
}
