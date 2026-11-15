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
  title: `Gabay sa Troubleshooting ng Delta Executor — Ayusin ang Karaniwang Problema (${APP_VERSION})`,
  description:
    "Ayusin ang injection failures, key errors, crashes, overlay issues, at 'Script Hub not loading' sa Delta Executor. Saklaw ang Android, iOS, at PC emulator setups. Updated Nobyembre 2026 para sa Pilipinas.",
  alternates: { canonical: `${SITE_ORIGIN}/delta-executor-troubleshooting` },
  openGraph: {
    title: `Troubleshooting ng Delta Executor — ${SITE_NAME}`,
    description: "Ayusin ang injection failures, key errors, crashes, at iba pa sa Delta Executor.",
    url: `${SITE_ORIGIN}/delta-executor-troubleshooting`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Troubleshooting ng Delta Executor` }],
  },
};

const issues = [
  {
    id: "injection-failed",
    title: "Injection Failed / Hindi Nag-i-inject",
    causes: [
      "Nag-try mag-inject sa loading screen bago lumabas ang game world.",
      "May silent update ang Roblox na sumira sa injection compatibility.",
      "Outdated na version ang Delta Executor.",
      "Na-revoke ang overlay permission ('Draw over other apps').",
    ],
    fixes: [
      "Hintaying fully loaded ka sa game world, saka i-tap ang Connect.",
      "Tingnan ang Delta Discord para sa mas bagong APK version — sumisira ang injection pagkatapos ng bawat Roblox update.",
      `I-update ang Delta Executor sa ${APP_VERSION} mula sa opisyal na download page.`,
      "Pumunta sa Settings → Apps → Special app access → Appear on top → i-enable ang Delta.",
    ],
  },
  {
    id: "invalid-key",
    title: "Invalid Key / Hindi Gumagana ang Key",
    causes: [
      "Expired na ang key — 24 oras ang validity mula sa generation.",
      "Device-bound ang key; ginawa mo ito sa ibang device.",
      "Partial copy — bahagi lang ng key string ang nakopya.",
      "Lumang Delta version na may ibang key format.",
    ],
    fixes: [
      "Gumawa ng bagong key sa pamamagitan ng 'Get Key' sa Delta Executor.",
      "Laging gumawa ng key sa device na gagamitin mo ito.",
      "Select all, copy, saka i-paste ang buong key — kasama ang unang at huling character.",
      `I-update sa ${APP_VERSION}; maaaring tanggihan ng lumang version ang mas bagong key formats.`,
    ],
  },
  {
    id: "app-crash",
    title: "Nag-crash o Sumasara ang Delta Executor",
    causes: [
      "RAM pressure — masyadong maraming app kasabay ng Roblox at Delta.",
      "Hindi tugma ang Roblox at Delta version pagkatapos ng Roblox patch.",
      "Corrupted na installation.",
    ],
    fixes: [
      "Isara ang background apps bago i-launch ang Roblox at Delta.",
      "Tingnan ang Discord para sa compatibility update at i-install ito.",
      "I-uninstall nang buo ang Delta Executor, saka i-reinstall ang pinakabagong APK mula sa download page.",
    ],
  },
  {
    id: "script-hub-blank",
    title: "Hindi Naglo-load / Blank ang Script Hub",
    causes: [
      "Mabagal o unstable na internet habang kumukuha ng catalog.",
      "Outdated na Delta version na may incompatible API endpoint.",
      "Hindi pa fully completed ang injection bago buksan ang Script Hub.",
    ],
    fixes: [
      "Lumipat sa stable na Wi-Fi at pull-to-refresh sa Script Hub.",
      `I-update sa ${APP_VERSION}.`,
      "Kumpirmahing berde ang injection status bago buksan ang Script Hub.",
    ],
  },
  {
    id: "overlay-not-visible",
    title: "Hindi Lumalabas ang Delta Overlay Sa Laro",
    causes: [
      "Tinanggihan o na-revoke ang 'Draw over other apps' permission.",
      "May Roblox update na nagbago sa window layer nito.",
    ],
    fixes: [
      "Settings → Apps → Special app access → Appear on top → i-enable ang Delta Executor.",
      "Tingnan ang Delta update na tumutugon sa bagong Roblox window behavior.",
    ],
  },
  {
    id: "play-protect-block",
    title: "Hinahadlangan ng Google Play Protect ang Installation",
    causes: [
      "Mina-flag ng Google Play Protect ang lahat ng APK na hindi mula sa Play Store — inaasahan ito.",
    ],
    fixes: [
      "Sa Play Protect warning screen, i-tap ang 'Install anyway.' Hindi ito virus detection.",
      "Kung gusto mo ng dagdag na kumpiyansa, i-scan ang APK sa VirusTotal bago mag-install. Normal ang ilang 'Hacktool' detections.",
    ],
  },
];

const faqItems = [
  {
    question: "Gumana kahapon ang Delta Executor pero ngayon hindi — ano nangyari?",
    answer:
      "Nagpu-push ang Roblox ng silent client updates na maaaring sumira sa executor injection compatibility. Ito ang pinakakaraniwang dahilan kung bakit tumitigil ang Delta overnight. Halos laging hintayin at i-install ang updated Delta APK ang solusyon. Tingnan ang Discord announcement channel para sa mga bagong build.",
  },
  {
    question: "Paano gumawa ng clean reinstall ng Delta Executor?",
    answer:
      "Pumunta sa Settings → Apps → Delta Executor → Uninstall. Pagkatapos i-download ang pinakabagong APK mula sa download page at i-reinstall. Tandaan: tinatanggal ng clean reinstall ang saved Library scripts — i-back up muna ang .lua files kung kailangan.",
  },
  {
    question: "Kumonekta ang Delta pero hindi nag-e-execute ang script — ano ang mali?",
    answer:
      "Kumpirmahin muna na berde ang injection status (hindi lang 'connected'). Tapos tingnan kung tumatarget ang script sa larong nilalaro mo — karamihan ay game-specific. Kung gumana dati ang script, maaaring na-update ang laro at outdated na ang script.",
  },
  {
    question: "Nasa infinite redirect loop ang key gateway — ano ang gagawin?",
    answer:
      "Buksan ang key URL sa native browser ng phone (Chrome o Safari) imbes na in-app browser ng Delta. I-disable pansamantala ang VPN at ad-blocker. Tapusin ang bawat checkpoint nang tuloy-tuloy nang hindi nagre-refresh sa gitna.",
  },
  {
    question: "Nakikita ko ang 'Error 403' o 'Server error' sa Delta — down ba ang server?",
    answer:
      "May occasional server errors. Hintayin ng 10–15 minuto at subukan ulit. Kung tumatagal nang mahigit isang oras, tingnan ang Delta Discord status channel para sa server maintenance announcements.",
  },
  {
    question: "Gumagana ang Delta sa Android pero hindi sa PC emulator — bakit?",
    answer:
      "Iba ang device fingerprint na inilalabas ng emulator. Hindi gagana sa emulator ang key na ginawa mo sa phone — gumawa ng bagong key sa loob ng emulator. Siguraduhing fully loaded ang Roblox sa emulator bago mag-inject.",
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
              Troubleshooting ng Delta Executor
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/65">
              Solusyon sa pinakakaraniwang problema sa Delta Executor — injection failures, key errors, crashes, overlay issues, at problema sa Script Hub.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <CtaButton href={ANDROID_APK_URL} icon="download" size="sm">
                I-download ang Pinakabagong APK
              </CtaButton>
              <Link href="/blog/how-to-get-delta-executor-key" className="font-semibold text-pink hover:underline self-center">
                Gabay sa key system →
              </Link>
            </div>
          </div>
          <div className="brand-shot-frame brand-shot-frame--side shrink-0">
            <Image
              src={BRAND_HERO}
              alt="Troubleshooting ng Delta Executor"
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
        <h2 className="font-display text-2xl font-bold text-white">Karaniwang Problema at Ayos</h2>
        {issues.map((issue) => (
          <div key={issue.id} id={issue.id} className="rounded-2xl border border-white/10 bg-card p-6">
            <h3 className="mb-4 font-display text-lg font-bold text-white">{issue.title}</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/40">Malamang na Dahilan</p>
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
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/40">Mga Ayos</p>
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
        <FaqSection title="FAQ sa Troubleshooting" items={faqItems} />
        <RelatedGuides links={[...RELATED_PRESETS.troubleshooting]} />
      </div>
    </>
  );
}