import {
  A,
  H2,
  LI,
  OL,
  P,
  Strong,
  UL,
} from "@/components/blog/Prose";

export function AppleSearchAdsImpressionShareBody() {
  return (
    <>
      <P>
        Impression share looks like a simple score: how often your ad showed
        when it could have. Beginners see a low percentage and raise bids.
        Sometimes that helps. Sometimes you just pay more for the same weak
        intent.
      </P>
      <P>
        Impression share is a coverage metric, not a profit metric. This post
        explains what it means in Apple Search Ads, when to care, and when to
        leave it alone.
      </P>

      <H2>What impression share is telling you</H2>
      <P>
        Impression share is roughly the share of eligible impressions your ad
        received for a keyword or campaign versus the impressions available in
        the auction you qualified for. Low share means you are missing
        impressions. High share means you are present for most of the eligible
        volume.
      </P>
      <P>
        Missing impressions can come from bid pressure, budget caps, low rank,
        or limited eligibility. The metric does not tell you which cause is
        dominant by itself, and it never tells you whether those missing
        impressions would have become paying users.
      </P>

      <H2>When low impression share matters</H2>
      <UL>
        <LI>
          <Strong>Brand Exact is low.</Strong>{" "}If people search your app name
          and you are often absent, competitors can sit on your demand. Fix
          brand defense first. See{" "}
          <A href="/blog/brand-vs-category-keywords-first-500">
            brand vs category keywords
          </A>
          .
        </LI>
        <LI>
          <Strong>A proven revenue keyword is capped.</Strong>{" "}If a term already
          produces trials or paid conversions and share is low because of
          budget, raising the daily cap can make sense. See{" "}
          <A href="/blog/apple-search-ads-daily-budget">
            daily budget
          </A>
          .
        </LI>
        <LI>
          <Strong>You are clearly losing auctions on a winner.</Strong>{" "}CPT is
          pinned at max and volume stalled while ROAS still looks healthy. Then
          bid tests are worth it. See{" "}
          <A href="/blog/cpt-vs-cpi-apple-search-ads">
            CPT vs CPI
          </A>
          .
        </LI>
      </UL>

      <H2>When low impression share is a trap</H2>
      <UL>
        <LI>
          <Strong>Head category terms you should not own yet.</Strong>{" "}Low share
          on &ldquo;notes app&rdquo; is normal for an indie budget. Chasing 80%
          share there is how learning money disappears.
        </LI>
        <LI>
          <Strong>Competitor names you have not validated.</Strong>{" "}Low share on
          conquest keywords is not an emergency. See{" "}
          <A href="/blog/competitor-keywords-apple-search-ads">
            competitor keywords
          </A>
          .
        </LI>
        <LI>
          <Strong>Discovery and Search Match noise.</Strong>{" "}Expanding coverage
          of bad queries raises share of the wrong inventory. See{" "}
          <A href="/blog/search-match-eating-your-budget">
            Search Match
          </A>{" "}
          and{" "}
          <A href="/blog/apple-search-ads-discovery-campaigns">
            discovery campaigns
          </A>
          .
        </LI>
        <LI>
          <Strong>Any keyword without revenue signal.</Strong>{" "}Buying more
          impressions of a non-converting term just scales the mistake.
        </LI>
      </UL>

      <H2>How to use it in a weekly review</H2>
      <OL>
        <LI>
          Start with keywords that already have trials or revenue.
        </LI>
        <LI>
          Check whether those winners look budget-limited or bid-limited.
        </LI>
        <LI>
          Ignore low share on unproven or head terms.
        </LI>
        <LI>
          Raise budget or CPT only on terms that pay, not on terms that merely
          have room to spend more.
        </LI>
        <LI>
          Recheck after one trial conversion window before another raise. See{" "}
          <A href="/blog/trial-started-roas-didnt-move">
            trial started, ROAS didn&rsquo;t move
          </A>
          .
        </LI>
      </OL>

      <H2>Impression share vs the metrics that decide</H2>
      <P>
        Rank the questions in this order:
      </P>
      <OL>
        <LI>
          Does this keyword produce revenue or strong trial starts?
        </LI>
        <LI>
          Is CPI or funnel conversion acceptable for that intent?
        </LI>
        <LI>
          Only then: am I missing eligible impressions I would actually want?
        </LI>
      </OL>
      <P>
        Impression share sits at step three. Skipping ahead is how accounts get
        expensive without getting smarter.
      </P>
      <P>
        The ASA dashboard can show share and auction pressure. It will not show
        subscription revenue beside those keywords.{" "}
        <A href="https://appskale.ai/">AppSkale</A>{" "}joins spend to RevenueCat
        so you raise coverage on winners, not on vanity share.
      </P>

      <H2>Where to go next</H2>
      <P>
        Care about impression share on brand defense and proven revenue
        keywords. Ignore it as a reason to bid up unproven category heads. Coverage
        without conversion is just a more complete way to lose money.
      </P>
      <P>
        For setup and measurement, use the{" "}
        <A href="/apple-search-ads-attribution-setup-guide">
          attribution setup guide
        </A>{" "}
        and{" "}
        <A href="/blog/how-to-calculate-apple-search-ads-roas-with-revenuecat">
          ROAS with RevenueCat
        </A>
        . For foundation structure, read{" "}
        <A href="/blog/exact-vs-broad-match-apple-search-ads">
          Exact vs Broad
        </A>
        . When you want keyword revenue next to auction metrics,{" "}
        <A href="https://appskale.ai/">AppSkale</A> connects Apple Search Ads to
        RevenueCat.
      </P>
    </>
  );
}
