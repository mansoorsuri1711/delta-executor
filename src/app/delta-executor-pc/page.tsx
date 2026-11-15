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
  title: `Delta Executor sa PC — Android APK sa Emulator (${APP_VERSION}, Nobyembre 2026)`,
  description:
    "Paano gamitin ang Delta Executor sa Windows PC sa 2026: patakbuhin ang Android APK sa MuMu Player o BlueStacks, iwasan ang pekeng Windows EXE, at i-optimize ang emulator para sa Roblox. Tapat na gabay — walang pekeng native EXE.",
  alternates: { canonical: `${SITE_ORIGIN}/delta-executor-pc` },
  openGraph: {
    title: `Delta Executor para sa PC — ${SITE_NAME}`,
    description: `Gamitin ang Delta Executor sa Windows via Android emulator. ${APP_VERSION}, ${STYLES_UPDATED}.`,
    url: `${SITE_ORIGIN}/delta-executor-pc`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Gabay sa Delta Executor PC` }],
  },
};

const pcSteps = [
  {
    n: 1,
    title: "I-download at i-install ang MuMu Player o BlueStacks",
    body: "Pumunta sa mumuplayer.com o bluestacks.com at i-download ang pinakabagong installer para sa Windows. Mas magaan ang MuMu Player 12 at karaniwang mas gusto para sa Roblox. Solid choice din ang BlueStacks 5. Patakbuhin ang installer at tapusin ang setup — walang espesyal na configuration sa stage na ito.",
  },
  {
    n: 2,
    title: "I-configure ang emulator settings para sa Roblox",
    body: "Buksan ang emulator settings. Itakda ang Performance sa High Performance, maglaan ng hindi bababa sa 4 GB RAM at 4 CPU cores kung kaya ng PC mo, at itakda ang display resolution sa 1280×720 o mas mataas. I-enable ang 'Enable high frame rate' kung available. Binabawasan ng mga setting na ito ang lag ng Roblox sa loob ng emulator.",
  },
  {
    n: 3,
    title: "I-install ang Roblox sa loob ng emulator",
    body: "Buksan ang Google Play Store sa loob ng emulator, mag-sign in gamit ang Google account (burner account — hindi personal), maghanap ng Roblox, at i-install. I-launch ang Roblox nang hindi bababa sa isang beses para siguraduhing tumatakbo bago idagdag ang Delta.",
  },
  {
    n: 4,
    title: "I-download ang opisyal na Delta Executor APK",
    body: `Sa browser ng emulator (o sa pamamagitan ng pag-drag ng file mula sa Windows desktop papasok sa emulator window), i-download ang opisyal na Delta Executor ${APP_VERSION} APK mula sa pahinang ito. Kumpirmahin ang filename: dapat nagtatapos sa .apk at tumugma sa kasalukuyang version.`,
  },
  {
    n: 5,
    title: "I-install ang Delta APK sa loob ng emulator",
    body: "Sa MuMu Player, buksan ang shared folder o i-drag ang APK sa emulator window. I-tap ang APK para mag-install. Sa BlueStacks, i-drag and drop ang APK file direkta sa running emulator window — awtomatikong mag-i-install. Ibigay ang overlay at storage permissions kapag hiningi.",
  },
  {
    n: 6,
    title: "Kumpletuhin ang key system",
    body: "Buksan ang Delta Executor sa loob ng emulator. I-tap ang Get Key, tapusin ang Linkvertise o Loot-Link checkpoint flow sa browser ng emulator, kopyahin ang key, i-paste sa Delta, at i-tap ang Connect. Tingnan ang key system guide namin para sa detalyadong tips.",
  },
  {
    n: 7,
    title: "Buksan ang Roblox at mag-inject",
    body: "I-launch ang Roblox sa loob ng emulator, sumali sa laro, lumipat sa Delta Executor, i-tap ang Connect, hintaying maging berde ang Injected status, saka i-paste o i-load ang script at i-tap ang Execute.",
  },
];

const faqItems = [
  {
    question: "May native Windows EXE ba para sa Delta Executor?",
    answer:
      "Walang opisyal at pinagkakatiwalaang native Windows EXE build ng Delta Executor. Ang mga site na nagpapakalat ng 'Delta Executor for Windows' EXE ay peke, modified forks, o outright malware. Maraming pekeng EXE ang nag-uutos na i-disable ang antivirus bago mag-run — malaking red flag iyon. Ang ligtas at suportadong paraan sa PC ay Android APK sa loob ng emulator tulad ng MuMu Player o BlueStacks.",
  },
  {
    question: "Bakit hinihiling ng pekeng Delta EXE na i-disable ang antivirus ko?",
    answer:
      "Hindi kailangan ng lehitimong software na i-disable ang antivirus. Classic social engineering tactic ito ng malware distributors. Kung humihingi ang anumang 'Delta Executor' installer na i-disable ang Windows Defender o iba pang security tool, huwag magpatuloy — burahin agad ang file.",
  },
  {
    question: "Aling emulator ang pinakamahusay para sa Delta Executor sa PC?",
    answer:
      "Pinakamahusay ang performance ng MuMu Player 12 (Android 12 based) para sa Roblox sa 2026 at pinakamababang overhead. Malapit na pangalawa ang BlueStacks 5. Gumagana rin ang LDPlayer 9. Iwasan ang Nox Player — may kasaysayan ng bundled adware. Parehong Delta Android APK ang tumatakbo sa lahat ng emulator.",
  },
  {
    question: "Kailangan ba ng malakas na PC ang emulator method?",
    answer:
      "Smooth na pinapatakbo ng modern mid-range PC (Intel i5 / AMD Ryzen 5, 8 GB RAM, integrated o discrete GPU) ang Roblox sa MuMu Player. Mahihirapan ang lumang hardware (4 GB RAM, dual-core CPU). Dapat naka-enable ang virtualization (Intel VT-x o AMD-V) sa BIOS/UEFI para sa pinakamahusay na performance.",
  },
  {
    question: "Kailangan ba ng hiwalay na Roblox account para sa emulator?",
    answer:
      "Mas mataas ang panganib kapag ginagamit ang main account sa emulator na may script executor kaysa sa mobile. Inirerekomenda ang secondary Roblox account para sa PC emulator testing.",
  },
  {
    question: "Gumagana ba ang parehong Delta key sa emulator at sa phone ko?",
    answer:
      "Hindi. Device-bound ang Delta keys. Iba ang device fingerprint ng emulator kaysa sa phone mo, kaya kailangan mong gumawa ng bagong key sa loob ng emulator nang hiwalay.",
  },
  {
    question: "Maaari bang gamitin ang Delta Executor sa Chromebook?",
    answer:
      "May mga Chromebook na sumusuporta sa native Android apps via Play Store — sa kasong iyon, i-install ang Delta tulad sa anumang Android device. Para sa x86 Chromebook na walang native Android apps, maaaring gumana ang x86 Android emulator pero malaki ang pagkakaiba ng performance.",
  },
];

export default function PcPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Gabay sa PC" }]}
      />

      {/* Warning banner */}
      <div className="container mx-auto max-w-6xl px-4 pt-6">
        <div className="rounded-2xl border border-red-400/30 bg-red-400/5 p-5">
          <p className="text-sm text-white/80">
            <strong className="text-red-300">⚠ Babala sa Pekeng Windows EXE:</strong>{" "}
            Walang pinagkakatiwalaang native Delta Executor EXE para sa Windows. Malamang malware ang anumang site na nag-aalok nito — lalo na kung humihingi munang i-disable ang antivirus.{" "}
            <strong className="text-white">Ang tanging ligtas na paraan sa PC ay Android APK sa loob ng emulator.</strong>
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
              Delta Executor sa PC
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/65">
              Patakbuhin ang Delta Executor sa Windows PC sa pamamagitan ng pag-install ng opisyal na Android APK sa MuMu Player o BlueStacks. Ito lang ang ligtas at suportadong paraan — walang pinagkakatiwalaang native Windows EXE.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <CtaButton href={ANDROID_APK_URL} icon="download">
                I-download ang Android APK {APP_VERSION}
              </CtaButton>
              <Link href="/download-delta-executor" className="font-semibold text-pink hover:underline self-center">
                Buong gabay sa Android →
              </Link>
            </div>
            <p className="mt-3 text-xs text-white/35">
              Lumalabag ang script executors sa ToS ng Roblox at maaaring magresulta sa ban. Gamitin sa sarili mong panganib.
            </p>
          </div>
          <div className="brand-shot-frame brand-shot-frame--side shrink-0">
            <Image
              src={BRAND_FEATURE_2}
              alt="Delta Executor Android APK na tumatakbo sa loob ng emulator"
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
        <h2 className="mb-4 font-display text-2xl font-bold text-white">Inirerekomendang Emulator</h2>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-sm text-white/70">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.04] text-left text-xs uppercase tracking-wider text-white/40">
                <th className="px-4 py-3">Emulator</th>
                <th className="px-4 py-3">Android Version</th>
                <th className="px-4 py-3">Performance</th>
                <th className="px-4 py-3">Mga Tala</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                ["MuMu Player 12", "Android 12", "⭐⭐⭐⭐⭐", "Pinakamahusay para sa Roblox sa 2026"],
                ["BlueStacks 5", "Android 9", "⭐⭐⭐⭐", "Drag-and-drop na APK install"],
                ["LDPlayer 9", "Android 9", "⭐⭐⭐⭐", "Magandang alternatibo"],
                ["Nox Player", "Android 7", "⭐⭐⭐", "Iwasan — may kasaysayan ng bundled adware"],
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
        <h2 className="mb-4 font-display text-2xl font-bold text-white">Mga Kailangan sa PC</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-card p-5">
            <h3 className="font-display font-bold text-white mb-3">Minimum</h3>
            <ul className="space-y-2 text-sm text-white/65">
              <li>Windows 10 (64-bit)</li>
              <li>Intel i3 / AMD Ryzen 3</li>
              <li>4 GB RAM</li>
              <li>5 GB libreng storage</li>
              <li>Naka-enable ang virtualization (VT-x / AMD-V)</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-pink/20 bg-pink/5 p-5">
            <h3 className="font-display font-bold text-white mb-3">Inirerekomenda</h3>
            <ul className="space-y-2 text-sm text-white/65">
              <li>Windows 10/11 (64-bit)</li>
              <li>Intel i5 / AMD Ryzen 5 o mas mahusay</li>
              <li>8 GB RAM o higit pa</li>
              <li>10 GB libreng storage (mas gusto ang SSD)</li>
              <li>Discrete GPU (opsyonal pero nakakatulong)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Steps */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-2 font-display text-2xl font-bold text-white md:text-3xl">
          Paano gamitin ang Delta Executor sa PC
        </h2>
        <p className="mb-8 text-sm text-white/45">Step-by-step — MuMu Player o BlueStacks emulator method</p>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: `Paano Gamitin ang Delta Executor sa PC via Android Emulator (${APP_VERSION})`,
              description:
                "Patakbuhin ang Delta Executor sa Windows PC sa pamamagitan ng pag-install ng Android APK sa MuMu Player o BlueStacks.",
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
            alt="Pangkalahatang-ideya ng UI ng Delta Executor"
            width={280}
            height={455}
            sizes="220px"
            className="brand-shot"
          />
        </div>
      </div>

      {/* FAQ */}
      <div className="container mx-auto max-w-3xl px-4 pb-14">
        <FaqSection title="FAQ sa PC" items={faqItems} />
        <RelatedGuides links={[...RELATED_PRESETS.pc]} />
      </div>
    </>
  );
}