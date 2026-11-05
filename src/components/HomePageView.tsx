import Image from "next/image";
import Link from "next/link";
import FaqSection from "@/components/FaqSection";
import FontStyleGenerator from "@/components/FontStyleGenerator";
import CtaButton from "@/components/CtaButton";
import { WEB_APPLICATION_JSON_LD } from "@/lib/appFacts";
import { imageObjectLicensing } from "@/lib/schemaImageLicensing";
import {
  BRAND_FEATURE_2,
  BRAND_FEATURE_3,
  BRAND_FEATURE_4,
  BRAND_HERO,
  SITE_ORIGIN,
  SITE_RATING,
  STYLES_UPDATED,
} from "@/lib/siteConfig";
import { type SiteLocale, DEFAULT_LOCALE } from "@/lib/locales";
import { getMessages } from "@/lib/i18n/messages";

export default function HomePageView({ locale = DEFAULT_LOCALE }: { locale?: SiteLocale }) {
  const t = getMessages(locale.code);
  const homeHash = "/#generator";

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
        inLanguage: "tr",
      },
      {
        ...WEB_APPLICATION_JSON_LD,
        name: t.brand,
        "@id": `${SITE_ORIGIN}/#app`,
        description: t.metaDescription,
      },
      {
        "@type": "HowTo",
        name: t.howTitle,
        description: `${t.howIntroBefore} ${t.howIntroLink} ${t.howIntroAfter}`,
        totalTime: "PT1M",
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
        width: 1600,
        height: 900,
        caption: t.brand,
        ...imageObjectLicensing,
      },
    ],
  };

  const featureTiles = [
    {
      title: t.cardExactTitle,
      body: t.cardExactBody,
      href: "/instagram-yazi-tipleri",
      icon: "IG",
    },
    {
      title: t.cardSolverTitle,
      body: t.cardSolverBody,
      href: "/sekilli-nick",
      icon: "Nick",
    },
    {
      title: t.cardWhatsappTitle,
      body: t.cardWhatsappBody,
      href: "/whatsapp-yazi-stilleri",
      icon: "WA",
    },
    {
      title: "Nasıl kullanılır",
      body: "Dört adımda kopyala-yapıştır yazı stilleri — kayıt yok.",
      href: "/nasil-kullanilir",
      icon: "Guide",
    },
    {
      title: "Türkçe karakter",
      body: "ı, ğ, ü, ş, ö, ç harflerine özenli Unicode eşleme.",
      href: "/yazi-stilleri-nedir",
      icon: "TR",
    },
    {
      title: "Özellikler",
      body: "70+ stil, kategori filtreleri ve anlık kopyalama.",
      href: "/features",
      icon: "Pro",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />

      {/* BFV-style centered hero */}
      <section className="relative overflow-hidden px-4 pb-10 pt-10 sm:px-6 md:px-8 md:pb-16 md:pt-16">
        <div className="pointer-events-none absolute left-10 top-20 h-32 w-32 animate-soft-pulse rounded-full bg-pink/10 blur-2xl" />
        <div className="pointer-events-none absolute right-20 top-40 h-24 w-24 animate-soft-pulse rounded-full bg-pink/15 blur-xl" />
        <div className="pointer-events-none absolute bottom-20 right-1/3 h-28 w-28 animate-soft-pulse rounded-full bg-pink/[0.12] blur-xl" />

        <div className="container relative mx-auto max-w-4xl">
          <div className="mx-auto flex flex-col items-center text-center animate-fade-up">
            <p className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-pink/25 bg-pink/10 px-3 py-1 text-xs font-semibold text-pink">
              Ücretsiz · Türkçe · Kayıt yok
            </p>
            <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="brand-gradient-text">{t.brand}</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg md:text-xl">
              {t.heroSubPrefix}
            </p>
          </div>
        </div>
      </section>

      {/* Generator */}
      <section className="px-4 pb-8 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-3xl">
          <FontStyleGenerator
            defaultValue="Yazı Stilleri"
            heading={t.toolTitle}
            strings={{
              inputLabel: t.inputLabel,
              inputPlaceholder: t.inputPlaceholder,
              searchLabel: t.searchLabel,
              searchPlaceholder: t.searchPlaceholder,
              categoryAll: t.categoryAll,
              charCount: t.charCount,
              wordCount: t.wordCount,
              copy: t.copy,
              copied: t.copied,
              help: t.help,
              noResults: t.noResults,
              stylesHeading: t.stylesHeading,
            }}
          />
        </div>
      </section>

      {/* CTAs + rating + quick links — below tool */}
      <section className="px-4 pb-12 sm:px-6 md:px-8">
        <div className="container relative mx-auto max-w-3xl">
          <div className="mx-auto flex flex-col items-center text-center">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href={homeHash} className="bfv-outline-btn">
                Stil oluştur
                <span aria-hidden="true">→</span>
              </Link>
              <Link href="/instagram-yazi-tipleri" className="bfv-outline-btn bfv-outline-btn-muted">
                ★ Instagram fontları
              </Link>
            </div>

            <p className="mt-5 flex items-center gap-2 text-sm text-white/45">
              <span className="text-gold" aria-hidden="true">
                ★
              </span>
              {SITE_RATING.ratingValue} · {Number(SITE_RATING.ratingCount).toLocaleString("tr-TR")}{" "}
              {t.ratingsLabel} · {STYLES_UPDATED}
            </p>
          </div>

          <div className="relative mx-auto mt-8 max-w-3xl">
            <div className="grid gap-3 sm:grid-cols-2">
              <Link
                href="/sekilli-nick"
                className="bfv-glass-card flex items-center gap-3 p-4 transition hover:border-pink/30 hover:scale-[1.02]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-pink/15 text-pink">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </span>
                <span>
                  <span className="block text-sm font-bold text-white">Şekilli Nick</span>
                  <span className="block text-xs text-white/50">Oyun & sosyal nick stilleri</span>
                </span>
              </Link>
              <Link
                href="/whatsapp-yazi-stilleri"
                className="bfv-glass-card flex items-center gap-3 p-4 transition hover:border-pink/30 hover:scale-[1.02]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald/15 text-emerald">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </span>
                <span>
                  <span className="block text-sm font-bold text-white">WhatsApp Stilleri</span>
                  <span className="block text-xs text-white/50">Durum & sohbet için Unicode</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brand visual — below generator */}
      <section className="px-4 pb-16 sm:px-6 md:px-8">
        <div className="container relative mx-auto max-w-4xl">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-pink/20 via-transparent to-emerald/10 blur-2xl" />
          <Image
            src={BRAND_HERO}
            alt="Yazı Stilleri oluşturucu — Instagram ve şekilli yazı önizlemesi"
            width={1600}
            height={900}
            sizes="(max-width: 896px) 100vw, 896px"
            className="h-auto w-full rounded-[1.5rem] border border-white/10 shadow-[0_30px_60px_-28px_rgba(0,0,0,0.85)]"
          />
        </div>
      </section>

      {/* Features grid — BFV Cosmic Values Features style */}
      <section className="px-4 py-14 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">{t.modesTitle}</h2>
            <p className="mt-3 text-white/55">{t.modesIntro}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featureTiles.map((tile) => (
              <Link key={tile.href} href={tile.href} className="bfv-feature-card group p-5">
                <span className="mb-3 inline-flex rounded-full bg-pink/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-pink">
                  {tile.icon}
                </span>
                <h3 className="font-display text-lg font-bold text-white group-hover:text-pink-soft">
                  {tile.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{tile.body}</p>
                <span className="mt-4 inline-flex text-xs font-semibold text-pink">Keşfet →</span>
              </Link>
            ))}
          </div>
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
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">{t.whatTitle}</h2>
            <p className="mt-4 text-white/55">{t.whatBody}</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: t.cardExactTitle,
                body: t.cardExactBody,
                img: BRAND_FEATURE_2,
                href: "/instagram-yazi-tipleri",
                alt: "Instagram yazı tipleri ve bio stilleri ekran görüntüsü",
              },
              {
                title: t.cardSolverTitle,
                body: t.cardSolverBody,
                img: BRAND_FEATURE_3,
                href: "/sekilli-nick",
                alt: "Şekilli nick ve oyun yazı stili örnekleri",
              },
              {
                title: t.cardWhatsappTitle,
                body: t.cardWhatsappBody,
                img: BRAND_FEATURE_4,
                href: "/whatsapp-yazi-stilleri",
                alt: "WhatsApp ve TikTok yazı stilleri mobil görünümü",
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
                    width={1200}
                    height={900}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="h-auto w-full object-contain"
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
        <div className="container mx-auto max-w-6xl">
          <div className="bfv-glass-card p-6 sm:p-10">
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">{t.howTitle}</h2>
            <p className="mt-3 max-w-2xl text-white/55">
              {t.howIntroBefore}{" "}
              <Link href="/nasil-kullanilir" className="font-semibold text-pink hover:underline">
                {t.howIntroLink}
              </Link>{" "}
              {t.howIntroAfter}
            </p>
            <ol className="mt-8 grid gap-4 md:grid-cols-2">
              {t.howSteps.map((step, index) => (
                <li key={step.name} className="flex gap-4 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-pink text-sm font-bold text-white">
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
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">{t.turkishTitle}</h2>
          <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">{t.turkishBody}</p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">{t.vsTitle}</h2>
          <p className="mt-3 max-w-3xl text-white/55">{t.vsBody}</p>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-white/10 bg-card">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-muted text-white">
                <tr>
                  <th className="px-4 py-3 font-semibold">{t.vsNeed}</th>
                  <th className="px-4 py-3 font-semibold">{t.vsTool}</th>
                  <th className="px-4 py-3 font-semibold">{t.vsWhy}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/8 text-white/70">
                <tr>
                  <td className="px-4 py-3">{t.vsRow1Need}</td>
                  <td className="px-4 py-3 font-semibold">
                    <Link href="/instagram-yazi-tipleri" className="text-pink hover:underline">
                      {t.vsRow1Tool}
                    </Link>
                  </td>
                  <td className="px-4 py-3">{t.vsRow1Why}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">{t.vsRow2Need}</td>
                  <td className="px-4 py-3 font-semibold">
                    <Link href="/sekilli-nick" className="text-pink hover:underline">
                      {t.vsRow2Tool}
                    </Link>
                  </td>
                  <td className="px-4 py-3">{t.vsRow2Why}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">{t.vsRow3Need}</td>
                  <td className="px-4 py-3 font-semibold">
                    <Link href="/whatsapp-yazi-stilleri" className="text-pink hover:underline">
                      {t.vsRow3Tool}
                    </Link>
                  </td>
                  <td className="px-4 py-3">{t.vsRow3Why}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-bold text-white md:text-4xl">{t.famousTitle}</h2>
              <p className="mt-4 text-white/55">
                {t.famousBodyBefore}{" "}
                <Link href="/blog/estetik-yazi-stilleri" className="font-semibold text-pink hover:underline">
                  {t.famousBodyLink}
                </Link>{" "}
                {t.famousBodyAfter}
              </p>
              <ul className="mt-6 space-y-3 text-sm sm:text-base">
                {[
                  ["Kalın", "𝐘𝐚𝐳ı 𝐒𝐭𝐢𝐥𝐥𝐞𝐫𝐢"],
                  ["El yazısı", "𝒴𝒶𝓏ı 𝒮𝓉𝒾𝓁𝓁ℯ𝓇𝒾"],
                  ["Gotik", "𝔜𝔞𝔷𝔦 𝔖𝔱𝔦𝔩𝔩𝔢𝔯𝔦"],
                  ["Balon", "Ⓨⓐⓩⓘ Ⓢⓣⓘⓛⓛⓔⓡⓘ"],
                  ["Çift çizgili", "𝕐𝕒𝕫𝕚 𝕊𝕥𝕚𝕝𝕝𝕖𝕣𝕚"],
                  ["Çiçek çerçeve", "✿ Yazı Stilleri ✿"],
                ].map(([from, to]) => (
                  <li
                    key={from}
                    className="flex flex-wrap items-center gap-2 rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3"
                  >
                    <span className="font-bold tracking-wide text-white">{from}</span>
                    <span className="text-pink" aria-hidden="true">
                      →
                    </span>
                    <span className="font-semibold text-pink-soft">{to}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[1.5rem] border border-pink/25 bg-gradient-to-br from-[#1a0b2e] to-black p-8 text-white shadow-glow-primary">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-gold">{t.whyEyebrow}</p>
              <h3 className="mt-3 font-display text-2xl font-bold sm:text-3xl">{t.whyTitle}</h3>
              <p className="mt-4 text-white/70">{t.whyBody}</p>
              <div className="mt-6">
                <CtaButton href={homeHash} size="sm" icon="arrow">
                  {t.tryWord}
                </CtaButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">{t.tryIdeasTitle}</h2>
          <p className="mt-3 max-w-3xl text-white/55">{t.tryIdeasBody}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {t.tryIdeas.map((word) => (
              <Link
                key={word}
                href={homeHash}
                className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-sm font-semibold text-white/80 transition hover:border-pink/40 hover:text-pink"
              >
                {word}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">{t.tipsTitle}</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {t.tips.map((item) => (
              <article key={item.t} className="bfv-feature-card p-5">
                <h3 className="font-display text-xl font-bold text-white">{item.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{item.d}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm text-white/45">
            {t.tipsFooterBefore}{" "}
            <Link href="/yazi-stilleri-nedir" className="font-semibold text-pink hover:underline">
              yazı stilleri nedir
            </Link>
            {t.tipsFooterMid}{" "}
            <Link href="/blog/instagram-bio-yazi-stilleri" className="font-semibold text-pink hover:underline">
              Instagram bio yazı stilleri
            </Link>{" "}
            {t.tipsFooterAfter}
          </p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">{t.compareTitle}</h2>
          <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">{t.compareBody}</p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">{t.trustTitle}</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {t.trustItems.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm font-medium text-white/75"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-pink/15 text-xs font-bold text-pink">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link href="/features" className="font-semibold text-pink hover:underline">
              {t.trustLink}
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 pb-8 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-3xl">
          <FaqSection title={t.faqTitle} items={t.faqs} includeSchema={false} />
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-start justify-between gap-6 rounded-[1.5rem] border border-pink/25 bg-gradient-to-r from-[#12081f] via-black to-[#0a1210] p-8 sm:flex-row sm:items-center sm:p-10">
            <div>
              <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">{t.ctaTitle}</h2>
              <p className="mt-2 max-w-xl text-white/55">{t.ctaBody}</p>
            </div>
            <CtaButton href={homeHash} icon="arrow">
              {t.ctaButton}
            </CtaButton>
          </div>
        </div>
      </section>
    </>
  );
}
