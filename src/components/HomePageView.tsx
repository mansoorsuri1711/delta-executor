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
        inLanguage: "en",
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
      title: "Android download",
      body: "Delta Executor installs as an APK on Android. Allowing unknown sources, picking the right ARM build, and checking Play Protect prompts are the steps most players miss. The download page walks the checklist in order.",
      href: ROUTES.download,
      linkLabel: "Android download guide",
    },
    {
      title: "iOS setup",
      body: "On iPhone and iPad, Delta usually arrives via IPA, Direct Install, or a sideloading tool. Signing errors, expired profiles, and revokes are the common blockers. The iOS page explains which method fits which device.",
      href: ROUTES.ios,
      linkLabel: "iOS install guide",
    },
    {
      title: "PC version",
      body: "Many mirror sites advertise a “Delta for PC” EXE. Most of those links are unrelated or risky software. Our PC guide separates emulator installs of the Android APK from fake native Windows downloads.",
      href: ROUTES.pc,
      linkLabel: "PC version guide",
    },
    {
      title: "How to use",
      body: "After install you still need attach, Script Hub, paste, and execute. The how-to guide shows that flow so you are not stuck with an APK that never runs a script.",
      href: ROUTES.howToUse,
      linkLabel: "How to use Delta Executor",
    },
    {
      title: "What is Delta Executor?",
      body: "New to Delta? The beginner guide explains what the executor does, which platforms it supports, and what risks to understand before you install.",
      href: ROUTES.whatIs,
      linkLabel: "Beginner guide",
    },
    {
      title: "How to get a Delta key",
      body: "Free Delta keys are time-limited and often device-bound. The key guide walks Linkvertise, LootLabs, and Work.ink without risky installs.",
      href: ROUTES.keySystem,
      linkLabel: "Get key walkthrough",
    },
    {
      title: "Is Delta Executor safe?",
      body: "Device risk, Roblox ban risk, VirusTotal habits, and permissions explained — honest assessment with no marketing fluff.",
      href: ROUTES.safety,
      linkLabel: "Safety review",
    },
    {
      title: "Key not working",
      body: "Invalid key, Too Many Requests, stuck unlock progress, and network bind errors — fixes for the key failures people search most.",
      href: ROUTES.keyNotWorking,
      linkLabel: "Key error fixes",
    },
    {
      title: "Troubleshooting",
      body: "Injection failures, key loops, crashes, and Play Protect blocks show up after every Roblox patch week. The troubleshooting page gives short diagnosis orders for each error.",
      href: ROUTES.troubleshooting,
      linkLabel: "Troubleshooting guide",
    },
    {
      title: "Mac guide",
      body: "There is no trusted mass-market Delta .dmg for every Mac user. Most people use an emulator or iPhone mirroring. The Mac page clarifies which option fits whom.",
      href: ROUTES.mac,
      linkLabel: "Mac guide",
    },
    {
      title: "VNG (Vietnam)",
      body: "The VNG Roblox client differs from the global client in some regions. The VNG page explains who needs that build and how install differs.",
      href: ROUTES.vng,
      linkLabel: "VNG guide",
    },
    {
      title: "Discord server",
      body: "Update pings, bug reports, and script talk live on Discord. The Discord page covers safe joins and warns about fake invite / DM scams.",
      href: ROUTES.discord,
      linkLabel: "Discord guide",
    },
    {
      title: "Executor comparison",
      body: "Mobile support, key friction, hub quality, and update speed — compared without “undetectable” slogans. Use it when deciding if Delta fits your device.",
      href: ROUTES.comparison,
      linkLabel: "Comparison table",
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
                Download Delta Executor
                <span aria-hidden="true">→</span>
              </a>
              <Link href={ROUTES.ios} className="bfv-outline-btn bfv-outline-btn-muted">
                iOS guide
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
              Community channels — Telegram, Facebook, X, and Discord
            </p>
            <div className="mx-auto mt-8 w-full max-w-xl text-left">
              <h2 className="font-display text-2xl font-bold text-white md:text-3xl">APK details</h2>
              <p className="mt-2 mb-4 text-sm text-white/55">
                Quick facts for the current Delta Executor build
              </p>
              <div className="overflow-x-auto rounded-2xl border border-white/10">
                <table className="w-full text-sm text-white/70">
                  <tbody className="divide-y divide-white/5">
                    {[
                      ["App name", "Delta Executor"],
                      ["Version", APP_VERSION],
                      ["Updated", STYLES_UPDATED],
                      ["Platform", "Android 5.0+ · iOS 15–18"],
                      ["Architecture", "ARM64 + ARM32"],
                      ["Approx. size", "167.8 MB"],
                      ["Price", "Free (key system)"],
                      ["Root / jailbreak", "Not required"],
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
              {t.ratingsLabel} · Free · Android · Game · {STYLES_UPDATED}
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
              Live Google results for “delta executor download” are crowded with YouTube installs, Softonic-style mirrors, and one-page skyscraper sites.{" "}
              <Link href={ROUTES.download} className="font-semibold text-pink hover:underline">
                Our download guide
              </Link>{" "}
              keeps platform steps on{" "}
              <span className="text-white/80">deltaexecutor.com.ph</span> instead of stuffing every query into a single thin URL.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">
              Competitors like deltaexecuter.com, delta-executor.com, deltaexploits.gg, and deltaexecutor.com.br cover Android buttons and key steps, but often skip honest ban language, image SEO, or multi-page IA. We close those gaps with dedicated{" "}
              <Link href={ROUTES.ios} className="font-semibold text-pink hover:underline">
                iOS
              </Link>
              ,{" "}
              <Link href={ROUTES.pc} className="font-semibold text-pink hover:underline">
                PC
              </Link>
              ,{" "}
              <Link href={ROUTES.safety} className="font-semibold text-pink hover:underline">
                safety
              </Link>
              , and{" "}
              <Link href={ROUTES.keyNotWorking} className="font-semibold text-pink hover:underline">
                key troubleshooting
              </Link>{" "}
              guides.
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
            What&apos;s new in {APP_VERSION}?
          </h2>
          <p className="mt-3 text-white/55 mb-6">{STYLES_UPDATED} build — headline improvements</p>
          <ul className="space-y-3">
            {[
              "Roblox November 2026 engine compatibility — injection restored after the latest patch cycle.",
              "Script hub refreshed with current Blox Fruits, Da Hood, and Grow a Garden categories.",
              "ARM64 injection path optimized — faster attach on 4 GB+ RAM phones.",
              "Improved auto-inject reliability on Android 13/14.",
              "iOS build updated for iOS 18.x Direct Install / AltStore signing checks.",
              "Error toast now surfaces Lua line numbers on script failures.",
              "Longer key-gateway timeout on slow mobile networks.",
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
            Need install steps after updating? Jump to the{" "}
            <Link href={ROUTES.download} className="font-semibold text-pink hover:underline">
              Android APK guide
            </Link>{" "}
            or the{" "}
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
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">Pros and cons</h2>
          <p className="mt-3 mb-6 text-white/55">Honest scorecard — no fake “undetectable forever” claims</p>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-green-400/20 bg-green-400/5 p-5">
              <h3 className="mb-3 font-display font-bold text-green-400">Pros</h3>
              <ul className="space-y-2 text-sm text-white/65">
                {[
                  "Android and iOS — real cross-platform mobile focus",
                  "No root or jailbreak required for standard builds",
                  "Free with a key system — no forced paywall for basic use",
                  "Native ARM64 path for modern phones",
                  "Curated script hub reduces some malicious-paste risk",
                  "Usually responds to Roblox patches within 24–72 hours",
                ].map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="text-green-400 shrink-0">✓</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-red-400/20 bg-red-400/5 p-5">
              <h3 className="mb-3 font-display font-bold text-red-400">Cons</h3>
              <ul className="space-y-2 text-sm text-white/65">
                {[
                  "Daily ~24-hour key refresh on free tier",
                  "No trusted native Windows EXE for most users",
                  "Free iOS signing may need re-trust after revokes",
                  "Injection can break temporarily after Roblox updates",
                  "Ban risk is real — Roblox ToS violation",
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
            Want a deeper risk breakdown? Read{" "}
            <Link href={ROUTES.safety} className="font-semibold text-pink hover:underline">
              Is Delta Executor safe?
            </Link>
          </p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">Popular games in Script Hub</h2>
          <p className="mt-3 mb-6 text-white/55">
            The built-in hub surfaces categories for these game types.{" "}
            <Link href={ROUTES.howToUse} className="text-pink hover:underline">
              How to run scripts →
            </Link>
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { game: "Blox Fruits", type: "Auto farm, teleport, fruit helpers" },
              { game: "Brookhaven", type: "Admin tools, social scripts" },
              { game: "Pet Simulator X", type: "Auto collect, hatch helpers" },
              { game: "Arsenal", type: "Aim helpers, ESP-style tools" },
              { game: "Jailbreak", type: "Vehicle speed, teleport routes" },
              { game: "Da Hood", type: "Farm, hitbox, movement helpers" },
              { game: "Grow a Garden", type: "Farm automation, stat tools" },
              { game: "Adopt Me", type: "Trade helpers, auto actions" },
              { game: "Universal helpers", type: "Admin panels, anti-AFK, FPS unlock" },
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
              <h2 className="font-display text-xl font-bold text-white">How does Delta compare?</h2>
              <p className="mt-2 text-sm text-white/55">
                Side-by-side: mobile support, key friction, script hub, update speed — no fake claims.
              </p>
            </div>
            <Link
              href={ROUTES.comparison}
              className="shrink-0 rounded-full border border-pink/30 bg-pink/10 px-5 py-2.5 text-sm font-semibold text-pink hover:bg-pink/20"
            >
              View comparison →
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">Community &amp; Discord</h2>
          <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">
            Competitor hubs lean on Discord for patch notes, script sharing, and error reports. We point you to community channels for update pings — and keep support email on{" "}
            <strong className="font-semibold text-white/80">{SITE_NAME}</strong> so random invite scams do not become your only contact path.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              { t: "Update announcements", d: "Learn when Android / iOS builds catch up after Roblox patches." },
              { t: "Bug reports", d: "Injection and key issues diagnose faster with logs." },
              { t: "Script sharing", d: "Community hubs surface working scripts — still verify before execute." },
              { t: "Tutorials", d: "Short clips for attach, key renew, and first script runs." },
            ].map((item) => (
              <li key={item.t} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <h3 className="font-semibold text-white">{item.t}</h3>
                <p className="mt-1 text-sm text-white/55">{item.d}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-white/55">
            <Link href={ROUTES.discord} className="font-semibold text-pink hover:underline">
              Open the Discord guide →
            </Link>{" "}
            Prefer email? Write{" "}
            <Link href={ROUTES.contact} className="font-semibold text-pink hover:underline">
              support@deltaexecutor.com.ph
            </Link>
            . Never paste Roblox passwords into Discord DMs that claim to “whitelist” your account.
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
              Android, iOS, and scripts — at a glance
            </h2>
            <p className="mt-4 text-white/55">
              Three feature visuals cover the intents people actually search around Delta Executor.
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
