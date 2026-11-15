export type HomeMessages = {
  brand: string;
  metaTitle: string;
  metaDescription: string;
  heroSubPrefix: string;
  freeMeta: string;
  ratingsLabel: string;
  whatTitle: string;
  whatBody: string;
  toolExplainerTitle: string;
  toolExplainerBody: string;
  controlsTitle: string;
  controls: { t: string; d: string }[];
  whoTitle: string;
  whoIntro: string;
  whoItems: { t: string; d: string }[];
  modesTitle: string;
  modesIntro: string;
  cardExactTitle: string;
  cardExactBody: string;
  cardSolverTitle: string;
  cardSolverBody: string;
  cardWhatsappTitle: string;
  cardWhatsappBody: string;
  howTitle: string;
  howIntroBefore: string;
  howIntroLink: string;
  howIntroAfter: string;
  howSteps: { name: string; text: string }[];
  whyEyebrow: string;
  whyTitle: string;
  whyBody: string;
  tipsTitle: string;
  tips: { t: string; d: string }[];
  trustTitle: string;
  trustItems: string[];
  trustLink: string;
  faqTitle: string;
  faqs: { question: string; answer: string }[];
  ctaTitle: string;
  ctaBody: string;
  ctaButton: string;
  navGenerator: string;
  navInstagram: string;
  navNick: string;
  navWhatsapp: string;
  navWhat: string;
  navBlog: string;
  navAbout: string;
  makeStyles: string;
  languageLabel: string;
  footerTools: string;
  footerGuides: string;
  footerSocial: string;
  footerCtaTitle: string;
  footerCtaBody: string;
  footerRights: string;
  footerNote: string;
  platformsTitle: string;
  platformsIntro: string;
  platforms: { t: string; d: string }[];
  compareTitle: string;
  compareBody: string;
};

const en: HomeMessages = {
  brand: "Delta Executor",
  metaTitle: "Delta Executor — Android, iOS & PC Download Guides",
  metaDescription:
    "Delta Executor guides for Android APK, iOS install, PC emulator setup, key system help, safety checks, and Roblox script tips — updated for 2026 on deltaexecutor.com.ph.",
  heroSubPrefix:
    "Run supported Roblox scripts on mobile with clear Delta Executor download steps, key unlock help, and honest safety notes — built for players who want working builds without mirror-site noise.",
  freeMeta: "Free guides · Android & iOS · Updated",
  ratingsLabel: "ratings",
  whatTitle: "What is Delta Executor?",
  whatBody:
    "Delta Executor is a mobile-first Roblox script executor that lets players load supported Lua scripts on Android and, when a build is available, on iOS. Players search for it when they want a working APK or IPA, a reliable key unlock, and a script hub that still injects after Roblox patches. Delta Executor on deltaexecutor.com.ph is an independent guide hub that explains installs, keys, platforms, and risk — without stuffing every keyword into one thin mirror page.",
  toolExplainerTitle: "Why players search for Delta Executor",
  toolExplainerBody:
    "Search demand clusters around three jobs: get a working Android or iOS build, finish the daily key, and find scripts that still run after Wednesday Roblox updates. Delta Executor is known for a dark mobile UI, built-in script hub access, and frequent version bumps in the v2.745 series. Our site splits those jobs into dedicated guides so Android, iOS, PC, VNG, and key help do not cannibalize each other.",
  controlsTitle: "What you get with Delta Executor",
  controls: [
    {
      t: "Fast script execution",
      d: "On supported Android devices, Delta Executor injects and runs common farm and helper scripts with less waiting between joins — so sessions start cleaner when the build matches your Roblox client.",
    },
    {
      t: "Android and iOS focused",
      d: "Most Delta Executor searches are mobile. Follow the Android APK guide or the iOS install path that matches your device, signing method, and OS version.",
    },
    {
      t: "Key system unlock",
      d: "Free builds use a time-limited key. Our key guide walks the standard in-app flow so you are not bounced through random cloaked redirects sold as “instant unlock.”",
    },
    {
      t: "Script hub access",
      d: "Browse or paste supported scripts from trusted hub categories. Always re-check scripts after major Roblox client updates — yesterday’s paste can break today.",
    },
    {
      t: "Stability updates",
      d: "Executors break when Roblox patches. Prefer builds that publish a clear version string and release notes instead of anonymous “latest free” APKs from chat links.",
    },
    {
      t: "Mobile-ready interface",
      d: "Delta’s dark mobile UI keeps Execute, Hub, and Settings reachable with one hand — useful when you are farming on a phone without a keyboard.",
    },
  ],
  whoTitle: "Who is Delta Executor for?",
  whoIntro:
    "Delta Executor guides are for mobile players who want clear install steps and honest risk language — not empty “instant free Robux” promises.",
  whoItems: [
    {
      t: "Android script users",
      d: "Players who sideload the Delta Executor APK, enable unknown sources carefully, and want a clean post-install checklist before opening Roblox.",
    },
    {
      t: "iOS experimenters",
      d: "Users researching IPA / Direct Install options who need platform-specific warnings about certificates, trust prompts, and revokes before installing.",
    },
    {
      t: "Key and script learners",
      d: "Beginners who understand farm scripts but get stuck on expired keys, gateway loops, or hubs that stop working after a Roblox update.",
    },
    {
      t: "Safety-conscious players",
      d: "Anyone comparing mirrors, reading risk write-ups, and asking whether Delta Executor is safe for their device and alt account.",
    },
  ],
  modesTitle: "Explore the Delta Executor guides",
  modesIntro:
    "Separate pages for download, iOS, PC, Mac, VNG, Discord, troubleshooting, and SERP blogs — every search intent has a clear home.",
  cardExactTitle: "Android APK download",
  cardExactBody:
    "Step-by-step Delta Executor APK install for Android 8+, including permissions, Play Protect notes, and post-install checks.",
  cardSolverTitle: "iOS install path",
  cardSolverBody:
    "How Delta usually lands on iPhone and iPad, what Direct Install means, and where builds commonly fail after certificate revokes.",
  cardWhatsappTitle: "Scripts and hubs",
  cardWhatsappBody:
    "How to find working scripts for Delta Executor and organize them without downloading random packs from unverified chat links.",
  howTitle: "How to get started with Delta Executor",
  howIntroBefore: "Want the full walkthrough?",
  howIntroLink: "open the Android download guide",
  howIntroAfter: "or jump to the iOS / PC pages from the menu.",
  howSteps: [
    {
      name: "Choose your platform",
      text: "Android APK is the most common Delta Executor path. iOS and PC have different limits — use the matching guide instead of forcing one APK everywhere.",
    },
    {
      name: "Install from a labeled build",
      text: "Download the labeled Delta Executor package, verify the version string, and avoid randomly renamed APKs shared in Discord DMs or Telegram groups.",
    },
    {
      name: "Complete the key (if required)",
      text: "Open the in-app Get Key flow, finish the short unlock steps, then paste back into Delta. Keys usually expire after about 24 hours on free builds.",
    },
    {
      name: "Load a supported script",
      text: "Paste or pick a script from the hub, attach to Roblox when prompted, and only run scripts you understand on an alternate account.",
    },
  ],
  whyEyebrow: "Built for clarity",
  whyTitle: "Why use deltaexecutor.com.ph?",
  whyBody:
    "Most Delta Executor SERP pages stuff every keyword into one URL, hide downloads behind trackers, or skip safety. We separate intents, ship real image metadata, and state sideloading and ban risks up front — so Philippines and global players get a brand guide they can trust.",
  tipsTitle: "Practical Delta Executor tips",
  tips: [
    {
      t: "Match the Roblox client",
      d: "After a Roblox update, wait for a Delta version note before assuming yesterday’s APK still injects cleanly on your device.",
    },
    {
      t: "Treat keys as temporary",
      d: "If unlock fails, refresh the official in-app key path instead of pasting keys sold by strangers in Discord DMs.",
    },
    {
      t: "Separate accounts while testing",
      d: "Script tools can violate Roblox rules. Use an alternate account when evaluating any executor — never your main with Robux inventory.",
    },
    {
      t: "Scan before you install",
      d: "Prefer known filenames and published hashes when available. Delete APKs that request unrelated accessibility permissions without a clear reason.",
    },
  ],
  trustTitle: "Trust signals on this site",
  trustItems: [
    "On-domain download guidance (no cloaked affiliate redirect as the only CTA)",
    "Separate pages for Android, iOS, PC, key help, safety, and fake-site warnings",
    "Custom Privacy and Disclaimer — not generator boilerplate",
    "Visible rating UI that matches SoftwareApplication schema",
  ],
  trustLink: "Read our disclaimer",
  faqTitle: "Delta Executor FAQs",
  faqs: [
    {
      question: "What is Delta Executor?",
      answer:
        "Delta Executor is a third-party mobile Roblox script executor used to run supported Lua scripts on Android and, when available, on iOS builds. It is also searched as Delta X or Delta Roblox executor.",
    },
    {
      question: "Is Delta Executor free?",
      answer:
        "The app is typically offered free with a key system or unlock flow. You should never pay random sellers for a “premium key” outside a documented official Premium path.",
    },
    {
      question: "Does Delta Executor work on Android and iOS?",
      answer:
        "Android APK support is the primary path. iOS options exist on some releases but depend on signing, device OS, and the current patch — see the iOS guide.",
    },
    {
      question: "Do I need a Delta Executor key?",
      answer:
        "Many free builds require a short key unlock before scripts run. Keys are usually time-limited and device-bound. Read the key system blog for the usual steps.",
    },
    {
      question: "Can my Roblox account get banned?",
      answer:
        "Yes. Using an executor can violate Roblox Terms of Service and lead to moderation action. Understand the risk before you install anything.",
    },
    {
      question: "Is Delta Executor safe?",
      answer:
        "Safety depends on build source, permissions you grant, and scripts you run. Avoid unknown mirrors and read our safety article before sideloading.",
    },
    {
      question: "Is Delta Executor undetectable?",
      answer:
        "No executor is undetectable. Roblox anti-cheat is server-side and reviews behavior patterns. We never claim undetected status — quieter scripts reduce risk more than marketing slogans.",
    },
    {
      question: "Does Delta Executor support UNC?",
      answer:
        "Delta Executor implements a large part of the UNC API surface. Exact coverage changes per update as Roblox’s Lua environment shifts after each patch cycle.",
    },
    {
      question: "How is the script hub different from external script sites?",
      answer:
        "Hub scripts are curated before listing, which reduces some session-stealing patterns. External paste sites are unreviewed and carry higher malicious Lua risk. The tradeoff is curated selection versus unlimited unverified pastes.",
    },
  ],
  ctaTitle: "Open the Delta Executor download guide",
  ctaBody:
    "Start with the Android APK guide, or open the iOS / PC guides for your device. Then review key unlock and safety notes before you inject.",
  ctaButton: "Open download guide",
  navGenerator: "Home",
  navInstagram: "Download",
  navNick: "iOS",
  navWhatsapp: "PC",
  navWhat: "Features",
  navBlog: "Blog",
  navAbout: "About",
  makeStyles: "Download",
  languageLabel: "Language",
  footerTools: "Pages",
  footerGuides: "Guides",
  footerSocial: "Social",
  footerCtaTitle: "Get Delta Executor",
  footerCtaBody: "Android, iOS, and PC paths — with clear warnings.",
  footerRights: "All rights reserved.",
  footerNote:
    "Delta Executor on deltaexecutor.com.ph is an independent fan guide. Not affiliated with Roblox Corporation. Executors can violate ToS — use at your own risk.",
  platformsTitle: "Platforms we cover",
  platformsIntro:
    "Delta Executor guides match the intents that dominate Google: Android APK, iOS install, PC via emulator, Mac options, VNG, and key unlock help.",
  platforms: [
    {
      t: "Android",
      d: "APK sideload, unknown-sources settings, and first-run key flow.",
    },
    {
      t: "iOS",
      d: "IPA / Direct Install patterns and common signing failures.",
    },
    {
      t: "PC",
      d: "What “Delta for PC” usually means and safer emulator alternatives to random EXE mirrors.",
    },
    {
      t: "Scripts",
      d: "Hub usage, paste-and-execute habits, and post-update verification.",
    },
  ],
  compareTitle: "Delta Executor vs typical mirror pages",
  compareBody:
    "Mirror sites bury install steps under keyword stuffing and off-site redirects. We keep CTAs on deltaexecutor.com.ph, split guides by platform, and document the risks YouTube titles skip.",
};

export function getMessages(_code?: string): HomeMessages {
  return en;
}
