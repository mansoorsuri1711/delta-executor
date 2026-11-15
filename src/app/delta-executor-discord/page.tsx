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
  ANDROID_APK_URL,
  DISCORD_INVITE_URL,
  STYLES_UPDATED,
} from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Delta Executor Discord Server — Join the Official Community (2026)`,
  description:
    "Join the official Delta Executor Discord for update announcements, script sharing, troubleshooting help, key system support, and community discussion. Verified invite link — November 2026.",
  alternates: { canonical: `${SITE_ORIGIN}/delta-executor-discord` },
  openGraph: {
    title: `Delta Executor Discord — ${SITE_NAME}`,
    description: "Join the official Delta Executor community Discord. Updates, scripts, support, and more.",
    url: `${SITE_ORIGIN}/delta-executor-discord`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Delta Executor Discord` }],
  },
};

const faqItems = [
  {
    question: "Is this the official Delta Executor Discord?",
    answer:
      "The invite link on this page points to the community Discord associated with Delta Executor. As with any Discord community, verify the server name and member count match what you expect when you join. Delta has historically used discord.gg invite links that are shared through official channels — if a link is coming from a third-party YouTube comment or a Telegram bot, treat it with caution.",
  },
  {
    question: "What can I do in the Delta Executor Discord?",
    answer:
      "The server includes channels for update announcements (useful for knowing when a new APK drops), troubleshooting help, script sharing, key system questions, and general executor discussion. Moderators and experienced users often answer questions faster than tickets.",
  },
  {
    question: "Is it safe to join?",
    answer:
      "Joining a Discord server is generally safe. The risks are social: never share your Roblox password, two-factor backup codes, or personal details with anyone in DMs who claims to be a Delta staff member. Delta staff will never DM you first asking for credentials.",
  },
  {
    question: "Can I get banned from the Discord?",
    answer:
      "Yes. Most executor Discord servers enforce rules against self-promotion, spamming, distributing malware, sharing accounts, and rule-breaking script requests. Read the #rules channel after joining.",
  },
  {
    question: "Where else does Delta Executor have an official presence?",
    answer:
      "Delta Executor maintains a Telegram channel for update pings, a Facebook page, and an X account. Links are in the footer of this site. The Discord is the most active community space for real-time help.",
  },
  {
    question: "I can't find my key system question answered — where do I ask?",
    answer:
      "The Discord typically has a dedicated #key-help or #support channel. Describe your issue clearly: which checkpoint you're stuck on, what browser you're using, and whether a VPN is active. See our key system guide for a full troubleshooting walkthrough before posting.",
  },
];

export default function DiscordPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Discord" }]}
      />

      {/* Hero */}
      <div className="container mx-auto max-w-6xl px-4 pb-4 pt-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          <div className="flex-1">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-pink/80">
              Community · Discord · {STYLES_UPDATED}
            </p>
            <h1 className="font-display text-4xl font-bold text-white md:text-5xl">
              Delta Executor Discord
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/65">
              Join the Delta Executor community Discord for real-time update announcements, script sharing, key system help, and troubleshooting support from fellow users.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={DISCORD_INVITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bfv-outline-btn download-btn inline-flex items-center justify-center rounded-full px-8 py-4 text-lg font-semibold transition-all group"
              >
                Join Discord Server
              </a>
              <CtaButton href={ANDROID_APK_URL} icon="download" size="sm">
                Download APK
              </CtaButton>
            </div>
            <p className="mt-3 text-xs text-white/35">
              Never share your Roblox password or account credentials in Discord DMs with anyone.
            </p>
          </div>
          <div className="brand-shot-frame brand-shot-frame--side shrink-0">
            <Image
              src={BRAND_HERO}
              alt="Delta Executor community"
              width={280}
              height={455}
              sizes="220px"
              className="brand-shot"
              priority
            />
          </div>
        </div>
      </div>

      {/* What's in Discord */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-6 font-display text-2xl font-bold text-white">What you&apos;ll find in the server</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              icon: "📣",
              title: "Update Announcements",
              body: "Get notified when a new Delta Executor APK version drops. This is the fastest way to learn about Roblox patch compatibility updates.",
            },
            {
              icon: "🔧",
              title: "Troubleshooting Help",
              body: "Stuck on injection failure, key errors, or permission issues? Post in the support channel and get answers from experienced users.",
            },
            {
              icon: "📜",
              title: "Script Sharing",
              body: "Community members share and discuss Lua scripts, game-specific tools, and updated hub links. Always review scripts before running them.",
            },
            {
              icon: "🔑",
              title: "Key System Support",
              body: "Dedicated help for key gateway issues — Linkvertise loops, invalid key errors, and checkpoint problems.",
            },
          ].map((card) => (
            <div key={card.title} className="rounded-2xl border border-white/10 bg-card p-5">
              <div className="mb-2 text-2xl">{card.icon}</div>
              <h3 className="mb-1 font-display font-bold text-white">{card.title}</h3>
              <p className="text-sm text-white/65">{card.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Safety tips */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/5 p-6">
          <h2 className="mb-3 font-display text-xl font-bold text-yellow-300">
            Discord Safety Tips
          </h2>
          <ul className="space-y-2 text-sm text-white/65">
            {[
              "Never share your Roblox password, two-factor codes, or session cookies in any Discord channel or DM.",
              "Delta staff will never send you an unsolicited DM asking for your credentials or requesting payment.",
              "Don't download scripts or APKs posted by random members unless you've verified the source independently.",
              "If someone offers to 'give you Premium' or 'bypass your key' via DM, it's a scam.",
              "Fake Delta Discord servers exist — verify the server icon, name, and member count match what you expect.",
            ].map((tip) => (
              <li key={tip} className="flex items-start gap-2">
                <span className="mt-0.5 text-yellow-400" aria-hidden="true">⚠</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* FAQ */}
      <div className="container mx-auto max-w-3xl px-4 pb-14">
        <FaqSection title="Discord FAQ" items={faqItems} />
        <RelatedGuides links={[...RELATED_PRESETS.discord]} />
      </div>
    </>
  );
}
