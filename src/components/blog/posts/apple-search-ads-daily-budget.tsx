import {
  A,
  H2,
  InlineImage,
  LI,
  OL,
  P,
  Strong,
  UL,
} from "@/components/blog/Prose";

const COVER_IMAGE =
  "/images/blog/apple-search-ads-daily-budget/cover.png";

export function AppleSearchAdsDailyBudgetBody() {
  return (
    <>
      <P>
        You decide to try Apple Search Ads, open the campaign builder, and hit
        the daily budget field. Five dollars feels safe. Fifty feels reckless.
        Twenty feels like a compromise. None of those numbers matter until you
        know what the budget is for: learning which keywords produce paying
        users, not buying the maximum installs before lunch.
      </P>
      <P>
        Too low and you never get a fair sample. Too high and you burn cash
        before the funnel or keyword list is ready. The useful question is not
        &ldquo;what do agencies spend?&rdquo; It is &ldquo;how much do I need,
        for how long, in one storefront, to make keep/pause decisions?&rdquo;
      </P>
      <P>
        This post gives a practical daily budget range for indie apps, how
        runway matters more than one flashy day, and when raising spend is a
        mistake.
      </P>

      <H2>Daily budget is a learning budget</H2>
      <InlineImage
        src={COVER_IMAGE}
        alt="Diagram showing Apple Search Ads daily budget as multi-week learning runway rather than one-day install chasing"
        width={1024}
        height={682}
      />
      <P>
        A daily cap controls how fast you spend. It does not guarantee results.
        At $5/day across fifteen keywords, most terms starve. At $100/day with
        Search Match on and a messy list, you get volume without answers.
      </P>
      <P>
        Think in weeks, not days. Subscription apps need time for installs to
        become trials and trials to become revenue. A &ldquo;good&rdquo; daily
        budget is one you can sustain long enough for that lag without panic.
        If flat early ROAS freaks you out, read{" "}
        <A href="/blog/trial-started-roas-didnt-move">
          your trial started, your ROAS didn&rsquo;t move
        </A>{" "}
        before you slash the cap every morning.
      </P>

      <H2>A practical range for beginners</H2>
      <P>
        For many solo subscription apps testing in one storefront, usually the
        US:
      </P>
      <UL>
        <LI>
          <Strong>About $10&ndash;15/day:</Strong>{" "}minimum viable learning if
          the keyword list is tight, Exact match, Search Match off
        </LI>
        <LI>
          <Strong>About $15&ndash;25/day:</Strong>{" "}more comfortable runway for
          brand plus 10&ndash;15 long-tail category terms
        </LI>
        <LI>
          <Strong>Below ~$10/day:</Strong>{" "}often too thin to decide anything
          useful across a real keyword list
        </LI>
        <LI>
          <Strong>Total learning pot:</Strong>{" "}roughly $300&ndash;$600 over
          four to six weeks is a common indie range, not a promise
        </LI>
      </UL>
      <P>
        Those numbers are observed ranges for small accounts, not universal
        truths. Competitive categories cost more per tap. Soft categories can
        learn on less. The principle stays the same: fund a short list long
        enough to read it.
      </P>
      <P>
        If you are allocating a first ~$500, pair the daily cap with the right
        keyword split. See{" "}
        <A href="/blog/brand-vs-category-keywords-first-500">
          where your first $500 should go
        </A>
        .
      </P>

      <H2>Why $5/day usually fails</H2>
      <P>
        A tiny daily budget feels responsible. It often produces fake caution:
      </P>
      <UL>
        <LI>
          <Strong>Keywords never get a sample.</Strong>{" "}You pause terms that
          were just starved.
        </LI>
        <LI>
          <Strong>You optimize noise.</Strong>{" "}One or two random taps look
          like a trend.
        </LI>
        <LI>
          <Strong>You quit early.</Strong>{" "}After ten quiet days you declare
          ASA dead when the account never had oxygen.
        </LI>
      </UL>
      <P>
        If $5/day is truly all you can risk, do not run fifteen keywords and
        three countries. Run brand Exact only, or brand plus a handful of
        long-tail terms, in one storefront. Shrink the test until the budget can
        feed it. That is the same logic as{" "}
        <A href="/blog/how-many-keywords-apple-search-ads">
          how many keywords you should run
        </A>
        .
      </P>

      <H2>Runway beats a big Tuesday</H2>
      <P>
        Doubling spend for one day does not equal two weeks of learning. ASA
        decisions need repeated auctions, enough taps per keyword, and enough
        calendar time for trials to convert.
      </P>
      <P>
        Prefer a steady daily cap you can keep for four to six weeks over a
        burst you will shut off in panic. Consistency also makes weekly reviews
        saner: same structure, same storefront, same match types, changing only
        what the data earned.
      </P>
      <P>
        If you are not sure ASA belongs in the plan yet, read{" "}
        <A href="/blog/apple-search-ads-for-beginners">
          Apple Search Ads for beginners
        </A>{" "}
        before you lock a daily number.
      </P>

      <H2>What the daily budget has to cover</H2>
      <P>
        Your cap is shared across whatever is live. Structure it on purpose:
      </P>
      <OL>
        <LI>
          <Strong>Brand Exact:</Strong>{" "}small, steady, protected. Do not let
          category experiments starve defense.
        </LI>
        <LI>
          <Strong>Category Exact:</Strong>{" "}most of the learning budget on
          10&ndash;15 long-tail terms.
        </LI>
        <LI>
          <Strong>Discovery later:</Strong>{" "}Broad or Search Match only with
          a separate, smaller cap after Exact has taught you something.
        </LI>
      </OL>
      <P>
        One storefront first. One match type per ad group. Search Match off
        while you learn. Details in{" "}
        <A href="/blog/exact-vs-broad-match-apple-search-ads">
          Exact vs Broad match
        </A>{" "}
        and{" "}
        <A href="/blog/search-match-eating-your-budget">
          Search Match is eating your budget
        </A>
        .
      </P>
      <P>
        If competitor conquest is tempting, do not fund it from the same thin
        daily cap that is still learning category intent. Keep conquest optional
        and capped. See{" "}
        <A href="/blog/competitor-keywords-apple-search-ads">
          should you bid on competitor keywords
        </A>
        .
      </P>

      <H2>When to raise the daily budget</H2>
      <P>
        Raise spend only after the account is producing decisions, not vibes.
      </P>
      <UL>
        <LI>
          <Strong>Raise</Strong>{" "}when specific Exact keywords show trials or
          revenue and are limited by budget, not by bad conversion
        </LI>
        <LI>
          <Strong>Hold</Strong>{" "}when installs look fine but paywall or trial
          conversion is broken. Buying more of a leak is not learning. See{" "}
          <A href="/blog/asa-cpi-great-paywall-conversion-terrible">
            your ASA CPI looks great, your paywall conversion is terrible
          </A>
          .
        </LI>
        <LI>
          <Strong>Cut or reallocate</Strong>{" "}when spend hits keywords with no
          path to revenue after a fair sample. Use negatives and pauses before
          you add budget. See{" "}
          <A href="/blog/apple-search-ads-negative-keywords">
            negative keywords
          </A>
          .
        </LI>
      </UL>
      <P>
        A simple rule: increase budget on winners, not on the whole account
        average. Blended ROAS hides the terms that deserve money.
      </P>

      <H2>Daily budget mistakes</H2>
      <UL>
        <LI>
          <Strong>Setting $3&ndash;5/day across a huge keyword list.</Strong>{" "}
          Starvation dressed up as thrift.
        </LI>
        <LI>
          <Strong>Raising budget because CPI looks cheap.</Strong>{" "}Cheap
          installs can still be worthless subscribers.
        </LI>
        <LI>
          <Strong>Changing the cap every day.</Strong>{" "}You reset the learning
          loop and never finish a clean week.
        </LI>
        <LI>
          <Strong>Splitting a tiny budget across many countries.</Strong>{" "}
          Prove one storefront first.
        </LI>
        <LI>
          <Strong>Funding discovery before Exact works.</Strong>{" "}Broad and
          Search Match need spare budget, not the whole learning pot.
        </LI>
      </UL>

      <H2>A simple starter plan</H2>
      <OL>
        <LI>
          Pick one storefront.
        </LI>
        <LI>
          Set a daily cap you can sustain for four to six weeks, often around
          $10&ndash;20/day for indie tests.
        </LI>
        <LI>
          Run brand Exact plus 10&ndash;15 long-tail Exact category keywords.
        </LI>
        <LI>
          Turn Search Match off. Keep Broad off until Exact produces signal.
        </LI>
        <LI>
          Review weekly. Pause clear losers. Do not raise budget until winners
          exist.
        </LI>
        <LI>
          Connect revenue tracking before you scale. Use the{" "}
          <A href="/apple-search-ads-attribution-setup-guide">
            Apple Search Ads attribution setup guide
          </A>{" "}
          and the ROAS math in{" "}
          <A href="/blog/how-to-calculate-apple-search-ads-roas-with-revenuecat">
            how to calculate Apple Search Ads ROAS with RevenueCat
          </A>
          .
        </LI>
      </OL>
      <P>
        The native ASA dashboard will show spend hitting the daily cap. It will
        not show which keywords turned that spend into subscribers.{" "}
        <A href="https://appskale.ai/">AppSkale</A>{" "}puts keyword-level spend
        next to RevenueCat revenue so you raise budgets on evidence.
      </P>

      <H2>Where to go next</H2>
      <P>
        Enough daily budget is the amount that feeds a short Exact keyword list
        for several weeks without starving every term. For many indie apps that
        starts near $10&ndash;15/day, often lands around $15&ndash;25/day, and
        only goes up after winners appear. Runway and structure beat a scary
        one-day spike.
      </P>
      <P>
        Next, lock the keyword plan with{" "}
        <A href="/blog/brand-vs-category-keywords-first-500">
          brand vs category keywords
        </A>{" "}
        and{" "}
        <A href="/blog/how-many-keywords-apple-search-ads">
          how many keywords you should run
        </A>
        . Keep match types clean with{" "}
        <A href="/blog/exact-vs-broad-match-apple-search-ads">
          Exact vs Broad match
        </A>
        . If you are still deciding whether to run ASA at all, start with{" "}
        <A href="/blog/apple-search-ads-for-beginners">
          Apple Search Ads for beginners
        </A>
        .
      </P>
      <P>
        When you want to see whether today&rsquo;s spend is buying paying users
        or only downloads,{" "}
        <A href="https://appskale.ai/">AppSkale</A> connects Apple Search Ads
        to RevenueCat at the keyword level.
      </P>
    </>
  );
}
