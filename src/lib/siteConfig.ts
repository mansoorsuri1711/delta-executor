export const SITE_NAME = "Delta Roblox";
export const SITE_SHORT_NAME = "Delta";
export const SITE_ORIGIN = "https://deltaroblox.tr";
export const SITE_DOMAIN = "deltaroblox.tr";
export const SITE_TAGLINE =
  "Delta Roblox — Android, iOS ve PC için Delta Executor indirme rehberi. Anahtar sistemi, güvenli kurulum ve script ipuçları.";

export const CONTACT_EMAIL = "destek@deltaroblox.tr";

/** Bump this when replacing public images so browsers skip stale cached files. */
export const ASSET_VERSION = "20261106-dr3";

function metaAsset(path: string): string {
  return `${path}?v=${ASSET_VERSION}`;
}

/** Brand & content images in /public */
export const BRAND_LOGO = "/delta-roblox-logo.webp";
export const BRAND_LOGO_MARK = "/delta-roblox-logo.webp";
export const BRAND_LOGO_HORIZONTAL = "/logo-horizontal-white-text.png";
export const BRAND_LOGO_HORIZONTAL_DARK = "/logo-horizontal-dark-text.png";
export const BRAND_HERO = "/delta-roblox.webp";
export const BRAND_FEATURE_2 = "/delta-roblox-android.webp";
export const BRAND_FEATURE_3 = "/delta-roblox-ios.webp";
export const BRAND_FEATURE_4 = "/delta-roblox-scripts.webp";
export const OG_IMAGE = metaAsset("/feature/og-image-1200x630.webp");
export const TWITTER_IMAGE = metaAsset("/feature/twitter-card-1200x600.webp");

/** Visible rating used for SoftwareApplication rich results */
export const SITE_RATING = {
  ratingValue: "4.6",
  ratingCount: "128400",
  bestRating: "5",
  worstRating: "1",
} as const;

export const APP_VERSION = "v2.745";
export const STYLES_UPDATED = "6 Kasım 2026";

/** Official Android APK direct download */
export const ANDROID_APK_URL =
  "https://dl.deltaroblox.tr/file/delta-roblox/Deltav2.745.apk";
export const ANDROID_APK_FILENAME = "Deltav2.745.apk";

/** Community Discord — verified live invite (rotates; re-check if join fails) */
export const DISCORD_INVITE_URL = "https://discord.gg/vKvRfYb78f";

/**
 * Only verified-working official Delta social channels.
 * Competitor homepage still lists YouTube (@DeltaExecutor) and GitHub
 * (delta-executor-roblox) but both currently 404 — omitted on purpose.
 */
export const SOCIAL_LINKS = {
  telegram: "https://t.me/RobloxExecutors",
  facebook: "https://www.facebook.com/deltarobloxexecutor",
  x: "https://x.com/Executor_Delta",
  discord: DISCORD_INVITE_URL,
} as const;

export const SOCIAL_LABELS: Record<keyof typeof SOCIAL_LINKS, string> = {
  telegram: "Telegram",
  facebook: "Facebook",
  x: "X",
  discord: "Discord",
};

export const SOCIAL_SAME_AS = Object.values(SOCIAL_LINKS);

/** @deprecated Prefer SITE_LOCALES from @/lib/locales */
export { SITE_LOCALES as SITE_LANGUAGES } from "@/lib/locales";

/** Turkish SERP keywords + brand English variants users still type */
export const SITE_KEYWORDS = [
  "delta roblox",
  "delta executor",
  "delta executor indir",
  "delta executor apk",
  "delta executor ios",
  "delta executor android",
  "delta executor pc",
  "delta executor mac",
  "delta executor macos",
  "delta executor key",
  "delta executor anahtar",
  "delta executor türkiye",
  "delta executor nasıl indirilir",
  "delta executor güvenli mi",
  "delta executor script",
  "delta executor discord",
  "delta discord",
  "delta x executor",
  "roblox executor android",
  "delta executor 2026",
] as const;
