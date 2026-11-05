export const SITE_NAME = "Anagram Generator";
export const SITE_SHORT_NAME = "Anagram Gen";
export const SITE_ORIGIN = "https://anagramgenerator.app";
export const SITE_DOMAIN = "anagramgenerator.app";
export const SITE_TAGLINE =
  "Free anagram generator — rearrange any word, name, or letters into new words and phrases instantly.";

export const CONTACT_EMAIL = "support@anagramgenerator.app";

/** Bump this when replacing public images so browsers skip stale cached files. */
export const ASSET_VERSION = "20261105-ag1";

function metaAsset(path: string): string {
  return `${path}?v=${ASSET_VERSION}`;
}

/** Brand & content images in /public */
export const BRAND_LOGO = "/logo-icon.png";
export const BRAND_LOGO_MARK = "/logo-icon.svg";
export const BRAND_LOGO_HORIZONTAL = "/logo-horizontal-white-text.png";
export const BRAND_LOGO_HORIZONTAL_DARK = "/logo-horizontal-dark-text.png";
export const BRAND_HERO = "/anagram-generator.webp";
export const BRAND_FEATURE_2 = "/anagram-generator-online.webp";
export const BRAND_FEATURE_3 = "/anagram-generator-tool.webp";
export const BRAND_FEATURE_4 = "/anagram-generator-app.webp";
export const OG_IMAGE = metaAsset("/feature/og-image-1200x630.png");
export const TWITTER_IMAGE = metaAsset("/feature/twitter-card-1200x600.png");

/** Visible rating used for SoftwareApplication rich results */
export const SITE_RATING = {
  ratingValue: "4.9",
  ratingCount: "18420",
  bestRating: "5",
  worstRating: "1",
} as const;

export const DICTIONARY_UPDATED = "November 2026";

/** @deprecated Prefer SITE_LOCALES from @/lib/locales */
export { SITE_LOCALES as SITE_LANGUAGES } from "@/lib/locales";

/** Primary + related keywords from Semrush SERP demand */
export const SITE_KEYWORDS = [
  "anagram generator",
  "anagram solver",
  "anagram maker",
  "anagram",
  "anagram creator",
  "anagram name generator",
  "anagram finder",
  "name anagram",
  "anagram generator dansk",
  "word anagram",
  "anagrams generator",
  "anagrams",
  "anagramm generator",
  "name anagram generator",
  "anagram maker uk",
  "anagramm generator english",
  "anagram calculator",
  "anagram machine",
  "word anagram generator",
  "online anagram generator",
  "free anagram generator",
] as const;
