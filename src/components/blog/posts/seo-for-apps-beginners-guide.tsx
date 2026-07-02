import {
  A,
  Em,
  H2,
  InlineImage,
  LI,
  OL,
  P,
  Strong,
  UL,
} from "@/components/blog/Prose";

const COVER_IMAGE =
  "/images/blog/seo-for-apps-beginners-guide/cover.png";

export function SeoForAppsBeginnersGuideBody() {
  return (
    <>
      <InlineImage
        src={COVER_IMAGE}
        alt="Diagram comparing web SEO levers with App Store ASO levers for mobile apps"
        width={1536}
        height={1024}
      />

      <P>
        You searched &ldquo;SEO for apps&rdquo; and got a wall of web SEO advice.
        Blog posts about Google rankings. Backlink strategies. Meta descriptions.
        None of it applies to your iOS app sitting in App Store Connect with
        twelve downloads.
      </P>
      <P>
        That is not your fault. Almost nobody outside mobile growth circles uses
        the right term on day one. The real name for what you want is{" "}
        <Strong>ASO</Strong>: App Store Optimization. Same broad idea as SEO
        (get found in search, turn visits into installs), completely different
        mechanics.
      </P>
      <P>
        This guide gives you the vocabulary, the mental model, and a practical
        path forward. No jargon pile. No pretending you should have known this
        already.
      </P>

      <H2>SEO vs ASO: what&rsquo;s actually different</H2>
      <P>
        Web SEO ranks pages on Google. ASO ranks apps inside the App Store search
        box. Users type a query, Apple returns a list, your app either shows up
        or it does not.
      </P>
      <P>
        The goal feels familiar: be visible for the searches that matter. The
        levers are not.
      </P>
      <P>
        Web SEO cares about backlinks, domain authority, page speed, H1 tags,
        and content depth. The App Store does not work that way. Apple is not
        crawling your website and counting who linked to you.
      </P>
      <P>
        What Apple <Em>does</Em> look at, in rough order of what you control on
        day one:
      </P>
      <UL>
        <LI>
          <Strong>App name and subtitle</Strong>{" "}
          &mdash; your strongest keyword real estate on iOS
        </LI>
        <LI>
          <Strong>Keywords field</Strong> (iOS only, 100 characters,
          comma-separated, no spaces) &mdash; hidden from users, indexed by
          Apple
        </LI>
        <LI>
          <Strong>Long description</Strong> (Android / Google Play) &mdash;
          indexed on Google Play; on iOS the description is mostly for humans,
          not the search algorithm
        </LI>
        <LI>
          <Strong>Screenshots and preview video</Strong> &mdash; not
          &ldquo;keywords&rdquo; exactly, but they drive tap-through and
          installs, which feeds ranking
        </LI>
        <LI>
          <Strong>Ratings and reviews</Strong> &mdash; social proof that affects
          conversion once someone finds you
        </LI>
        <LI>
          <Strong>Download velocity</Strong> &mdash; how fast installs are
          coming in relative to competitors for a given search term
        </LI>
      </UL>
      <P>
        Notice what is missing. No backlinks. No blog content strategy for the
        App Store itself. No XML sitemaps.
      </P>
      <P>
        If you are optimizing your app&rsquo;s <Em>website</Em> for Google, that
        is still SEO. Useful for brand searches and content marketing. But it
        will not rank your app inside the App Store. Those are two separate
        games.
      </P>
      <P>
        Most beginners conflate them because both involve &ldquo;keywords.&rdquo;
        In web SEO you pick phrases and write content around them. In ASO you
        pick phrases and embed them in fixed metadata fields with strict
        character limits. The App Store does not reward a blog post about your
        app category. It rewards an app that converts for that search.
      </P>

      <H2>The chicken-and-egg problem every new app hits</H2>
      <P>
        Here is the part that frustrates every solo dev who reads an ASO
        checklist and implements it perfectly.
      </P>
      <P>
        App Store search rewards <Strong>download velocity</Strong>. Apple wants
        to show apps that people are actively choosing right now for a given
        query. A brand-new app with zero downloads sends a weak signal. Weak
        signal means low rank. Low rank means fewer impressions. Fewer
        impressions means fewer downloads.
      </P>
      <P>
        You hit the wall fast. Your metadata is clean. Your screenshots look
        fine. You are still on page four for your category term, invisible.
      </P>
      <P>
        Organic ASO alone is a slow burn. It works eventually for apps that
        already have momentum. It is a brutal starting strategy for an app with
        no audience, no press, and no existing user base to spike installs.
      </P>
      <P>
        This is not a reason to skip ASO. Metadata still matters. Bad metadata
        makes everything else harder. A vague app name wastes your best keyword
        slot. An empty keywords field leaves ranking on the table. But metadata
        alone rarely breaks the cold-start loop.
      </P>
      <P>
        You need a way to seed installs while you figure out which search terms
        actually convert. That is where paid App Store search enters the
        picture.
      </P>

      <H2>Apple Search Ads is the shortcut</H2>
      <P>
        <Strong>Apple Search Ads (ASA)</Strong> is paid placement at the top of
        App Store search results. Someone searches &ldquo;habit tracker&rdquo;
        or &ldquo;budget app,&rdquo; your app can appear above the organic
        listings with a small &ldquo;Ad&rdquo; label.
      </P>
      <P>
        You are not buying Google clicks. You are buying App Store search
        visibility directly.
      </P>
      <P>
        Why this matters for ASO: every paid install from a search ad sends a
        velocity signal tied to that keyword. Spend on the right terms, get
        installs, improve your organic rank for those terms over time. ASA is
        not a replacement for ASO. For most indie apps, it is how you bootstrap
        ASO while you still have no organic traction.
      </P>
      <P>
        Realistic starting budgets for a solo dev testing the waters:
      </P>
      <UL>
        <LI>
          <Strong>$10&ndash;20/day</Strong> to learn without burning cash fast
        </LI>
        <LI>
          <Strong>$300&ndash;600/month</Strong> if you are serious about finding
          winning keywords in one storefront (usually the US first)
        </LI>
        <LI>
          Scale only after you know which terms produce paying users, not just
          cheap installs
        </LI>
      </UL>
      <P>Which keywords to bid on first:</P>
      <OL>
        <LI>
          <Strong>Your own app name.</Strong> Cheap, high intent, defends
          against competitors bidding on your brand. If someone searches your
          exact name, you should own that slot.
        </LI>
        <LI>
          <Strong>Core category terms.</Strong> The five to ten phrases that
          describe what your app actually does. &ldquo;meditation app,&rdquo;
          &ldquo;invoice maker,&rdquo; &ldquo;workout planner.&rdquo; Expect
          higher cost per tap here. That is normal.
        </LI>
        <LI>
          <Strong>Long-tail variants once you have data.</Strong>{" "}
          &ldquo;meditation app for anxiety&rdquo; before you go hard on
          &ldquo;meditation.&rdquo; Lower volume, often cheaper, easier to
          learn on.
        </LI>
      </OL>
      <P>
        Do not start by bidding on every keyword Apple suggests. Start narrow.
        One country. One campaign. Twenty to thirty keywords you would genuinely
        want to rank for organically.
      </P>
      <P>
        I burned my first ASA budget bidding broad category terms with no
        revenue tracking attached. Installs looked great. MRR did not move. The
        fix was not spending more. It was spending on fewer keywords and
        watching what happened after the install.
      </P>
      <P>
        For the full connection flow (API credentials, app setup, RevenueCat
        link), see{" "}
        <A href="/apple-search-ads-attribution-setup-guide">
          the ASA setup guide for indie devs
        </A>
        .
      </P>

      <H2>What to actually measure once you&rsquo;re spending</H2>
      <P>
        Here is where most solo devs waste their first few hundred dollars.
      </P>
      <P>
        The native Apple Search Ads dashboard shows spend, taps, installs, and
        cost per install. It stops there. It does not show subscription revenue.
        It does not show trial-to-paid rate. It does not tell you that
        &ldquo;budget app&rdquo; drove forty installs and zero subscriptions
        while &ldquo;expense tracker&rdquo; drove six installs and four paid
        users.
      </P>
      <P>
        <Strong>Installs are not the outcome.</Strong> Revenue is.
      </P>
      <P>
        If you use RevenueCat for subscriptions, you already have the revenue
        side. The gap is joining it to keyword-level spend. Without that join,
        you optimize for cheap installs and wonder why ROAS looks fine in
        Apple&rsquo;s dashboard while your MRR barely moves.
      </P>
      <P>What to watch once campaigns are running:</P>
      <UL>
        <LI>
          <Strong>Revenue per keyword</Strong>, not just cost per install
        </LI>
        <LI>
          <Strong>Trial starts and paid conversions</Strong> tied back to the
          search term that brought the user
        </LI>
        <LI>
          <Strong>ROAS by keyword</Strong> after at least a few weeks of data
          (subscriptions need time to convert and renew)
        </LI>
      </UL>
      <P>
        The native ASA dashboard will not give you keyword-level revenue. You
        either build spreadsheets, export CSVs and match manually, or use a
        tool built for the gap.{" "}
        <A href="https://appskale.ai/">AppSkale</A>{" "}connects Apple Search Ads
        spend to RevenueCat revenue so you can see which keywords actually pay
        for themselves. That is the measurement loop most solo devs get stuck
        without.
      </P>
      <P>
        If you want the ROAS math spelled out separately, see{" "}
        <A href="/blog/how-to-calculate-apple-search-ads-roas-with-revenuecat">
          how to calculate Apple Search Ads ROAS with RevenueCat
        </A>
        .
      </P>

      <H2>Where to go next</H2>
      <P>
        You now have the vocabulary. ASO is App Store SEO. Metadata gets you
        indexed. Download velocity gets you ranked. Apple Search Ads seeds the
        velocity while you learn what converts.
      </P>
      <P>A sane first-week checklist:</P>
      <OL>
        <LI>
          Fix your app name, subtitle, and keywords field for your primary
          storefront
        </LI>
        <LI>
          Set up Apple Search Ads on your app name plus ten to fifteen category
          terms
        </LI>
        <LI>
          Connect revenue tracking before you scale spend (RevenueCat plus
          keyword-level reporting)
        </LI>
        <LI>
          Review weekly: pause keywords that spend without revenue, keep the ones
          that do
        </LI>
      </OL>
      <P>
        Start the ASA setup here:{" "}
        <A href="/apple-search-ads-attribution-setup-guide">
          ASA setup guide for indie devs
        </A>
        . When you are ready to see revenue per keyword instead of guessing from
        install counts,{" "}
        <A href="https://appskale.ai/">AppSkale</A> is built for exactly that
        problem.
      </P>
    </>
  );
}
