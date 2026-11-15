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
  title: `Delta Executor Discord Server — Sumali sa Opisyal na Komunidad (2026)`,
  description:
    "Sumali sa opisyal na Delta Executor Discord para sa update announcements, script sharing, troubleshooting help, key system support, at community discussion. Verified invite link — Nobyembre 2026.",
  alternates: { canonical: `${SITE_ORIGIN}/delta-executor-discord` },
  openGraph: {
    title: `Delta Executor Discord — ${SITE_NAME}`,
    description: "Sumali sa opisyal na komunidad ng Delta Executor sa Discord. Updates, scripts, support, at iba pa.",
    url: `${SITE_ORIGIN}/delta-executor-discord`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Delta Executor Discord` }],
  },
};

const faqItems = [
  {
    question: "Opisyal bang Delta Executor Discord ito?",
    answer:
      "Ang invite link sa pahinang ito ay tumuturo sa community Discord na kaugnay ng Delta Executor. Tulad ng anumang Discord community, i-verify ang server name at member count kapag sumali ka. Historically gumagamit ang Delta ng discord.gg invite links na ibinabahagi sa opisyal na channels — kung galing sa third-party YouTube comment o Telegram bot ang link, mag-ingat.",
  },
  {
    question: "Ano ang magagawa ko sa Delta Executor Discord?",
    answer:
      "May mga channel ang server para sa update announcements (kapaki-pakinabang para malaman kung may bagong APK), troubleshooting help, script sharing, key system questions, at general executor discussion. Madalas mas mabilis sumagot ang moderators at experienced users kaysa tickets.",
  },
  {
    question: "Ligtas bang sumali?",
    answer:
      "Karaniwang ligtas ang pagsali sa Discord server. Ang panganib ay social: huwag kailanman ibahagi ang Roblox password, two-factor backup codes, o personal details sa sinumang nag-DM na nagsasabing Delta staff. Hindi kailanman mag-DM muna ang Delta staff para humingi ng credentials.",
  },
  {
    question: "Maba-ban ba ako sa Discord?",
    answer:
      "Oo. Karaniwang may rules ang executor Discord servers laban sa self-promotion, spamming, malware distribution, account sharing, at rule-breaking script requests. Basahin ang #rules channel pagkatapos sumali.",
  },
  {
    question: "Saan pa may opisyal na presence ang Delta Executor?",
    answer:
      "May Telegram channel ang Delta Executor para sa update pings, Facebook page, at X account. Nasa footer ng site na ito ang mga link. Ang Discord ang pinaka-active na community space para sa real-time na tulong.",
  },
  {
    question: "Hindi ko mahanap ang sagot sa tanong ko tungkol sa key system — saan ako magtanong?",
    answer:
      "Karaniwang may dedicated #key-help o #support channel ang Discord. Ilarawan nang malinaw ang issue: aling checkpoint ang stuck, anong browser ang gamit, at aktibo ba ang VPN. Tingnan ang key system guide namin para sa buong troubleshooting walkthrough bago mag-post.",
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
              Komunidad · Discord · {STYLES_UPDATED}
            </p>
            <h1 className="font-display text-4xl font-bold text-white md:text-5xl">
              Delta Executor Discord
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/65">
              Sumali sa Delta Executor community Discord para sa real-time na update announcements, script sharing, tulong sa key system, at troubleshooting support mula sa kapwa users — kabilang ang maraming manlalaro sa Pilipinas.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={DISCORD_INVITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bfv-outline-btn download-btn inline-flex items-center justify-center rounded-full px-8 py-4 text-lg font-semibold transition-all group"
              >
                Sumali sa Discord Server
              </a>
              <CtaButton href={ANDROID_APK_URL} icon="download" size="sm">
                I-download ang APK
              </CtaButton>
            </div>
            <p className="mt-3 text-xs text-white/35">
              Huwag kailanman ibahagi ang Roblox password o account credentials sa Discord DMs sa sinuman.
            </p>
          </div>
          <div className="brand-shot-frame brand-shot-frame--side shrink-0">
            <Image
              src={BRAND_HERO}
              alt="Komunidad ng Delta Executor"
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
        <h2 className="mb-6 font-display text-2xl font-bold text-white">Ano ang makikita mo sa server</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              icon: "📣",
              title: "Mga Anunsyo ng Update",
              body: "Ma-notify kapag may bagong Delta Executor APK version. Pinakamabilis na paraan para malaman ang Roblox patch compatibility updates.",
            },
            {
              icon: "🔧",
              title: "Tulong sa Troubleshooting",
              body: "Nahihirapan sa injection failure, key errors, o permission issues? Mag-post sa support channel at kumuha ng sagot mula sa experienced users.",
            },
            {
              icon: "📜",
              title: "Pagbabahagi ng Script",
              body: "Nagbabahagi at nag-uusap ang community members tungkol sa Lua scripts, game-specific tools, at updated hub links. Laging suriin ang scripts bago patakbuhin.",
            },
            {
              icon: "🔑",
              title: "Suporta sa Key System",
              body: "Dedicated na tulong para sa key gateway issues — Linkvertise loops, invalid key errors, at checkpoint problems.",
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
            Mga Tip sa Kaligtasan sa Discord
          </h2>
          <ul className="space-y-2 text-sm text-white/65">
            {[
              "Huwag kailanman ibahagi ang Roblox password, two-factor codes, o session cookies sa anumang Discord channel o DM.",
              "Hindi kailanman magpapadala ang Delta staff ng unsolicited DM na humihingi ng credentials o payment.",
              "Huwag mag-download ng scripts o APKs na ipinost ng random na members maliban kung na-verify mo nang independent ang source.",
              "Kung may nag-aalok na 'bigyan ka ng Premium' o 'i-bypass ang key' via DM, scam iyon.",
              "May pekeng Delta Discord servers — i-verify ang server icon, name, at member count bago magtiwala.",
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
        <FaqSection title="FAQ sa Discord" items={faqItems} />
        <RelatedGuides links={[...RELATED_PRESETS.discord]} />
      </div>
    </>
  );
}