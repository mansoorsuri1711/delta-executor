import { SITE_ORIGIN } from "@/lib/siteConfig";

function imageLoc(path: string): string {
  return `${SITE_ORIGIN}${path}`;
}

export type SitemapPage = {
  path: string;
  lastMod: string;
  changeFreq: "daily" | "weekly" | "monthly" | "yearly";
  priority: number;
  images?: Array<{ loc: string; title: string; caption: string }>;
};

const LASTMOD = "2026-11-15";

export const SITEMAP_PAGES: SitemapPage[] = [
  {
    path: "/",
    lastMod: LASTMOD,
    changeFreq: "daily",
    priority: 1,
    images: [
      {
        loc: imageLoc("/delta-executor-logo.webp"),
        title: "Delta Executor logo",
        caption: "Delta Executor ninja logo — deltaexecutor.com.ph",
      },
      {
        loc: imageLoc("/delta-executer.webp"),
        title: "Delta Executor key system",
        caption: "Get Delta Key unlock flow on mobile",
      },
      {
        loc: imageLoc("/delta-executor-for-android.webp"),
        title: "Delta Executor for Android",
        caption: "Delta Android Keysystem continue screen",
      },
      {
        loc: imageLoc("/delta-executor-download.webp"),
        title: "Delta Executor download unlock",
        caption: "Delta Executor unlock content after completed actions",
      },
      {
        loc: imageLoc("/deltaexecutor.webp"),
        title: "Delta Executor create key",
        caption: "Create your Delta Executor key whitelist step",
      },
    ],
  },
  {
    path: "/download-delta-executor",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.98,
    images: [
      {
        loc: imageLoc("/delta-executor-for-android.webp"),
        title: "Download Delta Executor APK for Android",
        caption: "Delta Executor Android APK download and keysystem guide",
      },
    ],
  },
  {
    path: "/delta-executor-ios",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.95,
    images: [
      {
        loc: imageLoc("/delta-executor-download.webp"),
        title: "Delta Executor for iOS",
        caption: "Delta Executor iOS install and unlock guide",
      },
    ],
  },
  {
    path: "/delta-executor-pc",
    lastMod: LASTMOD,
    changeFreq: "monthly",
    priority: 0.85,
    images: [
      {
        loc: imageLoc("/delta-executer.webp"),
        title: "Delta Executor PC guide",
        caption: "Delta Executor PC via Android emulator — key flow",
      },
    ],
  },
  {
    path: "/about-us",
    lastMod: LASTMOD,
    changeFreq: "monthly",
    priority: 0.65,
    images: [
      {
        loc: imageLoc("/delta-executor-logo.webp"),
        title: "About Delta Executor",
        caption: "About the Delta Executor guide team",
      },
    ],
  },
  {
    path: "/blog",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.8,
  },
  {
    path: "/blog/how-to-get-delta-executor-key",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.95,
    images: [
      {
        loc: imageLoc("/delta-executor-free-download.webp"),
        title: "How to get Delta Executor key",
        caption: "Step-by-step Delta Executor key whitelist success screen",
      },
    ],
  },
  {
    path: "/blog/is-delta-executor-safe",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.93,
    images: [
      {
        loc: imageLoc("/delta-executor-logo.webp"),
        title: "Is Delta Executor safe?",
        caption: "Honest risk assessment for Delta Executor downloads",
      },
    ],
  },
  {
    path: "/blog/what-is-delta-executor",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.94,
    images: [
      {
        loc: imageLoc("/delta-executer.webp"),
        title: "What is Delta Executor?",
        caption: "Beginner guide to Delta Executor for Roblox",
      },
    ],
  },
  {
    path: "/blog/delta-executor-key-not-working",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.92,
    images: [
      {
        loc: imageLoc("/delta-executor-download.webp"),
        title: "Delta Executor key not working",
        caption: "Fix Linkvertise and key unlock errors for Delta Executor",
      },
    ],
  },
  {
    path: "/robux-to-usd",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.96,
  },
  {
    path: "/how-to-use-delta-executor",
    lastMod: LASTMOD,
    changeFreq: "monthly",
    priority: 0.9,
    images: [
      {
        loc: imageLoc("/delta-executor-for-android.webp"),
        title: "How to use Delta Executor",
        caption: "Step-by-step Delta Executor Android keysystem usage",
      },
    ],
  },
  {
    path: "/delta-executor-troubleshooting",
    lastMod: LASTMOD,
    changeFreq: "monthly",
    priority: 0.88,
    images: [
      {
        loc: imageLoc("/delta-executor-download.webp"),
        title: "Delta Executor troubleshooting guide",
        caption: "Fix key unlock and injection issues on Delta Executor",
      },
    ],
  },
  {
    path: "/delta-executor-mac",
    lastMod: LASTMOD,
    changeFreq: "monthly",
    priority: 0.78,
    images: [
      {
        loc: imageLoc("/delta-executer.webp"),
        title: "Delta Executor for Mac",
        caption: "macOS options for Delta Executor via emulator",
      },
    ],
  },
  {
    path: "/delta-executor-vng",
    lastMod: LASTMOD,
    changeFreq: "monthly",
    priority: 0.82,
    images: [
      {
        loc: imageLoc("/delta-executor-for-android.webp"),
        title: "Delta Executor VNG",
        caption: "Delta Executor VNG Vietnam Android keysystem",
      },
    ],
  },
  {
    path: "/delta-executor-discord",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.9,
    images: [
      {
        loc: imageLoc("/delta-executor-logo.webp"),
        title: "Delta Executor Discord server",
        caption: "Delta Executor Discord — updates and community",
      },
    ],
  },
  {
    path: "/delta-executor-comparison",
    lastMod: LASTMOD,
    changeFreq: "monthly",
    priority: 0.85,
    images: [
      {
        loc: imageLoc("/feature/og-image-delta-executor.webp"),
        title: "Delta Executor vs other Roblox executors",
        caption: "Delta Executor brand comparison overview",
      },
    ],
  },
  {
    path: "/contact-us",
    lastMod: LASTMOD,
    changeFreq: "yearly",
    priority: 0.6,
  },
  {
    path: "/privacy",
    lastMod: LASTMOD,
    changeFreq: "yearly",
    priority: 0.4,
  },
  {
    path: "/disclaimer",
    lastMod: LASTMOD,
    changeFreq: "yearly",
    priority: 0.4,
  },
];

export function absoluteUrl(path: string): string {
  if (path === "/") return `${SITE_ORIGIN}/`;
  return `${SITE_ORIGIN}${path}`;
}
