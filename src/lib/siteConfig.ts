export const SITE_NAME = "Delta Executor";
export const SITE_SHORT_NAME = "Delta";
export const SITE_ORIGIN = "https://deltaexecutor.com.ph";
export const SITE_DOMAIN = "deltaexecutor.com.ph";
export const SITE_TAGLINE =
  "Delta Executor — download guides for Android, iOS, PC, Mac, and VNG. Key system help, safe install steps, and script tips for Roblox.";

export const CONTACT_EMAIL = "support@deltaexecutor.com.ph";

/** Bump this when replacing public images so browsers skip stale cached files. */
export const ASSET_VERSION = "20261115-de3";

function metaAsset(path: string): string {
  return `${path}?v=${ASSET_VERSION}`;
}

/** Brand & content images in /public (user-supplied assets) */
export const BRAND_LOGO = "/delta-executor-logo.webp";
export const BRAND_LOGO_MARK = "/delta-executor-logo.webp";
export const BRAND_LOGO_HORIZONTAL = "/feature/og-image-delta-executor.webp";
export const BRAND_LOGO_HORIZONTAL_DARK = "/feature/og-image-delta-executor.webp";
/** Product hero — Get Delta Key phone mockup */
export const BRAND_HERO = "/delta-executer.webp";
/** Android keysystem phone mockup */
export const BRAND_FEATURE_2 = "/delta-executor-for-android.webp";
/** Unlock / download phone mockup */
export const BRAND_FEATURE_3 = "/delta-executor-download.webp";
/** Create-key / whitelist phone mockup */
export const BRAND_FEATURE_4 = "/deltaexecutor.webp";
/** Whitelist success (key copied) */
export const BRAND_FEATURE_KEY = "/delta-executor-free-download.webp";
export const OG_IMAGE = metaAsset("/feature/og-image-delta-executor.webp");
export const TWITTER_IMAGE = metaAsset("/feature/twitter-card-delta-executor.webp");
export const OG_SQUARE = metaAsset("/feature/og-square-delta-executor.webp");

/** Visible rating used for SoftwareApplication rich results */
export const SITE_RATING = {
  ratingValue: "4.6",
  ratingCount: "128400",
  bestRating: "5",
  worstRating: "1",
} as const;

export const APP_VERSION = "v2.745";
export const STYLES_UPDATED = "November 15, 2026";

/** Official Android APK direct download */
export const ANDROID_APK_URL =
  "https://deltaexecutor.com.ph/downloads/Delta-2.745.1142.apk";
export const ANDROID_APK_FILENAME = "Delta-2.745.1142.apk";

/** Community Discord — verified live invite (rotates; re-check if join fails) */
export const DISCORD_INVITE_URL = "https://discord.gg/vKvRfYb78f";

/** Platform guide videos (YouTube) */
export const YOUTUBE_VIDEOS = {
  ios: {
    id: "Jyj-rV6uV68",
    title: "Delta Executor iOS install walkthrough",
    url: "https://www.youtube.com/watch?v=Jyj-rV6uV68",
  },
} as const;

/**
 * Verified community channels for Delta Executor.
 * Prefer Discord + Telegram for update pings; never paste Roblox passwords in DMs.
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

/** English SERP keywords for Delta Executor (PH + global intent) */
export const SITE_KEYWORDS = [
  "delta executor",
  "delta executor download",
  "delta executor apk",
  "delta executor android",
  "delta executor ios",
  "delta executor pc",
  "delta executor mac",
  "delta executor key",
  "delta executor key system",
  "is delta executor safe",
  "delta executor scripts",
  "delta executor script hub",
  "delta executor vng",
  "delta executor discord",
  "delta x executor",
  "delta roblox executor",
  "roblox executor android",
  "delta executor 2026",
  "delta executor philippines",
] as const;
