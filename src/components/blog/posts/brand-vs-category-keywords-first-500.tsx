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
  "/images/blog/brand-vs-category-keywords-first-500/cover.png";

export function BrandVsCategoryKeywordsFirst500Body() {
  return (
    <>
      <P>
        You have about $500 for your first Apple Search Ads test. Everyone
        tells you to bid on keywords. Nobody tells you which keywords first, or
        how much to put on each. So you open the campaign builder, add
        &ldquo;meditation app&rdquo; and &ldquo;habit tracker&rdquo; and
        &ldquo;notes app,&rdquo; set a daily budget, and hope the dashboard
        makes sense in a week.
      </P>
      <P>
        It usually does not. Head category terms eat the budget fast. Installs
        look fine. Revenue does not move. You are left wondering if ASA is
        broken when the problem is allocation, not the channel.
      </P>
      <P>
        There are two keyword types that matter at the start:{" "}
        <Strong>brand</Strong> and <Strong>category</Strong>. Brand is your app
        name. Category is everything else. The order you spend on them, and
        which category terms you pick, matters more than your total budget.
      </P>

      <H2>Start with brand keywords</H2>
      <InlineImage
        src={COVER_IMAGE}
        alt="Diagram showing Apple Search Ads budget split between brand defense keywords and long-tail category keywords"
        width={1024}
        height={682}
      />
      <P>
        Brand keywords are searches for your app by name. &ldquo;your app
        name,&rdquo; &ldquo;your app name app,&rdquo; close misspellings.
        Someone already knows your product and typed it into the App Store
        search box.
      </P>
      <P>
        Bid on your brand first for three reasons:
      </P>
      <UL>
        <LI>
          <Strong>Cheap.</Strong>{" "}Nobody else is usually bidding on your exact
          name unless you are big enough to attract competitors. Cost per tap is
          often the lowest in your account.
        </LI>
        <LI>
          <Strong>High intent.</Strong>{" "}They searched for you specifically. Tap
          to install is higher than generic category terms.
        </LI>
        <LI>
          <Strong>Defensive.</Strong>{" "}Competitors can bid on your brand name.
          If you are not there, their app shows at the top when someone searches
          for you.
        </LI>
      </UL>
      <P>
        A brand defense campaign is the lowest-risk place to learn how ASA
        works. Spend stays small. Signal is clean. You are not guessing intent.
      </P>
      <P>
        If you have not done the free ASO work on your app name and subtitle
        yet, do that before you pay to defend the brand. See{" "}
        <A href="/blog/seo-for-apps-beginners-guide">
          SEO for apps (ASO basics)
        </A>{" "}
        if you need the foundation.
      </P>

      <H2>Then add category keywords, but not head terms</H2>
      <P>
        Category keywords describe what your app does without naming it.
        &ldquo;Voice memo app,&rdquo; &ldquo;budget planner,&rdquo; &ldquo;habit
        tracker for ADHD.&rdquo; This is where discovery happens. It is also
        where beginners burn money.
      </P>
      <P>
        Head category terms are the short, obvious ones: &ldquo;notes app,&rdquo;
        &ldquo;meditation,&rdquo; &ldquo;fitness.&rdquo; High search volume.
        High competition. Expensive cost per tap. Generic intent. Someone
        searching &ldquo;notes app&rdquo; is browsing, not buying your specific
        solution.
      </P>
      <P>
        I spent my first ASA budget on head terms because the volume looked
        exciting. Installs came in. Almost none converted to trials. The keywords
        were not wrong for the category. They were wrong for my app at that
        stage.
      </P>
      <P>
        Long-tail category terms are the middle ground. Lower volume, lower cost,
        tighter intent. &ldquo;Voice memo for lectures&rdquo; instead of
        &ldquo;recorder app.&rdquo; &ldquo;Couples budget app&rdquo; instead of
        &ldquo;finance.&rdquo; You learn faster because each term maps to a
        specific user problem your app solves. Narrow terms can feed broader
        ranking over time, but only if you pick terms that actually convert.
      </P>

      <H2>Why head terms are a trap before you have revenue data</H2>
      <P>
        Head category keywords fail beginners for a predictable reason: you
        cannot tell yet whether the traffic pays.
      </P>
      <UL>
        <LI>
          <Strong>Volume hides bad economics.</Strong>{" "}Enough installs roll in
          that the campaign looks alive even when ROAS is terrible.
        </LI>
        <LI>
          <Strong>Competition pushes bids up.</Strong>{" "}You pay premium rates to
          sit above apps with more ratings, better screenshots, and years of
          download velocity.
        </LI>
        <LI>
          <Strong>Generic intent dilutes conversion.</Strong>{" "}The user who
          wanted a free game and the user who wanted your subscription tool both
          search broad terms. You pay for both taps.
        </LI>
      </UL>
      <P>
        Head terms become viable later, once you know your LTV by keyword and
        can afford to bid against established competitors. Not in the first $500.
      </P>
      <P>
        Think of head terms as scaling keywords, not learning keywords. You scale
        them when one long-tail variant already proves the intent converts. You
        do not start there hoping volume will teach you something revenue data
        cannot.
      </P>
      <P>
        Keep Search Match off while you learn. It expands into head-like broad
        matching automatically. See{" "}
        <A href="/blog/search-match-eating-your-budget">
          Search Match is eating your budget
        </A>{" "}
        if that setting is still on.
      </P>

      <H2>How to split your first $500</H2>
      <P>
        A practical allocation for a solo dev testing in one storefront, usually
        the US:
      </P>
      <OL>
        <LI>
          <Strong>Brand campaign, Exact match, ~$50&ndash;$100 total.</Strong>{" "}
          Your app name and two or three close variants. Run until you own the
          top slot consistently.
        </LI>
        <LI>
          <Strong>Category campaign, Exact match, ~$400&ndash;$450.</Strong>{" "}
          Ten to fifteen long-tail terms you would genuinely want to rank for
          organically. Not the shortest version of each idea. The specific one.
        </LI>
        <LI>
          <Strong>Daily cap you can lose.</Strong>{" "}
          $10&ndash;15/day across both campaigns. Four to six weeks of runway.
        </LI>
      </OL>
      <P>
        One storefront. One match type per ad group. No Discovery campaigns yet.
        No head terms until the long-tail list shows you which intent converts.
      </P>
      <P>
        Example split for a note-taking app: brand on &ldquo;your app name&rdquo;
        and &ldquo;your app name app.&rdquo; Category on &ldquo;voice memo for
        lectures,&rdquo; &ldquo;meeting notes app,&rdquo; &ldquo;audio note
        taker,&rdquo; not on &ldquo;notes app&rdquo; or &ldquo;productivity.&rdquo;
        The specific phrases cost less and tell you more.
      </P>
      <P>
        If you are not sure ASA is right for your app yet, read{" "}
        <A href="/blog/apple-search-ads-for-beginners">
          Apple Search Ads for beginners
        </A>{" "}
        before you spend.
      </P>

      <H2>What to measure after two weeks</H2>
      <P>
        Do not judge this test on install count alone.
      </P>
      <UL>
        <LI>
          <Strong>Brand campaign:</Strong>{" "}cost per install should be low. If
          brand is expensive, something is wrong with your listing or a
          competitor is bidding aggressively on your name.
        </LI>
        <LI>
          <Strong>Category long-tail:</Strong>{" "}look for terms with trials or
          purchases, not just taps. One keyword with three paid conversions
          beats ten keywords with thirty installs and zero revenue.
        </LI>
        <LI>
          <Strong>Head terms you accidentally triggered:</Strong>{" "}pause anything
          broad that Search Match or Broad match surfaced. Add winners as Exact
          keywords manually.
        </LI>
      </UL>
      <P>
        The native ASA dashboard shows spend and installs per keyword. It does
        not show subscription revenue. Connect RevenueCat before you decide
        which category terms to scale.{" "}
        <A href="https://appskale.ai/">AppSkale</A>{" "}puts revenue per keyword
        next to spend so you can see which terms fund the account and which
        only burn the first $500.
      </P>

      <H2>Where to go next</H2>
      <P>
        Brand first. Long-tail category second. Head terms later, only with
        revenue data. That is the order that turns $500 into learning instead
        of noise.
      </P>
      <P>
        After four to six weeks, pause keywords that spend without revenue and
        put more budget on the terms that produce trials or purchases. For the
        ROAS math behind the revenue check, see{" "}
        <A href="/blog/how-to-calculate-apple-search-ads-roas-with-revenuecat">
          how to calculate Apple Search Ads ROAS with RevenueCat
        </A>
        . For setup, use the{" "}
        <A href="/apple-search-ads-attribution-setup-guide">
          Apple Search Ads attribution setup guide
        </A>
        .
      </P>
      <P>
        When you are ready to see which keywords actually pay for themselves,{" "}
        <A href="https://appskale.ai/">AppSkale</A> shows brand and category
        spend alongside subscription revenue on one screen.
      </P>
    </>
  );
}
