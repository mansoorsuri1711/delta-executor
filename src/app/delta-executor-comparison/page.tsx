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
  title: `Delta Executor vs Other Roblox Executors — Comparison (${APP_VERSION}, 2026)`,
  description:
    "How does Delta Executor compare to other popular Roblox script executors in 2026? Covers platform support (Android, iOS, PC, Mac), key system, Script Hub, update frequency, and safety profile.",
  alternates: { canonical: `${SITE_ORIGIN}/delta-executor-comparison` },
  openGraph: {
    title: `Delta Executor Comparison — ${SITE_NAME}`,
    description: "Delta Executor vs other Roblox executors — platform support, features, and safety.",
    url: `${SITE_ORIGIN}/delta-executor-comparison`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Delta Executor comparison` }],
  },
};

const faqItems = [
  {
    question: "What makes Delta Executor different from other Roblox executors?",
    answer:
      "Delta Executor stands out for its first-class Android support, built-in Script Hub, and active update cadence — most executor competitors are Windows-only or PC-first. Delta also supports iOS via sideloading and Vietnam's VNG Roblox client, giving it broader platform coverage than most alternatives.",
  },
  {
    question: "Is Delta Executor better than Arceus X?",
    answer:
      "Both Delta and Arceus X are well-known mobile Roblox executors. Delta's advantages include a larger Script Hub library and more frequent compatibility updates after Roblox patches. Arceus X has historically offered some features earlier. The 'better' choice depends on your device — test both on a secondary account.",
  },
  {
    question: "Does Delta Executor work better on Android or iOS?",
    answer:
      "Delta's primary platform is Android — it's where the team focuses most testing and updates. The iOS version works well but re-signing (every 7 days with AltStore) adds friction. Android is the smoother daily-driver experience.",
  },
  {
    question: "Are there any free alternatives to Delta Executor?",
    answer:
      "Several free Roblox executors exist for Android: Arceus X, Fluxus, and others. All are free; differences lie in Script Hub quality, update speed, and community support. Delta's key-gated system is free — there is no paid requirement for core functionality.",
  },
  {
    question: "Is Delta Executor the safest Roblox executor?",
    answer:
      "No executor is 'safe' in the sense of guaranteeing you won't be banned — using any executor violates Roblox's ToS. Among the well-known executors, Delta has a reasonable safety track record when downloaded from the official source. The main risk is downloading from mirror sites that distribute modified APKs. See our safety guide for a fuller breakdown.",
  },
];

export default function ComparisonPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Comparison" }]}
      />

      {/* Hero */}
      <div className="container mx-auto max-w-6xl px-4 pb-4 pt-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          <div className="flex-1">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-pink/80">
              Comparison · {APP_VERSION} · {STYLES_UPDATED}
            </p>
            <h1 className="font-display text-4xl font-bold text-white md:text-5xl">
              Delta Executor vs Other Roblox Executors
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/65">
              How Delta Executor stacks up against other popular Roblox script executors in 2026 — covering platform support, features, the key system, and update speed.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <CtaButton href={ANDROID_APK_URL} icon="download">
                Download Delta Executor
              </CtaButton>
              <Link href="/download-delta-executor" className="font-semibold text-pink hover:underline self-center">
                Install guide →
              </Link>
            </div>
          </div>
          <div className="brand-shot-frame brand-shot-frame--side shrink-0">
            <Image
              src={BRAND_HERO}
              alt="Delta Executor interface"
              width={280}
              height={455}
              sizes="220px"
              className="brand-shot"
              priority
            />
          </div>
        </div>
      </div>

      {/* Platform comparison table */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-4 font-display text-2xl font-bold text-white">Platform Support Comparison</h2>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-sm text-white/70">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.04] text-left text-xs uppercase tracking-wider text-white/40">
                <th className="px-4 py-3">Executor</th>
                <th className="px-4 py-3">Android</th>
                <th className="px-4 py-3">iOS</th>
                <th className="px-4 py-3">PC (Windows)</th>
                <th className="px-4 py-3">Mac</th>
                <th className="px-4 py-3">VNG</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                ["Delta Executor", "✅ Native APK", "✅ Via sideload", "✅ Via emulator", "✅ Via emulator", "✅ VNG build"],
                ["Arceus X", "✅ Native APK", "⚠ Limited", "⚠ Via emulator", "⚠ Via emulator", "❓ Varies"],
                ["Fluxus", "✅ Native APK", "❌ No", "⚠ Via emulator", "⚠ Via emulator", "❓ Varies"],
                ["JJSploit (Windows)", "❌ No", "❌ No", "✅ Native EXE", "❌ No", "❌ No"],
              ].map(([name, ...rest]) => (
                <tr key={name as string}>
                  <td className="px-4 py-3 font-semibold text-white">{name}</td>
                  {rest.map((v, i) => (
                    <td key={i} className="px-4 py-3">{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-white/35">
          Comparison is based on publicly available information as of November 2026. Executor availability and features change frequently.
        </p>
      </div>

      {/* Feature comparison */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-4 font-display text-2xl font-bold text-white">Feature Comparison</h2>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-sm text-white/70">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.04] text-left text-xs uppercase tracking-wider text-white/40">
                <th className="px-4 py-3">Feature</th>
                <th className="px-4 py-3">Delta Executor</th>
                <th className="px-4 py-3">Arceus X</th>
                <th className="px-4 py-3">Fluxus</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                ["Price", "Free", "Free", "Free"],
                ["Key system", "24h device-bound", "Yes", "Yes"],
                ["Script Hub", "✅ Built-in", "✅ Built-in", "✅ Built-in"],
                ["Root required", "No", "No", "No"],
                ["Update frequency", "High", "Medium", "Medium"],
                ["iOS support", "✅ Sideload", "Limited", "No"],
                ["Premium tier", "Yes (key removal)", "Yes", "No"],
              ].map(([feat, ...rest]) => (
                <tr key={feat as string}>
                  <td className="px-4 py-3 font-semibold text-white">{feat}</td>
                  {rest.map((v, i) => (
                    <td key={i} className="px-4 py-3">{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Why Delta for mobile */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-4 font-display text-2xl font-bold text-white">Why Delta stands out for mobile players</h2>
        <div className="space-y-3 text-sm text-white/70 leading-relaxed">
          <p>
            For Android and iOS users, Delta Executor is the most fully-featured option in 2026. Its Script Hub library is regularly updated, injection compatibility patches drop quickly after Roblox updates, and the iOS sideload path is documented better than most competitors.
          </p>
          <p>
            For PC-only users who prefer a native Windows tool, options like JJSploit offer a native EXE experience — but come with their own detection risk and are outside the scope of this guide. The emulator path with Delta APK on PC/Mac offers the same injection engine as the mobile version without needing a separate Windows tool.
          </p>
          <p>
            Disclaimer: this comparison is provided for informational purposes. All Roblox script executors violate Roblox&apos;s Terms of Service. Use on an alternate account to protect your main account.
          </p>
        </div>
      </div>

      {/* FAQ */}
      <div className="container mx-auto max-w-3xl px-4 pb-14">
        <FaqSection title="Comparison FAQ" items={faqItems} />
        <RelatedGuides links={[...RELATED_PRESETS.comparison]} />
      </div>
    </>
  );
}
