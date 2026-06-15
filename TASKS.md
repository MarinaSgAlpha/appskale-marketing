# AppSkale Marketing — Framer → Next.js Migration Tasks

## 0. Goal

We are **recreating** the existing Framer-published site at `https://www.appskale.ai/` in this Next.js 16 (App Router) project. This is a migration, not a redesign.

**Fidelity targets**

- **Appearance**: visually close to the Framer site — same overall layout, sections, ordering, typography, color tokens, gradient backgrounds, radial glow blobs, card styles, and shadows. Pixel-perfect is *not* a goal; "looks like the same site" is.
- **Content**: same copy, headings, body text, testimonial, FAQ items, form fields, footer text, and JSON-LD structured data.
- **Links**: same outbound URLs (signup, login, blog, terms, etc.).
- **SEO / tracking**: keep current meta tags, OG/Twitter cards, canonical, sitemap, robots, JSON-LD, and analytics pixels.

**Routing change vs. Framer**

The Framer site is single-page with anchor links. In Next.js we will split out:

- `/` — Home (hero, features, testimonials, how it works, FAQ, footer CTA)
- `/pricing` — Pricing / comparison table section (the "Knowing ROAS is Your Unfair Advantage" block)
- `/contact` — Contact form + supporting copy
- `/terms` — Terms & Conditions (placeholder, currently linked in footer)
- `/llms.txt` — plain text LLM file (currently linked in footer)

Existing routes already linked from the Framer nav that we will scaffold as empty pages now and fill in later:

- `/blog`
- `/apple-search-ads-attribution-setup-guide`

Nav anchor links (`#hero`, `#faq`, `#how`, `#testimonials`) stay as in-page anchors on `/`. Old `#comparison` and `#contact` anchors should redirect/route to `/pricing` and `/contact` respectively.

---

## 1. Reference / source of truth

- Live site: https://www.appskale.ai/
- HTML dump shared in chat (covers full home page, contains all copy, image URLs, color tokens, fonts, JSON-LD)
- Screenshots from the user (to be shared) — desktop + mobile, per section, for visual reference
- Framer asset URLs (we will mirror these locally, see §6)

If anything is ambiguous between this doc and the live site, **the live site wins**. Re-check before implementing.

---

## 2. Design system

### 2.1 Color tokens (extracted from Framer CSS variables)

Define as CSS variables in `globals.css` and expose via Tailwind theme.

| Name              | Value         | Use                                  |
| ----------------- | ------------- | ------------------------------------ |
| `--purple-50`     | `#fbf5ff`     | Page bg accent                       |
| `--purple-100`    | `#f7f0fa`     | Section bg (footer, contact)         |
| `--purple-200`    | `#ecd8f3`     | Radial glow                          |
| `--purple-300`    | `#b49cc5`     | Subtle borders / muted text          |
| `--purple-400`    | `#9f80da`     | Accent / tag text                    |
| `--purple-500`    | `#8765d7`     | Primary button gradient stop         |
| `--purple-600`    | `#7d5f92`     | Primary purple                       |
| `--purple-700`    | `#69527a`     |                                      |
| `--purple-800`    | `#573e69`     | Body text dark / headings            |
| `--purple-900`    | `#483953`     | Heading text                         |
| `--purple-950`    | `#271f36`     | Dark section bg (pricing comparison) |
| `--pink-300`      | `#da9ef0`     | Gradient stop                        |
| `--blue-300`      | `#cccdff`     | Gradient stop / radial glow          |
| `--indigo-400`    | `#999bff`     | Primary button gradient stop         |
| `--white`         | `#ffffff`     | Card bg / glass                      |
| `--glass-white`   | `#ffffff80`   | Backdrop-blur cards                  |

Gradients to reproduce:

- **Light card gradient** (hero image frame, footer CTA card): `linear-gradient(140deg, #cccdffb3 4%, #ebcbf7b3 60%, #a68ce1b3 103%)`
- **Primary CTA button**: `linear-gradient(140deg, #999bff 0%, #8765d7 52%, #da9ef0 100%)`
- **Secondary CTA**: `linear-gradient(180deg, #aa90e1 0%, #9c7dd8 100%)`
- **Dark section mask**: `linear-gradient(#fff 0%, #f7f0fa 100%)` and its inverse

### 2.2 Typography

- **Headings (display)**: Inter Display, weights 500/600/700, italic 500/700
- **Body / UI**: Satoshi (weights 400/500/700, italics 400/500/700) — fallback Inter
- **Mono accents**: Fragment Mono 400 (rare — used in tags?)
- **Anti-aliasing**: `-webkit-font-smoothing: antialiased`

Use `next/font` with `display: 'swap'` for Inter and Inter Display. Satoshi will need to be self-hosted via a `@font-face` block (Fontshare licensing) or replaced with a near-equivalent if licensing is an issue — confirm with user.

Type scale (from CSS):

- H1 hero: 64–80px / 1.1 / -0.03em / 500 (Inter Display)
- H2 section: 52px desktop, 48px tablet, 25px mobile / 1.0 / -0.02em / 500 (Satoshi)
- H2 secondary: 36–40px (Satoshi)
- H3 card: 17–18px / 1.2 / -0.02em / 500 (Satoshi)
- Body: 16px / 1.4 / -0.01em / 400 (Satoshi), `text-color` `#573e69cc`
- Small body: 14–15px / 1.4 / 400
- Tag/eyebrow: 12px / 1.5 / 700 / uppercase, color `--purple-400`

### 2.3 Reusable primitives

Build these once, then use across the site:

- `<Container>` — max-w 1200px, horizontal padding (100px desktop / 56px tablet / 24px mobile)
- `<Section>` — vertical padding (100px / 56px / 48px), optional bg variants
- `<Eyebrow>` — small pill tag with purple text
- `<Button>` variants: `primary` (gradient), `secondary` (glass), `tertiary`
- `<Card>` — glass card with 2px white border, soft shadow, 12–28px radius
- `<RadialGlow>` — positioned blurred radial bg blob (lots of these on the site)
- `<Nav>` — sticky/fixed top nav with backdrop-blur
- `<Footer>` — bottom CTA card + footer row

---

## 3. Page-by-page tasks

### 3.1 Global

- [ ] Set up `src/app/layout.tsx`:
  - HTML lang `en-GB`, dir `ltr`
  - Body bg `#ffffff`
  - Inject Google Analytics (`G-NF6187TK8K`), Google Ads (`AW-705969986`), Meta Pixel (`26339358755677240`), Ahrefs (`kspd1LOLreVfj9RlGsVgGA`), Contentsquare (`fde109d67ea15`) — use `next/script` with appropriate strategies
  - Add `<Nav>` and `<Footer>` (Footer renders on every page; Nav too)
- [ ] Configure `metadata` API in `layout.tsx` for defaults:
  - Title template: `%s | Appskale`
  - Default description: `Stop guessing ROAS. AppSkale provides Apple Search Ads analytics and keyword LTV for RevenueCat users. Track real ROAS by country.`
  - OG image: `/og-image.png` (download from `framerusercontent.com/images/6Qj0OVsWxZnzhbGTnoLBhTv6PI4.png`)
  - Twitter card: `summary_large_image`
  - Favicon: download from `framerusercontent.com/images/6H3kMP7S4D1x8PjLqVvXMbNmjs.png` → `src/app/icon.png` (and delete the default `src/app/favicon.ico`)
  - Canonical: `https://www.appskale.ai/`
- [ ] Inject JSON-LD `SoftwareApplication` structured data (see HTML dump) — pricing array `$0 / $49 / $129`, author `Sam H`, etc. Render via `<script type="application/ld+json">` in `layout.tsx` head.
- [ ] Build `<Nav>` component (sticky, top, backdrop-blur):
  - Logo "AppSkale.AI" linking to `/`
  - Links: Home (`/`), Blog (`/blog`), Setup Guide (`/apple-search-ads-attribution-setup-guide`), FAQ (`/#faq`), Pricing (`/pricing`), Contact (`/contact`)
  - Right side: Login button → `https://app.appskale.ai/login`, secondary icon button → `/contact`
  - Mobile: hamburger / compact variant
- [ ] Build `<Footer>` component:
  - Top: gradient CTA card with H2 "Ready to scale profitably", subtitle, "Get Started Free" button → `https://app.appskale.ai/signup`
  - Bottom row: Logo "AppSkale.AI", tagline "Apple Search Ads attribution and ROAS tracking for iOS apps", links to `/terms` and `/llms.txt`, copyright `© 2025. All rights reserved.`
- [ ] `sitemap.ts` listing all routes
- [ ] `robots.ts` (allow all, reference sitemap)

### 3.2 Home (`/`)

- [ ] **Hero section** (`id="hero"`)
  - H1: `Find out which keywords actually sell in Apple Search Ads`
  - Subtitle: `The Apple Search Ads analytics platform to track conversions and ROAS. Stop wasting money on keywords that don't convert. AppSkale provides keyword-level LTV and revenue data, so you can see exactly which campaigns drive real subscriptions—not just installs.`
  - CTAs: `See How It Works` (secondary, → `/#how`), `Get Started Free` (primary, → `https://app.appskale.ai/signup`)
  - Trust tags: `Quick setup`, `GDPR compliant`, `ISO27001`
  - Hero image: dashboard screenshot (asset `hero-dashboard.png`, originally `FtTRdAmqFIEx37w6hlMKk7bALQ.png`)
  - Three radial glow blobs in background
- [ ] **Feature 2 — country-level keyword performance**
  - Eyebrow: `Real-Time Conversion Tracking`
  - H2: `Your best keyword in Canada might be your worst in the US.`
  - Body: full paragraph from HTML dump
  - Image: `1x7JDluHhQSuZCDa5FX4o0IaQLo.png` → `feature-countries.png`
  - Stat overlay tag on image: `307% ROI vs 56% ROI` + caption `Same app, different countries.`
  - CTA: `Get Started Free`
- [ ] **Feature 3 — LTV / RevenueCat**
  - Eyebrow: `REVENUECAT + APPLE SEARCH ADS`
  - H2: `Stop calculating LTV in spreadsheets`
  - Body: full paragraph from HTML dump (starts "Most app developers export…")
  - Image: `2vx0bVQQls7WqxfoXdWVH6dlxYM.png` → `feature-ltv.png`
  - Overlay caption: `LTV: By keyword, by country, by cohort`
  - CTA: `Get Started Free`
- [ ] **Testimonials section** (`id="testimonials"`)
  - Eyebrow: `testimonials`
  - H2: `What clients are saying`
  - Single testimonial:
    - Quote: `I was one of the early adapters of Appskale. The set up was time consuming and tricky but I needed that to work because I needed to optimize my budget and my ads campaigns. At the beginning, I encountered some bugs and I reported them but they addressed those pretty quickly. Now I am able to see which keywords are working and which aren't. So it is pretty useful for us.`
    - Author: `Mike, CEO of RapidNova.co`
    - Avatar: `anEsemJsXfGAaJahIMc5U3oME.webp` → `mike-rapidnova.webp`
    - 5 stars
  - Build as a slider component shape even if only one testimonial for now (matches Framer structure, easy to extend)
- [ ] **How It Works** (`id="how"`)
  - Eyebrow: `How it works`
  - H2: `Apple Search Ads → RevenueCat → Keyword-level ROAS`
  - 3 step cards:
    1. **Sign up** — `Create your account and connect with Google - get instant access to your analytics dashboard.`
    2. **Connect your data** — `Link Apple Search Ads and integrate RevenueCat. We guide you through the technical setup so you can start tracking revenue attribution.`
    3. **Discover & Scale** — `See which keywords drive paying users, not just installs. Find your 10 winning keywords and scale with confidence.`
- [ ] **FAQ** (`id="faq"`)
  - Eyebrow: `frequently asked questions`
  - H2: `Common questions answered`
  - Items (accordion, first open by default):
    1. **How secure is AppSkale?** — full answer from HTML
    2. **Why does AppSkale use AI?** — full answer from HTML
    3. **How quickly can I see results?** — full answer
    4. **Do you offer customer support?** — full answer
    5. **Is there a free trial available?** — full answer

### 3.3 Pricing (`/pricing`)

Migrate the dark-background "Knowing ROAS is Your Unfair Advantage" section into its own page.

- [ ] Page metadata: title `Pricing | Appskale`
- [ ] Eyebrow: `Knowing ROAS is Your Unfair Advantage`
- [ ] H2: `STOP WASTING MONEY ON BAD KEYWORDS`
- [ ] Subtitle: `While your competitors guess, you'll know exactly which keywords are profitable`
- [ ] Three-column comparison table (Free / **Pro** highlighted / Enterprise) with rows:
  - Price: `$0` / `$129` / `Contact us`
  - Features: `LTV & Transaction Data` / `Keyword Level ROAS` / `Everything +`
  - Apps: `1 App` / `3 Apps` / `Unlimited Apps`
  - Ad spend: `Up to $2k/month ad spend` / `Up to $15k/month` / `$15k+/month ad spend`
  - Setup: `Self-service` / `Self-service` / `White-glove setup`
  - Support: `Email Support` / `Priority Email Support` / `Dedicated Support`
- [ ] Footer CTAs: `Signup Free` → `/signup` (or signup URL), `Start For Free` → `https://app.appskale.ai/signup`, `Contact Sales` → `/contact`
- [ ] Trust tags row under Pro column: `GDPR compliant`, `ISO27001`
- [ ] Keep mobile layout (rows stack with header sticky)

### 3.4 Contact (`/contact`)

- [ ] Page metadata: title `Contact | Appskale`
- [ ] H2: `Contact Us`
- [ ] Body: `Have questions about Apple Search Ads Analytics? Need help setting up your dashboard? We're here to help. Email us at support@appskale.ai and we'll get back to you within 24 hours.`
- [ ] Form (React Server Action or `/api/contact` route):
  - Fields: `Name*`, `Surname*`, `Business Email*`, `Telephone`, `Company*`, `Message`
  - Newsletter checkbox with copy: `You agree to our privacy policy.` (link to `/privacy`)
  - Honeypot fields (`website`, `company`, `message`, `subject`, `title`, `description`, `feedback`, `notes`, `details`, `remarks`, `comments`) matching Framer's anti-bot setup
  - Submit button: gradient `Submit`
  - On submit: send email to `support@appskale.ai` (decide transport with user — Resend / SendGrid / SMTP)
- [ ] Trust tags row: `Quick setup`, `GDPR compliant`, `ISO27001`

### 3.5 Stubs (scaffold now, content later)

- [ ] `/blog` — empty page, "Coming soon" or list scaffold
- [ ] `/apple-search-ads-attribution-setup-guide` — empty page, "Coming soon"
- [ ] `/terms` — placeholder
- [ ] `/llms.txt` — serve plain text (use a `route.ts` handler returning `text/plain`)

---

## 4. Components inventory

To build (in roughly this order):

1. `Container`, `Section`
2. `Button` (primary / secondary / tertiary, with `as="a"` support)
3. `Eyebrow` (tag pill)
4. `Card` (glass white card with border + shadow + radius variants)
5. `RadialGlow` (positioned blurred blob)
6. `Nav` + `MobileNav`
7. `Footer` (with top CTA card)
8. `Hero`
9. `FeatureRow` (image left / text right, alternating)
10. `TestimonialSlider`
11. `HowItWorksStep`
12. `FAQAccordion` (using `<details>` for progressive enhancement, or a Radix Accordion if added)
13. `PricingTable`
14. `ContactForm`

---

## 5. Assets — where things live

### 5.1 Folder convention

| Asset type | Path | Why |
| --- | --- | --- |
| Marketing images shown on pages (hero, features, testimonial avatar, etc.) | `public/images/...` | Served as static files at `/images/...` and consumable by `next/image`. |
| Favicon | `src/app/icon.png` (or `icon.svg`) | App Router file-system convention — Next.js auto-wires the `<link rel="icon">`. Replaces the default `src/app/favicon.ico`. |
| Apple touch icon | `src/app/apple-icon.png` | Same convention, generates `<link rel="apple-touch-icon">`. |
| Default OG / social share image (1200×630) | `src/app/opengraph-image.png` | App Router convention — auto-generates OG meta tags for `/`. Per-route variants can live in each route folder. |
| Twitter card image (optional, otherwise reuses OG) | `src/app/twitter-image.png` | Same idea. |
| Logo (rocket mark + wordmark) | `public/logo.svg` + a React component if we want inline | SVG so it scales. |
| Self-hosted fonts (Satoshi, Inter Display) | `public/fonts/...` referenced from a `@font-face` block in `globals.css` | Standard pattern; works with `next/font/local`. |
| Reference screenshots of the live site (not used in the app, only for visual reference during dev) | `docs/reference/screenshots/` | Committed to the repo so the AI agent and other devs can see what each section should look like. Not served. |

### 5.2 Files to source from Framer

Original Framer URL → target path:

- ✅ Hero dashboard screenshot: provided by user → `public/images/hero-dashboard.webp`
- ✅ Feature countries (spreadsheet stat image): provided by user → `public/images/feature-countries.webp`
- ✅ Feature LTV (analytics image): provided by user → `public/images/feature-ltv.webp`
- [ ] Favicon: `6H3kMP7S4D1x8PjLqVvXMbNmjs.png` → `src/app/icon.png` (delete `src/app/favicon.ico` once added)
- [ ] OG image: `6Qj0OVsWxZnzhbGTnoLBhTv6PI4.png` → `src/app/opengraph-image.png`
- [ ] Testimonial brand mark (RapidNova "M" icon — appears as the avatar in the testimonial card): `anEsemJsXfGAaJahIMc5U3oME.webp` → `public/images/testimonials/rapidnova-mark.webp`
- [ ] Logo: extract the rocket+wordmark from the live site (SVG ideally) → `public/logo.svg`
- [ ] Satoshi font files: `public/fonts/Satoshi-*.woff2` — confirm licensing with user (Fontshare allows self-hosting)

Use `next/image` for everything in `public/images/`. Favicon / OG / Twitter images are served as-is by the App Router convention.

### 5.3 Reference screenshots already in repo

Live-site screenshots are saved in `docs/reference/screenshots/`:

| File | Section it represents |
| --- | --- |
| `01-hero-full.png` | Hero + dashboard image |
| `02-hero-dashboard-zoom.png` | Closer view of the dashboard frame |
| `03-feature-countries.png` | "Your best keyword in Canada…" feature row |
| `04-feature-ltv.png` | "Stop calculating LTV…" feature row |
| `05-pricing-top.png` | Pricing — header + first rows of comparison table |
| `06-pricing-bottom.png` | Pricing — bottom rows + CTAs |
| `07-testimonials.png` | Testimonial card (Mike, RapidNova) |
| `08-how-it-works.png` | 3 steps |
| `09-contact-top.png` | Contact form — top half |
| `10-contact-bottom.png` | Contact form — bottom half + Submit |
| `11-footer-cta.png` | "Ready to scale profitably" CTA card + footer |

---

## 6. Tracking / analytics to preserve

Add via `next/script` in `layout.tsx` (or a dedicated `<Analytics>` component):

- [ ] Google Analytics 4: `G-NF6187TK8K`
- [ ] Google Ads: `AW-705969986`
- [ ] Meta Pixel: `26339358755677240` (with noscript fallback `<img>` if user wants it)
- [ ] Ahrefs Analytics: `kspd1LOLreVfj9RlGsVgGA`
- [ ] Contentsquare: `fde109d67ea15`

Strategy: `afterInteractive` for GA/Ads/Meta, `lazyOnload` for Ahrefs/Contentsquare. Confirm consent requirements (GDPR banner?) with user — flag for follow-up.

---

## 7. Animations / motion

The Framer site uses subtle entrance animations (fade + 10px translateY + slight blur on H1 chars). Re-creating exact Framer behaviour is out of scope. Use **Framer Motion** (or CSS `@starting-style`/view-transitions) for:

- Hero text + CTA fade-in on mount
- Section content fade-up on intersection (`viewport={{ once: true }}`)
- Card hover scale on CTAs

Keep `prefers-reduced-motion` in mind.

---

## 8. Non-goals (explicitly do NOT migrate)

- Framer runtime scripts, `data-framer-*` attributes, Framer cursor system, Framer search index
- Pixel-exact recreation of every Framer SVG/gradient layer
- Multi-locale (`en-GB` only — same as current)
- A/B variant infra

---

## 9. Open questions for the user

1. **Screenshots** — Please share desktop + mobile screenshots of the live site per section (hero, feature 2, feature 3, pricing, testimonial, how it works, FAQ, contact, footer). Helpful but not blocking.
2. **Satoshi font licensing** — Are you OK self-hosting Satoshi (Fontshare allows it), or should we substitute with a free equivalent (e.g. Inter only)?
3. **Contact form transport** — Resend, SendGrid, SMTP, or just a `mailto:` for now?
4. **Cookie / consent banner** — Is one required given the tracking pixels (GDPR/UK)?
5. **Privacy policy & Terms** — Existing copy to migrate, or placeholders for now?
6. **Blog & Setup Guide pages** — Out of scope for this migration, or scaffold with real content?

---

## 10. Execution order (suggested)

1. Tokens, fonts, Tailwind theme, primitives (`Container`, `Section`, `Button`, `Eyebrow`, `Card`, `RadialGlow`)
2. `Nav` + `Footer` shell
3. Home page top-to-bottom (Hero → Features → Testimonials → How → FAQ)
4. `/pricing`
5. `/contact` + form submission
6. Stub pages (`/blog`, `/apple-search-ads-attribution-setup-guide`, `/terms`, `/llms.txt`)
7. SEO: metadata, sitemap, robots, JSON-LD, OG image
8. Analytics scripts
9. Polish pass against screenshots / live site
