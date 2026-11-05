import Image from "next/image";
import Link from "next/link";
import FaqSection from "@/components/FaqSection";
import AnagramGenerator from "@/components/AnagramGenerator";
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
  DICTIONARY_UPDATED,
} from "@/lib/siteConfig";
import { type SiteLocale, DEFAULT_LOCALE } from "@/lib/locales";
import { getMessages } from "@/lib/i18n/messages";

export default function HomePageView({ locale = DEFAULT_LOCALE }: { locale?: SiteLocale }) {
  const t = getMessages(locale.code);
  const homeHash = locale.path === "/" ? "/#generator" : `${locale.path}#generator`;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_ORIGIN}${locale.path === "/" ? "" : locale.path}/#website`,
        url: `${SITE_ORIGIN}${locale.path === "/" ? "" : locale.path}`,
        name: t.brand,
        description: t.metaDescription,
        publisher: { "@id": `${SITE_ORIGIN}/#organization` },
        inLanguage: locale.code,
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
        description: t.howIntroBefore,
        totalTime: "PT1M",
        step: t.howSteps.map((step, index) => ({
          "@type": "HowToStep",
          position: index + 1,
          name: step.name,
          text: step.text,
        })),
      },
      {
        "@type": "ImageObject",
        contentUrl: `${SITE_ORIGIN}${BRAND_HERO}`,
        url: `${SITE_ORIGIN}${BRAND_HERO}`,
        width: 1200,
        height: 630,
        caption: t.brand,
        ...imageObjectLicensing,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />

      <section className="relative overflow-hidden px-4 pb-8 pt-8 sm:px-6 md:px-8 md:pt-12">
        <div className="pointer-events-none absolute -left-16 top-10 h-56 w-56 rounded-3xl border border-indigo/10 opacity-40 hero-glow" />
        <div className="pointer-events-none absolute -right-10 top-24 h-40 w-40 rotate-12 rounded-3xl border border-pink/15 opacity-50" />
        <div className="container relative mx-auto max-w-4xl">
          <div className="mx-auto flex flex-col items-center text-center animate-fade-up">
            <h1 className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-[3.25rem]">
              {t.brand}
            </h1>
            <h2 className="mt-4 font-display text-xl font-bold leading-snug tracking-tight text-ink sm:text-2xl md:text-3xl">
              {t.heroBefore}
              <span className="brand-gradient-text">{t.heroAccent}</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink/65 sm:text-lg">
              {t.heroSubPrefix}
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 pb-14 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-3xl">
          <AnagramGenerator
            mode="generator"
            defaultValue="LISTEN"
            localeLabel={locale.label}
            heading={t.toolTitle}
            strings={{
              inputLabel: t.inputLabel,
              inputPlaceholder: t.inputPlaceholder,
              lettersHint: t.lettersHint,
              shuffle: t.shuffle,
              help: t.help,
              tryPrefix: t.tryPrefix,
              exactOnly: t.exactOnly,
              multiWord: t.multiWord,
              loadingDict: t.loadingDict,
              loadError: t.loadError,
              exactFound: t.exactFound,
              wordsFromLetters: t.wordsFromLetters,
              noMatches: t.noMatches,
              shorterWords: t.shorterWords,
              multiWordHeading: t.multiWordHeading,
              sameLetters: t.sameLetters,
              copied: t.copied,
              updating: t.updating,
            }}
          />
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-ink/60">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-white px-3 py-1.5 font-semibold text-ink">
              <span className="text-gold" aria-hidden="true">★★★★★</span>
              {SITE_RATING.ratingValue} ({Number(SITE_RATING.ratingCount).toLocaleString()} {t.ratingsLabel})
            </span>
            <span>
              {t.freeMeta} {DICTIONARY_UPDATED}
            </span>
          </div>
        </div>
      </section>

      <section className="px-4 pb-12 sm:px-6 md:px-8">
        <div className="container relative mx-auto max-w-4xl">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-pink/15 via-transparent to-indigo/15 blur-2xl" />
          <Image
            src={BRAND_HERO}
            alt={t.brand}
            width={1200}
            height={900}
            priority
            sizes="(max-width: 896px) 100vw, 896px"
            className="h-auto w-full rounded-[1.75rem] border border-ink/10 shadow-[0_30px_60px_-28px_rgba(20,22,61,0.45)]"
          />
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">{t.toolExplainerTitle}</h2>
          <p className="mt-4 text-base leading-relaxed text-ink/65 sm:text-lg">{t.toolExplainerBody}</p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">{t.controlsTitle}</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {t.controls.map((item) => (
              <article key={item.t} className="rounded-2xl border border-ink/10 bg-white p-5">
                <h3 className="font-display text-lg font-bold text-ink">{item.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{item.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">{t.modesTitle}</h2>
            <p className="mt-4 text-ink/65">{t.modesIntro}</p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {t.modes.map((mode) => (
              <article key={mode.t} className="rounded-2xl border border-ink/10 bg-brand px-5 py-6">
                <h3 className="font-display text-xl font-bold text-ink">{mode.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{mode.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">{t.whatTitle}</h2>
            <p className="mt-4 text-ink/65">{t.whatBody}</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { title: t.cardExactTitle, body: t.cardExactBody, img: BRAND_FEATURE_2 },
              { title: t.cardSolverTitle, body: t.cardSolverBody, img: BRAND_FEATURE_3 },
              { title: t.cardNameTitle, body: t.cardNameBody, img: BRAND_FEATURE_4 },
            ].map((card) => (
              <article
                key={card.title}
                className="overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-[0_18px_40px_-28px_rgba(20,22,61,0.35)]"
              >
                <div className="bg-brand-deep">
                  <Image
                    src={card.img}
                    alt={card.title}
                    width={1200}
                    height={900}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="h-auto w-full object-contain"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-bold text-ink">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">{card.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">{t.whoTitle}</h2>
            <p className="mt-4 text-ink/65">{t.whoIntro}</p>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {t.whoItems.map((item) => (
              <article key={item.t} className="rounded-2xl border border-ink/10 bg-white p-5">
                <h3 className="font-display text-xl font-bold text-ink">{item.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{item.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="rounded-[2rem] border border-ink/10 bg-white/80 p-6 sm:p-10">
            <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">{t.howTitle}</h2>
            <p className="mt-3 max-w-2xl text-ink/65">
              {t.howIntroBefore}{" "}
              <Link href="/how-to-use-anagram-generator" className="font-semibold text-pink underline-offset-2 hover:underline">
                {t.howIntroLink}
              </Link>{" "}
              {t.howIntroAfter}
            </p>
            <ol className="mt-8 grid gap-5 md:grid-cols-2">
              {t.howSteps.map((step, index) => (
                <li key={step.name} className="flex gap-4 rounded-2xl border border-ink/8 bg-brand px-4 py-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-pink text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink">{step.name}</h3>
                    <p className="mt-1 text-sm text-ink/65">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">{t.vsTitle}</h2>
          <p className="mt-3 max-w-3xl text-ink/65">{t.vsBody}</p>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-ink/10 bg-white">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-brand-deep text-ink">
                <tr>
                  <th className="px-4 py-3 font-semibold">{t.vsNeed}</th>
                  <th className="px-4 py-3 font-semibold">{t.vsTool}</th>
                  <th className="px-4 py-3 font-semibold">{t.vsWhy}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink/8 text-ink/75">
                <tr>
                  <td className="px-4 py-3">{t.vsRow1Need}</td>
                  <td className="px-4 py-3 font-semibold text-ink">
                    <Link href={homeHash} className="text-pink hover:underline">{t.vsRow1Tool}</Link>
                  </td>
                  <td className="px-4 py-3">{t.vsRow1Why}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">{t.vsRow2Need}</td>
                  <td className="px-4 py-3 font-semibold text-ink">
                    <Link href="/anagram-solver" className="text-pink hover:underline">{t.vsRow2Tool}</Link>
                  </td>
                  <td className="px-4 py-3">{t.vsRow2Why}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">{t.vsRow3Need}</td>
                  <td className="px-4 py-3 font-semibold text-ink">
                    <Link href="/name-anagram-generator" className="text-pink hover:underline">{t.vsRow3Tool}</Link>
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
              <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">{t.famousTitle}</h2>
              <p className="mt-4 text-ink/65">
                {t.famousBodyBefore}{" "}
                <Link href="/blog/anagram-examples" className="font-semibold text-pink underline-offset-2 hover:underline">
                  {t.famousBodyLink}
                </Link>{" "}
                {t.famousBodyAfter}
              </p>
              <ul className="mt-6 space-y-3 text-sm sm:text-base">
                {[
                  ["LISTEN", "SILENT"],
                  ["CINEMA", "ICEMAN"],
                  ["DORMITORY", "DIRTY ROOM"],
                  ["ASTRONOMER", "MOON STARER"],
                  ["THE EYES", "THEY SEE"],
                  ["ELVIS", "LIVES"],
                ].map(([from, to]) => (
                  <li key={from} className="flex flex-wrap items-center gap-2 rounded-xl border border-ink/8 bg-white px-4 py-3">
                    <span className="font-bold tracking-wide text-ink">{from}</span>
                    <span className="text-pink" aria-hidden="true">→</span>
                    <span className="font-semibold text-indigo-deep">{to}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[2rem] border border-ink/10 bg-gradient-to-br from-indigo-deep to-[#2F3F9A] p-8 text-white shadow-[0_24px_50px_-24px_rgba(26,27,75,0.65)]">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-gold">{t.whyEyebrow}</p>
              <h3 className="mt-3 font-display text-2xl font-bold sm:text-3xl">{t.whyTitle}</h3>
              <p className="mt-4 text-white/75">{t.whyBody}</p>
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
          <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">{t.tryIdeasTitle}</h2>
          <p className="mt-3 max-w-3xl text-ink/65">{t.tryIdeasBody}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {t.tryIdeas.map((word) => (
              <Link
                key={word}
                href={homeHash}
                className="rounded-xl border border-ink/10 bg-white px-3 py-2 text-sm font-semibold tracking-wide text-ink transition hover:border-pink/40 hover:text-pink"
              >
                {word}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">{t.tipsTitle}</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {t.tips.map((item) => (
              <article key={item.t} className="rounded-2xl border border-ink/10 bg-white p-5">
                <h3 className="font-display text-xl font-bold text-ink">{item.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{item.d}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm text-ink/60">
            {t.tipsFooterBefore}{" "}
            <Link href="/what-is-an-anagram" className="font-semibold text-pink hover:underline">
              {t.navWhat.toLowerCase()}
            </Link>
            {t.tipsFooterMid}{" "}
            <Link href="/blog/anagram-vs-permutation" className="font-semibold text-pink hover:underline">
              anagram vs permutation
            </Link>{" "}
            {t.tipsFooterAfter}
          </p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">{t.trustTitle}</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.trustItems.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-2xl border border-ink/10 bg-white px-4 py-4 text-sm font-medium text-ink/80"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-pink/15 text-xs font-bold text-pink-deep">
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
          <FaqSection title={t.faqTitle} items={t.faqs} />
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-start justify-between gap-6 rounded-[2rem] border border-pink/20 bg-gradient-to-r from-white via-blush to-white p-8 sm:flex-row sm:items-center sm:p-10">
            <div>
              <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">{t.ctaTitle}</h2>
              <p className="mt-2 max-w-xl text-ink/65">{t.ctaBody}</p>
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
