import {
  A,
  H2,
  LI,
  OL,
  P,
  Strong,
  UL,
} from "@/components/blog/Prose";

export function AsaCustomerTypesNewVsReturningBody() {
  return (
    <>
      <P>
        Apple Search Ads can aim at people who have never had your app, people
        who already did, or everyone. The default is everyone. On a small
        budget that mix hides whether you are buying first installs or paying
        to reopen an app someone already downloaded.
      </P>
      <P>
        Customer type is an ad group setting in Apple Ads Advanced. This post
        covers when to leave it on all users, when to split new and returning,
        and the holes in Apple&rsquo;s &ldquo;new users&rdquo; filter.
      </P>

      <H2>The four settings</H2>
      <UL>
        <LI>
          <Strong>All users.</Strong>{" "}The default. Prospective, former, and
          current customers.
        </LI>
        <LI>
          <Strong>New users.</Strong>{" "}Built to maximize conversions from
          first-time downloaders.
        </LI>
        <LI>
          <Strong>Returning users.</Strong>{" "}People who downloaded before. They
          may have deleted the app, have it on another device, or still have it.
          If it is installed they see Open. If it is not, they see a redownload.
        </LI>
        <LI>
          <Strong>Users of my other apps.</Strong>{" "}Cross-promotion inside apps
          you own. Useful later, not as a first campaign.
        </LI>
      </UL>
      <P>
        Reporting can split new downloads and redownloads. A redownload is not
        the same event as a first install, even when the CPT looks similar.
      </P>

      <H2>Why the default gets expensive</H2>
      <P>
        All users maximizes reach. It also blends two businesses into one row:
        acquiring someone new, and reminding someone who already knows you. If
        you optimize that blend on CPI, returning users often look &ldquo;more
        efficient&rdquo; because the tap is cheaper or the install is a
        redownload. That does not mean they are the growth you meant to buy.
      </P>
      <P>
        For a subscription app, decide the job first. A brand defense campaign
        might happily include returning users. A category test should be mostly
        new users, or you will congratulate yourself for reacquiring people who
        searched your name. See{" "}
        <A href="/blog/brand-vs-category-keywords-first-500">
          brand vs category
        </A>
        .
      </P>

      <H2>New users is a filter, not a guarantee</H2>
      <P>
        Apple documents several cases where a &ldquo;new users&rdquo; ad group
        can still convert a prior downloader:
      </P>
      <UL>
        <LI>
          Personalized Ads is off, so Apple may not recognize them as returning
        </LI>
        <LI>
          Apple does not use prior-download history for customers under 18, and
          it does not show ads to accounts under 13 or Managed Apple Accounts
        </LI>
        <LI>
          The first time you select new users for an app, exclusion can take up
          to seven days
        </LI>
        <LI>
          Someone who downloaded very recently may not be flagged yet
        </LI>
      </UL>
      <P>
        Treat the new-download versus redownload columns as the check, not the
        setting label alone.
      </P>

      <H2>A simple split once you have signal</H2>
      <OL>
        <LI>
          Learn on one storefront with readable Exact keywords before you slice
          audiences. See{" "}
          <A href="/blog/how-many-keywords-apple-search-ads">
            how many keywords
          </A>
          .
        </LI>
        <LI>
          Put new-user acquisition in its own ad group or campaign when
          redownloads start to dominate spend.
        </LI>
        <LI>
          Keep returning users in a separate group with its own bid, and judge
          that group on revenue from those users, not on a cheaper CPI.
        </LI>
        <LI>
          Do not also change match type, country, and paywall in the same week.
          See{" "}
          <A href="/blog/ad-groups-vs-campaigns-apple-search-ads">
            ad groups vs campaigns
          </A>
          .
        </LI>
      </OL>
      <P>
        <A href="https://appskale.ai/">AppSkale</A>{" "}is useful after the split:
        keyword revenue should be read next to whether those installs were new
        or repeats, or a &ldquo;winning&rdquo; term may just be a redownload.
      </P>

      <H2>Where to go next</H2>
      <P>
        Leave customer type alone until search terms are clean. Then separate
        new users from returning users so a cheap redownload cannot masquerade
        as acquisition. Cross-promote your other apps only after those two jobs
        have their own numbers.
      </P>
      <P>
        Related:{" "}
        <A href="/blog/apple-search-ads-search-terms-report">
          search terms report
        </A>
        ,{" "}
        <A href="/blog/asa-subscription-vs-one-time-purchase">
          subscription vs one-time purchase
        </A>
        , and{" "}
        <A href="/blog/how-to-calculate-apple-search-ads-roas-with-revenuecat">
          ROAS with RevenueCat
        </A>
        .
      </P>
    </>
  );
}
