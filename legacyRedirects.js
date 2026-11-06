/**
 * All retired / alternate paths → current SEO URLs.
 * Used by next.config.js so old bookmarks never 404.
 */
const CURRENT = {
  download: "/download-delta-roblox",
  ios: "/delta-roblox-ios",
  pc: "/delta-roblox-pc",
  mac: "/delta-roblox-mac",
  discord: "/delta-roblox-discord",
  howToUse: "/how-to-use-delta-roblox",
  troubleshooting: "/delta-roblox-troubleshooting",
  vng: "/delta-roblox-vng",
  comparison: "/delta-roblox-comparison",
  home: "/",
  features: "/",
};

/** [sourceWithoutSlash, destination] */
const PAIRS = [
  // Original short paths
  ["/download", CURRENT.download],
  ["/ios", CURRENT.ios],
  ["/pc", CURRENT.pc],
  ["/pc-version", CURRENT.pc],
  ["/mac", CURRENT.mac],
  ["/discord", CURRENT.discord],
  ["/how-to-use", CURRENT.howToUse],
  ["/troubleshooting", CURRENT.troubleshooting],
  ["/vng", CURRENT.vng],
  ["/comparison", CURRENT.comparison],
  ["/features", CURRENT.features],

  // Brand-first variants that were renamed
  ["/delta-roblox-download", CURRENT.download],
  ["/delta-roblox-how-to-use", CURRENT.howToUse],

  // Topic-first variants that were renamed (still used for some pages historically)
  ["/ios-delta-roblox", CURRENT.ios],
  ["/pc-delta-roblox", CURRENT.pc],
  ["/mac-delta-roblox", CURRENT.mac],
  ["/discord-delta-roblox", CURRENT.discord],
  ["/troubleshooting-delta-roblox", CURRENT.troubleshooting],
  ["/vng-delta-roblox", CURRENT.vng],
  ["/comparison-delta-roblox", CURRENT.comparison],
  // Note: /download-delta-roblox and /how-to-use-delta-roblox are CURRENT — do not redirect
];

function withTrailingSlashVariants(pairs) {
  const out = [];
  for (const [source, destination] of pairs) {
    out.push({ source, destination, permanent: true });
    out.push({ source: `${source}/`, destination, permanent: true });
  }
  return out;
}

module.exports = {
  CURRENT,
  LEGACY_REDIRECTS: withTrailingSlashVariants(PAIRS),
};
