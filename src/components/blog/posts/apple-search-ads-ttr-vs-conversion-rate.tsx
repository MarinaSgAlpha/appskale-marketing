import {
  A,
  H2,
  LI,
  OL,
  P,
  Strong,
  UL,
} from "@/components/blog/Prose";

export function AppleSearchAdsTtrVsConversionRateBody() {
  return (
    <>
      <P>
        A keyword can fail in two different rooms. People see the ad and do
        not tap. Or they tap, land on the product page, and do not install.
        Raising the bid only helps the first room if the problem was never
        getting seen. It does nothing useful for the second.
      </P>
      <P>
        Apple&rsquo;s names for those rooms are tap-through rate and
        tap-through conversion rate. Read them before you touch CPT.
      </P>

      <H2>The two rates</H2>
      <P>
        <Strong>TTR</Strong>{" "}is taps divided by impressions. The ad was on
        screen. Did anyone choose it?
      </P>
      <P>
        <Strong>CR (tap-through)</Strong>{" "}is installs from taps divided by
        taps. Apple counts those installs in a 30-day window after the tap, and
        the count includes new downloads and redownloads.
      </P>
      <P>
        There is also a view-through install: someone saw the ad, did not tap,
        and downloaded within one day. That is a different column. Do not fold
        it into a story about the product page, and do not ignore a weak tap
        rate because view-throughs made the total look kinder.
      </P>

      <H2>Impressions, almost no taps</H2>
      <P>
        The auction already decided you were relevant enough to show. The
        searcher disagreed with the ad. Usual causes:
      </P>
      <UL>
        <LI>
          The query is adjacent, not the job you do. A Broad or Search Match
          term is the common source. See{" "}
          <A href="/blog/apple-search-ads-search-terms-report">
            the search terms report
          </A>
          .
        </LI>
        <LI>
          The name, subtitle, icon, or first screenshot answers a different
          search than the one you bought.
        </LI>
        <LI>
          You are on a competitor&rsquo;s name and the ad still looks like
          theirs. See{" "}
          <A href="/blog/competitor-keywords-apple-search-ads">
            competitor keywords
          </A>
          .
        </LI>
      </UL>
      <P>
        A metadata edit can take up to two hours to show on the ad in the App
        Store, and up to 24 hours to show in the ad preview inside the
        account. Do not judge the new subtitle the same afternoon.
      </P>
      <P>
        If impressions themselves are missing, that is a different diagnosis:
        bid, relevance, volume, or an audience you narrowed. See{" "}
        <A href="/blog/apple-search-ads-impression-share">impression share</A>{" "}
        and{" "}
        <A href="/blog/apple-search-ads-age-and-gender-targeting">
          age and gender targeting
        </A>
        .
      </P>

      <H2>Taps, almost no installs</H2>
      <P>
        They already chose the ad. The product page did not close. Bid is the
        wrong knob. Look at screenshots, ratings, the subtitle&rsquo;s
        promise, and whether the first screen matches the search. A custom
        product page can help once you know the intent. It will not rescue a
        page that also fails organic traffic. See{" "}
        <A href="/blog/apple-search-ads-custom-product-pages-when">
          when custom product pages are worth it
        </A>{" "}
        and{" "}
        <A href="/blog/asa-cpi-great-paywall-conversion-terrible">
          CPI looks great, paywall conversion is terrible
        </A>
        .
      </P>
      <P>
        Installs are not subscribers. A healthy tap-through CR can still die
        at the paywall. Keep that third room in{" "}
        <A href="https://appskale.ai/">AppSkale</A>, next to the keyword, or
        you will scale a page that only wins the download.
      </P>

      <H2>A short order of operations</H2>
      <OL>
        <LI>
          Wait until the row has enough impressions to talk about taps, and
          enough taps to talk about installs. A handful of either is noise.
          See{" "}
          <A href="/blog/how-long-run-asa-keyword-before-deciding">
            how long to run a keyword
          </A>
          .
        </LI>
        <LI>
          Low TTR: fix the query or the ad&rsquo;s first impression. Pause
          clear mismatches. Do not raise CPT to force taps on a term people
          scroll past.
        </LI>
        <LI>
          Low CR after a real number of taps: fix the product page before you
          buy more of those taps.
        </LI>
        <LI>
          Both rates fine and revenue weak: the leak is after the install.
          Stop tuning the auction.
        </LI>
      </OL>

      <H2>Where to go next</H2>
      <P>
        TTR asks whether the ad matched the search. Conversion rate asks
        whether the page matched the tap. Revenue asks whether the install was
        worth it. Change the room that is actually empty.
      </P>
      <P>
        Related:{" "}
        <A href="/blog/cpt-vs-cpi-apple-search-ads">CPT vs CPI</A>,{" "}
        <A href="/blog/exact-vs-broad-match-apple-search-ads">
          Exact vs Broad
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
