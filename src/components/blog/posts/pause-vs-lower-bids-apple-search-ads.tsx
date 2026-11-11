import {
  A,
  H2,
  LI,
  OL,
  P,
  Strong,
  UL,
} from "@/components/blog/Prose";

export function PauseVsLowerBidsAppleSearchAdsBody() {
  return (
    <>
      <P>
        A keyword spends. Results look soft. Do you pause it, lower the max CPT,
        or wait? Beginners often do all three in the same week and learn nothing.
      </P>
      <P>
        Pause and bid cuts are different tools. One removes the keyword from the
        auction. The other keeps it alive at a cheaper ceiling. This post is a
        decision guide for when each move is right.
      </P>

      <H2>Pause when the intent is wrong</H2>
      <P>
        Pause when the evidence says this query or keyword should not buy more
        traffic right now:
      </P>
      <UL>
        <LI>
          Meaningful spend and installs with zero trial starts after a fair
          sample
        </LI>
        <LI>
          Search terms show clear mismatches: wrong platform, jobs, free-only
          hunters, unrelated themes. Negative them too. See{" "}
          <A href="/blog/apple-search-ads-negative-keywords">
            negative keywords
          </A>{" "}
          and the{" "}
          <A href="/blog/apple-search-ads-search-terms-report">
            search terms report
          </A>
          .
        </LI>
        <LI>
          Competitor conquest that failed the revenue test. See{" "}
          <A href="/blog/competitor-keywords-apple-search-ads">
            competitor keywords
          </A>
          .
        </LI>
        <LI>
          Head terms you added too early and cannot afford to learn yet. See{" "}
          <A href="/blog/brand-vs-category-keywords-first-500">
            brand vs category
          </A>
          .
        </LI>
      </UL>
      <P>
        Pausing is not failure. It is refusing to keep paying for an answer you
        already have.
      </P>

      <H2>Lower bids when the keyword might still be right</H2>
      <P>
        Cut max CPT when the intent still looks plausible but the price looks
        wrong:
      </P>
      <UL>
        <LI>
          Trials or early revenue exist, but CPT climbed and payback looks
          stretched
        </LI>
        <LI>
          Average CPT is pinned to max and you are overpaying relative to similar
          long-tail winners
        </LI>
        <LI>
          You want less volume without deleting the learning history
        </LI>
      </UL>
      <P>
        Lowering bids keeps the keyword in play. That is useful when you are
        tuning economics, not rejecting the query. Bid mechanics are covered in{" "}
        <A href="/blog/max-cpt-bidding-apple-search-ads">
          max CPT bidding
        </A>{" "}
        and{" "}
        <A href="/blog/cpt-vs-cpi-apple-search-ads">
          CPT vs CPI
        </A>
        .
      </P>

      <H2>Wait when the data is incomplete</H2>
      <P>
        Do neither when you are still inside the conversion lag or the sample is
        tiny:
      </P>
      <UL>
        <LI>
          Trials are starting and ROAS is flat inside the trial window. See{" "}
          <A href="/blog/trial-started-roas-didnt-move">
            trial started, ROAS didn&rsquo;t move
          </A>
          .
        </LI>
        <LI>
          A keyword has a handful of taps and no pattern yet
        </LI>
        <LI>
          Daily budget is so thin the term never got a fair sample. See{" "}
          <A href="/blog/apple-search-ads-daily-budget">
            daily budget
          </A>
          .
        </LI>
        <LI>
          Organic converts poorly too, so the issue may be the funnel, not the
          keyword. See{" "}
          <A href="/blog/asa-cpi-great-paywall-conversion-terrible">
            paywall conversion
          </A>
          .
        </LI>
      </UL>

      <H2>A simple decision rule</H2>
      <OL>
        <LI>
          <Strong>Wrong intent or clear waste:</Strong>{" "}pause and negative.
        </LI>
        <LI>
          <Strong>Right intent, bad price:</Strong>{" "}lower max CPT.
        </LI>
        <LI>
          <Strong>Right intent, budget-starved winner:</Strong>{" "}raise budget
          or CPT carefully, do not pause.
        </LI>
        <LI>
          <Strong>Not enough evidence:</Strong>{" "}wait through the sample and
          trial window.
        </LI>
      </OL>
      <P>
        Avoid the hybrid panic move: pause, unpause, cut bid, raise bid, add
        Broad, all before one clean week finishes. Structure the account so
        these decisions are local. See{" "}
        <A href="/blog/ad-groups-vs-campaigns-apple-search-ads">
          ad groups vs campaigns
        </A>
        .
      </P>

      <H2>Weekly workflow</H2>
      <OL>
        <LI>
          Sort keywords by spend.
        </LI>
        <LI>
          Check trials and revenue first.
        </LI>
        <LI>
          Open search terms for expensive soft performers.
        </LI>
        <LI>
          Pause clear losers. Bid-cut expensive maybes. Leave incomplete rows
          alone.
        </LI>
        <LI>
          Write down the change so next week you know what you tested.
        </LI>
      </OL>
      <P>
        Native ASA makes pause and bid edits easy. It does not show subscription
        outcomes beside those edits.{" "}
        <A href="https://appskale.ai/">AppSkale</A>{" "}puts keyword spend next to
        RevenueCat revenue so pause vs bid-cut is based on paying users.
      </P>

      <H2>Where to go next</H2>
      <P>
        Pause bad intent. Lower bids on expensive-but-plausible terms. Wait when
        the sample or trial window is incomplete. The goal is cleaner decisions,
        not constant motion.
      </P>
      <P>
        For foundations, read{" "}
        <A href="/blog/apple-search-ads-for-beginners">
          Apple Search Ads for beginners
        </A>{" "}
        and{" "}
        <A href="/blog/exact-vs-broad-match-apple-search-ads">
          Exact vs Broad
        </A>
        . For revenue measurement, use the{" "}
        <A href="/apple-search-ads-attribution-setup-guide">
          attribution setup guide
        </A>{" "}
        and{" "}
        <A href="/blog/how-to-calculate-apple-search-ads-roas-with-revenuecat">
          ROAS with RevenueCat
        </A>
        . When you want those decisions on one screen,{" "}
        <A href="https://appskale.ai/">AppSkale</A> connects ASA to RevenueCat.
      </P>
    </>
  );
}
