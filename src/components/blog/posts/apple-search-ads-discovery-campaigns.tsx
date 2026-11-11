import {
  A,
  H2,
  LI,
  OL,
  P,
  Strong,
  UL,
} from "@/components/blog/Prose";

export function AppleSearchAdsDiscoveryCampaignsBody() {
  return (
    <>
      <P>
        Discovery campaigns sound like free keyword research. Apple finds
        searches you did not add, you get installs, you harvest the winners.
        On a small budget, that pitch often turns into spend you cannot explain
        and a search terms report you cannot finish.
      </P>
      <P>
        Discovery is not bad. It is a later tool. This post covers what
        discovery campaigns are for, when beginners should skip them, and how
        to run a capped test once Exact learning is already working.
      </P>

      <H2>What a discovery campaign actually does</H2>
      <P>
        In Apple Search Ads, discovery usually means letting Apple expand beyond
        your manual Exact list: Search Match, Broad match, or a dedicated
        discovery-style setup whose job is to surface new queries.
      </P>
      <P>
        The point is not &ldquo;more installs.&rdquo; The point is a harvest
        loop: new search terms appear, you promote converters to Exact, you
        negative junk, you keep the discovery budget small so it cannot eat the
        account.
      </P>
      <P>
        If you never open the{" "}
        <A href="/blog/apple-search-ads-search-terms-report">
          search terms report
        </A>
        , discovery is just uncontrolled spend with a nicer name.
      </P>

      <H2>Why beginners should wait</H2>
      <UL>
        <LI>
          <Strong>You do not know what &ldquo;good&rdquo; looks like yet.</Strong>{" "}
          Without Exact brand and long-tail baselines, every discovery query
          looks equally mysterious.
        </LI>
        <LI>
          <Strong>Thin budgets get diluted.</Strong>{" "}Discovery competes with
          the keywords you are still trying to measure. See{" "}
          <A href="/blog/apple-search-ads-daily-budget">
            daily budget
          </A>{" "}
          and{" "}
          <A href="/blog/how-many-keywords-apple-search-ads">
            how many keywords you should run
          </A>
          .
        </LI>
        <LI>
          <Strong>Search Match on by default already creates chaos.</Strong>{" "}
          Turning on more expansion before you clean that up doubles the fog.
          Read{" "}
          <A href="/blog/search-match-eating-your-budget">
            Search Match is eating your budget
          </A>
          .
        </LI>
        <LI>
          <Strong>Funnel leaks get louder.</Strong>{" "}More low-intent taps into a
          weak paywall just accelerate the loss. See{" "}
          <A href="/blog/asa-cpi-great-paywall-conversion-terrible">
            CPI looks great, paywall conversion is terrible
          </A>
          .
        </LI>
      </UL>

      <H2>When discovery becomes useful</H2>
      <P>
        Turn it on only when most of these are true:
      </P>
      <UL>
        <LI>
          Brand Exact is stable and category Exact has a few clear winners or
          losers
        </LI>
        <LI>
          Attribution works and you can see trials or revenue by keyword
        </LI>
        <LI>
          You will review search terms weekly and actually promote or negative
        </LI>
        <LI>
          You can give discovery its own small cap without starving Exact
        </LI>
      </UL>
      <P>
        That usually means after four to six weeks of Exact learning, not week
        one. Match-type foundations are in{" "}
        <A href="/blog/exact-vs-broad-match-apple-search-ads">
          Exact vs Broad match
        </A>
        .
      </P>

      <H2>How to run a clean discovery test</H2>
      <OL>
        <LI>
          <Strong>Separate campaign or ad group.</Strong>{" "}Do not mix discovery
          into brand Exact.
        </LI>
        <LI>
          <Strong>Hard daily cap.</Strong>{" "}Treat it as research tuition, often
          a fraction of your Exact budget.
        </LI>
        <LI>
          <Strong>One expansion method at a time.</Strong>{" "}Broad or Search
          Match-style discovery, not every switch flipped.
        </LI>
        <LI>
          <Strong>Weekly harvest.</Strong>{" "}Winners become Exact. Waste becomes{" "}
          <A href="/blog/apple-search-ads-negative-keywords">
            negatives
          </A>
          . The middle stays on watch.
        </LI>
        <LI>
          <Strong>Judge on trials and revenue, not CPI.</Strong>{" "}Discovery can
          look cheap on installs and terrible on paid conversion. See{" "}
          <A href="/blog/cpt-vs-cpi-apple-search-ads">
            CPT vs CPI
          </A>
          .
        </LI>
      </OL>

      <H2>What success looks like</H2>
      <P>
        A good discovery setup produces a short list of new Exact keywords you
        would not have guessed, without blowing the learning budget. A bad one
        produces a long search terms table, flat ROAS, and the urge to &ldquo;add
        more keywords&rdquo; instead of harvesting.
      </P>
      <P>
        If discovery never yields a promoter after a fair window, pause it. Exact
        winners already in the account deserve the money more than another week
        of vague expansion.
      </P>
      <P>
        Connect RevenueCat before you scale either side. Setup help:{" "}
        <A href="/apple-search-ads-attribution-setup-guide">
          Apple Search Ads attribution setup guide
        </A>
        . ROAS math:{" "}
        <A href="/blog/how-to-calculate-apple-search-ads-roas-with-revenuecat">
          calculate ASA ROAS with RevenueCat
        </A>
        .{" "}
        <A href="https://appskale.ai/">AppSkale</A>{" "}puts spend next to
        subscription revenue so discovery harvest decisions are based on paying
        users.
      </P>

      <H2>Where to go next</H2>
      <P>
        Discovery campaigns are optional. Exact brand and long-tail category
        come first. Add discovery later as a capped research engine with a
        weekly search-terms harvest, or skip it until the account can afford
        noise.
      </P>
      <P>
        Start with{" "}
        <A href="/blog/apple-search-ads-for-beginners">
          Apple Search Ads for beginners
        </A>{" "}
        and{" "}
        <A href="/blog/brand-vs-category-keywords-first-500">
          where your first $500 should go
        </A>
        . When you are ready to see which discovered terms pay,{" "}
        <A href="https://appskale.ai/">AppSkale</A> connects ASA spend to
        RevenueCat revenue at the keyword level.
      </P>
    </>
  );
}
