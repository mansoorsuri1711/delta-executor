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
  title: `I-download ang Delta Executor APK ${APP_VERSION} para sa Android (Nobyembre 2026, Pilipinas)`,
  description:
    "Step-by-step na gabay sa pag-download at pag-install ng Delta Executor APK sa Android — para sa mga manlalaro sa Pilipinas. May sideloading, key system, detalye ng APK, system requirements, babala sa pekeng APK, at checklist sa ligtas na install.",
  alternates: { canonical: `${SITE_ORIGIN}/download-delta-executor` },
  openGraph: {
    title: `I-download ang Delta Executor APK — ${SITE_NAME}`,
    description: `Ligtas na gabay sa Android install para sa Delta Executor ${APP_VERSION}, ${STYLES_UPDATED}.`,
    url: `${SITE_ORIGIN}/download-delta-executor`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Gabay sa download ng ${SITE_NAME}` }],
  },
};

const steps = [
  {
    n: 1,
    title: "I-back up muna ang Roblox account mo",
    body: "Bago mag-install ng third-party tool, i-enable ang two-factor authentication sa Roblox account mo at itabi ang recovery codes. Hindi ito eksklusibo sa Delta — basic na seguridad lang ito.",
  },
  {
    n: 2,
    title: "Payagan ang install mula sa unknown sources",
    body: "Sa Android 8+, pumunta sa Settings → Apps → Special app access → Install unknown apps, tapos i-enable ang permission para sa browser o file manager mo. Sa mas lumang Android, isang toggle sa Security ang sakop para sa lahat ng source.",
  },
  {
    n: 3,
    title: "I-download ang Delta Executor APK",
    body: `I-tap ang download button sa pahinang ito para makuha ang opisyal na Delta Executor ${APP_VERSION} APK (${STYLES_UPDATED}). Mga 167.8 MB ang file. Siguraduhing nagtatapos sa .apk ang filename — huwag kailanman mag-run ng .exe sa Android.`,
  },
  {
    n: 4,
    title: "Patakbuhin ang APK installer",
    body: "Buksan ang Downloads folder, i-tap ang APK, at kumpirmahin ang install prompt. Ipapakita ng Android ang permission summary; kailangan ng Delta Executor ang storage access para mag-load ng script files at overlay permission para ipakita ang UI nito sa ibabaw ng Roblox.",
  },
  {
    n: 5,
    title: "Ibigay ang overlay at storage permissions",
    body: "Pagkatapos mag-install, buksan ang Delta Executor. Kung hinihingi ang 'Draw over other apps', pumunta sa Settings → Apps → Special app access → Appear on top at i-enable ang Delta. Para sa storage: Settings → Apps → Delta Executor → Permissions → Storage → Allow.",
  },
  {
    n: 6,
    title: "Kumpletuhin ang key system (kung hiningi)",
    body: "Gumagamit ang Delta Executor ng key system para pigilan ang automated abuse. Buksan ang key link, tapusin ang mga hakbang sa Linkvertise o Loot-Link, kopyahin ang key, i-paste sa executor, at i-tap ang Connect. Tingnan ang key system guide namin para sa detalyadong steps.",
  },
  {
    n: 7,
    title: "Buksan ang Roblox at mag-inject",
    body: "Buksan muna ang Roblox at sumali sa kahit anong laro. Lumipat sa Delta Executor, i-tap ang Connect, hintaying maging berde ang status na 'Injected', saka i-paste o i-load ang script at i-tap ang Execute.",
  },
];

const faqItems = [
  {
    question: "Libre bang i-download ang Delta Executor?",
    answer:
      "Oo. Libre ang Delta Executor para sa Android. Walang bayad na tier para mag-run ng scripts — ang tanging hadlang ay ang key system, at libre ang keys sa key page.",
  },
  {
    question: "Maba-ban ba ang Roblox account ko kapag gumamit ng Delta Executor?",
    answer:
      "Lumalabag ang paggamit ng script executor sa Terms of Service ng Roblox. May naba-ban, lalo na sa mga larong may malakas na anti-cheat. Kung gusto mong protektahan ang main account, gumamit ng alternate account. Hindi ginagarantiyahan ng Delta Executor na hindi ka maba-ban.",
  },
  {
    question: "Anong Android version ang kailangan?",
    answer:
      "Sinusuportahan ng Delta Executor ang Android 5.0 (Lollipop) pataas, na may full feature support sa Android 8.0 (Oreo) at mas bago. Inirerekomenda ang Android 8+ para sa pinaka-stable na injection. Sa mas lumang version, maaaring magkaroon ng injection errors.",
  },
  {
    question: "Bakit mina-flag ng antivirus ang APK?",
    answer:
      "Minsan mina-flag ng Android antivirus ang mga executor hindi dahil sa tunay na malware kundi dahil sa hook-like behavior. Kung na-download mo mula sa pahinang ito, opisyal na build ang APK. Para sa kapanatagan, i-scan sa VirusTotal bago mag-install.",
  },
  {
    question: "Sobrang daming ads sa key page — may tips ba?",
    answer:
      "Gumamit ng malinis na browser imbes na in-app browser, at tapusin ang bawat checkpoint nang sunud-sunod. Huwag i-tap ang mapanlinlang na 'Download' buttons sa Linkvertise — ang maliit na 'Continue' o 'I'm not a robot' buttons lang ang dapat.",
  },
  {
    question: "Gaano kalaki ang APK file?",
    answer: `Mga 167.8 MB ang Delta Executor ${APP_VERSION} APK. Siguraduhing may sapat na storage bago mag-download. Maaaring mas malaki nang konti ang installed size.`,
  },
  {
    question: "Ano ang ibig sabihin ng 'Play Protect blocked the install'?",
    answer:
      "Mina-flag ng Google Play Protect ang lahat ng APK na hindi mula sa Play Store — kasama ang legitimate na executor tools. Inaasahan ito sa anumang sideloaded app. I-tap ang 'Install anyway' para magpatuloy. Hindi ito virus detection; default na babala lang ng Play Protect sa APK sa labas ng Play Store.",
  },
  {
    question: "Paano i-update ang Delta Executor sa mas bagong version?",
    answer:
      "I-download ang pinakabagong APK mula sa pahinang ito at i-install direkta sa existing version — hindi kailangang mag-uninstall muna. Napananatili ang saved scripts at settings. Kung may problema pagkatapos mag-update, ang clean reinstall (uninstall muna) ang nag-aayos ng karamihan.",
  },
  {
    question: "Gumagana ba ang Delta Executor sa ARM64 devices?",
    answer:
      "Oo. Sinusuportahan ng Delta Executor ang ARM64 (64-bit) devices — halos lahat ng Android phones pagkatapos ng 2017. Maaaring mas mababa ang stability sa ARM32 (32-bit) na Android 5/6.",
  },
  {
    question: "Saan ako makakakuha ng Delta Executor para sa Vietnam (VNG Roblox)?",
    answer:
      "Kung naglalaro ka sa VNG-published Roblox client, kailangan mo ng VNG-compatible na Delta build. Tingnan ang VNG page namin para sa detalye at Vietnam Roblox client-specific download link.",
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
              I-download ang Delta Executor para sa Android
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/65">
              Ang pinakasikat na libreng Roblox script executor para sa Android sa Pilipinas. Sundin ang mga hakbang sa ibaba para sa malinis at ligtas na install — hindi kailangan ng root.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <CtaButton href={ANDROID_APK_URL} icon="download">
                I-download ang APK {APP_VERSION}
              </CtaButton>
              <Link href="/delta-executor-ios" className="font-semibold text-pink hover:underline self-center">
                Gabay sa iOS →
              </Link>
              <Link href="/blog/how-to-get-delta-executor-key" className="font-semibold text-pink hover:underline self-center">
                Kumuha ng key →
              </Link>
            </div>
            <p className="mt-3 text-xs text-white/35">
              Sa pag-download, kinikilala mong lumalabag ang script executors sa ToS ng Roblox at gamit mo ito sa sarili mong panganib.
            </p>
          </div>
          <div className="brand-shot-frame brand-shot-frame--side shrink-0">
            <Image
              src={BRAND_FEATURE_2}
              alt="Delta Executor na tumatakbo sa Android"
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
        <h2 className="mb-4 font-display text-2xl font-bold text-white">Detalye ng APK</h2>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-sm text-white/70">
            <tbody className="divide-y divide-white/5">
              {[
                ["Pangalan ng app", "Delta Executor"],
                ["Version", APP_VERSION],
                ["Petsa ng release", STYLES_UPDATED],
                ["Format ng file", "APK (Android Package)"],
                ["Minimum na Android", "5.0 (Lollipop)"],
                ["Inirerekomendang Android", "8.0+ (Oreo o mas bago)"],
                ["Architecture", "ARM64 + ARM32"],
                ["Tinatayang laki", "167.8 MB"],
                ["Presyo", "Libre"],
                ["Kailangan ng root", "Hindi"],
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
              <li>200 MB libreng storage</li>
              <li>ARM processor</li>
              <li>Naka-install ang Roblox</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-pink/20 bg-pink/5 p-5">
            <h3 className="font-display font-bold text-white mb-3">Inirerekomenda</h3>
            <ul className="space-y-2 text-sm text-white/65">
              <li>Android 8.0+ (Oreo o mas bago)</li>
              <li>3 GB RAM o higit pa</li>
              <li>500 MB libreng storage</li>
              <li>ARM64 processor</li>
              <li>Stable na internet</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Fake APK warnings */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <div className="rounded-2xl border border-red-400/30 bg-red-400/5 p-6">
          <h2 className="mb-3 font-display text-xl font-bold text-red-300">
            ⚠ Pekeng APK, Keyless Scam at Play Store Impostor
          </h2>
          <div className="space-y-3 text-sm text-white/65">
            <p>
              <strong className="text-white">Pekeng APK:</strong> Nagpapakalat ng APK
              ang third-party Telegram channels, YouTube descriptions, at clone sites na
              nagsasabing Delta Executor ang mga ito. Marami ang may password stealers o
              crypto miners. Sa{" "}
              <strong className="text-white">deltaexecutor.com.ph</strong> lang
              mag-download. Basahin ang buong{" "}
              <Link href="/blog/is-delta-executor-safe" className="text-pink hover:underline">
                safety guide
              </Link>{" "}
              para malaman ang impostor.
            </p>
            <p>
              <strong className="text-white">Keyless scam:</strong> Ang mga site na
              nag-a-advertise ng &ldquo;Delta Executor Keyless&rdquo; o &ldquo;Delta
              without key system&rdquo; ay modified forks na hindi kilala ang kaligtasan
              o outright malware. Kailangan ng opisyal na Delta ng 24-hour key — ang
              anumang build na nag-claim na permanenteng bypass ay dapat pag-ingatan.
            </p>
            <p>
              <strong className="text-white">Play Store impostor:</strong> Wala ang Delta
              Executor sa opisyal na Google Play Store. Anumang app sa Play Store na
              tinatawag na &ldquo;Delta Executor&rdquo; ay impostor — huwag i-install.
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
            Mina-flag ng Google Play Protect ang lahat ng APK na hindi mula sa Play
            Store, kasama ang legitimate na executor tools. Kapag nakita mo ang
            &ldquo;Play Protect blocked the install,&rdquo; i-tap ang{" "}
            <strong className="text-white">Install anyway</strong> — hindi ito virus
            detection. Para sa independent verification, i-scan ang APK sa VirusTotal
            bago mag-install. Karaniwang nakakakuha ng &ldquo;Hacktool&rdquo; detections
            ang executor APKs mula sa generic heuristics — malawak na Trojan o Spyware
            detections ang senyales ng tunay na problema.
          </p>
        </div>
      </div>

      {/* How-to steps */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-2 font-display text-2xl font-bold text-white md:text-3xl">
          Paano i-install ang Delta Executor sa Android
        </h2>
        <p className="mb-8 text-sm text-white/45">
          Kumpletong walkthrough — sideloading, key system, at unang script mo
        </p>

        {/* HowTo schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: `Paano i-install ang Delta Executor sa Android (${APP_VERSION})`,
              description:
                "Step-by-step na gabay sa pag-download at sideload ng Delta Executor APK sa Android device.",
              totalTime: "PT10M",
              supply: [
                { "@type": "HowToSupply", name: "Android phone (5.0+)" },
                { "@type": "HowToSupply", name: "Naka-install ang Roblox" },
              ],
              tool: [
                { "@type": "HowToTool", name: "File manager app" },
                { "@type": "HowToTool", name: "Chrome o Firefox browser" },
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
          Pagkatapos mag-install:{" "}
          <Link href="/blog/how-to-get-delta-executor-key" className="text-pink hover:underline">
            kumuha ng Delta key
          </Link>
          , tapos sundan ang{" "}
          <Link href="/how-to-use-delta-executor" className="text-pink hover:underline">
            paano gamitin ang Delta Executor
          </Link>
          . Nahihirapan sa unlock? Tingnan ang{" "}
          <Link href="/blog/delta-executor-key-not-working" className="text-pink hover:underline">
            hindi gumagana ang key
          </Link>
          . Bago sa Delta? Simulan sa{" "}
          <Link href="/blog/what-is-delta-executor" className="text-pink hover:underline">
            ano ang Delta Executor
          </Link>
          .
        </p>
      </div>

      {/* Safe-install checklist */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-4 font-display text-2xl font-bold text-white">Checklist sa ligtas na install</h2>
        <ul className="space-y-2 text-sm text-white/65">
          {[
            "Sa deltaexecutor.com.ph lang mag-download — huwag kailanman sa random na Telegram channels o YouTube links.",
            "Dapat tumugma ang APK filename sa kasalukuyang version (hal. Delta-Executor-(deltaexecutor.com.ph)-2.743.1136-02.apk).",
            "Kung humihingi ang site na mag-survey bago magpakita ng download button, umalis — hindi kami iyon.",
            "Hindi kailangan ng Delta Executor ang Device Administrator privileges. Kung hiningi, tanggihan.",
            "Kung gusto mo ng mas mahigpit na seguridad, i-disable ulit ang 'Unknown sources' pagkatapos mag-install.",
            "Kung may duda, i-scan ang APK sa VirusTotal bago mag-install — normal ang ilang 'Hacktool' detections; hindi normal ang malawak na Trojan detections.",
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
            alt="Pangkalahatang-ideya ng interface ng Delta Executor sa Android"
            width={280}
            height={455}
            sizes="220px"
            className="brand-shot"
          />
        </div>
        <p className="mt-3 text-center text-xs text-white/35">
          Delta Executor {APP_VERSION} — Script Hub UI sa Android
        </p>
      </div>

      {/* FAQ */}
      <div className="container mx-auto max-w-3xl px-4 pb-14">
        <FaqSection
          title="FAQ sa Download"
          items={faqItems}
        />
        <RelatedGuides links={[...RELATED_PRESETS.download]} />
      </div>
    </>
  );
}