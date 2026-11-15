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
  title: `Delta Executor sa Mac — Android Emulator sa macOS (${APP_VERSION})`,
  description:
    "Paano gamitin ang Delta Executor sa Mac sa 2026: patakbuhin ang Android APK sa MuMu Player for Mac o BlueStacks. Intel at Apple Silicon Macs, emulator setup, at performance tips.",
  alternates: { canonical: `${SITE_ORIGIN}/delta-executor-mac` },
  openGraph: {
    title: `Delta Executor para sa Mac — ${SITE_NAME}`,
    description: `Gamitin ang Delta Executor sa macOS via Android emulator. ${APP_VERSION}, ${STYLES_UPDATED}.`,
    url: `${SITE_ORIGIN}/delta-executor-mac`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Gabay sa Delta Executor Mac` }],
  },
};

const macSteps = [
  {
    n: 1,
    title: "I-check ang architecture ng Mac mo",
    body: "I-click ang Apple menu → About This Mac. Kung Apple M1/M2/M3/M4 ang chip, Apple Silicon ang Mac mo. Kung Intel Core, Intel Mac iyon. Sa emulator na pipiliin mo naka-depende ito.",
  },
  {
    n: 2,
    title: "I-download ang tamang emulator",
    body: "Para sa Apple Silicon (M1/M2/M3/M4): Pinakamahusay ang performance ng MuMu Player for Mac (ARM version) hanggang 2026. Sumusuporta rin ang BlueStacks for Mac sa Apple Silicon. Para sa Intel Macs: Mahusay ang BlueStacks 5 for Mac; may MuMu Player Intel builds din. Sa opisyal na vendor site mag-download — hindi sa third-party mirrors.",
  },
  {
    n: 3,
    title: "I-install at i-configure ang emulator",
    body: "Patakbuhin ang na-download na DMG o PKG installer. Pagkatapos mag-launch, buksan ang emulator Settings → Engine. Maglaan ng hindi bababa sa 4 GB RAM at 4 CPU cores. Itakda ang display resolution sa 1280×720 o mas mataas. Sa Apple Silicon Macs, karaniwang napakagaling ng performance kahit mas mababang core count dahil sa efficiency ng M-series chips.",
  },
  {
    n: 4,
    title: "I-install ang Roblox sa loob ng emulator",
    body: "Buksan ang Google Play Store sa loob ng emulator (mag-sign in gamit ang burner Google account). Maghanap ng Roblox at i-install. I-launch ang Roblox nang hindi bababa sa isang beses para i-verify na tumatakbo bago magpatuloy.",
  },
  {
    n: 5,
    title: "I-download ang Delta Executor APK",
    body: `Sa Mac mo, i-download ang opisyal na Delta Executor ${APP_VERSION} APK mula sa pahinang ito. I-drag ang APK file sa emulator window — karamihan ng emulator ay tumatanggap ng APK drag-and-drop para direktang mag-install. O gamitin ang built-in file manager ng emulator para puntahan ang Downloads folder.`,
  },
  {
    n: 6,
    title: "Kumpletuhin ang key at mag-inject",
    body: "Buksan ang Delta Executor sa loob ng emulator. I-tap ang Get Key, tapusin ang key gateway flow sa browser ng emulator, i-paste ang key, buksan ang Roblox, sumali sa laro, at i-tap ang Connect/Inject.",
  },
];

const faqItems = [
  {
    question: "May native macOS app ba para sa Delta Executor?",
    answer:
      "Wala. Walang native macOS application para sa Delta Executor. Ang tanging suportadong paraan sa Mac ay ang Android APK sa loob ng Android emulator. Ang anumang site na nag-aalok ng Delta Executor .dmg o .app ay hindi opisyal at posibleng malicious.",
  },
  {
    question: "Gumagana ba ang Delta Executor sa Apple Silicon (M1/M2/M3/M4)?",
    answer:
      "Oo, sa MuMu Player for Mac (ARM) o BlueStacks for Mac. Parehong tumatakbo ang Android APK nang native sa Apple Silicon. Karaniwang napakaganda ng performance sa M-series chips — mas mahusay kaysa sa lumang Intel Macs.",
  },
  {
    question: "Aling emulator ang pinakamahusay para sa Mac?",
    answer:
      "Pinakamahusay na pagpipilian ang MuMu Player for Mac para sa Apple Silicon sa 2026 dahil sa native ARM support at mababang overhead. Solid na alternatibo ang BlueStacks for Mac at sumusuporta sa Intel at Apple Silicon. Parehong Delta Android APK ang tumatakbo sa pareho.",
  },
  {
    question: "May kailangan bang i-install bago ang emulator?",
    answer:
      "Sa Apple Silicon Macs, hindi kailangan ang Rosetta 2 kung ARM-native emulator ang gamit mo. Sa Intel Macs, walang dagdag na dependencies bukod sa emulator installer. Siguraduhing hindi haharangan ng macOS Gatekeeper ang emulator — maaaring kailanganin mong pumunta sa System Settings → Privacy & Security at i-approve ang app.",
  },
  {
    question: "Device-bound din ba ang Delta key sa Mac emulator?",
    answer:
      "Oo. Iba ang device registration ng emulator kaysa sa Android phone mo o anumang iba pang device. Gumawa ng bagong key sa loob ng Mac emulator at doon lang gamitin.",
  },
  {
    question: "Maaari bang gamitin ang iPhone para sa Delta at i-sync sa Mac?",
    answer:
      "Independent ang Delta Executor iOS at Android emulator sa Mac — walang sync. Per-device ang locally saved scripts. Kailangan mong manual na kopyahin ang .lua files sa pagitan ng devices kung gusto mo ng parehong scripts sa pareho.",
  },
];

export default function MacPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Gabay sa Mac" }]}
      />

      {/* Hero */}
      <div className="container mx-auto max-w-6xl px-4 pb-4 pt-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          <div className="flex-1">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-pink/80">
              macOS · Android Emulator · {APP_VERSION} · {STYLES_UPDATED}
            </p>
            <h1 className="font-display text-4xl font-bold text-white md:text-5xl">
              Delta Executor sa Mac
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/65">
              Patakbuhin ang Delta Executor sa macOS — Intel at Apple Silicon — sa pamamagitan ng pag-install ng Android APK sa MuMu Player o BlueStacks. Walang native .dmg build; ang anumang site na nag-claim niyan ay hindi opisyal na software.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <CtaButton href={ANDROID_APK_URL} icon="download">
                I-download ang Android APK {APP_VERSION}
              </CtaButton>
              <Link href="/delta-executor-pc" className="font-semibold text-pink hover:underline self-center">
                Gabay sa Windows PC →
              </Link>
            </div>
            <p className="mt-3 text-xs text-white/35">
              Lumalabag ang script executors sa ToS ng Roblox. Gamitin sa secondary account sa sarili mong panganib.
            </p>
          </div>
          <div className="brand-shot-frame brand-shot-frame--side shrink-0">
            <Image
              src={BRAND_FEATURE_2}
              alt="Delta Executor Android APK na tumatakbo sa emulator sa Mac"
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
        <h2 className="mb-4 font-display text-2xl font-bold text-white">Mga Opsyon ng Emulator para sa Mac</h2>
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
                ["MuMu Player for Mac", "✅ Native ARM", "✅ Oo", "Android 12"],
                ["BlueStacks for Mac", "✅ Oo", "✅ Oo", "Android 9"],
                ["LDPlayer for Mac", "⚠ Limitado", "✅ Oo", "Android 9"],
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
          Step-by-step na gabay sa Mac
        </h2>
        <p className="mb-8 text-sm text-white/45">Gumagana sa Intel at Apple Silicon Macs</p>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: `Paano Gamitin ang Delta Executor sa Mac via Android Emulator (${APP_VERSION})`,
              description:
                "Patakbuhin ang Delta Executor sa macOS gamit ang MuMu Player o BlueStacks sa Intel at Apple Silicon Macs.",
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
        <FaqSection title="FAQ sa Mac" items={faqItems} />
        <RelatedGuides links={[...RELATED_PRESETS.mac]} />
      </div>
    </>
  );
}