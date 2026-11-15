import Image from "next/image";
import Link from "next/link";
import FaqSection from "@/components/FaqSection";
import { WEB_APPLICATION_JSON_LD } from "@/lib/appFacts";
import { imageObjectLicensing } from "@/lib/schemaImageLicensing";
import {
  ANDROID_APK_URL,
  APP_VERSION,
  BRAND_FEATURE_2,
  BRAND_FEATURE_3,
  BRAND_FEATURE_4,
  BRAND_HERO,
  SITE_ORIGIN,
  SITE_RATING,
  SOCIAL_LABELS,
  SOCIAL_LINKS,
  STYLES_UPDATED,
  SITE_NAME,
} from "@/lib/siteConfig";
import { type SiteLocale, DEFAULT_LOCALE } from "@/lib/locales";
import { getMessages } from "@/lib/i18n/messages";
import { ROUTES } from "@/lib/routes";

export default function HomePageView({ locale = DEFAULT_LOCALE }: { locale?: SiteLocale }) {
  const t = getMessages(locale.code);

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_ORIGIN}/#website`,
        url: SITE_ORIGIN,
        name: t.brand,
        description: t.metaDescription,
        publisher: { "@id": `${SITE_ORIGIN}/#organization` },
        inLanguage: "fil",
      },
      {
        ...WEB_APPLICATION_JSON_LD,
        name: "Delta Executor",
        alternateName: ["Delta X Executor", "Delta Roblox Executor"],
        "@id": `${SITE_ORIGIN}/#app`,
        description: t.metaDescription,
      },
      {
        "@type": "HowTo",
        name: t.howTitle,
        description: `${t.howIntroBefore} ${t.howIntroLink} ${t.howIntroAfter}`,
        totalTime: "PT10M",
        step: t.howSteps.map((step, index) => ({
          "@type": "HowToStep",
          position: index + 1,
          name: step.name,
          text: step.text,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: t.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      {
        "@type": "ImageObject",
        contentUrl: `${SITE_ORIGIN}${BRAND_HERO}`,
        url: `${SITE_ORIGIN}${BRAND_HERO}`,
        width: 280,
        height: 455,
        caption: "Delta Executor — Get Delta Key mobile guide",
        ...imageObjectLicensing,
      },
    ],
  };

  const guideTopics = [
    {
      title: "Pag-download sa Android",
      body: "Naka-install ang Delta Executor bilang APK sa Android. Ang pagpayag sa unknown sources, pagpili ng tamang ARM build, at pagsuri sa Play Protect prompt ang madalas na nalalampasan ng mga player. Sunud-sunod ang checklist sa download page.",
      href: ROUTES.download,
      linkLabel: "Gabay sa pag-download sa Android",
    },
    {
      title: "Setup sa iOS",
      body: "Sa iPhone at iPad, karaniwang dumarating ang Delta sa pamamagitan ng IPA, Direct Install, o sideloading tool. Signing error, expired profile, at revoke ang karaniwang hadlang. Ipinapaliwanag ng iOS page kung aling paraan ang bagay sa iyong device.",
      href: ROUTES.ios,
      linkLabel: "Gabay sa pag-install sa iOS",
    },
    {
      title: "Bersyon sa PC",
      body: "Maraming mirror site ang nag-aadvertise ng “Delta for PC” EXE. Karamihan sa mga link na iyon ay hindi kaugnay o mapanganib na software. Hinihiwalay ng PC guide ang emulator install ng Android APK mula sa pekeng native Windows download.",
      href: ROUTES.pc,
      linkLabel: "Gabay sa bersyon sa PC",
    },
    {
      title: "Paano gamitin",
      body: "Pagkatapos mag-install kailangan mo pa ring mag-attach, Script Hub, paste, at execute. Ipinapakita ng how-to guide ang flow na iyon para hindi ka manatili sa APK na hindi tumatakbo ng script.",
      href: ROUTES.howToUse,
      linkLabel: "Paano gamitin ang Delta Executor",
    },
    {
      title: "Ano ang Delta Executor?",
      body: "Bago sa Delta? Ipinapaliwanag ng beginner guide kung ano ang ginagawa ng executor, aling platform ang sinusuportahan, at anong mga panganib ang dapat mong unawain bago mag-install.",
      href: ROUTES.whatIs,
      linkLabel: "Gabay para sa baguhan",
    },
    {
      title: "Paano kumuha ng Delta key",
      body: "Ang libreng Delta key ay may time limit at madalas na nakatali sa device. Tinutunton ng key guide ang Linkvertise, LootLabs, at Work.ink nang walang mapanganib na install.",
      href: ROUTES.keySystem,
      linkLabel: "Walkthrough sa pagkuha ng key",
    },
    {
      title: "Ligtas ba ang Delta Executor?",
      body: "Panganib sa device, ban sa Roblox, VirusTotal habits, at permissions — tapat na assessment na walang marketing fluff.",
      href: ROUTES.safety,
      linkLabel: "Review sa kaligtasan",
    },
    {
      title: "Hindi gumagana ang key",
      body: "Invalid key, Too Many Requests, stuck unlock progress, at network bind error — mga solusyon sa key failure na madalas hanapin.",
      href: ROUTES.keyNotWorking,
      linkLabel: "Ayos sa key error",
    },
    {
      title: "Pag-troubleshoot",
      body: "Injection failure, key loop, crash, at Play Protect block ang lumalabas pagkatapos ng Roblox patch week. Ang troubleshooting page ay nagbibigay ng maikling diagnosis para sa bawat error.",
      href: ROUTES.troubleshooting,
      linkLabel: "Gabay sa pag-troubleshoot",
    },
    {
      title: "Gabay sa Mac",
      body: "Walang pinagkakatiwalaang mass-market Delta .dmg para sa lahat ng Mac user. Karamihan ay gumagamit ng emulator o iPhone mirroring. Nililinaw ng Mac page kung aling opsyon ang bagay kanino.",
      href: ROUTES.mac,
      linkLabel: "Gabay sa Mac",
    },
    {
      title: "VNG (Vietnam)",
      body: "Naiiba ang VNG Roblox client sa global client sa ilang rehiyon. Ipinapaliwanag ng VNG page kung sino ang kailangan ng build na iyon at paano naiiba ang install.",
      href: ROUTES.vng,
      linkLabel: "Gabay sa VNG",
    },
    {
      title: "Discord server",
      body: "Update ping, bug report, at usapan tungkol sa script ay nasa Discord. Saklaw ng Discord page ang ligtas na pagsali at babala sa pekeng invite / DM scam.",
      href: ROUTES.discord,
      linkLabel: "Gabay sa Discord",
    },
    {
      title: "Paghahambing ng executor",
      body: "Mobile support, key friction, kalidad ng hub, at bilis ng update — ihinahambing nang walang “undetectable” slogan. Gamitin kapag nagdedesisyon kung bagay ang Delta sa iyong device.",
      href: ROUTES.comparison,
      linkLabel: "Talahanayan ng paghahambing",
    },
    {
      title: "Robux to USD",
      body: "I-convert ang Robux sa dolyar o dolyar sa Robux gamit ang buy rate at DevEx cash-out rate — kasama ang mabilis na lookup para sa 10K, 100K, at 18 milyong Robux.",
      href: ROUTES.robuxToUsd,
      linkLabel: "Buksan ang Robux converter",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />

      <section className="relative overflow-hidden px-4 pb-10 pt-10 sm:px-6 md:px-8 md:pb-14 md:pt-16">
        <div className="pointer-events-none absolute left-10 top-20 h-32 w-32 animate-soft-pulse rounded-full bg-pink/10 blur-2xl" />
        <div className="pointer-events-none absolute right-20 top-40 h-24 w-24 animate-soft-pulse rounded-full bg-pink/15 blur-xl" />
        <div className="pointer-events-none absolute bottom-20 right-1/3 h-28 w-28 animate-soft-pulse rounded-full bg-emerald/10 blur-xl" />

        <div className="container relative mx-auto max-w-4xl">
          <div className="mx-auto flex flex-col items-center text-center animate-fade-up">
            <p className="hero-status-pill mb-5 inline-flex max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1.5 px-1.5 py-1.5 text-xs sm:gap-x-2.5 sm:px-2">
              <span className="hero-status-version">{APP_VERSION}</span>
              <span className="hidden h-3 w-px bg-white/20 sm:block" aria-hidden="true" />
              <span className="hero-status-meta">{t.freeMeta}</span>
            </p>
            <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="brand-gradient-text">{t.brand}</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg md:text-xl">
              {t.heroSubPrefix}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={ANDROID_APK_URL}
                className="bfv-outline-btn"
                download
                rel="noopener noreferrer"
              >
                I-download ang Delta Executor
                <span aria-hidden="true">→</span>
              </a>
              <Link href={ROUTES.ios} className="bfv-outline-btn bfv-outline-btn-muted">
                Gabay sa iOS
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              {(Object.keys(SOCIAL_LINKS) as Array<keyof typeof SOCIAL_LINKS>).map((key) => (
                <a
                  key={key}
                  href={key === "discord" ? ROUTES.discord : SOCIAL_LINKS[key]}
                  {...(key === "discord"
                    ? {}
                    : { target: "_blank", rel: "noopener noreferrer" })}
                  className="rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-1.5 text-xs font-semibold text-white/75 transition hover:border-pink/40 hover:bg-pink/10 hover:text-pink"
                >
                  {SOCIAL_LABELS[key]}
                </a>
              ))}
            </div>
            <p className="mt-3 text-xs text-white/40">
              Mga channel ng komunidad — Telegram, Facebook, X, at Discord
            </p>
            <div className="mx-auto mt-8 w-full max-w-xl text-left">
              <h2 className="font-display text-2xl font-bold text-white md:text-3xl">Detalye ng APK</h2>
              <p className="mt-2 mb-4 text-sm text-white/55">
                Mabilis na impormasyon para sa kasalukuyang build ng Delta Executor
              </p>
              <div className="overflow-x-auto rounded-2xl border border-white/10">
                <table className="w-full text-sm text-white/70">
                  <tbody className="divide-y divide-white/5">
                    {[
                      ["Pangalan ng app", "Delta Executor"],
                      ["Bersyon", APP_VERSION],
                      ["Na-update", STYLES_UPDATED],
                      ["Platform", "Android 5.0+ · iOS 15–18"],
                      ["Arkitektura", "ARM64 + ARM32"],
                      ["Tinatayang laki", "167.8 MB"],
                      ["Presyo", "Libre (key system)"],
                      ["Root / jailbreak", "Hindi kailangan"],
                    ].map(([label, value]) => (
                      <tr key={label}>
                        <td className="px-4 py-3 font-semibold text-white/70">{label}</td>
                        <td className="px-4 py-3 text-white/55">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="mt-5 flex items-center gap-2 text-sm text-white/45">
              <span className="text-gold" aria-hidden="true">
                ★
              </span>
              {SITE_RATING.ratingValue} · {Number(SITE_RATING.ratingCount).toLocaleString("en-PH")}{" "}
              {t.ratingsLabel} · Libre · Android · Laro · {STYLES_UPDATED}
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">{t.whatTitle}</h2>
          <div className="mx-auto mt-8 max-w-3xl">
            <p className="text-base leading-relaxed text-white/60 sm:text-lg">{t.whatBody}</p>
            <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">
              Ang live na Google result para sa “delta executor download” ay puno ng YouTube install, Softonic-style mirror, at one-page skyscraper site.{" "}
              <Link href={ROUTES.download} className="font-semibold text-pink hover:underline">
                Ang aming download guide
              </Link>{" "}
              ay nag-iingat ng mga hakbang kada platform sa{" "}
              <span className="text-white/80">deltaexecutor.com.ph</span> sa halip na isiksik ang lahat ng query sa isang manipis na URL.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">
              Ang mga kakumpitensya tulad ng deltaexecuter.com, delta-executor.com, deltaexploits.gg, at deltaexecutor.com.br ay may Android button at key step, pero madalas na walang tapat na ban language, image SEO, o multi-page IA. Pinupunan namin ang mga puwang na iyon sa pamamagitan ng dedikadong{" "}
              <Link href={ROUTES.ios} className="font-semibold text-pink hover:underline">
                iOS
              </Link>
              ,{" "}
              <Link href={ROUTES.pc} className="font-semibold text-pink hover:underline">
                PC
              </Link>
              ,{" "}
              <Link href={ROUTES.safety} className="font-semibold text-pink hover:underline">
                kaligtasan
              </Link>
              , at{" "}
              <Link href={ROUTES.keyNotWorking} className="font-semibold text-pink hover:underline">
                key troubleshooting
              </Link>{" "}
              na mga gabay.
            </p>
          </div>
          <div className="brand-shot-frame brand-shot-frame--hero relative mx-auto mt-8">
            <Image
              src={BRAND_HERO}
              alt="Delta Executor Get Key screen on mobile — deltaexecutor.com.ph"
              width={280}
              height={455}
              sizes="220px"
              priority
              className="brand-shot"
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
            Ano&apos;ng bago sa {APP_VERSION}?
          </h2>
          <p className="mt-3 text-white/55 mb-6">{STYLES_UPDATED} build — mga pangunahing pagpapabuti</p>
          <ul className="space-y-3">
            {[
              "Roblox November 2026 engine compatibility — naibalik ang injection pagkatapos ng pinakabagong patch cycle.",
              "Na-refresh ang Script hub na may kasalukuyang Blox Fruits, Da Hood, at Grow a Garden category.",
              "Na-optimize ang ARM64 injection path — mas mabilis na attach sa 4 GB+ RAM na phone.",
              "Mas maaasahang auto-inject sa Android 13/14.",
              "Na-update ang iOS build para sa iOS 18.x Direct Install / AltStore signing check.",
              "Ipinapakita na ng error toast ang Lua line number kapag may script failure.",
              "Mas mahabang key-gateway timeout sa mabagal na mobile network.",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm text-white/65">
                <span className="mt-0.5 text-pink shrink-0" aria-hidden="true">
                  →
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-white/55">
            Kailangan ng install step pagkatapos mag-update? Pumunta sa{" "}
            <Link href={ROUTES.download} className="font-semibold text-pink hover:underline">
              gabay sa Android APK
            </Link>{" "}
            o sa{" "}
            <Link href={ROUTES.howToUse} className="font-semibold text-pink hover:underline">
              how-to-use walkthrough
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="bfv-glass-card p-6 sm:p-10">
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">{t.howTitle}</h2>
            <p className="mt-3 max-w-2xl text-white/55">
              {t.howIntroBefore}{" "}
              <Link href={ROUTES.download} className="font-semibold text-pink hover:underline">
                {t.howIntroLink}
              </Link>{" "}
              {t.howIntroAfter}
            </p>
            <ol className="mt-8 grid gap-4 md:grid-cols-2">
              {t.howSteps.map((step, index) => (
                <li key={step.name} className="flex gap-4 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-pink text-sm font-bold text-black">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">{step.name}</h3>
                    <p className="mt-1 text-sm text-white/55">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">Mga kalamangan at kahinaan</h2>
          <p className="mt-3 mb-6 text-white/55">Tapat na scorecard — walang pekeng “undetectable forever” claim</p>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-green-400/20 bg-green-400/5 p-5">
              <h3 className="mb-3 font-display font-bold text-green-400">Mga kalamangan</h3>
              <ul className="space-y-2 text-sm text-white/65">
                {[
                  "Android at iOS — tunay na cross-platform mobile focus",
                  "Hindi kailangan ng root o jailbreak para sa standard build",
                  "Libre na may key system — walang sapilitang paywall para sa basic use",
                  "Native ARM64 path para sa modernong phone",
                  "Curated script hub — nabawas ang panganib ng malicious paste",
                  "Karaniwang sumasagot sa Roblox patch sa loob ng 24–72 oras",
                ].map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="text-green-400 shrink-0">✓</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-red-400/20 bg-red-400/5 p-5">
              <h3 className="mb-3 font-display font-bold text-red-400">Mga kahinaan</h3>
              <ul className="space-y-2 text-sm text-white/65">
                {[
                  "Araw-araw na ~24-oras na key refresh sa libreng tier",
                  "Walang pinagkakatiwalaang native Windows EXE para sa karamihan",
                  "Maaaring kailanganin muling i-trust ang libreng iOS signing pagkatapos ng revoke",
                  "Maaaring pansamantalang masira ang injection pagkatapos ng Roblox update",
                  "Tunay ang panganib ng ban — paglabag sa Roblox ToS",
                ].map((c) => (
                  <li key={c} className="flex gap-2">
                    <span className="text-red-400 shrink-0">✗</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-6 text-sm text-white/55">
            Gusto ng mas malalim na breakdown ng panganib? Basahin ang{" "}
            <Link href={ROUTES.safety} className="font-semibold text-pink hover:underline">
              Ligtas ba ang Delta Executor?
            </Link>
          </p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">Sikat na laro sa Script Hub</h2>
          <p className="mt-3 mb-6 text-white/55">
            Ipinapakita ng built-in hub ang mga category para sa mga uri ng larong ito.{" "}
            <Link href={ROUTES.howToUse} className="text-pink hover:underline">
              Paano tumakbo ang script →
            </Link>
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { game: "Blox Fruits", type: "Auto farm, teleport, fruit helper" },
              { game: "Brookhaven", type: "Admin tool, social script" },
              { game: "Pet Simulator X", type: "Auto collect, hatch helper" },
              { game: "Arsenal", type: "Aim helper, ESP-style tool" },
              { game: "Jailbreak", type: "Vehicle speed, teleport route" },
              { game: "Da Hood", type: "Farm, hitbox, movement helper" },
              { game: "Grow a Garden", type: "Farm automation, stat tool" },
              { game: "Adopt Me", type: "Trade helper, auto action" },
              { game: "Universal helper", type: "Admin panel, anti-AFK, FPS unlock" },
            ].map((item) => (
              <div key={item.game} className="rounded-xl border border-white/10 bg-card p-4">
                <p className="font-semibold text-white text-sm">{item.game}</p>
                <p className="mt-1 text-xs text-white/45">{item.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-3xl">
          <div className="bfv-glass-card flex flex-col sm:flex-row sm:items-center gap-4 justify-between p-6 sm:p-8">
            <div>
              <h2 className="font-display text-xl font-bold text-white">Paano nahahambing ang Delta?</h2>
              <p className="mt-2 text-sm text-white/55">
                Side-by-side: mobile support, key friction, script hub, bilis ng update — walang pekeng claim.
              </p>
            </div>
            <Link
              href={ROUTES.comparison}
              className="shrink-0 rounded-full border border-pink/30 bg-pink/10 px-5 py-2.5 text-sm font-semibold text-pink hover:bg-pink/20"
            >
              Tingnan ang paghahambing →
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">Komunidad at Discord</h2>
          <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">
            Umaasa ang competitor hub sa Discord para sa patch note, script sharing, at error report. Itinuturo namin ang mga community channel para sa update ping — at pinapanatili ang support email sa{" "}
            <strong className="font-semibold text-white/80">{SITE_NAME}</strong> para ang random invite scam ay hindi maging tanging daan ng pakikipag-ugnayan.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              { t: "Mga anunsyo ng update", d: "Alamin kung kailan naaabutan ng Android / iOS build ang Roblox patch." },
              { t: "Mga bug report", d: "Mas mabilis ma-diagnose ang injection at key issue kapag may log." },
              { t: "Pagbabahagi ng script", d: "Lumalabas sa community hub ang gumaganang script — i-verify pa rin bago mag-execute." },
              { t: "Mga tutorial", d: "Maikling clip para sa attach, key renew, at unang script run." },
            ].map((item) => (
              <li key={item.t} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <h3 className="font-semibold text-white">{item.t}</h3>
                <p className="mt-1 text-sm text-white/55">{item.d}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-white/55">
            <Link href={ROUTES.discord} className="font-semibold text-pink hover:underline">
              Buksan ang gabay sa Discord →
            </Link>{" "}
            Mas gusto ang email? Sumulat sa{" "}
            <Link href={ROUTES.contact} className="font-semibold text-pink hover:underline">
              support@deltaexecutor.com.ph
            </Link>
            . Huwag kailanman mag-paste ng Roblox password sa Discord DM na nagsasabing “i-whitelist” ang account mo.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">{t.toolExplainerTitle}</h2>
          <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">{t.toolExplainerBody}</p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">{t.controlsTitle}</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {t.controls.map((item) => (
              <article key={item.t} className="bfv-feature-card p-5">
                <h3 className="font-display text-lg font-bold text-white">{item.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{item.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              Android, iOS, at script — sa isang sulyap
            </h2>
            <p className="mt-4 text-white/55">
              Tatlong feature visual ang sumasaklaw sa intent na talagang hinahanap ng mga tao tungkol sa Delta Executor.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: t.cardExactTitle,
                body: t.cardExactBody,
                img: BRAND_FEATURE_2,
                href: ROUTES.download,
                alt: "Delta Executor Android APK download feature visual",
              },
              {
                title: t.cardSolverTitle,
                body: t.cardSolverBody,
                img: BRAND_FEATURE_3,
                href: ROUTES.ios,
                alt: "Delta Executor iOS install feature visual",
              },
              {
                title: t.cardWhatsappTitle,
                body: t.cardWhatsappBody,
                img: BRAND_FEATURE_4,
                href: ROUTES.howToUse,
                alt: "Delta Executor script hub feature visual",
              },
            ].map((card) => (
              <article
                key={card.title}
                className="overflow-hidden rounded-2xl border border-white/10 bg-card shadow-card-dark"
              >
                <Link href={card.href} className="block bg-muted">
                  <Image
                    src={card.img}
                    alt={card.alt}
                    width={280}
                    height={455}
                    sizes="180px"
                    className="brand-shot-sm"
                  />
                </Link>
                <div className="p-5">
                  <h3 className="font-display text-xl font-bold text-white">
                    <Link href={card.href} className="hover:text-pink">
                      {card.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{card.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">{t.platformsTitle}</h2>
            <p className="mt-4 text-white/55">{t.platformsIntro}</p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.platforms.map((item) => (
              <article key={item.t} className="bfv-feature-card p-5">
                <h3 className="font-display text-lg font-bold text-white">{item.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{item.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">{t.whoTitle}</h2>
            <p className="mt-4 text-white/55">{t.whoIntro}</p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {t.whoItems.map((item) => (
              <article key={item.t} className="bfv-feature-card p-5">
                <h3 className="font-display text-xl font-bold text-white">{item.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{item.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-pink">{t.whyEyebrow}</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-white md:text-4xl">{t.whyTitle}</h2>
          <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">{t.whyBody}</p>
          <h3 className="mt-10 font-display text-2xl font-bold text-white">{t.compareTitle}</h3>
          <p className="mt-3 text-white/60">{t.compareBody}</p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">{t.tipsTitle}</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {t.tips.map((tip) => (
              <article key={tip.t} className="bfv-feature-card p-5">
                <h3 className="font-display text-lg font-bold text-white">{tip.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{tip.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">{t.trustTitle}</h2>
          <ul className="mt-6 space-y-3">
            {t.trustItems.map((item) => (
              <li key={item} className="flex gap-3 text-white/65">
                <span className="mt-1 text-pink" aria-hidden="true">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6">
            <Link href={ROUTES.disclaimer} className="font-semibold text-pink hover:underline">
              {t.trustLink}
            </Link>
          </p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-6 font-display text-3xl font-bold text-white md:text-4xl">{t.faqTitle}</h2>
          <FaqSection title={t.faqTitle} items={t.faqs} includeSchema={false} />
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">{t.modesTitle}</h2>
          <p className="mt-3 text-base leading-relaxed text-white/55 sm:text-lg">{t.modesIntro}</p>
          <div className="mt-10 space-y-10">
            {guideTopics.map((topic) => (
              <div key={topic.href}>
                <h3 className="font-display text-xl font-bold text-white md:text-2xl">{topic.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-white/60 sm:text-lg">
                  {topic.body}{" "}
                  <Link href={topic.href} className="font-semibold text-pink hover:underline">
                    {topic.linkLabel} →
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 pt-8 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="bfv-glass-card flex flex-col items-start gap-6 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div>
              <h2 className="font-display text-2xl font-bold text-white md:text-3xl">{t.ctaTitle}</h2>
              <p className="mt-2 max-w-xl text-white/60">{t.ctaBody}</p>
            </div>
            <a
              href={ANDROID_APK_URL}
              download
              rel="noopener noreferrer"
              className="bfv-outline-btn shrink-0"
            >
              {t.ctaButton}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
