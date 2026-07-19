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
  "/images/blog/competitor-keywords-apple-search-ads/cover.png";

export function CompetitorKeywordsAppleSearchAdsBody() {
  return (
    <>
      <P>
        Someone searches a rival app by name. Your ad shows up above their
        listing. It feels clever: steal demand that already exists. On a small
        Apple Search Ads budget, it can also be an expensive distraction.
      </P>
      <P>
        Competitor keywords are not illegal in Apple Search Ads, and they are
        not automatically smart. Users typed another brand on purpose. You are
        interrupting that intent with your listing, your ratings, and your
        paywall. Sometimes that works. Often you pay for taps from people who
        already decided they wanted someone else.
      </P>
      <P>
        This post covers when conquest is worth testing, when to skip it, and
        how to run a competitor keyword test without wrecking brand and
        category learning.
      </P>

      <H2>What competitor keywords actually are</H2>
      <InlineImage
        src={COVER_IMAGE}
        alt="Diagram comparing brand defense, category keywords, and competitor conquest keywords in Apple Search Ads"
        width={1024}
        height={682}
      />
      <P>
        Competitor keywords are searches for another app&rsquo;s name, or close
        brand variants of that name. Not &ldquo;habit tracker for ADHD.&rdquo;
        The rival&rsquo;s product name itself.
      </P>
      <P>
        That is different from two other buckets you should already separate:
      </P>
      <UL>
        <LI>
          <Strong>Your brand keywords:</Strong>{" "}people searching for you.
          Defend these first.
        </LI>
        <LI>
          <Strong>Category keywords:</Strong>{" "}people searching for a problem
          or use case, not a company.
        </LI>
        <LI>
          <Strong>Competitor keywords:</Strong>{" "}people searching for a
          specific alternative.
        </LI>
      </UL>
      <P>
        If those three share one ad group, you will misread the account.
        Conquest traffic behaves differently from brand defense and long-tail
        category. Keep it separate. The same structural idea shows up in{" "}
        <A href="/blog/brand-vs-category-keywords-first-500">
          brand vs category keywords
        </A>{" "}
        and{" "}
        <A href="/blog/how-many-keywords-apple-search-ads">
          how many keywords you should run
        </A>
        .
      </P>

      <H2>When competitor bidding can work</H2>
      <P>
        Conquest is more plausible when several of these are true:
      </P>
      <UL>
        <LI>
          <Strong>Your listing can win the comparison.</Strong>{" "}Stronger
          ratings, clearer screenshots, or a sharper promise for the same job.
        </LI>
        <LI>
          <Strong>The rival is adjacent, not a giant category owner.</Strong>{" "}
          Bidding on a massive brand with a huge review lead is usually a tax,
          not a strategy.
        </LI>
        <LI>
          <Strong>Users are comparison shopping.</Strong>{" "}Some brand searches
          are exploratory. Your ad can be a second look, not a rude
          interruption.
        </LI>
        <LI>
          <Strong>You already know your own brand and category economics.</Strong>{" "}
          If you cannot tell whether your own terms pay, you are not ready to
          diagnose competitor terms.
        </LI>
        <LI>
          <Strong>You can measure revenue per keyword.</Strong>{" "}Install vanity
          on conquest keywords is especially misleading.
        </LI>
      </UL>
      <P>
        Competitor bidding is a second-stage test, not a first-week growth
        hack. If ASA is still new to you, start with{" "}
        <A href="/blog/apple-search-ads-for-beginners">
          Apple Search Ads for beginners
        </A>{" "}
        before you spend on someone else&rsquo;s brand.
      </P>

      <H2>When you should skip it</H2>
      <P>
        Skip competitor keywords early if:
      </P>
      <UL>
        <LI>
          Your first few hundred dollars are still teaching you brand and
          long-tail category performance
        </LI>
        <LI>
          Your ratings or screenshots lose the side-by-side in search results
        </LI>
        <LI>
          Cost per tap on rival names is high and trial starts are near zero
        </LI>
        <LI>
          You do not have attribution wired to subscription revenue yet
        </LI>
        <LI>
          You are tempted to add ten competitor names because the category list
          feels short
        </LI>
      </UL>
      <P>
        That last one is common. A quiet category ad group does not mean you
        should invade rival brands. It usually means your long-tail list needs
        better intent, or your funnel is leaking after install. See{" "}
        <A href="/blog/asa-cpi-great-paywall-conversion-terrible">
          your ASA CPI looks great, your paywall conversion is terrible
        </A>{" "}
        before you treat conquest as the fix.
      </P>

      <H2>Brand defense comes before brand attack</H2>
      <P>
        Before you bid on anyone else, own your own name.
      </P>
      <P>
        If competitors can bid on your brand and you are absent, they show up
        when someone searches for you. That is the defensive version of this
        topic. Conquest without defense is backwards: you pay to interrupt their
        customers while leaving yours unprotected.
      </P>
      <P>
        Practical order:
      </P>
      <OL>
        <LI>
          Exact brand defense on your app name
        </LI>
        <LI>
          Exact long-tail category terms
        </LI>
        <LI>
          Optional small competitor test in a separate ad group
        </LI>
      </OL>
      <P>
        Do not let conquest keywords share budget with brand defense. Brand
        should stay funded even if conquest looks exciting for a week.
      </P>

      <H2>How to run a clean competitor test</H2>
      <P>
        If you decide to try it, keep the experiment boring and measurable.
      </P>
      <OL>
        <LI>
          <Strong>Separate ad group, Exact match only.</Strong>{" "}Two to five
          rival names max. Not a spreadsheet of every app in the category.
        </LI>
        <LI>
          <Strong>Hard daily cap.</Strong>{" "}Treat conquest as tuition with a
          ceiling. If it cannot prove trials or revenue inside that cap, pause
          it.
        </LI>
        <LI>
          <Strong>Search Match off.</Strong>{" "}You want those exact brand
          queries, not Apple expanding into related noise. See{" "}
          <A href="/blog/search-match-eating-your-budget">
            Search Match is eating your budget
          </A>
          .
        </LI>
        <LI>
          <Strong>Judge on trials and revenue, not CPI.</Strong>{" "}Conquest can
          look cheap on installs and terrible on paid conversion because intent
          was never yours.
        </LI>
        <LI>
          <Strong>Give it a real window, then decide.</Strong>{" "}If trial length
          is seven to fourteen days, do not call the test on day three. Timing
          still matters. See{" "}
          <A href="/blog/trial-started-roas-didnt-move">
            your trial started, your ROAS didn&rsquo;t move
          </A>
          .
        </LI>
      </OL>
      <P>
        Use{" "}
        <A href="/blog/apple-search-ads-negative-keywords">
          negative keywords
        </A>{" "}
        if Broad or Search Match elsewhere starts leaking rival-brand junk into
        category campaigns. And do not Broad-match competitor names unless you
        like surprises.
      </P>

      <H2>What &ldquo;good&rdquo; looks like on conquest</H2>
      <P>
        A competitor keyword earns its keep only if it produces paying users at
        an acceptable cost after your normal conversion lag. Installs are not
        enough. Curiosity taps are not enough.
      </P>
      <UL>
        <LI>
          <Strong>Keep</Strong>{" "}if trial starts and paid conversions show up
          at a cost you can live with versus category terms
        </LI>
        <LI>
          <Strong>Pause</Strong>{" "}if spend accumulates with installs but no
          meaningful trials after a fair sample
        </LI>
        <LI>
          <Strong>Do not scale</Strong>{" "}just because CPT looks lower than a
          head category term. Wrong intent with cheap taps is still wrong
          intent.
        </LI>
      </UL>
      <P>
        Compare conquest ROAS to your own brand and best long-tail category
        keywords, not to zero. If brand is 4x and conquest is 0.3x after the
        trial window, the answer is obvious. The ROAS math is in{" "}
        <A href="/blog/how-to-calculate-apple-search-ads-roas-with-revenuecat">
          how to calculate Apple Search Ads ROAS with RevenueCat
        </A>
        .
      </P>

      <H2>Common conquest mistakes</H2>
      <UL>
        <LI>
          <Strong>Bidding on giants first.</Strong>{" "}You pay premium taps to
          sit next to an app with ten times your reviews.
        </LI>
        <LI>
          <Strong>Mixing competitor names into category Exact.</Strong>{" "}The
          average hides whether conquest is helping or draining.
        </LI>
        <LI>
          <Strong>Copying a long rival list on day one.</Strong>{" "}That steals
          budget from keywords you should be learning first.
        </LI>
        <LI>
          <Strong>Ignoring the store listing comparison.</Strong>{" "}If your
          screenshots lose the eyeball test, ads just buy expensive bounce.
        </LI>
        <LI>
          <Strong>Calling installs a win.</Strong>{" "}People tap alternatives out
          of curiosity all the time. Curiosity is not a subscription.
        </LI>
      </UL>

      <H2>A practical default for indie apps</H2>
      <P>
        Default off for the first learning month. Defend your brand. Test
        long-tail category. Turn Search Match off. Keep Exact match clean.
      </P>
      <P>
        Then, if the funnel converts and you still have budget, run a tiny
        conquest ad group with two to five Exact rival names, a hard cap, and a
        clear kill date after one trial cycle. Keep winners only if revenue says
        so. Negative or pause the rest.
      </P>
      <P>
        Make sure attribution is set up before you run the test. Use the{" "}
        <A href="/apple-search-ads-attribution-setup-guide">
          Apple Search Ads attribution setup guide
        </A>
        . Without keyword-level revenue, conquest becomes vibes with a CPT
        column.{" "}
        <A href="https://appskale.ai/">AppSkale</A>{" "}puts ASA spend next to
        RevenueCat revenue so you can see whether rival-brand taps become
        subscribers.
      </P>

      <H2>Where to go next</H2>
      <P>
        Bidding on competitor keywords can work when your listing can win the
        comparison and your measurement is ready. It is usually a bad first move
        on a small budget. Defend your brand, learn category intent, then run
        conquest as a capped experiment in its own Exact ad group.
      </P>
      <P>
        For foundation setup, read{" "}
        <A href="/blog/brand-vs-category-keywords-first-500">
          brand vs category keywords
        </A>
        ,{" "}
        <A href="/blog/exact-vs-broad-match-apple-search-ads">
          Exact vs Broad match
        </A>
        , and{" "}
        <A href="/blog/how-many-keywords-apple-search-ads">
          how many keywords you should run
        </A>
        . For revenue math once the test has had time, use{" "}
        <A href="/blog/how-to-calculate-apple-search-ads-roas-with-revenuecat">
          Apple Search Ads ROAS with RevenueCat
        </A>
        .
      </P>
      <P>
        When you want to compare brand, category, and competitor keywords on
        paying users instead of taps,{" "}
        <A href="https://appskale.ai/">AppSkale</A> connects Apple Search Ads
        spend to RevenueCat revenue at the keyword level.
      </P>
    </>
  );
}
