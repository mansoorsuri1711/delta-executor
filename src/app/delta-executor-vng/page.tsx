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
  title: `Delta Executor VNG — Gabay sa Vietnam Roblox Client (${APP_VERSION})`,
  description:
    "Paggamit ng Delta Executor sa VNG Roblox client sa Vietnam. Alamin ang VNG vs global Roblox, aling Delta build ang gagamitin, kilalang compatibility issues, at paano lumipat sa pagitan ng clients.",
  alternates: { canonical: `${SITE_ORIGIN}/delta-executor-vng` },
  openGraph: {
    title: `Delta Executor VNG (Vietnam) — ${SITE_NAME}`,
    description: "Gabay sa Delta Executor para sa VNG Roblox client na ginagamit sa Vietnam.",
    url: `${SITE_ORIGIN}/delta-executor-vng`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Gabay sa Delta Executor VNG Vietnam` }],
  },
};

const faqItems = [
  {
    question: "Ano ang VNG Roblox client?",
    answer:
      "Ang VNG ay Vietnamese game publisher na nagli-license at nagdi-distribute ng Roblox sa Vietnam sa ilalim ng local partnership. Hiwalay na APK ang VNG Roblox client mula sa global Roblox app — ibang package name, ibang server endpoints, at maaaring ibang version cadence. Hindi direktang maa-access ng mga Vietnamese player sa VNG client ang ilang global Roblox events o features.",
  },
  {
    question: "Bakit hindi gumagana ang standard Delta APK sa VNG Roblox?",
    answer:
      "Tinatarget ng standard Delta Executor APK ang package name at injection offsets ng global Roblox client. Iba ang package identifier at binary structure ng VNG client, kaya mabibigo nang tahimik ang injection o mag-crash ang laro. Ang VNG-specific Delta build ay ina-patch ang target package at offsets para tumugma.",
  },
  {
    question: "Paano malalaman kung VNG client o global client ang meron ako?",
    answer:
      "Buksan ang Play Store at maghanap ng 'Roblox.' Kung may dalawang resulta — 'Roblox' (by Roblox Corporation) at 'Roblox VNG' (by VNG) — maaari kang pumili. Kung nasa Vietnam ka at na-download ang Roblox mula sa local Play Store listing, malamang VNG version ang meron mo. Maaaring may kaunting pagkakaiba ang VNG app icon sa splash screen.",
  },
  {
    question: "Maaari bang lumipat mula sa VNG client patungo sa global Roblox client?",
    answer:
      "Oo. I-uninstall ang VNG client at i-install ang global Roblox app mula sa Play Store (by Roblox Corporation). Naililipat ang Roblox account, progress, at Robux sa pagitan ng clients — global ang account, client lang ang naiiba. Pagkatapos lumipat, normal na gagana ang standard Delta APK.",
  },
  {
    question: "May Delta VNG build ba para sa iOS?",
    answer:
      "Limitado ang iOS availability ng VNG Roblox. Kung VNG iOS client ang gamit mo, hindi garantisado ang compatibility sa Delta iOS IPA. Tingnan ang Delta Discord para sa pinakabagong VNG iOS status.",
  },
  {
    question: "Iba ba ang ban risk ng VNG Roblox players?",
    answer:
      "Nakadepende sa anti-cheat ng Roblox ang ban risk profile, na maaaring magkaiba sa VNG at global clients. May mga user na nagsasabi na mas hindi agresibo ang anti-cheat coverage ng VNG client, pero hindi ito kumpirmado ng Delta at hindi dapat umasa dito. Gumamit pa rin ng alternate account.",
  },
  {
    question: "Saan i-download ang Delta VNG build?",
    answer:
      "Available ang VNG-compatible Delta build mula sa opisyal na download page na naka-link sa site na ito. Hanapin ang VNG variant download button. Kung isang APK lang ang nakalista, tingnan ang Delta Discord — minsan hiwalay na inilalabas ang VNG builds mula sa main APK.",
  },
];

export default function VngPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "VNG (Vietnam)" }]}
      />

      {/* Hero */}
      <div className="container mx-auto max-w-6xl px-4 pb-4 pt-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          <div className="flex-1">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-pink/80">
              VNG · Vietnam Roblox · {APP_VERSION} · {STYLES_UPDATED}
            </p>
            <h1 className="font-display text-4xl font-bold text-white md:text-5xl">
              Delta Executor para sa VNG Roblox
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/65">
              Kailangan ng VNG-specific Delta build ang mga Vietnamese Roblox player na gumagamit ng VNG client. Ipinaliliwanag ng pahinang ito ang pagkakaiba ng VNG at global Roblox, aling APK ang gagamitin, at paano lumipat ng client kung kailangan.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <CtaButton href={ANDROID_APK_URL} icon="download">
                I-download ang Delta APK {APP_VERSION}
              </CtaButton>
              <Link href="/download-delta-executor" className="font-semibold text-pink hover:underline self-center">
                Buong gabay sa download →
              </Link>
            </div>
            <p className="mt-3 text-xs text-white/35">
              Lumalabag ang script executors sa ToS ng Roblox. Gamitin sa secondary account sa sarili mong panganib.
            </p>
          </div>
          <div className="brand-shot-frame brand-shot-frame--side shrink-0">
            <Image
              src={BRAND_FEATURE_2}
              alt="Delta Executor sa Android para sa VNG Roblox"
              width={280}
              height={455}
              sizes="220px"
              className="brand-shot"
              priority
            />
          </div>
        </div>
      </div>

      {/* VNG vs Global comparison */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-4 font-display text-2xl font-bold text-white">VNG Roblox vs Global Roblox</h2>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-sm text-white/70">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.04] text-left text-xs uppercase tracking-wider text-white/40">
                <th className="px-4 py-3">Feature</th>
                <th className="px-4 py-3">VNG Roblox</th>
                <th className="px-4 py-3">Global Roblox</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                ["Publisher", "VNG Corporation (Vietnam)", "Roblox Corporation (global)"],
                ["Region", "Vietnam (pangunahin)", "Buong mundo"],
                ["Package name", "Iba sa global", "com.roblox.client"],
                ["Update cadence", "Maaaring humuli sa global", "Direkta mula sa Roblox"],
                ["Delta compatibility", "Kailangan ng VNG build", "Standard Delta APK"],
                ["Account", "Shared Roblox account", "Shared Roblox account"],
              ].map(([feat, vng, global]) => (
                <tr key={feat as string}>
                  <td className="px-4 py-3 font-semibold text-white">{feat}</td>
                  <td className="px-4 py-3">{vng}</td>
                  <td className="px-4 py-3">{global}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* How to identify and switch */}
      <div className="container mx-auto max-w-3xl px-4 pt-10 space-y-4">
        <h2 className="font-display text-2xl font-bold text-white">Paano kilalanin at lumipat ng client</h2>
        <div className="rounded-2xl border border-white/10 bg-card p-6 space-y-3 text-sm text-white/70">
          <p>
            <strong className="text-white">Pagkilala sa client mo:</strong> Buksan ang Play Store at tingnan kung aling Roblox publisher ang naka-install. Ang &ldquo;Roblox&rdquo; by Roblox Corporation ay global client. Ang &ldquo;Roblox VNG&rdquo; by VNG ay Vietnam variant.
          </p>
          <p>
            <strong className="text-white">Lumipat sa global:</strong> I-uninstall ang VNG client, saka maghanap ng &ldquo;Roblox&rdquo; sa Play Store at i-install ang version na published by Roblox Corporation. Naililipat ang account data, Robux, at game progress — client binary lang ang nagbabago.
          </p>
          <p>
            <strong className="text-white">Bakit lumipat?</strong> Kapag lumipat ka sa global client, gagana ang standard Delta Executor APK nang walang hiwalay na VNG build. Mas mabilis ding makukuha ang global events at pinakabagong Roblox features.
          </p>
        </div>
      </div>

      {/* FAQ */}
      <div className="container mx-auto max-w-3xl px-4 pb-14">
        <FaqSection title="FAQ sa VNG" items={faqItems} />
        <RelatedGuides links={[...RELATED_PRESETS.vng]} />
      </div>
    </>
  );
}