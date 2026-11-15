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
  title: `Paano Gamitin ang Delta Executor — Kumpletong Gabay para sa Baguhan (${APP_VERSION}, Nobyembre 2026)`,
  description:
    "Buong walkthrough kung paano gamitin ang Delta Executor sa Android: mag-inject sa Roblox, mag-run ng scripts, gamitin ang Script Hub, pamahalaan ang library, at ayusin ang karaniwang problema. Updated Nobyembre 2026 para sa Pilipinas.",
  alternates: { canonical: `${SITE_ORIGIN}/how-to-use-delta-executor` },
  openGraph: {
    title: `Paano Gamitin ang Delta Executor — ${SITE_NAME}`,
    description: `Kumpletong gabay para sa baguhan para sa Delta Executor ${APP_VERSION}, ${STYLES_UPDATED}.`,
    url: `${SITE_ORIGIN}/how-to-use-delta-executor`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Gabay kung paano gamitin ang Delta Executor` }],
  },
};

const usageSteps = [
  {
    n: 1,
    title: "I-install ang Delta Executor",
    body: "Kung hindi mo pa nai-install ang Delta Executor, i-download ang opisyal na APK mula sa download page namin at sundan ang sideloading steps. Siguraduhing naibigay ang overlay at storage permissions bago magpatuloy.",
  },
  {
    n: 2,
    title: "Kumuha ng key (unang beses o pagkatapos ng 24 oras)",
    body: "Buksan ang Delta Executor. Kung lumabas ang key gate, i-tap ang 'Get Key,' tapusin ang Linkvertise o Loot-Link checkpoint, kopyahin ang key string, i-paste sa key field, at i-tap ang Connect. 24 oras ang validity ng keys at device-bound ang mga ito. Tingnan ang key system guide namin para sa detalyadong tips.",
  },
  {
    n: 3,
    title: "Buksan ang Roblox at sumali sa laro",
    body: "I-launch ang Roblox sa Android device mo at sumali sa kahit anong laro. Hintaying fully loaded ka sa game world — mabibigo ang injection attempts sa loading screen.",
  },
  {
    n: 4,
    title: "Bumalik sa Delta at i-tap ang Connect / Inject",
    body: "Lumipat pabalik sa Delta Executor. I-tap ang Connect o Inject button. Dapat maging berde ang status indicator at ipakita ang 'Injected' o katulad na success message. Maaaring tumagal ng ilang segundo. Kung mabigo, tingnan ang troubleshooting section sa ibaba.",
  },
  {
    n: 5,
    title: "Mag-browse sa Script Hub o mag-paste ng sarili mong script",
    body: "Kapag nakumpirma ang injection, may dalawang paraan: (A) Script Hub — i-tap ang Script Hub tab, mag-browse ayon sa laro o category, at i-tap ang Execute sa anumang script; (B) Manual — i-tap ang Editor tab, i-paste ang Lua script code, at i-tap ang Execute. Parehong resulta ang dalawang method.",
  },
  {
    n: 6,
    title: "I-save ang madalas gamiting scripts",
    body: "Sa Script Hub, i-tap ang bookmark/heart icon para i-save ang script sa Library. Para sa manual scripts, i-tap ang Save icon sa Editor para i-store locally. Maa-access ang saved scripts mula sa Library tab anumang oras.",
  },
  {
    n: 7,
    title: "Mag-disconnect kapag tapos na",
    body: "Kapag tapos na ang session, mag-exit sa Roblox (awtomatikong nililinis ang injection) o i-tap ang Disconnect sa Delta Executor. Pinipigilan nitong manatili ang injection state para sa susunod na session.",
  },
];

const faqItems = [
  {
    question: "Bakit sinasabi ng Delta Executor na 'Injection failed'?",
    answer:
      "Karaniwang dahil sa: (1) nag-try mag-inject bago fully loaded sa laro — hintaying lumabas ang game world; (2) may Roblox update na sumira sa compatibility — tingnan ang Discord para sa Delta update; (3) may ibang app na sumasalungat sa overlay permission. I-restart ang Roblox at Delta at subukan ulit.",
  },
  {
    question: "Paano ko malalaman kung properly injected ang Delta?",
    answer:
      "Lumalabas ang berdeng status indicator na may label na 'Injected' o 'Connected' sa main screen ng Delta Executor. Sa ilang version may overlay icon din sa loob ng Roblox game. Kung pula ang indicator o 'Not connected,' hindi nagtagumpay ang injection.",
  },
  {
    question: "Maaari bang mag-run ng maraming script sabay?",
    answer:
      "Oo. Independent ang bawat script na ie-execute mo. Pero ang magkasalungat na scripts (hal. dalawang script na parehong kumokontrol sa galaw) ay maaaring magdulot ng hindi inaasahang behavior o crash. Isa-isa lang kapag nag-troubleshoot.",
  },
  {
    question: "Ano ang pagkakaiba ng Script Hub at Editor?",
    answer:
      "Ang Script Hub ay curated library ng pre-built scripts na nakaayos ayon sa laro at category. Ang Editor ay blangkong text field kung saan maaari kang mag-paste ng anumang raw Lua code. Mas madali ang Script Hub para sa baguhan; ang Editor para sa custom o community scripts.",
  },
  {
    question: "Bakit walang nangyayari pagkatapos mag-execute ng script?",
    answer:
      "Siguraduhing successful ang injection muna (berdeng status). Tapos i-verify: (1) tumatarget ba ang script sa laro na pinaglalaruan mo — karamihan ay game-specific; (2) hindi ba outdated ang script dahil sa Roblox game update; (3) walang syntax errors sa Lua code kung ikaw ang sumulat o nag-edit.",
  },
  {
    question: "Maaari bang gamitin ang Delta Executor nang offline?",
    answer:
      "Hindi. Kailangan ng active internet connection ang Roblox at Delta Executor. Kailangan din ng network access ng key system ng Delta para i-validate ang key token.",
  },
  {
    question: "Paano i-update ang Delta Executor?",
    answer:
      "I-download ang pinakabagong APK mula sa download page at i-install sa existing version — hindi kailangang mag-uninstall. Napapanatili ang saved scripts sa Library. Pagkatapos mag-update, maaaring kailanganin ng bagong key kung nagbago ang key format.",
  },
];

export default function HowToUsePage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Paano Gamitin" }]}
      />

      {/* Hero */}
      <div className="container mx-auto max-w-6xl px-4 pb-4 pt-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          <div className="flex-1">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-pink/80">
              Gabay sa Paggamit · {APP_VERSION} · {STYLES_UPDATED}
            </p>
            <h1 className="font-display text-4xl font-bold text-white md:text-5xl">
              Paano Gamitin ang Delta Executor
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/65">
              Kumpletong walkthrough para sa baguhan — mula sa install at key system hanggang sa pag-inject sa Roblox, pagpapatakbo ng scripts, at paggamit ng built-in Script Hub.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <CtaButton href={ANDROID_APK_URL} icon="download">
                I-download ang Delta Executor
              </CtaButton>
              <Link href="/download-delta-executor" className="font-semibold text-pink hover:underline self-center">
                Gabay sa install →
              </Link>
            </div>
          </div>
          <div className="brand-shot-frame brand-shot-frame--side shrink-0">
            <Image
              src={BRAND_FEATURE_2}
              alt="Pangunahing interface ng Delta Executor sa Android"
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
        <h2 className="mb-4 font-display text-2xl font-bold text-white">Pangkalahatang-ideya ng interface ng Delta Executor</h2>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-sm text-white/70">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.04] text-left text-xs uppercase tracking-wider text-white/40">
                <th className="px-4 py-3">Tab / Button</th>
                <th className="px-4 py-3">Ginagawa nito</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                ["Connect / Inject", "Sinisimulan ang Roblox injection — i-tap pagkatapos fully loaded sa laro"],
                ["Script Hub", "Mag-browse at mag-execute ng pre-built scripts ayon sa laro/category"],
                ["Editor", "Mag-paste at mag-run ng anumang raw Lua script code"],
                ["Library", "Mga saved script mo — i-tap ang entry para i-execute ulit"],
                ["Get Key", "Binubuksan ang key gateway (Linkvertise / Loot-Link) para sa bagong 24h key"],
                ["Settings", "I-adjust ang display, injection method, at notification preferences"],
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
          Step-by-step na gabay sa paggamit
        </h2>
        <p className="mb-8 text-sm text-white/45">Mula sa unang launch hanggang sa unang script mo</p>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: `Paano Gamitin ang Delta Executor sa Android (${APP_VERSION})`,
              description:
                "Kumpletong gabay sa pag-inject sa Roblox at pagpapatakbo ng scripts gamit ang Delta Executor.",
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
            alt="Interface ng Script Hub ng Delta Executor"
            width={280}
            height={455}
            sizes="220px"
            className="brand-shot"
          />
        </div>
        <p className="mt-3 text-center text-xs text-white/35">
          Script Hub ng Delta Executor — mag-browse at mag-execute ng scripts nang hindi umaalis sa app
        </p>
      </div>

      {/* Quick troubleshooting */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-4 font-display text-2xl font-bold text-white">Mabilis na troubleshooting</h2>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-sm text-white/70">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.04] text-left text-xs uppercase tracking-wider text-white/40">
                <th className="px-4 py-3">Problema</th>
                <th className="px-4 py-3">Malamang na dahilan</th>
                <th className="px-4 py-3">Ayos</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                ["Injection failed", "Masyadong maaga nag-inject / na-update ang Roblox", "Hintayin ang full game load; tingnan ang Delta update"],
                ["Invalid key", "Expired ang key (>24h) o partial copy", "Gumawa ng bagong key; kopyahin ang buong string"],
                ["Blank ang Script Hub", "Network issue o outdated na Delta", "I-check ang internet; i-update sa " + APP_VERSION],
                ["Hindi lumalabas ang overlay", "Na-revoke ang permission", "Ibigay ulit ang 'Draw over other apps' sa settings"],
                ["Nag-crash ang app sa inject", "Hindi tugma ang Roblox/Delta version", "I-update ang Delta; tingnan ang Discord para sa patch notes"],
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
          Para sa buong listahan ng problema at solusyon, tingnan ang{" "}
          <Link href="/delta-executor-troubleshooting" className="text-pink hover:underline">
            troubleshooting guide
          </Link>.
        </p>
      </div>

      {/* FAQ */}
      <div className="container mx-auto max-w-3xl px-4 pb-14">
        <FaqSection title="FAQ sa Paggamit" items={faqItems} />
        <RelatedGuides links={[...RELATED_PRESETS.howToUse]} />
      </div>
    </>
  );
}