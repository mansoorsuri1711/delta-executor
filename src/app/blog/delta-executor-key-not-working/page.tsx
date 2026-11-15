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
  title: `Hindi Gumagana ang Delta Executor Key — Ayusin ang Bawat Error (2026)`,
  description:
    "Hindi gumagana ang Delta key pagkatapos ng Linkvertise? Ayusin ang 'Invalid Key,' Too Many Requests, device-bind error, adblock, at completed-but-stuck loop. Kumpletong troubleshooting guide.",
  alternates: { canonical: `${SITE_ORIGIN}/blog/delta-executor-key-not-working` },
  openGraph: {
    title: `Hindi Gumagana ang Delta Executor Key — ${SITE_NAME}`,
    description:
      "Lahat ng dahilan kung bakit nabibigo ang Delta Executor key — network, device-bind, adblock, rate-limit — at hakbang-hakbang na solusyon.",
    url: `${SITE_ORIGIN}/blog/delta-executor-key-not-working`,
    siteName: SITE_NAME,
    type: "article",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Hindi gumagana ang Delta Executor key` }],
  },
};

const faqItems = [
  {
    question: "Bakit 'Invalid Key' kahit kakagenerate ko lang?",
    answer:
      "Karaniwang sanhi ay partial copy — hindi buo ang key string. Long-press ang key → 'Select All' bago kopyahin, tapos paste. Tiyakin ding ginagamit mo ang key sa parehong device kung saan ginawa (device-bound ang key).",
  },
  {
    question: "Sinasabi ng Linkvertise ang 'Too Many Requests' — ano ang gagawin?",
    answer:
      "Nililimitahan ng Linkvertise ang mabilis na paulit-ulit na bisita mula sa parehong IP. Maghintay ng 5–10 minuto at subukan muli. Kung naka-Wi-Fi, lumipat sa mobile data (ibang IP). Maaari ring VPN para lampasan ang rate limit.",
  },
  {
    question: "Natapos ko ang lahat ng hakbang pero walang key string.",
    answer:
      "Minsan nangyayari ang 'completed-but-stuck' loop kapag hindi nagre-redirect ang browser sa key confirmation page. Subukan: burahin ang browser cache, ibang browser (Chrome vs Firefox), o ibang provider (Linkvertise → LootLabs → Work.ink).",
  },
  {
    question: "Bina-block ng adblock ang key gateway — i-disable ba?",
    answer:
      "Oo, pansamantalang i-disable ang adblocker para sa domain ng Linkvertise/LootLabs/Work.ink habang ginagawa ang key flow. Gumagamit ang mga provider ng ad injection para i-validate ang completion; pinipigilan ng agresibong adblocker ang checkpoint. I-enable muli pagkatapos makakuha ng key.",
  },
  {
    question: "Maaari ba akong gumamit ng 'bypass' site para laktawan ang gateway?",
    answer:
      "Hindi. Delikado ang third-party 'bypass' o 'skip' site para sa Linkvertise. Hindi gumagana (invalid ang key) o may malware at phishing. Tanging opisyal na Delta gateway ang lehitimong paraan.",
  },
  {
    question: "Gumana kahapon ang key ko pero hindi ngayon.",
    answer:
      "Nag-e-expire ang key pagkatapos ng 24 oras. By design ito. Buksan ang Delta Executor, i-tap 'Get Key,' at gumawa ng bago. Walang paraan na i-extend ang key sa libreng tier — nilalaktawan lang ito ng Delta Premium.",
  },
  {
    question: "Nagpalit ako ng phone at huminto ang key.",
    answer:
      "Device-bound ang key. Kapag bagong phone, nagpalit ng ROM, o factory-reset, kailangan ng bagong key sa bagong device. Hindi lilipat ang lumang key.",
  },
  {
    question: "'Key Error' ang Delta pagkatapos ng Roblox update — ano nangyari?",
    answer:
      "Minsan binabago ng Roblox update kung paano nag-validate ang Delta. Kung fresh key pa rin may error, tingnan ang Delta Discord para sa hotfix APK. Pansamantalang pag-downgrade ng Roblox ay maaaring makabawi habang naghihintay.",
  },
];

const errors = [
  {
    id: "invalid-key",
    title: "Invalid Key",
    causes: [
      "Partial copy — hindi buo ang key string.",
      "Ginawa ang key sa ibang device (device-bound).",
      "Expired na ang key (>24 oras na).",
      "Lumang bersyon ng Delta na ibang key format.",
    ],
    fixes: [
      "Long-press ang key string → 'Select All' → Copy. I-paste sa Delta.",
      "Gumawa ng key sa device kung saan mo ito gagamitin.",
      "I-tap ang 'Get Key' sa Delta para sa bagong token.",
      `I-update ang Delta Executor sa ${APP_VERSION} mula sa opisyal na download page.`,
    ],
  },
  {
    id: "too-many-requests",
    title: "Too Many Requests (Linkvertise / LootLabs)",
    causes: [
      "Maraming sunod-sunod na pagtatangka sa key gateway.",
      "Shared IP ang ISP mo na marami ring nag-trigger ng limit.",
    ],
    fixes: [
      "Maghintay ng 5–10 minuto at subukan muli.",
      "Lumipat mula Wi-Fi patungong mobile data para sa ibang IP.",
      "Gumamit ng VPN para palitan ang IP, tapos subukan muli ang gateway.",
      "Lumipat sa ibang checkpoint provider (LootLabs o Work.ink).",
    ],
  },
  {
    id: "completed-stuck",
    title: "Natapos ang checkpoint pero walang key",
    causes: [
      "Hindi nag-redirect ang browser sa key confirmation page.",
      "Pinigilan ng adblocker o content blocker ang huling hakbang.",
      "Na-block ng cookies o tracking protection ang session handshake.",
    ],
    fixes: [
      "I-disable ang adblocker para sa gateway domain, gawin muli ang flow.",
      "Burahin ang cache at cookies ng browser, subukan muli.",
      "Subukan ang ibang browser (Chrome, Firefox, o in-app browser).",
      "Lumipat sa ibang checkpoint provider.",
    ],
  },
  {
    id: "wrong-network",
    title: "May key pero hindi ma-validate sa Delta",
    causes: [
      "Nagbago ang network sa pagitan ng generate at validate (Wi-Fi → data).",
      "Naka-VPN sa generate pero off sa validate.",
      "Binago ng Roblox update ang internal validation ng Delta.",
    ],
    fixes: [
      "Panatilihing pareho ang network sa buong key flow at validation.",
      "Kung VPN, panatilihing on o off sa parehong hakbang.",
      "Tingnan ang Discord ng Delta para sa post-update hotfix APK.",
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
          { label: "Hindi Gumagana ang Key" },
        ]}
      />

      <BlogPostSchema
        title="Hindi Gumagana ang Delta Executor Key — Ayusin ang Bawat Error (2026)"
        description="Ayusin ang 'Invalid Key,' Too Many Requests, device-bind error, adblock, at completed-but-stuck loop. Kumpletong troubleshooting guide."
        slug="delta-executor-key-not-working"
        datePublished="2026-11-15"
        image={`${SITE_ORIGIN}${BRAND_FEATURE_3}`}
      />

      {/* Hero */}
      <div className="container mx-auto max-w-6xl px-4 pb-4 pt-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          <div className="flex-1">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-pink/80">
              Troubleshooting · {APP_VERSION} · Nobyembre 15, 2026
            </p>
            <h1 className="font-display text-4xl font-bold text-white md:text-5xl">
              Hindi Gumagana ang Delta Executor Key
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/65">
              Maaaring mabigo ang Delta key sa maraming dahilan — expired token, maling network,
              adblock, rate-limit, o pagbabago ng format pagkatapos ng update. Tinutulungan ka ng gabay
              na ito sa bawat karaniwang pagkabigo na may tiyak na solusyon.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <CtaButton href={ANDROID_APK_URL} icon="download">
                I-download ang Pinakabagong Delta
              </CtaButton>
              <Link
                href="/blog/how-to-get-delta-executor-key"
                className="font-semibold text-pink hover:underline self-center"
              >
                Paano kumuha ng key →
              </Link>
            </div>
          </div>
          <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-muted md:w-64 lg:w-80">
            <Image
              src={BRAND_FEATURE_3}
              alt="Delta Executor — download at unlock screen"
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
          Mabilis na checklist bago lumalim
        </h2>
        <ul className="space-y-2 text-white/65 text-sm leading-relaxed">
          {[
            "Mas bata sa 24 oras ang key mo — nag-e-expire ang key eksaktong 24 oras.",
            "Parehong device kung saan ginawa ang key (device-bound ang mga key).",
            "Buong key string ang kinopya mo — long-press → Select All → Copy.",
            `Gumagamit ka ng Delta Executor ${APP_VERSION} — ibang key format ang lumang bersyon.`,
            "Stable at hindi nagbago ang internet mula nang ginawa ang key.",
            "HINDI ka gumagamit ng 'bypass site' — invalid o pekeng key ang produkto ng mga iyon.",
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
          Karaniwang error — sanhi at solusyon
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
                    Malamang na sanhi
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
                    Solusyon
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
          Bakit hindi gumagana — at delikado — ang mga &quot;bypass&quot; site
        </h2>
        <p className="text-white/65 leading-relaxed">
          Sa paghahanap ng &quot;delta executor linkvertise bypass&quot; o &quot;skip key delta&quot; lalabas ang mga
          third-party site na nagsasabing makakagawa ng valid key nang hindi dumadaan sa checkpoint.{" "}
          <strong className="text-white">Wala sa mga ito ang maaasahang gumagana</strong> — peke o
          recycled mula sa lumang session ang mga key.
        </p>
        <p className="mt-4 text-white/65 leading-relaxed">
          Mas delikado, marami sa mga site na ito ay phishing na ginagaya ang interface ng Delta at
          humihingi ng Roblox username o &quot;verify&quot; sa survey na nangongolekta ng personal na data. May
          auto-redirect din sa APK na may adware.
        </p>
        <div className="mt-5 rounded-2xl border border-red-500/30 bg-red-500/5 px-5 py-4">
          <p className="text-sm font-semibold text-red-400">Tanging ligtas na tuntunin</p>
          <p className="mt-1 text-sm text-white/65">
            Sa opisyal na &quot;Get Key&quot; button sa loob ng Delta Executor lamang gumawa ng key. Huwag
            maglagay ng Roblox credentials sa anumang page mula sa key flow.
          </p>
        </div>
      </div>

      {/* Still stuck */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-4 font-display text-2xl font-bold text-white md:text-3xl">
          Stuck pa rin? Heto kung saan humingi ng tulong
        </h2>
        <p className="text-white/65 leading-relaxed mb-4">
          Kung wala sa mga solusyon sa itaas ang gumana, maaaring post-update compatibility issue na
          apektado ang lahat. Tingnan ang mga resource na ito:
        </p>
        <ul className="space-y-3 text-sm text-white/65">
          <li className="flex gap-3">
            <span className="text-pink font-bold shrink-0 mt-0.5">→</span>
            <span>
              <Link href="/delta-executor-discord" className="text-pink hover:underline font-semibold">
                Delta Executor Discord
              </Link>{" "}
              — unang lugar kung saan ibinabahagi ang post-update fix (#announcements).
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-pink font-bold shrink-0 mt-0.5">→</span>
            <span>
              <Link href="/delta-executor-troubleshooting" className="text-pink hover:underline font-semibold">
                Kumpletong troubleshooting guide
              </Link>{" "}
              — injection failure, crash loop, at iba pa bukod sa key system.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-pink font-bold shrink-0 mt-0.5">→</span>
            <span>
              <Link href="/download-delta-executor" className="text-pink hover:underline font-semibold">
                Download page
              </Link>{" "}
              — tiyaking pinakabagong APK. Pinakakaraniwang sanhi ang lumang bersyon.
            </span>
          </li>
        </ul>
      </div>

      {/* FAQ */}
      <div className="container mx-auto max-w-3xl px-4 pb-6">
        <FaqSection title="FAQ: Hindi gumagana ang key" items={faqItems} />
      </div>

      <div className="container mx-auto max-w-3xl px-4 pb-14">
        <RelatedGuides links={[...RELATED_PRESETS.keyNotWorking]} />
      </div>
    </>
  );
}
