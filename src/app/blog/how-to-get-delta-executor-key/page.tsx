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
  title: `Paano Kunin ang Delta Executor Key — Gabay 2026`,
  description:
    "Hakbang-hakbang na walkthrough para kumuha ng Delta Executor key sa Linkvertise, LootLabs, at Work.ink — walang install o survey. Kasama ang Premium skip at mga dapat iwasan.",
  alternates: { canonical: `${SITE_ORIGIN}/blog/how-to-get-delta-executor-key` },
  openGraph: {
    title: `Paano Kunin ang Delta Executor Key — ${SITE_NAME}`,
    description:
      "Kumpletong gabay sa Delta Executor key gateway sa Linkvertise, LootLabs, at Work.ink nang ligtas at mabilis.",
    url: `${SITE_ORIGIN}/blog/how-to-get-delta-executor-key`,
    siteName: SITE_NAME,
    type: "article",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Gabay sa Delta Executor key` }],
  },
};

const faqItems = [
  {
    question: "Gaano katagal valid ang Delta Executor key?",
    answer:
      "Valid ang bawat key nang eksaktong 24 oras mula sa pag-generate. Pagkatapos ng 24 oras hihingin ng app ang bagong key — hindi mo ma-extend o magamit muli ang expired na key.",
  },
  {
    question: "Naka-tie ba ang Delta key sa device ko?",
    answer:
      "Oo. Device-bound ang mga key, ibig sabihin ang key na ginawa sa phone mo ay hindi gagana sa ibang phone o emulator. Kapag lumipat ng device, gumawa ng bagong key sa bagong device.",
  },
  {
    question: "Ano ang Linkvertise at bakit ito ginagamit ng Delta?",
    answer:
      "Ang Linkvertise ay URL-shortening service na nagpapakita ng maikling ad page bago ilabas ang destination link. Ginagamit ito ng developer ng Delta (at tulad ng LootLabs at Work.ink) para kumita mula sa libreng app nang hindi direktang sinisingil ang user. Wala kang ini-install — naghihintay ka lang sa maikling ad flow.",
  },
  {
    question: "Maaari ko bang laktawan ang key sa Delta Premium?",
    answer:
      "Oo. Nilalaktawan ng Delta Premium subscriber ang daily key requirement. Nasa in-app upgrade o opisyal na Premium page ang kasalukuyang presyo.",
  },
  {
    question: "Ligtas bang mag-click sa Linkvertise / LootLabs?",
    answer:
      "Ad page ang opisyal na Linkvertise at LootLabs flow — walang ini-install kung standard browser at tinatanggihan ang notification prompt. Huwag mag-download ng file sa mga page na iyon at huwag magbigay ng notification access.",
  },
  {
    question: "Dapat ko bang bilhin ang 'lifetime keyless' Delta crack?",
    answer:
      "Hindi talaga. Scam ang anumang site na nagbebenta ng 'keyless Delta' o 'lifetime key'. Pinakamabuti ay cracked APK na walang safety check; pinakamasama ay may malware. Ang tanging ligtas na pinagmulan ay opisyal na download sa site na ito.",
  },
  {
    question: "Bakit 'Too Many Requests' ang sabi ng key page?",
    answer:
      "Nililimitahan ng Linkvertise at LootLabs ang mabilis na paulit-ulit na bisita mula sa parehong IP. Maghintay ng 5–10 minuto, lumipat sa mobile data kung naka-Wi-Fi, at subukan muli. Tingnan ang artikulo naming key-not-working para sa buong paliwanag.",
  },
];

const steps = [
  {
    n: 1,
    title: "Buksan ang Delta Executor at i-tap ang 'Get Key'",
    body: "I-launch ang Delta Executor app. Kapag aktibo ang key gate, may screen na may 'Get Key' button. I-tap ito — bubuksan ang key gateway sa default browser mo.",
  },
  {
    n: 2,
    title: "Piliin ang gateway provider",
    body: "May tatlong checkpoint provider ang Delta: Linkvertise, LootLabs, at Work.ink. Kahit alin ay gumagana. Piliin ang pinakamabilis mag-load sa koneksyon mo.",
  },
  {
    n: 3,
    title: "Tapusin ang Linkvertise checkpoint",
    body: "Sa Linkvertise: i-tap ang 'Free Access with Ads,' hintayin ang countdown, tapos 'Continue.' Maaaring may pangalawang page — i-tap ang 'I am not a robot' at hintayin ang isa pang maikling countdown. HUWAG mag-click ng download button o magbigay ng notification permission.",
  },
  {
    n: 4,
    title: "Tapusin ang LootLabs o Work.ink checkpoint",
    body: "Sa LootLabs: i-click ang 'Get Access,' gawin ang maikling task (karaniwang mag-click ng link at maghintay), tapos 'Get Key.' Sa Work.ink: 'Continue,' hintayin ang timer, at 'Get Reward.' Parehong provider ang magre-redirect sa key page ng Delta kapag tapos.",
  },
  {
    n: 5,
    title: "Kopyahin ang key string",
    body: "Pagkatapos ng checkpoint, makikita mo ang mahabang alphanumeric string — iyon ang key mo. I-tap ang copy icon o long-press → Select All → Copy. Dapat buo ang string; partial copy ang sanhi ng 'Invalid Key' error.",
  },
  {
    n: 6,
    title: "I-paste ang key sa Delta Executor",
    body: "Bumalik sa Delta Executor. I-tap ang key input, long-press at Paste. I-tap ang 'Connect' o 'Verify.' Kapag valid at hindi expired ang key, mag-u-unlock ang app at dadalhin ka sa main interface.",
  },
];

export default function HowToGetDeltaKeyPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Paano Kunin ang Delta Key" },
        ]}
      />

      <BlogPostSchema
        title="Paano Kunin ang Delta Executor Key — Hakbang-hakbang (2026)"
        description="Hakbang-hakbang na walkthrough para kumuha ng Delta Executor key sa Linkvertise, LootLabs, at Work.ink — walang install o survey."
        slug="how-to-get-delta-executor-key"
        datePublished="2026-11-15"
        image={`${SITE_ORIGIN}${BRAND_FEATURE_KEY}`}
      />

      {/* Hero */}
      <div className="container mx-auto max-w-6xl px-4 pb-4 pt-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          <div className="flex-1">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-pink/80">
              Gabay sa Key · {APP_VERSION} · Nobyembre 15, 2026
            </p>
            <h1 className="font-display text-4xl font-bold text-white md:text-5xl">
              Paano Kunin ang Delta Executor Key
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/65">
              Para pigilan ang automated abuse ang key system ng Delta — hindi para i-frustrate ka.
              Saklaw ng walkthrough na ito ang bawat checkpoint sa Linkvertise, LootLabs, at Work.ink
              upang ma-unlock ang app sa loob ng limang minuto nang walang install o bayad sa iba.
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
              <Link
                href="/blog/delta-executor-key-not-working"
                className="font-semibold text-pink hover:underline self-center"
              >
                Hindi gumagana ang key? →
              </Link>
            </div>
          </div>
          <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-muted md:w-64 lg:w-80">
            <Image
              src={BRAND_FEATURE_KEY}
              alt="Delta Executor — success screen ng key whitelist"
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
          Ano ang Delta Executor key system?
        </h2>
        <p className="text-white/65 leading-relaxed">
          Ang Delta Executor ay libreng Android Roblox script executor. Para sustentuhan ang
          development nang walang upfront charge, gumagamit ang app ng{" "}
          <strong className="text-white">key system</strong>: isang beses kada 24 oras dapat
          bumisita sa maikling ad checkpoint at kumuha ng time-limited token bago mag-unlock ang app.
          Bago ang token sa bawat pagkakataon — walang permanente na &quot;lifetime key&quot; para sa
          libreng user.
        </p>
        <p className="mt-4 text-white/65 leading-relaxed">
          <strong className="text-white">Device-bound</strong> ang mga key. Ang token sa phone mo ay
          hindi mag-a-activate ng Delta sa ibang device. Kapag lumipat ng phone, tumakbo sa emulator,
          o factory-reset, kailangan ng bagong key.
        </p>
        <div className="mt-6 rounded-2xl border border-pink/20 bg-pink/5 px-5 py-4">
          <p className="text-sm font-semibold text-pink">Delta Premium</p>
          <p className="mt-1 text-sm text-white/65">
            Nilalaktawan ng Delta Premium subscriber ang daily key requirement. Kapag araw-araw mong
            ginagamit ang Delta, sulit ang upgrade sa oras na natitipid. Tingnan ang in-app store o
            Premium page para sa kasalukuyang presyo.
          </p>
        </div>
      </div>

      {/* Step-by-step */}
      <div className="container mx-auto max-w-3xl px-4 pt-12">
        <h2 className="mb-2 font-display text-2xl font-bold text-white md:text-3xl">
          Hakbang-hakbang: kumuha ng key sa loob ng 5 minuto
        </h2>
        <p className="mb-8 text-sm text-white/45">Gumagana sa Android — walang install, walang survey</p>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "Paano Kumuha ng Delta Executor Key",
              description:
                "Hakbang-hakbang na gabay sa Delta Executor key gateway sa Linkvertise, LootLabs, at Work.ink.",
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
          Linkvertise vs LootLabs vs Work.ink — mabilis na paghahambing
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-sm text-white/70">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.04] text-left text-xs uppercase tracking-wider text-white/40">
                <th className="px-4 py-3">Provider</th>
                <th className="px-4 py-3">Hakbang</th>
                <th className="px-4 py-3">Oras</th>
                <th className="px-4 py-3">Tala</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                ["Linkvertise", "2–3 click + countdown", "~60 s", "Pinakakaraniwan; stable sa buong mundo"],
                ["LootLabs", "Mga click task + hintay", "~90 s", "Minsan mas mabilis sa mobile data"],
                ["Work.ink", "Timer + isang click", "~45 s", "Pinakakaunting hakbang kapag available"],
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
          Mga dapat iwasan sa proseso ng key
        </h2>
        <ul className="space-y-3 text-white/65 leading-relaxed">
          <li className="flex gap-3">
            <span className="mt-0.5 text-pink font-bold shrink-0">✕</span>
            <span>
              <strong className="text-white">Huwag bumili ng &quot;lifetime key&quot; o &quot;keyless bypass&quot;</strong> — ibinebenta sa third-party site at Discord server. Sira ang mga ito o may malware. Walang opisyal na lifetime key ang Delta para sa libreng user.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-0.5 text-pink font-bold shrink-0">✕</span>
            <span>
              <strong className="text-white">Huwag mag-install ng file sa Linkvertise page</strong> — hindi hinihingi ng lehitimong Linkvertise flow ang APK o extension.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-0.5 text-pink font-bold shrink-0">✕</span>
            <span>
              <strong className="text-white">Huwag magbigay ng browser notification permission</strong> — hihingin ito ng ad page. Palaging &quot;Block.&quot; Agresibong push subscription ito, hindi bahagi ng key flow.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-0.5 text-pink font-bold shrink-0">✕</span>
            <span>
              <strong className="text-white">Huwag ibahagi ang key</strong> — device-bound naman, kaya hindi makakatulong sa iba at maaaring lituhin ang sarili mong session.
            </span>
          </li>
        </ul>
      </div>

      {/* FAQ */}
      <div className="container mx-auto max-w-3xl px-4 pb-6">
        <FaqSection title="FAQ sa key system" items={faqItems} />
      </div>

      <div className="container mx-auto max-w-3xl px-4 pb-14">
        <RelatedGuides links={[...RELATED_PRESETS.keySystem]} />
      </div>
    </>
  );
}
