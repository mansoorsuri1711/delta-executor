export const SITE_NAME = "Yazı Stilleri";
export const SITE_SHORT_NAME = "Yazı Stilleri";
export const SITE_ORIGIN = "https://yazıstilleri.com.tr";
export const SITE_DOMAIN = "yazıstilleri.com.tr";
export const SITE_TAGLINE =
  "Ücretsiz yazı stilleri — Instagram, WhatsApp, TikTok ve şekilli nick için kopyala-yapıştır Unicode fontlar.";

export const CONTACT_EMAIL = "destek@yazıstilleri.com.tr";

/** Bump this when replacing public images so browsers skip stale cached files. */
export const ASSET_VERSION = "20261105-ys1";

function metaAsset(path: string): string {
  return `${path}?v=${ASSET_VERSION}`;
}

/** Brand & content images in /public */
export const BRAND_LOGO = "/logo-icon.png";
export const BRAND_LOGO_MARK = "/logo-icon.svg";
export const BRAND_LOGO_HORIZONTAL = "/logo-horizontal-white-text.png";
export const BRAND_LOGO_HORIZONTAL_DARK = "/logo-horizontal-dark-text.png";
export const BRAND_HERO = "/yazı-stilleri.webp";
export const BRAND_FEATURE_2 = "/yazı-stilleri-online.webp";
export const BRAND_FEATURE_3 = "/yazı-stilleri-tool.webp";
export const BRAND_FEATURE_4 = "/yazı-stilleri-app.webp";
export const OG_IMAGE = metaAsset("/feature/og-image-1200x630.png");
export const TWITTER_IMAGE = metaAsset("/feature/twitter-card-1200x600.png");

/** Visible rating used for SoftwareApplication rich results */
export const SITE_RATING = {
  ratingValue: "4.9",
  ratingCount: "28640",
  bestRating: "5",
  worstRating: "1",
} as const;

export const STYLES_UPDATED = "Kasım 2026";

/** Social profiles — update handles if official accounts change */
export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/yazistilleri",
  facebook: "https://www.facebook.com/yazistilleri",
  youtube: "https://www.youtube.com/@yazistilleri",
  tiktok: "https://www.tiktok.com/@yazistilleri",
  x: "https://x.com/yazistilleri",
} as const;

export const SOCIAL_SAME_AS = Object.values(SOCIAL_LINKS);

/** @deprecated Prefer SITE_LOCALES from @/lib/locales */
export { SITE_LOCALES as SITE_LANGUAGES } from "@/lib/locales";

/** Primary + related keywords from live Turkish SERP demand */
export const SITE_KEYWORDS = [
  "yazı stilleri",
  "yazı stili",
  "instagram yazı tipleri",
  "şekilli yazı",
  "şekilli nick",
  "yazı tipi değiştirme",
  "güzel yazı stilleri",
  "değişik yazı tipleri",
  "estetik yazı",
  "whatsapp yazı stilleri",
  "tiktok yazı tipi",
  "kopyala yapıştır yazı",
  "unicode yazı stilleri",
  "bio yazı stilleri",
  "font değiştirici",
  "yazı fontları",
  "şık nick",
  "instagram font",
  "yazı stilleri online",
  "ücretsiz yazı stilleri",
] as const;
