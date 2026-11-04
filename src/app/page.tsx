import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import FaqSection from "@/components/FaqSection";
import BloxFruitCalculator from "@/components/BloxFruitCalculator";
import CtaButton from "@/components/CtaButton";
import { WEB_APPLICATION_JSON_LD } from "@/lib/appFacts";
import { imageObjectLicensing } from "@/lib/schemaImageLicensing";
import { BLOX_FRUITS, formatValue } from "@/lib/bloxFruits";
import {
  BRAND_FEATURE_2,
  BRAND_FEATURE_3,
  BRAND_FEATURE_4,
  BRAND_HERO,
  OG_IMAGE,
  SITE_NAME,
  SITE_ORIGIN,
  SITE_RATING,
  VALUES_UPDATED,
} from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: {
    default: "Blox Fruit Calculator — Values, Trade Value & WFL Checker",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Free blox fruit calculator and value checker for Roblox Blox Fruits. Look up blox fruit values, compare trade value and demand, and see Win, Fair, or Lose before you accept.",
  alternates: { canonical: SITE_ORIGIN },
  openGraph: {
    title: "Blox Fruit Calculator — Values, Trade Value & WFL Checker",
    description:
      "Blox fruit value calculator for trades: check values, demand, Beli, and Win / Fair / Lose on both sides.",
    url: SITE_ORIGIN,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Blox Fruit Calculator — trade value and WFL checker online",
      },
    ],
  },
};

const faqs = [
  {
    question: "What is a Blox Fruit Calculator?",
    answer:
      "A Blox Fruit Calculator (also called a blox fruit value calculator or trade calculator) is a browser trade helper for Roblox Blox Fruits. You add the fruits you offer and the fruits you want, then it totals blox fruit values, Beli price, and demand so you can see Win, Fair, or Lose (WFL).",
  },
  {
    question: "Where can I check blox fruit values?",
    answer:
      "Use the blox fruit values list on this site for updated trade value, demand, and Beli by fruit. Then load both sides of an offer into the calculator to turn those values into a WFL result.",
  },
  {
    question: "Is this a blox fruit trade calculator?",
    answer:
      "Yes. The homepage tool and the dedicated trade calculator page both compare your offer vs what you receive using community blox fruit trade value—ideal for blox fruit trading decisions.",
  },
  {
    question: "How do I use this Blox Fruit Calculator?",
    answer:
      "Tap Your offer or You receive, search a fruit, and add it. Toggle Physical or Permanent on each item so the math matches the Roblox trade window. The calculator updates totals and shows WFL live. A full walkthrough is on the how-to page.",
  },
  {
    question: "What does WFL mean in Blox Fruits?",
    answer:
      "WFL means Win / Fair / Lose. Win means you receive more trade value than you give. Fair means both sides are close. Lose means you are overpaying on current community values. Demand can still change how easy a Fair trade is to complete.",
  },
  {
    question: "What is the difference between value and price in Blox Fruits?",
    answer:
      "Price (Beli) is what the fruit costs from the in-game dealer. Value is what players actually trade it for. High-demand fruits often trade above Beli; low-demand fruits can sit below dealer price even when the shop number looks high.",
  },
  {
    question: "What does demand mean on a fruit value list?",
    answer:
      "Demand (usually 1–10) shows how easy a fruit is to trade. High demand fruits find partners quickly and often draw adds. Low demand fruits may need overpay or patience even when raw value looks fair.",
  },
  {
    question: "Physical vs permanent fruits — which should I select?",
    answer:
      "Physical fruits are inventory items you can store, eat, or trade away. Permanent fruits unlock that Devil Fruit forever on the account and usually trade higher. Toggle Phys/Perm on every slot so WFL matches the real offer.",
  },
  {
    question: "Are these Blox Fruits values official?",
    answer:
      "No. Values are community trade averages for guidance. Markets shift with updates, stock, YouTube hype, and player preference. Use the calculator as a starting point, then confirm with recent offers before you accept.",
  },
  {
    question: "Is the Blox Fruit Calculator free on bloxfruitcalculator.net?",
    answer:
      "Yes. The trade calculator and values list run free in your browser—no account, no download, and no paywall for WFL checks.",
  },
  {
    question: "Can I check Kitsune, Dragon, Dough, Buddha, and Venom trades?",
    answer:
      "Yes. Search any fruit in the list—including Kitsune, Dragon (West/East), Dough, Buddha, Venom, Gas, Yeti, Portal, and more—then compare multi-fruit offers side by side (up to four items per side).",
  },
  {
    question: "Does the Blox Fruit Calculator work on mobile?",
    answer:
      "Yes. bloxfruitcalculator.net is responsive. Open it in your phone browser, build both sides of the trade, and read the WFL result without installing an app.",
  },
  {
    question: "Why is my Fair trade still hard to complete?",
    answer:
      "Value can look fair while demand is uneven. Offering a low-demand mythical for a high-demand grinding fruit often needs adds. Always read value and demand together.",
  },
  {
    question: "How accurate is a WFL trade calculator?",
    answer:
      "Accuracy depends on how current the value list is and how stable the market is. The calculator applies one consistent list to both sides so your call stays comparable. Unstable or hyped fruits may still need a Win buffer.",
  },
  {
    question: "Can I calculate permanent fruit trades?",
    answer:
      "Yes. Set new items to Permanent, or flip Phys/Perm on any fruit already in a slot. Never compare a physical offer to a permanent ask without switching modes.",
  },
  {
    question: "What is overpay in Blox Fruits trading?",
    answer:
      "Overpay means offering more trade value than a Fair baseline—often to land a high-demand fruit faster. The calculator shows the value gap so you know how large that overpay is before you accept.",
  },
  {
    question: "Is this affiliated with Blox Fruits or Roblox?",
    answer:
      "No. Blox Fruit Calculator is an unofficial fan tool for trade planning. It is not affiliated with Blox Fruits, Roblox Corporation, or any third-party value publisher.",
  },
];

const howToSteps = [
  {
    title: "Select Your offer",
    body: "Tap the left card so it shows “Adding here.” This side is what you give away in the Roblox trade window.",
  },
  {
    title: "Search and add fruits",
    body: "Use search or popular chips. Add up to four fruits. Toggle Phys or Perm on each item to match the real offer.",
  },
  {
    title: "Fill You receive",
    body: "Tap the right card and add what you want back. Multi-fruit deals work the same way on both sides.",
  },
  {
    title: "Read WFL before Accept",
    body: "Check the center WFL chip and the full result summary. Negotiate adds if demand disagrees with a Fair label.",
  },
];

const featureCards = [
  {
    title: "Live Win / Fair / Lose",
    body: "Both sides total instantly. A clear WFL label helps you catch bad adds before the trade window locks.",
  },
  {
    title: "Value, demand, and Beli together",
    body: "Trade value drives WFL. Demand shows liquidity. Beli reminds you how far market price sits from the dealer sticker.",
  },
  {
    title: "Physical and permanent modes",
    body: "Per-item Phys/Perm toggles stop the most common beginner mistake: mixing unlocks with inventory fruits.",
  },
  {
    title: "Searchable fruit list",
    body: "Find Dragon, Kitsune, Buddha, Dough, Venom, and the full set fast, then build offers without leaving the page.",
  },
  {
    title: "Swap and reset controls",
    body: "Flip sides in one tap when roles reverse, or reset the board when a negotiation restarts from scratch.",
  },
  {
    title: "Mobile-ready trade checks",
    body: "Run the same calculator between servers on your phone—no app install and no account wall.",
  },
];

const commonMistakes = [
  {
    title: "Comparing physical to permanent",
    body: "A physical Kitsune and a permanent Kitsune are not the same trade. Always match Phys/Perm to the window.",
  },
  {
    title: "Ignoring demand on a Fair",
    body: "Equal value with a huge demand gap often still needs adds. High-demand fruits move; low-demand ones stall.",
  },
  {
    title: "Trusting dealer Beli alone",
    body: "Beli is shop price, not player trade value. Using only Beli is how overpays and underpays both happen.",
  },
  {
    title: "Accepting “I’ll add after”",
    body: "Anything not in the current trade window does not exist. Re-run the calculator after every edit.",
  },
  {
    title: "Rushing for hype fruits",
    body: "Stock floods and creator videos can spike a fruit for a day. Demand an extra Win buffer on unstable trends.",
  },
  {
    title: "Leaving the official trade window",
    body: "Middleman DMs, password “verification,” and cross-trade pressure are scam patterns—not clever shortcuts.",
  },
];

const tipCards = [
  {
    title: "Build the offer before you chat",
    body: "Know your target fruit and your maximum Lose you will accept. Emotion drops when the math is ready first.",
  },
  {
    title: "Negotiate with numbers",
    body: "Say “my side is X value at Y demand; yours is Z.” Calm structure ends arguments faster than vibes.",
  },
  {
    title: "Use adds intentionally",
    body: "Small mid-tier fruits close demand gaps. Dumping random commons rarely fixes a real value hole.",
  },
  {
    title: "Re-check after every edit",
    body: "One switched permanent or swapped mythical can flip Win to Lose. Refresh the calculator every change.",
  },
];

const whoFor = [
  {
    title: "New traders",
    body: "Learn what Fair actually means before you give away a hard-earned mythical for a shiny but soft fruit.",
  },
  {
    title: "Grinders upgrading kits",
    body: "Check whether Buddha, Dough, or other grind staples are worth the overpay you are about to send.",
  },
  {
    title: "Collectors and flippers",
    body: "Spot demand gaps fast so you buy liquid fruits and avoid inventory that sits for days.",
  },
  {
    title: "Mobile players",
    body: "Confirm WFL between hops without installing another app or trusting a random Discord screenshot.",
  },
];

const topFruits = BLOX_FRUITS.filter((f) => f.demand >= 8).slice(0, 8);
const exampleFruits = {
  buddha: BLOX_FRUITS.find((f) => f.id === "buddha"),
  dough: BLOX_FRUITS.find((f) => f.id === "dough"),
  kitsune: BLOX_FRUITS.find((f) => f.id === "kitsune"),
  venom: BLOX_FRUITS.find((f) => f.id === "venom"),
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_ORIGIN,
  description:
    "Free Blox Fruit Calculator to compare trade values, demand, and Win / Fair / Lose for Roblox Blox Fruits.",
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_ORIGIN}/blox-fruits-values?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to use the Blox Fruit Calculator",
  description:
    "Compare both sides of a Blox Fruits trade and read Win, Fair, or Lose from current value and demand.",
  step: howToSteps.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.title,
    text: step.body,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const softwareSchema = {
  "@context": "https://schema.org",
  ...WEB_APPLICATION_JSON_LD,
  description:
    "Browser-based Blox Fruit Calculator that compares trade offers and shows Win, Fair, or Lose.",
  screenshot: {
    "@type": "ImageObject",
    url: `${SITE_ORIGIN}${BRAND_HERO}`,
    width: 1600,
    height: 900,
    ...imageObjectLicensing,
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-8 pt-8 sm:px-6 md:px-8 md:pb-10 md:pt-12">
        <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-teal/15 blur-3xl hero-glow" />
        <div className="pointer-events-none absolute -right-16 top-24 h-56 w-56 rounded-full bg-[#C4B5FD]/25 blur-3xl hero-glow" />

        <div className="container relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl animate-fade-up text-center">
            <h1 className="font-display text-4xl font-bold leading-[1.08] text-ink sm:text-5xl md:text-[3.25rem]">
              <span className="brand-gradient-text">Blox Fruit Calculator</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-ink/75 sm:text-xl">
              Free blox fruit value calculator for trading. Check blox fruit values, compare trade
              value and demand, then see Win, Fair, or Lose before you accept.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="px-4 pb-12 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <BloxFruitCalculator />
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            <span className="trust-chip" aria-label={`${SITE_RATING.ratingValue} out of 5 stars`}>
              <span className="font-semibold text-ink">{SITE_RATING.ratingValue}★</span>
              <span>({Number(SITE_RATING.ratingCount).toLocaleString()} ratings)</span>
            </span>
            <span className="trust-chip">Free · Web · Trade helper</span>
            <span className="trust-chip">Values updated {VALUES_UPDATED}</span>
          </div>
          <div className="mx-auto mt-10 max-w-4xl animate-fade-up">
            <div className="overflow-hidden rounded-[1.75rem] border border-ink/10 bg-white shadow-[0_28px_70px_-40px_rgba(139,92,246,0.45)]">
              <Image
                src={BRAND_HERO}
                alt="Blox Fruit Calculator showing a trade value and WFL comparison"
                width={1600}
                height={900}
                priority
                sizes="(max-width: 1024px) 100vw, 896px"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values + trading keyword cluster */}
      <section className="px-4 pb-14 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
                Blox fruit values and trade value in one place
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-ink/75">
                Searches for blox fruit values, blox fruit value, and blox fruits values all point
                to the same need: a clear trade value for every fruit. This site pairs an updated{" "}
                <Link href="/blox-fruits-values" className="font-semibold text-teal-deep underline">
                  blox fruit values list
                </Link>{" "}
                with a live calculator so you can look up a number, then test a full offer.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-ink/75">
                Use the list when you only need one blox fruit value. Use the calculator when you
                are mid-trade and need Win / Fair / Lose across multiple fruits, including physical
                and permanent variants.
              </p>
            </div>
            <div>
              <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
                Built for blox fruit trading
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-ink/75">
                Whether you searched blox fruit trade, blox fruit trading, or blox fruit trade
                calculator, the workflow is the same: know the values, compare both sides, then
                accept only when the math matches your goal. The dedicated{" "}
                <Link href="/trade-calculator" className="font-semibold text-teal-deep underline">
                  trade calculator
                </Link>{" "}
                page keeps that WFL tool one click away from chat.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-ink/75">
                New to negotiating? Follow the{" "}
                <Link
                  href="/blog/blox-fruits-trading-guide"
                  className="font-semibold text-teal-deep underline"
                >
                  blox fruits trading guide
                </Link>{" "}
                after you learn the calculator.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is */}
      <section className="px-4 pb-14 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
              What is a Blox Fruit Calculator?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink/75">
              A Blox Fruit Calculator is a trade planning tool for Roblox Blox Fruits. Players trade
              Devil Fruits, limiteds, and permanent unlocks every day, but the fruit dealer’s Beli
              price rarely matches what the market actually pays. Community value lists try to
              describe that market. This calculator turns those numbers into a practical decision:
              is your offer a Win, Fair, or Lose?
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink/75">
              Static screenshots of someone else’s tier list go stale the moment the other player
              adds a second fruit. The Blox Fruit Calculator on bloxfruitcalculator.net lets you mix
              items, switch physical and permanent modes, and re-run the math in seconds. That is
              the difference between guessing under chat pressure and negotiating with a plan.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink/75">
              Traders search for a blox fruit calculator, trade calculator, or WFL checker for the
              same job: stop losing hard-earned fruits to uneven deals. Pair the tool with the{" "}
              <Link href="/blox-fruits-values" className="font-semibold text-teal-deep underline">
                Blox Fruits values list
              </Link>{" "}
              when you want to research a single fruit before building a full offer.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-4 pb-14 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8 max-w-3xl">
            <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
              How the Blox Fruit Calculator works
            </h2>
            <p className="mt-3 text-lg text-ink/70">
              Every trade has two sides. The calculator totals what you give and what you get, then
              scores the gap so you can decide before the items leave your inventory.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {howToSteps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-2xl border border-ink/10 bg-white p-5 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-deep">
                  Step {index + 1}
                </p>
                <h3 className="mt-2 font-display text-xl font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{step.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 max-w-3xl space-y-4 text-lg leading-relaxed text-ink/75">
            <p>
              Under the hood, each fruit carries a community trade value, a demand score from 1 to
              10, and a Beli dealer price. Your offer side and receive side are summed separately.
              If you receive roughly eight percent more value than you give, the result is Win. If
              you give eight percent more, it is Lose. Inside that band, the result is Fair.
            </p>
            <p>
              Demand averages appear beside the totals so you can spot liquidity gaps even when
              value looks even. Prefer screenshots and edge cases? Read the full{" "}
              <Link
                href="/how-to-use-blox-fruit-calculator"
                className="font-semibold text-teal-deep underline"
              >
                how to use the Blox Fruit Calculator
              </Link>{" "}
              guide, or jump straight to the{" "}
              <Link href="/trade-calculator" className="font-semibold text-teal-deep underline">
                dedicated trade calculator
              </Link>{" "}
              page.
            </p>
          </div>
        </div>
      </section>

      {/* Value vs price vs demand */}
      <section className="px-4 pb-14 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
            Value, price, and demand explained
          </h2>
          <p className="mt-3 max-w-3xl text-lg text-ink/70">
            Most bad trades happen because players treat three different numbers as if they meant
            the same thing. The Blox Fruit Calculator shows all three on every side.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm">
              <h3 className="font-display text-xl font-bold text-ink">Trade value</h3>
              <p className="mt-3 text-ink/70 leading-relaxed">
                Value is the community average of what players actually trade a fruit for. It is the
                number used for Win / Fair / Lose. When value lists update after an update or stock
                flood, WFL results shift with them.
              </p>
            </article>
            <article className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm">
              <h3 className="font-display text-xl font-bold text-ink">Beli price</h3>
              <p className="mt-3 text-ink/70 leading-relaxed">
                Beli is the in-game dealer sticker. It tells you shop cost, not player demand. A
                fruit can look expensive in Beli and still trade soft if nobody wants it right now.
              </p>
            </article>
            <article className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm">
              <h3 className="font-display text-xl font-bold text-ink">Demand (1–10)</h3>
              <p className="mt-3 text-ink/70 leading-relaxed">
                Demand measures liquidity. High demand fruits find partners quickly and often pull
                adds. Low demand fruits can sit for days even when the value number looks respectable.
              </p>
            </article>
          </div>

          <div className="mt-8 max-w-3xl space-y-4 text-lg leading-relaxed text-ink/75">
            <p>
              Example pattern: Buddha often carries strong demand because grinders need it, so
              traders may ask for adds even when raw value looks close. A flashy mythical with soft
              demand can show a high value and still be hard to move. That is why a Fair WFL with a
              demand gap is not automatically a good accept.
            </p>
            <p>
              For a deeper walkthrough with rules of thumb, read{" "}
              <Link
                href="/blog/how-demand-and-value-work"
                className="font-semibold text-teal-deep underline"
              >
                how demand and value work
              </Link>
              . To scan the full market table, open the{" "}
              <Link href="/blox-fruits-values" className="font-semibold text-teal-deep underline">
                values list
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* WFL deep dive */}
      <section className="px-4 pb-14 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="rounded-[1.75rem] border border-ink/10 bg-white p-6 shadow-sm sm:p-8 md:p-10">
            <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
              What WFL means on every trade post
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-ink/75">
              When someone comments “WFL?” under a trade ad, they want a Win / Fair / Lose call.
              Communities use shared value lists because Blox Fruits has no official trade ticker.
              A calculator answers the same question with consistent math instead of vibes.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                {
                  label: "Win",
                  body: "You receive more trade value than you give. Good on numbers—still check demand and trend.",
                  className: "border-green-500/30 bg-green-500/10",
                },
                {
                  label: "Fair",
                  body: "Both sides are close in value. Negotiate tiny adds if their demand is much higher.",
                  className: "border-teal/30 bg-teal/10",
                },
                {
                  label: "Lose",
                  body: "You give more value than you get. Ask for adds, swap items, or decline.",
                  className: "border-coral/30 bg-coral/10",
                },
              ].map((card) => (
                <article key={card.label} className={`rounded-2xl border p-5 ${card.className}`}>
                  <h3 className="font-display text-2xl font-bold text-ink">{card.label}</h3>
                  <p className="mt-2 text-sm text-ink/75">{card.body}</p>
                </article>
              ))}
            </div>

            <div className="mt-8 max-w-3xl space-y-4 text-lg leading-relaxed text-ink/75">
              <p>
                WFL is a filter, not a law. Personal goals matter: grinding value, collecting a
                specific mythical, or unlocking a permanent can justify a small Lose. The point of
                the Blox Fruit Calculator is to make that Lose visible—so you choose it on purpose,
                not by accident.
              </p>
              <p>
                Learn the full definition, edge cases, and how our scoring band works on the{" "}
                <Link href="/what-is-wfl" className="font-semibold text-teal-deep underline">
                  what is WFL
                </Link>{" "}
                page.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <CtaButton href="/what-is-wfl" size="sm" ariaLabel="Learn what WFL means" icon="arrow">
                Learn WFL
              </CtaButton>
              <Link
                href="/#calculator"
                className="inline-flex items-center rounded-xl border border-ink/10 bg-ink/5 px-4 py-2.5 text-sm font-semibold text-ink transition hover:bg-ink/10"
              >
                Try a WFL check now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Example trades */}
      <section className="px-4 pb-14 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
            Example trades you can test in the calculator
          </h2>
          <p className="mt-3 max-w-3xl text-lg text-ink/70">
            Use these patterns as practice—not as fixed market rules. Values move; the workflow
            stays the same.
          </p>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <article className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm">
              <h3 className="font-display text-xl font-bold text-ink">
                High-demand grind fruit for mid mythicals
              </h3>
              <p className="mt-3 leading-relaxed text-ink/75">
                Put {exampleFruits.buddha?.name ?? "Buddha"} on You receive and stack mid-tier
                fruits on Your offer until WFL turns Fair or Win. If demand on their side is much
                higher, expect them to ask for a small add even on Fair.
              </p>
              <p className="mt-3 text-sm text-ink/55">
                Snapshot: {exampleFruits.buddha?.name} value{" "}
                {exampleFruits.buddha ? formatValue(exampleFruits.buddha.physicalValue) : "—"} ·
                demand {exampleFruits.buddha?.demand ?? "—"}/10
              </p>
            </article>
            <article className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm">
              <h3 className="font-display text-xl font-bold text-ink">
                Kitsune or Venom multi-fruit packages
              </h3>
              <p className="mt-3 leading-relaxed text-ink/75">
                Top mythicals rarely move 1:1 for random pads. Build {exampleFruits.kitsune?.name ?? "Kitsune"}{" "}
                or {exampleFruits.venom?.name ?? "Venom"} deals with clear main + adds, toggle Perm
                if needed, and watch how fast WFL flips when one side swaps a single fruit.
              </p>
              <p className="mt-3 text-sm text-ink/55">
                Snapshot: {exampleFruits.kitsune?.name}{" "}
                {exampleFruits.kitsune ? formatValue(exampleFruits.kitsune.physicalValue) : "—"} ·{" "}
                {exampleFruits.venom?.name}{" "}
                {exampleFruits.venom ? formatValue(exampleFruits.venom.physicalValue) : "—"}
              </p>
            </article>
          </div>
          <p className="mt-6 text-ink/70">
            Dough and other popular mid-high fruits (
            {exampleFruits.dough
              ? `${formatValue(exampleFruits.dough.physicalValue)} value, demand ${exampleFruits.dough.demand}/10`
              : "see values list"}
            ) are good practice items because small adds change the result quickly. Load them in the
            calculator above and experiment before you negotiate live.
          </p>
        </div>
      </section>

      {/* High demand fruits */}
      <section className="px-4 pb-14 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
                High-demand fruits traders check first
              </h2>
              <p className="mt-3 text-lg text-ink/70">
                Quick snapshot of fruits with strong demand on the current list (updated{" "}
                {VALUES_UPDATED}). Open any trade in the calculator to test real offers.
              </p>
            </div>
            <Link
              href="/blox-fruits-values"
              className="text-sm font-semibold text-teal-deep underline"
            >
              View full value list
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {topFruits.map((fruit) => (
              <article
                key={fruit.id}
                className="rounded-2xl border border-ink/10 bg-white p-4 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-ink/45">
                  {fruit.rarity} · {fruit.trend}
                </p>
                <h3 className="mt-1 font-display text-lg font-bold text-ink">{fruit.name}</h3>
                <p className="mt-2 text-sm text-ink/70">
                  Value{" "}
                  <span className="font-semibold text-teal-deep">
                    {formatValue(fruit.physicalValue)}
                  </span>
                  {" · "}Demand {fruit.demand}/10
                </p>
                <p className="text-xs text-ink/45">Beli {formatValue(fruit.beliPrice)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Physical vs permanent */}
      <section className="px-4 pb-14 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
                Physical vs permanent fruits in one calculator
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-ink/75">
                Physical fruits sit in your inventory. You can store them, eat them, or trade them
                away. Permanent fruits unlock that Devil Fruit on the account forever and usually
                trade at higher values because the unlock stays after the deal.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-ink/75">
                Mixing these categories is the fastest way to misread WFL. If the other player
                offers Permanent Dough while your calculator still has Physical Dough selected, your
                Fair label is fiction. Each slot on this Blox Fruit Calculator toggles Phys or Perm
                so totals match the Roblox window.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-ink/75">
                New to the difference, or deciding whether a Robux permanent is worth it? Read{" "}
                <Link
                  href="/permanent-vs-physical-fruits"
                  className="font-semibold text-teal-deep underline"
                >
                  permanent vs physical fruits
                </Link>
                .
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white">
              <Image
                src={BRAND_FEATURE_3}
                alt="Blox Fruit Calculator tool with physical and permanent fruit toggles"
                width={1200}
                height={900}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 pb-14 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8 max-w-3xl">
            <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
              Blox Fruit Calculator features
            </h2>
            <p className="mt-3 text-lg text-ink/70">
              Built for traders who need a clear WFL call without leaving the browser. Every feature
              supports the same job: fewer bad trades.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featureCards.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm"
              >
                <h3 className="font-display text-xl font-bold text-ink">{card.title}</h3>
                <p className="mt-2 text-ink/70">{card.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                src: BRAND_FEATURE_2,
                alt: "Online Blox Fruit Calculator on desktop for trade checks",
              },
              {
                src: BRAND_FEATURE_3,
                alt: "Calculator interface showing value and demand totals",
              },
              {
                src: BRAND_FEATURE_4,
                alt: "Mobile-friendly Blox Fruit Calculator for on-the-go trades",
              },
            ].map((img) => (
              <div key={img.src} className="overflow-hidden rounded-2xl border border-ink/10">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={600}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="h-auto w-full object-cover"
                />
              </div>
            ))}
          </div>
          <p className="mt-6 text-ink/70">
            See the full breakdown on the{" "}
            <Link href="/features" className="font-semibold text-teal-deep underline">
              features page
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Who it's for */}
      <section className="px-4 pb-14 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
            Who should use this Blox Fruit Calculator?
          </h2>
          <p className="mt-3 max-w-3xl text-lg text-ink/70">
            Anyone who trades fruits in Blox Fruits benefits from a consistent WFL check—especially
            when chat is moving faster than careful math.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whoFor.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-ink/10 bg-white p-5 shadow-sm"
              >
                <h3 className="font-display text-lg font-bold text-ink">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="px-4 pb-14 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
            Trading tips that work with a value calculator
          </h2>
          <p className="mt-3 max-w-3xl text-lg text-ink/70">
            The tool shows numbers. These habits turn those numbers into better deals.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {tipCards.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm"
              >
                <h3 className="font-display text-xl font-bold text-ink">{card.title}</h3>
                <p className="mt-2 text-ink/70">{card.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-lg text-ink/75">
            For a full workflow from inventory check to Accept, follow the{" "}
            <Link
              href="/blog/blox-fruits-trading-guide"
              className="font-semibold text-teal-deep underline"
            >
              Blox Fruits trading guide
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Mistakes + safety */}
      <section className="px-4 pb-14 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
            Common trading mistakes the calculator helps catch
          </h2>
          <p className="mt-3 max-w-3xl text-lg text-ink/70">
            Most losses are process failures, not bad luck. Fix the process and WFL gets easier to
            trust.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {commonMistakes.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-ink/10 bg-white p-5 shadow-sm"
              >
                <h3 className="font-display text-lg font-bold text-ink">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{card.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="font-display text-2xl font-bold text-ink">
                Trade safely while you calculate
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-ink/75">
                A calculator cannot stop scams by itself. Never leave the official Roblox trade
                window for “middleman” DMs, never share passwords or backup codes, and never trust
                off-platform “verification” links. Re-read every line in the trade window after any
                edit—scammers switch physical and permanent while you are distracted.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-ink/75">
                Keep{" "}
                <Link
                  href="/blog/blox-fruits-trading-scams"
                  className="font-semibold text-teal-deep underline"
                >
                  trading scam patterns
                </Link>{" "}
                open until safe habits feel automatic.
              </p>
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-ink">
                Values are guidance, not guarantees
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-ink/75">
                No list can promise perfect accuracy. Markets have quirks: one fruit acts as an add
                in a high-tier deal and a main in a mid-tier deal. Perfect mathematical balance
                across every fruit is impossible. Use community averages to filter disasters, then
                apply judgment for your goals.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-ink/75">
                bloxfruitcalculator.net is an unofficial fan tool—not affiliated with Blox Fruits or
                Roblox. See the{" "}
                <Link href="/disclaimer" className="font-semibold text-teal-deep underline">
                  disclaimer
                </Link>{" "}
                for the full note.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related resources */}
      <section className="px-4 pb-14 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
            Related Blox Fruits trading resources
          </h2>
          <p className="mt-3 max-w-3xl text-lg text-ink/70">
            Use the calculator as the hub, then open the guide that matches your question.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                href: "/trade-calculator",
                title: "Trade WFL calculator",
                body: "Dedicated page for side-by-side Win / Fair / Lose checks.",
              },
              {
                href: "/blox-fruits-values",
                title: "Blox Fruits values list",
                body: "Searchable value, demand, Beli, and trend table.",
              },
              {
                href: "/how-to-use-blox-fruit-calculator",
                title: "How to use the calculator",
                body: "Step-by-step walkthrough with example flows.",
              },
              {
                href: "/what-is-wfl",
                title: "What is WFL?",
                body: "Win / Fair / Lose definitions and scoring notes.",
              },
              {
                href: "/permanent-vs-physical-fruits",
                title: "Permanent vs physical",
                body: "How unlocks and inventory fruits differ in trades.",
              },
              {
                href: "/blog/blox-fruits-trading-guide",
                title: "Trading guide",
                body: "End-to-end process for better deals with less stress.",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-ink/10 bg-white p-5 shadow-sm transition hover:border-teal/30 hover:shadow-md"
              >
                <h3 className="font-display text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-ink/65">{item.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 pb-16 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-3 font-display text-3xl font-bold text-ink md:text-4xl">
            Blox Fruit Calculator FAQs
          </h2>
          <p className="mb-6 max-w-3xl text-lg text-ink/70">
            Straight answers to the questions people search alongside blox fruit calculator, trade
            value checker, and WFL tools.
          </p>
          <FaqSection items={faqs} includeSchema={false} title="Frequently asked questions" />
        </div>
      </section>

      {/* Closing */}
      <section className="px-4 pb-16 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
            Ready to check your next Blox Fruits trade?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-ink/70">
            Open the free Blox Fruit Calculator, build both sides with the right Phys/Perm modes,
            and walk into the trade window knowing whether you are looking at a Win, Fair, or Lose.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <CtaButton href="/#calculator" ariaLabel="Open Blox Fruit Calculator" icon="arrow">
              OPEN CALCULATOR
            </CtaButton>
            <Link
              href="/blox-fruits-values"
              className="inline-flex items-center rounded-xl border border-ink/10 bg-white px-4 py-2.5 text-sm font-semibold text-ink transition hover:bg-ink/5"
            >
              Browse values list
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
