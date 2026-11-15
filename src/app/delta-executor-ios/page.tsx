import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaButton from "@/components/CtaButton";
import FaqSection from "@/components/FaqSection";
import RelatedGuides, { RELATED_PRESETS } from "@/components/RelatedGuides";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import {
  BRAND_FEATURE_3,
  OG_IMAGE,
  SITE_NAME,
  SITE_ORIGIN,
  APP_VERSION,
  STYLES_UPDATED,
  ANDROID_APK_URL,
  YOUTUBE_VIDEOS,
} from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Delta Executor iOS — iPhone & iPad Install Guide (${APP_VERSION}, November 2026)`,
  description:
    "How to install Delta Executor on iPhone and iPad without a computer. Covers Direct Install, AltStore sideloading, TrollStore, Delta iOS Premium, certificate validity, the key system, and iOS 17/18 compatibility notes.",
  alternates: { canonical: `${SITE_ORIGIN}/delta-executor-ios` },
  openGraph: {
    title: `Delta Executor for iOS — ${SITE_NAME}`,
    description: `iPhone and iPad install guide for Delta Executor ${APP_VERSION}, ${STYLES_UPDATED}.`,
    url: `${SITE_ORIGIN}/delta-executor-ios`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Delta Executor iOS guide` }],
  },
};

const iosSteps = [
  {
    n: 1,
    title: "Check your iOS version",
    body: "Delta Executor for iOS is tested on iOS 15.0 through iOS 18.x. Open Settings → General → About and verify your version. Devices on iOS 14 or older may not work reliably.",
  },
  {
    n: 2,
    title: "Choose your sideloading method",
    body: "Three supported paths: (A) Direct Install (OTA) — fastest, no PC needed, but the enterprise certificate may be revoked within days; (B) AltStore — works on all iOS versions, requires a free Apple ID and a PC for initial setup; (C) TrollStore — no re-signing ever needed, but only works on specific firmware versions (check TrollStore's compatibility list).",
  },
  {
    n: 3,
    title: "Direct Install method (no PC)",
    body: "Open Safari on your iPhone and navigate to this page. Tap the iOS install button. iOS will prompt 'Allow this website to install a configuration profile?' — tap Allow. Go to Settings → General → VPN & Device Management, find the Delta Executor profile, and tap Trust. The app installs immediately. Note: enterprise certificates are periodically revoked by Apple; if the app stops launching with 'App Not Available,' re-install using the same method or switch to AltStore.",
  },
  {
    n: 4,
    title: "AltStore method (most reliable)",
    body: "Download AltStore from altstore.io on your Mac or PC. Connect your iPhone via USB, open iTunes (Windows) or Finder (macOS), and install the AltStore server. Then install AltStore on your phone through AltServer. On your iPhone open Safari and download the Delta Executor IPA from this page. Open AltStore, tap '+' in My Apps, select the IPA, and AltStore signs and installs it using your Apple ID.",
  },
  {
    n: 5,
    title: "TrollStore method (no re-signing)",
    body: "If your device is on a compatible firmware (iOS 14.0–16.6.1 or specific iOS 17.x builds — check TrollStore's GitHub), install TrollStore using the documented method for your firmware. Then download the Delta Executor IPA from this page, open it in TrollStore, and tap Install. No re-signing ever required.",
  },
  {
    n: 6,
    title: "Trust the developer certificate (AltStore / Direct)",
    body: "After sideloading via AltStore or Direct Install, go to Settings → General → VPN & Device Management, find the developer or enterprise entry, and tap Trust. This step is required after each new sideload.",
  },
  {
    n: 7,
    title: "Complete the key and inject",
    body: "Open Delta Executor, tap Get Key, complete the checkpoint steps, paste the key, then open Roblox, join a game, switch back to Delta, and tap Inject.",
  },
];

const faqItems = [
  {
    question: "Does Delta Executor work on iPhone without jailbreak?",
    answer:
      "Yes, through sideloading (Direct Install, AltStore, or TrollStore). No jailbreak is required. TrollStore offers the most permanent install but only works on certain firmwares; AltStore works universally; Direct Install requires no PC but uses an enterprise certificate that Apple may revoke.",
  },
  {
    question: "How often do I need to re-sign the app?",
    answer:
      "With AltStore using a free Apple ID, signatures expire every 7 days. AltStore can auto-renew when your iPhone is on the same Wi-Fi as AltServer. With a paid Apple Developer account the period extends to 365 days. TrollStore users never need to re-sign.",
  },
  {
    question: "Is TrollStore better than AltStore for Delta?",
    answer:
      "TrollStore installs apps permanently without re-signing — more convenient. However it only works on iOS 14.0–16.6.1 and certain 17.x builds. Check TrollStore's GitHub compatibility table before attempting. For devices outside that range, AltStore is the go-to.",
  },
  {
    question: "Can I get banned on iOS just like Android?",
    answer:
      "Yes. Using a script executor on any platform violates Roblox's Terms of Service. iOS provides no extra protection against ban detection. Use an alternate account if your main account matters to you.",
  },
  {
    question: "Why does the app crash after I inject on iOS?",
    answer:
      "This usually means the Roblox version is ahead of the executor's injection target. Wait for a Delta update that supports the latest Roblox iOS build, or check our community channels for a compatible version.",
  },
  {
    question: "What is Delta iOS Premium?",
    answer:
      "Delta iOS Premium is an optional paid tier that replaces the standard 24-hour key system with a persistent subscription-based session token — removing the daily key checkpoint. It's entirely optional; the free version with daily keys works identically for script execution. Premium is a convenience upgrade for users who find the daily renewal cumbersome.",
  },
  {
    question: "How does certificate validity work for Delta iOS?",
    answer:
      "With a free Apple ID via AltStore, the certificate is valid for 7 days. After that the app refuses to launch with 'App No Longer Available.' You need to re-sign using AltStore. With a paid Apple Developer account the period is 365 days. TrollStore users are exempt from this. Direct Install certificates (enterprise) can be revoked by Apple at any time.",
  },
  {
    question: "Can I install Delta on iOS without AltStore or TrollStore?",
    answer:
      "Yes — the Direct Install (OTA) method via an enterprise certificate requires no additional tools. But enterprise certificates are periodically revoked by Apple, meaning the app may stop working within days. AltStore or TrollStore are more reliable long-term options.",
  },
  {
    question: "Does Delta iOS work with the VNG Roblox client?",
    answer:
      "VNG Roblox's iOS availability is limited. If you are specifically using the VNG iOS client, the standard Delta iOS IPA targets the global Roblox bundle and injection may fail. Check the download page for VNG iOS compatibility notes or see our VNG guide.",
  },
  {
    question: "Which iOS versions does Delta Executor support in November 2026?",
    answer: `Delta Executor ${APP_VERSION} is tested on iOS 15.0 through iOS 18.x. iOS 16 and 17 devices are the most frequently tested. iOS 14 may work via TrollStore on compatible firmware but is not officially supported. iOS 19 support (if released) will come with a future Delta update.`,
  },
];

export default function IosPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "iOS Guide" }]}
      />

      {/* Hero */}
      <div className="container mx-auto max-w-6xl px-4 pb-4 pt-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          <div className="flex-1">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-pink/80">
              iOS · {APP_VERSION} · {STYLES_UPDATED}
            </p>
            <h1 className="font-display text-4xl font-bold text-white md:text-5xl">
              Delta Executor for iOS
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/65">
              Run Delta Executor on your iPhone or iPad without jailbreaking. Supports iOS 15–18 via AltStore, specific iOS 14–17 firmware via TrollStore, and all versions via Direct Install (enterprise certificate).
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <CtaButton href={ANDROID_APK_URL} icon="download">
                Prefer Android APK
              </CtaButton>
              <Link href="/download-delta-executor" className="font-semibold text-pink hover:underline self-center">
                Android download →
              </Link>
            </div>
            <p className="mt-3 text-xs text-white/35">
              Script executors violate Roblox&apos;s ToS. Use on an alternate account at your own risk.
            </p>
          </div>
          <div className="brand-shot-frame brand-shot-frame--side shrink-0">
            <Image
              src={BRAND_FEATURE_3}
              alt="Delta Executor running on iPhone iOS"
              width={280}
              height={455}
              sizes="220px"
              className="brand-shot"
              priority
            />
          </div>
        </div>
      </div>

      {/* Video walkthrough */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-2 font-display text-2xl font-bold text-white">
          iOS install video
        </h2>
        <p className="mb-5 text-sm text-white/55">
          Watch the Delta Executor iOS setup walkthrough, then follow the written steps below for
          Direct Install, AltStore, or TrollStore.
        </p>
        <YouTubeEmbed
          videoId={YOUTUBE_VIDEOS.ios.id}
          title={YOUTUBE_VIDEOS.ios.title}
        />
      </div>

      {/* iOS Premium section */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-4 font-display text-2xl font-bold text-white">
          Delta iOS Premium — what is it?
        </h2>
        <div className="rounded-2xl border border-white/10 bg-card p-6 space-y-3 text-sm text-white/70 leading-relaxed">
          <p>
            Delta iOS Premium is an optional paid subscription that replaces the daily key checkpoint with a persistent session token. If you use Delta on iOS every day and find the key renewal process tedious, Premium removes that friction.
          </p>
          <ul className="ml-4 list-disc space-y-1.5 text-white/65">
            <li>
              <strong className="text-white">What&apos;s included:</strong> No daily key requirement,
              priority support, and (when available) early access to updated builds after Roblox patches.
            </li>
            <li>
              <strong className="text-white">Pricing and coupons:</strong> Pricing changes periodically.
              Discount coupons are occasionally distributed on official Delta social channels.
              Check the current download page for up-to-date pricing.
            </li>
            <li>
              <strong className="text-white">Certificate validity:</strong> Premium does not change the
              sideloading certificate model — with a free Apple ID via AltStore you still need to
              re-sign every 7 days. Premium only affects the key gate, not the IPA signing process.
            </li>
            <li>
              <strong className="text-white">Is it required?</strong> No. The free version with daily
              key renewal works identically for script execution. Premium is a convenience upgrade only.
            </li>
          </ul>
        </div>
      </div>

      {/* Compatibility table */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-4 font-display text-2xl font-bold text-white">iOS Compatibility</h2>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-sm text-white/70">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.04] text-left text-xs uppercase tracking-wider text-white/40">
                <th className="px-4 py-3">Method</th>
                <th className="px-4 py-3">iOS Range</th>
                <th className="px-4 py-3">Re-signing</th>
                <th className="px-4 py-3">PC Needed</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5">
                <td className="px-4 py-3 font-semibold text-white">Direct Install (OTA)</td>
                <td className="px-4 py-3">Any (varies)</td>
                <td className="px-4 py-3">If cert revoked</td>
                <td className="px-4 py-3">No</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="px-4 py-3 font-semibold text-white">AltStore</td>
                <td className="px-4 py-3">15.0 – 18.x</td>
                <td className="px-4 py-3">Every 7 days</td>
                <td className="px-4 py-3">Yes (initial setup)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-white">TrollStore</td>
                <td className="px-4 py-3">14.0 – 16.6.1 + select 17.x</td>
                <td className="px-4 py-3">Never</td>
                <td className="px-4 py-3">No</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Steps */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-2 font-display text-2xl font-bold text-white md:text-3xl">
          Step-by-step iOS install guide
        </h2>
        <p className="mb-8 text-sm text-white/45">All three methods covered — choose the one that fits your device</p>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: `How to Install Delta Executor on iOS (${APP_VERSION})`,
              description:
                "Step-by-step guide to sideloading the Delta Executor IPA on iPhone or iPad using Direct Install, AltStore, or TrollStore.",
              totalTime: "PT20M",
              step: iosSteps.map((s) => ({
                "@type": "HowToStep",
                position: s.n,
                name: s.title,
                text: s.body,
              })),
            }),
          }}
        />

        <ol className="space-y-4">
          {iosSteps.map((s) => (
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

      {/* FAQ */}
      <div className="container mx-auto max-w-3xl px-4 pb-14">
        <FaqSection title="iOS FAQ" items={faqItems} />
        <RelatedGuides links={[...RELATED_PRESETS.ios]} />
      </div>
    </>
  );
}
