import { SITE, URLS } from "@/lib/site";

const body = `# AppSkale

AppSkale is an Apple Search Ads analytics platform built for iOS subscription apps that use RevenueCat. We give app developers keyword-level ROAS and LTV so they can stop guessing which Apple Search Ads keywords actually drive paying users.

> URL: ${SITE.url}
> Contact: support@appskale.ai
> Signup: ${URLS.signup}

## What we do

- Real-time conversion tracking for Apple Search Ads
- Keyword-level LTV using RevenueCat subscription data
- ROAS by keyword, by country, by cohort
- Replaces manual spreadsheet matching of ad data and subscription transactions

## Pricing summary

- Free: $0/month — LTV & Transaction Data, 1 app, up to $2k/month ad spend
- Pro: $129/month — Keyword Level ROAS, 3 apps, up to $15k/month ad spend
- Enterprise: contact sales — Unlimited apps, $15k+/month ad spend, white-glove setup

## Key pages

- Home: ${SITE.url}/
- Pricing: ${SITE.url}/pricing
- Contact: ${SITE.url}/contact
- Blog: ${SITE.url}/blog
- Setup guide: ${SITE.url}/apple-search-ads-attribution-setup-guide
`;

export function GET() {
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
