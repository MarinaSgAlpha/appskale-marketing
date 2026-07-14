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
  "/images/blog/apple-search-ads-negative-keywords/cover.png";

export function AppleSearchAdsNegativeKeywordsBody() {
  return (
    <>
      <P>
        Most Apple Search Ads advice is about which keywords to buy. Almost
        nobody talks about which searches to block. That is a problem, because
        the quietest budget leak in a beginner account is often not a bad seed
        keyword. It is a related query you never meant to pay for.
      </P>
      <P>
        Negative keywords are how you stop that. They tell Apple not to show
        your ad for specific searches. Used well, they protect Exact learning,
        clean up Broad discovery, and keep Search Match from taxing the account
        twice. Used poorly, they block useful traffic before you have enough
        data.
      </P>
      <P>
        This post covers what negatives do, which ones beginners should add
        early, and how to harvest more from the search terms report without
        overblocking.
      </P>

      <H2>What negative keywords actually do</H2>
      <InlineImage
        src={COVER_IMAGE}
        alt="Diagram showing Apple Search Ads negative keywords blocking irrelevant search terms while keeping converting queries"
        width={1024}
        height={682}
      />
      <P>
        A negative keyword prevents your ad from matching a search. If someone
        types that term, or a close enough variant depending on negative match
        type, your campaign stays out of the auction for that query.
      </P>
      <P>
        That sounds small. It is not. Apple Search Ads can spend on queries that
        are adjacent to your keyword but wrong for your product: competitor
        brand names you do not want, free-only intent, wrong platforms, kids
        versions, job-seeker searches, or category words that look related and
        convert like mud.
      </P>
      <P>
        Negatives do not make a bad app profitable. They stop you from paying to
        learn the same dead-end intent over and over.
      </P>

      <H2>Why beginners ignore them</H2>
      <UL>
        <LI>
          <Strong>The UI pushes adding keywords, not blocking them.</Strong>{" "}
          Setup feels complete once the positive list looks long enough.
        </LI>
        <LI>
          <Strong>Spend looks like progress.</Strong>{" "}Irrelevant taps still
          create installs sometimes. The dashboard feels alive while revenue
          stays flat.
        </LI>
        <LI>
          <Strong>People fear blocking &ldquo;potential.&rdquo;</Strong>{" "}They
          leave loose traffic running because maybe it converts later. Usually
          it just repeats the same waste.
        </LI>
        <LI>
          <Strong>Search Match and Broad hide the leak.</Strong>{" "}If expansion
          settings are on, junk queries appear without you choosing them. See{" "}
          <A href="/blog/search-match-eating-your-budget">
            Search Match is eating your budget
          </A>{" "}
          and{" "}
          <A href="/blog/exact-vs-broad-match-apple-search-ads">
            Exact vs Broad match
          </A>{" "}
          if those controls are still messy.
        </LI>
      </UL>
      <P>
        I used to treat negatives as an advanced cleanup step. That was late.
        A short block list in week one would have saved more learning budget
        than another round of bid tweaks.
      </P>

      <H2>The first negatives worth adding</H2>
      <P>
        Start with obvious mismatches for your app, not a giant scraped list.
        Common beginner blocks:
      </P>
      <UL>
        <LI>
          <Strong>Wrong platform or device intent:</Strong>{" "}android, apk,
          windows, chrome extension, when you are iOS-only
        </LI>
        <LI>
          <Strong>Free-only hunters:</Strong>{" "}free, no login, offline free, if
          your product is clearly paid or subscription-led and those queries
          never convert
        </LI>
        <LI>
          <Strong>Jobs and side-hustle noise:</Strong>{" "}job, hiring, salary,
          work from home, when your app is a consumer tool
        </LI>
        <LI>
          <Strong>Competitor brands you will not win:</Strong>{" "}only if you have
          decided not to conquest them yet
        </LI>
        <LI>
          <Strong>Misaligned audience modifiers:</Strong>{" "}kids, toddler,
          enterprise, school, depending on who your app is actually for
        </LI>
      </UL>
      <P>
        Do not negative your own brand. Do not negative every competitor by
        default if conquest is part of the test. And do not block a term after
        two taps. Negatives are for clear intent mismatches and repeated waste,
        not panic edits.
      </P>

      <H2>Where negatives matter most</H2>
      <OL>
        <LI>
          <Strong>Broad match discovery ad groups.</Strong>{" "}Expansion will
          surface related junk. Negatives are how you keep discovery useful.
        </LI>
        <LI>
          <Strong>Search Match campaigns.</Strong>{" "}If Search Match is still
          on, negatives are damage control. Better to turn Search Match off
          during learning, then use negatives when you intentionally expand.
        </LI>
        <LI>
          <Strong>Category campaigns with shared themes.</Strong>{" "}A notes app
          can attract productivity, AI writer, homework, and meeting transcription
          searches that look adjacent and convert differently.
        </LI>
        <LI>
          <Strong>Brand defense, lightly.</Strong>{" "}Usually brand Exact needs
          fewer negatives. Still block clear typos into unrelated products or
          support/scrape intent if it shows up.
        </LI>
      </OL>
      <P>
        If your first budget is still being allocated, keep the positive list
        tight first. Negatives help more when the campaign structure is already
        sane. See{" "}
        <A href="/blog/brand-vs-category-keywords-first-500">
          where your first $500 should go
        </A>
        .
      </P>

      <H2>How to harvest negatives from search terms</H2>
      <P>
        The search terms report is the source of truth. Weekly is enough for
        most indie budgets.
      </P>
      <OL>
        <LI>
          Sort by spend, then scan for queries with taps or installs and no
          meaningful trials or revenue.
        </LI>
        <LI>
          Ask one question: is this intent ever going to buy my app? If no, add
          it as a negative.
        </LI>
        <LI>
          If a Broad term converts, do not negative it. Promote it to Exact in
          a controlled ad group.
        </LI>
        <LI>
          Group repeats. If five wasted queries share &ldquo;free&rdquo; or
          &ldquo;android,&rdquo; negative the root theme instead of playing
          whack-a-mole forever.
        </LI>
        <LI>
          Keep a simple running list outside Apple so you can reuse blocks
          across ad groups and storefronts.
        </LI>
      </OL>
      <P>
        This is the same harvest loop as Broad match done properly: keep
        winners, block losers, stop rediscovering the same waste. Without
        revenue attached, you will negative too slowly or too aggressively. Join
        spend to subscriptions with RevenueCat before you scale either side. The
        ROAS math is in{" "}
        <A href="/blog/how-to-calculate-apple-search-ads-roas-with-revenuecat">
          how to calculate Apple Search Ads ROAS with RevenueCat
        </A>
        .
      </P>

      <H2>Exact vs Broad negatives, briefly</H2>
      <P>
        Negative match types matter too.
      </P>
      <UL>
        <LI>
          <Strong>Exact negative:</Strong>{" "}blocks that specific search. Use
          when one query is clearly bad but nearby variants might still be
          useful.
        </LI>
        <LI>
          <Strong>Broad negative:</Strong>{" "}blocks a wider set of related
          searches. Use for clear themes like android or free when those themes
          are never a fit.
        </LI>
      </UL>
      <P>
        Beginners often overuse Broad negatives and accidentally cut good
        long-tail traffic. When unsure, Exact-negative the wasted query first.
        Widen only after the same theme keeps leaking spend.
      </P>

      <H2>Mistakes that make negatives backfire</H2>
      <UL>
        <LI>
          <Strong>Blocking after tiny samples.</Strong>{" "}Two taps is not a
          strategy. Wait for repeated waste or obvious mismatch.
        </LI>
        <LI>
          <Strong>Negativing your category head terms you still want to
          test later.</Strong>{" "}If you are not ready for &ldquo;notes app,&rdquo;
          just do not bid it yet. You do not always need a negative for a term
          you never added.
        </LI>
        <LI>
          <Strong>Copying someone else&rsquo;s giant negative list.</Strong>{" "}
          Their waste is not your waste. Start from your search terms.
        </LI>
        <LI>
          <Strong>Never reviewing old negatives.</Strong>{" "}Product positioning
          changes. A block that made sense at launch can become wrong later.
        </LI>
        <LI>
          <Strong>Using negatives to fix a broken funnel.</Strong>{" "}If trials
          never start from any keyword, the problem may be onboarding or paywall,
          not match control. See{" "}
          <A href="/blog/trial-started-roas-didnt-move">
            your trial started, your ROAS didn&rsquo;t move
          </A>{" "}
          before you blame query expansion alone.
        </LI>
      </UL>

      <H2>A simple weekly negative routine</H2>
      <OL>
        <LI>
          <Strong>Monday or Friday, fifteen minutes.</Strong>{" "}Open search
          terms for the last seven days.
        </LI>
        <LI>
          <Strong>Block clear mismatches.</Strong>{" "}Wrong platform, wrong
          audience, free-only hunters that never convert for you.
        </LI>
        <LI>
          <Strong>Promote Broad winners to Exact.</Strong>{" "}Do not leave
          converting queries buried in expansion forever.
        </LI>
        <LI>
          <Strong>Check brand separately.</Strong>{" "}Make sure you did not
          accidentally block a useful brand variant.
        </LI>
        <LI>
          <Strong>Confirm revenue, not just installs.</Strong>{" "}A query with
          cheap installs and zero trials is a stronger negative candidate than
          a slightly expensive query that starts trials.
        </LI>
      </OL>
      <P>
        The native ASA dashboard will show the wasted search terms. It will not
        cleanly show which of those terms ever produced subscription revenue.{" "}
        <A href="https://appskale.ai/">AppSkale</A>{" "}puts keyword-level spend
        next to RevenueCat revenue so you can negative with less guesswork.
      </P>

      <H2>Where to go next</H2>
      <P>
        Negative keywords are not glamorous. They are one of the highest-leverage
        controls in a small Apple Search Ads account. Block clear mismatches
        early, harvest weekly from search terms, promote Broad winners to Exact,
        and do not confuse a broken funnel with a match-type problem.
      </P>
      <P>
        If you are still setting foundation controls, read{" "}
        <A href="/blog/exact-vs-broad-match-apple-search-ads">
          Exact vs Broad match
        </A>{" "}
        and{" "}
        <A href="/blog/search-match-eating-your-budget">
          Search Match is eating your budget
        </A>
        . For attribution setup, use the{" "}
        <A href="/apple-search-ads-attribution-setup-guide">
          Apple Search Ads attribution setup guide
        </A>
        . If you are new to the channel entirely, start with{" "}
        <A href="/blog/apple-search-ads-for-beginners">
          Apple Search Ads for beginners
        </A>
        .
      </P>
      <P>
        When you want to see which search terms fund the account and which only
        burn budget,{" "}
        <A href="https://appskale.ai/">AppSkale</A> connects Apple Search Ads
        spend to RevenueCat revenue so negatives are based on paying users, not
        vibes.
      </P>
    </>
  );
}
