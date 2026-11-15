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
  title: `Delta Executor iOS — Gabay sa iPhone at iPad (${APP_VERSION}, Nobyembre 2026, Pilipinas)`,
  description:
    "Paano i-install ang Delta Executor sa iPhone at iPad nang walang computer. Direct Install, AltStore sideloading, TrollStore, Delta iOS Premium, certificate validity, key system, at mga tala sa iOS 17/18 — para sa mga gumagamit sa Pilipinas.",
  alternates: { canonical: `${SITE_ORIGIN}/delta-executor-ios` },
  openGraph: {
    title: `Delta Executor para sa iOS — ${SITE_NAME}`,
    description: `Gabay sa install sa iPhone at iPad para sa Delta Executor ${APP_VERSION}, ${STYLES_UPDATED}.`,
    url: `${SITE_ORIGIN}/delta-executor-ios`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Gabay sa Delta Executor iOS` }],
  },
};

const iosSteps = [
  {
    n: 1,
    title: "I-check ang iOS version mo",
    body: "Nasubok ang Delta Executor para sa iOS sa iOS 15.0 hanggang iOS 18.x. Buksan ang Settings → General → About at i-verify ang version. Maaaring hindi reliable ang mga device sa iOS 14 o mas luma.",
  },
  {
    n: 2,
    title: "Pumili ng sideloading method",
    body: "Tatlong suportadong paraan: (A) Direct Install (OTA) — pinakamabilis, walang PC, pero maaaring ma-revoke ang enterprise certificate sa loob ng ilang araw; (B) AltStore — gumagana sa lahat ng iOS version, kailangan ng libreng Apple ID at PC sa unang setup; (C) TrollStore — hindi kailanman mag-re-sign, pero tumatakbo lang sa partikular na firmware (tingnan ang compatibility list ng TrollStore).",
  },
  {
    n: 3,
    title: "Direct Install method (walang PC)",
    body: "Buksan ang Safari sa iPhone at pumunta sa pahinang ito. I-tap ang iOS install button. Magpo-prompt ang iOS ng 'Allow this website to install a configuration profile?' — i-tap ang Allow. Pumunta sa Settings → General → VPN & Device Management, hanapin ang Delta Executor profile, at i-tap ang Trust. Agad mag-i-install ang app. Tandaan: periodic na nire-revoke ng Apple ang enterprise certificates; kung hindi na mag-launch ang app na may 'App Not Available,' i-re-install gamit ang parehong method o lumipat sa AltStore.",
  },
  {
    n: 4,
    title: "AltStore method (pinaka-maaasahan)",
    body: "I-download ang AltStore mula sa altstore.io sa Mac o PC. Ikonekta ang iPhone via USB, buksan ang iTunes (Windows) o Finder (macOS), at i-install ang AltStore server. Pagkatapos i-install ang AltStore sa phone mo sa pamamagitan ng AltServer. Sa iPhone buksan ang Safari at i-download ang Delta Executor IPA mula sa pahinang ito. Buksan ang AltStore, i-tap ang '+' sa My Apps, piliin ang IPA, at i-si-sign at i-install ng AltStore gamit ang Apple ID mo.",
  },
  {
    n: 5,
    title: "TrollStore method (walang re-signing)",
    body: "Kung compatible ang firmware ng device mo (iOS 14.0–16.6.1 o partikular na iOS 17.x builds — tingnan ang GitHub ng TrollStore), i-install ang TrollStore gamit ang documented method para sa firmware mo. Pagkatapos i-download ang Delta Executor IPA mula sa pahinang ito, buksan sa TrollStore, at i-tap ang Install. Hindi kailanman kailangan mag-re-sign.",
  },
  {
    n: 6,
    title: "I-trust ang developer certificate (AltStore / Direct)",
    body: "Pagkatapos mag-sideload via AltStore o Direct Install, pumunta sa Settings → General → VPN & Device Management, hanapin ang developer o enterprise entry, at i-tap ang Trust. Kailangan ang hakbang na ito pagkatapos ng bawat bagong sideload.",
  },
  {
    n: 7,
    title: "Kumpletuhin ang key at mag-inject",
    body: "Buksan ang Delta Executor, i-tap ang Get Key, tapusin ang checkpoint steps, i-paste ang key, buksan ang Roblox, sumali sa laro, bumalik sa Delta, at i-tap ang Inject.",
  },
];

const faqItems = [
  {
    question: "Gumagana ba ang Delta Executor sa iPhone nang walang jailbreak?",
    answer:
      "Oo, sa sideloading (Direct Install, AltStore, o TrollStore). Hindi kailangan ng jailbreak. Pinaka-permanent ang install sa TrollStore pero limitado sa ilang firmware; universal ang AltStore; walang PC ang Direct Install pero maaaring i-revoke ng Apple ang enterprise certificate.",
  },
  {
    question: "Gaano kadalas kailangan mag-re-sign ng app?",
    answer:
      "Sa AltStore gamit ang libreng Apple ID, expire ang signature tuwing 7 araw. Maaaring mag-auto-renew ang AltStore kapag pareho ang Wi-Fi ng iPhone at AltServer. Sa bayad na Apple Developer account umaabot sa 365 araw. Hindi kailanman mag-re-sign ang mga TrollStore user.",
  },
  {
    question: "Mas mahusay ba ang TrollStore kaysa AltStore para sa Delta?",
    answer:
      "Permanenteng nag-i-install ang TrollStore nang walang re-signing — mas convenient. Pero gumagana lang sa iOS 14.0–16.6.1 at ilang 17.x builds. Tingnan ang compatibility table sa GitHub ng TrollStore bago subukan. Para sa device na labas sa range na iyon, AltStore ang go-to.",
  },
  {
    question: "Maba-ban din ba sa iOS tulad ng Android?",
    answer:
      "Oo. Lumalabag ang script executor sa anumang platform sa Terms of Service ng Roblox. Walang dagdag na proteksyon ang iOS laban sa ban detection. Gumamit ng alternate account kung mahalaga ang main account mo.",
  },
  {
    question: "Bakit nag-crash ang app pagkatapos mag-inject sa iOS?",
    answer:
      "Karaniwang nangangahulugan na mas bago na ang Roblox version kaysa sa injection target ng executor. Hintayin ang Delta update na sumusuporta sa pinakabagong Roblox iOS build, o tingnan ang community channels para sa compatible na version.",
  },
  {
    question: "Ano ang Delta iOS Premium?",
    answer:
      "Opsyonal na bayad na tier ang Delta iOS Premium na pumapalit sa standard 24-hour key system ng persistent subscription-based session token — tinatanggal ang daily key checkpoint. Opsyonal lang; gumagana nang pareho ang libreng version na may daily keys para sa script execution. Convenience upgrade ito para sa mga nahihirapan sa daily renewal.",
  },
  {
    question: "Paano gumagana ang certificate validity para sa Delta iOS?",
    answer:
      "Sa libreng Apple ID via AltStore, valid ang certificate sa 7 araw. Pagkatapos ay hindi na mag-launch ang app na may 'App No Longer Available.' Kailangan mag-re-sign gamit ang AltStore. Sa bayad na Apple Developer account 365 araw. Exempt ang TrollStore users. Maaaring i-revoke ng Apple ang Direct Install certificates (enterprise) anumang oras.",
  },
  {
    question: "Maaari bang mag-install ng Delta sa iOS nang walang AltStore o TrollStore?",
    answer:
      "Oo — ang Direct Install (OTA) method via enterprise certificate ay walang karagdagang tools. Pero periodic na nire-revoke ng Apple ang enterprise certificates, kaya maaaring tumigil ang app sa loob ng ilang araw. Mas reliable long-term ang AltStore o TrollStore.",
  },
  {
    question: "Gumagana ba ang Delta iOS sa VNG Roblox client?",
    answer:
      "Limitado ang iOS availability ng VNG Roblox. Kung VNG iOS client ang gamit mo, ang standard Delta iOS IPA ay tumatarget sa global Roblox bundle at maaaring mabigo ang injection. Tingnan ang download page para sa VNG iOS compatibility notes o ang VNG guide namin.",
  },
  {
    question: "Aling mga iOS version ang sinusuportahan ng Delta Executor sa Nobyembre 2026?",
    answer: `Nasubok ang Delta Executor ${APP_VERSION} sa iOS 15.0 hanggang iOS 18.x. Pinaka-madalas na sinusubukan ang iOS 16 at 17. Maaaring gumana ang iOS 14 via TrollStore sa compatible firmware pero hindi opisyal na suportado. Darating ang iOS 19 support (kung ilalabas) sa susunod na Delta update.`,
  },
];

export default function IosPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Gabay sa iOS" }]}
      />

      {/* Hero */}
      <div className="container mx-auto max-w-6xl px-4 pb-4 pt-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          <div className="flex-1">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-pink/80">
              iOS · {APP_VERSION} · {STYLES_UPDATED}
            </p>
            <h1 className="font-display text-4xl font-bold text-white md:text-5xl">
              Delta Executor para sa iOS
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/65">
              Patakbuhin ang Delta Executor sa iPhone o iPad mo nang walang jailbreak. Sinusuportahan ang iOS 15–18 via AltStore, partikular na iOS 14–17 firmware via TrollStore, at lahat ng version via Direct Install (enterprise certificate).
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <CtaButton href={ANDROID_APK_URL} icon="download">
                Mas gusto ang Android APK
              </CtaButton>
              <Link href="/download-delta-executor" className="font-semibold text-pink hover:underline self-center">
                Android download →
              </Link>
            </div>
            <p className="mt-3 text-xs text-white/35">
              Lumalabag ang script executors sa ToS ng Roblox. Gamitin sa alternate account sa sarili mong panganib.
            </p>
          </div>
          <div className="brand-shot-frame brand-shot-frame--side shrink-0">
            <Image
              src={BRAND_FEATURE_3}
              alt="Delta Executor na tumatakbo sa iPhone iOS"
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
          Video sa iOS install
        </h2>
        <p className="mb-5 text-sm text-white/55">
          Panoorin ang Delta Executor iOS setup walkthrough, tapos sundan ang mga nakasulat na hakbang sa ibaba para sa
          Direct Install, AltStore, o TrollStore.
        </p>
        <YouTubeEmbed
          videoId={YOUTUBE_VIDEOS.ios.id}
          title={YOUTUBE_VIDEOS.ios.title}
        />
      </div>

      {/* iOS Premium section */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-4 font-display text-2xl font-bold text-white">
          Delta iOS Premium — ano ito?
        </h2>
        <div className="rounded-2xl border border-white/10 bg-card p-6 space-y-3 text-sm text-white/70 leading-relaxed">
          <p>
            Opsyonal na bayad na subscription ang Delta iOS Premium na pumapalit sa daily key checkpoint ng persistent session token. Kung araw-araw mong ginagamit ang Delta sa iOS at nakakaantok ang key renewal, tinatanggal ng Premium ang friction na iyon.
          </p>
          <ul className="ml-4 list-disc space-y-1.5 text-white/65">
            <li>
              <strong className="text-white">Kasama:</strong> Walang daily key requirement,
              priority support, at (kapag available) maagang access sa updated builds pagkatapos ng Roblox patches.
            </li>
            <li>
              <strong className="text-white">Presyo at coupons:</strong> Nagbabago ang presyo paminsan-minsan.
              Occasional na ipinamamahagi ang discount coupons sa opisyal na Delta social channels.
              Tingnan ang kasalukuyang download page para sa updated na presyo.
            </li>
            <li>
              <strong className="text-white">Certificate validity:</strong> Hindi binabago ng Premium ang
              sideloading certificate model — sa libreng Apple ID via AltStore kailangan pa ring
              mag-re-sign tuwing 7 araw. Key gate lang ang apektado ng Premium, hindi ang IPA signing process.
            </li>
            <li>
              <strong className="text-white">Kailangan ba?</strong> Hindi. Parehong gumagana ang libreng version na may daily
              key renewal para sa script execution. Convenience upgrade lang ang Premium.
            </li>
          </ul>
        </div>
      </div>

      {/* Compatibility table */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-4 font-display text-2xl font-bold text-white">Compatibility sa iOS</h2>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-sm text-white/70">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.04] text-left text-xs uppercase tracking-wider text-white/40">
                <th className="px-4 py-3">Method</th>
                <th className="px-4 py-3">Saklaw ng iOS</th>
                <th className="px-4 py-3">Re-signing</th>
                <th className="px-4 py-3">Kailangan ng PC</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5">
                <td className="px-4 py-3 font-semibold text-white">Direct Install (OTA)</td>
                <td className="px-4 py-3">Anuman (nag-iiba)</td>
                <td className="px-4 py-3">Kung na-revoke ang cert</td>
                <td className="px-4 py-3">Hindi</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="px-4 py-3 font-semibold text-white">AltStore</td>
                <td className="px-4 py-3">15.0 – 18.x</td>
                <td className="px-4 py-3">Tuwing 7 araw</td>
                <td className="px-4 py-3">Oo (unang setup)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-white">TrollStore</td>
                <td className="px-4 py-3">14.0 – 16.6.1 + select 17.x</td>
                <td className="px-4 py-3">Hindi kailanman</td>
                <td className="px-4 py-3">Hindi</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Steps */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-2 font-display text-2xl font-bold text-white md:text-3xl">
          Step-by-step na gabay sa iOS install
        </h2>
        <p className="mb-8 text-sm text-white/45">Lahat ng tatlong method — piliin ang tugma sa device mo</p>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: `Paano i-install ang Delta Executor sa iOS (${APP_VERSION})`,
              description:
                "Step-by-step na gabay sa pag-sideload ng Delta Executor IPA sa iPhone o iPad gamit ang Direct Install, AltStore, o TrollStore.",
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
        <FaqSection title="FAQ sa iOS" items={faqItems} />
        <RelatedGuides links={[...RELATED_PRESETS.ios]} />
      </div>
    </>
  );
}