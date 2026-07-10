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
  "/images/blog/exact-vs-broad-match-apple-search-ads/cover.png";

export function ExactVsBroadMatchAppleSearchAdsBody() {
  return (
    <>
      <P>
        You open Apple Search Ads, add a keyword, and Apple asks for a match
        type: Exact or Broad. Most beginners pick Broad because it sounds like
        more traffic. Then the search terms report fills with queries they never
        meant to buy, spend climbs, and they still cannot tell which keywords
        actually work.
      </P>
      <P>
        Match type is not a minor setting. It decides whether you are testing a
        specific search phrase or letting Apple expand around it. Get it wrong
        early and you spend your learning budget on noise.
      </P>
      <P>
        This post explains what Exact and Broad actually do, which one beginners
        should use first, and when Broad becomes useful later. If Search Match
        is still on, fix that first. See{" "}
        <A href="/blog/search-match-eating-your-budget">
          Search Match is eating your budget
        </A>
        . Search Match and Broad match are different controls that create the
        same kind of mess when you are still learning.
      </P>

      <H2>Exact match vs Broad match in plain English</H2>
      <InlineImage
        src={COVER_IMAGE}
        alt="Diagram comparing Apple Search Ads Exact match keywords to Broad match expansion for beginner campaigns"
        width={1024}
        height={682}
      />
      <P>
        <Strong>Exact match</Strong>{" "}means your ad can show for that keyword
        and close variants Apple treats as the same intent: plurals, misspellings,
        and very similar word order. If you bid Exact on &ldquo;habit tracker
        for ADHD,&rdquo; you are mostly buying that search, not every related
        habit app query in the store.
      </P>
      <P>
        <Strong>Broad match</Strong>{" "}means Apple can show your ad for searches
        related to your keyword, including synonyms and looser variations. Bid
        Broad on &ldquo;habit tracker&rdquo; and you may appear for terms that
        share the theme but not the intent you wanted. More reach. Less control.
      </P>
      <P>
        Neither match type is &ldquo;wrong.&rdquo; They solve different jobs.
        Exact is for controlled learning. Broad is for discovery once you can
        measure which expanded queries convert into trials and revenue.
      </P>

      <H2>Why beginners should start with Exact</H2>
      <P>
        Your first Apple Search Ads budget is tuition. The goal is a clean
        answer: which search terms bring users who pay? Exact match is built for
        that.
      </P>
      <UL>
        <LI>
          <Strong>Cleaner signal.</Strong>{" "}When a keyword spends, you know
          roughly which query you bought. Broad blurs that into a cloud of
          related searches.
        </LI>
        <LI>
          <Strong>Easier decisions.</Strong>{" "}Pause, keep, or scale one phrase
          at a time. Broad forces you to mine the search terms report before you
          even know your baseline conversion.
        </LI>
        <LI>
          <Strong>Less wasted spend.</Strong>{" "}Broad can look productive because
          volume rises. Volume without revenue is not progress for a subscription
          app.
        </LI>
        <LI>
          <Strong>Better fit for small lists.</Strong>{" "}Brand defense plus ten
          to fifteen long-tail category terms works best as Exact. That is the
          same allocation logic as{" "}
          <A href="/blog/brand-vs-category-keywords-first-500">
            where your first $500 should go
          </A>
          .
        </LI>
      </UL>
      <P>
        I burned early budget on Broad because it felt like I was &ldquo;covering
        the category.&rdquo; Installs came in. The search terms report was a
        mess. I could not tell whether the original keyword was good or whether
        Apple had wandered into cheap, low-intent queries. Switching those
        learning campaigns to Exact made the account readable again.
      </P>

      <H2>What Broad match is actually for</H2>
      <P>
        Broad match is a discovery tool, not a beginner default.
      </P>
      <P>
        Use it when you already know:
      </P>
      <UL>
        <LI>
          Your brand Exact campaign is stable
        </LI>
        <LI>
          A set of Exact category terms produces trials or revenue
        </LI>
        <LI>
          You can review search terms weekly and promote winners into Exact
        </LI>
        <LI>
          You have negative keywords ready for obvious junk
        </LI>
      </UL>
      <P>
        The Broad workflow is simple: let it surface related queries, harvest
        the ones that convert, add those as Exact keywords in a controlled ad
        group, and negative out the rest. Broad without that harvest loop is
        just uncontrolled spend with extra steps.
      </P>
      <P>
        Do not confuse Broad match with Search Match. Broad expands around
        keywords you chose. Search Match lets Apple bid on terms beyond your
        list using app metadata and other signals. Beginners often leave both
        on and then wonder why the account feels random. Turn Search Match off
        during the learning phase. Keep Broad off until Exact has taught you
        something.
      </P>

      <H2>A practical setup for your first campaigns</H2>
      <OL>
        <LI>
          <Strong>Brand ad group, Exact match.</Strong>{" "}Your app name and a
          couple of close variants. Low risk, high intent, defensive.
        </LI>
        <LI>
          <Strong>Category ad group, Exact match.</Strong>{" "}Ten to fifteen
          long-tail terms that describe a specific use case, not head terms
          like &ldquo;notes app&rdquo; or &ldquo;fitness.&rdquo;
        </LI>
        <LI>
          <Strong>One match type per ad group.</Strong>{" "}Do not mix Exact and
          Broad in the same ad group while you are learning. It muddies bids
          and reporting.
        </LI>
        <LI>
          <Strong>Search Match off.</Strong>{" "}Especially on the first few
          hundred dollars.
        </LI>
        <LI>
          <Strong>Broad later, in a separate discovery ad group.</Strong>{" "}Only
          after Exact keywords show which intents convert, and only if you will
          actually mine search terms.
        </LI>
      </OL>
      <P>
        If you are still deciding whether ASA is worth running at all, start
        with{" "}
        <A href="/blog/apple-search-ads-for-beginners">
          Apple Search Ads for beginners
        </A>{" "}
        before you obsess over match types.
      </P>

      <H2>How to read results without fooling yourself</H2>
      <P>
        Match type changes what the dashboard means.
      </P>
      <UL>
        <LI>
          <Strong>On Exact:</Strong>{" "}judge the keyword itself. Low spend with
          no trials after a meaningful sample is a pause candidate. Spend with
          trials but flat ROAS may still be a timing issue if your trial has
          not converted yet. See{" "}
          <A href="/blog/trial-started-roas-didnt-move">
            your trial started, your ROAS didn&rsquo;t move
          </A>
          .
        </LI>
        <LI>
          <Strong>On Broad:</Strong>{" "}do not crown the seed keyword a winner
          just because the ad group spent. Open search terms. Find the queries
          that drove taps and conversions. Those queries are the real inventory.
        </LI>
        <LI>
          <Strong>Promote winners to Exact.</Strong>{" "}Once a Broad search term
          proves itself, add it as Exact so you can bid and measure it
          deliberately.
        </LI>
        <LI>
          <Strong>Negative the junk.</Strong>{" "}Irrelevant Broad expansions
          should not keep taxing the budget while you &ldquo;wait for more
          data.&rdquo;
        </LI>
      </UL>
      <P>
        Cost per install will flatter Broad if it finds cheap, loose traffic.
        Revenue per keyword is the decision metric. Connect RevenueCat before
        you scale either match type. The math is in{" "}
        <A href="/blog/how-to-calculate-apple-search-ads-roas-with-revenuecat">
          how to calculate Apple Search Ads ROAS with RevenueCat
        </A>
        .
      </P>

      <H2>Common match-type mistakes</H2>
      <UL>
        <LI>
          <Strong>Starting on Broad to &ldquo;get more data.&rdquo;</Strong>{" "}
          You get more rows, not better answers.
        </LI>
        <LI>
          <Strong>Mixing Exact and Broad in one ad group.</Strong>{" "}You lose
          clean control of which match type drove the result.
        </LI>
        <LI>
          <Strong>Running Broad with Search Match on.</Strong>{" "}Two expansion
          layers at once. Hard to diagnose. Easy to overspend.
        </LI>
        <LI>
          <Strong>Never graduating Broad winners to Exact.</Strong>{" "}Then you
          keep rediscovering the same terms at whatever bid Broad happens to
          win.
        </LI>
        <LI>
          <Strong>Judging Broad on CPI alone.</Strong>{" "}Cheap installs from
          weak intent are not a Broad success story.
        </LI>
      </UL>

      <H2>When to add Broad match</H2>
      <P>
        A simple rule: add Broad only after Exact has produced at least one
        clear lesson about which intents convert for your app.
      </P>
      <P>
        That usually means four to six weeks of Exact brand and long-tail
        category testing, attribution working, and enough trial or revenue
        signal to know what &ldquo;good&rdquo; looks like. Then open a separate
        discovery ad group on Broad with a modest budget, review search terms
        weekly, and feed winners back into Exact.
      </P>
      <P>
        If attribution is not set up yet, do that before you expand match types.
        Use the{" "}
        <A href="/apple-search-ads-attribution-setup-guide">
          Apple Search Ads attribution setup guide
        </A>
        . Expanding Broad into an unmeasured account just accelerates confusion.
      </P>
      <P>
        The native ASA dashboard shows spend and installs by keyword. It does
        not show subscription revenue cleanly next to those match-type tests.{" "}
        <A href="https://appskale.ai/">AppSkale</A>{" "}puts ASA spend beside
        RevenueCat revenue so you can tell whether Exact winners and Broad
        discoveries are actually funding the account.
      </P>

      <H2>Where to go next</H2>
      <P>
        Exact match first. Broad match later. Search Match off while you learn.
        That order keeps your first Apple Search Ads budget readable instead of
        turning it into a vague discovery experiment you cannot interpret.
      </P>
      <P>
        For keyword selection, use{" "}
        <A href="/blog/brand-vs-category-keywords-first-500">
          brand vs category keywords
        </A>
        . For the default expansion setting that trips most beginners, read{" "}
        <A href="/blog/search-match-eating-your-budget">
          Search Match is eating your budget
        </A>
        . For setup, follow the{" "}
        <A href="/apple-search-ads-attribution-setup-guide">
          Apple Search Ads attribution setup guide
        </A>
        .
      </P>
      <P>
        When you want to see which Exact keywords and Broad discoveries turn
        into paying users,{" "}
        <A href="https://appskale.ai/">AppSkale</A> connects Apple Search Ads
        spend to RevenueCat revenue at the keyword level.
      </P>
    </>
  );
}
