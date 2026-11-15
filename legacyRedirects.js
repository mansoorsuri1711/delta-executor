/**
 * All retired / alternate paths → current SEO URLs.
 * Used by next.config.js so old bookmarks never 404.
 */
const CURRENT = {
  download: "/download-delta-executor",
  ios: "/delta-executor-ios",
  pc: "/delta-executor-pc",
  mac: "/delta-executor-mac",
  discord: "/delta-executor-discord",
  howToUse: "/how-to-use-delta-executor",
  troubleshooting: "/delta-executor-troubleshooting",
  vng: "/delta-executor-vng",
  comparison: "/delta-executor-comparison",
  home: "/",
  features: "/",
};

/** [sourceWithoutSlash, destination] */
const PAIRS = [
  // Short paths
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

  // Previous Delta Roblox brand slugs
  ["/download-delta-roblox", CURRENT.download],
  ["/delta-roblox-ios", CURRENT.ios],
  ["/delta-roblox-pc", CURRENT.pc],
  ["/delta-roblox-mac", CURRENT.mac],
  ["/delta-roblox-discord", CURRENT.discord],
  ["/how-to-use-delta-roblox", CURRENT.howToUse],
  ["/delta-roblox-troubleshooting", CURRENT.troubleshooting],
  ["/delta-roblox-vng", CURRENT.vng],
  ["/delta-roblox-comparison", CURRENT.comparison],
  ["/delta-roblox-download", CURRENT.download],
  ["/delta-roblox-how-to-use", CURRENT.howToUse],
  ["/ios-delta-roblox", CURRENT.ios],
  ["/pc-delta-roblox", CURRENT.pc],
  ["/mac-delta-roblox", CURRENT.mac],
  ["/discord-delta-roblox", CURRENT.discord],
  ["/troubleshooting-delta-roblox", CURRENT.troubleshooting],
  ["/vng-delta-roblox", CURRENT.vng],
  ["/comparison-delta-roblox", CURRENT.comparison],

  // Retired blog posts → SERP replacements
  ["/blog/delta-executor-key-system", "/blog/how-to-get-delta-executor-key"],
  ["/blog/delta-executor-scripts-hub", "/how-to-use-delta-executor"],
  ["/blog/fake-delta-executor-websites", "/blog/is-delta-executor-safe"],

  // Robux converter aliases
  ["/robux-converter", "/robux-to-usd"],
  ["/robux-to-usd-calculator", "/robux-to-usd"],
  ["/usd-to-robux", "/robux-to-usd"],
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
