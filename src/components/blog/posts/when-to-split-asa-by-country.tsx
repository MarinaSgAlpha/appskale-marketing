import {
  A,
  H2,
  LI,
  OL,
  P,
  Strong,
  UL,
} from "@/components/blog/Prose";

export function WhenToSplitAsaByCountryBody() {
  return (
    <>
      <P>
        Multi-country Apple Search Ads feels like growth. One campaign, many
        storefronts, same keywords. Then blended ROAS looks mediocre, and you
        cannot tell whether the US is funding Brazil or the reverse.
      </P>
      <P>
        Splitting by country too early creates admin. Waiting too long hides
        real economics. This post covers when one storefront is enough, and when
        country splits become worth the complexity.
      </P>

      <H2>Start with one storefront</H2>
      <P>
        For a first learning phase, one country is usually enough:
      </P>
      <UL>
        <LI>
          Cleaner CPT and conversion baselines
        </LI>
        <LI>
          Easier daily budget control. See{" "}
          <A href="/blog/apple-search-ads-daily-budget">
            daily budget
          </A>
          .
        </LI>
        <LI>
          Keyword lessons you can actually read. See{" "}
          <A href="/blog/how-many-keywords-apple-search-ads">
            how many keywords
          </A>
          .
        </LI>
      </UL>
      <P>
        The US is a common first storefront for English indie apps, but only if
        that is where your users and pricing already make sense. Prove Exact
        brand and long-tail there first. See{" "}
        <A href="/blog/brand-vs-category-keywords-first-500">
          first $500 split
        </A>
        .
      </P>

      <H2>Why blended countries lie</H2>
      <P>
        The same keyword can have different CPT, trial rates, and LTV by
        storefront. Blended ROAS averages a winner and a loser into a shrug.
        That is the same averaging problem as keywords, one layer deeper. The
        deeper cut is in{" "}
        <A href="/blog/apple-search-ads-roas-by-country">
          ROAS by country
        </A>
        .
      </P>
      <P>
        If you optimize bids on a blended account, you may raise spend in the
        expensive market that looks &ldquo;busy&rdquo; while the profitable
        market stays capped.
      </P>

      <H2>When to split</H2>
      <UL>
        <LI>
          <Strong>You have a clear home-market baseline.</Strong>{" "}Exact learning
          already produced keep/pause decisions in one country.
        </LI>
        <LI>
          <Strong>A second market has real demand.</Strong>{" "}Organic users,
          localized listing, or support capacity already exist.
        </LI>
        <LI>
          <Strong>Pricing or LTV likely differs.</Strong>{" "}Purchasing power and
          trial behavior are not identical everywhere.
        </LI>
        <LI>
          <Strong>You can fund both without starving either.</Strong>{" "}Two thin
          budgets are worse than one solid test. See{" "}
          <A href="/blog/ad-groups-vs-campaigns-apple-search-ads">
            ad groups vs campaigns
          </A>
          .
        </LI>
      </UL>

      <H2>How to split without making a mess</H2>
      <OL>
        <LI>
          Separate campaigns by country or country group.
        </LI>
        <LI>
          Copy only proven Exact themes first, not your entire discovery mess.
        </LI>
        <LI>
          Recheck search terms per market. Language and intent shift. See{" "}
          <A href="/blog/apple-search-ads-search-terms-report">
            search terms report
          </A>
          .
        </LI>
        <LI>
          Judge each market on its own revenue timeline. Trial lag still
          applies. See{" "}
          <A href="/blog/trial-started-roas-didnt-move">
            trial ROAS lag
          </A>
          .
        </LI>
        <LI>
          Do not chase impression share across every storefront at once. See{" "}
          <A href="/blog/apple-search-ads-impression-share">
            impression share
          </A>
          .
        </LI>
      </OL>

      <H2>A simple default</H2>
      <P>
        One storefront until Exact keywords produce signal. Then add a second
        market with its own budget and reporting. Expand only markets that pay.
        Skip the vanity of &ldquo;we run 20 countries&rdquo; while none of them
        have a readable ROAS story.
      </P>
      <P>
        <A href="https://appskale.ai/">AppSkale</A>{" "}is built for this layer:
        keyword spend next to RevenueCat revenue, including country slices, so
        blended averages stop hiding the truth.
      </P>

      <H2>Where to go next</H2>
      <P>
        Country splits are a scaling step, not a day-one setup flex. Learn in
        one market. Split when demand, budget, and measurement can support it.
      </P>
      <P>
        Related:{" "}
        <A href="/blog/apple-search-ads-roas-by-country">
          ROAS by country
        </A>
        ,{" "}
        <A href="/blog/how-to-calculate-apple-search-ads-roas-with-revenuecat">
          ROAS with RevenueCat
        </A>
        , and the{" "}
        <A href="/apple-search-ads-attribution-setup-guide">
          attribution setup guide
        </A>
        . When you want keyword-level revenue by country,{" "}
        <A href="https://appskale.ai/">AppSkale</A> connects ASA to RevenueCat.
      </P>
    </>
  );
}
