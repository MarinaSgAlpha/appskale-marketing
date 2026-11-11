import {
  A,
  H2,
  LI,
  OL,
  P,
  Strong,
  UL,
} from "@/components/blog/Prose";

export function AppleAdsBasicVsAdvancedBody() {
  return (
    <>
      <P>
        Apple renamed Search Ads to Apple Ads. The split that still matters for
        a small app is Basic versus Advanced. One buys installs with almost no
        knobs. The other buys taps and lets you see which searches you paid for.
      </P>
      <P>
        Indie teams pick Basic because it looks simpler, then cannot tell which
        queries produced subscribers. This post is the decision, not a tour of
        every setting.
      </P>

      <H2>What each mode actually sells</H2>
      <P>
        <Strong>Apple Ads Basic</Strong>{" "}runs in App Store search results
        only. You set countries, a monthly budget, and a maximum cost per
        install. Apple matches the ad. There are no keywords and no audience
        settings. The monthly cap is $10,000 (U.S.) per app, and you can promote
        up to 50 apps. Reporting is a quick view. You get the AdServices
        attribution API, not keyword rows and not the Apple Ads Platform API.
      </P>
      <P>
        <Strong>Apple Ads Advanced</Strong>{" "}can run on the Today tab, the
        Search tab, search results, and other apps&rsquo; product pages. Search
        results is where keywords live. You pay per tap, up to a max CPT you
        set, and you cap spend with a daily budget. Reporting is detailed
        enough to audit search terms, bids, and campaigns.
      </P>
      <P>
        Same App Store page. Different question. Basic asks &ldquo;what will I
        pay per install?&rdquo; Advanced asks &ldquo;which searches are worth
        buying?&rdquo;
      </P>

      <H2>When Basic is enough</H2>
      <UL>
        <LI>
          You want a short, hands-off test and you already trust the listing
        </LI>
        <LI>
          A CPI ceiling is the only constraint you care about right now
        </LI>
        <LI>
          You are not trying to learn brand versus category economics
        </LI>
        <LI>
          You will not need keyword-level subscription revenue later
        </LI>
      </UL>
      <P>
        Basic can spend. It cannot teach you a keyword list. If the only
        outcome you need is &ldquo;some installs under this CPI,&rdquo; that
        trade is honest. If you need to pause bad intent, it is the wrong tool.
      </P>

      <H2>When Advanced is the indie default</H2>
      <P>
        Use Advanced when you want to defend your brand name, test a short
        Exact list, and judge revenue instead of blended CPI. That is most
        subscription apps after the listing converts at all. Start in one
        storefront, on search results, with brand Exact separate from category
        Exact. See{" "}
        <A href="/blog/apple-search-ads-for-beginners">
          Apple Search Ads for beginners
        </A>{" "}
        and{" "}
        <A href="/blog/brand-vs-category-keywords-first-500">
          brand vs category
        </A>
        .
      </P>
      <P>
        Advanced is also the only path into keyword reporting that{" "}
        <A href="https://appskale.ai/">AppSkale</A> can line up with RevenueCat.
        Basic does not expose the keywords.
      </P>

      <H2>Do not run both on the same app</H2>
      <P>
        Apple allows Basic and Advanced together. It also says there is no
        auction advantage. Only one ad for the same app is eligible in a given
        auction, and optimizations you make in Advanced are not applied to
        Basic. In practice you move impressions from a campaign you can read
        into a campaign you cannot. Pick one.
      </P>
      <OL>
        <LI>
          If you are already in Basic and the CPI looks fine but you cannot
          explain it, switch the learning budget to Advanced instead of adding
          a second system.
        </LI>
        <LI>
          If you are in Advanced and delivery feels fussy, fix structure and
          Search Match before retreating to Basic. See{" "}
          <A href="/blog/search-match-eating-your-budget">
            Search Match eating your budget
          </A>
          .
        </LI>
        <LI>
          Judge either mode on revenue after the trial window, not on the first
          week of installs. See{" "}
          <A href="/blog/cpt-vs-cpi-apple-search-ads">CPT vs CPI</A>.
        </LI>
      </OL>

      <H2>Where to go next</H2>
      <P>
        Basic is a CPI cap with the matching hidden. Advanced is how a small
        account learns which searches pay. If you care about subscribers by
        keyword, start in Advanced and keep the first campaigns narrow.
      </P>
      <P>
        Related:{" "}
        <A href="/blog/manage-bids-vs-maximize-conversions">
          Manage Bids vs Maximize Conversions
        </A>
        ,{" "}
        <A href="/blog/apple-search-ads-daily-budget">daily budget</A>, and the{" "}
        <A href="/apple-search-ads-attribution-setup-guide">
          attribution setup guide
        </A>
        . When Advanced keywords need revenue next to spend,{" "}
        <A href="https://appskale.ai/">AppSkale</A> connects them to RevenueCat.
      </P>
    </>
  );
}
