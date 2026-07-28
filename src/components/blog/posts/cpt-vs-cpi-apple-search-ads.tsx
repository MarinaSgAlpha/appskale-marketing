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
  "/images/blog/cpt-vs-cpi-apple-search-ads/cover.png";

export function CptVsCpiAppleSearchAdsBody() {
  return (
    <>
      <P>
        Open an Apple Search Ads report and two cost numbers fight for your
        attention: CPT and CPI. Cost per tap. Cost per install. One looks like
        the bid you set. The other looks like what you &ldquo;really&rdquo;
        paid. Beginners pick a favorite, chase it down, and still cannot tell
        whether the keyword made money.
      </P>
      <P>
        CPT and CPI answer different questions. Neither one is ROAS. If you
        optimize the wrong number, you will scale cheap trash or kill expensive
        winners.
      </P>
      <P>
        This post explains what each metric means, when to use it, and why
        revenue per keyword still has to win the argument.
      </P>

      <H2>CPT vs CPI in plain English</H2>
      <InlineImage
        src={COVER_IMAGE}
        alt="Diagram comparing Apple Search Ads CPT cost per tap with CPI cost per install and revenue per keyword"
        width={1024}
        height={682}
      />
      <P>
        <Strong>CPT (cost per tap)</Strong>{" "}is what you pay when someone taps
        your ad. Apple Search Ads is a tap auction. Your max CPT bid is the
        ceiling you are willing to pay for that tap. Average CPT is what you
        actually paid across those taps.
      </P>
      <P>
        <Strong>CPI (cost per install)</Strong>{" "}is spend divided by installs
        attributed to the campaign or keyword. Not every tap becomes an
        install. Listing quality, ratings, price, and relevance sit between the
        tap and the download. CPI folds that gap into one number.
      </P>
      <P>
        Rough relationship:
      </P>
      <P>
        If tap-to-install is 50%, a $1.00 CPT becomes about a $2.00 CPI. If
        tap-to-install is 25%, that same CPT becomes about a $4.00 CPI. CPT did
        not change. The listing conversion did.
      </P>

      <H2>What CPT is good for</H2>
      <P>
        CPT is the auction metric. Use it when you are thinking about bids,
        competition, and whether a keyword is getting more expensive to show
        for.
      </P>
      <UL>
        <LI>
          <Strong>Bid control.</Strong>{" "}Your max CPT is the lever you set. If
          average CPT is pinned near your max, you may be losing auctions or
          barely clearing them.
        </LI>
        <LI>
          <Strong>Keyword competitiveness.</Strong>{" "}Head terms and rival brand
          names often have higher CPT than long-tail category phrases.
        </LI>
        <LI>
          <Strong>Budget math.</Strong>{" "}At $15/day and a $1.50 CPT, you are
          buying roughly ten taps a day before any install math. That matters
          for{" "}
          <A href="/blog/apple-search-ads-daily-budget">
            how much daily budget is enough to learn
          </A>
          .
        </LI>
      </UL>
      <P>
        CPT does not tell you if the tap was worth buying. A low CPT on junk
        intent is still junk.
      </P>

      <H2>What CPI is good for</H2>
      <P>
        CPI is closer to acquisition cost for a download. Use it when comparing
        keywords on how efficiently they turn spend into installs.
      </P>
      <UL>
        <LI>
          <Strong>Listing and intent check.</Strong>{" "}High CPT with low CPI can
          mean strong tap-to-install. Low CPT with high CPI can mean people tap
          and bounce off the product page.
        </LI>
        <LI>
          <Strong>Relative keyword comparison.</Strong>{" "}Inside the same app
          and storefront, CPI helps spot which terms buy downloads more
          efficiently.
        </LI>
        <LI>
          <Strong>Sanity check after creative or screenshot changes.</Strong>{" "}
          If CPT holds and CPI improves, the store listing may be converting
          better.
        </LI>
      </UL>
      <P>
        CPI still stops at the install. For subscription apps, that is mid-funnel
        at best. A $2 CPI that never reaches the paywall loses to an $8 CPI that
        starts trials. That trap is covered in{" "}
        <A href="/blog/asa-cpi-great-paywall-conversion-terrible">
          your ASA CPI looks great, your paywall conversion is terrible
        </A>
        .
      </P>

      <H2>Why chasing either number alone fails</H2>
      <P>
        Two common failure modes:
      </P>
      <UL>
        <LI>
          <Strong>Lowest CPT wins.</Strong>{" "}You bid down, Broad or Search Match
          finds cheap loose queries, taps get cheaper, revenue does not move.
          See{" "}
          <A href="/blog/search-match-eating-your-budget">
            Search Match is eating your budget
          </A>{" "}
          and{" "}
          <A href="/blog/exact-vs-broad-match-apple-search-ads">
            Exact vs Broad match
          </A>
          .
        </LI>
        <LI>
          <Strong>Lowest CPI wins.</Strong>{" "}You scale the cheapest installs.
          Those users never trial or pay. The dashboard looks efficient. The bank
          account disagrees.
        </LI>
      </UL>
      <P>
        CPT and CPI are diagnostic. They help you understand the auction and the
        listing. They are not the scoreboard for a subscription business.
      </P>

      <H2>The number that should decide scale</H2>
      <P>
        Revenue per keyword over a window long enough for your trial and first
        payment. That is the decision metric. ROAS is one way to express it:
        revenue divided by spend for that keyword cohort.
      </P>
      <P>
        Practical hierarchy:
      </P>
      <OL>
        <LI>
          <Strong>Revenue / ROAS by keyword</Strong>{" "}&mdash; keep, pause, scale
        </LI>
        <LI>
          <Strong>Trial starts by keyword</Strong>{" "}&mdash; early signal while
          revenue lags
        </LI>
        <LI>
          <Strong>CPI</Strong>{" "}&mdash; efficiency of buying installs, and a
          clue about listing conversion
        </LI>
        <LI>
          <Strong>CPT</Strong>{" "}&mdash; auction cost and bid pressure
        </LI>
      </OL>
      <P>
        If early ROAS looks dead while trials are starting, do not let CPT/CPI
        panic you into pausing too fast. See{" "}
        <A href="/blog/trial-started-roas-didnt-move">
          your trial started, your ROAS didn&rsquo;t move
        </A>
        . For the join between ASA spend and subscription revenue, read{" "}
        <A href="/blog/how-to-calculate-apple-search-ads-roas-with-revenuecat">
          how to calculate Apple Search Ads ROAS with RevenueCat
        </A>
        .
      </P>

      <H2>How to read CPT and CPI together</H2>
      <P>
        Use the pair, not a single favorite.
      </P>
      <UL>
        <LI>
          <Strong>High CPT, healthy trials/revenue:</Strong>{" "}expensive traffic
          that may still be worth it. Do not cut just because CPT looks scary.
        </LI>
        <LI>
          <Strong>Low CPT, weak CPI:</Strong>{" "}cheap taps, weak install
          conversion. Check screenshots, ratings, and whether the query matches
          the listing.
        </LI>
        <LI>
          <Strong>Low CPI, no trials:</Strong>{" "}efficient downloads into a
          broken funnel or bad intent. Fix product path or pause the keyword.
        </LI>
        <LI>
          <Strong>Brand CPT/CPI much better than category:</Strong>{" "}normal.
          Brand is high intent. Do not judge category terms by brand benchmarks.
          See{" "}
          <A href="/blog/brand-vs-category-keywords-first-500">
            brand vs category keywords
          </A>
          .
        </LI>
      </UL>
      <P>
        Also watch for expansion pollution. If Broad or Search Match is on, the
        CPT/CPI on a seed keyword can hide a mix of good and bad search terms.
        Read the search terms report before you trust the average.
      </P>

      <H2>A simple weekly habit</H2>
      <OL>
        <LI>
          Sort keywords by spend.
        </LI>
        <LI>
          Check trials and revenue first.
        </LI>
        <LI>
          Use CPI to see whether taps are becoming installs.
        </LI>
        <LI>
          Use CPT to see whether the auction is getting more expensive.
        </LI>
        <LI>
          Pause clear losers. Raise budget only on revenue winners, not on the
          cheapest CPI row.
        </LI>
      </OL>
      <P>
        Keep the keyword list short enough that those rows mean something. A
        wall of starved keywords makes every CPT/CPI sample noisy. See{" "}
        <A href="/blog/how-many-keywords-apple-search-ads">
          how many keywords you should run
        </A>
        .
      </P>
      <P>
        The native ASA dashboard is built around taps, installs, and CPT/CPI.
        It will not cleanly show subscription revenue next to those costs.{" "}
        <A href="https://appskale.ai/">AppSkale</A>{" "}puts Apple Search Ads
        spend beside RevenueCat revenue so CPT and CPI stay diagnostics, not
        the final boss.
      </P>

      <H2>Where to go next</H2>
      <P>
        Trust CPT for auction and bid context. Trust CPI for install efficiency
        and listing clues. Trust revenue per keyword for keep, pause, and scale.
        If you only remember one line: cheap taps and cheap installs are not the
        same thing as profitable users.
      </P>
      <P>
        If you are still setting up the channel, start with{" "}
        <A href="/blog/apple-search-ads-for-beginners">
          Apple Search Ads for beginners
        </A>{" "}
        and the{" "}
        <A href="/apple-search-ads-attribution-setup-guide">
          Apple Search Ads attribution setup guide
        </A>
        . For budget sizing while you learn these metrics, use{" "}
        <A href="/blog/apple-search-ads-daily-budget">
          Apple Search Ads daily budget
        </A>
        .
      </P>
      <P>
        When you want keyword costs next to actual subscription outcomes,{" "}
        <A href="https://appskale.ai/">AppSkale</A> connects Apple Search Ads to
        RevenueCat so you stop optimizing the wrong cost column.
      </P>
    </>
  );
}
