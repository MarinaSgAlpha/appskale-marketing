import Script from "next/script";

const GA_ID = "G-NF6187TK8K";
const GADS_ID = "AW-705969986";
const META_PIXEL_ID = "26339358755677240";
const AHREFS_KEY = "kspd1LOLreVfj9RlGsVgGA";
const CONTENTSQUARE_ID = "fde109d67ea15";

/**
 * All third-party tracking pixels from the live Framer site.
 *
 * NOTE: No consent gate yet. Once we add a cookie banner, gate the
 * `afterInteractive` scripts behind consent state.
 */
export function Analytics() {
  return (
    <>
      {/* Google tag (gtag.js) — GA4 + Google Ads */}
      <Script
        id="gtag-loader"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
          gtag('config', '${GADS_ID}');
        `}
      </Script>

      {/* Meta (Facebook) Pixel */}
      <Script id="fb-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${META_PIXEL_ID}');
          fbq('track', 'PageView');
        `}
      </Script>

      {/* Ahrefs analytics */}
      <Script
        id="ahrefs-analytics"
        strategy="lazyOnload"
        src="https://analytics.ahrefs.com/analytics.js"
        data-key={AHREFS_KEY}
      />

      {/* Contentsquare */}
      <Script
        id="contentsquare"
        strategy="lazyOnload"
        src={`https://t.contentsquare.net/uxa/${CONTENTSQUARE_ID}.js`}
      />
    </>
  );
}

export function MetaPixelNoScript() {
  return (
    <noscript>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        alt=""
        src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
      />
    </noscript>
  );
}
