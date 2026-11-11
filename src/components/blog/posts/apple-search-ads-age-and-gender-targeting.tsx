import {
  A,
  H2,
  LI,
  OL,
  P,
  Strong,
  UL,
} from "@/components/blog/Prose";

export function AppleSearchAdsAgeAndGenderTargetingBody() {
  return (
    <>
      <P>
        Age and gender look like precision. In Apple Ads they are a switch
        that only works for people who left Personalized Ads on. Apple&rsquo;s
        own figure: 78 percent of App Store search volume on iOS 17 and later
        came from devices with Personalized Ads turned off.
      </P>
      <P>
        Narrow the audience and that majority cannot see the ad. For a small
        account, the usual result is a quiet campaign and a false story that
        the keywords do not work.
      </P>

      <H2>What the setting can and cannot see</H2>
      <P>
        Demographics are optional on the ad group. If you leave audience
        settings at all eligible users, Apple can still show the ad broadly.
        If you pick an age band or a gender, Apple says the ad can be served
        to people in that band who have Personalized Ads on. People in the
        band who turned Personalized Ads off are excluded.
      </P>
      <P>
        Age and gender are not the same lever as device. iPhone versus iPad is
        a device setting Apple expects you to use when the economics differ.
        Customer type, new versus returning, is a separate choice. See{" "}
        <A href="/blog/asa-customer-types-new-vs-returning">
          new vs returning users
        </A>
        .
      </P>

      <H2>Why indie accounts should leave it open</H2>
      <UL>
        <LI>
          <Strong>You shrink the auction before you know the query.</Strong>{" "}
          A keyword with no impressions might be a bid problem, a relevance
          problem, or an audience you just deleted. See{" "}
          <A href="/blog/max-cpt-bidding-apple-search-ads">max CPT bidding</A>.
        </LI>
        <LI>
          <Strong>The segment you imagine is not the segment you buy.</Strong>{" "}
          Personalized Ads on is a privacy choice, not a clean demographic
          sample of your category.
        </LI>
        <LI>
          <Strong>Creative does the job with less loss.</Strong>{" "}Apple&rsquo;s
          ad-variation guidance says the search term is the stronger signal. A
          fitness app can show screenshots that speak to a search instead of
          targeting an age band and losing most of search volume. See{" "}
          <A href="/blog/apple-search-ads-custom-product-pages-when">
            when custom product pages are worth it
          </A>
          .
        </LI>
      </UL>

      <H2>When a narrow audience is a real test</H2>
      <OL>
        <LI>
          The default, all-users ad group already converts, so you are not
          using demographics to debug a dead campaign.
        </LI>
        <LI>
          You have a reason from your own product, such as a mode that only
          exists for one group, and you can measure revenue for that group.
        </LI>
        <LI>
          The narrow ad group has its own budget. It must not be the only
          place the keywords run, or you have opted most searchers out by
          accident.
        </LI>
        <LI>
          You judge it after a normal trial window, and you stop if the only
          win is a tiny CPI on a tiny reach. See{" "}
          <A href="/blog/how-long-run-asa-keyword-before-deciding">
            how long to run a keyword
          </A>
          .
        </LI>
      </OL>
      <P>
        <A href="https://appskale.ai/">AppSkale</A>{" "}still attributes revenue
        to the keyword. It cannot put back the searches a demographic filter
        never entered.
      </P>

      <H2>Where to go next</H2>
      <P>
        Start at all eligible users. Let the query do the targeting. Use a
        custom product page when the message should change, and treat age or
        gender as a later experiment that you already know will ignore most
        search volume.
      </P>
      <P>
        Related:{" "}
        <A href="/blog/apple-search-ads-for-beginners">
          Apple Search Ads for beginners
        </A>
        ,{" "}
        <A href="/blog/brand-vs-category-keywords-first-500">
          brand vs category
        </A>
        , and{" "}
        <A href="/blog/apple-search-ads-ttr-vs-conversion-rate">
          impressions, taps, and installs
        </A>
        .
      </P>
    </>
  );
}
