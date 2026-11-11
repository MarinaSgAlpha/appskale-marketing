import {
  A,
  H2,
  LI,
  OL,
  P,
  Strong,
  UL,
} from "@/components/blog/Prose";

export function AppleSearchAdsDaypartingBody() {
  return (
    <>
      <P>
        Apple Ads can limit an ad group to certain hours and days. The default
        is not to. A new account that dayparts in week one mostly buys a
        smaller sample and a story about &ldquo;evenings&rdquo; that the data
        cannot support yet.
      </P>
      <P>
        Dayparting is a schedule, not a bid strategy. Use it when the clock is
        part of the product. Leave it alone while you are still learning which
        keywords pay.
      </P>

      <H2>What the schedule actually controls</H2>
      <P>
        Scheduling sits on the ad group. You can set a start date, an optional
        end date, and a daypart grid for days and hours. If you paint hours on
        that grid, the ad runs only inside the blue blocks.
      </P>
      <P>
        The clock is the time zone on the Apple Ads account, the same zone
        used for reporting. It is not the user&rsquo;s local evening. A
        US-account schedule applied to another storefront is that
        account&rsquo;s afternoon, not theirs.
      </P>
      <UL>
        <LI>
          Campaign start and end override the ad group when the ad group would
          start earlier or end later than the campaign
        </LI>
        <LI>
          If every ad group in a campaign has an end date, the campaign stops
          spending once those dates have passed
        </LI>
        <LI>
          The default is to start today and keep running, with no end date and
          no hour limit
        </LI>
      </UL>

      <H2>When a limit is reasonable</H2>
      <UL>
        <LI>
          <Strong>A real event.</Strong>{" "}A race weekend, a launch day, a
          conference, a season that ends. Apple cites this kind of window as
          the point of scheduling.
        </LI>
        <LI>
          <Strong>Support or supply that is actually closed.</Strong>{" "}If a
          booked service cannot be delivered at 3 a.m., buying those taps is
          optional. Judge it on your operations, not on a generic consumer
          habit.
        </LI>
        <LI>
          <Strong>A pattern you already measured.</Strong>{" "}Same keywords, same
          bids, enough days to compare. A hunch that &ldquo;people subscribe
          at night&rdquo; is not a pattern.
        </LI>
      </UL>

      <H2>When it gets in the way</H2>
      <P>
        Indie budgets are already thin. Cutting the day in half cuts the
        auctions you see, so keep-or-pause calls slip. See{" "}
        <A href="/blog/how-long-run-asa-keyword-before-deciding">
          how long to run a keyword
        </A>{" "}
        and{" "}
        <A href="/blog/apple-search-ads-daily-budget">daily budget</A>.
      </P>
      <P>
        Dayparting also confuses a bid problem with a clock problem. If the
        keyword is not showing, the max CPT or the query is the first place to
        look, not the hour. See{" "}
        <A href="/blog/raise-budget-vs-raise-bids-apple-search-ads">
          raise the budget or the bid
        </A>
        .
      </P>

      <H2>If you test it anyway</H2>
      <OL>
        <LI>
          Keep one storefront and one keyword set. Do not also change match
          type or the paywall that week.
        </LI>
        <LI>
          Run the restricted schedule long enough to cover the same weekdays
          twice. A single Tuesday is not a daypart result.
        </LI>
        <LI>
          Compare trials and revenue, not taps. A busy hour with worse
          subscribers is not a win. See{" "}
          <A href="/blog/cpt-vs-cpi-apple-search-ads">CPT vs CPI</A>.
        </LI>
        <LI>
          Put the test in its own ad group so the always-on group keeps its
          history. See{" "}
          <A href="/blog/ad-groups-vs-campaigns-apple-search-ads">
            ad groups vs campaigns
          </A>
          .
        </LI>
      </OL>
      <P>
        <A href="https://appskale.ai/">AppSkale</A>{" "}will show whether the
        hours you kept still produce subscription revenue, which is the only
        reason to give those hours a different schedule.
      </P>

      <H2>Where to go next</H2>
      <P>
        Leave dayparting off until a keyword is worth keeping and the clock is
        part of the offer. Account time zone, not the user&rsquo;s, is the
        grid you are painting.
      </P>
      <P>
        Related:{" "}
        <A href="/blog/apple-search-ads-for-beginners">
          Apple Search Ads for beginners
        </A>
        ,{" "}
        <A href="/blog/when-to-split-asa-by-country">splitting by country</A>
        , and{" "}
        <A href="/blog/how-to-calculate-apple-search-ads-roas-with-revenuecat">
          ROAS with RevenueCat
        </A>
        .
      </P>
    </>
  );
}
