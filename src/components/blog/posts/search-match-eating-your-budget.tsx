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
  "/images/blog/search-match-eating-your-budget/cover.png";

export function SearchMatchEatingYourBudgetBody() {
  return (
    <>
      <P>
        You set up Apple Search Ads, picked a handful of keywords, and turned
        the campaign on. A week later you check the dashboard. Spend is up.
        Installs are up. Revenue is not. You scroll through the keyword report
        and half the terms do not look like anything you added.
      </P>
      <P>
        That is usually Search Match. Apple turns it on by default. It expands
        your campaign beyond the keywords you chose, bidding on related searches
        Apple thinks might convert. Sometimes it finds winners. More often, for
        indie apps still learning, it burns budget on broad, irrelevant taps
        before you get a clean read on anything.
      </P>
      <P>
        This post explains what Search Match actually does, when to keep it,
        and when to turn it off. If you are new to ASA entirely, start with{" "}
        <A href="/blog/apple-search-ads-for-beginners">
          Apple Search Ads for beginners
        </A>
        . If your campaigns are running but the keyword list looks wrong, keep
        reading.
      </P>

      <H2>What Search Match actually is</H2>
      <InlineImage
        src={COVER_IMAGE}
        alt="Diagram showing Apple Search Ads Search Match expanding bids beyond chosen keywords into unrelated App Store searches"
        width={1024}
        height={682}
      />
      <P>
        Search Match is an Apple Search Ads setting that lets Apple bid on
        search terms beyond the keywords you explicitly added to a campaign.
        You set a default max CPT bid at the ad group level. Apple uses your
        app metadata, category, and other signals to match your ad to searches
        it considers relevant. You still pay per tap. You just do not control
        which exact queries trigger the ad.
      </P>
      <P>
        This is different from the keywords you add manually in an Exact or Broad
        match ad group. Those are terms you chose. Search Match is Apple
        guessing on your behalf. The guess is sometimes reasonable. It is also
        sometimes completely off for your app.
      </P>
      <P>
        You will see Search Match activity in your search terms report even when
        your ad group looks clean. That is the point. Apple is testing queries
        against your max CPT bid without asking you first. If the bid is high
        enough and Apple thinks the app is relevant, the ad runs.
      </P>

      <H2>Why beginners leave it on</H2>
      <P>
        Three reasons, all understandable:
      </P>
      <UL>
        <LI>
          <Strong>It is on by default.</Strong>{" "}Most first campaigns ship with
          Search Match enabled. You have to know to look for it.
        </LI>
        <LI>
          <Strong>Apple frames it as discovery.</Strong>{" "}The pitch is that
          Search Match finds keywords you would not have thought of. That can
          happen. It can also find keywords that share a category but not user
          intent.
        </LI>
        <LI>
          <Strong>Install counts go up.</Strong>{" "}Broad matching almost always
          increases tap volume. If you are watching installs and not revenue, it
          looks like progress.
        </LI>
      </UL>
      <P>
        I left Search Match on for my first few campaigns because the install
        line looked healthy. When I finally split spend by keyword, a chunk of
        the budget was going to searches that had nothing to do with what my app
        actually did. Cheap installs on the wrong intent still cost money.
      </P>

      <H2>When Search Match is worth keeping</H2>
      <P>
        Search Match is not always wrong. It can make sense when:
      </P>
      <UL>
        <LI>
          <Strong>You already have revenue tracking at the keyword level.</Strong>{" "}
          You can see which auto-matched terms pay for themselves and cut the
          rest quickly.
        </LI>
        <LI>
          <Strong>You are deliberately running a discovery phase.</Strong>{" "}You
          have budget set aside to find new terms, separate from your core Exact
          match campaigns, and you plan to review search term reports weekly.
        </LI>
        <LI>
          <Strong>Your app has a wide use case.</Strong>{" "}A general productivity
          or utility app might genuinely match many queries. A niche B2B tool
          usually does not.
        </LI>
      </UL>
      <P>
        Even then, run Search Match in its own ad group with a daily cap you are
        willing to lose. Do not blend it with your brand defense or core
        category keywords in the same report without separating spend.
      </P>

      <H2>When to turn it off</H2>
      <P>
        Turn Search Match off if any of this sounds like you:
      </P>
      <UL>
        <LI>
          <Strong>First ASA campaign, learning budget under $500.</Strong>{" "}You
          need clean signal on a small keyword list, not noise from fifty
          auto-matched terms.
        </LI>
        <LI>
          <Strong>Your keyword report is full of terms you never added.</Strong>{" "}
          If &ldquo;free games&rdquo; or generic category phrases appear for your
          paid subscription app, Search Match is doing its job poorly.
        </LI>
        <LI>
          <Strong>Installs are up but revenue is flat.</Strong>{" "}Broad matching
          often drives low-intent taps. CPI looks fine. ROAS does not.
        </LI>
        <LI>
          <Strong>You cannot see revenue per keyword yet.</Strong>{" "}Without
          keyword-level revenue data, Search Match is guessing and you are
          guessing back.
        </LI>
      </UL>
      <P>
        For most indie devs in their first month of ASA, the right default is
        Search Match off. Learn on Exact match with ten to twenty keywords you
        would actually want to rank for. Turn Search Match back on later, in a
        controlled ad group, once you know what a profitable keyword looks like.
      </P>
      <P>
        Discovery campaigns at the account level are a separate conversation.
        Those cast an even wider net. If you are running both Search Match inside
        a Search Results campaign and a Discovery campaign at the same time,
        you are paying for two layers of guessing. Pick one learning path.
      </P>

      <H2>What to run instead</H2>
      <P>
        A tighter structure beats a wide net while you are learning:
      </P>
      <OL>
        <LI>
          <Strong>Brand ad group, Exact match only.</Strong>{" "}Your app name and
          close variants. Defend your brand cheaply.
        </LI>
        <LI>
          <Strong>Category ad group, Exact match, small list.</Strong>{" "}Ten to
          fifteen long-tail terms that describe a specific use case. Not
          &ldquo;notes app.&rdquo; More like &ldquo;voice memo for lectures.&rdquo;
        </LI>
        <LI>
          <Strong>Search Match off in both groups</Strong> while you establish a
          baseline. Add a third discovery ad group later if you want to test
          auto-matching with a separate cap.
        </LI>
      </OL>
      <P>
        This mirrors the playbook in{" "}
        <A href="/blog/long-tail-keywords-main-keyword-rank">
          how long-tail keywords push your main keyword rank
        </A>
        : start narrow, learn which terms convert, expand from data not from
        Apple&apos;s default settings.
      </P>
      <P>
        Match type matters less than intent clarity. Exact match on a bad head
        term still wastes money. Exact match on five long-tail terms you
        understand gives you something to optimize.
      </P>

      <H2>How to tell if Search Match is the problem</H2>
      <P>
        Pull your keyword-level spend report after two weeks. Look for:
      </P>
      <UL>
        <LI>
          Keywords you never added showing meaningful spend
        </LI>
        <LI>
          High tap volume with low tap-through rate on terms unrelated to your
          app
        </LI>
        <LI>
          A handful of terms driving most installs but zero trials or purchases
        </LI>
        <LI>
          Blended CPI that looks acceptable until you remove the auto-matched
          terms
        </LI>
      </UL>
      <P>
        The native ASA dashboard will show you spend and installs per search
        term. It will not show you revenue per term. That is where most devs
        stop investigating. If a Search Match term drives installs but no
        subscriptions, it is not a discovery win. It is a leak.
      </P>
      <P>
        Connect revenue before you judge Search Match.{" "}
        <A href="https://appskale.ai/">AppSkale</A>{" "}ties ASA spend to
        RevenueCat revenue at the keyword level so you can see which
        auto-matched terms actually pay, not just which ones look cheap.
      </P>
      <P>
        A simple test: pause Search Match for two weeks in one ad group while
        keeping everything else the same. If spend drops but revenue per install
        rises, Search Match was diluting your results. If revenue drops
        proportionally with spend, some auto-matched terms were carrying the
        account and you can add them as Exact keywords manually.
      </P>

      <H2>Where to go next</H2>
      <P>
        Search Match is a tool, not a default strategy. Turn it off while you
        learn. Run Exact match on a small, intentional keyword list. Review
        weekly using revenue, not installs, as the filter.
      </P>
      <P>
        For campaign setup, use the{" "}
        <A href="/apple-search-ads-attribution-setup-guide">
          Apple Search Ads attribution setup guide
        </A>
        . For deciding which keywords to keep once you have data, run a{" "}
        <A href="/blog/apple-search-ads-keyword-audit">
          30-day keyword audit
        </A>
        . For the ROAS math behind the revenue check, see{" "}
        <A href="/blog/how-to-calculate-apple-search-ads-roas-with-revenuecat">
          how to calculate Apple Search Ads ROAS with RevenueCat
        </A>
        .
      </P>
      <P>
        When you are ready to see which keywords fund your account and which
        ones Search Match quietly drains,{" "}
        <A href="https://appskale.ai/">AppSkale</A> puts spend and subscription
        revenue on the same row.
      </P>
    </>
  );
}
