import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import BloxFruitCalculator from "@/components/BloxFruitCalculator";
import FaqSection from "@/components/FaqSection";
import {
  BRAND_HERO,
  OG_IMAGE,
  SITE_NAME,
  SITE_ORIGIN,
} from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Blox Fruit Trade Calculator — WFL & Trade Value Checker",
  description:
    "Free blox fruit trade calculator. Compare blox fruit trade value and demand on both sides, then see Win / Fair / Lose before you accept.",
  alternates: { canonical: `${SITE_ORIGIN}/trade-calculator` },
  openGraph: {
    title: "Blox Fruit Trade Calculator — WFL & Trade Value Checker",
    description: "Side-by-side blox fruit trading math with value, demand, and WFL.",
    url: `${SITE_ORIGIN}/trade-calculator`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Blox fruit trade calculator" }],
  },
};

const faqs = [
  {
    question: "How accurate is this trade calculator?",
    answer:
      "It uses community trade averages. Markets move with updates and stock, so treat WFL as a strong guide—not a guarantee. Confirm with recent offers when a fruit is hyped or unstable.",
  },
  {
    question: "Can I add multiple fruits per side?",
    answer:
      "Yes. Each side supports up to four fruits. Toggle physical or permanent on every slot so multi-item deals stay accurate.",
  },
  {
    question: "What if value is Fair but demand is uneven?",
    answer:
      "You may still need adds. High-demand fruits often command extras even when raw value looks even. Check our demand guide before you accept.",
  },
];

export default function TradeCalculatorPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Trade calculator", href: "/trade-calculator" },
        ]}
      />
      <div className="container mx-auto max-w-6xl px-4 pb-14 pt-6">
        <h1 className="font-display text-3xl font-bold text-ink md:text-4xl">
          Blox fruit trade calculator
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-ink/75">
          Build both sides of a blox fruit trade and read Win / Fair / Lose before you click Accept.
          This blox fruit trade calculator uses the same WFL engine as the homepage—kept here for
          traders who search specifically for trade value checks while blox fruit trading.
        </p>

        <div className="mt-8">
          <BloxFruitCalculator title="Trade WFL calculator" />
        </div>

        <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl border border-ink/10">
          <Image
            src={BRAND_HERO}
            alt="Blox Fruits trade calculator comparing offer and request values"
            width={1600}
            height={900}
            sizes="(max-width: 768px) 100vw, 768px"
            className="h-auto w-full object-cover"
          />
        </div>

        <section className="mt-12 max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-ink">How traders use WFL mid-deal</h2>
          <p className="mt-3 text-ink/75 leading-relaxed">
            Paste the other player&apos;s offer into the “You receive” side while your items sit on
            “You offer.” If the result is Lose, ask for an add or walk away. If it is Win with weird
            demand, still verify the fruit is not crashing after a stock flood. Pair this tool with
            the{" "}
            <Link href="/blox-fruits-values" className="font-semibold text-teal-deep underline">
              values list
            </Link>{" "}
            and{" "}
            <Link href="/what-is-wfl" className="font-semibold text-teal-deep underline">
              WFL meaning guide
            </Link>
            .
          </p>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 font-display text-2xl font-bold text-ink">Trade calculator FAQs</h2>
          <FaqSection items={faqs} />
        </section>
      </div>
    </>
  );
}
