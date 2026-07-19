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
  "/images/blog/how-many-keywords-apple-search-ads/cover.png";

export function HowManyKeywordsAppleSearchAdsBody() {
  return (
    <>
      <P>
        Ask five indie developers how many keywords they run in Apple Search
        Ads and you will get five answers: five, fifty, a few hundred, whatever
        Search Match finds, or &ldquo;I just keep adding.&rdquo; More keywords
        feel like more coverage. On a small budget, more keywords usually mean
        thinner data and slower decisions.
      </P>
      <P>
        The real question is not how many keywords you can add. It is how many
        you can measure. If spend is spread across eighty Exact terms at
        $10/day, most of them never get a fair sample. You pause winners by
        accident and keep losers alive because neither side produced a clear
        signal.
      </P>
      <P>
        This post gives a practical range for beginners, how to structure those
        keywords into ad groups, and when to grow the list without turning the
        account into noise.
      </P>

      <H2>Start smaller than you think</H2>
      <InlineImage
        src={COVER_IMAGE}
        alt="Diagram showing a focused Apple Search Ads keyword list versus an overcrowded account that cannot produce clear signal"
        width={1024}
        height={682}
      />
      <P>
        For a first learning phase in one storefront, a clean default looks like
        this:
      </P>
      <UL>
        <LI>
          <Strong>Brand:</Strong>{" "}2&ndash;5 Exact keywords for your app name
          and close variants
        </LI>
        <LI>
          <Strong>Category long-tail:</Strong>{" "}10&ndash;15 Exact keywords
          that describe a specific use case
        </LI>
        <LI>
          <Strong>Total:</Strong>{" "}roughly 12&ndash;20 active keywords while
          you learn
        </LI>
      </UL>
      <P>
        That range is not magic. It matches the budget reality of many solo
        apps: a few hundred dollars over four to six weeks. At that spend level,
        twenty focused terms beat eighty half-tested ones. The same allocation
        logic shows up in{" "}
        <A href="/blog/brand-vs-category-keywords-first-500">
          where your first $500 should go
        </A>
        .
      </P>
      <P>
        If your daily budget is under about $15, err toward the low end. Every
        extra keyword competes for the same scarce taps.
      </P>

      <H2>Why fifty keywords fail beginners</H2>
      <P>
        Big lists feel thorough. They usually create three problems:
      </P>
      <UL>
        <LI>
          <Strong>No keyword gets enough spend.</Strong>{" "}You cannot tell if a
          term is bad or just starved.
        </LI>
        <LI>
          <Strong>Weekly reviews become busywork.</Strong>{" "}You scan a wall of
          zeros and low-tap rows instead of deciding on a short list.
        </LI>
        <LI>
          <Strong>Structure collapses.</Strong>{" "}Brand, head terms, long-tail,
          competitors, and Broad discoveries end up in one blob. Reporting
          stops meaning anything.
        </LI>
      </UL>
      <P>
        I have opened accounts where almost every keyword had a few taps and
        nothing conclusive. The owner thought they needed more keywords. They
        needed fewer, with clearer jobs.
      </P>

      <H2>Structure matters more than the raw count</H2>
      <P>
        Do not dump every term into one ad group. Split by job:
      </P>
      <OL>
        <LI>
          <Strong>Brand Exact ad group.</Strong>{" "}App name and close variants.
          Defensive, cheap, high intent.
        </LI>
        <LI>
          <Strong>Category Exact ad group.</Strong>{" "}Ten to fifteen long-tail
          terms. This is your learning engine.
        </LI>
        <LI>
          <Strong>Discovery later, separate.</Strong>{" "}Broad match or a small
          Search Match test only after Exact has taught you something. Keep it
          in its own ad group so expansion does not pollute brand and Exact
          reporting.
        </LI>
      </OL>
      <P>
        One match type per ad group while you learn. Mixing Exact and Broad in
        the same place makes the count meaningless because you no longer know
        what each keyword is really buying. See{" "}
        <A href="/blog/exact-vs-broad-match-apple-search-ads">
          Exact vs Broad match
        </A>
        .
      </P>
      <P>
        Keep Search Match off on the learning campaigns. If Apple is adding
        queries behind the scenes, your &ldquo;15 keywords&rdquo; are not
        really 15. Details in{" "}
        <A href="/blog/search-match-eating-your-budget">
          Search Match is eating your budget
        </A>
        .
      </P>

      <H2>What counts as a keyword worth adding</H2>
      <P>
        Before you grow past twenty, every new term should clear a simple bar:
      </P>
      <UL>
        <LI>
          It maps to a real user problem your app solves
        </LI>
        <LI>
          You would want to rank for it organically
        </LI>
        <LI>
          It is specific enough that a tap implies intent, not casual browsing
        </LI>
        <LI>
          You can afford to give it a fair sample without starving winners
        </LI>
      </UL>
      <P>
        Skip head terms early. &ldquo;Notes app,&rdquo; &ldquo;meditation,&rdquo;
        and &ldquo;fitness&rdquo; look important and usually burn learning
        budget before you have revenue data. Prefer &ldquo;voice memo for
        lectures&rdquo; over &ldquo;recorder app.&rdquo;
      </P>
      <P>
        Also skip giant competitor lists on day one unless conquest is an
        intentional test with its own budget. Competitor terms are keywords
        too. They still count against your ability to measure the rest.
      </P>

      <H2>When to add more keywords</H2>
      <P>
        Grow the list only after the current list is producing decisions.
      </P>
      <UL>
        <LI>
          <Strong>Add</Strong>{" "}when several Exact terms clearly produce
          trials or revenue and you have budget left to test adjacent intents
        </LI>
        <LI>
          <Strong>Add from discovery</Strong>{" "}when Broad or search terms
          surface a converting query. Promote it to Exact. Do not leave winners
          buried in expansion forever.
        </LI>
        <LI>
          <Strong>Do not add</Strong>{" "}because the account feels quiet. Low
          volume on a tight list is often better than fake activity on a huge
          one.
        </LI>
        <LI>
          <Strong>Pause before you pile on.</Strong>{" "}If half the list has
          spend and no trials after a fair window, cut first. Adding more
          keywords will not fix dead intent.
        </LI>
      </UL>
      <P>
        A practical growth path: start around 15 Exact terms, harvest search
        terms weekly, negative the junk, promote Broad winners, and only then
        expand toward 25&ndash;40 active Exact keywords. Past that, you need
        either more budget or ruthless pausing.{" "}
        <A href="/blog/apple-search-ads-negative-keywords">
          Negative keywords
        </A>{" "}
        keep the growing list from filling with waste.
      </P>

      <H2>How budget changes the answer</H2>
      <P>
        Keyword count scales with spend and patience, not ambition.
      </P>
      <UL>
        <LI>
          <Strong>About $10&ndash;15/day:</Strong>{" "}stay near 12&ndash;20
          Exact keywords. One storefront. No Broad yet unless you carve a tiny
          discovery budget on purpose.
        </LI>
        <LI>
          <Strong>About $20&ndash;40/day:</Strong>{" "}you can support more Exact
          terms or a small separate discovery ad group, still with weekly
          harvest.
        </LI>
        <LI>
          <Strong>Higher budgets:</Strong>{" "}more keywords become workable only
          if reporting stays keyword-level and you pause losers on a schedule.
          A big budget with no review cadence just funds a bigger mess.
        </LI>
      </UL>
      <P>
        If you are running multiple countries, do not multiply a bloated list
        across storefronts. Prove a short list in one market first. Country-level
        ROAS differences can make the same keyword look smart in one place and
        terrible in another.
      </P>

      <H2>A weekly keyword-count routine</H2>
      <OL>
        <LI>
          <Strong>Count active keywords by ad group.</Strong>{" "}Brand, category
          Exact, discovery. If category Exact crossed thirty and half have no
          signal, cut before adding.
        </LI>
        <LI>
          <Strong>Rank by spend and trials, not by hope.</Strong>{" "}Keep terms
          with real engagement. Pause terms with spend and no path to revenue.
        </LI>
        <LI>
          <Strong>Promote discovery winners to Exact.</Strong>{" "}Each promotion
          should replace or outrank a weaker Exact term if budget is tight.
        </LI>
        <LI>
          <Strong>Cap net new keywords.</Strong>{" "}Adding five and pausing zero
          every week is how lists explode.
        </LI>
        <LI>
          <Strong>Judge on revenue, not installs.</Strong>{" "}Cheap CPI on a
          giant list can still be a dead account. See{" "}
          <A href="/blog/asa-cpi-great-paywall-conversion-terrible">
            your ASA CPI looks great, your paywall conversion is terrible
          </A>{" "}
          if installs look fine and subscribers do not.
        </LI>
      </OL>
      <P>
        The native ASA dashboard will show you a long keyword table. It will
        not tell you which of those rows fund subscriptions.{" "}
        <A href="https://appskale.ai/">AppSkale</A>{" "}puts spend next to
        RevenueCat revenue so you can keep the list short on purpose.
      </P>

      <H2>Where to go next</H2>
      <P>
        For most beginners, the right number of Apple Search Ads keywords is
        closer to fifteen than fifty. Split brand and category Exact, keep
        discovery separate, grow only after the current list produces clear
        keep/pause decisions, and never confuse a longer spreadsheet with a
        better strategy.
      </P>
      <P>
        If you are still setting foundation controls, read{" "}
        <A href="/blog/apple-search-ads-for-beginners">
          Apple Search Ads for beginners
        </A>
        , then{" "}
        <A href="/blog/brand-vs-category-keywords-first-500">
          brand vs category keywords
        </A>
        . For match types and cleanup, use{" "}
        <A href="/blog/exact-vs-broad-match-apple-search-ads">
          Exact vs Broad match
        </A>{" "}
        and{" "}
        <A href="/blog/apple-search-ads-negative-keywords">
          negative keywords
        </A>
        . For attribution setup, follow the{" "}
        <A href="/apple-search-ads-attribution-setup-guide">
          Apple Search Ads attribution setup guide
        </A>
        .
      </P>
      <P>
        When you want to see which of those keywords actually pay,{" "}
        <A href="https://appskale.ai/">AppSkale</A> connects Apple Search Ads
        spend to RevenueCat revenue so list size follows evidence, not FOMO.
      </P>
    </>
  );
}
