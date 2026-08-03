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
  "/images/blog/apple-search-ads-search-terms-report/cover.png";

export function AppleSearchAdsSearchTermsReportBody() {
  return (
    <>
      <P>
        The keyword report tells you what you meant to buy. The search terms
        report tells you what Apple actually showed you for. Those are not the
        same thing, especially once Broad match or Search Match is involved.
      </P>
      <P>
        Beginners live in the keyword tab, sort by CPI, and make decisions from
        averages. Then they wonder why a &ldquo;good&rdquo; keyword still feels
        random. The randomness is usually visible one click deeper: in the
        search terms that triggered the ad.
      </P>
      <P>
        This post is a practical read of the Apple Search Ads search terms
        report: what each row means, what to promote, what to negative, and what
        to ignore until you have more data.
      </P>

      <H2>Keywords vs search terms</H2>
      <InlineImage
        src={COVER_IMAGE}
        alt="Diagram showing Apple Search Ads keywords you bid on versus search terms that actually triggered the ads"
        width={1024}
        height={682}
      />
      <P>
        A <Strong>keyword</Strong>{" "}is the term you added to an ad group with a
        match type. A <Strong>search term</Strong>{" "}is the actual App Store
        query that matched and spent.
      </P>
      <P>
        On Exact match, those are usually close. On Broad match or Search Match,
        one keyword can spawn a long list of related queries. That is why Exact
        learning stays readable and Broad without harvest becomes fog. See{" "}
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
        If you only manage keywords, you manage intent at the wrong resolution.
      </P>

      <H2>What to look at first</H2>
      <P>
        Open search terms for the last seven days. Sort by spend. Ignore the
        vanity of tiny rows until the big spenders are handled.
      </P>
      <OL>
        <LI>
          <Strong>Spend</Strong>{" "}&mdash; which queries actually taxed the
          budget
        </LI>
        <LI>
          <Strong>Taps and installs</Strong>{" "}&mdash; whether the query got
          engagement
        </LI>
        <LI>
          <Strong>Trial starts or revenue</Strong>{" "}&mdash; if you can see them.
          This is the real keep/pause signal for subscription apps
        </LI>
        <LI>
          <Strong>Match source</Strong>{" "}&mdash; Exact keyword, Broad
          expansion, or Search Match noise
        </LI>
      </OL>
      <P>
        CPT and CPI still help as diagnostics. They are not the decision. See{" "}
        <A href="/blog/cpt-vs-cpi-apple-search-ads">
          CPT vs CPI
        </A>
        . A cheap search term with no trials is not a win.
      </P>

      <H2>The four buckets every row falls into</H2>
      <P>
        When you scan a search term, put it in one bucket:
      </P>
      <UL>
        <LI>
          <Strong>Promote to Exact.</Strong>{" "}The query converts, or clearly
          starts trials, and you want to bid on it deliberately. Add it as an
          Exact keyword in the right ad group.
        </LI>
        <LI>
          <Strong>Negative.</Strong>{" "}Wrong platform, wrong audience, free-only
          hunters, jobs, or any theme that repeatedly spends with no path to
          revenue. Details in{" "}
          <A href="/blog/apple-search-ads-negative-keywords">
            negative keywords
          </A>
          .
        </LI>
        <LI>
          <Strong>Watch.</Strong>{" "}Some spend, unclear outcome, still inside
          your trial lag. Do not crown it or kill it after two taps.
        </LI>
        <LI>
          <Strong>Ignore for now.</Strong>{" "}Tiny spend, no pattern. Come back
          next week if it grows.
        </LI>
      </UL>
      <P>
        Most beginner accounts fail by doing the opposite: ignoring big waste
        and overreacting to tiny rows.
      </P>

      <H2>How to read Exact vs Broad rows</H2>
      <P>
        <Strong>Exact ad groups:</Strong>{" "}search terms should mostly look like
        the keywords you chose, plus close variants. If Exact is somehow
        producing weird queries, check whether Search Match is on or whether you
        mixed match types in the ad group.
      </P>
      <P>
        <Strong>Broad or discovery ad groups:</Strong>{" "}the search terms report
        is the product. The seed keyword is just the door. Harvest winners into
        Exact. Negative losers. Leave the middle alone until there is enough
        spend to judge.
      </P>
      <P>
        Do not leave a converting Broad query buried forever. If
        &ldquo;habit tracker for ADHD&rdquo; is the term that pays, that phrase
        should become an Exact keyword with its own bid and reporting line.
      </P>

      <H2>A weekly search terms routine</H2>
      <P>
        Fifteen to twenty minutes is enough for most indie budgets.
      </P>
      <OL>
        <LI>
          Filter to the last 7 days. One storefront if you can.
        </LI>
        <LI>
          Sort by spend. Work top-down.
        </LI>
        <LI>
          Promote clear winners to Exact brand or category ad groups.
        </LI>
        <LI>
          Negative clear mismatches and repeated non-converting themes.
        </LI>
        <LI>
          Note anything expensive with installs but no trials. That may be bad
          intent or a funnel leak. See{" "}
          <A href="/blog/asa-cpi-great-paywall-conversion-terrible">
            your ASA CPI looks great, your paywall conversion is terrible
          </A>
          .
        </LI>
        <LI>
          Stop. Do not rebuild the whole account every week.
        </LI>
      </OL>
      <P>
        If your list is too long to review, the problem started earlier. Keep
        active keywords short enough that search terms stay reviewable. See{" "}
        <A href="/blog/how-many-keywords-apple-search-ads">
          how many keywords you should run
        </A>
        .
      </P>

      <H2>Common misreads</H2>
      <UL>
        <LI>
          <Strong>Judging a Broad keyword by its average CPI.</Strong>{" "}The
          average can hide one good query and five bad ones.
        </LI>
        <LI>
          <Strong>Negativing after one or two taps.</Strong>{" "}Need a pattern, or
          an obvious intent mismatch.
        </LI>
        <LI>
          <Strong>Never checking brand search terms.</Strong>{" "}Useful for
          catching misspellings worth adding, or junk variants worth blocking.
        </LI>
        <LI>
          <Strong>Treating rival brand queries as category wins.</Strong>{" "}Those
          belong in a separate conquest test, if at all. See{" "}
          <A href="/blog/competitor-keywords-apple-search-ads">
            competitor keywords
          </A>
          .
        </LI>
        <LI>
          <Strong>Optimizing search terms on installs only.</Strong>{" "}For
          subscription apps, installs without trials are incomplete evidence.
        </LI>
      </UL>

      <H2>What &ldquo;good&rdquo; looks like after a month</H2>
      <P>
        A healthy account does not have a perfect search terms report. It has a
        visible loop:
      </P>
      <UL>
        <LI>
          Exact brand and long-tail category terms produce mostly expected
          queries
        </LI>
        <LI>
          Discovery, if used, feeds new Exact winners every week or two
        </LI>
        <LI>
          Negatives grow as themes, not as panic one-offs
        </LI>
        <LI>
          Spend concentrates on terms that create trials or revenue
        </LI>
      </UL>
      <P>
        If search terms stay chaotic after a month, check structure first: Search
        Match on, Broad mixed into Exact, too many keywords, or a daily budget
        too thin to generate clean samples. See{" "}
        <A href="/blog/apple-search-ads-daily-budget">
          Apple Search Ads daily budget
        </A>{" "}
        and{" "}
        <A href="/blog/brand-vs-category-keywords-first-500">
          where your first $500 should go
        </A>
        .
      </P>
      <P>
        The native report shows which queries spent. It does not cleanly show
        which of those queries became subscribers.{" "}
        <A href="https://appskale.ai/">AppSkale</A>{" "}puts ASA spend next to
        RevenueCat revenue so search-term decisions can follow paying users, not
        just taps.
      </P>

      <H2>Where to go next</H2>
      <P>
        Read the search terms report top-down by spend. Promote winners to Exact.
        Negative clear waste. Watch the middle. Ignore the noise until it earns
        attention. That weekly loop is how small Apple Search Ads accounts stay
        legible.
      </P>
      <P>
        For match-type setup, use{" "}
        <A href="/blog/exact-vs-broad-match-apple-search-ads">
          Exact vs Broad match
        </A>
        . For cleanup, use{" "}
        <A href="/blog/apple-search-ads-negative-keywords">
          negative keywords
        </A>
        . For attribution before you scale harvest decisions, follow the{" "}
        <A href="/apple-search-ads-attribution-setup-guide">
          Apple Search Ads attribution setup guide
        </A>
        . For ROAS once conversions land, read{" "}
        <A href="/blog/how-to-calculate-apple-search-ads-roas-with-revenuecat">
          how to calculate Apple Search Ads ROAS with RevenueCat
        </A>
        .
      </P>
      <P>
        When you want search-term-level spend tied to subscription outcomes,{" "}
        <A href="https://appskale.ai/">AppSkale</A> connects Apple Search Ads to
        RevenueCat so the report becomes a revenue tool, not just a query list.
      </P>
    </>
  );
}
