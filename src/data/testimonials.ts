/**
 * Saved testimonials — hidden from the homepage until there are enough to feel credible.
 *
 * Re-enable: add `<Testimonials />` to src/app/page.tsx between the feature rows
 * and `<HowItWorks />`.
 */
export type Testimonial = {
  quote: string;
  author: string;
  role?: string;
  avatarSrc?: string;
  avatarAlt?: string;
  stars?: number;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I was one of the early adapters of Appskale. The set up was time consuming and tricky but I needed that to work because I needed to optimize my budget and my ads campaigns. At the beginning, I encountered some bugs and I reported them but they addressed those pretty quickly. Now I am able to see which keywords are working and which aren't. So it is pretty useful for us.",
    author: "Mike",
    role: "CEO of RapidNova.co",
    avatarSrc: "/images/testimonials/testimonial_logo.webp",
    avatarAlt: "RapidNova logo",
    stars: 5,
  },
];
