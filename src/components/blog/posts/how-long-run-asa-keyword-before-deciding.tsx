import {
  A,
  H2,
  LI,
  OL,
  P,
  Strong,
  UL,
} from "@/components/blog/Prose";

export function HowLongRunAsaKeywordBeforeDecidingBody() {
  return (
    <>
      <P>
        A keyword spends for three days. No trials. You pause it. A week later
        you realize the sample was tiny and the trial window had not even
        started. Or the opposite: you leave a dead term running for a month
        because you wanted &ldquo;more data.&rdquo;
      </P>
      <P>
        Timing is part of keyword judgment. This post gives a practical wait
        window for indie Apple Search Ads accounts before you pause, keep, or
        scale.
      </P>

      <H2>Decide on evidence, not calendar anxiety</H2>
      <P>
        You need two clocks:
      </P>
      <UL>
        <LI>
          <Strong>Auction sample clock.</Strong>{" "}Enough taps and spend that the
          keyword was actually tested.
        </LI>
        <LI>
          <Strong>Conversion clock.</Strong>{" "}Enough calendar time for installs
          to become trials and trials to become paid.
        </LI>
      </UL>
      <P>
        Either clock alone lies. Spend without time misses delayed revenue. Time
        without spend is just waiting on an empty keyword. See{" "}
        <A href="/blog/trial-started-roas-didnt-move">
          trial started, ROAS didn&rsquo;t move
        </A>{" "}
        and{" "}
        <A href="/blog/apple-search-ads-daily-budget">
          daily budget
        </A>
        .
      </P>

      <H2>A practical timeline for Exact keywords</H2>
      <OL>
        <LI>
          <Strong>Days 1&ndash;3:</Strong>{" "}Confirm delivery. If a term gets
          almost no impressions on a reasonable CPT, the problem may be bid or
          volume, not conversion. See{" "}
          <A href="/blog/max-cpt-bidding-apple-search-ads">
            max CPT bidding
          </A>
          .
        </LI>
        <LI>
          <Strong>Days 4&ndash;14:</Strong>{" "}Look for trial starts and obvious
          intent mismatches in search terms. Pause clear junk early. See{" "}
          <A href="/blog/apple-search-ads-search-terms-report">
            search terms report
          </A>
          .
        </LI>
        <LI>
          <Strong>After one full trial cycle:</Strong>{" "}Make keep/pause/scale
          calls using trials and early revenue, not CPI vanity. See{" "}
          <A href="/blog/cpt-vs-cpi-apple-search-ads">
            CPT vs CPI
          </A>
          .
        </LI>
        <LI>
          <Strong>After 30&ndash;60 days:</Strong>{" "}Re-check ROAS including
          conversions that lagged. That is when scale decisions get serious.
        </LI>
      </OL>
      <P>
        For a seven-day trial, do not declare ROAS failure on day five. For a
        thirty-day trial, push every phase later.
      </P>

      <H2>Pause earlier when intent is obviously wrong</H2>
      <P>
        You do not need a full trial cycle to negative android queries on an
        iOS-only app, or job-seeker terms on a consumer tool. Obvious mismatches
        can die as soon as they show repeated waste. See{" "}
        <A href="/blog/apple-search-ads-negative-keywords">
          negative keywords
        </A>{" "}
        and{" "}
        <A href="/blog/pause-vs-lower-bids-apple-search-ads">
          pause vs lower bids
        </A>
        .
      </P>
      <P>
        The rule: pause early for bad intent. Wait longer for uncertain
        economics on plausible intent.
      </P>

      <H2>What &ldquo;enough sample&rdquo; means on a small budget</H2>
      <P>
        Indie accounts rarely get enterprise sample sizes. Use relative
        judgment:
      </P>
      <UL>
        <LI>
          A keyword with meaningful spend versus your daily cap and zero trials
          after two weeks is usually enough to pause
        </LI>
        <LI>
          A keyword with three taps is not enough to crown or kill
        </LI>
        <LI>
          Brand can often be judged faster than category because intent is
          cleaner
        </LI>
        <LI>
          Broad and discovery need search-term harvest, not a single keyword
          average. See{" "}
          <A href="/blog/apple-search-ads-discovery-campaigns">
            discovery campaigns
          </A>
          .
        </LI>
      </UL>

      <H2>A weekly decision checklist</H2>
      <OL>
        <LI>
          Sort by spend.
        </LI>
        <LI>
          Mark obvious waste for pause or negative.
        </LI>
        <LI>
          Leave low-sample rows alone.
        </LI>
        <LI>
          For high-spend plausible terms, check whether you are still inside the
          trial window.
        </LI>
        <LI>
          Only then pause, bid-cut, or raise budget.
        </LI>
      </OL>
      <P>
        Native ASA will not show subscription lag cleanly beside those rows.{" "}
        <A href="https://appskale.ai/">AppSkale</A>{" "}puts keyword spend next to
        RevenueCat revenue so wait-vs-kill decisions follow paying users.
      </P>

      <H2>Where to go next</H2>
      <P>
        Give keywords enough auction sample and enough conversion time. Kill
        bad intent early. Judge economics after your trial cycle, not after a
        panic Monday.
      </P>
      <P>
        Related reading:{" "}
        <A href="/blog/apple-search-ads-for-beginners">
          ASA for beginners
        </A>
        ,{" "}
        <A href="/blog/how-to-calculate-apple-search-ads-roas-with-revenuecat">
          ROAS with RevenueCat
        </A>
        , and the{" "}
        <A href="/apple-search-ads-attribution-setup-guide">
          attribution setup guide
        </A>
        . When you want those clocks on one screen,{" "}
        <A href="https://appskale.ai/">AppSkale</A> connects ASA to RevenueCat.
      </P>
    </>
  );
}
