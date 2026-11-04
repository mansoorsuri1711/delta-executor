import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ValuesList from "@/components/ValuesList";
import CtaButton from "@/components/CtaButton";
import FaqSection from "@/components/FaqSection";
import {
  OG_IMAGE,
  SITE_NAME,
  SITE_ORIGIN,
  VALUES_UPDATED,
} from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Blox Fruit Values — Updated Trade Value List & Demand",
  description:
    "Blox fruit values list for Roblox Blox Fruits. Check blox fruit value, demand, Beli price, and trend, then open the value calculator for WFL trade checks.",
  alternates: { canonical: `${SITE_ORIGIN}/blox-fruits-values` },
  keywords: [
    "blox fruit values",
    "blox fruit value",
    "blox fruits values",
    "blox fruits value",
    "value blox fruit",
    "blox fruit trade value",
    "bloxfruitsvalues",
  ],
  openGraph: {
    title: "Blox Fruit Values — Updated Trade Value List & Demand",
    description: `Blox fruit values updated ${VALUES_UPDATED}. Search, filter by rarity, compare physical vs permanent trade value.`,
    url: `${SITE_ORIGIN}/blox-fruits-values`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Blox fruit values list" }],
  },
};

const faqs = [
  {
    question: "What are blox fruit values?",
    answer:
      "Blox fruit values are community trade averages for Devil Fruits in Roblox Blox Fruits. They estimate what players trade for—not the in-game Beli dealer price.",
  },
  {
    question: "How often are blox fruits values updated?",
    answer:
      `This list is marked updated ${VALUES_UPDATED}. Markets still move with stock, updates, and hype, so treat every blox fruit value as guidance and confirm with recent offers.`,
  },
  {
    question: "How do I use blox fruit values for trading?",
    answer:
      "Look up each fruit’s value and demand, then compare both sides in the Blox Fruit Calculator / trade calculator to see Win, Fair, or Lose before you accept.",
  },
  {
    question: "Is blox fruit trade value the same as Beli?",
    answer:
      "No. Beli is shop price. Blox fruit trade value is what players pay each other. High-demand fruits often trade above Beli; soft fruits can sit below.",
  },
];

export default function ValuesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blox fruit values", href: "/blox-fruits-values" },
        ]}
      />
      <div className="container mx-auto max-w-6xl px-4 pb-14 pt-6">
        <h1 className="font-display text-3xl font-bold text-ink md:text-4xl">
          Blox fruit values
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-ink/75">
          Updated blox fruit values for Roblox Blox Fruits—trade value, demand, Beli price, and
          trend in one list ({VALUES_UPDATED}). Research a blox fruit value here, then open the{" "}
          <Link href="/trade-calculator" className="font-semibold text-teal-deep underline">
            blox fruit trade calculator
          </Link>{" "}
          for a full WFL check.
        </p>

        <div className="mt-8">
          <ValuesList />
        </div>

        <section className="mt-12 max-w-3xl space-y-4">
          <h2 className="font-display text-2xl font-bold text-ink">
            What blox fruit values mean for trading
          </h2>
          <p className="leading-relaxed text-ink/75">
            Players search blox fruit values, blox fruit value, and blox fruits values for the same
            job: know what a fruit is worth before trading. This page is that value list. It is not
            an official Roblox price sheet. It is a community reference for blox fruit trading so
            you can compare offers without guessing from chat alone.
          </p>
          <p className="leading-relaxed text-ink/75">
            When you are ready to judge a full offer—not just one fruit—use the{" "}
            <Link href="/" className="font-semibold text-teal-deep underline">
              blox fruit value calculator
            </Link>{" "}
            on the homepage. Paste both sides, toggle physical or permanent, and read Win / Fair /
            Lose against these same values.
          </p>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink">How to read this value list</h2>
            <p className="mt-3 leading-relaxed text-ink/75">
              <strong>Value</strong> is the blox fruit trade value used for WFL.{" "}
              <strong>Demand</strong> shows how easily the fruit finds a partner.{" "}
              <strong>Beli</strong> is dealer price—not what players pay each other.{" "}
              <strong>Trend</strong> flags fruits that are rising, stable, soft, or unstable after
              recent market noise.
            </p>
            <p className="mt-3 leading-relaxed text-ink/75">
              Perfect values do not exist. Two Fair trades can feel different when one side wants a
              grinding fruit and the other wants flash. That is why demand sits next to value on
              every row.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-ink">
              Blox fruit trading with physical and permanent
            </h2>
            <p className="mt-3 leading-relaxed text-ink/75">
              Toggle Physical or Permanent above the table. Permanent unlocks usually sit higher
              because they stay on the account. Never compare a physical offer to a permanent ask
              without switching modes—or your trade value call will be wrong.
            </p>
            <p className="mt-3 leading-relaxed text-ink/75">
              Need the concepts first? Read{" "}
              <Link
                href="/permanent-vs-physical-fruits"
                className="font-semibold text-teal-deep underline"
              >
                permanent vs physical fruits
              </Link>
              ,{" "}
              <Link
                href="/blog/how-demand-and-value-work"
                className="font-semibold text-teal-deep underline"
              >
                how demand and value work
              </Link>
              , or the{" "}
              <Link
                href="/blog/blox-fruits-trading-guide"
                className="font-semibold text-teal-deep underline"
              >
                blox fruits trading guide
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 font-display text-2xl font-bold text-ink">Blox fruit values FAQs</h2>
          <FaqSection items={faqs} />
        </section>

        <div className="mt-10 rounded-2xl border border-ink/10 bg-white p-6 text-center shadow-sm">
          <p className="text-lg text-ink/75">
            Have the values? Check the trade with the free calculator.
          </p>
          <div className="mt-4 flex justify-center">
            <CtaButton href="/#calculator" ariaLabel="Open Blox Fruit Calculator" icon="arrow">
              OPEN VALUE CALCULATOR
            </CtaButton>
          </div>
        </div>
      </div>
    </>
  );
}
