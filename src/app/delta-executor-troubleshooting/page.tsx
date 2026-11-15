import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaButton from "@/components/CtaButton";
import FaqSection from "@/components/FaqSection";
import RelatedGuides, { RELATED_PRESETS } from "@/components/RelatedGuides";
import {
  BRAND_HERO,
  OG_IMAGE,
  SITE_NAME,
  SITE_ORIGIN,
  APP_VERSION,
  STYLES_UPDATED,
  ANDROID_APK_URL,
} from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Delta Executor Troubleshooting Guide — Fix Common Issues (${APP_VERSION})`,
  description:
    "Fix Delta Executor injection failures, key errors, crashes, overlay issues, and 'Script Hub not loading' problems. Covers Android, iOS, and emulator-based PC setups. Updated November 2026.",
  alternates: { canonical: `${SITE_ORIGIN}/delta-executor-troubleshooting` },
  openGraph: {
    title: `Delta Executor Troubleshooting — ${SITE_NAME}`,
    description: "Fix Delta Executor injection failures, key errors, crashes, and more.",
    url: `${SITE_ORIGIN}/delta-executor-troubleshooting`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Delta Executor troubleshooting` }],
  },
};

const issues = [
  {
    id: "injection-failed",
    title: "Injection Failed / Not Injecting",
    causes: [
      "Tried to inject during the loading screen before the game world appeared.",
      "Roblox received a silent update that broke injection compatibility.",
      "Delta Executor is running an outdated version.",
      "Overlay permission ('Draw over other apps') was revoked.",
    ],
    fixes: [
      "Wait until you are fully inside the game world, then tap Connect.",
      "Check the Delta Discord for a newer APK version — injection breaks after every Roblox update.",
      `Update Delta Executor to ${APP_VERSION} from the official download page.`,
      "Go to Settings → Apps → Special app access → Appear on top → enable Delta.",
    ],
  },
  {
    id: "invalid-key",
    title: "Invalid Key / Key Not Working",
    causes: [
      "Key expired — keys are valid for 24 hours from generation.",
      "Key is device-bound; you generated it on a different device.",
      "Partial copy — only copied part of the key string.",
      "Using an old Delta version with a different key format.",
    ],
    fixes: [
      "Generate a fresh key by tapping 'Get Key' in Delta Executor.",
      "Always generate the key on the device you will use it on.",
      "Select all, copy, then paste the full key — including the first and last characters.",
      `Update to ${APP_VERSION}; older versions may reject newer key formats.`,
    ],
  },
  {
    id: "app-crash",
    title: "Delta Executor Crashes or Closes",
    causes: [
      "RAM pressure — running too many apps alongside Roblox and Delta.",
      "Roblox and Delta version mismatch after a Roblox patch.",
      "Corrupted installation.",
    ],
    fixes: [
      "Close background apps before launching Roblox and Delta.",
      "Check the Discord for a compatibility update and install it.",
      "Uninstall Delta Executor completely, then reinstall the latest APK from the download page.",
    ],
  },
  {
    id: "script-hub-blank",
    title: "Script Hub Not Loading / Showing Blank",
    causes: [
      "Slow or unstable internet connection during catalog fetch.",
      "Outdated Delta version with an incompatible API endpoint.",
      "Injection not fully completed before opening Script Hub.",
    ],
    fixes: [
      "Switch to a stable Wi-Fi connection and pull-to-refresh in Script Hub.",
      `Update to ${APP_VERSION}.`,
      "Confirm the injection status is green before opening Script Hub.",
    ],
  },
  {
    id: "overlay-not-visible",
    title: "Delta Overlay Not Showing In-Game",
    causes: [
      "'Draw over other apps' permission was denied or revoked.",
      "Roblox received an update that changed its window layer.",
    ],
    fixes: [
      "Settings → Apps → Special app access → Appear on top → enable Delta Executor.",
      "Check for a Delta update that addresses the new Roblox window behavior.",
    ],
  },
  {
    id: "play-protect-block",
    title: "Google Play Protect Blocking Installation",
    causes: [
      "Google Play Protect flags all APKs not from the Play Store — this is expected.",
    ],
    fixes: [
      "On the Play Protect warning screen, tap 'Install anyway.' This is not a virus detection.",
      "If you want additional confidence, scan the APK on VirusTotal before installing. A few 'Hacktool' detections are normal.",
    ],
  },
];

const faqItems = [
  {
    question: "Delta Executor worked yesterday but not today — what happened?",
    answer:
      "Roblox pushes silent client updates that can break executor injection compatibility. This is the most common reason Delta stops working overnight. The fix is almost always to wait for and install an updated Delta APK. Check the Discord announcement channel for new builds.",
  },
  {
    question: "How do I do a clean reinstall of Delta Executor?",
    answer:
      "Go to Settings → Apps → Delta Executor → Uninstall. Then download the latest APK from the download page and reinstall. Note: a clean reinstall removes your saved Library scripts — back up your .lua files first if needed.",
  },
  {
    question: "Delta connects but my script doesn't execute — what's wrong?",
    answer:
      "First confirm injection status is green (not just 'connected'). Then check that the script targets the game you are in — most scripts are game-specific. If the script previously worked, the game may have been updated and the script is now outdated.",
  },
  {
    question: "Key gateway is in an infinite redirect loop — what do I do?",
    answer:
      "Open the key URL in your phone's native browser (Chrome or Safari) rather than Delta's in-app browser. Disable VPN and ad-blocker temporarily. Complete each checkpoint in one continuous flow without refreshing mid-step.",
  },
  {
    question: "I see 'Error 403' or 'Server error' in Delta — is the server down?",
    answer:
      "Occasional server errors happen. Wait 10–15 minutes and try again. If the issue persists beyond an hour, check the Delta Discord status channel for server maintenance announcements.",
  },
  {
    question: "Delta works on Android but not in the PC emulator — why?",
    answer:
      "Emulators expose a different device fingerprint. The key you generated on your phone won't work in the emulator — generate a fresh key inside the emulator. Also ensure Roblox is fully loaded inside the emulator before injecting.",
  },
];

export default function TroubleshootingPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Troubleshooting" }]}
      />

      {/* Hero */}
      <div className="container mx-auto max-w-6xl px-4 pb-4 pt-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          <div className="flex-1">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-pink/80">
              Troubleshooting · {APP_VERSION} · {STYLES_UPDATED}
            </p>
            <h1 className="font-display text-4xl font-bold text-white md:text-5xl">
              Delta Executor Troubleshooting
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/65">
              Solutions for the most common Delta Executor problems — injection failures, key errors, crashes, overlay issues, and Script Hub problems.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <CtaButton href={ANDROID_APK_URL} icon="download" size="sm">
                Download Latest APK
              </CtaButton>
              <Link href="/blog/how-to-get-delta-executor-key" className="font-semibold text-pink hover:underline self-center">
                Key system guide →
              </Link>
            </div>
          </div>
          <div className="brand-shot-frame brand-shot-frame--side shrink-0">
            <Image
              src={BRAND_HERO}
              alt="Delta Executor troubleshooting"
              width={280}
              height={455}
              sizes="220px"
              className="brand-shot"
              priority
            />
          </div>
        </div>
      </div>

      {/* Issue cards */}
      <div className="container mx-auto max-w-3xl px-4 pt-10 space-y-6">
        <h2 className="font-display text-2xl font-bold text-white">Common Issues &amp; Fixes</h2>
        {issues.map((issue) => (
          <div key={issue.id} id={issue.id} className="rounded-2xl border border-white/10 bg-card p-6">
            <h3 className="mb-4 font-display text-lg font-bold text-white">{issue.title}</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/40">Likely Causes</p>
                <ul className="space-y-1.5 text-sm text-white/65">
                  {issue.causes.map((c) => (
                    <li key={c} className="flex items-start gap-2">
                      <span className="mt-0.5 text-red-400" aria-hidden="true">×</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/40">Fixes</p>
                <ul className="space-y-1.5 text-sm text-white/65">
                  {issue.fixes.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-0.5 text-pink" aria-hidden="true">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <div className="container mx-auto max-w-3xl px-4 pb-14">
        <FaqSection title="Troubleshooting FAQ" items={faqItems} />
        <RelatedGuides links={[...RELATED_PRESETS.troubleshooting]} />
      </div>
    </>
  );
}
