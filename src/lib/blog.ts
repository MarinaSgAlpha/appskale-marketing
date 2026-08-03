export type BlogFAQ = { question: string; answer: string };

export type BlogStep = { name: string; text: string };

export type BlogAuthor = { name: string; url?: string };

/** Schema.org `Thing` entry used in the `about` array. */
export type BlogThing = { name: string; url?: string };

/** Schema.org `mentions` entry. Supports software, website, and generic `Thing` references. */
export type BlogMention =
  | {
      type: "SoftwareApplication";
      name: string;
      applicationCategory: string;
      operatingSystem: string;
      description: string;
      url?: string;
    }
  | {
      type: "WebSite";
      name: string;
      url?: string;
    }
  | {
      type: "Thing";
      name: string;
      url?: string;
    };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  author?: BlogAuthor;
  faq?: BlogFAQ[];
  /** HowToStep entries for posts structured as step-by-step guides. */
  steps?: BlogStep[];
  /** Schema.org `about` entries — high-level topics covered by the article. */
  about?: BlogThing[];
  /** Schema.org `mentions` — specific products, sites, or things referenced in the article. */
  mentions?: BlogMention[];
  /** SEO keyword array surfaced as `keywords` in the BlogPosting JSON-LD. */
  keywords?: string[];
  /** When true, the `[slug]` route renders the full article body component for this post. */
  hasBody?: boolean;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "apple-search-ads-search-terms-report",
    title: "How to Read the Apple Search Ads Search Terms Report",
    description:
      "The keyword report shows what you meant to buy. The search terms report shows what actually spent. Here is how to promote winners, negative waste, and ignore noise.",
    image: {
      src: "/images/blog/apple-search-ads-search-terms-report/cover.png",
      alt: "Diagram showing Apple Search Ads keywords you bid on versus search terms that actually triggered the ads",
      width: 1024,
      height: 682,
    },
    author: { name: "Sam H", url: "https://www.linkedin.com/in/mghtut/" },
    faq: [
      {
        question:
          "What is the difference between keywords and search terms in Apple Search Ads?",
        answer:
          "A keyword is the term you add with a match type. A search term is the actual App Store query that matched and spent. On Broad match or Search Match, one keyword can trigger many different search terms.",
      },
      {
        question: "How often should I check the Apple Search Ads search terms report?",
        answer:
          "Weekly is enough for most indie budgets. Sort by spend for the last seven days, promote clear winners to Exact, negative clear waste, and leave tiny no-pattern rows alone.",
      },
      {
        question:
          "Should I add converting search terms as Exact keywords?",
        answer:
          "Yes. If a Broad or discovery query clearly produces trials or revenue, promote it to Exact so you can bid and measure it deliberately instead of leaving it buried in expansion.",
      },
      {
        question:
          "When should I negative a search term in Apple Search Ads?",
        answer:
          "Negative a term when the intent is clearly wrong for your app, or when it repeatedly spends without meaningful trials or revenue. Avoid blocking after only one or two taps unless the mismatch is obvious.",
      },
    ],
    about: [
      { name: "Apple Search Ads" },
      { name: "Search Terms Report" },
      { name: "Keyword Optimization" },
      { name: "Negative Keywords" },
      { name: "Subscription Revenue Attribution" },
    ],
    mentions: [
      {
        type: "SoftwareApplication",
        name: "AppSkale",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description:
          "An Apple Search Ads analytics tool that shows keyword-level spend and RevenueCat subscription revenue on the same screen.",
      },
      {
        type: "SoftwareApplication",
        name: "RevenueCat",
        applicationCategory: "BusinessApplication",
        operatingSystem: "iOS, Android, Web",
        description: "A subscription management platform for mobile apps.",
      },
    ],
    keywords: [
      "apple search ads search terms report",
      "how to read asa search terms",
      "apple search ads search terms vs keywords",
      "asa search query report",
      "promote search terms to exact match",
      "apple search ads weekly optimization",
      "search terms negative keywords",
      "asa broad match search terms",
      "apple search ads beginner reporting",
      "keyword level search terms analysis",
    ],
    hasBody: true,
  },
  {
    slug: "cpt-vs-cpi-apple-search-ads",
    title: "CPT vs CPI in Apple Search Ads: Which Number Should You Trust?",
    description:
      "CPT is tap cost. CPI is install cost. Neither is ROAS. Here is how to use each Apple Search Ads metric without optimizing the wrong number.",
    image: {
      src: "/images/blog/cpt-vs-cpi-apple-search-ads/cover.png",
      alt: "Diagram comparing Apple Search Ads CPT cost per tap with CPI cost per install and revenue per keyword",
      width: 1024,
      height: 682,
    },
    author: { name: "Sam H", url: "https://www.linkedin.com/in/mghtut/" },
    faq: [
      {
        question: "What is CPT in Apple Search Ads?",
        answer:
          "CPT is cost per tap. It is what you pay when someone taps your ad. Your max CPT bid is the auction ceiling; average CPT is what you actually paid across taps.",
      },
      {
        question: "What is CPI in Apple Search Ads?",
        answer:
          "CPI is cost per install: spend divided by attributed installs. It includes tap-to-install conversion, so listing quality and relevance affect CPI even when CPT stays the same.",
      },
      {
        question: "Should I optimize Apple Search Ads for CPT or CPI?",
        answer:
          "Use CPT for bid and auction context, and CPI for install efficiency. For subscription apps, scale decisions should follow revenue or ROAS by keyword, not the lowest CPT or CPI alone.",
      },
      {
        question: "Why can low CPI still be bad in Apple Search Ads?",
        answer:
          "A low CPI only means downloads were cheap. If those users never start a trial or pay, the keyword still loses money. Cheap installs into a weak funnel or bad intent are not a win.",
      },
    ],
    about: [
      { name: "Apple Search Ads" },
      { name: "Cost Per Tap" },
      { name: "Cost Per Install" },
      { name: "Return on Ad Spend" },
      { name: "Keyword-Level Analytics" },
    ],
    mentions: [
      {
        type: "SoftwareApplication",
        name: "AppSkale",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description:
          "An Apple Search Ads analytics tool that shows keyword-level spend and RevenueCat subscription revenue on the same screen.",
      },
      {
        type: "SoftwareApplication",
        name: "RevenueCat",
        applicationCategory: "BusinessApplication",
        operatingSystem: "iOS, Android, Web",
        description: "A subscription management platform for mobile apps.",
      },
    ],
    keywords: [
      "apple search ads cpt vs cpi",
      "cost per tap apple search ads",
      "cost per install apple search ads",
      "asa cpt meaning",
      "asa cpi meaning",
      "which metric apple search ads",
      "cpt or cpi optimize",
      "apple search ads metrics beginners",
      "revenue per keyword vs cpi",
      "apple search ads bid metrics",
    ],
    hasBody: true,
  },
  {
    slug: "apple-search-ads-daily-budget",
    title: "Apple Search Ads Daily Budget: How Much Is Enough to Learn?",
    description:
      "Too little Apple Search Ads budget starves keywords. Too much burns cash early. Here is a practical daily range for indie apps and when to raise spend.",
    image: {
      src: "/images/blog/apple-search-ads-daily-budget/cover.png",
      alt: "Diagram showing Apple Search Ads daily budget as multi-week learning runway rather than one-day install chasing",
      width: 1024,
      height: 682,
    },
    author: { name: "Sam H", url: "https://www.linkedin.com/in/mghtut/" },
    faq: [
      {
        question: "How much should I spend per day on Apple Search Ads?",
        answer:
          "For many indie subscription apps testing in one storefront, about $10–15/day is a minimum viable learning budget on a tight Exact keyword list, with about $15–25/day often more comfortable. Below roughly $10/day, most keyword lists never get a fair sample.",
      },
      {
        question: "Is $5 a day enough for Apple Search Ads?",
        answer:
          "Usually not across a full beginner keyword list. At $5/day, terms starve and decisions get noisy. If that is all you can risk, shrink the test to brand Exact or a handful of long-tail terms in one storefront.",
      },
      {
        question: "How long should I run an Apple Search Ads learning budget?",
        answer:
          "Plan for four to six weeks of steady daily spend so keywords get repeated auctions and trials have time to convert. A one-day spend spike is not the same as multi-week runway.",
      },
      {
        question: "When should I raise my Apple Search Ads daily budget?",
        answer:
          "Raise budget when specific Exact keywords show trials or revenue and are limited by budget, not when blended CPI looks cheap. Fix funnel leaks and pause losers before scaling the whole account.",
      },
    ],
    about: [
      { name: "Apple Search Ads" },
      { name: "Daily Budget" },
      { name: "Learning Campaigns" },
      { name: "Keyword Testing" },
      { name: "Subscription Revenue Attribution" },
    ],
    mentions: [
      {
        type: "SoftwareApplication",
        name: "AppSkale",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description:
          "An Apple Search Ads analytics tool that shows keyword-level spend and RevenueCat subscription revenue on the same screen.",
      },
      {
        type: "SoftwareApplication",
        name: "RevenueCat",
        applicationCategory: "BusinessApplication",
        operatingSystem: "iOS, Android, Web",
        description: "A subscription management platform for mobile apps.",
      },
    ],
    keywords: [
      "apple search ads daily budget",
      "how much to spend on apple search ads",
      "asa learning budget",
      "apple search ads $10 a day",
      "asa budget for beginners",
      "apple search ads minimum budget",
      "when to raise asa budget",
      "apple search ads runway",
      "indie app apple search ads spend",
      "asa daily cap strategy",
    ],
    hasBody: true,
  },
  {
    slug: "competitor-keywords-apple-search-ads",
    title: "Should You Bid on Competitor Keywords in Apple Search Ads?",
    description:
      "Competitor keywords in Apple Search Ads can steal demand or burn budget. Here is when conquest is worth testing, and how to run it without wrecking learning.",
    image: {
      src: "/images/blog/competitor-keywords-apple-search-ads/cover.png",
      alt: "Diagram comparing brand defense, category keywords, and competitor conquest keywords in Apple Search Ads",
      width: 1024,
      height: 682,
    },
    author: { name: "Sam H", url: "https://www.linkedin.com/in/mghtut/" },
    faq: [
      {
        question:
          "Should beginners bid on competitor keywords in Apple Search Ads?",
        answer:
          "Usually not in the first learning month. Defend your own brand and test long-tail category keywords first. Add a small Exact-match competitor test only after you can measure trials and revenue by keyword.",
      },
      {
        question: "Do competitor keywords work in Apple Search Ads?",
        answer:
          "They can, when your listing can win the side-by-side comparison and users are open to alternatives. They often fail when you bid on giant brands, lack reviews, or judge success on installs instead of subscription revenue.",
      },
      {
        question:
          "Should competitor keywords be in the same ad group as category keywords?",
        answer:
          "No. Keep competitor conquest in a separate Exact-match ad group with its own budget cap so it does not pollute brand defense or category learning.",
      },
      {
        question:
          "How many competitor keywords should I test in Apple Search Ads?",
        answer:
          "Start with two to five Exact rival names, a hard daily cap, Search Match off, and a clear decision after one trial conversion window. Scale only if revenue justifies it versus your best category terms.",
      },
    ],
    about: [
      { name: "Apple Search Ads" },
      { name: "Competitor Keywords" },
      { name: "Brand Defense" },
      { name: "Conquest Advertising" },
      { name: "Subscription Revenue Attribution" },
    ],
    mentions: [
      {
        type: "SoftwareApplication",
        name: "AppSkale",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description:
          "An Apple Search Ads analytics tool that shows keyword-level spend and RevenueCat subscription revenue on the same screen.",
      },
      {
        type: "SoftwareApplication",
        name: "RevenueCat",
        applicationCategory: "BusinessApplication",
        operatingSystem: "iOS, Android, Web",
        description: "A subscription management platform for mobile apps.",
      },
    ],
    keywords: [
      "competitor keywords apple search ads",
      "bid on competitor keywords ASA",
      "apple search ads conquest",
      "should I bid on competitor app names",
      "asa brand vs competitor keywords",
      "apple search ads competitor bidding",
      "conquest keywords ios apps",
      "apple search ads rival brand keywords",
      "asa competitor keyword strategy",
      "defend brand before competitor keywords",
    ],
    hasBody: true,
  },
  {
    slug: "how-many-keywords-apple-search-ads",
    title: "How Many Keywords Should You Run in Apple Search Ads?",
    description:
      "More Apple Search Ads keywords are not more coverage on a small budget. Here is a practical range for beginners, how to structure them, and when to grow the list.",
    image: {
      src: "/images/blog/how-many-keywords-apple-search-ads/cover.png",
      alt: "Diagram showing a focused Apple Search Ads keyword list versus an overcrowded account that cannot produce clear signal",
      width: 1024,
      height: 682,
    },
    author: { name: "Sam H", url: "https://www.linkedin.com/in/mghtut/" },
    faq: [
      {
        question: "How many keywords should beginners run in Apple Search Ads?",
        answer:
          "For a first learning phase in one storefront, roughly 12–20 Exact keywords is a practical range: a few brand variants plus about 10–15 long-tail category terms. Smaller daily budgets should stay toward the low end.",
      },
      {
        question: "Is it bad to run 50+ keywords in Apple Search Ads?",
        answer:
          "On a small budget, yes, often. Too many keywords starve each term of spend, slow decisions, and blur reporting. Grow past twenty only after the current list produces clear keep, pause, and scale decisions.",
      },
      {
        question:
          "Should brand and category keywords be in the same ad group?",
        answer:
          "No. Keep brand Exact separate from category Exact, and put discovery (Broad or Search Match tests) in its own ad group later. One match type per ad group while you learn.",
      },
      {
        question: "When should I add more Apple Search Ads keywords?",
        answer:
          "Add keywords after existing Exact terms show which intents convert, or when discovery surfaces a converting search term you can promote to Exact. Do not add keywords just because the account feels quiet.",
      },
    ],
    about: [
      { name: "Apple Search Ads" },
      { name: "Keyword Strategy" },
      { name: "Ad Group Structure" },
      { name: "Exact Match Campaigns" },
      { name: "Subscription Revenue Attribution" },
    ],
    mentions: [
      {
        type: "SoftwareApplication",
        name: "AppSkale",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description:
          "An Apple Search Ads analytics tool that shows keyword-level spend and RevenueCat subscription revenue on the same screen.",
      },
      {
        type: "SoftwareApplication",
        name: "RevenueCat",
        applicationCategory: "BusinessApplication",
        operatingSystem: "iOS, Android, Web",
        description: "A subscription management platform for mobile apps.",
      },
    ],
    keywords: [
      "how many keywords apple search ads",
      "asa keyword count beginners",
      "apple search ads keyword list size",
      "too many keywords apple search ads",
      "asa ad group structure",
      "brand vs category keyword count",
      "apple search ads 15 keywords",
      "when to add keywords asa",
      "exact match keyword limit indie apps",
      "apple search ads campaign structure",
    ],
    hasBody: true,
  },
  {
    slug: "asa-cpi-great-paywall-conversion-terrible",
    title: "Your ASA CPI Looks Great. Your Paywall Conversion Is Terrible.",
    description:
      "Cheap Apple Search Ads installs are not a win if users never convert. Here is how to tell channel failure from paywall failure, and what to fix first.",
    image: {
      src: "/images/blog/asa-cpi-great-paywall-conversion-terrible/cover.png",
      alt: "Diagram showing strong Apple Search Ads CPI collapsing into weak paywall conversion and flat subscription revenue",
      width: 1024,
      height: 682,
    },
    author: { name: "Sam H", url: "https://www.linkedin.com/in/mghtut/" },
    faq: [
      {
        question:
          "Why is my Apple Search Ads CPI good but revenue still flat?",
        answer:
          "CPI only measures how cheaply you bought installs. Revenue stays flat when users bounce before the paywall, skip the trial offer, or fail to convert after trial. That can be a funnel problem, a traffic-quality problem, or both.",
      },
      {
        question:
          "How do I know if Apple Search Ads or my paywall is the problem?",
        answer:
          "Compare organic and paid conversion in the same storefront. If organic converts and paid does not, inspect keyword intent and match expansion. If both convert poorly, fix onboarding and the paywall before scaling ASA.",
      },
      {
        question:
          "What should I track after cost per install in Apple Search Ads?",
        answer:
          "Track install to activation, activation to paywall view, paywall to trial start, trial to paid, and revenue per keyword. Those handoffs show where the funnel breaks after a cheap install.",
      },
      {
        question:
          "Should I pause Apple Search Ads if CPI is low but trials are weak?",
        answer:
          "Not automatically. First check whether users reach the paywall and whether organic traffic converts. Pause clear junk keywords, but fix offer and onboarding issues before killing the whole channel.",
      },
    ],
    about: [
      { name: "Apple Search Ads" },
      { name: "Cost Per Install" },
      { name: "Paywall Conversion" },
      { name: "Subscription Funnel" },
      { name: "Keyword-Level Revenue" },
    ],
    mentions: [
      {
        type: "SoftwareApplication",
        name: "AppSkale",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description:
          "An Apple Search Ads analytics tool that shows keyword-level spend and RevenueCat subscription revenue on the same screen.",
      },
      {
        type: "SoftwareApplication",
        name: "RevenueCat",
        applicationCategory: "BusinessApplication",
        operatingSystem: "iOS, Android, Web",
        description: "A subscription management platform for mobile apps.",
      },
    ],
    keywords: [
      "apple search ads cpi good revenue flat",
      "asa paywall conversion",
      "cheap installs no subscribers",
      "apple search ads funnel leak",
      "cpi vs revenue apple search ads",
      "subscription app paywall asa",
      "organic vs paid conversion ios",
      "apple search ads trial conversion",
      "fix asa or fix paywall",
      "revenue per keyword apple search ads",
    ],
    hasBody: true,
  },
  {
    slug: "apple-search-ads-negative-keywords",
    title: "Apple Search Ads Negative Keywords: The Quiet Budget Saver",
    description:
      "Negative keywords stop Apple Search Ads from spending on searches you never meant to buy. Here is what to block early, and how to harvest more weekly.",
    image: {
      src: "/images/blog/apple-search-ads-negative-keywords/cover.png",
      alt: "Diagram showing Apple Search Ads negative keywords blocking irrelevant search terms while keeping converting queries",
      width: 1024,
      height: 682,
    },
    author: { name: "Sam H", url: "https://www.linkedin.com/in/mghtut/" },
    faq: [
      {
        question: "What are negative keywords in Apple Search Ads?",
        answer:
          "Negative keywords tell Apple not to show your ad for specific searches. They help block irrelevant queries that waste spend, especially in Broad match or Search Match expansion.",
      },
      {
        question:
          "Should beginners add negative keywords to Apple Search Ads?",
        answer:
          "Yes. Start with obvious mismatches like wrong platform, free-only hunters that never convert, or audience modifiers that do not fit your app. Then harvest more from the search terms report weekly.",
      },
      {
        question:
          "When should I add a search term as a negative keyword?",
        answer:
          "Add it when the intent is clearly wrong for your app, or when a query repeatedly spends without meaningful trials or revenue. Avoid blocking after only one or two taps.",
      },
      {
        question:
          "Should I use Exact or Broad negative keywords in ASA?",
        answer:
          "Use Exact negatives when one query is bad but nearby variants may still be useful. Use Broad negatives for clear waste themes like android or free. When unsure, Exact-negative first and widen later.",
      },
    ],
    about: [
      { name: "Apple Search Ads" },
      { name: "Negative Keywords" },
      { name: "Search Terms Report" },
      { name: "Broad Match Discovery" },
      { name: "Subscription Revenue Attribution" },
    ],
    mentions: [
      {
        type: "SoftwareApplication",
        name: "AppSkale",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description:
          "An Apple Search Ads analytics tool that shows keyword-level spend and RevenueCat subscription revenue on the same screen.",
      },
      {
        type: "SoftwareApplication",
        name: "RevenueCat",
        applicationCategory: "BusinessApplication",
        operatingSystem: "iOS, Android, Web",
        description: "A subscription management platform for mobile apps.",
      },
    ],
    keywords: [
      "apple search ads negative keywords",
      "asa negative keywords",
      "negative keywords apple search ads beginners",
      "block search terms apple search ads",
      "apple search ads search terms report",
      "asa budget waste negatives",
      "exact vs broad negative keywords",
      "apple search ads irrelevant queries",
      "negative keyword strategy ASA",
      "apple search ads weekly optimization",
    ],
    hasBody: true,
  },
  {
    slug: "exact-vs-broad-match-apple-search-ads",
    title:
      "Exact Match vs Broad Match in Apple Search Ads: What Beginners Should Use",
    description:
      "Exact match gives beginners clean keyword signal. Broad match expands reach later. Here is which Apple Search Ads match type to use first, and when to switch.",
    image: {
      src: "/images/blog/exact-vs-broad-match-apple-search-ads/cover.png",
      alt: "Diagram comparing Apple Search Ads Exact match keywords to Broad match expansion for beginner campaigns",
      width: 1024,
      height: 682,
    },
    author: { name: "Sam H", url: "https://www.linkedin.com/in/mghtut/" },
    faq: [
      {
        question:
          "Should beginners use Exact or Broad match in Apple Search Ads?",
        answer:
          "Start with Exact match. It keeps learning clean by tying spend to specific search phrases. Add Broad match later in a separate discovery ad group once Exact keywords show which intents convert.",
      },
      {
        question: "What is the difference between Exact and Broad match in ASA?",
        answer:
          "Exact match shows your ad for a keyword and close variants like plurals or misspellings. Broad match lets Apple show your ad for related searches, including looser variations and synonyms, which increases reach but reduces control.",
      },
      {
        question:
          "Is Broad match the same as Search Match in Apple Search Ads?",
        answer:
          "No. Broad match expands around keywords you added. Search Match lets Apple bid on additional terms beyond your keyword list using app metadata and other signals. Beginners should usually turn Search Match off and start with Exact match.",
      },
      {
        question: "When should I turn on Broad match in Apple Search Ads?",
        answer:
          "After Exact brand and long-tail category campaigns have produced clear conversion lessons, attribution is working, and you can review search terms weekly to promote winners into Exact and negative out junk.",
      },
    ],
    about: [
      { name: "Apple Search Ads" },
      { name: "Exact Match Keywords" },
      { name: "Broad Match Keywords" },
      { name: "Keyword Bidding Strategy" },
      { name: "Subscription Revenue Attribution" },
    ],
    mentions: [
      {
        type: "SoftwareApplication",
        name: "AppSkale",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description:
          "An Apple Search Ads analytics tool that shows keyword-level spend and RevenueCat subscription revenue on the same screen.",
      },
      {
        type: "SoftwareApplication",
        name: "RevenueCat",
        applicationCategory: "BusinessApplication",
        operatingSystem: "iOS, Android, Web",
        description: "A subscription management platform for mobile apps.",
      },
    ],
    keywords: [
      "apple search ads exact match",
      "apple search ads broad match",
      "exact vs broad match ASA",
      "apple search ads match types",
      "asa exact match for beginners",
      "when to use broad match apple search ads",
      "search match vs broad match",
      "apple search ads keyword match type",
      "asa beginner keyword setup",
      "exact match apple search ads strategy",
    ],
    hasBody: true,
  },
  {
    slug: "apple-search-ads-vs-facebook-ads-ios-2026",
    title: "Apple Search Ads vs Facebook Ads for iOS Apps in 2026",
    description:
      "Apple Search Ads and Facebook Ads are not interchangeable for iOS apps. Here is when each wins after ATT, and how to choose your first paid channel.",
    image: {
      src: "/images/blog/apple-search-ads-vs-facebook-ads-ios-2026/cover.png",
      alt: "Comparison diagram of Apple Search Ads high-intent App Store search versus Facebook Ads feed discovery for iOS apps",
      width: 1024,
      height: 682,
    },
    author: { name: "Sam H", url: "https://www.linkedin.com/in/mghtut/" },
    faq: [
      {
        question:
          "Should I run Apple Search Ads or Facebook Ads first for my iOS app?",
        answer:
          "If people already search for your category in the App Store and you can track subscription revenue, Apple Search Ads is usually the cleaner first test. Choose Facebook Ads first when search demand is thin and your growth depends on creative-led discovery.",
      },
      {
        question:
          "Is Apple Search Ads cheaper than Facebook Ads for iOS apps?",
        answer:
          "Not always. ASA can be more expensive per install on competitive terms, but high-intent search often converts better. Compare channels on trial and revenue outcomes over a full conversion window, not day-three CPI.",
      },
      {
        question:
          "Why is Apple Search Ads easier to measure than Facebook Ads after ATT?",
        answer:
          "ASA attribution sits inside Apple's ecosystem and can be joined to subscription revenue at the keyword level more cleanly. Meta on iOS relies more on limited ATT opt-ins, SKAdNetwork, and modeled conversions, which often makes paying-user attribution noisier for indie apps.",
      },
      {
        question:
          "Can I run Apple Search Ads and Facebook Ads at the same time?",
        answer:
          "Yes, once you can measure revenue by source and have enough budget for both to produce signal. For a first learning test, run one channel cleanly instead of splitting a small budget across both.",
      },
    ],
    about: [
      { name: "Apple Search Ads" },
      { name: "Facebook Ads" },
      { name: "iOS User Acquisition" },
      { name: "App Tracking Transparency" },
      { name: "Subscription App Marketing" },
    ],
    mentions: [
      {
        type: "SoftwareApplication",
        name: "AppSkale",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description:
          "An Apple Search Ads analytics tool that shows keyword-level spend and RevenueCat subscription revenue on the same screen.",
      },
      {
        type: "SoftwareApplication",
        name: "RevenueCat",
        applicationCategory: "BusinessApplication",
        operatingSystem: "iOS, Android, Web",
        description: "A subscription management platform for mobile apps.",
      },
      {
        type: "SoftwareApplication",
        name: "Meta Ads",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description:
          "Meta's advertising platform for Facebook, Instagram, and related placements.",
      },
    ],
    keywords: [
      "apple search ads vs facebook ads",
      "asa vs meta ads ios",
      "apple search ads vs meta 2026",
      "best paid acquisition channel ios app",
      "facebook ads for subscription apps",
      "apple search ads after ATT",
      "ios user acquisition 2026",
      "asa or facebook ads first",
      "app store search ads vs social ads",
      "indie app paid acquisition",
    ],
    hasBody: true,
  },
  {
    slug: "trial-started-roas-didnt-move",
    title: "Your Trial Started. Your ROAS Didn't Move. Now What?",
    description:
      "Apple Search Ads installs and trials look fine but ROAS stays flat. Here is why subscription revenue lags spend, what to watch during the wait, and when to pause.",
    image: {
      src: "/images/blog/trial-started-roas-didnt-move/cover.png",
      alt: "Timeline diagram showing Apple Search Ads spend happening immediately while subscription revenue from trials arrives days or weeks later",
      width: 1024,
      height: 682,
    },
    author: { name: "Sam H", url: "https://www.linkedin.com/in/mghtut/" },
    faq: [
      {
        question:
          "Why is my Apple Search Ads ROAS zero even though trials are starting?",
        answer:
          "Subscription ROAS often lags because you pay for taps immediately but trial users convert to paid only after their trial ends. Until enough cohorts complete that window, revenue stays near zero while spend accumulates.",
      },
      {
        question:
          "How long should I wait before judging Apple Search Ads ROAS?",
        answer:
          "Wait at least one full trial cycle plus a short buffer before making scale decisions. For a seven-day trial that often means two to three weeks minimum; for a thirty-day trial, six weeks or more.",
      },
      {
        question:
          "Should I pause Apple Search Ads if ROAS is flat after two weeks?",
        answer:
          "Not automatically. If trials are starting and you are still inside the conversion window, waiting is reasonable. Pause keywords with meaningful spend and installs but zero trial starts, or terms that remain clearly unprofitable after a full trial cycle.",
      },
      {
        question:
          "What should I track before ROAS is meaningful for a trial app?",
        answer:
          "Track trial start rate by keyword, brand vs category performance, and spend on terms with zero engagement. These leading indicators help you cut waste without killing keywords that need time to convert.",
      },
    ],
    about: [
      { name: "Apple Search Ads" },
      { name: "Return on Ad Spend" },
      { name: "Free Trial Conversion" },
      { name: "Subscription Revenue Attribution" },
      { name: "Keyword-Level Analytics" },
    ],
    mentions: [
      {
        type: "SoftwareApplication",
        name: "AppSkale",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description:
          "An Apple Search Ads analytics tool that shows keyword-level spend and RevenueCat subscription revenue on the same screen.",
      },
      {
        type: "SoftwareApplication",
        name: "RevenueCat",
        applicationCategory: "BusinessApplication",
        operatingSystem: "iOS, Android, Web",
        description: "A subscription management platform for mobile apps.",
      },
    ],
    keywords: [
      "apple search ads roas flat",
      "trial app apple search ads",
      "asa roas lag subscription",
      "apple search ads trial conversion",
      "when to pause apple search ads",
      "roas zero apple search ads",
      "subscription app asa metrics",
      "trial start rate by keyword",
      "apple search ads revenue delay",
      "revenue per keyword apple search ads",
    ],
    hasBody: true,
  },
  {
    slug: "brand-vs-category-keywords-first-500",
    title:
      "Brand Keywords vs Category Keywords: Where Your First $500 Should Go",
    description:
      "Your first Apple Search Ads budget should defend your brand name first, then test long-tail category keywords. Here is why head terms burn cash before you have revenue data.",
    image: {
      src: "/images/blog/brand-vs-category-keywords-first-500/cover.png",
      alt: "Diagram showing Apple Search Ads budget split between brand defense keywords and long-tail category keywords",
      width: 1024,
      height: 682,
    },
    author: { name: "Sam H", url: "https://www.linkedin.com/in/mghtut/" },
    faq: [
      {
        question:
          "Should I bid on my own app name in Apple Search Ads?",
        answer:
          "Yes. Brand defense is usually the cheapest, highest-intent place to start. Bidding on your app name protects against competitors and captures users who already searched for you specifically.",
      },
      {
        question:
          "What is the difference between brand and category keywords in ASA?",
        answer:
          "Brand keywords are searches for your app by name. Category keywords describe what your app does without naming it, such as 'habit tracker for ADHD' or 'couples budget app'.",
      },
      {
        question:
          "Why avoid head category keywords in Apple Search Ads at first?",
        answer:
          "Short, high-volume category terms like 'notes app' or 'meditation' are expensive, competitive, and often have generic intent. Beginners burn budget on installs that never convert before they have keyword-level revenue data.",
      },
      {
        question:
          "How should I split my first $500 Apple Search Ads budget?",
        answer:
          "A common approach for indie developers is roughly $50–$100 on brand Exact match keywords and $400–$450 on ten to fifteen long-tail category Exact match keywords in one storefront, over four to six weeks.",
      },
    ],
    about: [
      { name: "Apple Search Ads" },
      { name: "Brand Keyword Bidding" },
      { name: "Category Keywords" },
      { name: "Long-Tail Keyword Strategy" },
      { name: "Subscription Revenue Attribution" },
    ],
    mentions: [
      {
        type: "SoftwareApplication",
        name: "AppSkale",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description:
          "An Apple Search Ads analytics tool that shows keyword-level spend and RevenueCat subscription revenue on the same screen.",
      },
      {
        type: "SoftwareApplication",
        name: "RevenueCat",
        applicationCategory: "BusinessApplication",
        operatingSystem: "iOS, Android, Web",
        description: "A subscription management platform for mobile apps.",
      },
    ],
    keywords: [
      "apple search ads brand keywords",
      "category keywords apple search ads",
      "brand vs category keywords ASA",
      "first apple search ads budget",
      "apple search ads $500 budget",
      "long tail keywords apple search ads",
      "head keywords apple search ads trap",
      "brand defense apple search ads",
      "apple search ads keyword strategy beginners",
      "revenue per keyword apple search ads",
    ],
    hasBody: true,
  },
  {
    slug: "search-match-eating-your-budget",
    title: "Search Match Is Eating Your Budget: When to Turn It Off",
    description:
      "Apple Search Ads Search Match is on by default and often burns budget on irrelevant taps. Here is what it does, when to keep it, and what to run instead.",
    image: {
      src: "/images/blog/search-match-eating-your-budget/cover.png",
      alt: "Diagram showing Apple Search Ads Search Match expanding bids beyond chosen keywords into unrelated App Store searches",
      width: 1024,
      height: 681,
    },
    author: { name: "Sam H", url: "https://www.linkedin.com/in/mghtut/" },
    faq: [
      {
        question: "What is Search Match in Apple Search Ads?",
        answer:
          "Search Match is an Apple Search Ads setting that lets Apple bid on App Store search terms beyond the keywords you manually added. Apple uses your app metadata and other signals to match your ad to searches it considers relevant.",
      },
      {
        question: "Should I turn off Search Match in Apple Search Ads?",
        answer:
          "Many indie developers should turn Search Match off during their first learning phase, especially on a budget under about $500. Exact match on a small, intentional keyword list usually produces cleaner signal than broad auto-matching.",
      },
      {
        question: "Why is Search Match spending my Apple Search Ads budget?",
        answer:
          "Search Match expands your campaign to additional search queries Apple selects automatically. That often increases tap volume on terms you did not choose, including broad or low-intent searches that drive installs but little revenue.",
      },
      {
        question: "What should I use instead of Search Match?",
        answer:
          "Start with Exact match ad groups: one for brand defense on your app name, and one for ten to fifteen long-tail category keywords. Add a separate discovery ad group with Search Match later only if you can track revenue per keyword.",
      },
    ],
    about: [
      { name: "Apple Search Ads" },
      { name: "Search Match" },
      { name: "Keyword Bidding Strategy" },
      { name: "Exact Match Campaigns" },
      { name: "Subscription Revenue Attribution" },
    ],
    mentions: [
      {
        type: "SoftwareApplication",
        name: "AppSkale",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description:
          "An Apple Search Ads analytics tool that shows keyword-level spend and RevenueCat subscription revenue on the same screen.",
      },
      {
        type: "SoftwareApplication",
        name: "RevenueCat",
        applicationCategory: "BusinessApplication",
        operatingSystem: "iOS, Android, Web",
        description: "A subscription management platform for mobile apps.",
      },
    ],
    keywords: [
      "apple search ads search match",
      "turn off search match",
      "search match eating budget",
      "apple search ads exact match",
      "asa search match vs exact match",
      "apple search ads irrelevant keywords",
      "search match discovery campaign",
      "apple search ads beginner mistakes",
      "keyword level revenue apple search ads",
      "asa budget waste",
    ],
    hasBody: true,
  },
  {
    slug: "apple-search-ads-for-beginners",
    title: "Apple Search Ads for Beginners: Should You Actually Run Them?",
    description:
      "Apple Search Ads sounds like an easy install shortcut. It is not always the right move. Here is who should run ASA, what it costs, and when to wait.",
    image: {
      src: "/images/blog/apple-search-ads-for-beginners/cover.png",
      alt: "Apple Search Ads beginner guide showing paid App Store search placement and keyword bidding basics",
      width: 1024,
      height: 682,
    },
    author: { name: "Sam H", url: "https://www.linkedin.com/in/mghtut/" },
    faq: [
      {
        question: "Is Apple Search Ads worth it for indie apps?",
        answer:
          "It can be, if your app monetizes, converts installs reasonably well, and you can measure revenue per keyword. It is usually not worth it yet if you have zero paying users, weak ratings, or no revenue tracking set up.",
      },
      {
        question: "How much does Apple Search Ads cost for beginners?",
        answer:
          "Cost per tap often falls roughly in the $0.30–$2.00 range for many subscription app keywords, with cost per install often around $2–$8 in indie categories. A realistic learning budget is about $300–$600 over four to six weeks in one storefront.",
      },
      {
        question: "Should I run Apple Search Ads or focus on ASO first?",
        answer:
          "Do the free ASO basics first: app name, subtitle, keywords field, and screenshots. Apple Search Ads can then seed download velocity and help you learn faster, but ASA works best when your listing converts and you can track revenue after the install.",
      },
      {
        question: "What is the minimum Apple Search Ads budget to learn?",
        answer:
          "Many solo developers need at least a few hundred dollars over four to six weeks to get enough keyword-level signal. Spending below about $10/day often produces too little data to make clear decisions.",
      },
    ],
    about: [
      { name: "Apple Search Ads" },
      { name: "App Store Optimization" },
      { name: "iOS App Marketing" },
      { name: "Subscription Revenue Attribution" },
      { name: "Keyword-Level ROAS" },
    ],
    mentions: [
      {
        type: "SoftwareApplication",
        name: "AppSkale",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description:
          "An Apple Search Ads analytics tool that connects keyword-level spend to RevenueCat subscription revenue.",
      },
      {
        type: "SoftwareApplication",
        name: "RevenueCat",
        applicationCategory: "BusinessApplication",
        operatingSystem: "iOS, Android, Web",
        description: "A subscription management platform for mobile apps.",
      },
      {
        type: "SoftwareApplication",
        name: "App Store Connect",
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Web",
        description:
          "Apple's platform for managing app metadata, pricing, and distribution on the App Store.",
      },
    ],
    keywords: [
      "is apple search ads worth it",
      "apple search ads for beginners",
      "apple search ads cost",
      "should i run apple search ads",
      "apple search ads vs aso",
      "minimum apple search ads budget",
      "apple search ads indie developers",
      "when to start apple search ads",
      "apple search ads cost per install",
      "revenue per keyword apple search ads",
    ],
    hasBody: true,
  },
  {
    slug: "seo-for-apps-beginners-guide",
    title: "SEO for Apps: A Beginner's Guide (It's Actually Called ASO)",
    description:
      "You searched SEO for apps and got web advice. The real term is ASO. Here's how App Store ranking works, why new apps stall, and where Apple Search Ads fits.",
    image: {
      src: "/images/blog/seo-for-apps-beginners-guide/cover.png",
      alt: "Diagram comparing web SEO levers with App Store ASO levers for mobile apps",
      width: 1024,
      height: 682,
    },
    author: { name: "Sam H", url: "https://www.linkedin.com/in/mghtut/" },
    faq: [
      {
        question: "Is SEO for apps the same as ASO?",
        answer:
          "Not exactly. People search 'SEO for apps' when they mean App Store Optimization (ASO): getting your app found in App Store search. Web SEO targets Google rankings for websites. Same broad goal (search visibility), different platforms and levers.",
      },
      {
        question: "What is ASO for iOS apps?",
        answer:
          "ASO (App Store Optimization) is the practice of improving your app's visibility in App Store search. The main levers are app name, subtitle, keywords field, screenshots, ratings, and download velocity.",
      },
      {
        question: "Why do new apps struggle to rank in the App Store?",
        answer:
          "App Store search rewards download velocity. New apps with few installs send a weak ranking signal, which means fewer impressions and fewer organic downloads. Metadata alone rarely breaks this cold-start loop without a way to seed installs.",
      },
      {
        question: "How do Apple Search Ads help with ASO?",
        answer:
          "Apple Search Ads puts your app at the top of App Store search results for specific keywords. Paid installs tied to a search term can help seed download velocity for that term while you learn which keywords actually convert to paying users.",
      },
    ],
    about: [
      { name: "App Store Optimization" },
      { name: "SEO for Apps" },
      { name: "Apple Search Ads" },
      { name: "iOS App Marketing" },
      { name: "Download Velocity" },
    ],
    mentions: [
      {
        type: "SoftwareApplication",
        name: "AppSkale",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description:
          "An Apple Search Ads analytics tool that connects keyword-level spend to RevenueCat subscription revenue.",
      },
      {
        type: "SoftwareApplication",
        name: "RevenueCat",
        applicationCategory: "BusinessApplication",
        operatingSystem: "iOS, Android, Web",
        description: "A subscription management platform for mobile apps.",
      },
      {
        type: "SoftwareApplication",
        name: "App Store Connect",
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Web",
        description:
          "Apple's platform for managing app metadata, pricing, and distribution on the App Store.",
      },
    ],
    keywords: [
      "SEO for apps",
      "ASO for beginners",
      "App Store Optimization guide",
      "SEO vs ASO",
      "how to rank app in App Store",
      "Apple Search Ads for indie devs",
      "App Store download velocity",
      "keyword field iOS ASO",
      "revenue per keyword Apple Search Ads",
      "App Store cold start problem",
    ],
    hasBody: true,
  },
  {
    slug: "how-to-track-apple-search-ads-conversions-complete-2026-guide",
    title:
      "How to Track Apple Search Ads Conversions in 2026 (Revenue Guide)",
    description:
      "Learn how to track Apple Search Ads conversions from install to revenue, fix the keyword profitability blind spot, and connect campaign spend to real subscription ROAS.",
    image: {
      src: "/images/blog/how-to-track-apple-search-ads-conversions-complete-2026-guide/cover.png",
      alt: "AppSkale Apple Search Ads analytics dashboard showing keyword-level revenue and ROAS",
      width: 1024,
      height: 533,
    },
    author: { name: "Sam H", url: "https://www.linkedin.com/in/mghtut/" },
    faq: [
      {
        question:
          "Does Apple Search Ads (ASA) attribution still work without ATT permission?",
        answer:
          "Yes. Unlike Facebook or Google Ads, ASA attribution via the AdServices framework does not require User Tracking Transparency (ATT) consent. Because the attribution happens within Apple's own first-party ecosystem, you can still track keyword-level installs for users who have opted out of tracking, though the payload may contain less granular timestamp data.",
      },
      {
        question:
          "Why can't I see keyword-level revenue in the Apple Search Ads dashboard?",
        answer:
          "The native Apple Search Ads dashboard is built to track top-of-funnel metrics like impressions, taps, and installs. It does not have access to your post-install purchase data. To see ROAS and revenue per keyword, you must use a tool like AppSkale to bridge the gap between Apple's attribution API and your revenue source (like RevenueCat or App Store Connect).",
      },
      {
        question:
          "Can I track Apple Search Ads conversions without a traditional MMP?",
        answer:
          "Yes. While traditional MMPs like AppsFlyer are common, they can be expensive for solo developers. You can use the Apple AdServices API to retrieve an attribution token in your app, send it to your backend, and link it to your purchase events. AppSkale simplifies this process by providing a lightweight way to see these metrics without the complexity of a full-scale MMP.",
      },
      {
        question:
          "How do I know which Apple Search Ads keywords are worth scaling?",
        answer:
          "You should not scale based on Cost Per Acquisition (CPA) alone. A keyword might have a low CPA but a 0% conversion rate to paid subscriptions. The only way to scale effectively is to track Keyword ARPU (Average Revenue Per User). Focus your budget on keywords that drive Trial Starts and Purchases, even if their initial tap-to-install cost is slightly higher.",
      },
    ],
    about: [
      { name: "Apple Search Ads" },
      { name: "Conversion Tracking" },
      { name: "App Store Attribution" },
      { name: "Subscription Revenue Attribution" },
      { name: "Keyword-Level ROAS" },
    ],
    mentions: [
      {
        type: "SoftwareApplication",
        name: "AppSkale",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description:
          "An Apple Search Ads analytics and conversion tracking tool that connects campaign and keyword spend to subscription revenue.",
      },
      {
        type: "SoftwareApplication",
        name: "RevenueCat",
        applicationCategory: "BusinessApplication",
        operatingSystem: "iOS, Android, Web",
        description: "A subscription management platform for mobile apps.",
      },
      {
        type: "SoftwareApplication",
        name: "AppsFlyer",
        applicationCategory: "BusinessApplication",
        operatingSystem: "iOS, Android",
        description:
          "A mobile measurement partner (MMP) for app attribution and analytics.",
      },
    ],
    keywords: [
      "track Apple Search Ads conversions",
      "Apple Search Ads conversion tracking 2026",
      "ASA keyword revenue tracking",
      "Apple Search Ads ROAS by keyword",
      "keyword profitability blind spot",
      "Apple Search Ads attribution without ATT",
      "AdServices framework attribution",
      "Apple Search Ads conversion tracker",
      "keyword level Apple Search Ads analytics",
      "RevenueCat Apple Search Ads integration",
    ],
    hasBody: true,
  },
  {
    slug: "apple-search-ads-roas-by-country",
    title:
      "Your Apple Search Ads ROAS Is Lying to You Until You Split It by Country",
    description:
      "Blended Apple Search Ads ROAS averages wildly different markets into one misleading number. Here's how to split ROAS by country, read the tiers, and use localization to lower CPI and lift ROI.",
    image: {
      src: "/images/blog/apple-search-ads-roas-by-country/cover.png",
      alt: "A single blended Apple Search Ads ROAS figure splitting into separate per-country ROAS values, some profitable and some losing money.",
      width: 1536,
      height: 1024,
    },
    author: { name: "Sam H", url: "https://www.linkedin.com/in/mghtut/" },
    about: [
      { name: "Apple Search Ads" },
      { name: "ROAS by Country" },
      { name: "App Store Localization" },
      { name: "Subscription Revenue Attribution" },
      { name: "International App Growth" },
    ],
    mentions: [
      {
        type: "SoftwareApplication",
        name: "AppSkale",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description:
          "An Apple Search Ads analytics tool that shows ROAS by country and by keyword within each country, tied to RevenueCat subscription revenue.",
      },
      {
        type: "SoftwareApplication",
        name: "RevenueCat",
        applicationCategory: "BusinessApplication",
        operatingSystem: "iOS, Android, Web",
        description: "A subscription management platform for mobile apps.",
      },
    ],
    keywords: [
      "Apple Search Ads ROAS by country",
      "ASA country level ROAS",
      "blended ROAS misleading",
      "Apple Search Ads localization",
      "reduce CPT with localization",
      "App Store LTV by country",
      "cheap install trap",
      "ASA geo bidding strategy",
      "purchasing power parity app pricing",
      "international Apple Search Ads strategy",
    ],
    hasBody: true,
  },
  {
    slug: "apple-search-ads-keyword-audit",
    title:
      "The 30-Day Keyword Audit: Which Keywords to Kill, Keep, and Scale",
    description:
      "A monthly Apple Search Ads keyword audit framework. Sort every keyword into kill, keep, scale, or investigate using spend, organic rank, and revenue per keyword.",
    image: {
      src: "/images/blog/apple-search-ads-keyword-audit/cover.png",
      alt: "A four-quadrant Apple Search Ads keyword audit framework sorting keywords into kill, keep, scale, and investigate based on revenue and install volume.",
      width: 1536,
      height: 1024,
    },
    author: { name: "Sam H", url: "https://www.linkedin.com/in/mghtut/" },
    about: [
      { name: "Apple Search Ads" },
      { name: "Keyword Audit" },
      { name: "App Store Optimization" },
      { name: "ROAS Analysis" },
      { name: "Subscription Revenue Attribution" },
    ],
    mentions: [
      {
        type: "SoftwareApplication",
        name: "AppSkale",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description:
          "An Apple Search Ads analytics tool that puts spend, organic rank, and subscription revenue per keyword on the same screen for fast monthly audits.",
      },
      {
        type: "SoftwareApplication",
        name: "RevenueCat",
        applicationCategory: "BusinessApplication",
        operatingSystem: "iOS, Android, Web",
        description: "A subscription management platform for mobile apps.",
      },
      {
        type: "SoftwareApplication",
        name: "AppTweak",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description: "A third-party App Store keyword rank tracking tool.",
      },
      {
        type: "SoftwareApplication",
        name: "AppFigures",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description:
          "An App Store analytics and keyword rank tracking tool.",
      },
    ],
    keywords: [
      "Apple Search Ads keyword audit",
      "ASA keyword audit framework",
      "which keywords to pause Apple Search Ads",
      "scale Apple Search Ads keywords",
      "keyword level ROAS audit",
      "Apple Search Ads optimization checklist",
      "revenue per keyword ASA",
      "ASA budget reallocation",
      "monthly Apple Search Ads review",
      "kill keep scale keywords",
    ],
    hasBody: true,
  },
  {
    slug: "long-tail-keywords-main-keyword-rank",
    title:
      "How long-tail keywords push your main keyword's App Store rank",
    description:
      "Your head keyword is capped and bidding higher does nothing. Here's how long-tail install velocity feeds it through Apple's token system — and the mistake that wastes the whole play.",
    image: {
      src: "/images/blog/long-tail-keywords-main-keyword-rank/cover.png",
      alt: "Diagram showing five long-tail App Store search variants — 'ai note taker for students', 'ai note taker for meetings', 'ai voice note taker', 'best ai note taker', 'ai note taker app' — flowing into the head keyword 'ai note taker' via shared tokens.",
      width: 1024,
      height: 576,
    },
    author: { name: "Sam H", url: "https://www.linkedin.com/in/mghtut/" },
    about: [
      { name: "App Store Optimization" },
      { name: "Apple Search Ads" },
      { name: "Long-Tail Keyword Strategy" },
      { name: "App Store Ranking Algorithm" },
      { name: "Keyword Token Relevance" },
    ],
    mentions: [
      {
        type: "SoftwareApplication",
        name: "AppSkale",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description:
          "An Apple Search Ads analytics tool that ties keyword bids to subscription revenue, surfacing which long-tail terms actually drive paying users.",
      },
    ],
    keywords: [
      "long-tail keywords App Store",
      "App Store keyword token relevance",
      "Apple Search Ads long-tail strategy",
      "head keyword ranking ceiling",
      "App Store install velocity",
      "ASA keyword popularity floor",
      "ASA conversion rate ranking factor",
      "long-tail keyword cluster ASO",
      "App Store ranking algorithm 2026",
      "keyword cannibalization App Store",
    ],
    hasBody: true,
  },
  {
    slug: "appsflyer-alternative-indie-devs",
    title:
      "AppsFlyer Alternative for Indie Devs: See which keywords actually sell",
    description:
      "AppsFlyer alternative for indie devs using Apple Search Ads and RevenueCat. See which keywords actually drive subscriptions, ROAS, and profit.",
    image: {
      src: "/images/blog/appsflyer-alternative-indie-devs/appsflyer-alternative-indie-devs.png",
      alt: "AppSkale Apple Search Ads analytics dashboard",
      width: 2010,
      height: 1466,
    },
    author: { name: "Sam H", url: "https://www.linkedin.com/in/mghtut/" },
    faq: [
      {
        question: "Is there a budget-friendly AppsFlyer alternative?",
        answer:
          "Yes, AppSkale is designed for indie developers who need keyword-level revenue attribution without the enterprise price tag of AppsFlyer.",
      },
      {
        question: "Do I need an SDK for AppSkale like I do for AppsFlyer?",
        answer:
          "No. Unlike enterprise MMPs that require complex SDK integrations, AppSkale connects directly to Apple Search Ads and RevenueCat to track attribution server-to-server.",
      },
    ],
    hasBody: true,
  },
  {
    slug: "how-to-scale-your-app-with-custom-product-pages",
    title:
      "How to Scale Your App with Custom Product Pages (The Right Way)",
    description:
      "Learn how Custom Product Pages improve Apple Search Ads relevance, lower CPI, and help scale profitable keywords based on LTV, not just installs.",
    image: {
      src: "/images/blog/how-to-scale-your-app-with-custom-product-pages/how-to-scale-your-app-with-custom-product-pages.png",
      alt: "Apple Search Ads Analytics",
      width: 2101,
      height: 1061,
    },
    author: { name: "Sam H", url: "https://www.linkedin.com/in/mghtut/" },
    steps: [
      {
        name: "Find What Actually Sells",
        text: "Identify which keywords convert into paying users using revenue data from AppSkale and RevenueCat.",
      },
      {
        name: "Build CPPs Around Proven Keywords",
        text: "Create Custom Product Pages that mirror the exact user intent behind your winning keywords.",
      },
      {
        name: "Lower Costs via Relevance",
        text: "Improve your tap-to-install conversion to increase your relevance score and lower your effective cost per tap.",
      },
      {
        name: "Turn LTV Into a Scaling Switch",
        text: "Compare keyword-level LTV to CPI and scale spend aggressively on profitable keywords.",
      },
    ],
    hasBody: true,
  },
  {
    slug: "how-to-calculate-apple-search-ads-roas-with-revenuecat",
    title:
      "How to Calculate Apple Search Ads ROAS with RevenueCat (And Why Most Developers Get It Wrong)",
    description:
      "Learn how to calculate Apple Search Ads ROAS using RevenueCat, measure renewal-driven profitability, and avoid misleading campaign-level averages.",
    image: {
      src: "/images/blog/how-to-calculate-apple-search-ads-roas-with-revenuecat/how-to-calculate-apple-search-ads-roas-with-revenuecat.png",
      alt: "RevenueCat Demo",
      width: 2438,
      height: 1142,
    },
    author: { name: "Sam H", url: "https://www.linkedin.com/in/mghtut/" },
    steps: [
      {
        name: "Pull your spend data from Apple Search Ads",
        text: "Log into your Apple Search Ads dashboard and export a campaign report with total spend by campaign, date range, and ad group.",
      },
      {
        name: "Pull revenue attribution from RevenueCat",
        text: "Once attribution is set up, filter your RevenueCat Revenue chart by your Apple Search Ads campaign using the same date range as your spend export.",
      },
      {
        name: "Apply the ROAS formula",
        text: "Divide revenue from the campaign by spend on the campaign. Use cohort data, not total revenue, to avoid mixing in renewals from older users.",
      },
      {
        name: "Repeat for each time window",
        text: "Calculate Day-7, Day-30, and Day-90 ROAS separately to account for trial conversions and renewal revenue stacking over time.",
      },
      {
        name: "Automate with AppSkale",
        text: "Use AppSkale to connect Apple Search Ads spend data directly to RevenueCat revenue in real-time, eliminating manual exports and spreadsheet work.",
      },
    ],
    hasBody: true,
  },
  {
    slug: "adapty-vs-appskale",
    title:
      "Adapty vs AppSkale: Which Apple Search Ads Attribution Tool Is Right for You?",
    description:
      "Adapty vs AppSkale: learn which tool fits Apple Search Ads attribution, RevenueCat users, subscription analytics, and keyword-level ROAS tracking.",
    image: {
      src: "/images/blog/adapty-vs-appskale/adapty-vs-appskale.png",
      alt: "Adapty vs AppSkale Comparison",
      width: 3072,
      height: 2048,
    },
    author: { name: "Sam H", url: "https://www.linkedin.com/in/mghtut/" },
    hasBody: true,
  },
  {
    slug: "how-to-launch-an-ios-app-in-2026",
    title: "How to Launch an iOS App in 2026: A Step-by-Step Playbook",
    description:
      "A practical iOS app launch playbook for 2026: how to use the App Store honeymoon window, lifetime deals, and keyword-level revenue data to get traction without a big budget.",
    image: {
      src: "/images/blog/how-to-launch-an-ios-app-in-2026/dashboard.png",
      alt: "Apple Search Ads keyword attribution dashboard showing ROAS and revenue by keyword for an iOS app.",
      width: 2880,
      height: 1500,
    },
    author: { name: "Sam H", url: "https://www.linkedin.com/in/mghtut/" },
    about: [
      { name: "iOS App Launch" },
      { name: "Apple Search Ads" },
      { name: "App Store Optimization" },
      { name: "Subscription Revenue Attribution" },
      { name: "RevenueCat" },
    ],
    mentions: [
      {
        type: "SoftwareApplication",
        name: "AppSkale",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description:
          "An Apple Search Ads analytics tool for RevenueCat users focused on keyword-level ROAS and subscription revenue attribution.",
      },
      {
        type: "SoftwareApplication",
        name: "RevenueCat",
        applicationCategory: "BusinessApplication",
        operatingSystem: "iOS, Android, Web",
        description: "A subscription management platform for mobile apps.",
      },
      { type: "WebSite", name: "iGeeksBlog", url: "https://www.igeeksblog.com" },
      { type: "WebSite", name: "AppSliced", url: "https://www.appsliced.co" },
      { type: "WebSite", name: "9to5Toys", url: "https://9to5toys.com" },
      { type: "WebSite", name: "ProductHunt", url: "https://www.producthunt.com" },
    ],
    keywords: [
      "how to launch an iOS app",
      "iOS app launch strategy 2026",
      "App Store honeymoon period",
      "Apple Search Ads for indie developers",
      "keyword-level ROAS",
      "RevenueCat attribution",
      "App Store lifetime deal",
      "iOS app marketing",
      "subscription revenue attribution",
      "App Store algorithm",
    ],
    hasBody: true,
  },
  {
    slug: "how-to-improve-your-app-store-keyword-rankings-in-2026",
    title: "How to Improve Your App Store Keyword Rankings in 2026",
    description:
      "Learn what actually moves App Store keyword rankings — from cross-localization and screenshot captions to Apple Search Ads as a long-term ASO strategy.",
    image: {
      src: "/images/blog/how-to-improve-your-app-store-keyword-rankings-in-2026/cross-localization.png",
      alt: "Diagram of App Store cross-localization showing how 10 locales contribute keywords to the US App Store ranking.",
      width: 2832,
      height: 1656,
    },
    author: { name: "Sam H", url: "https://www.linkedin.com/in/mghtut/" },
    about: [
      { name: "App Store Optimization" },
      { name: "App Store Keyword Rankings" },
      { name: "Apple Search Ads" },
      { name: "ASO Strategy" },
      { name: "Cross-Localization" },
    ],
    mentions: [
      {
        type: "SoftwareApplication",
        name: "AppSkale",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description:
          "An Apple Search Ads analytics tool that shows which keywords drive real subscription revenue, not just installs.",
      },
      {
        type: "SoftwareApplication",
        name: "App Store Connect",
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Web",
        description:
          "Apple's platform for managing app metadata, pricing, and distribution on the App Store.",
      },
    ],
    keywords: [
      "how to improve App Store keyword rankings",
      "App Store keyword ranking factors 2026",
      "ASO cross-localization",
      "App Store screenshot captions SEO",
      "Apple Search Ads organic ranking",
      "App Store optimization strategy",
      "improve app store rankings",
      "ASO keyword strategy",
      "Apple Search Ads download velocity",
      "Custom Product Pages ASO",
    ],
    hasBody: true,
  },
  {
    slug: "does-apple-search-ads-spend-actually-affect-your-organic-app-store-ranking",
    title:
      "Does Apple Search Ads spend actually affect your organic App Store ranking?",
    description:
      "Apple Search Ads spend can pull organic rank up, leave it flat, or release it once you stop bidding. Here's the three patterns and how to spot yours.",
    image: {
      src: "/images/blog/does-apple-search-ads-spend-actually-affect-your-organic-app-store-ranking/spend-vs-rank.png",
      alt: 'AppSkale dashboard showing Apple Search Ads spend versus organic App Store ranking for the keyword "voice recorder" over 30 days. Spend ramps from $0 to $40 per day while organic rank improves from #6 to #2.',
      width: 2391,
      height: 1434,
    },
    author: { name: "Sam H", url: "https://www.linkedin.com/in/mghtut/" },
    about: [
      { name: "Apple Search Ads" },
      { name: "App Store Optimization" },
      { name: "Organic App Store Ranking" },
      { name: "ASA Keyword Strategy" },
      { name: "Brand Keyword Bidding" },
    ],
    mentions: [
      {
        type: "SoftwareApplication",
        name: "AppSkale",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description:
          "An Apple Search Ads analytics tool that shows paid spend and organic ranking on the same chart, plus keyword-level subscription revenue.",
      },
      {
        type: "SoftwareApplication",
        name: "AppTweak",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description: "A third-party App Store keyword rank tracking tool.",
      },
      {
        type: "SoftwareApplication",
        name: "AppFigures",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description:
          "An App Store analytics and keyword rank tracking tool.",
      },
    ],
    keywords: [
      "does Apple Search Ads affect organic ranking",
      "Apple Search Ads spend vs rank",
      "ASA organic ranking impact",
      "Apple Search Ads keyword strategy",
      "brand keyword bidding ASA",
      "Apple Search Ads install velocity",
      "ASA paid spend organic rank correlation",
      "App Store ranking from paid ads",
      "Apple Search Ads ROAS",
      "ASA brand arbitrage",
    ],
    hasBody: true,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

/** Posts shown per page on the blog index (two-column grid). */
export const BLOG_POSTS_PER_PAGE = 8;

export function getBlogPageCount(): number {
  return Math.max(1, Math.ceil(BLOG_POSTS.length / BLOG_POSTS_PER_PAGE));
}

export function getPostsForPage(page: number): BlogPost[] {
  const totalPages = getBlogPageCount();
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * BLOG_POSTS_PER_PAGE;
  return BLOG_POSTS.slice(start, start + BLOG_POSTS_PER_PAGE);
}

export function getBlogPageHref(page: number): string {
  return page <= 1 ? "/blog" : `/blog/page/${page}`;
}

/**
 * Return the chronologically adjacent posts for a given slug.
 * BLOG_POSTS is ordered newest → oldest, so the newer post sits at index - 1
 * and the older post sits at index + 1.
 */
export function getAdjacentPosts(slug: string): {
  newer: BlogPost | null;
  older: BlogPost | null;
} {
  const index = BLOG_POSTS.findIndex((p) => p.slug === slug);
  if (index === -1) return { newer: null, older: null };
  return {
    newer: index > 0 ? BLOG_POSTS[index - 1] : null,
    older: index < BLOG_POSTS.length - 1 ? BLOG_POSTS[index + 1] : null,
  };
}
