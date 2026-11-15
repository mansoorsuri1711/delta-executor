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
  title: `What Is Delta Executor? Complete Beginner Guide (2026)`,
  description:
    "New to Delta Executor? Learn what it is, which platforms it supports, how the key system works, what scripts do, and what risks to expect — in plain English.",
  alternates: { canonical: `${SITE_ORIGIN}/blog/what-is-delta-executor` },
  openGraph: {
    title: `What Is Delta Executor? — ${SITE_NAME}`,
    description:
      "Complete beginner guide: what Delta Executor is, how it works on Android, iOS, and PC emulator, and what risks to be aware of.",
    url: `${SITE_ORIGIN}/blog/what-is-delta-executor`,
    siteName: SITE_NAME,
    type: "article",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `What is Delta Executor` }],
  },
};

const faqItems = [
  {
    question: "What is Delta Executor?",
    answer:
      "Delta Executor is a free Roblox script executor — a third-party app that lets you inject and run custom Lua scripts inside Roblox games. It is primarily an Android app but can also be run on iOS (via AltStore) and PC (via Android emulators).",
  },
  {
    question: "Is Delta Executor free?",
    answer:
      "Yes. The core app is free and requires a daily key (retrieved through a short ad flow). Delta Premium, which skips the daily key and may include extra features, is an optional paid upgrade.",
  },
  {
    question: "What can you do with Delta Executor?",
    answer:
      "You can run any Roblox-compatible Lua script: speed modifications, god mode, auto-farm routines, ESP (see-through walls), aimbot assistance, UI enhancements, and more. What is possible depends on the specific Roblox game and whether the script has been updated for it.",
  },
  {
    question: "Does Delta Executor work on iPhone?",
    answer:
      "iOS support is available through AltStore — a sideloading tool that installs unsigned apps on iOS without jailbreaking. It requires a PC to sign the IPA initially and must be re-signed every 7 days on a free Apple developer account. See our iOS guide for the full walkthrough.",
  },
  {
    question: "Does Delta Executor work on PC?",
    answer:
      "Delta is an Android app, so on PC it runs inside an Android emulator such as LDPlayer, BlueStacks, or MuMu Player. Install the emulator, install Roblox and Delta inside it, and follow the standard Android usage steps. Our PC guide covers the setup in detail.",
  },
  {
    question: "Will using Delta Executor get me banned?",
    answer:
      "Using any script executor violates Roblox's Terms of Service. Bans do occur — from temporary suspensions to permanent terminations. The community standard is to use a dedicated alt account rather than risking your main.",
  },
  {
    question: "How is Delta Executor different from other executors?",
    answer:
      "Delta stands out for its native Android support (many executors are PC-only), its built-in Script Hub, its free tier with a daily key, and its relatively stable compatibility after Roblox updates. See our comparison page for a side-by-side breakdown.",
  },
  {
    question: "What is the Delta Executor key system?",
    answer:
      "The key system is a daily checkpoint: once every 24 hours you visit a short ad gateway (Linkvertise, LootLabs, or Work.ink), complete the flow, and copy a time-limited token back into the app. The key is device-bound. Delta Premium skips this step.",
  },
];

export default function WhatIsDeltaExecutorPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "What Is Delta Executor?" },
        ]}
      />

      <BlogPostSchema
        title="What Is Delta Executor? A Complete Beginner Guide (2026)"
        description="New to Delta Executor? Learn what it is, which platforms it supports, how the key system works, and what risks to expect — in plain English."
        slug="what-is-delta-executor"
        datePublished="2026-11-15"
        image={`${SITE_ORIGIN}${BRAND_HERO}`}
      />

      {/* Hero */}
      <div className="container mx-auto max-w-6xl px-4 pb-4 pt-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          <div className="flex-1">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-pink/80">
              Beginner Guide · {APP_VERSION} · November 15, 2026
            </p>
            <h1 className="font-display text-4xl font-bold text-white md:text-5xl">
              What Is Delta Executor?
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/65">
              A complete plain-English introduction: what Delta Executor is, which platforms it
              runs on, how the key system and scripts work, who it is for, and what real risks you
              should know about before getting started.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <CtaButton href={ANDROID_APK_URL} icon="download">
                Download Delta Executor
              </CtaButton>
              <Link
                href="/download-delta-executor"
                className="font-semibold text-pink hover:underline self-center"
              >
                Install guide →
              </Link>
            </div>
          </div>
          <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-muted md:w-64 lg:w-80">
            <Image
              src={BRAND_HERO}
              alt="Delta Executor app — Get Key screen"
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
          The short answer
        </h2>
        <p className="text-white/65 leading-relaxed">
          Delta Executor is a <strong className="text-white">free Roblox script executor</strong>.
          A script executor is a third-party app that injects itself into a running Roblox game and
          executes custom Lua code on your behalf. The result: you can automate tasks, modify game
          physics, see enemies through walls, farm currency overnight, or run virtually any
          community-written Lua script inside any Roblox game.
        </p>
        <p className="mt-4 text-white/65 leading-relaxed">
          Unlike many executors that only run on Windows, Delta{" "}
          <strong className="text-white">natively targets Android</strong> — making it one of the
          most popular mobile Roblox executors worldwide. It includes a built-in Script Hub, an Lua
          editor, a saved-scripts library, and a daily key system that keeps the app free.
        </p>
      </div>

      {/* Platforms */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-4 font-display text-2xl font-bold text-white md:text-3xl">
          Supported platforms
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              platform: "Android",
              badge: "Native",
              badgeColor: "bg-green-500/15 text-green-400",
              desc: "Install the APK directly. The recommended and most stable platform.",
              link: "/download-delta-executor",
              linkLabel: "Download guide",
            },
            {
              platform: "iOS (iPhone / iPad)",
              badge: "Via AltStore",
              badgeColor: "bg-blue-500/15 text-blue-400",
              desc: "Sideload the IPA through AltStore. No jailbreak needed. Requires re-signing every 7 days.",
              link: "/delta-executor-ios",
              linkLabel: "iOS guide",
            },
            {
              platform: "PC / Mac",
              badge: "Via Emulator",
              badgeColor: "bg-purple-500/15 text-purple-400",
              desc: "Run Delta inside LDPlayer, BlueStacks, or MuMu Player. No native Windows build exists.",
              link: "/delta-executor-pc",
              linkLabel: "PC guide",
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
          How scripts work inside Delta Executor
        </h2>
        <p className="text-white/65 leading-relaxed">
          Roblox games are built on Lua, the same scripting language Delta Executor uses. When you
          tap <strong className="text-white">Connect / Inject</strong>, Delta attaches to Roblox's
          running process. This gives it access to the game's client-side Lua environment — meaning
          it can read and modify values the game normally controls.
        </p>
        <p className="mt-4 text-white/65 leading-relaxed">
          Scripts are plain text files. You can get them from Delta's built-in Script Hub (curated
          and updated by the team) or write/paste your own in the Editor tab. When you tap{" "}
          <strong className="text-white">Execute</strong>, the code runs in the context of the
          current game session.
        </p>
        <div className="mt-6 rounded-2xl border border-white/10 overflow-x-auto">
          <table className="w-full text-sm text-white/70">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.04] text-left text-xs uppercase tracking-wider text-white/40">
                <th className="px-4 py-3">Script type</th>
                <th className="px-4 py-3">What it does</th>
                <th className="px-4 py-3">Source</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                ["Auto-farm", "Collects in-game currency or items automatically", "Script Hub / community"],
                ["ESP / Wallhack", "Shows player positions through walls", "Script Hub / community"],
                ["Speed / Fly", "Modifies player movement parameters", "Script Hub / community"],
                ["GUI hub", "Loads a full menu of multiple cheats", "Community Discord"],
                ["Custom Lua", "Anything you write yourself", "Your own code"],
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
          Key system overview
        </h2>
        <p className="text-white/65 leading-relaxed">
          Because Delta is free, it uses a{" "}
          <strong className="text-white">daily key checkpoint</strong> to generate revenue. Once
          every 24 hours, before the app unlocks, you visit a short ad gateway (Linkvertise,
          LootLabs, or Work.ink), complete the flow in your browser, and copy the token back into
          Delta. The key is device-bound — it won't work on a different phone.
        </p>
        <p className="mt-4 text-white/65 leading-relaxed">
          <strong className="text-white">Delta Premium</strong> removes the daily key entirely for
          subscribers. If you plan to use Delta every day, the upgrade is worth considering.
        </p>
        <Link
          href="/blog/how-to-get-delta-executor-key"
          className="mt-4 inline-block text-pink hover:underline font-semibold text-sm"
        >
          Full key system guide →
        </Link>
      </div>

      {/* Who it's for / risks */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-4 font-display text-2xl font-bold text-white md:text-3xl">
          Who uses Delta Executor — and the real risks
        </h2>
        <p className="text-white/65 leading-relaxed">
          Most Delta users are casual Roblox players who want to auto-farm resources, test game
          mechanics, or experiment with Lua scripting. Some use it for game development research.
          A smaller group uses it competitively — which carries the highest ban risk.
        </p>
        <div className="mt-6 rounded-2xl border border-yellow-500/30 bg-yellow-500/5 px-5 py-4">
          <p className="text-sm font-semibold text-yellow-400">Know the risk before you start</p>
          <p className="mt-1 text-sm text-white/65">
            Roblox's Terms of Service prohibit script executors. Accounts caught using them can be
            banned — temporarily or permanently. The community-standard mitigation is to use a
            dedicated alt account. No executor is "undetectable." Read our full{" "}
            <Link href="/blog/is-delta-executor-safe" className="text-pink hover:underline">
              safety guide
            </Link>{" "}
            before making any decisions.
          </p>
        </div>
      </div>

      {/* FAQ */}
      <div className="container mx-auto max-w-3xl px-4 pb-6">
        <FaqSection title="Beginner FAQ" items={faqItems} />
      </div>

      <div className="container mx-auto max-w-3xl px-4 pb-14">
        <RelatedGuides title="Next steps" links={[...RELATED_PRESETS.whatIs]} />
      </div>
    </>
  );
}
