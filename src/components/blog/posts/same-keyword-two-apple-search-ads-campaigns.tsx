import {
  A,
  H2,
  LI,
  OL,
  P,
  Strong,
  UL,
} from "@/components/blog/Prose";

export function SameKeywordTwoAppleSearchAdsCampaignsBody() {
  return (
    <>
      <P>
        The same search term shows up in a brand campaign and again in
        discovery. Both rows have a little spend and neither has a clear
        decision. You did not buy two ads for that search. You split one
        query across two histories.
      </P>
      <P>
        Apple&rsquo;s own campaign structure puts each exact keyword in one
        home, then blocks discovery from buying it again. This post is that
        rule for a small account.
      </P>

      <H2>One query, one owner</H2>
      <P>
        Brand, category, and competitor terms belong in their own campaigns, on
        Exact, with Search Match off. Discovery exists to find terms you do
        not already own. Apple&rsquo;s structure guide says to add the exact
        keywords from those three campaigns as exact negatives in discovery, so
        discovery can match related searches without re-entering the auction
        for the keywords you already bid.
      </P>
      <P>
        When a discovery search term earns a promotion, add it as Exact in the
        campaign whose job it matches, then add that same term as an exact
        negative back in discovery. See{" "}
        <A href="/blog/apple-search-ads-discovery-campaigns">
          discovery campaigns
        </A>{" "}
        and{" "}
        <A href="/blog/apple-search-ads-negative-keywords">negative keywords</A>.
      </P>

      <H2>What the duplicate actually costs</H2>
      <UL>
        <LI>
          <Strong>Split history.</Strong>{" "}Taps, installs, and revenue for one
          query land in two rows. Neither row reaches a keep-or-pause call as
          fast as a single row would.
        </LI>
        <LI>
          <Strong>Two bids for one job.</Strong>{" "}The discovery ceiling and the
          Exact ceiling were set for different reasons. Whichever copy serves,
          you are no longer sure which price you meant.
        </LI>
        <LI>
          <Strong>A messy search-term review.</Strong>{" "}You promote a term,
          forget the negative, and next week discovery is spending on it again.
        </LI>
      </UL>
      <P>
        Your app still has one ad in a given auction. The waste is confusion
        and rebought queries, not a second placement on the same results page.
      </P>

      <H2>When two copies are intentional</H2>
      <P>
        Different jobs can justify a split. A new-users ad group and a
        returning-users ad group may both need the brand name, because the
        audience is the variable, not the query. Same for a separate country
        campaign. See{" "}
        <A href="/blog/asa-customer-types-new-vs-returning">
          new vs returning users
        </A>{" "}
        and{" "}
        <A href="/blog/when-to-split-asa-by-country">
          when to split by country
        </A>
        .
      </P>
      <P>
        That is not the same as brand Exact and discovery both owning
        &ldquo;your app name.&rdquo; If the audience, country, and match type
        are the same, keep one copy.
      </P>

      <H2>A cleanup pass</H2>
      <OL>
        <LI>
          Export keywords from brand, category, competitor, and discovery.
          Sort by the term. Anything that appears twice with the same match
          type, in the same storefront, is a candidate.
        </LI>
        <LI>
          Give the term to the campaign whose job matches the intent. Proven
          converters live on Exact. Discovery does not keep a second bid.
        </LI>
        <LI>
          Add the survivor as an exact negative in the campaign that lost it,
          especially discovery and any Broad ad group. Deleting the duplicate
          without the negative lets Search Match buy it again. See{" "}
          <A href="/blog/search-match-eating-your-budget">
            Search Match eating your budget
          </A>
          .
        </LI>
        <LI>
          Pause the extra copy after the negative is in. Check both rows for a
          week so you see the spend consolidate, then leave the loser paused.
        </LI>
      </OL>
      <P>
        Apple will not copy a keyword into an ad group that already has that
        text and match type, and it will skip a copy whose bid is higher than
        the destination campaign&rsquo;s daily budget. The UI can still leave
        you with the same term in two campaigns if you add it by hand.
      </P>
      <P>
        <A href="https://appskale.ai/">AppSkale</A>{" "}is easier to read after
        the cleanup. Keyword revenue only helps if the spend for that keyword
        is in one place.
      </P>

      <H2>Where to go next</H2>
      <P>
        Exact owns the queries you already trust. Discovery is allowed to hunt
        around them, not through them. One keyword, one campaign, and an exact
        negative everywhere else that could match it.
      </P>
      <P>
        Related:{" "}
        <A href="/blog/exact-vs-broad-match-apple-search-ads">
          Exact vs Broad
        </A>
        ,{" "}
        <A href="/blog/ad-groups-vs-campaigns-apple-search-ads">
          ad groups vs campaigns
        </A>
        , and{" "}
        <A href="/blog/apple-search-ads-search-terms-report">
          the search terms report
        </A>
        .
      </P>
    </>
  );
}
