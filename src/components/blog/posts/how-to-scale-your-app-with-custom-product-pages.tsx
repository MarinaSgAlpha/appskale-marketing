import {
  Banner,
  Blockquote,
  Em,
  H4,
  InlineImage,
  LI,
  OL,
  P,
  Strong,
  UL,
} from "@/components/blog/Prose";

export function ScaleCustomProductPagesBody() {
  return (
    <>
      <P>
        Most developers think scaling Apple Search Ads is about bidding higher.
      </P>
      <P>It&rsquo;s not.</P>
      <P>
        Apple Search Ads doesn&rsquo;t consistently reward the highest
        bidder&mdash;it rewards the{" "}
        <Strong>most relevant bidder</Strong>. And once you understand how
        relevance works, Custom Product Pages (CPPs) stop being a &ldquo;nice
        to have&rdquo; and become a <Strong>scaling weapon</Strong>.
      </P>

      <H4>Apple Search Ads Is a Relevance Auction, Not a Money Auction</H4>
      <P>
        Every keyword auction is decided by <Strong>two forces</Strong>:
      </P>
      <OL>
        <LI>Your bid</LI>
        <LI>Your relevance score</LI>
      </OL>
      <P>Relevance is inferred from behavior, mainly:</P>
      <UL>
        <LI>
          <Strong>View &rarr; Tap conversion</Strong> (does your ad get
          clicked?)
        </LI>
        <LI>
          <Strong>Tap &rarr; Install conversion</Strong> (does the page
          convince users to install?)
        </LI>
      </UL>
      <P>
        If your ad and product page match the user&rsquo;s intent better than
        competitors, Apple can:
      </P>
      <UL>
        <LI>Show you more often</LI>
        <LI>Charge you less per tap</LI>
        <LI>
          Let you win auctions <Strong>without raising bids</Strong>
        </LI>
      </UL>
      <P>This is why smaller apps sometimes beat bigger budgets.</P>

      <H4>Step 1: Find What Actually Sells (Before Touching CPPs)</H4>
      <P>
        Before you create a single Custom Product Page, you need to answer one
        question:
      </P>
      <P>
        <Strong>Which keywords actually convert into paying users?</Strong>
      </P>
      <P>
        Not which keywords <Em>sound</Em> good.
        <br />
        Not which keywords have the most volume.
        <br />
        Which ones <Strong>sell</Strong>.
      </P>
      <P>
        A fitness app may perform poorly on &ldquo;fitness app&rdquo; but
        convert on <Strong>&ldquo;calorie counter.&rdquo;</Strong>
        <br />
        An AI image app may struggle on &ldquo;AI image generator&rdquo; but
        work on <Strong>&ldquo;AI face swap photo&rdquo;</Strong> or{" "}
        <Strong>&ldquo;AI face swap video.&rdquo;</Strong>
      </P>
      <P>
        People don&rsquo;t pay for categories.
        <br />
        They pay for <Strong>specific outcomes</Strong>.
      </P>
      <P>
        Here&rsquo;s the hard part:
        <br />
        Apple Search Ads is great at telling you which keywords generate
        installs&mdash;but installs alone don&rsquo;t tell you what&rsquo;s
        working as a business.
      </P>
      <P>This is where most developers get stuck. They end up:</P>
      <UL>
        <LI>Scaling keywords that look busy but don&rsquo;t convert</LI>
        <LI>Killing keywords that quietly produce subscribers</LI>
        <LI>Building Custom Product Pages around installs instead of revenue</LI>
      </UL>
      <P>
        <Strong>
          With AppSkale, you can see which Apple Search Ads keywords actually
          sell&mdash;and which don&rsquo;t.
        </Strong>
        <br />
        It does this by connecting Apple Search Ads keyword data with real
        subscription and purchase events from <Strong>RevenueCat</Strong>, so
        you&rsquo;re looking at revenue, not guesses.
      </P>
      <P>
        If you don&rsquo;t know your converting keywords yet, CPPs won&rsquo;t
        save you.
        <br />
        They only <Strong>amplify what already works</Strong>.
      </P>

      <H4>Step 2: Build CPPs Around Proven Keywords&mdash;Not Features</H4>
      <P>
        Once you identify a keyword that converts, you{" "}
        <Strong>build a page that mirrors the exact intent</Strong> behind that
        keyword.
      </P>
      <P>
        If the keyword is <Strong>&ldquo;calorie counter&rdquo;</Strong>, your
        CPP should:
      </P>
      <UL>
        <LI>Show calorie tracking screens immediately</LI>
        <LI>Use &ldquo;Calorie Counter&rdquo; in screenshot titles</LI>
        <LI>Remove distractions unrelated to that use case</LI>
      </UL>
      <P>
        If the keyword is <Strong>&ldquo;AI face swap video&rdquo;</Strong>,
        your CPP should:
      </P>
      <UL>
        <LI>Show face-swap results instantly</LI>
        <LI>Talk about video face swap, not generic AI generation</LI>
        <LI>Make the value obvious in under 3 seconds</LI>
      </UL>
      <InlineImage
        src="/images/blog/how-to-scale-your-app-with-custom-product-pages/how-to-scale-your-app-with-custom-product-pages.png"
        alt="Apple Search Ads Analytics"
        width={2101}
        height={1061}
      />
      <P>The goal is simple:</P>
      <Blockquote>
        When a user lands, they should think
        <br />
        <Strong>&ldquo;This is exactly what I searched for.&rdquo;</Strong>
      </Blockquote>
      <P>That feeling is relevance.</P>

      <H4>Step 3: Better Relevance Lowers Your Costs Automatically</H4>
      <P>Here&rsquo;s where most people get surprised.</P>
      <P>
        As your <Strong>tap &rarr; install conversion improves</Strong>,
        Apple&rsquo;s system:
      </P>
      <UL>
        <LI>Rewards you with better auction placement</LI>
        <LI>Lowers your effective cost per tap</LI>
        <LI>Lets you win impressions at bids that previously didn&rsquo;t work</LI>
      </UL>
      <P>
        You might start at <Strong>$5&ndash;$10 per install</Strong>.
        <br />
        But as relevance improves, CPI often drops&mdash;sometimes to
        break-even, sometimes to profitable.
      </P>
      <P>
        You didn&rsquo;t change bids.
        <br />
        You changed <Strong>intent alignment</Strong>.
      </P>

      <H4>Step 4: Turn LTV Into a Scaling Switch</H4>
      <P>Now comes the only math that matters:</P>
      <P>
        <Strong>LTV vs CPI</Strong>
      </P>
      <UL>
        <LI>If CPI &gt; LTV &rarr; you&rsquo;re burning money</LI>
        <LI>If CPI &lt; LTV &rarr; you&rsquo;ve found a scaling lever</LI>
      </UL>
      <P>When a keyword is profitable:</P>
      <UL>
        <LI>
          <Strong>Remove artificial budget caps</Strong>
        </LI>
        <LI>Increase spend aggressively</LI>
        <LI>Let the auction fill as much volume as it allows</LI>
      </UL>
      <P>
        Then repeat the process:
        <br />
        Find the next keyword.
        <br />
        Build the next CPP.
        <br />
        Improve relevance again.
      </P>

      <H4>The Real Scaling Ceiling Most Apps Never Reach</H4>
      <P>Most apps stall at:</P>
      <UL>
        <LI>1&ndash;2 semi-working keywords</LI>
        <LI>Generic product pages</LI>
        <LI>No clear signal of what&rsquo;s profitable</LI>
      </UL>
      <P>But if you reach:</P>
      <UL>
        <LI>
          <Strong>5 profitable keywords</Strong>
        </LI>
        <LI>
          <Strong>$200&ndash;$500/day per keyword</Strong>
        </LI>
      </UL>
      <P>You&rsquo;re suddenly spending:</P>
      <UL>
        <LI>
          <Strong>$1,000&ndash;$2,500 per day</Strong>
        </LI>
        <LI>On keywords that already proved they work</LI>
      </UL>
      <P>
        That&rsquo;s not experimentation anymore.
        <br />
        That&rsquo;s <Strong>controlled scale</Strong>.
      </P>

      <H4>Why Most Apps Never Get There</H4>
      <P>They fail because they:</P>
      <UL>
        <LI>Treat Apple Search Ads as &ldquo;set and forget&rdquo;</LI>
        <LI>Build CPPs without knowing what converts</LI>
        <LI>Don&rsquo;t measure keyword-level performance clearly</LI>
        <LI>Scale installs instead of profitability</LI>
      </UL>
      <P>
        CPPs don&rsquo;t create growth by themselves.
        <br />
        They <Strong>multiply clarity</Strong>.
      </P>

      <H4>Final Thought</H4>
      <P>
        Custom Product Pages are not a design exercise.
        <br />
        They are a <Strong>relevance amplifier</Strong>.
      </P>
      <P>
        Find what sells first.
        <br />
        Then build pages that scream relevance.
        <br />
        Then scale only what proves it deserves scale.
      </P>

      <Banner
        src="/images/blog/how-to-scale-your-app-with-custom-product-pages/how-to-scale-your-app-with-custom-product-pages.png"
        alt="Apple Search Ads keyword analytics dashboard"
      />
    </>
  );
}
