export const SITE_NAME = "Blox Fruit Calculator";
export const SITE_SHORT_NAME = "Blox Fruit Calc";
export const SITE_ORIGIN = "https://bloxfruitcalculator.net";
export const SITE_DOMAIN = "bloxfruitcalculator.net";
export const SITE_TAGLINE =
  "Free Blox Fruit Calculator — check blox fruit values, compare trade value, and see Win / Fair / Lose instantly.";

export const CONTACT_EMAIL = "support@bloxfruitcalculator.net";

/** Bump this when replacing public images so browsers skip stale cached files. */
export const ASSET_VERSION = "20261105-bfc1";

function metaAsset(path: string): string {
  return `${path}?v=${ASSET_VERSION}`;
}

/** Brand & content images in /public */
export const BRAND_LOGO = "/logo-icon.png";
export const BRAND_LOGO_MARK = "/logo-icon.svg";
export const BRAND_LOGO_HORIZONTAL = "/logo-horizontal-white-text.png";
export const BRAND_LOGO_HORIZONTAL_DARK = "/logo-horizontal-dark-text.png";
export const BRAND_HERO = "/blox-fruit-calculator.webp";
export const BRAND_FEATURE_2 = "/blox-fruit-calculator-online.webp";
export const BRAND_FEATURE_3 = "/blox-fruit-calculator-tool.webp";
export const BRAND_FEATURE_4 = "/blox-fruit-calculator-app.webp";
export const OG_IMAGE = metaAsset("/feature/og-image-1200x630.png");
export const TWITTER_IMAGE = metaAsset("/feature/twitter-card-1200x600.png");

/** Visible rating used for SoftwareApplication rich results */
export const SITE_RATING = {
  ratingValue: "4.8",
  ratingCount: "12640",
  bestRating: "5",
  worstRating: "1",
} as const;

export const VALUES_UPDATED = "November 2026";
