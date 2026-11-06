/** SEO-friendly page paths: `{topic}-delta-roblox` */
export const ROUTES = {
  home: "/",
  download: "/download-delta-roblox",
  ios: "/ios-delta-roblox",
  pc: "/pc-delta-roblox",
  mac: "/mac-delta-roblox",
  discord: "/discord-delta-roblox",
  howToUse: "/how-to-use-delta-roblox",
  troubleshooting: "/troubleshooting-delta-roblox",
  vng: "/vng-delta-roblox",
  comparison: "/comparison-delta-roblox",
  about: "/about-us",
  contact: "/contact-us",
  blog: "/blog",
  privacy: "/privacy",
  disclaimer: "/disclaimer",
  keySystem: "/blog/delta-executor-key-system",
  safety: "/blog/is-delta-executor-safe",
  scriptsHub: "/blog/delta-executor-scripts-hub",
} as const;

/** Old short paths → new keyword URLs (for redirects + link rewrites) */
export const LEGACY_ROUTE_REDIRECTS: Array<{ source: string; destination: string }> = [
  { source: "/download", destination: ROUTES.download },
  { source: "/ios", destination: ROUTES.ios },
  { source: "/pc-version", destination: ROUTES.pc },
  { source: "/mac", destination: ROUTES.mac },
  { source: "/discord", destination: ROUTES.discord },
  { source: "/how-to-use", destination: ROUTES.howToUse },
  { source: "/troubleshooting", destination: ROUTES.troubleshooting },
  { source: "/vng", destination: ROUTES.vng },
  { source: "/comparison", destination: ROUTES.comparison },
];
