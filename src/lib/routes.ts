/** Current SEO page paths */
export const ROUTES = {
  home: "/",
  download: "/download-delta-executor",
  ios: "/delta-executor-ios",
  pc: "/delta-executor-pc",
  mac: "/delta-executor-mac",
  discord: "/delta-executor-discord",
  howToUse: "/how-to-use-delta-executor",
  troubleshooting: "/delta-executor-troubleshooting",
  vng: "/delta-executor-vng",
  comparison: "/delta-executor-comparison",
  about: "/about-us",
  contact: "/contact-us",
  blog: "/blog",
  privacy: "/privacy",
  disclaimer: "/disclaimer",
  featuresAnchor: "/",
  /** SERP: how to get delta executor key / linkvertise */
  keySystem: "/blog/how-to-get-delta-executor-key",
  /** SERP: is delta executor safe */
  safety: "/blog/is-delta-executor-safe",
  /** SERP: what is delta executor */
  whatIs: "/blog/what-is-delta-executor",
  /** SERP: delta key linkvertise not working */
  keyNotWorking: "/blog/delta-executor-key-not-working",
} as const;

/**
 * Retired paths that must 301 to current URLs (keep in sync with legacyRedirects.js).
 */
export const LEGACY_ROUTE_REDIRECTS: Array<{ source: string; destination: string }> = [
  { source: "/download", destination: ROUTES.download },
  { source: "/ios", destination: ROUTES.ios },
  { source: "/pc", destination: ROUTES.pc },
  { source: "/pc-version", destination: ROUTES.pc },
  { source: "/mac", destination: ROUTES.mac },
  { source: "/discord", destination: ROUTES.discord },
  { source: "/how-to-use", destination: ROUTES.howToUse },
  { source: "/troubleshooting", destination: ROUTES.troubleshooting },
  { source: "/vng", destination: ROUTES.vng },
  { source: "/comparison", destination: ROUTES.comparison },
  { source: "/features", destination: ROUTES.featuresAnchor },
  // Old Delta Roblox slugs → Delta Executor
  { source: "/download-delta-roblox", destination: ROUTES.download },
  { source: "/delta-roblox-ios", destination: ROUTES.ios },
  { source: "/delta-roblox-pc", destination: ROUTES.pc },
  { source: "/delta-roblox-mac", destination: ROUTES.mac },
  { source: "/delta-roblox-discord", destination: ROUTES.discord },
  { source: "/how-to-use-delta-roblox", destination: ROUTES.howToUse },
  { source: "/delta-roblox-troubleshooting", destination: ROUTES.troubleshooting },
  { source: "/delta-roblox-vng", destination: ROUTES.vng },
  { source: "/delta-roblox-comparison", destination: ROUTES.comparison },
  { source: "/delta-roblox-download", destination: ROUTES.download },
  { source: "/delta-roblox-how-to-use", destination: ROUTES.howToUse },
  { source: "/ios-delta-roblox", destination: ROUTES.ios },
  { source: "/pc-delta-roblox", destination: ROUTES.pc },
  { source: "/mac-delta-roblox", destination: ROUTES.mac },
  { source: "/discord-delta-roblox", destination: ROUTES.discord },
  { source: "/troubleshooting-delta-roblox", destination: ROUTES.troubleshooting },
  { source: "/vng-delta-roblox", destination: ROUTES.vng },
  { source: "/comparison-delta-roblox", destination: ROUTES.comparison },
  // Retired blogs → SERP replacements
  { source: "/blog/delta-executor-key-system", destination: ROUTES.keySystem },
  { source: "/blog/delta-executor-scripts-hub", destination: ROUTES.howToUse },
  { source: "/blog/fake-delta-executor-websites", destination: ROUTES.safety },
];
