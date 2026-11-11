import {
  A,
  H2,
  LI,
  OL,
  P,
  Strong,
  UL,
} from "@/components/blog/Prose";

export function AppleSearchAdsPlacementsSearchResultsFirstBody() {
  return (
    <>
      <P>
        Apple Ads Advanced can show your app in four places: search results,
        the Search tab, the Today tab, and the bottom of other apps&rsquo;
        product pages. Only one of those is someone typing what they want.
      </P>
      <P>
        Small accounts spread a daily budget across all four, then cannot tell
        which placement did anything. Start where the query is the signal.
      </P>

      <H2>What each placement is for</H2>
      <P>
        <Strong>Search results</Strong>{" "}matches a query. This is the only
        placement with keywords. You either pick them with Manage Bids or let
        Maximize Conversions and Search Match do it. The ad can use your default
        product page or a custom one.
      </P>
      <P>
        <Strong>Search tab</Strong>{" "}sits above suggested apps before a search.
        There is no keyword list. You set one bid. The tap can land on your
        default product page or a custom product page.
      </P>
      <P>
        <Strong>Today tab</Strong>{" "}is the front page of the App Store. It
        requires a custom product page, and the name, icon, subtitle, and page
        assets have to be approved before the ad can run.
      </P>
      <P>
        <Strong>Product pages, while browsing</Strong>{" "}appear in You Might
        Also Like after someone scrolls another app&rsquo;s page. No keywords.
        This placement is not available on the App Store in mainland China.
      </P>
      <P>
        All four use cost-per-tap and a daily budget. Audience settings are
        optional everywhere. Keywords, Maximize Conversions, and a target CPA
        are search results only.
      </P>

      <H2>Why search results comes first</H2>
      <P>
        A query is intent you can read, negative, and promote into Exact. The
        other placements are browse. Browse can work, but a $30 day split four
        ways will not produce a keep-or-pause answer in any of them. See{" "}
        <A href="/blog/apple-search-ads-daily-budget">daily budget</A> and{" "}
        <A href="/blog/exact-vs-broad-match-apple-search-ads">
          Exact vs Broad
        </A>
        .
      </P>
      <UL>
        <LI>
          Brand and category economics are visible only in search results
        </LI>
        <LI>
          Search terms, negatives, and keyword bids do not exist on the other
          placements
        </LI>
        <LI>
          Today tab adds an approval step and a custom product page before you
          have a winning message
        </LI>
      </UL>

      <H2>When the other placements earn a test</H2>
      <OL>
        <LI>
          Search results already has Exact themes you would keep with the
          budget you have. See{" "}
          <A href="/blog/how-long-run-asa-keyword-before-deciding">
            how long to run a keyword
          </A>
          .
        </LI>
        <LI>
          You give the new placement its own campaign and its own daily cap so
          it cannot drain search.
        </LI>
        <LI>
          Search tab is the usual second test: one bid, no keyword homework.
          Apple&rsquo;s best-practice notes suggest pairing it with search
          results. Still judge your own trials and revenue, not the suggestion.
        </LI>
        <LI>
          Today tab waits until a custom product page is worth sending traffic
          to. See{" "}
          <A href="/blog/apple-search-ads-custom-product-pages-when">
            when custom product pages are worth it
          </A>
          .
        </LI>
        <LI>
          Product-page ads are a reach test beside similar apps. Treat them
          like discovery: capped, and easy to turn off. See{" "}
          <A href="/blog/apple-search-ads-discovery-campaigns">
            discovery campaigns
          </A>
          .
        </LI>
      </OL>

      <H2>Where to go next</H2>
      <P>
        Search results is the placement that teaches you language. Today, Search
        tab, and product-page ads spend without that language. Add them after
        search results has winners, each with a cap you can actually feel.
      </P>
      <P>
        Related:{" "}
        <A href="/blog/manage-bids-vs-maximize-conversions">
          Manage Bids vs Maximize Conversions
        </A>
        ,{" "}
        <A href="/blog/apple-search-ads-impression-share">impression share</A>
        , and{" "}
        <A href="/blog/ad-groups-vs-campaigns-apple-search-ads">
          ad groups vs campaigns
        </A>
        .{" "}
        <A href="https://appskale.ai/">AppSkale</A> reads the search-results
        keywords that placements without keywords cannot explain.
      </P>
    </>
  );
}
