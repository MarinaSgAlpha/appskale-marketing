import {
  A,
  H2,
  LI,
  OL,
  P,
  Strong,
  UL,
} from "@/components/blog/Prose";

export function AppleSearchAdsCpaCapBody() {
  return (
    <>
      <P>
        A CPA cap feels like a seatbelt. Set it on day one, under the cost per
        tap you are already willing to pay, and Apple&rsquo;s own troubleshooting
        says you can miss impressions and installs. The cap is optional. For
        a new Manage Bids campaign, optional is the right setting.
      </P>
      <P>
        This is not the target CPA on a Maximize Conversions campaign. That
        target is an average the auto-bidder chases. A CPA cap is a ceiling
        you can add on a search results ad group that you are bidding
        yourself. See{" "}
        <A href="/blog/manage-bids-vs-maximize-conversions">
          Manage Bids vs Maximize Conversions
        </A>
        .
      </P>

      <H2>What the cap is allowed to do</H2>
      <P>
        Max CPT is the most you will pay for a tap. The CPA cap is a limit on
        what you are willing to pay per acquisition in that ad group. Apple
        warns that a cap set too low, or set below your max CPT, can cut you
        out of impressions you would otherwise have entered.
      </P>
      <P>
        That interaction is the trap. A tap ceiling of one amount and an
        acquisition ceiling below it tells the system the install has to be
        cheaper than the tap. Delivery gets quiet, and it looks like a keyword
        problem. See{" "}
        <A href="/blog/max-cpt-bidding-apple-search-ads">max CPT bidding</A>{" "}
        and{" "}
        <A href="/blog/raise-budget-vs-raise-bids-apple-search-ads">
          raise the budget or the bid
        </A>
        .
      </P>

      <H2>Why a wished-for CPI is a bad cap</H2>
      <UL>
        <LI>
          <Strong>You do not know the conversion rate yet.</Strong>{" "}A cap
          copied from a blog, or from a price you hope to pay, is not a
          measurement.
        </LI>
        <LI>
          <Strong>Install CPA is not subscriber CPA.</Strong>{" "}A cap that
          &ldquo;works&rdquo; on downloads can still buy trials that never pay.
          See{" "}
          <A href="/blog/cpt-vs-cpi-apple-search-ads">CPT vs CPI</A>.
        </LI>
        <LI>
          <Strong>It hides the learning.</Strong>{" "}Keywords that needed a
          fair sample never get one, so you pause them for silence. See{" "}
          <A href="/blog/how-long-run-asa-keyword-before-deciding">
            how long to run a keyword
          </A>
          .
        </LI>
      </UL>

      <H2>When a cap earns a place</H2>
      <OL>
        <LI>
          Brand and a short Exact list have already spent without a cap, long
          enough to see taps become installs and installs become revenue.
        </LI>
        <LI>
          The number you enter is based on that payback, and it sits above
          the max CPT on the ad group. If the cap is the tighter number, you
          are throttling the auction.
        </LI>
        <LI>
          You put it on the ad group whose traffic is already messy enough to
          need a governor, not on the brand terms you are happy to defend.
        </LI>
        <LI>
          You leave it alone for a full trial cycle. Changing the cap and the
          bids in the same week makes both unreadable.
        </LI>
      </OL>

      <H2>Taking a cap off</H2>
      <P>
        Apple notes that removing a CPA cap, especially one that was lower
        than the max CPT, can raise the bid you actually experience. Their
        sequence is to lower the bid first, wait a day for that bid to take
        effect, then remove the cap. Do not delete the cap on a Friday and
        read Monday&rsquo;s CPT as a market change.
      </P>
      <P>
        After it is off, watch search terms. A cap can mask junk by refusing
        to spend. Without it, Broad and Search Match will tell you what they
        were trying to buy. See{" "}
        <A href="/blog/search-match-eating-your-budget">
          Search Match eating your budget
        </A>
        .
      </P>
      <P>
        <A href="https://appskale.ai/">AppSkale</A>{" "}is the check on whether
        the cap&rsquo;s install price was ever a subscriber price. If keyword
        revenue is missing, the ceiling was guarding the wrong outcome.
      </P>

      <H2>Where to go next</H2>
      <P>
        Learn with a max CPT and a daily budget. Add a CPA cap only after you
        know a real acquisition cost, and keep that cap above the tap price.
        A target you hope for is not a control.
      </P>
      <P>
        Related:{" "}
        <A href="/blog/apple-search-ads-daily-budget">daily budget</A>,{" "}
        <A href="/blog/trial-started-roas-didnt-move">
          trial started, ROAS didn&rsquo;t move
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
