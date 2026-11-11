import {
  A,
  H2,
  LI,
  OL,
  P,
  Strong,
  UL,
} from "@/components/blog/Prose";

export function AdGroupsVsCampaignsAppleSearchAdsBody() {
  return (
    <>
      <P>
        Apple Search Ads beginners often dump every keyword into one campaign
        and one ad group because the UI lets them. Then brand, category, Broad,
        and Search Match share a budget and a report. When something goes wrong,
        everything looks guilty.
      </P>
      <P>
        Campaigns and ad groups are not paperwork. They are how you isolate
        intent, bids, and budgets. This post gives a simple structure that
        works for indie learning accounts.
      </P>

      <H2>Campaign vs ad group in one minute</H2>
      <P>
        <Strong>Campaigns</Strong>{" "}are the outer containers. Use them for
        budget, storefront, and major strategy buckets you want to fund or pause
        independently.
      </P>
      <P>
        <Strong>Ad groups</Strong>{" "}live inside campaigns. Use them for match
        type, keyword theme, default max CPT, and audience/creative settings
        that should stay coherent.
      </P>
      <P>
        If two things need different daily money or different kill switches,
        they probably need different campaigns. If they share a budget but need
        different bids or keyword themes, split ad groups.
      </P>

      <H2>A clean beginner structure</H2>
      <OL>
        <LI>
          <Strong>Campaign: Brand defense.</Strong>{" "}Exact match ad group for
          your app name and close variants.
        </LI>
        <LI>
          <Strong>Campaign: Category Exact.</Strong>{" "}One Exact ad group with
          10&ndash;15 long-tail terms. See{" "}
          <A href="/blog/brand-vs-category-keywords-first-500">
            first $500 split
          </A>{" "}
          and{" "}
          <A href="/blog/how-many-keywords-apple-search-ads">
            keyword count
          </A>
          .
        </LI>
        <LI>
          <Strong>Optional later campaign: Discovery.</Strong>{" "}Separate Broad
          or Search Match test with a hard cap. See{" "}
          <A href="/blog/apple-search-ads-discovery-campaigns">
            discovery campaigns
          </A>
          .
        </LI>
        <LI>
          <Strong>Optional later: Competitor Exact.</Strong>{" "}Own campaign, tiny
          cap. See{" "}
          <A href="/blog/competitor-keywords-apple-search-ads">
            competitor keywords
          </A>
          .
        </LI>
      </OL>
      <P>
        One storefront while you learn. One match type per ad group. Search
        Match off on Exact learning campaigns. Details in{" "}
        <A href="/blog/exact-vs-broad-match-apple-search-ads">
          Exact vs Broad
        </A>{" "}
        and{" "}
        <A href="/blog/search-match-eating-your-budget">
          Search Match
        </A>
        .
      </P>

      <H2>Why one giant campaign fails</H2>
      <UL>
        <LI>
          <Strong>Budget fights itself.</Strong>{" "}Category heads or discovery
          can starve brand defense inside a shared cap.
        </LI>
        <LI>
          <Strong>Bids get averaged in your head.</Strong>{" "}Brand and long-tail
          should not share one max CPT story.
        </LI>
        <LI>
          <Strong>Reports blur.</Strong>{" "}You cannot tell whether the problem
          is conquest, Broad junk, or a real category term.
        </LI>
        <LI>
          <Strong>Pauses get nuclear.</Strong>{" "}Turning off a messy campaign
          kills winners and losers together.
        </LI>
      </UL>

      <H2>How far to split</H2>
      <P>
        Split enough to make decisions. Do not create an ad group per keyword on
        day one. That is spreadsheet cosplay.
      </P>
      <P>
        Good splits: brand vs category, Exact vs discovery, maybe competitors.
        Bad splits: twenty near-duplicate long-tail ad groups with three taps
        each and no shared learning.
      </P>
      <P>
        Keep daily budgets intentional at the campaign level so discovery cannot
        silently consume category Exact money. See{" "}
        <A href="/blog/apple-search-ads-daily-budget">
          daily budget
        </A>
        .
      </P>

      <H2>A weekly structure check</H2>
      <OL>
        <LI>
          Is brand still funded on its own?
        </LI>
        <LI>
          Is category Exact still Exact-only?
        </LI>
        <LI>
          Is any expansion locked in a capped discovery container?
        </LI>
        <LI>
          Are search terms being harvested into the right Exact ad groups? See{" "}
          <A href="/blog/apple-search-ads-search-terms-report">
            search terms report
          </A>
          .
        </LI>
        <LI>
          Are negatives applied where waste appears? See{" "}
          <A href="/blog/apple-search-ads-negative-keywords">
            negative keywords
          </A>
          .
        </LI>
      </OL>
      <P>
        Structure will not invent revenue. It makes revenue readable.{" "}
        <A href="https://appskale.ai/">AppSkale</A>{" "}shows keyword-level ASA
        spend next to RevenueCat outcomes so each campaign bucket can be judged
        fairly.
      </P>

      <H2>Where to go next</H2>
      <P>
        Use campaigns for major budget buckets and kill switches. Use ad groups
        for match type and keyword theme. Start with brand Exact and category
        Exact. Add discovery or competitors only in separate, capped containers.
      </P>
      <P>
        If you are new to the channel, read{" "}
        <A href="/blog/apple-search-ads-for-beginners">
          Apple Search Ads for beginners
        </A>
        . For attribution setup, use the{" "}
        <A href="/apple-search-ads-attribution-setup-guide">
          setup guide
        </A>
        . When you want structure tied to subscription revenue,{" "}
        <A href="https://appskale.ai/">AppSkale</A> connects Apple Search Ads to
        RevenueCat.
      </P>
    </>
  );
}
