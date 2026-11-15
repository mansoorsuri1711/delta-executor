import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaButton from "@/components/CtaButton";
import FaqSection from "@/components/FaqSection";
import RelatedGuides, { RELATED_PRESETS } from "@/components/RelatedGuides";
import {
  BRAND_FEATURE_2,
  OG_IMAGE,
  SITE_NAME,
  SITE_ORIGIN,
  APP_VERSION,
  STYLES_UPDATED,
  ANDROID_APK_URL,
} from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Delta Executor on Mac — Run via Android Emulator on macOS (${APP_VERSION})`,
  description:
    "How to use Delta Executor on a Mac in 2026: run the Android APK inside MuMu Player for Mac or BlueStacks. Covers Intel and Apple Silicon Macs, emulator setup, and performance tips.",
  alternates: { canonical: `${SITE_ORIGIN}/delta-executor-mac` },
  openGraph: {
    title: `Delta Executor for Mac — ${SITE_NAME}`,
    description: `Use Delta Executor on macOS via Android emulator. ${APP_VERSION}, ${STYLES_UPDATED}.`,
    url: `${SITE_ORIGIN}/delta-executor-mac`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Delta Executor Mac guide` }],
  },
};

const macSteps = [
  {
    n: 1,
    title: "Check your Mac architecture",
    body: "Click the Apple menu → About This Mac. If the chip says Apple M1/M2/M3/M4, you have Apple Silicon. If it says Intel Core, you have an Intel Mac. The emulator you pick depends on this.",
  },
  {
    n: 2,
    title: "Download the right emulator",
    body: "For Apple Silicon (M1/M2/M3/M4): MuMu Player for Mac (ARM version) is the most performant option as of 2026. BlueStacks for Mac also supports Apple Silicon. For Intel Macs: BlueStacks 5 for Mac works well; MuMu Player Intel builds are available too. Download from the official vendor site — not third-party mirrors.",
  },
  {
    n: 3,
    title: "Install and configure the emulator",
    body: "Run the downloaded DMG or PKG installer. After launch, open emulator Settings → Engine. Allocate at least 4 GB RAM and 4 CPU cores. Set display resolution to 1280×720 or higher. On Apple Silicon Macs, performance is generally excellent even at lower core counts due to the efficiency of the M-series chips.",
  },
  {
    n: 4,
    title: "Install Roblox inside the emulator",
    body: "Open the Google Play Store inside the emulator (sign in with a burner Google account). Search for Roblox and install it. Launch Roblox at least once to verify it runs before proceeding.",
  },
  {
    n: 5,
    title: "Download the Delta Executor APK",
    body: `On your Mac, download the official Delta Executor ${APP_VERSION} APK from this page. Drag the APK file into the emulator window — most emulators accept APK drag-and-drop for direct install. Alternatively, use the emulator's built-in file manager to navigate to your Downloads folder.`,
  },
  {
    n: 6,
    title: "Complete the key and inject",
    body: "Open Delta Executor inside the emulator. Tap Get Key, complete the key gateway flow in the emulator's browser, paste the key, then open Roblox, join a game, and tap Connect/Inject.",
  },
];

const faqItems = [
  {
    question: "Is there a native macOS app for Delta Executor?",
    answer:
      "No. There is no native macOS application for Delta Executor. The only supported Mac method is running the Android APK inside an Android emulator. Any site offering a Delta Executor .dmg or .app is distributing something unofficial and potentially malicious.",
  },
  {
    question: "Does Delta Executor work on Apple Silicon (M1/M2/M3/M4)?",
    answer:
      "Yes, through MuMu Player for Mac (ARM) or BlueStacks for Mac. Both run the Android APK natively on Apple Silicon. Performance on M-series chips is generally very good — better than older Intel Macs.",
  },
  {
    question: "Which emulator is best for Mac?",
    answer:
      "MuMu Player for Mac is the top choice for Apple Silicon in 2026 due to its native ARM support and low overhead. BlueStacks for Mac is a solid alternative and supports both Intel and Apple Silicon. Both run the same Delta Android APK.",
  },
  {
    question: "Do I need to install anything else before the emulator?",
    answer:
      "On Apple Silicon Macs, Rosetta 2 is not needed if you use an ARM-native emulator. On Intel Macs, no extra dependencies are required beyond the emulator installer. Make sure macOS Gatekeeper doesn't block the emulator — you may need to go to System Settings → Privacy & Security and approve the app.",
  },
  {
    question: "Is the Delta key device-bound on Mac emulator?",
    answer:
      "Yes. The emulator registers as a separate device from your Android phone or any other device. Generate a fresh key inside the Mac emulator and use it only there.",
  },
  {
    question: "Can I also use my iPhone for Delta and sync anything to Mac?",
    answer:
      "Delta Executor iOS and the Android emulator on Mac are independent setups — there is no sync. Scripts you save locally are per-device. You'd need to manually copy .lua files between devices if you want the same scripts on both.",
  },
];

export default function MacPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Mac Guide" }]}
      />

      {/* Hero */}
      <div className="container mx-auto max-w-6xl px-4 pb-4 pt-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          <div className="flex-1">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-pink/80">
              macOS · Android Emulator · {APP_VERSION} · {STYLES_UPDATED}
            </p>
            <h1 className="font-display text-4xl font-bold text-white md:text-5xl">
              Delta Executor on Mac
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/65">
              Run Delta Executor on macOS — both Intel and Apple Silicon — by installing the Android APK inside MuMu Player or BlueStacks. No native .dmg build exists; any site claiming otherwise distributes unofficial software.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <CtaButton href={ANDROID_APK_URL} icon="download">
                Download Android APK {APP_VERSION}
              </CtaButton>
              <Link href="/delta-executor-pc" className="font-semibold text-pink hover:underline self-center">
                Windows PC guide →
              </Link>
            </div>
            <p className="mt-3 text-xs text-white/35">
              Script executors violate Roblox&apos;s ToS. Use at your own risk on a secondary account.
            </p>
          </div>
          <div className="brand-shot-frame brand-shot-frame--side shrink-0">
            <Image
              src={BRAND_FEATURE_2}
              alt="Delta Executor Android APK running in emulator on Mac"
              width={280}
              height={455}
              sizes="220px"
              className="brand-shot"
              priority
            />
          </div>
        </div>
      </div>

      {/* Emulator comparison */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-4 font-display text-2xl font-bold text-white">Emulator Options for Mac</h2>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-sm text-white/70">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.04] text-left text-xs uppercase tracking-wider text-white/40">
                <th className="px-4 py-3">Emulator</th>
                <th className="px-4 py-3">Apple Silicon</th>
                <th className="px-4 py-3">Intel Mac</th>
                <th className="px-4 py-3">Android Version</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                ["MuMu Player for Mac", "✅ Native ARM", "✅ Yes", "Android 12"],
                ["BlueStacks for Mac", "✅ Yes", "✅ Yes", "Android 9"],
                ["LDPlayer for Mac", "⚠ Limited", "✅ Yes", "Android 9"],
              ].map(([name, silicon, intel, android]) => (
                <tr key={name as string}>
                  <td className="px-4 py-3 font-semibold text-white">{name}</td>
                  <td className="px-4 py-3">{silicon}</td>
                  <td className="px-4 py-3">{intel}</td>
                  <td className="px-4 py-3">{android}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Steps */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-2 font-display text-2xl font-bold text-white md:text-3xl">
          Step-by-step Mac guide
        </h2>
        <p className="mb-8 text-sm text-white/45">Works on Intel and Apple Silicon Macs</p>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: `How to Use Delta Executor on Mac via Android Emulator (${APP_VERSION})`,
              description:
                "Run Delta Executor on macOS using MuMu Player or BlueStacks on both Intel and Apple Silicon Macs.",
              totalTime: "PT25M",
              step: macSteps.map((s) => ({
                "@type": "HowToStep",
                position: s.n,
                name: s.title,
                text: s.body,
              })),
            }),
          }}
        />

        <ol className="space-y-4">
          {macSteps.map((s) => (
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
        <FaqSection title="Mac FAQ" items={faqItems} />
        <RelatedGuides links={[...RELATED_PRESETS.mac]} />
      </div>
    </>
  );
}
