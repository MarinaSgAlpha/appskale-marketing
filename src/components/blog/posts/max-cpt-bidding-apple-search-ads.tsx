import {
  A,
  H2,
  LI,
  OL,
  P,
  Strong,
  UL,
} from "@/components/blog/Prose";

export function MaxCptBiddingAppleSearchAdsBody() {
  return (
    <>
      <P>
        Max CPT is the number that feels most like a decision. Set it too low
        and nothing spends. Set it too high and you overpay for the first week
        of learning. Most beginners pick a round number, watch average CPT hug
        the ceiling, and still do not know if the bid was the problem.
      </P>
      <P>
        Your max CPT is a ceiling, not a goal. This post covers how to set it
        for a first test, when to raise it, and how to avoid confusing bid
        pressure with bad keywords.
      </P>

      <H2>What max CPT actually controls</H2>
      <P>
        Max CPT is the most you are willing to pay for a tap on that keyword or
        ad group default. Apple may charge less. It should not charge more than
        your max for that auction setup.
      </P>
      <P>
        If average CPT sits far below max, you often have room. If average CPT
        sticks to the max and volume is thin, you may be losing auctions. That
        still does not mean the keyword deserves a higher bid. It means the
        auction is expensive relative to your ceiling. See{" "}
        <A href="/blog/cpt-vs-cpi-apple-search-ads">
          CPT vs CPI
        </A>{" "}
        for how tap cost relates to installs.
      </P>

      <H2>A practical starting approach</H2>
      <P>
        For indie learning campaigns:
      </P>
      <UL>
        <LI>
          <Strong>Brand Exact:</Strong>{" "}start competitive enough to win your
          own name. Brand is usually cheaper and higher intent. Do not underbid
          yourself into absence.
        </LI>
        <LI>
          <Strong>Long-tail category Exact:</Strong>{" "}start modest, then adjust
          from delivery and conversion, not from fear of missing head-term
          auctions.
        </LI>
        <LI>
          <Strong>One storefront first.</Strong>{" "}CPT norms differ by country.
          Mixing geos muddies the bid lesson.
        </LI>
        <LI>
          <Strong>Keep the list short.</Strong>{" "}You cannot tune max CPT across
          fifty starved keywords. See{" "}
          <A href="/blog/how-many-keywords-apple-search-ads">
            how many keywords you should run
          </A>
          .
        </LI>
      </UL>
      <P>
        Exact match first. Broad and Search Match make CPT harder to interpret
        because the query mix shifts under you. See{" "}
        <A href="/blog/exact-vs-broad-match-apple-search-ads">
          Exact vs Broad
        </A>{" "}
        and{" "}
        <A href="/blog/search-match-eating-your-budget">
          Search Match
        </A>
        .
      </P>

      <H2>When to raise max CPT</H2>
      <UL>
        <LI>
          <Strong>Brand is barely showing and competitors can take the slot.</Strong>{" "}
          Defense matters.
        </LI>
        <LI>
          <Strong>A keyword already produces trials or revenue and looks bid-limited.</Strong>{" "}
          Raise carefully and remeasure.
        </LI>
        <LI>
          <Strong>Daily budget is not the bottleneck.</Strong>{" "}If the daily cap
          is exhausted early, raising CPT can burn the day faster without more
          learning. Fix{" "}
          <A href="/blog/apple-search-ads-daily-budget">
            daily budget
          </A>{" "}
          allocation first.
        </LI>
      </UL>
      <P>
        Do not raise CPT because impression share looks low on an unproven term.
        That trap is covered in{" "}
        <A href="/blog/apple-search-ads-impression-share">
          impression share
        </A>
        .
      </P>

      <H2>When to leave it alone or lower it</H2>
      <UL>
        <LI>
          Spend with installs but no trials after a fair sample
        </LI>
        <LI>
          Search terms show junk intent riding a high ceiling
        </LI>
        <LI>
          Average CPT is fine but the paywall does not convert. Bidding harder
          will not fix the funnel. See{" "}
          <A href="/blog/asa-cpi-great-paywall-conversion-terrible">
            paywall conversion
          </A>
          .
        </LI>
        <LI>
          You are still inside the trial lag and panicking on early ROAS. See{" "}
          <A href="/blog/trial-started-roas-didnt-move">
            trial started, ROAS didn&rsquo;t move
          </A>
          .
        </LI>
      </UL>

      <H2>A simple bid review cadence</H2>
      <OL>
        <LI>
          Weekly, not hourly.
        </LI>
        <LI>
          Sort by spend and revenue or trial starts first.
        </LI>
        <LI>
          Check whether winners are budget-limited or bid-limited.
        </LI>
        <LI>
          Change one lever at a time: CPT or daily budget, not both on every
          keyword the same day.
        </LI>
        <LI>
          Read{" "}
          <A href="/blog/apple-search-ads-search-terms-report">
            search terms
          </A>{" "}
          before blaming the bid for Broad or Search Match waste.
        </LI>
      </OL>
      <P>
        Native ASA reports show CPT pressure. They do not show whether a higher
        bid bought subscribers.{" "}
        <A href="https://appskale.ai/">AppSkale</A>{" "}ties keyword spend to
        RevenueCat revenue so bid changes follow outcomes.
      </P>

      <H2>Where to go next</H2>
      <P>
        Set max CPT high enough for brand defense and for Exact long-tail terms
        to deliver, then adjust from conversion evidence. The ceiling is a
        control. Profit is still revenue per keyword.
      </P>
      <P>
        For beginners, start with{" "}
        <A href="/blog/apple-search-ads-for-beginners">
          Apple Search Ads for beginners
        </A>{" "}
        and{" "}
        <A href="/blog/brand-vs-category-keywords-first-500">
          the first $500 split
        </A>
        . For attribution, use the{" "}
        <A href="/apple-search-ads-attribution-setup-guide">
          setup guide
        </A>
        . When you want bids judged by paying users,{" "}
        <A href="https://appskale.ai/">AppSkale</A> connects ASA to RevenueCat.
      </P>
    </>
  );
}
