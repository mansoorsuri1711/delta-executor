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
  title: `Delta Executor vs Ibang Roblox Executor — Paghahambing (${APP_VERSION}, 2026)`,
  description:
    "Paano ihambing ang Delta Executor sa iba pang sikat na Roblox script executor sa 2026? Saklaw: platform support (Android, iOS, PC, Mac), key system, Script Hub, update frequency, at safety profile — para sa mga manlalaro sa Pilipinas.",
  alternates: { canonical: `${SITE_ORIGIN}/delta-executor-comparison` },
  openGraph: {
    title: `Paghahambing ng Delta Executor — ${SITE_NAME}`,
    description: "Delta Executor vs ibang Roblox executor — platform support, features, at safety.",
    url: `${SITE_ORIGIN}/delta-executor-comparison`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Paghahambing ng Delta Executor` }],
  },
};

const faqItems = [
  {
    question: "Ano ang nagpapadistinct sa Delta Executor mula sa ibang Roblox executor?",
    answer:
      "Namumukod-tangi ang Delta Executor sa first-class Android support, built-in Script Hub, at aktibong update cadence — karamihan ng kakumpetensya ay Windows-only o PC-first. Sinusuportahan din ng Delta ang iOS via sideloading at Vietnam's VNG Roblox client, kaya mas malawak ang platform coverage kaysa karamihan ng alternatibo.",
  },
  {
    question: "Mas mahusay ba ang Delta Executor kaysa Arceus X?",
    answer:
      "Kilala pareho ang Delta at Arceus X bilang mobile Roblox executor. Kasama sa advantages ng Delta ang mas malaking Script Hub library at mas madalas na compatibility updates pagkatapos ng Roblox patches. May ilang features na mas mauna historically sa Arceus X. Nakadepende sa device ang 'mas mahusay' — subukan pareho sa secondary account.",
  },
  {
    question: "Mas mahusay ba ang Delta Executor sa Android o iOS?",
    answer:
      "Android ang primary platform ng Delta — doon nakatuon ang karamihan ng testing at updates. Mahusay din ang iOS version pero may friction ang re-signing (tuwing 7 araw sa AltStore). Android ang mas smooth na daily-driver experience.",
  },
  {
    question: "May libreng alternatibo ba sa Delta Executor?",
    answer:
      "May ilang libreng Roblox executor para sa Android: Arceus X, Fluxus, at iba pa. Libre lahat; ang pagkakaiba ay Script Hub quality, update speed, at community support. Libre ang key-gated system ng Delta — walang bayad na requirement para sa core functionality.",
  },
  {
    question: "Pinakaligtas bang Roblox executor ang Delta Executor?",
    answer:
      "Walang executor na 'ligtas' sa kahulugang ginagarantiyahan kang hindi maba-ban — lumalabag ang anumang executor sa ToS ng Roblox. Sa mga kilalang executor, may reasonable safety track record ang Delta kapag na-download mula sa opisyal na source. Ang pangunahing panganib ay ang pag-download mula sa mirror sites na nagpapakalat ng modified APKs. Tingnan ang safety guide namin para sa mas detalyadong breakdown.",
  },
];

export default function ComparisonPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Paghahambing" }]}
      />

      {/* Hero */}
      <div className="container mx-auto max-w-6xl px-4 pb-4 pt-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          <div className="flex-1">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-pink/80">
              Paghahambing · {APP_VERSION} · {STYLES_UPDATED}
            </p>
            <h1 className="font-display text-4xl font-bold text-white md:text-5xl">
              Delta Executor vs Ibang Roblox Executor
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/65">
              Paano nakikipaglaban ang Delta Executor sa iba pang sikat na Roblox script executor sa 2026 — platform support, features, key system, at bilis ng update.
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
              src={BRAND_HERO}
              alt="Interface ng Delta Executor"
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
        <h2 className="mb-4 font-display text-2xl font-bold text-white">Paghahambing ng Platform Support</h2>
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
                ["Arceus X", "✅ Native APK", "⚠ Limitado", "⚠ Via emulator", "⚠ Via emulator", "❓ Nag-iiba"],
                ["Fluxus", "✅ Native APK", "❌ Wala", "⚠ Via emulator", "⚠ Via emulator", "❓ Nag-iiba"],
                ["JJSploit (Windows)", "❌ Wala", "❌ Wala", "✅ Native EXE", "❌ Wala", "❌ Wala"],
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
          Batay sa publicly available na impormasyon hanggang Nobyembre 2026 ang paghahambing. Madalas nagbabago ang availability at features ng executor.
        </p>
      </div>

      {/* Feature comparison */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-4 font-display text-2xl font-bold text-white">Paghahambing ng Features</h2>
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
                ["Presyo", "Libre", "Libre", "Libre"],
                ["Key system", "24h device-bound", "Oo", "Oo"],
                ["Script Hub", "✅ Built-in", "✅ Built-in", "✅ Built-in"],
                ["Kailangan ng root", "Hindi", "Hindi", "Hindi"],
                ["Dalas ng update", "Mataas", "Katamtaman", "Katamtaman"],
                ["Suporta sa iOS", "✅ Sideload", "Limitado", "Wala"],
                ["Premium tier", "Oo (alisin ang key)", "Oo", "Wala"],
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
        <h2 className="mb-4 font-display text-2xl font-bold text-white">Bakit namumukod-tangi ang Delta para sa mobile players</h2>
        <div className="space-y-3 text-sm text-white/70 leading-relaxed">
          <p>
            Para sa Android at iOS users — lalo na sa Pilipinas kung saan dominant ang mobile gaming — ang Delta Executor ang pinaka-full-featured na opsyon sa 2026. Regular na ina-update ang Script Hub library, mabilis ang injection compatibility patches pagkatapos ng Roblox updates, at mas dokumentado ang iOS sideload path kaysa karamihan ng kakumpetensya.
          </p>
          <p>
            Para sa PC-only users na mas gusto ang native Windows tool, may opsyon tulad ng JJSploit na may native EXE experience — pero may sariling detection risk at wala sa scope ng gabay na ito. Ang emulator path gamit ang Delta APK sa PC/Mac ay parehong injection engine sa mobile version nang walang hiwalay na Windows tool.
          </p>
          <p>
            Disclaimer: para sa informational purposes ang paghahambing na ito. Lumalabag ang lahat ng Roblox script executor sa Terms of Service ng Roblox. Gumamit sa alternate account para protektahan ang main account.
          </p>
        </div>
      </div>

      {/* FAQ */}
      <div className="container mx-auto max-w-3xl px-4 pb-14">
        <FaqSection title="FAQ sa Paghahambing" items={faqItems} />
        <RelatedGuides links={[...RELATED_PRESETS.comparison]} />
      </div>
    </>
  );
}