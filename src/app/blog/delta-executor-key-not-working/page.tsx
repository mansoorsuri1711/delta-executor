import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogPostSchema from "@/components/BlogPostSchema";
import FaqSection from "@/components/FaqSection";
import CtaButton from "@/components/CtaButton";
import RelatedGuides, { RELATED_PRESETS } from "@/components/RelatedGuides";
import {
  BRAND_FEATURE_3,
  OG_IMAGE,
  SITE_NAME,
  SITE_ORIGIN,
  APP_VERSION,
  ANDROID_APK_URL,
  DISCORD_INVITE_URL,
} from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Delta Executor Key Not Working — Fix Every Error (2026)`,
  description:
    "Delta key not working after Linkvertise? Fix 'Invalid Key,' Too Many Requests, device-bind errors, adblock failures, and completed-but-stuck loops. Full troubleshooting guide.",
  alternates: { canonical: `${SITE_ORIGIN}/blog/delta-executor-key-not-working` },
  openGraph: {
    title: `Delta Executor Key Not Working — ${SITE_NAME}`,
    description:
      "Every reason a Delta Executor key fails — network, device-bind, adblock, rate-limits — and step-by-step fixes.",
    url: `${SITE_ORIGIN}/blog/delta-executor-key-not-working`,
    siteName: SITE_NAME,
    type: "article",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Delta Executor key not working` }],
  },
};

const faqItems = [
  {
    question: "Why does the key say 'Invalid Key' even though I just generated it?",
    answer:
      "The most common cause is a partial copy — only part of the key string was captured. Long-press the key and 'Select All' before copying, then paste. Also check that you are using the key on the same device you generated it on (keys are device-bound).",
  },
  {
    question: "Linkvertise says 'Too Many Requests' — what do I do?",
    answer:
      "Linkvertise rate-limits rapid repeated visits from the same IP address. Wait 5–10 minutes, then try again. If you're on Wi-Fi, switch to mobile data (a different IP) and retry. Using a VPN can also bypass the rate limit.",
  },
  {
    question: "I completed all the steps but the key page didn't give me a key string.",
    answer:
      "This 'completed-but-stuck' loop sometimes occurs when the browser fails to redirect back to the key confirmation page. Try: clearing browser cache, switching to a different browser (Chrome vs. Firefox), or switching checkpoint provider (Linkvertise → LootLabs → Work.ink).",
  },
  {
    question: "My adblock is blocking the key gateway — should I disable it?",
    answer:
      "Yes, temporarily disable your adblocker for the Linkvertise/LootLabs/Work.ink domain while completing the key flow. These providers use ad injections to validate completion; aggressive adblockers prevent the checkpoint from registering. Re-enable adblock after you have your key.",
  },
  {
    question: "Can I use a 'bypass' site to skip the key gateway?",
    answer:
      "No. Third-party 'bypass' or 'skip' sites for Linkvertise are unsafe. They either don't work (the key they produce is invalid) or they serve malware and phishing pages. The only legitimate way to get a key is through the official Delta gateway.",
  },
  {
    question: "My key worked yesterday but doesn't work today.",
    answer:
      "Keys expire after 24 hours. This is by design. Open Delta Executor, tap 'Get Key,' and generate a fresh one. There is no way to extend a key's lifetime on the free tier — only Delta Premium subscribers skip this step.",
  },
  {
    question: "I changed phones and my key stopped working.",
    answer:
      "Keys are device-bound. If you switch to a new phone, change ROMs, or factory-reset, you need to generate a fresh key on the new device. The old key will not transfer.",
  },
  {
    question: "Delta shows 'Key Error' after a Roblox update — what happened?",
    answer:
      "Sometimes a Roblox update changes how Delta validates keys internally. If a fresh key still errors after an update, check the Delta Discord for a hotfix APK. Downgrading Roblox to the previous version temporarily can also restore functionality while you wait.",
  },
];

const errors = [
  {
    id: "invalid-key",
    title: "Invalid Key",
    causes: [
      "Partial copy — only part of the key string was captured.",
      "Key generated on a different device (device-bound).",
      "Key has already expired (>24 hours old).",
      "Outdated Delta version with changed key format.",
    ],
    fixes: [
      "Long-press the key string → 'Select All' → Copy. Then paste into Delta.",
      "Generate the key on the device you will use it on.",
      "Tap 'Get Key' in Delta to generate a fresh token.",
      `Update Delta Executor to ${APP_VERSION} from the official download page.`,
    ],
  },
  {
    id: "too-many-requests",
    title: "Too Many Requests (Linkvertise / LootLabs)",
    causes: [
      "You attempted the key gateway multiple times in quick succession.",
      "Your ISP's IP is shared with many other users who also triggered the limit.",
    ],
    fixes: [
      "Wait 5–10 minutes and try again.",
      "Switch from Wi-Fi to mobile data for a different IP address.",
      "Use a VPN to change your apparent IP, then try the gateway again.",
      "Switch to a different checkpoint provider (LootLabs or Work.ink).",
    ],
  },
  {
    id: "completed-stuck",
    title: "Completed checkpoint but no key appeared",
    causes: [
      "Browser failed to redirect to the key confirmation page.",
      "An adblocker or content blocker prevented the final step from firing.",
      "Cookies or tracking protection blocked the session handshake.",
    ],
    fixes: [
      "Disable your adblocker for the gateway domain, then redo the flow.",
      "Clear your browser's cache and cookies, then retry.",
      "Try a different browser (Chrome, Firefox, or the in-app browser).",
      "Switch to a different checkpoint provider.",
    ],
  },
  {
    id: "wrong-network",
    title: "Key generates but fails to validate in Delta",
    causes: [
      "Network changed between key generation and validation (Wi-Fi → data).",
      "VPN was active during generation but disabled during validation.",
      "Roblox update changed Delta's internal validation mechanism.",
    ],
    fixes: [
      "Keep the same network connection throughout the entire key flow and validation.",
      "If using a VPN, keep it enabled or disabled consistently across both steps.",
      "Check Delta's Discord for a post-update hotfix APK.",
    ],
  },
];

export default function DeltaKeyNotWorkingPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Key Not Working" },
        ]}
      />

      <BlogPostSchema
        title="Delta Executor Key Not Working — Fix Every Error (2026)"
        description="Fix 'Invalid Key,' Too Many Requests, device-bind errors, adblock failures, and completed-but-stuck loops. Full troubleshooting guide."
        slug="delta-executor-key-not-working"
        datePublished="2026-11-15"
        image={`${SITE_ORIGIN}${BRAND_FEATURE_3}`}
      />

      {/* Hero */}
      <div className="container mx-auto max-w-6xl px-4 pb-4 pt-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          <div className="flex-1">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-pink/80">
              Troubleshooting · {APP_VERSION} · November 15, 2026
            </p>
            <h1 className="font-display text-4xl font-bold text-white md:text-5xl">
              Delta Executor Key Not Working
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/65">
              A Delta key can fail for half a dozen different reasons — expired token, wrong
              network, adblock interference, rate-limits, or a post-update format change. This guide
              walks through every common failure with specific fixes.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <CtaButton href={ANDROID_APK_URL} icon="download">
                Download Latest Delta
              </CtaButton>
              <Link
                href="/blog/how-to-get-delta-executor-key"
                className="font-semibold text-pink hover:underline self-center"
              >
                How to get a key →
              </Link>
            </div>
          </div>
          <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-muted md:w-64 lg:w-80">
            <Image
              src={BRAND_FEATURE_3}
              alt="Delta Executor download and unlock screen"
              width={280}
              height={455}
              sizes="220px"
              className="brand-shot"
              priority
            />
          </div>
        </div>
      </div>

      {/* Quick check */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-4 font-display text-2xl font-bold text-white md:text-3xl">
          Quick checklist before diving deep
        </h2>
        <ul className="space-y-2 text-white/65 text-sm leading-relaxed">
          {[
            "Your key is less than 24 hours old — keys expire after exactly 24 hours.",
            "You are on the same device you generated the key on (keys are device-bound).",
            "You copied the entire key string — long-press → Select All → Copy.",
            `You are using Delta Executor ${APP_VERSION} — older versions use different key formats.`,
            "Your internet connection is stable and unchanged from when you generated the key.",
            "You are NOT using a 'bypass site' — those produce invalid or fake keys.",
          ].map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="text-pink font-bold shrink-0 mt-0.5">{i + 1}.</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Error breakdowns */}
      <div className="container mx-auto max-w-3xl px-4 pt-12">
        <h2 className="mb-6 font-display text-2xl font-bold text-white md:text-3xl">
          Common errors — causes and fixes
        </h2>
        <div className="space-y-6">
          {errors.map((err) => (
            <div
              key={err.id}
              id={err.id}
              className="rounded-2xl border border-white/10 bg-card p-5"
            >
              <h3 className="mb-4 font-display text-xl font-bold text-white">{err.title}</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/40">
                    Likely causes
                  </p>
                  <ul className="space-y-1.5 text-sm text-white/60">
                    {err.causes.map((c) => (
                      <li key={c} className="flex gap-2">
                        <span className="text-red-400 shrink-0 mt-0.5">✕</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/40">
                    Fixes
                  </p>
                  <ul className="space-y-1.5 text-sm text-white/60">
                    {err.fixes.map((f) => (
                      <li key={f} className="flex gap-2">
                        <span className="text-green-400 shrink-0 mt-0.5">✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bypass sites warning */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-4 font-display text-2xl font-bold text-white md:text-3xl">
          Why "bypass" sites don't work — and are unsafe
        </h2>
        <p className="text-white/65 leading-relaxed">
          Search results for "delta executor linkvertise bypass" or "skip key delta" surface a
          cluster of third-party sites claiming to generate valid keys without going through the
          checkpoint. <strong className="text-white">None of these work reliably</strong> — the keys
          they produce are either fabricated (and immediately rejected by Delta) or recycled from
          old sessions.
        </p>
        <p className="mt-4 text-white/65 leading-relaxed">
          More dangerously, many of these sites are phishing pages that imitate the Delta interface
          and ask you to enter your Roblox username or "verify" with a survey that harvests personal
          data. Others auto-redirect to APK downloads laced with adware.
        </p>
        <div className="mt-5 rounded-2xl border border-red-500/30 bg-red-500/5 px-5 py-4">
          <p className="text-sm font-semibold text-red-400">The only safe rule</p>
          <p className="mt-1 text-sm text-white/65">
            Only generate your key through the official "Get Key" button inside Delta Executor
            itself. Never enter your Roblox credentials on any page reached through the key flow.
          </p>
        </div>
      </div>

      {/* Still stuck */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-4 font-display text-2xl font-bold text-white md:text-3xl">
          Still stuck? Here's where to get help
        </h2>
        <p className="text-white/65 leading-relaxed mb-4">
          If none of the fixes above resolve your issue, there may be a post-update compatibility
          problem affecting all users. Check these resources:
        </p>
        <ul className="space-y-3 text-sm text-white/65">
          <li className="flex gap-3">
            <span className="text-pink font-bold shrink-0 mt-0.5">→</span>
            <span>
              <Link href="/delta-executor-discord" className="text-pink hover:underline font-semibold">
                Delta Executor Discord
              </Link>{" "}
              — the #announcements channel is the first place post-update fixes are shared.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-pink font-bold shrink-0 mt-0.5">→</span>
            <span>
              <Link href="/delta-executor-troubleshooting" className="text-pink hover:underline font-semibold">
                Full troubleshooting guide
              </Link>{" "}
              — covers injection failures, crash loops, and more beyond the key system.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-pink font-bold shrink-0 mt-0.5">→</span>
            <span>
              <Link href="/download-delta-executor" className="text-pink hover:underline font-semibold">
                Download page
              </Link>{" "}
              — make sure you're on the latest APK. Outdated versions are the most common root cause.
            </span>
          </li>
        </ul>
      </div>

      {/* FAQ */}
      <div className="container mx-auto max-w-3xl px-4 pb-6">
        <FaqSection title="Key not working FAQ" items={faqItems} />
      </div>

      <div className="container mx-auto max-w-3xl px-4 pb-14">
        <RelatedGuides links={[...RELATED_PRESETS.keyNotWorking]} />
      </div>
    </>
  );
}
