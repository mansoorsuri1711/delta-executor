import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaButton from "@/components/CtaButton";
import FaqSection from "@/components/FaqSection";
import RelatedGuides, { RELATED_PRESETS } from "@/components/RelatedGuides";
import {
  BRAND_FEATURE_2,
  BRAND_FEATURE_4,
  OG_IMAGE,
  SITE_NAME,
  SITE_ORIGIN,
  APP_VERSION,
  STYLES_UPDATED,
  ANDROID_APK_URL,
} from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `How to Use Delta Executor — Complete Beginner Guide (${APP_VERSION}, November 2026)`,
  description:
    "Full walkthrough on how to use Delta Executor on Android: inject into Roblox, run scripts, use the Script Hub, manage your library, and troubleshoot common issues. Updated November 2026.",
  alternates: { canonical: `${SITE_ORIGIN}/how-to-use-delta-executor` },
  openGraph: {
    title: `How to Use Delta Executor — ${SITE_NAME}`,
    description: `Complete beginner guide for Delta Executor ${APP_VERSION}, ${STYLES_UPDATED}.`,
    url: `${SITE_ORIGIN}/how-to-use-delta-executor`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `How to use Delta Executor guide` }],
  },
};

const usageSteps = [
  {
    n: 1,
    title: "Install Delta Executor",
    body: "If you haven't installed Delta Executor yet, download the official APK from our download page and follow the sideloading steps. Make sure overlay and storage permissions are granted before proceeding.",
  },
  {
    n: 2,
    title: "Get your key (first time or after 24 hours)",
    body: "Open Delta Executor. If the key gate appears, tap 'Get Key,' complete the Linkvertise or Loot-Link checkpoint, copy the key string, paste it into the key field, and tap Connect. Keys last 24 hours and are device-bound. See our key system guide for detailed tips.",
  },
  {
    n: 3,
    title: "Open Roblox and join a game",
    body: "Launch Roblox on your Android device and join any game. Wait until you're fully loaded into the game world — injection attempts during the loading screen will fail.",
  },
  {
    n: 4,
    title: "Return to Delta and tap Connect / Inject",
    body: "Switch back to Delta Executor. Tap the Connect or Inject button. The status indicator should turn green and show 'Injected' or a similar success message. This may take a few seconds. If it fails, see the troubleshooting section below.",
  },
  {
    n: 5,
    title: "Browse the Script Hub or paste your own script",
    body: "With injection confirmed, you have two paths: (A) Script Hub — tap the Script Hub tab, browse by game or category, and tap Execute on any script; (B) Manual — tap the Editor tab, paste your Lua script code, and tap Execute. Both methods produce the same result.",
  },
  {
    n: 6,
    title: "Save frequently used scripts",
    body: "In Script Hub, tap the bookmark/heart icon to save a script to your Library. For manual scripts, tap the Save icon in the Editor to store it locally. Access saved scripts from the Library tab at any time.",
  },
  {
    n: 7,
    title: "Disconnect when done",
    body: "When you finish your session, either exit Roblox (which automatically clears the injection) or tap Disconnect in Delta Executor. This prevents injection state from lingering for the next session.",
  },
];

const faqItems = [
  {
    question: "Why does Delta Executor say 'Injection failed'?",
    answer:
      "Injection failure most commonly happens because: (1) you tried to inject before fully loading into the game — wait for the game world to appear; (2) Roblox received an update that broke compatibility — check the Discord for a Delta update; (3) another app is conflicting with the overlay permission. Restart both Roblox and Delta and try again.",
  },
  {
    question: "How do I know if Delta is properly injected?",
    answer:
      "A green status indicator labeled 'Injected' or 'Connected' appears in Delta Executor's main screen. Some versions also show an overlay icon inside the Roblox game. If the indicator is red or says 'Not connected,' the injection didn't succeed.",
  },
  {
    question: "Can I run multiple scripts at the same time?",
    answer:
      "Yes. Each script you execute runs independently. However, running conflicting scripts (e.g., two scripts that both control player movement) can cause unexpected behavior or crashes. Run one script at a time when troubleshooting.",
  },
  {
    question: "What is the difference between Script Hub and the Editor?",
    answer:
      "Script Hub is a curated library of pre-built scripts organized by game and category. The Editor is a blank text field where you can paste any raw Lua code. Script Hub is easier for beginners; the Editor is for running custom or community scripts.",
  },
  {
    question: "Why isn't my script doing anything after I execute it?",
    answer:
      "Check that injection succeeded first (green status). Then verify: (1) the script targets the game you're playing — most scripts are game-specific; (2) the script isn't outdated due to a Roblox game update; (3) there are no syntax errors in the Lua code if you wrote or modified it yourself.",
  },
  {
    question: "Can I use Delta Executor offline?",
    answer:
      "No. Both Roblox and Delta Executor require an active internet connection. Delta's key system also requires network access to validate the key token.",
  },
  {
    question: "How do I update Delta Executor?",
    answer:
      "Download the latest APK from the download page and install it over the existing version — no uninstall needed. Your library of saved scripts is preserved. After updating, you may need a fresh key if the key format changed.",
  },
];

export default function HowToUsePage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "How to Use" }]}
      />

      {/* Hero */}
      <div className="container mx-auto max-w-6xl px-4 pb-4 pt-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          <div className="flex-1">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-pink/80">
              Usage Guide · {APP_VERSION} · {STYLES_UPDATED}
            </p>
            <h1 className="font-display text-4xl font-bold text-white md:text-5xl">
              How to Use Delta Executor
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/65">
              A complete beginner walkthrough — from installation and the key system to injecting into Roblox, running scripts, and using the built-in Script Hub.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <CtaButton href={ANDROID_APK_URL} icon="download">
                Download Delta Executor
              </CtaButton>
              <Link href="/download-delta-executor" className="font-semibold text-pink hover:underline self-center">
                Install guide →
              </Link>
            </div>
          </div>
          <div className="brand-shot-frame brand-shot-frame--side shrink-0">
            <Image
              src={BRAND_FEATURE_2}
              alt="Delta Executor main interface on Android"
              width={280}
              height={455}
              sizes="220px"
              className="brand-shot"
              priority
            />
          </div>
        </div>
      </div>

      {/* Interface overview */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-4 font-display text-2xl font-bold text-white">Delta Executor interface overview</h2>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-sm text-white/70">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.04] text-left text-xs uppercase tracking-wider text-white/40">
                <th className="px-4 py-3">Tab / Button</th>
                <th className="px-4 py-3">What it does</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                ["Connect / Inject", "Initiates Roblox injection — tap after fully loading into a game"],
                ["Script Hub", "Browse and execute pre-built scripts by game/category"],
                ["Editor", "Paste and run any raw Lua script code"],
                ["Library", "Your saved scripts — tap any entry to re-execute it"],
                ["Get Key", "Opens the key gateway (Linkvertise / Loot-Link) for a fresh 24h key"],
                ["Settings", "Adjust display, injection method, and notification preferences"],
              ].map(([label, what]) => (
                <tr key={label as string}>
                  <td className="px-4 py-3 font-semibold text-white">{label}</td>
                  <td className="px-4 py-3">{what}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Steps */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-2 font-display text-2xl font-bold text-white md:text-3xl">
          Step-by-step usage guide
        </h2>
        <p className="mb-8 text-sm text-white/45">From first launch to running your first script</p>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: `How to Use Delta Executor on Android (${APP_VERSION})`,
              description:
                "Complete guide to injecting into Roblox and running scripts with Delta Executor.",
              totalTime: "PT10M",
              step: usageSteps.map((s) => ({
                "@type": "HowToStep",
                position: s.n,
                name: s.title,
                text: s.body,
              })),
            }),
          }}
        />

        <ol className="space-y-4">
          {usageSteps.map((s) => (
            <li
              key={s.n}
              className="flex gap-4 rounded-2xl border border-white/10 bg-card p-5"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-pink font-display text-lg font-bold text-black">
                {s.n}
              </span>
              <div>
                <h3 className="font-semibold text-white">{s.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-white/60">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* Script Hub image */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <div className="brand-shot-frame">
          <Image
            src={BRAND_FEATURE_4}
            alt="Delta Executor Script Hub interface"
            width={280}
            height={455}
            sizes="220px"
            className="brand-shot"
          />
        </div>
        <p className="mt-3 text-center text-xs text-white/35">
          Delta Executor Script Hub — browse and execute scripts without leaving the app
        </p>
      </div>

      {/* Quick troubleshooting */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-4 font-display text-2xl font-bold text-white">Quick troubleshooting</h2>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-sm text-white/70">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.04] text-left text-xs uppercase tracking-wider text-white/40">
                <th className="px-4 py-3">Problem</th>
                <th className="px-4 py-3">Likely cause</th>
                <th className="px-4 py-3">Fix</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                ["Injection failed", "Injected too early / Roblox updated", "Wait for full game load; check for Delta update"],
                ["Invalid key", "Key expired (>24h) or partial copy", "Generate a fresh key; copy the full string"],
                ["Script Hub blank", "Network issue or outdated Delta", "Check internet; update to " + APP_VERSION],
                ["Overlay not showing", "Permission revoked", "Re-grant 'Draw over other apps' in settings"],
                ["App crashes on inject", "Roblox/Delta version mismatch", "Update Delta; check Discord for patch notes"],
              ].map(([prob, cause, fix]) => (
                <tr key={prob as string}>
                  <td className="px-4 py-3 font-semibold text-white">{prob}</td>
                  <td className="px-4 py-3">{cause}</td>
                  <td className="px-4 py-3">{fix}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-white/50">
          For a full list of issues and solutions, see the{" "}
          <Link href="/delta-executor-troubleshooting" className="text-pink hover:underline">
            troubleshooting guide
          </Link>.
        </p>
      </div>

      {/* FAQ */}
      <div className="container mx-auto max-w-3xl px-4 pb-14">
        <FaqSection title="Usage FAQ" items={faqItems} />
        <RelatedGuides links={[...RELATED_PRESETS.howToUse]} />
      </div>
    </>
  );
}
