import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaButton from "@/components/CtaButton";
import FaqSection from "@/components/FaqSection";
import RelatedGuides, { RELATED_PRESETS } from "@/components/RelatedGuides";
import {
  BRAND_FEATURE_2,
  BRAND_HERO,
  OG_IMAGE,
  SITE_NAME,
  SITE_ORIGIN,
  APP_VERSION,
  STYLES_UPDATED,
  ANDROID_APK_URL,
} from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Download Delta Executor APK ${APP_VERSION} for Android (November 2026)`,
  description:
    "Step-by-step guide to downloading and installing Delta Executor APK on Android. Covers sideloading, the key system, APK details, system requirements, fake-APK warnings, and a safe-install checklist.",
  alternates: { canonical: `${SITE_ORIGIN}/download-delta-executor` },
  openGraph: {
    title: `Download Delta Executor APK — ${SITE_NAME}`,
    description: `Safe Android install guide for Delta Executor ${APP_VERSION}, ${STYLES_UPDATED}.`,
    url: `${SITE_ORIGIN}/download-delta-executor`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `${SITE_NAME} download guide` }],
  },
};

const steps = [
  {
    n: 1,
    title: "Back up your Roblox account first",
    body: "Before installing any third-party tool, enable two-factor authentication on your Roblox account and note your recovery codes. This isn't specific to Delta — it's just good security hygiene.",
  },
  {
    n: 2,
    title: "Allow installation from unknown sources",
    body: "On Android 8+, go to Settings → Apps → Special app access → Install unknown apps, then enable the permission for your browser or file manager. On older Android versions, a single toggle under Security covers all sources.",
  },
  {
    n: 3,
    title: "Download the Delta Executor APK",
    body: `Tap the download button on this page to get the official Delta Executor ${APP_VERSION} APK (${STYLES_UPDATED}). The file is approximately 167.8 MB. Confirm the filename ends in .apk — never run a .exe file on Android.`,
  },
  {
    n: 4,
    title: "Run the APK installer",
    body: "Open your Downloads folder, tap the APK, and confirm the install prompt. Android will display a permission summary; Delta Executor needs storage access to load script files and overlay permission to show its UI over Roblox.",
  },
  {
    n: 5,
    title: "Grant overlay and storage permissions",
    body: "After install, open Delta Executor. If 'Draw over other apps' is requested, go to Settings → Apps → Special app access → Appear on top and enable Delta. For storage, go to Settings → Apps → Delta Executor → Permissions → Storage → Allow.",
  },
  {
    n: 6,
    title: "Complete the key system (if prompted)",
    body: "Delta Executor uses a key system to prevent automated abuse. Open the key link, complete the Linkvertise or Loot-Link steps, copy the key, paste it into the executor, and tap Connect. See our key system guide for detailed steps.",
  },
  {
    n: 7,
    title: "Launch Roblox and inject",
    body: "Open Roblox first and join any game. Switch to Delta Executor, tap Connect, wait for the green 'Injected' status, then paste or load your script and tap Execute.",
  },
];

const faqItems = [
  {
    question: "Is Delta Executor free to download?",
    answer:
      "Yes. Delta Executor is free for Android. No paid tier is required to run scripts — the only gate is the key system, and keys are obtainable for free through the key page.",
  },
  {
    question: "Will using Delta Executor get my Roblox account banned?",
    answer:
      "Using a script executor violates Roblox's Terms of Service. Bans do occur, particularly in games with strong anti-cheat systems. If you want to protect your main account, use an alternate account. Delta Executor does not guarantee you won't be banned.",
  },
  {
    question: "What Android version is required?",
    answer:
      "Delta Executor supports Android 5.0 (Lollipop) and above, with full feature support on Android 8.0 (Oreo) and later. Android 8+ is recommended for the most stable injection experience. Older versions may encounter injection errors.",
  },
  {
    question: "Why does my antivirus flag the APK?",
    answer:
      "Android antivirus tools sometimes flag executors not because of actual malware but because of hook-like behavior. If you downloaded from this page, the APK is the official build. For peace of mind, scan it on VirusTotal before installing.",
  },
  {
    question: "The key page has too many ads — any tips?",
    answer:
      "Use a clean browser rather than the in-app browser, and complete each checkpoint in order. Don't tap the misleading 'Download' buttons on Linkvertise — only tap the small 'Continue' or 'I'm not a robot' buttons.",
  },
  {
    question: "How large is the APK file?",
    answer: `Delta Executor ${APP_VERSION} APK is approximately 167.8 MB. Make sure you have enough free storage before downloading. The installed size may be slightly larger.`,
  },
  {
    question: "What does 'Play Protect blocked the install' mean?",
    answer:
      "Google Play Protect flags all APKs not distributed via the Play Store — including legitimate executor tools. This is expected for any sideloaded app. Tap 'Install anyway' to proceed. This warning is not a virus detection; it's Play Protect's default caution for any APK outside the Play Store.",
  },
  {
    question: "How do I update Delta Executor to a newer version?",
    answer:
      "Download the latest APK from this page and install it directly over the existing version — you don't need to uninstall first. Your saved scripts and settings are preserved. If you experience issues after updating, a clean reinstall (uninstall first) resolves most problems.",
  },
  {
    question: "Does Delta Executor work on ARM64 devices?",
    answer:
      "Yes. Delta Executor supports ARM64 (64-bit) devices, covering nearly all Android phones made after 2017. Stability may be reduced on ARM32 (32-bit) devices running Android 5/6.",
  },
  {
    question: "Where do I get Delta Executor for Vietnam (VNG Roblox)?",
    answer:
      "If you play on the VNG-published Roblox client, you need a VNG-compatible Delta build. See our VNG page for details and the Vietnam Roblox client-specific download link.",
  },
];

export default function DownloadPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Download" }]}
      />

      {/* Hero */}
      <div className="container mx-auto max-w-6xl px-4 pb-4 pt-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          <div className="flex-1">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-pink/80">
              Android APK · {APP_VERSION} · {STYLES_UPDATED}
            </p>
            <h1 className="font-display text-4xl font-bold text-white md:text-5xl">
              Download Delta Executor for Android
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/65">
              The most popular free Roblox script executor for Android. Follow the steps below for a clean, safe install — no root required.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <CtaButton href={ANDROID_APK_URL} icon="download">
                Download APK {APP_VERSION}
              </CtaButton>
              <Link href="/delta-executor-ios" className="font-semibold text-pink hover:underline self-center">
                iOS guide →
              </Link>
              <Link href="/blog/how-to-get-delta-executor-key" className="font-semibold text-pink hover:underline self-center">
                Get key →
              </Link>
            </div>
            <p className="mt-3 text-xs text-white/35">
              By downloading you acknowledge that script executors violate Roblox&apos;s ToS and use is at your own risk.
            </p>
          </div>
          <div className="brand-shot-frame brand-shot-frame--side shrink-0">
            <Image
              src={BRAND_FEATURE_2}
              alt="Delta Executor running on Android"
              width={280}
              height={455}
              sizes="220px"
              className="brand-shot"
              priority
            />
          </div>
        </div>
      </div>

      {/* APK Details Table */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-4 font-display text-2xl font-bold text-white">APK Details</h2>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-sm text-white/70">
            <tbody className="divide-y divide-white/5">
              {[
                ["App name", "Delta Executor"],
                ["Version", APP_VERSION],
                ["Release date", STYLES_UPDATED],
                ["File format", "APK (Android Package)"],
                ["Minimum Android", "5.0 (Lollipop)"],
                ["Recommended Android", "8.0+ (Oreo or newer)"],
                ["Architecture", "ARM64 + ARM32"],
                ["Approximate size", "167.8 MB"],
                ["Price", "Free"],
                ["Root required", "No"],
              ].map(([label, value]) => (
                <tr key={label}>
                  <td className="px-4 py-3 font-semibold text-white/80">{label}</td>
                  <td className="px-4 py-3 text-white/65">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* System Requirements */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-4 font-display text-2xl font-bold text-white">System Requirements</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-card p-5">
            <h3 className="font-display font-bold text-white mb-3">Minimum</h3>
            <ul className="space-y-2 text-sm text-white/65">
              <li>Android 5.0+</li>
              <li>1 GB RAM</li>
              <li>200 MB free storage</li>
              <li>ARM processor</li>
              <li>Roblox installed</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-pink/20 bg-pink/5 p-5">
            <h3 className="font-display font-bold text-white mb-3">Recommended</h3>
            <ul className="space-y-2 text-sm text-white/65">
              <li>Android 8.0+ (Oreo or newer)</li>
              <li>3 GB RAM or more</li>
              <li>500 MB free storage</li>
              <li>ARM64 processor</li>
              <li>Stable internet connection</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Fake APK warnings */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <div className="rounded-2xl border border-red-400/30 bg-red-400/5 p-6">
          <h2 className="mb-3 font-display text-xl font-bold text-red-300">
            ⚠ Fake APKs, Keyless Scams &amp; Play Store Impostors
          </h2>
          <div className="space-y-3 text-sm text-white/65">
            <p>
              <strong className="text-white">Fake APKs:</strong> Third-party Telegram channels,
              YouTube descriptions, and clone sites distribute APKs claiming to be Delta Executor.
              Many contain password stealers or crypto miners. Only download from{" "}
              <strong className="text-white">deltaexecutor.com.ph</strong>. Read the full{" "}
              <Link href="/blog/is-delta-executor-safe" className="text-pink hover:underline">
                safety guide
              </Link>{" "}
              for how to spot impostors.
            </p>
            <p>
              <strong className="text-white">Keyless scams:</strong> Sites advertising &ldquo;Delta
              Executor Keyless&rdquo; or &ldquo;Delta without key system&rdquo; are either modified
              forks of unknown safety or outright malware. Official Delta requires a 24-hour key —
              any build claiming to bypass this permanently should be treated with extreme caution.
            </p>
            <p>
              <strong className="text-white">Play Store impostors:</strong> Delta Executor is not
              on the official Google Play Store. Any app on the Play Store calling itself
              &ldquo;Delta Executor&rdquo; is an impostor — do not install it.
            </p>
          </div>
        </div>
      </div>

      {/* Play Protect note */}
      <div className="container mx-auto max-w-3xl px-4 pt-6">
        <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/5 p-5">
          <h3 className="font-display font-bold text-yellow-300 mb-2">
            Google Play Protect: false-positive note
          </h3>
          <p className="text-sm text-white/65">
            Google Play Protect flags all APKs not distributed through the Play Store, including legitimate executor tools.
            When you see &ldquo;Play Protect blocked the install,&rdquo; tap{" "}
            <strong className="text-white">Install anyway</strong> — this is not a virus detection.
            For independent verification, scan the APK on VirusTotal before installing. Executor
            APKs typically receive &ldquo;Hacktool&rdquo; detections from generic heuristics — widespread Trojan
            or Spyware detections would indicate a real problem.
          </p>
        </div>
      </div>

      {/* How-to steps */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-2 font-display text-2xl font-bold text-white md:text-3xl">
          How to install Delta Executor on Android
        </h2>
        <p className="mb-8 text-sm text-white/45">
          Complete walkthrough — sideloading, key system, and running your first script
        </p>

        {/* HowTo schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: `How to Install Delta Executor on Android (${APP_VERSION})`,
              description:
                "Step-by-step guide to downloading and sideloading the Delta Executor APK on an Android device.",
              totalTime: "PT10M",
              supply: [
                { "@type": "HowToSupply", name: "Android phone (5.0+)" },
                { "@type": "HowToSupply", name: "Roblox installed" },
              ],
              tool: [
                { "@type": "HowToTool", name: "File manager app" },
                { "@type": "HowToTool", name: "Chrome or Firefox browser" },
              ],
              step: steps.map((s) => ({
                "@type": "HowToStep",
                position: s.n,
                name: s.title,
                text: s.body,
              })),
            }),
          }}
        />

        <ol className="space-y-4">
          {steps.map((s) => (
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
        <p className="mt-6 text-sm text-white/55">
          After install:{" "}
          <Link href="/blog/how-to-get-delta-executor-key" className="text-pink hover:underline">
            get your Delta key
          </Link>
          , then follow{" "}
          <Link href="/how-to-use-delta-executor" className="text-pink hover:underline">
            how to use Delta Executor
          </Link>
          . Stuck on unlock? See{" "}
          <Link href="/blog/delta-executor-key-not-working" className="text-pink hover:underline">
            key not working
          </Link>
          . New to Delta? Start with{" "}
          <Link href="/blog/what-is-delta-executor" className="text-pink hover:underline">
            what is Delta Executor
          </Link>
          .
        </p>
      </div>

      {/* Safe-install checklist */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-4 font-display text-2xl font-bold text-white">Safe-install checklist</h2>
        <ul className="space-y-2 text-sm text-white/65">
          {[
            "Only download from deltaexecutor.com.ph — never from random Telegram channels or YouTube links.",
            "The APK filename should match the current version (e.g. Delta-2.745.1142.apk).",
            "If a site asks you to fill out a survey before showing a download button, leave — that's not us.",
            "Delta Executor does not require Device Administrator privileges. If prompted, decline that request.",
            "If you prefer tighter security, re-disable 'Unknown sources' after installation.",
            "When in doubt, scan the APK on VirusTotal before installing — a few 'Hacktool' detections are normal; widespread Trojan detections are not.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-0.5 text-pink" aria-hidden="true">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Feature image */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <div className="brand-shot-frame">
          <Image
            src={BRAND_HERO}
            alt="Delta Executor interface overview on Android"
            width={280}
            height={455}
            sizes="220px"
            className="brand-shot"
          />
        </div>
        <p className="mt-3 text-center text-xs text-white/35">
          Delta Executor {APP_VERSION} — script hub UI on Android
        </p>
      </div>

      {/* FAQ */}
      <div className="container mx-auto max-w-3xl px-4 pb-14">
        <FaqSection
          title="Download FAQ"
          items={faqItems}
        />
        <RelatedGuides links={[...RELATED_PRESETS.download]} />
      </div>
    </>
  );
}
