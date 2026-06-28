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
