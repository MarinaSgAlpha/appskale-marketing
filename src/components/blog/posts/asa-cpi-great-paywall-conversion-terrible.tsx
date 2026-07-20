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
  "/images/blog/asa-cpi-great-paywall-conversion-terrible/cover.png";

export function AsaCpiGreatPaywallConversionTerribleBody() {
  return (
    <>
      <P>
        Your Apple Search Ads dashboard looks fine. Cost per install is low.
        Taps are converting into downloads. Maybe even a few trials are
        starting. Then you check RevenueCat and the account still feels dead.
        The instinct is to blame the channel, pause keywords, or chase even
        cheaper CPI.
      </P>
      <P>
        Often the channel is not the main problem. You bought the install. The
        paywall, onboarding, or offer failed to turn that install into a
        subscriber. Cheap CPI just made a product leak louder.
      </P>
      <P>
        This post is about separating ASA failure from funnel failure, what to
        check before you kill keywords, and which metrics actually matter once
        installs look &ldquo;good.&rdquo;
      </P>

      <H2>Cheap installs are not the win</H2>
      <InlineImage
        src={COVER_IMAGE}
        alt="Diagram showing strong Apple Search Ads CPI collapsing into weak paywall conversion and flat subscription revenue"
        width={1024}
        height={682}
      />
      <P>
        Apple Search Ads optimizes what Apple can see clearly: taps and
        installs. CPI answers one question only: how cheaply did you buy a
        download? It does not answer whether that user understood the product,
        reached the paywall, started a trial, or paid.
      </P>
      <P>
        For subscription apps, the real sequence looks like this:
      </P>
      <OL>
        <LI>Tap</LI>
        <LI>Install</LI>
        <LI>Open and activate</LI>
        <LI>Hit paywall or trial offer</LI>
        <LI>Start trial or purchase</LI>
        <LI>Convert and renew</LI>
      </OL>
      <P>
        ASA can look healthy at step two while the account dies at step four or
        five. That is why beginners keep scaling &ldquo;winning&rdquo; keywords
        that never fund the business.
      </P>

      <H2>Channel problem or product problem?</H2>
      <P>
        Use organic as your baseline before you rewrite the ASA account.
      </P>
      <UL>
        <LI>
          <Strong>Organic installs convert. Paid installs do not.</Strong>{" "}
          Then the issue is likely traffic quality, keyword intent, match
          expansion, or listing mismatch for paid users. Fix keywords, negatives,
          and Search Match before rewriting the whole paywall.
        </LI>
        <LI>
          <Strong>Organic and paid both convert poorly.</Strong>{" "}Then ASA is
          amplifying a funnel problem. Pausing ads will lower spend. It will not
          fix conversion.
        </LI>
        <LI>
          <Strong>Brand paid converts. Category paid does not.</Strong>{" "}Brand
          users already wanted you. Category users need a clearer offer,
          stronger screenshots, or tighter keyword intent. That can be partly
          channel and partly product messaging.
        </LI>
        <LI>
          <Strong>Trials start. Revenue stays flat.</Strong>{" "}That may be lag,
          not failure. See{" "}
          <A href="/blog/trial-started-roas-didnt-move">
            your trial started, your ROAS didn&rsquo;t move
          </A>{" "}
          before you declare the paywall dead.
        </LI>
      </UL>
      <P>
        The mistake is treating every flat ROAS report as an ASA keyword
        problem. Sometimes the keywords are fine and the offer is not.
      </P>

      <H2>The metrics that matter after CPI</H2>
      <P>
        Once installs are coming in, stop staring at CPI alone. Watch the
        handoffs:
      </P>
      <UL>
        <LI>
          <Strong>Install to open / activation.</Strong>{" "}If paid users never
          open or bounce immediately, onboarding or expectations from the store
          listing are broken.
        </LI>
        <LI>
          <Strong>Activation to paywall view.</Strong>{" "}If users never see an
          offer, you do not have an ASA problem. You have a path-to-paywall
          problem.
        </LI>
        <LI>
          <Strong>Paywall view to trial start.</Strong>{" "}This is where pricing,
          trial length, copy, and social proof usually fail.
        </LI>
        <LI>
          <Strong>Trial to paid.</Strong>{" "}Strong trial starts with weak paid
          conversion can be product value, reminder timing, or sticker shock at
          billing.
        </LI>
        <LI>
          <Strong>Revenue per keyword.</Strong>{" "}The only number that decides
          whether a keyword deserves more budget. ROAS math is covered in{" "}
          <A href="/blog/how-to-calculate-apple-search-ads-roas-with-revenuecat">
            how to calculate Apple Search Ads ROAS with RevenueCat
          </A>
          .
        </LI>
      </UL>
      <P>
        A keyword with a higher CPI and healthy trial starts can beat a cheap
        CPI keyword that never reaches the paywall. Optimizing for the second
        one is how accounts stay busy and unprofitable.
      </P>

      <H2>Common paywall and funnel leaks ASA exposes</H2>
      <UL>
        <LI>
          <Strong>Hard paywall too early.</Strong>{" "}Paid users from category
          search often need a little product proof before a subscription ask.
        </LI>
        <LI>
          <Strong>Listing promise does not match first-session reality.</Strong>{" "}
          Screenshots sell one job. The app opens into another. Trust dies
          before the offer.
        </LI>
        <LI>
          <Strong>Weak trial framing.</Strong>{" "}&ldquo;Subscribe&rdquo; with no
          clear value, duration, or cancel path converts worse than a concrete
          trial offer.
        </LI>
        <LI>
          <Strong>Too many steps before value.</Strong>{" "}Long onboarding with
          no aha moment means the paywall arrives after patience is gone.
        </LI>
        <LI>
          <Strong>One paywall for every keyword intent.</Strong>{" "}A brand
          searcher and a vague category searcher are not the same buyer. Custom
          Product Pages can help later, but the core offer still has to convert.
        </LI>
      </UL>
      <P>
        ASA did not invent these leaks. It just makes them expensive enough to
        notice.
      </P>

      <H2>What to fix before you scale spend</H2>
      <OL>
        <LI>
          <Strong>Confirm attribution is working.</Strong>{" "}If revenue cannot
          be tied back to keywords, you will misdiagnose everything. Use the{" "}
          <A href="/apple-search-ads-attribution-setup-guide">
            Apple Search Ads attribution setup guide
          </A>
          .
        </LI>
        <LI>
          <Strong>Compare organic vs paid conversion.</Strong>{" "}Same storefront,
          same time window. That split tells you whether to attack keywords or
          the funnel.
        </LI>
        <LI>
          <Strong>Check one keyword cohort end to end.</Strong>{" "}Pick a brand
          term and one long-tail category term. Follow installs to trials to
          paid. Do not average the whole account into one blur.
        </LI>
        <LI>
          <Strong>Fix the biggest drop-off first.</Strong>{" "}If users never see
          the paywall, do not A/B test paywall colors. If they see it and never
          trial, work the offer.
        </LI>
        <LI>
          <Strong>Keep ASA learning clean while you fix product.</Strong>{" "}Exact
          match, Search Match off, tight keyword list. Do not add Broad chaos
          on top of a broken funnel. See{" "}
          <A href="/blog/exact-vs-broad-match-apple-search-ads">
            Exact vs Broad match
          </A>{" "}
          and{" "}
          <A href="/blog/search-match-eating-your-budget">
            Search Match is eating your budget
          </A>
          .
        </LI>
      </OL>

      <H2>When it really is the ads</H2>
      <P>
        Sometimes CPI looks great because the traffic is junk.
      </P>
      <UL>
        <LI>
          Broad match or Search Match is buying loose queries
        </LI>
        <LI>
          Head terms bring browsers, not buyers
        </LI>
        <LI>
          Negatives are missing and free/android/job intent is leaking in
        </LI>
        <LI>
          The listing ranks for a promise your app does not keep
        </LI>
      </UL>
      <P>
        In those cases, pause the bad queries, tighten match types, and rebuild
        the keyword list.{" "}
        <A href="/blog/apple-search-ads-negative-keywords">
          Negative keywords
        </A>{" "}
        and{" "}
        <A href="/blog/brand-vs-category-keywords-first-500">
          brand vs category allocation
        </A>{" "}
        matter here. But only after you have checked that organic users can
        convert at all.
      </P>

      <H2>A practical decision rule</H2>
      <UL>
        <LI>
          <Strong>Good CPI, bad organic conversion:</Strong>{" "}fix the product
          path first. Ads are not your bottleneck.
        </LI>
        <LI>
          <Strong>Good organic conversion, bad paid conversion:</Strong>{" "}Fix
          keywords, match types, negatives, and listing intent match.
        </LI>
        <LI>
          <Strong>Good trials, flat early ROAS:</Strong>{" "}Wait through the
          trial window before major cuts.
        </LI>
        <LI>
          <Strong>Good CPI, no paywall views:</Strong>{" "}Fix onboarding and
          offer placement before buying more installs.
        </LI>
      </UL>
      <P>
        The native ASA dashboard will keep congratulating you on cheap
        downloads. RevenueCat will show whether those downloads became
        customers.{" "}
        <A href="https://appskale.ai/">AppSkale</A>{" "}puts both on one screen
        at the keyword level so you can stop scaling vanity CPI.
      </P>

      <H2>Where to go next</H2>
      <P>
        A great CPI with terrible paywall conversion is not an ASA success
        story. It is a warning that you optimized the wrong step. Separate
        channel quality from funnel quality, measure the handoffs after install,
        and only scale keywords that produce trials and revenue.
      </P>
      <P>
        If you are still deciding whether to run ASA at all, start with{" "}
        <A href="/blog/apple-search-ads-for-beginners">
          Apple Search Ads for beginners
        </A>
        . For revenue math once conversions exist, read{" "}
        <A href="/blog/how-to-calculate-apple-search-ads-roas-with-revenuecat">
          how to calculate Apple Search Ads ROAS with RevenueCat
        </A>
        . For timing during trials, use{" "}
        <A href="/blog/trial-started-roas-didnt-move">
          your trial started, your ROAS didn&rsquo;t move
        </A>
        .
      </P>
      <P>
        When you want keyword-level spend next to subscription outcomes,{" "}
        <A href="https://appskale.ai/">AppSkale</A> connects Apple Search Ads to
        RevenueCat so cheap installs stop looking like progress.
      </P>
    </>
  );
}
