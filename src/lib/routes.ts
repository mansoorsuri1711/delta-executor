/** Current SEO page paths */
export const ROUTES = {
  home: "/",
  download: "/download-delta-roblox",
  ios: "/delta-roblox-ios",
  pc: "/delta-roblox-pc",
  mac: "/delta-roblox-mac",
  discord: "/delta-roblox-discord",
  howToUse: "/how-to-use-delta-roblox",
  troubleshooting: "/delta-roblox-troubleshooting",
  vng: "/delta-roblox-vng",
  comparison: "/delta-roblox-comparison",
  about: "/about-us",
  contact: "/contact-us",
  blog: "/blog",
  privacy: "/privacy",
  disclaimer: "/disclaimer",
  featuresAnchor: "/",
  keySystem: "/blog/delta-executor-key-system",
  safety: "/blog/is-delta-executor-safe",
  scriptsHub: "/blog/delta-executor-scripts-hub",
} as const;

/**
 * Retired paths that must 301 to current URLs (keep in sync with legacyRedirects.js).
 * Trailing-slash variants are added in next.config via legacyRedirects.js.
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
  { source: "/delta-roblox-download", destination: ROUTES.download },
  { source: "/delta-roblox-how-to-use", destination: ROUTES.howToUse },
  { source: "/ios-delta-roblox", destination: ROUTES.ios },
  { source: "/pc-delta-roblox", destination: ROUTES.pc },
  { source: "/mac-delta-roblox", destination: ROUTES.mac },
  { source: "/discord-delta-roblox", destination: ROUTES.discord },
  { source: "/troubleshooting-delta-roblox", destination: ROUTES.troubleshooting },
  { source: "/vng-delta-roblox", destination: ROUTES.vng },
  { source: "/comparison-delta-roblox", destination: ROUTES.comparison },
];
