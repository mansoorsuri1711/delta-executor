import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogPostSchema from "@/components/BlogPostSchema";
import FaqSection from "@/components/FaqSection";
import CtaButton from "@/components/CtaButton";
import RelatedGuides, { RELATED_PRESETS } from "@/components/RelatedGuides";
import {
  BRAND_FEATURE_KEY,
  OG_IMAGE,
  SITE_NAME,
  SITE_ORIGIN,
  APP_VERSION,
  ANDROID_APK_URL,
} from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `How to Get Your Delta Executor Key — 2026 Guide`,
  description:
    "Step-by-step walkthrough for getting a Delta Executor key through Linkvertise, LootLabs, and Work.ink — without installs or surveys. Includes Premium skip info and what to avoid.",
  alternates: { canonical: `${SITE_ORIGIN}/blog/how-to-get-delta-executor-key` },
  openGraph: {
    title: `How to Get Your Delta Executor Key — ${SITE_NAME}`,
    description:
      "Complete guide to completing the Delta Executor key gateway through Linkvertise, LootLabs, and Work.ink safely and quickly.",
    url: `${SITE_ORIGIN}/blog/how-to-get-delta-executor-key`,
    siteName: SITE_NAME,
    type: "article",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Delta Executor key guide` }],
  },
};

const faqItems = [
  {
    question: "How long does a Delta Executor key last?",
    answer:
      "Every key is valid for exactly 24 hours from the moment it is generated. After 24 hours the app will prompt you to get a new key — you cannot extend or reuse an expired key.",
  },
  {
    question: "Is my Delta key tied to my device?",
    answer:
      "Yes. Keys are device-bound, meaning a key generated on your phone will not work on a different phone or emulator. If you switch devices, generate a fresh key on the new device.",
  },
  {
    question: "What is Linkvertise and why does Delta use it?",
    answer:
      "Linkvertise is a URL-shortening service that shows a short ad page before releasing the destination link. Delta's developers use it (and similar platforms like LootLabs and Work.ink) to monetise the free app without charging users directly. You are not installing anything — you are simply waiting through a short ad flow.",
  },
  {
    question: "Can I skip the key with Delta Premium?",
    answer:
      "Yes. Delta Premium subscribers skip the daily key requirement entirely. The in-app upgrade option or the official website's Premium page has current pricing.",
  },
  {
    question: "Is it safe to click through Linkvertise / LootLabs?",
    answer:
      "The official Linkvertise and LootLabs flows are ad pages — they don't install anything if you use a standard browser and decline any browser notification prompts. Never download files offered on those pages and never grant notification access.",
  },
  {
    question: "Should I buy a 'lifetime keyless' Delta crack?",
    answer:
      "Absolutely not. Any site selling a 'keyless Delta' or 'lifetime key' is a scam. At best you receive a cracked APK with stripped safety checks; at worst it carries malware. The only safe source is the official download on this site.",
  },
  {
    question: "Why does the key page say 'Too Many Requests'?",
    answer:
      "Linkvertise and LootLabs throttle rapid repeated visits from the same IP. Wait 5–10 minutes, switch to mobile data if you were on Wi-Fi, and try again. See our key-not-working article for a full breakdown.",
  },
];

const steps = [
  {
    n: 1,
    title: "Open Delta Executor and tap 'Get Key'",
    body: "Launch the Delta Executor app. If the key gate is active you will see a screen with a 'Get Key' button. Tap it — this opens the key gateway in your default browser.",
  },
  {
    n: 2,
    title: "Choose your gateway provider",
    body: "Delta currently offers three checkpoint providers: Linkvertise, LootLabs, and Work.ink. Any of them works. Pick the one that loads fastest on your connection.",
  },
  {
    n: 3,
    title: "Complete the Linkvertise checkpoint",
    body: "On Linkvertise: tap 'Free Access with Ads,' wait for the countdown, then tap 'Continue.' You may be shown a second page — tap 'I am not a robot' and wait for another short countdown. Do NOT click any download buttons or grant notification permissions.",
  },
  {
    n: 4,
    title: "Complete the LootLabs or Work.ink checkpoint",
    body: "On LootLabs: click 'Get Access,' complete the brief tasks shown (usually clicking a link and waiting), then click 'Get Key.' On Work.ink: click 'Continue,' wait for the timer, and click 'Get Reward.' Both providers redirect you back to Delta's key page when done.",
  },
  {
    n: 5,
    title: "Copy the key string",
    body: "After completing the checkpoint you will see a long alphanumeric string — that is your key. Tap the copy icon or long-press to select all and copy. The entire string must be copied; a partial copy will cause an 'Invalid Key' error.",
  },
  {
    n: 6,
    title: "Paste the key into Delta Executor",
    body: "Switch back to Delta Executor. Tap the key input field, long-press and select Paste. Tap 'Connect' or 'Verify.' If the key is valid and not expired, the app will unlock and take you to the main interface.",
  },
];

export default function HowToGetDeltaKeyPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "How to Get Your Delta Key" },
        ]}
      />

      <BlogPostSchema
        title="How to Get Your Delta Executor Key — Step-by-Step (2026)"
        description="Step-by-step walkthrough for getting a Delta Executor key through Linkvertise, LootLabs, and Work.ink — without installs or surveys."
        slug="how-to-get-delta-executor-key"
        datePublished="2026-11-15"
        image={`${SITE_ORIGIN}${BRAND_FEATURE_KEY}`}
      />

      {/* Hero */}
      <div className="container mx-auto max-w-6xl px-4 pb-4 pt-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          <div className="flex-1">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-pink/80">
              Key Guide · {APP_VERSION} · November 15, 2026
            </p>
            <h1 className="font-display text-4xl font-bold text-white md:text-5xl">
              How to Get Your Delta Executor Key
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/65">
              Delta's key system exists to block automated abuse — not to frustrate you. This
              walkthrough covers every checkpoint on Linkvertise, LootLabs, and Work.ink so you can
              unlock the app in under five minutes without installing anything or paying anyone.
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
              <Link
                href="/blog/delta-executor-key-not-working"
                className="font-semibold text-pink hover:underline self-center"
              >
                Key not working? →
              </Link>
            </div>
          </div>
          <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-muted md:w-64 lg:w-80">
            <Image
              src={BRAND_FEATURE_KEY}
              alt="Delta Executor key whitelist success screen"
              width={280}
              height={455}
              sizes="220px"
              className="brand-shot"
              priority
            />
          </div>
        </div>
      </div>

      {/* What is the key system */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-4 font-display text-2xl font-bold text-white md:text-3xl">
          What is the Delta Executor key system?
        </h2>
        <p className="text-white/65 leading-relaxed">
          Delta Executor is a free Android Roblox script executor. To sustain development without
          charging upfront, the app uses a <strong className="text-white">key system</strong>: once
          per 24 hours you must visit a short ad checkpoint and retrieve a time-limited token before
          the app unlocks. The token is generated fresh each time — there is no permanent "lifetime
          key" for free users.
        </p>
        <p className="mt-4 text-white/65 leading-relaxed">
          Keys are <strong className="text-white">device-bound</strong>. The token generated on your
          phone will not activate Delta on a different device. If you switch phones, run Delta on an
          emulator, or factory-reset your device, you need a new key.
        </p>
        <div className="mt-6 rounded-2xl border border-pink/20 bg-pink/5 px-5 py-4">
          <p className="text-sm font-semibold text-pink">Delta Premium</p>
          <p className="mt-1 text-sm text-white/65">
            Delta Premium subscribers skip the daily key requirement entirely. If you use Delta
            heavily every day, the upgrade pays off in saved time. Check the in-app store or the
            Premium page for current pricing.
          </p>
        </div>
      </div>

      {/* Step-by-step */}
      <div className="container mx-auto max-w-3xl px-4 pt-12">
        <h2 className="mb-2 font-display text-2xl font-bold text-white md:text-3xl">
          Step-by-step: get your key in under 5 minutes
        </h2>
        <p className="mb-8 text-sm text-white/45">Works on Android — no installs, no surveys</p>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "How to Get a Delta Executor Key",
              description:
                "Step-by-step guide to completing the Delta Executor key gateway through Linkvertise, LootLabs, and Work.ink.",
              totalTime: "PT5M",
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
      </div>

      {/* Provider comparison */}
      <div className="container mx-auto max-w-3xl px-4 pt-12">
        <h2 className="mb-4 font-display text-2xl font-bold text-white">
          Linkvertise vs LootLabs vs Work.ink — quick comparison
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-sm text-white/70">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.04] text-left text-xs uppercase tracking-wider text-white/40">
                <th className="px-4 py-3">Provider</th>
                <th className="px-4 py-3">Steps</th>
                <th className="px-4 py-3">Time</th>
                <th className="px-4 py-3">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                ["Linkvertise", "2–3 clicks + countdown", "~60 s", "Most common; stable worldwide"],
                ["LootLabs", "Click tasks + wait", "~90 s", "Sometimes faster on mobile data"],
                ["Work.ink", "Timer + single click", "~45 s", "Fewest steps when available"],
              ].map(([p, steps, time, notes]) => (
                <tr key={p as string}>
                  <td className="px-4 py-3 font-semibold text-white">{p}</td>
                  <td className="px-4 py-3">{steps}</td>
                  <td className="px-4 py-3">{time}</td>
                  <td className="px-4 py-3">{notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* What to avoid */}
      <div className="container mx-auto max-w-3xl px-4 pt-12">
        <h2 className="mb-4 font-display text-2xl font-bold text-white">
          What to avoid during the key process
        </h2>
        <ul className="space-y-3 text-white/65 leading-relaxed">
          <li className="flex gap-3">
            <span className="mt-0.5 text-pink font-bold shrink-0">✕</span>
            <span>
              <strong className="text-white">Never buy a "lifetime key" or "keyless bypass"</strong> — these are
              sold on third-party sites and Discord servers. They are either broken or bundled with
              malware. Delta has no official lifetime key for free users.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-0.5 text-pink font-bold shrink-0">✕</span>
            <span>
              <strong className="text-white">Don't install files offered on Linkvertise pages</strong> — the
              legitimate Linkvertise flow never asks you to install an APK or extension.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-0.5 text-pink font-bold shrink-0">✕</span>
            <span>
              <strong className="text-white">Don't grant browser notification permissions</strong> — ad pages
              will request them. Always tap "Block." These are aggressive push notification
              subscriptions, not part of the key flow.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-0.5 text-pink font-bold shrink-0">✕</span>
            <span>
              <strong className="text-white">Don't share your key</strong> — it's device-bound anyway, so
              sharing it won't help anyone else and might confuse your own session.
            </span>
          </li>
        </ul>
      </div>

      {/* FAQ */}
      <div className="container mx-auto max-w-3xl px-4 pb-6">
        <FaqSection title="Key system FAQ" items={faqItems} />
      </div>

      <div className="container mx-auto max-w-3xl px-4 pb-14">
        <RelatedGuides links={[...RELATED_PRESETS.keySystem]} />
      </div>
    </>
  );
}
