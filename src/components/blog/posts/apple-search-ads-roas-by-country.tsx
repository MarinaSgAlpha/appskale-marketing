import {
  A,
  Em,
  H2,
  InlineImage,
  LI,
  P,
  Strong,
  Table,
  UL,
} from "@/components/blog/Prose";

const COVER_IMAGE =
  "/images/blog/apple-search-ads-roas-by-country/cover.png";

export function RoasByCountryBody() {
  return (
    <>
      <InlineImage
        src={COVER_IMAGE}
        alt="A single blended Apple Search Ads ROAS figure splitting into separate per-country ROAS values, some profitable and some losing money."
        width={1536}
        height={1024}
      />

      <P>
        Your account shows 1.3x blended ROAS. Not amazing, not alarming &mdash;
        healthy enough to keep scaling. So you raise budgets across the board
        and move on.
      </P>
      <P>
        Then you split that number by country, and the average shatters. The US
        is running 0.7x. Japan is at 2.9x. Brazil is 0.3x and has been for
        months. You were never running &ldquo;a campaign at 1.3x&rdquo; &mdash;
        you were running a dozen different campaigns in a dozen different
        economies, and the winners have been quietly paying for the losers the
        whole time.
      </P>
      <P>
        This is the keyword-averaging problem one layer deeper. Same disease,
        bigger blind spot.
      </P>

      <H2>Why blended ROAS hides the truth</H2>
      <P>
        Apple Search Ads runs per storefront. Every country is its own auction
        with its own cost per tap, its own competition, its own install volume
        &mdash; and, the part almost nobody measures, its own lifetime value.
      </P>
      <P>
        Blended ROAS just sums all your revenue and divides by all your spend.
        A handful of cheap, high-volume markets can dominate your install count
        and drag the average down, while two or three high-LTV markets quietly
        carry the actual profit. Or the reverse: an expensive market looks like
        a drain on the blend when it&rsquo;s the only thing keeping you
        profitable.
      </P>
      <P>
        You can&rsquo;t act on an average. When you bid one number globally, the
        geo economics never line up &mdash; you overpay where users don&rsquo;t
        convert and underbid where they do.
      </P>

      <H2>What actually differs between countries</H2>
      <UL>
        <LI>
          <Strong>Cost per tap and install.</Strong>{" "}
          Tier 1 English-speaking markets cost the most per tap; many markets in
          Latin America and South Asia run a fraction of that.
        </LI>
        <LI>
          <Strong>Install volume.</Strong>{" "}
          Cheap markets flood you with installs, which flatters your blended CPI
          and inflates your vanity counts.
        </LI>
        <LI>
          <Strong>Lifetime value.</Strong>{" "}
          The one nobody checks. Purchasing power, willingness to pay for
          subscriptions, card penetration, and whether your pricing is localized
          all swing revenue per user enormously.
        </LI>
        <LI>
          <Strong>Trial-to-paid rate.</Strong>{" "}
          A market that converts trials at 40% and one that converts at 8% can
          show identical install counts and wildly different revenue.
        </LI>
      </UL>
      <P>
        Net: a &ldquo;cheap&rdquo; install can be the most expensive thing you
        buy if it never pays. (If your ROAS math itself is shaky, start with{" "}
        <A href="/blog/how-to-calculate-apple-search-ads-roas-with-revenuecat">
          how to calculate Apple Search Ads ROAS with RevenueCat
        </A>
        .)
      </P>

      <H2>A simple three-tier framework</H2>
      <P>
        You don&rsquo;t need a spreadsheet per storefront to start. Group
        markets into three tiers and treat each differently.
      </P>
      <Table
        headers={["Tier", "Typical markets", "Profile", "Default move"]}
        rows={[
          [
            <Strong key="t1">Tier 1</Strong>,
            "US, UK, Canada, Australia, Germany, Japan",
            "High CPT, high LTV, deep auctions",
            "Bid to LTV — usually clears ROAS",
          ],
          [
            <Strong key="t2">Tier 2</Strong>,
            "Southern & Eastern Europe, Gulf states, Korea",
            "Mid CPT, mid LTV, less competition",
            "Test and localize — often underpriced gems",
          ],
          [
            <Strong key="t3">Tier 3</Strong>,
            "Most of LatAm, South & Southeast Asia, Africa",
            "Low CPT, high install volume, low LTV",
            "Watch for the cheap-install trap",
          ],
        ]}
      />

      <H2>The cheap-install trap</H2>
      <P>
        Tier 3 markets make your dashboard look incredible. Installs spike, CPI
        drops, the line goes up and to the right. It&rsquo;s the most seductive
        chart in the account, and founders chase it constantly.
      </P>
      <P>
        But if trial-to-paid and LTV don&rsquo;t follow the install curve,
        you&rsquo;re buying screenshots. Fifteen-cent installs that never
        subscribe are worse than five-dollar installs that do &mdash; they cost
        you real money and they pollute every blended metric you look at
        afterward.
      </P>
      <P>
        The rule is the same one that runs the whole account: judge a country on
        revenue per install, not cost per install.
      </P>

      <H2>Localization: the lever that lowers CPI and lifts ROI</H2>
      <P>
        Once your data flags a country as profitable-but-capped, or
        marginal-but-promising, localization is how you make it scale. But be
        precise about what it actually does &mdash; Apple doesn&rsquo;t hand out
        a Google-style quality-score discount, so don&rsquo;t expect your bid to
        drop on its own.
      </P>
      <UL>
        <LI>
          <Strong>Localized metadata and screenshots</Strong>{" "}
          lift tap-through and tap-to-install. More installs per tap means a
          lower effective CPI, and the relevance gain lets you hold position at
          a lower bid &mdash; the indirect CPT win.
        </LI>
        <LI>
          <Strong>Localized paywall and pricing</Strong>{" "}
          &mdash; local currency, purchasing-power-adjusted tiers &mdash; lift
          trial-to-paid, which raises LTV and ROAS even if your cost per tap
          never moves.
        </LI>
      </UL>
      <P>
        In other words, localization improves the two ends ROAS actually depends
        on &mdash; cost per install and revenue per user &mdash; not the bid
        itself. And you localize the markets your data already flagged, not all
        forty storefronts. Same audit discipline as everything else.
      </P>
      <P>
        One distinction worth drawing: this is not the same as{" "}
        <Em>cross-localization</Em>, where you borrow other locales to win more
        keywords in your home storefront (covered in{" "}
        <A href="/blog/how-to-improve-your-app-store-keyword-rankings-in-2026">
          how to improve your App Store keyword rankings
        </A>
        ). Here you&rsquo;re localizing <Em>for</Em>{" "}the target country to
        improve paid efficiency in that country.
      </P>

      <H2>How to run it</H2>
      <UL>
        <LI>
          Split campaigns &mdash; or at minimum country bid adjustments &mdash;
          by market or tier. Never one global number.
        </LI>
        <LI>Set budgets to LTV by country, not install volume.</LI>
        <LI>
          Localize your Tier 1 winners and your promising Tier 2 markets; cap or
          cut Tier 3 geos that bring installs but no revenue.
        </LI>
        <LI>
          Recheck monthly, on the same cadence as your{" "}
          <A href="/blog/apple-search-ads-keyword-audit">keyword audit</A>{" "}&mdash;
          country economics drift as competition and seasonality shift.
        </LI>
      </UL>

      <H2>The column the whole thing depends on</H2>
      <P>
        The blocker is the same as always: revenue per country lives in
        RevenueCat, spend per country lives in Apple Search Ads, and nothing
        joins them. So you see cheap installs in one tool and subscription
        revenue in another and never put them on the same row.
      </P>
      <P>
        That&rsquo;s the gap{" "}
        <A href="https://appskale.ai/">AppSkale</A>{" "}closes: it shows ROAS by
        country &mdash; and by keyword within each country &mdash; on one
        screen, so you know which storefronts actually pay before you spend a
        dollar localizing or scaling them.
      </P>
    </>
  );
}
