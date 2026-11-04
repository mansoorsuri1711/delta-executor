import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaButton from "@/components/CtaButton";
import FaqSection from "@/components/FaqSection";
import { OG_IMAGE, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "What Is WFL in Blox Fruits? Win Fair Lose Explained",
  description:
    "WFL means Win / Fair / Lose in Blox Fruits trading. Learn how traders judge offers, why demand matters, and how a calculator applies WFL.",
  alternates: { canonical: `${SITE_ORIGIN}/what-is-wfl` },
  openGraph: {
    title: "What Is WFL in Blox Fruits? Win Fair Lose Explained",
    description: "Clear definitions of Win, Fair, and Lose for fruit trades.",
    url: `${SITE_ORIGIN}/what-is-wfl`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "What is WFL in Blox Fruits" }],
  },
};

const faqs = [
  {
    question: "What does WFL mean in Blox Fruits?",
    answer:
      "WFL stands for Win / Fair / Lose. It is shorthand traders use when asking whether a proposed trade favors one side or is roughly even on current values.",
  },
  {
    question: "Who decides if a trade is W, F, or L?",
    answer:
      "Communities use shared value lists as a baseline. Different lists can disagree slightly. A calculator applies one consistent list so your calls stay comparable.",
  },
  {
    question: "Can a Fair trade still be a bad idea?",
    answer:
      "Yes. Low demand, upcoming nerfs, or fruits you cannot re-trade easily can make a Fair look worse in practice. Always weigh demand beside value.",
  },
];

export default function WhatIsWflPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "What is WFL", href: "/what-is-wfl" },
        ]}
      />
      <div className="container mx-auto max-w-4xl px-4 pb-14 pt-6">
        <h1 className="font-display text-3xl font-bold text-ink md:text-4xl">
          What is WFL in Blox Fruits?
        </h1>
        <p className="mt-3 text-lg text-ink/75">
          WFL means <strong>Win / Fair / Lose</strong>. When someone posts an offer and asks “WFL?”,
          they want a quick call on whether the trade helps them, breaks even, or hurts them on
          current trade values.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            {
              label: "Win",
              body: "You receive more trade value than you give. Good on numbers—still check demand.",
              className: "border-emerald/30 bg-emerald/10",
            },
            {
              label: "Fair",
              body: "Both sides are close in value. Negotiate tiny adds if demand is uneven.",
              className: "border-teal/30 bg-teal/10",
            },
            {
              label: "Lose",
              body: "You give more value than you get. Ask for adds or decline.",
              className: "border-coral/30 bg-coral/10",
            },
          ].map((card) => (
            <article
              key={card.label}
              className={`rounded-2xl border p-5 ${card.className}`}
            >
              <h2 className="font-display text-2xl font-bold text-ink">{card.label}</h2>
              <p className="mt-2 text-sm text-ink/75">{card.body}</p>
            </article>
          ))}
        </div>

        <section className="mt-12 space-y-4">
          <h2 className="font-display text-2xl font-bold text-ink">Why traders ask WFL</h2>
          <p className="leading-relaxed text-ink/75">
            Blox Fruits has no official trade ticker. Values come from thousands of player deals.
            Asking WFL crowdsources a second opinion before you lock items in the Roblox trade
            window. A{" "}
            <Link href="/trade-calculator" className="font-semibold text-teal-deep underline">
              trade calculator
            </Link>{" "}
            answers the same question with consistent math instead of vibes.
          </p>
          <h2 className="font-display text-2xl font-bold text-ink">How our calculator scores WFL</h2>
          <p className="leading-relaxed text-ink/75">
            We total each side&apos;s trade value. If you receive roughly 8%+ more value, the result
            is Win. If you give 8%+ more, it is Lose. Inside that band it is Fair. Demand averages
            appear beside the totals so you can spot liquidity gaps even when value looks even.
          </p>
          <h2 className="font-display text-2xl font-bold text-ink">WFL is not the whole story</h2>
          <p className="leading-relaxed text-ink/75">
            Personal preference, grinding needs, and upcoming updates can beat a pure number. Use
            WFL to filter disasters, then apply judgment. Pair it with the{" "}
            <Link href="/blox-fruits-values" className="font-semibold text-teal-deep underline">
              values list
            </Link>{" "}
            and safe trading habits from our{" "}
            <Link
              href="/blog/blox-fruits-trading-scams"
              className="font-semibold text-teal-deep underline"
            >
              scam guide
            </Link>
            .
          </p>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 font-display text-2xl font-bold text-ink">WFL FAQs</h2>
          <FaqSection items={faqs} />
        </section>

        <div className="mt-10 flex justify-center">
          <CtaButton href="/#calculator" ariaLabel="Check WFL now" icon="arrow">
            CHECK WFL NOW
          </CtaButton>
        </div>
      </div>
    </>
  );
}
