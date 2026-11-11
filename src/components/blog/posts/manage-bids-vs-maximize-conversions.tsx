import {
  A,
  H2,
  LI,
  OL,
  P,
  Strong,
  UL,
} from "@/components/blog/Prose";

export function ManageBidsVsMaximizeConversionsBody() {
  return (
    <>
      <P>
        Search results campaigns in Apple Ads now ask you to pick a strategy:
        Manage Bids or Maximize Conversions. One is you choosing keywords and a
        max cost per tap. The other is an auto-bidder aimed at a target cost
        per acquisition.
      </P>
      <P>
        Both still charge per tap. The difference is who decides the query and
        the price, and whether you can learn from that decision.
      </P>

      <H2>Manage Bids</H2>
      <P>
        You add keywords, set max CPT, and choose Exact or Broad. Search Match
        starts on and can be turned off. This is the mode behind brand
        campaigns, category Exact lists, and a search-term harvest you can
        actually audit. See{" "}
        <A href="/blog/exact-vs-broad-match-apple-search-ads">
          Exact vs Broad
        </A>{" "}
        and{" "}
        <A href="/blog/max-cpt-bidding-apple-search-ads">max CPT bidding</A>.
      </P>
      <P>
        The work is the point. A bad keyword is visible, so you can pause it.
        A good one can get its own bid.
      </P>

      <H2>Maximize Conversions</H2>
      <P>
        Apple&rsquo;s version uses an auto-bidder and Search Match to go after
        queries it thinks will install, around a target CPA you set. The target
        is an average it tries to hold on a weekly basis. A given day can land
        above or below it. You still pay when someone taps, not when they
        install.
      </P>
      <P>
        Apple recommends a daily budget large enough for at least five
        conversions a day, and it will suggest a target CPA when you create the
        campaign. The strategy is for apps that have already launched. Pre-order
        campaigns should use manual bidding. Search Match is required on the
        automatic ad group. If you later want to set keyword bids yourself, you
        can move in that direction. The mode is still built so you stop
        managing the list.
      </P>

      <H2>Which one a small account should open with</H2>
      <P>
        Open with <Strong>Manage Bids</Strong> while you are still learning
        which searches deserve money. Maximize Conversions hides the homework
        inside a CPA target. If that target was a guess, the automation will
        spend toward the guess. You will not get the same keyword-by-keyword
        story you get from a short Exact list.
      </P>
      <UL>
        <LI>
          Brand and proven long-tail stay on Manage Bids so a ceiling you chose
          protects them
        </LI>
        <LI>
          Discovery, if you run it, stays capped and separate. See{" "}
          <A href="/blog/apple-search-ads-discovery-campaigns">
            discovery campaigns
          </A>
        </LI>
        <LI>
          Search Match on a manual campaign is already enough opacity for most
          indie budgets. See{" "}
          <A href="/blog/search-match-eating-your-budget">
            Search Match eating your budget
          </A>
        </LI>
      </UL>

      <H2>When Maximize Conversions is reasonable</H2>
      <OL>
        <LI>
          You already know a CPA that survives the trial window, from your own
          revenue, not from a suggested install price. See{" "}
          <A href="/blog/cpt-vs-cpi-apple-search-ads">CPT vs CPI</A>.
        </LI>
        <LI>
          The daily budget can actually support Apple&rsquo;s five-conversions
          guidance without starving the Exact campaigns that already work. See{" "}
          <A href="/blog/apple-search-ads-daily-budget">daily budget</A>.
        </LI>
        <LI>
          You treat it as an expansion campaign with its own cap, and you still
          read search terms often enough to negative obvious waste.
        </LI>
        <LI>
          You are not judging it on day-one CPA. The target is weekly, and
          subscription revenue lands later. See{" "}
          <A href="/blog/trial-started-roas-didnt-move">
            trial started, ROAS didn&rsquo;t move
          </A>
          .
        </LI>
      </OL>
      <P>
        A target CPA that ignores renewals will buy cheap installs and call
        them success. Set the target from payback you have seen, then check
        keyword revenue in{" "}
        <A href="https://appskale.ai/">AppSkale</A> so the average cannot hide
        a few expensive losers.
      </P>

      <H2>Where to go next</H2>
      <P>
        Manage Bids is how you learn the language of your App Store demand.
        Maximize Conversions is an autopilot for a CPA you already trust. Turn
        on the autopilot after the manual account has a number worth trusting.
      </P>
      <P>
        Related:{" "}
        <A href="/blog/apple-ads-basic-vs-advanced">
          Basic vs Advanced
        </A>
        ,{" "}
        <A href="/blog/apple-search-ads-placements-search-results-first">
          which placement to use first
        </A>
        , and{" "}
        <A href="/blog/how-to-calculate-apple-search-ads-roas-with-revenuecat">
          ROAS with RevenueCat
        </A>
        .
      </P>
    </>
  );
}
