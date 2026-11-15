import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogPostSchema from "@/components/BlogPostSchema";
import FaqSection from "@/components/FaqSection";
import CtaButton from "@/components/CtaButton";
import RelatedGuides, { RELATED_PRESETS } from "@/components/RelatedGuides";
import {
  BRAND_HERO,
  OG_IMAGE,
  SITE_NAME,
  SITE_ORIGIN,
  APP_VERSION,
  ANDROID_APK_URL,
} from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Ano ang Delta Executor? Kumpletong Gabay para sa Nagsisimula (2026)`,
  description:
    "Bago sa Delta Executor? Alamin kung ano ito, anong platform ang sinusuportahan, paano gumagana ang key system, ano ang ginagawa ng script, at anong mga panganib ang inaasahan.",
  alternates: { canonical: `${SITE_ORIGIN}/blog/what-is-delta-executor` },
  openGraph: {
    title: `Ano ang Delta Executor? — ${SITE_NAME}`,
    description:
      "Kumpletong gabay para sa nagsisimula: ano ang Delta Executor, paano ito gumagana sa Android, iOS, at PC emulator, at mga panganib na dapat mong malaman.",
    url: `${SITE_ORIGIN}/blog/what-is-delta-executor`,
    siteName: SITE_NAME,
    type: "article",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Ano ang Delta Executor` }],
  },
};

const faqItems = [
  {
    question: "Ano ang Delta Executor?",
    answer:
      "Ang Delta Executor ay libreng Roblox script executor — third-party app na nagpapahintulot sa iyo na mag-inject at magpatakbo ng custom Lua script sa loob ng Roblox games. Pangunahing Android app ito ngunit maaari ring patakbuhin sa iOS (via AltStore) at PC (via Android emulator).",
  },
  {
    question: "Libre ba ang Delta Executor?",
    answer:
      "Oo. Libre ang core app at nangangailangan ng daily key (kinukuha sa maikling ad flow). Ang Delta Premium, na nilalaktawan ang daily key at maaaring may extra feature, ay opsyonal na bayad na upgrade.",
  },
  {
    question: "Ano ang magagawa mo sa Delta Executor?",
    answer:
      "Maaari kang magpatakbo ng anumang Roblox-compatible Lua script: speed mod, god mode, auto-farm, ESP (see-through walls), aimbot assistance, UI enhancement, at marami pa. Depende sa partikular na Roblox game at kung naka-update ang script para dito.",
  },
  {
    question: "Gumagana ba ang Delta Executor sa iPhone?",
    answer:
      "Available ang iOS support via AltStore — sideloading tool na nag-i-install ng unsigned app sa iOS nang walang jailbreak. Kailangan ng PC para i-sign ang IPA sa simula at dapat i-re-sign tuwing 7 araw sa libreng Apple developer account. Tingnan ang iOS guide namin para sa buong walkthrough.",
  },
  {
    question: "Gumagana ba ang Delta Executor sa PC?",
    answer:
      "Android app ang Delta, kaya sa PC tumatakbo ito sa loob ng Android emulator tulad ng LDPlayer, BlueStacks, o MuMu Player. I-install ang emulator, i-install ang Roblox at Delta sa loob nito, at sundin ang standard na hakbang sa Android. Saklaw ng PC guide namin ang setup nang detalyado.",
  },
  {
    question: "Ma-ba-ban ba ako sa paggamit ng Delta Executor?",
    answer:
      "Ang paggamit ng anumang script executor ay lumalabag sa Terms of Service ng Roblox. May nangyayaring ban — mula pansamantalang suspension hanggang permanenteng termination. Karaniwan sa komunidad ang dedicated alt account imbes na ilagay sa panganib ang main.",
  },
  {
    question: "Paano naiiba ang Delta Executor sa ibang executor?",
    answer:
      "Namumukod-tangi ang Delta sa native Android support (maraming executor ay PC-only), built-in Script Hub, libreng tier na may daily key, at medyo stable na compatibility pagkatapos ng Roblox update. Tingnan ang comparison page namin para sa side-by-side breakdown.",
  },
  {
    question: "Ano ang Delta Executor key system?",
    answer:
      "Ang key system ay daily checkpoint: isang beses kada 24 oras bibisita ka sa maikling ad gateway (Linkvertise, LootLabs, o Work.ink), tatapusin ang flow, at kokopyahin ang time-limited token pabalik sa app. Device-bound ang key. Nilalaktawan ito ng Delta Premium.",
  },
];

export default function WhatIsDeltaExecutorPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Ano ang Delta Executor?" },
        ]}
      />

      <BlogPostSchema
        title="Ano ang Delta Executor? Kumpletong Gabay para sa Nagsisimula (2026)"
        description="Bago sa Delta Executor? Alamin kung ano ito, anong platform ang sinusuportahan, paano gumagana ang key system, at anong mga panganib ang inaasahan."
        slug="what-is-delta-executor"
        datePublished="2026-11-15"
        image={`${SITE_ORIGIN}${BRAND_HERO}`}
      />

      {/* Hero */}
      <div className="container mx-auto max-w-6xl px-4 pb-4 pt-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          <div className="flex-1">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-pink/80">
              Gabay para sa Nagsisimula · {APP_VERSION} · Nobyembre 15, 2026
            </p>
            <h1 className="font-display text-4xl font-bold text-white md:text-5xl">
              Ano ang Delta Executor?
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/65">
              Kumpletong introduksyon: ano ang Delta Executor, sa anong platform tumatakbo, paano
              gumagana ang key system at mga script, para kanino ito, at ang tunay na mga panganib na
              dapat mong malaman bago magsimula.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <CtaButton href={ANDROID_APK_URL} icon="download">
                I-download ang Delta Executor
              </CtaButton>
              <Link
                href="/download-delta-executor"
                className="font-semibold text-pink hover:underline self-center"
              >
                Gabay sa install →
              </Link>
            </div>
          </div>
          <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-muted md:w-64 lg:w-80">
            <Image
              src={BRAND_HERO}
              alt="App na Delta Executor — screen na Get Key"
              width={280}
              height={455}
              sizes="220px"
              className="brand-shot"
              priority
            />
          </div>
        </div>
      </div>

      {/* What is it */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-4 font-display text-2xl font-bold text-white md:text-3xl">
          Maikling sagot
        </h2>
        <p className="text-white/65 leading-relaxed">
          Ang Delta Executor ay <strong className="text-white">libreng Roblox script executor</strong>.
          Ang script executor ay third-party app na nag-i-inject sa tumatakbong Roblox game at
          nagpapatakbo ng custom Lua code para sa iyo. Resulta: maaari mong i-automate ang mga task,
          baguhin ang physics ng laro, makita ang kalaban sa likod ng pader, mag-farm ng currency
          overnight, o magpatakbo ng halos anumang community-written Lua script sa anumang Roblox game.
        </p>
        <p className="mt-4 text-white/65 leading-relaxed">
          Hindi tulad ng maraming executor na Windows lang,{" "}
          <strong className="text-white">native sa Android ang Delta</strong> — isa sa mga pinakasikat
          na mobile Roblox executor sa buong mundo. May built-in Script Hub, Lua editor, library ng
          na-save na script, at daily key system na nagpapanatiling libre ang app.
        </p>
      </div>

      {/* Platforms */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-4 font-display text-2xl font-bold text-white md:text-3xl">
          Mga sinusuportahang platform
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              platform: "Android",
              badge: "Native",
              badgeColor: "bg-green-500/15 text-green-400",
              desc: "Direktang i-install ang APK. Inirerekomenda at pinaka-stable na platform.",
              link: "/download-delta-executor",
              linkLabel: "Gabay sa download",
            },
            {
              platform: "iOS (iPhone / iPad)",
              badge: "Via AltStore",
              badgeColor: "bg-blue-500/15 text-blue-400",
              desc: "I-sideload ang IPA via AltStore. Walang jailbreak. Kailangan i-re-sign tuwing 7 araw.",
              link: "/delta-executor-ios",
              linkLabel: "Gabay sa iOS",
            },
            {
              platform: "PC / Mac",
              badge: "Via Emulator",
              badgeColor: "bg-purple-500/15 text-purple-400",
              desc: "Patakbuhin ang Delta sa LDPlayer, BlueStacks, o MuMu Player. Walang native Windows build.",
              link: "/delta-executor-pc",
              linkLabel: "Gabay sa PC",
            },
          ].map((p) => (
            <div
              key={p.platform}
              className="rounded-2xl border border-white/10 bg-card p-5"
            >
              <div className="flex items-center gap-2 mb-3">
                <h3 className="font-semibold text-white">{p.platform}</h3>
                <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${p.badgeColor}`}>
                  {p.badge}
                </span>
              </div>
              <p className="text-sm text-white/60 leading-relaxed mb-3">{p.desc}</p>
              <Link href={p.link} className="text-sm text-pink hover:underline font-semibold">
                {p.linkLabel} →
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* How scripts work */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-4 font-display text-2xl font-bold text-white md:text-3xl">
          Paano gumagana ang mga script sa Delta Executor
        </h2>
        <p className="text-white/65 leading-relaxed">
          Gawa sa Lua ang Roblox games, parehong scripting language na ginagamit ng Delta Executor. Kapag
          nag-tap ka ng <strong className="text-white">Connect / Inject</strong>, kumakabit ang Delta sa
          tumatakbong proseso ng Roblox. Bigyan nito ng access ang client-side Lua environment ng laro —
          nababasa at nababago ang mga value na karaniwang kinokontrol ng laro.
        </p>
        <p className="mt-4 text-white/65 leading-relaxed">
          Plain text file ang mga script. Makuha mo ang mga ito sa built-in Script Hub ng Delta (curated
          at ina-update ng team) o magsulat/mag-paste ng sarili mo sa tab na Editor. Kapag nag-tap ka ng{" "}
          <strong className="text-white">Execute</strong>, tumatakbo ang code sa konteksto ng kasalukuyang game session.
        </p>
        <div className="mt-6 rounded-2xl border border-white/10 overflow-x-auto">
          <table className="w-full text-sm text-white/70">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.04] text-left text-xs uppercase tracking-wider text-white/40">
                <th className="px-4 py-3">Uri ng script</th>
                <th className="px-4 py-3">Ginagawa nito</th>
                <th className="px-4 py-3">Pinagmulan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                ["Auto-farm", "Awtomatikong kinokolekta ang in-game currency o item", "Script Hub / komunidad"],
                ["ESP / Wallhack", "Ipinapakita ang posisyon ng player sa likod ng pader", "Script Hub / komunidad"],
                ["Speed / Fly", "Binabago ang parameter ng galaw ng player", "Script Hub / komunidad"],
                ["GUI hub", "Naglo-load ng buong menu ng maraming cheat", "Community Discord"],
                ["Custom Lua", "Anumang isusulat mo", "Sariling code"],
              ].map(([type, what, source]) => (
                <tr key={type as string}>
                  <td className="px-4 py-3 font-semibold text-white">{type}</td>
                  <td className="px-4 py-3">{what}</td>
                  <td className="px-4 py-3">{source}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Key system overview */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-4 font-display text-2xl font-bold text-white md:text-3xl">
          Overview ng key system
        </h2>
        <p className="text-white/65 leading-relaxed">
          Dahil libre ang Delta, gumagamit ito ng{" "}
          <strong className="text-white">daily key checkpoint</strong> para kumita. Isang beses kada
          24 oras, bago mag-unlock ang app, bibisita ka sa maikling ad gateway (Linkvertise, LootLabs,
          o Work.ink), tatapusin ang flow sa browser, at kokopyahin ang token pabalik sa Delta.
          Device-bound ang key — hindi gagana sa ibang phone.
        </p>
        <p className="mt-4 text-white/65 leading-relaxed">
          Inaalis ng <strong className="text-white">Delta Premium</strong> ang daily key para sa mga
          subscriber. Kung balak mong gamitin ang Delta araw-araw, sulit isaalang-alang ang upgrade.
        </p>
        <Link
          href="/blog/how-to-get-delta-executor-key"
          className="mt-4 inline-block text-pink hover:underline font-semibold text-sm"
        >
          Buong gabay sa key system →
        </Link>
      </div>

      {/* Who it's for / risks */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-4 font-display text-2xl font-bold text-white md:text-3xl">
          Sino ang gumagamit ng Delta Executor — at ang tunay na panganib
        </h2>
        <p className="text-white/65 leading-relaxed">
          Karamihan sa mga user ng Delta ay casual Roblox player na gustong mag-auto-farm ng resource,
          subukan ang game mechanics, o mag-experiment sa Lua scripting. May gumagamit para sa game
          development research. Mas maliit na grupo ang gumagamit nang competitive — pinakamataas ang ban risk doon.
        </p>
        <div className="mt-6 rounded-2xl border border-yellow-500/30 bg-yellow-500/5 px-5 py-4">
          <p className="text-sm font-semibold text-yellow-400">Alamin ang panganib bago magsimula</p>
          <p className="mt-1 text-sm text-white/65">
            Ipinagbabawal ng Terms of Service ng Roblox ang script executor. Maaaring ma-ban ang
            account na nahuhuli — pansamantala o permanente. Karaniwang solusyon ng komunidad ang
            dedicated alt account. Walang executor na &quot;undetectable.&quot; Basahin ang buong{" "}
            <Link href="/blog/is-delta-executor-safe" className="text-pink hover:underline">
              gabay sa kaligtasan
            </Link>{" "}
            bago magdesisyon.
          </p>
        </div>
      </div>

      {/* FAQ */}
      <div className="container mx-auto max-w-3xl px-4 pb-6">
        <FaqSection title="FAQ para sa Nagsisimula" items={faqItems} />
      </div>

      <div className="container mx-auto max-w-3xl px-4 pb-14">
        <RelatedGuides title="Susunod na hakbang" links={[...RELATED_PRESETS.whatIs]} />
      </div>
    </>
  );
}
