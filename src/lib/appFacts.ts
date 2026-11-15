import { imageObjectLicensing, SITE_ORIGIN } from "@/lib/schemaImageLicensing";
import {
  BRAND_LOGO,
  CONTACT_EMAIL,
  SITE_NAME,
  SITE_RATING,
  SITE_TAGLINE,
  SOCIAL_SAME_AS,
} from "@/lib/siteConfig";

export const APP_AGGREGATE_RATING = {
  "@type": "AggregateRating",
  ratingValue: SITE_RATING.ratingValue,
  ratingCount: SITE_RATING.ratingCount,
  bestRating: SITE_RATING.bestRating,
  worstRating: SITE_RATING.worstRating,
} as const;

export const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_ORIGIN}/#organization`,
  name: SITE_NAME,
  url: SITE_ORIGIN,
  logo: `${SITE_ORIGIN}${BRAND_LOGO}`,
  email: CONTACT_EMAIL,
  description: SITE_TAGLINE,
  sameAs: [...SOCIAL_SAME_AS],
};

export const WEB_APPLICATION_JSON_LD = {
  "@type": "SoftwareApplication",
  name: "Delta Executor",
  alternateName: ["Delta X Executor", "Delta Roblox Executor"],
  url: SITE_ORIGIN,
  applicationCategory: "GameApplication",
  operatingSystem: "Android, iOS",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "PHP",
  },
  aggregateRating: APP_AGGREGATE_RATING,
  image: {
    "@type": "ImageObject",
    url: `${SITE_ORIGIN}${BRAND_LOGO}`,
    width: 256,
    height: 256,
    ...imageObjectLicensing,
  },
};
