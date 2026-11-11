import {
  A,
  H2,
  LI,
  OL,
  P,
  Strong,
  UL,
} from "@/components/blog/Prose";

export function RaiseBudgetVsRaiseBidsAppleSearchAdsBody() {
  return (
    <>
      <P>
        A keyword you like is not spending, or it spends out by noon. The two
        levers in front of you are the daily budget and the max CPT bid. They
        fix different stalls. Raising both at once only tells you that
        something changed.
      </P>
      <P>
        Budget decides how much the campaign is allowed to spend today. The bid
        decides how hard that campaign competes for a tap. If you are not
        winning auctions, a bigger budget sits there. If you are already
        hitting the cap, a higher bid mostly makes the taps you do win more
        expensive.
      </P>

      <H2>You are bid-limited when the budget is idle</H2>
      <P>
        The campaign ends the day with spend left over, and the keyword you
        care about barely shows. Impression share is thin because the ceiling
        is losing, not because the account ran out of money. Raising the daily
        budget does not enter more auctions.
      </P>
      <P>
        Raise max CPT when the term is one you already want: brand, or a
        long-tail keyword that has produced trials or revenue and still looks
        under-delivered. Do not raise the bid on an unproven head term just to
        &ldquo;get data.&rdquo; See{" "}
        <A href="/blog/max-cpt-bidding-apple-search-ads">max CPT bidding</A> and{" "}
        <A href="/blog/apple-search-ads-impression-share">impression share</A>.
      </P>

      <H2>You are budget-limited when the cap arrives first</H2>
      <P>
        Spend hits the daily budget and delivery stops while demand is still
        there. A higher CPT would try to buy a more expensive slice of the same
        capped day. The lever that adds volume is the budget, and only if the
        traffic already pays.
      </P>
      <UL>
        <LI>
          Brand Exact is capping out and you still want the name
        </LI>
        <LI>
          A proven category term is profitable and simply runs out of room
        </LI>
        <LI>
          The search terms behind it are still clean
        </LI>
      </UL>
      <P>
        If the cap is being hit by junk, raising the budget funds the junk.
        Pause or negative first. See{" "}
        <A href="/blog/apple-search-ads-negative-keywords">negative keywords</A>{" "}
        and{" "}
        <A href="/blog/pause-vs-lower-bids-apple-search-ads">
          pause vs lower bids
        </A>
        .
      </P>

      <H2>Sometimes neither lever is the fix</H2>
      <OL>
        <LI>
          One ad group is eating a shared campaign budget. Split the job before
          you add cash. See{" "}
          <A href="/blog/ad-groups-vs-campaigns-apple-search-ads">
            ad groups vs campaigns
          </A>
          .
        </LI>
        <LI>
          Search Match or Broad is the thing spending. Tightening match type
          beats a higher ceiling. See{" "}
          <A href="/blog/search-match-eating-your-budget">
            Search Match eating your budget
          </A>
          .
        </LI>
        <LI>
          The keyword is fine and the paywall is not. More taps will not repair
          that. See{" "}
          <A href="/blog/asa-cpi-great-paywall-conversion-terrible">
            CPI looks great, paywall conversion is terrible
          </A>
          .
        </LI>
        <LI>
          The sample is a few days old. Wait for the conversion clock before
          you scale either number. See{" "}
          <A href="/blog/how-long-run-asa-keyword-before-deciding">
            how long to run a keyword
          </A>
          .
        </LI>
      </OL>

      <H2>Change one number</H2>
      <P>
        <Strong>Idle budget, wanted term:</Strong>{" "}raise the bid a step and
        leave the budget alone.
      </P>
      <P>
        <Strong>Cap hit on a term that already returns revenue:</Strong>{" "}raise
        the daily budget and leave the bid alone.
      </P>
      <P>
        <Strong>Unproven or messy traffic:</Strong>{" "}do not scale. Fix intent,
        then look again.
      </P>
      <P>
        <A href="https://appskale.ai/">AppSkale</A>{" "}keeps the revenue next to
        the keyword so a higher budget is a decision about payback, not a
        reaction to an empty impression chart.
      </P>

      <H2>Where to go next</H2>
      <P>
        Bid gets you into the auction. Budget decides how long you stay. Raise
        the one that is actually binding, and only on traffic you would still
        want at the new price.
      </P>
      <P>
        Related:{" "}
        <A href="/blog/apple-search-ads-daily-budget">daily budget</A>,{" "}
        <A href="/blog/cpt-vs-cpi-apple-search-ads">CPT vs CPI</A>, and{" "}
        <A href="/blog/how-to-calculate-apple-search-ads-roas-with-revenuecat">
          ROAS with RevenueCat
        </A>
        .
      </P>
    </>
  );
}
