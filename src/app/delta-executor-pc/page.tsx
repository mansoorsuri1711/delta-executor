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
  title: `Delta Executor on PC — Run Android APK via Emulator (${APP_VERSION}, November 2026)`,
  description:
    "How to use Delta Executor on Windows PC in 2026: run the Android APK inside MuMu Player or BlueStacks, avoid fake Windows EXE files, and optimize emulator settings for Roblox. Honest guide — no fake native EXE.",
  alternates: { canonical: `${SITE_ORIGIN}/delta-executor-pc` },
  openGraph: {
    title: `Delta Executor for PC — ${SITE_NAME}`,
    description: `Use Delta Executor on Windows via Android emulator. ${APP_VERSION}, ${STYLES_UPDATED}.`,
    url: `${SITE_ORIGIN}/delta-executor-pc`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Delta Executor PC guide` }],
  },
};

const pcSteps = [
  {
    n: 1,
    title: "Download and install MuMu Player or BlueStacks",
    body: "Head to mumuplayer.com or bluestacks.com and download the latest installer for Windows. MuMu Player 12 is lighter and generally preferred for Roblox. BlueStacks 5 is also a solid choice. Run the installer and complete setup — no special configuration needed at this stage.",
  },
  {
    n: 2,
    title: "Configure emulator settings for Roblox",
    body: "Open the emulator settings. Set Performance to High Performance, allocate at least 4 GB RAM and 4 CPU cores if your PC allows, and set the display resolution to 1280×720 or higher. Enable 'Enable high frame rate' if the option is present. These settings reduce Roblox lag inside the emulator.",
  },
  {
    n: 3,
    title: "Install Roblox inside the emulator",
    body: "Open the Google Play Store inside the emulator, sign in with a Google account (use a burner — not your personal account), search for Roblox, and install it. Launch Roblox at least once to ensure it runs correctly before adding Delta.",
  },
  {
    n: 4,
    title: "Download the official Delta Executor APK",
    body: `Inside the emulator's browser (or by dragging the file from your Windows desktop into the emulator window), download the official Delta Executor ${APP_VERSION} APK from this page. Confirm the filename: it should end in .apk and match the current version.`,
  },
  {
    n: 5,
    title: "Install the Delta APK inside the emulator",
    body: "In MuMu Player, open the shared folder or drag the APK into the emulator window. Tap the APK to install it. In BlueStacks, drag and drop the APK file directly onto the running emulator window — it will install automatically. Grant overlay and storage permissions when prompted.",
  },
  {
    n: 6,
    title: "Complete the key system",
    body: "Open Delta Executor inside the emulator. Tap Get Key, complete the Linkvertise or Loot-Link checkpoint flow in the emulator's browser, copy the key, paste it into Delta, and tap Connect. See our key system guide for detailed tips.",
  },
  {
    n: 7,
    title: "Open Roblox and inject",
    body: "Launch Roblox inside the emulator, join a game, switch to Delta Executor, tap Connect, wait for the green Injected status, then paste or load your script and tap Execute.",
  },
];

const faqItems = [
  {
    question: "Is there a native Windows EXE for Delta Executor?",
    answer:
      "There is no officially trusted native Windows EXE build of Delta Executor. Sites distributing a 'Delta Executor for Windows' EXE are either fake, distributing modified forks, or outright malware. Many fake EXEs instruct you to disable antivirus before running — a major red flag. The safe, supported path for PC is the Android APK inside an emulator like MuMu Player or BlueStacks.",
  },
  {
    question: "Why do fake Delta EXE files ask me to disable my antivirus?",
    answer:
      "Legitimate software does not need you to disable your antivirus. This is a classic social engineering tactic used by malware distributors. If any 'Delta Executor' installer asks you to disable Windows Defender or any other security tool, do not proceed — delete the file immediately.",
  },
  {
    question: "Which emulator is best for Delta Executor on PC?",
    answer:
      "MuMu Player 12 (Android 12 based) performs best for Roblox in 2026 and has the lowest overhead. BlueStacks 5 is a close second. LDPlayer 9 also works. Avoid Nox Player — it has had a history of bundled adware. All emulators run the same Delta Android APK.",
  },
  {
    question: "Does the emulator method require a powerful PC?",
    answer:
      "A modern mid-range PC (Intel i5 / AMD Ryzen 5, 8 GB RAM, integrated or discrete GPU) handles Roblox inside MuMu Player smoothly. Older hardware (4 GB RAM, dual-core CPU) will struggle. Virtualization (Intel VT-x or AMD-V) must be enabled in BIOS/UEFI for best performance.",
  },
  {
    question: "Do I need a separate Roblox account for the emulator?",
    answer:
      "Using your main account inside an emulator with a script executor attached is higher risk than using it on mobile. It's recommended to use a secondary Roblox account for PC emulator testing.",
  },
  {
    question: "Does the same Delta key work in the emulator as on my phone?",
    answer:
      "No. Delta keys are device-bound. The emulator registers as a different device from your phone, so you need to generate a new key inside the emulator separately.",
  },
  {
    question: "Can I use Delta Executor on a Chromebook?",
    answer:
      "Some Chromebooks support running Android apps natively via the Play Store — in that case, install Delta as you would on any Android device. For x86 Chromebooks that don't support Android apps natively, an x86 Android emulator can work but performance varies significantly.",
  },
];

export default function PcPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "PC Guide" }]}
      />

      {/* Warning banner */}
      <div className="container mx-auto max-w-6xl px-4 pt-6">
        <div className="rounded-2xl border border-red-400/30 bg-red-400/5 p-5">
          <p className="text-sm text-white/80">
            <strong className="text-red-300">⚠ Fake Windows EXE Warning:</strong>{" "}
            There is no trusted native Delta Executor EXE for Windows. Any site offering one is likely distributing malware — especially if it asks you to disable antivirus first.{" "}
            <strong className="text-white">The only safe PC method is the Android APK inside an emulator.</strong>
          </p>
        </div>
      </div>

      {/* Hero */}
      <div className="container mx-auto max-w-6xl px-4 pb-4 pt-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          <div className="flex-1">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-pink/80">
              PC · Android Emulator · {APP_VERSION} · {STYLES_UPDATED}
            </p>
            <h1 className="font-display text-4xl font-bold text-white md:text-5xl">
              Delta Executor on PC
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/65">
              Run Delta Executor on your Windows PC by installing the official Android APK inside MuMu Player or BlueStacks. This is the only safe and supported path — there is no trusted native Windows EXE.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <CtaButton href={ANDROID_APK_URL} icon="download">
                Download Android APK {APP_VERSION}
              </CtaButton>
              <Link href="/download-delta-executor" className="font-semibold text-pink hover:underline self-center">
                Full Android guide →
              </Link>
            </div>
            <p className="mt-3 text-xs text-white/35">
              Script executors violate Roblox&apos;s ToS and may result in bans. Use at your own risk.
            </p>
          </div>
          <div className="brand-shot-frame brand-shot-frame--side shrink-0">
            <Image
              src={BRAND_FEATURE_2}
              alt="Delta Executor Android APK running inside emulator"
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
        <h2 className="mb-4 font-display text-2xl font-bold text-white">Recommended Emulators</h2>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-sm text-white/70">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.04] text-left text-xs uppercase tracking-wider text-white/40">
                <th className="px-4 py-3">Emulator</th>
                <th className="px-4 py-3">Android Version</th>
                <th className="px-4 py-3">Performance</th>
                <th className="px-4 py-3">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                ["MuMu Player 12", "Android 12", "⭐⭐⭐⭐⭐", "Best for Roblox in 2026"],
                ["BlueStacks 5", "Android 9", "⭐⭐⭐⭐", "Drag-and-drop APK install"],
                ["LDPlayer 9", "Android 9", "⭐⭐⭐⭐", "Good alternative"],
                ["Nox Player", "Android 7", "⭐⭐⭐", "Avoid — history of bundled adware"],
              ].map(([name, android, perf, notes]) => (
                <tr key={name as string}>
                  <td className="px-4 py-3 font-semibold text-white">{name}</td>
                  <td className="px-4 py-3">{android}</td>
                  <td className="px-4 py-3">{perf}</td>
                  <td className="px-4 py-3 text-white/50">{notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* PC Requirements */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-4 font-display text-2xl font-bold text-white">PC Requirements</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-card p-5">
            <h3 className="font-display font-bold text-white mb-3">Minimum</h3>
            <ul className="space-y-2 text-sm text-white/65">
              <li>Windows 10 (64-bit)</li>
              <li>Intel i3 / AMD Ryzen 3</li>
              <li>4 GB RAM</li>
              <li>5 GB free storage</li>
              <li>Virtualization enabled (VT-x / AMD-V)</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-pink/20 bg-pink/5 p-5">
            <h3 className="font-display font-bold text-white mb-3">Recommended</h3>
            <ul className="space-y-2 text-sm text-white/65">
              <li>Windows 10/11 (64-bit)</li>
              <li>Intel i5 / AMD Ryzen 5 or better</li>
              <li>8 GB RAM or more</li>
              <li>10 GB free storage (SSD preferred)</li>
              <li>Discrete GPU (optional but helpful)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Steps */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-2 font-display text-2xl font-bold text-white md:text-3xl">
          How to use Delta Executor on PC
        </h2>
        <p className="mb-8 text-sm text-white/45">Step-by-step — MuMu Player or BlueStacks emulator method</p>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: `How to Use Delta Executor on PC via Android Emulator (${APP_VERSION})`,
              description:
                "Run Delta Executor on Windows PC by installing the Android APK inside MuMu Player or BlueStacks.",
              totalTime: "PT25M",
              step: pcSteps.map((s) => ({
                "@type": "HowToStep",
                position: s.n,
                name: s.title,
                text: s.body,
              })),
            }),
          }}
        />

        <ol className="space-y-4">
          {pcSteps.map((s) => (
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

      {/* Feature image */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <div className="brand-shot-frame">
          <Image
            src={BRAND_HERO}
            alt="Delta Executor UI overview"
            width={280}
            height={455}
            sizes="220px"
            className="brand-shot"
          />
        </div>
      </div>

      {/* FAQ */}
      <div className="container mx-auto max-w-3xl px-4 pb-14">
        <FaqSection title="PC FAQ" items={faqItems} />
        <RelatedGuides links={[...RELATED_PRESETS.pc]} />
      </div>
    </>
  );
}
