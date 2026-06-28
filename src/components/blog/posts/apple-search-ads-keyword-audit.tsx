import { A, Em, H2, H3, LI, P, Strong, Table, UL } from "@/components/blog/Prose";

export function KeywordAudit30DayBody() {
  return (
    <>
      <P>
        Most developers never audit their keywords. They set bids once, glance
        at install counts every few days, and let the winners and the
        money-pits run side by side for months. The campaign &ldquo;works,&rdquo;
        spend goes out, installs come in, and nobody asks the harder question:
        which of these keywords is actually funding the account, and which is
        quietly bleeding it?
      </P>
      <P>
        A monthly keyword audit is the highest-leverage hour you can spend on
        Apple Search Ads. Not a dashboard glance &mdash; a real, deliberate
        pass where every keyword gets sorted into one of four buckets and a
        decision gets made. Here&rsquo;s the framework.
      </P>

      <H2>Why 30 days, not weekly</H2>
      <P>
        The temptation is to react fast &mdash; pause a keyword the moment CPA
        spikes, or pour budget into yesterday&rsquo;s top performer. Resist it.
        Subscription apps run on a delay: a tap today becomes a trial tomorrow
        and a paying subscriber a week or two later. If you judge a keyword on
        three days of data, you&rsquo;re reading installs before the revenue has
        had a chance to show up.
      </P>
      <P>
        Thirty days is long enough for trials to convert and for renewal
        signals to start landing, but short enough to catch a leak before it
        costs you a quarter&rsquo;s budget. Run it on the same day each month so
        you&rsquo;re always comparing like windows.
      </P>

      <H2>The three columns you need on one screen</H2>
      <P>
        Every keyword decision comes down to three numbers, and the whole
        problem is that they live in three different tools:
      </P>
      <UL>
        <LI>
          <Strong>Spend</Strong>{" "}&mdash; from your Apple Search Ads dashboard.
        </LI>
        <LI>
          <Strong>Organic rank trend</Strong>{" "}&mdash; from a rank tracker like
          AppTweak or AppFigures.
        </LI>
        <LI>
          <Strong>Revenue / LTV per keyword</Strong>{" "}&mdash; the column almost
          nobody connects, because ASA stops at installs and your revenue lives
          in RevenueCat.
        </LI>
      </UL>
      <P>
        Until those three sit on one screen for each keyword, you&rsquo;re
        auditing blind. The point of the framework below is that no bucket can
        be assigned without all three. (More on why paid spend and organic rank
        belong on the same timeline in{" "}
        <A href="/blog/does-apple-search-ads-spend-actually-affect-your-organic-app-store-ranking">
          does Apple Search Ads spend actually affect your organic ranking
        </A>
        .)
      </P>

      <H2>The four buckets</H2>
      <P>
        Sort every keyword in the account into exactly one of these. No
        &ldquo;maybe&rdquo; pile &mdash; if you can&rsquo;t decide, it goes in
        Investigate.
      </P>

      <Table
        headers={["Bucket", "What you're seeing", "Action"]}
        rows={[
          [
            <Strong key="k">Kill</Strong>,
            "Spend with no installs, installs with no revenue past day 30, or a keyword stuck at the popularity floor.",
            "Pause it. Reclaim the budget.",
          ],
          [
            <Strong key="ke">Keep</Strong>,
            "Profitable, but volume-capped — you're already winning most of the auctions.",
            "Hold the bid. Don't overfeed a maxed keyword.",
          ],
          [
            <Strong key="s">Scale</Strong>,
            "LTV comfortably above CPA, with headroom left in the auction.",
            "Increase budget aggressively. This is where growth comes from.",
          ],
          [
            <Strong key="i">Investigate</Strong>,
            "High installs, low revenue — wrong-intent traffic or a paywall problem, not a keyword problem.",
            "Diagnose before you touch the bid.",
          ],
        ]}
      />

      <H3>Kill</H3>
      <P>
        Three things land a keyword here. First, spend with no installs &mdash;
        you&rsquo;re paying for taps that don&rsquo;t convert, usually a
        relevance or creative mismatch. Second, installs with no revenue past
        day 30 &mdash; the keyword brings users who never pay, which is the most
        expensive kind of &ldquo;working&rdquo; keyword. Third, the popularity
        floor: a term nobody searches will hand you 2&ndash;3 installs a day no
        matter how hard you bid. Ranking #1 on a keyword with no demand is a
        screenshot, not velocity. (That trap is the whole subject of{" "}
        <A href="/blog/long-tail-keywords-main-keyword-rank">
          how long-tail keywords push your main keyword&rsquo;s rank
        </A>
        .)
      </P>

      <H3>Keep</H3>
      <P>
        These are your reliable earners that have hit their volume ceiling.
        You&rsquo;re already winning most of the auctions, so raising the bid
        just lifts CPA without buying more installs. Don&rsquo;t mistake a
        capped keyword for a scalable one &mdash; hold the bid steady and put
        the marginal dollar somewhere with room.
      </P>

      <H3>Scale</H3>
      <P>
        The whole audit exists to find these. A keyword belongs here only when
        its LTV clears its CPA with margin <Em>and</Em>{" "}there&rsquo;s auction
        share left to win. Both conditions matter: a profitable keyword
        you&rsquo;ve already maxed is a Keep, not a Scale. When you find a real
        Scale keyword, don&rsquo;t nudge the budget &mdash; push it. (If
        you&rsquo;re unsure how to compute LTV against spend cleanly, see{" "}
        <A href="/blog/how-to-calculate-apple-search-ads-roas-with-revenuecat">
          how to calculate Apple Search Ads ROAS with RevenueCat
        </A>
        .)
      </P>

      <H3>Investigate</H3>
      <P>
        High installs, low revenue is the most misread signal in ASA. The
        instinct is to kill the keyword, but the keyword is often fine &mdash;
        the leak is downstream. The searchers have install intent but not
        paying intent, or your onboarding and paywall are losing them before
        the trial. Before you cut a high-volume term, check whether the problem
        is the keyword or the funnel it feeds. Cutting a keyword to fix a
        paywall problem just hides the symptom.
      </P>

      <H2>How to run the audit</H2>
      <P>The pass itself takes about an hour once your data is in one place:</P>
      <UL>
        <LI>
          Pull the last 30 days of spend and installs per keyword from ASA.
        </LI>
        <LI>
          Pull the same window of revenue / LTV per keyword (or use a tool that
          already joins it to spend).
        </LI>
        <LI>Pull the 30-day organic rank trend for each keyword.</LI>
        <LI>
          Assign every keyword a bucket. Make the call on the spot &mdash;
          ambiguity goes to Investigate.
        </LI>
        <LI>
          Execute: pause the Kills, hold the Keeps, raise budget on the Scales,
          and open a ticket for each Investigate.
        </LI>
      </UL>

      <H2>Watch for confounders</H2>
      <P>
        A clean number can still lie. Before you trust a bucket assignment,
        rule out the obvious distortions:
      </P>
      <UL>
        <LI>
          <Strong>Seasonality</Strong>{" "}&mdash; a December spike or summer dip
          can flatter or punish a keyword that&rsquo;s actually steady.
        </LI>
        <LI>
          <Strong>Competitor launches</Strong>{" "}&mdash; a new entrant on your
          term can crater installs without anything changing on your side.
        </LI>
        <LI>
          <Strong>App Store featuring</Strong>{" "}&mdash; a feature placement
          inflates organic installs and can make paid keywords look better than
          they are.
        </LI>
        <LI>
          <Strong>Sample size</Strong>{" "}&mdash; a keyword with 8 installs in 30
          days doesn&rsquo;t have enough signal to bucket confidently. Give it
          another cycle.
        </LI>
      </UL>

      <H2>The column the whole thing depends on</H2>
      <P>
        This audit only works if you can see revenue per keyword. Spend and
        rank are easy to get; the revenue column is the one that turns a guess
        into a decision &mdash; and it&rsquo;s the one ASA dashboards, rank
        trackers, and spreadsheets all leave out.
      </P>
      <P>
        That&rsquo;s the gap <A href="https://appskale.ai/">AppSkale</A>{" "}
        closes:
        it ties each keyword to the subscription revenue it actually produces
        and puts spend, rank, and revenue on the same screen &mdash; so the
        monthly audit is an hour of decisions instead of a week of stitching
        exports.
      </P>
    </>
  );
}
