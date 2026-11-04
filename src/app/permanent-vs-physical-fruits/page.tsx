import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaButton from "@/components/CtaButton";
import FaqSection from "@/components/FaqSection";
import { OG_IMAGE, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Permanent vs Physical Fruits in Blox Fruits",
  description:
    "Learn the difference between permanent and physical Blox Fruits, how each trades, and how to toggle them correctly in a Blox Fruit Calculator.",
  alternates: { canonical: `${SITE_ORIGIN}/permanent-vs-physical-fruits` },
  openGraph: {
    title: "Permanent vs Physical Fruits in Blox Fruits",
    description: "Physical inventory fruits vs permanent unlocks — and why WFL depends on the mode.",
    url: `${SITE_ORIGIN}/permanent-vs-physical-fruits`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Permanent vs physical Blox Fruits" }],
  },
};

const faqs = [
  {
    question: "What is a physical fruit?",
    answer:
      "A physical fruit is the item in your inventory. You can store it, eat it, or trade it away. Once eaten (without a permanent), you lose that physical copy.",
  },
  {
    question: "What is a permanent fruit?",
    answer:
      "A permanent fruit unlocks that Devil Fruit on your account forever. You can switch to it without needing a physical copy each time. Permanents usually trade at higher values.",
  },
  {
    question: "Can I trade permanent fruits?",
    answer:
      "Permanent unlocks can be traded between players under the game’s trade rules. Always confirm the trade window shows Permanent—not a physical fruit—before you accept.",
  },
];

export default function PermanentVsPhysicalPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Permanent vs physical", href: "/permanent-vs-physical-fruits" },
        ]}
      />
      <div className="container mx-auto max-w-4xl px-4 pb-14 pt-6">
        <h1 className="font-display text-3xl font-bold text-ink md:text-4xl">
          Permanent vs physical fruits
        </h1>
        <p className="mt-3 text-lg text-ink/75">
          Mixing these two categories is the fastest way to misread a trade. Here is the clear
          difference—and how the{" "}
          <Link href="/" className="font-semibold text-teal-deep underline">
            Blox Fruit Calculator
          </Link>{" "}
          handles each mode.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm">
            <h2 className="font-display text-xl font-bold text-ink">Physical fruits</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-ink/75">
              <li>Sit in your inventory as tradable items</li>
              <li>Can be eaten or given away</li>
              <li>Match the “Normal” / physical values on most lists</li>
              <li>Often used as adds in multi-fruit deals</li>
            </ul>
          </article>
          <article className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm">
            <h2 className="font-display text-xl font-bold text-ink">Permanent fruits</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-ink/75">
              <li>Unlock the fruit permanently on that account</li>
              <li>Usually cost Robux from the shop when bought new</li>
              <li>Trade at different (often higher) values</li>
              <li>Must be labeled Perm in any honest WFL check</li>
            </ul>
          </article>
        </div>

        <section className="mt-12 space-y-4">
          <h2 className="font-display text-2xl font-bold text-ink">Why the calculator has a Phys / Perm toggle</h2>
          <p className="leading-relaxed text-ink/75">
            Value lists publish separate numbers for physical and permanent versions. If you leave
            Kitsune on Physical while the other player offers Permanent Kitsune, your WFL result is
            fiction. On every slot, tap Phys or Perm until it matches the Roblox trade window.
          </p>
          <h2 className="font-display text-2xl font-bold text-ink">Buying permanent with Robux</h2>
          <p className="leading-relaxed text-ink/75">
            Shop prices are not the same as trade values. A permanent can be “worth it” for your
            playstyle even when the trade value looks steep—or a poor buy if you only wanted a
            temporary grind fruit. Use the{" "}
            <Link href="/blox-fruits-values" className="font-semibold text-teal-deep underline">
              values list
            </Link>{" "}
            permanent mode as a market reference, not a Robux receipt.
          </p>
          <h2 className="font-display text-2xl font-bold text-ink">Safe trading tip</h2>
          <p className="leading-relaxed text-ink/75">
            Scammers sometimes rush you while switching physical and permanent mid-negotiation.
            Re-check the window, re-run the{" "}
            <Link href="/trade-calculator" className="font-semibold text-teal-deep underline">
              trade calculator
            </Link>
            , and never trust screenshots alone. See{" "}
            <Link
              href="/blog/blox-fruits-trading-scams"
              className="font-semibold text-teal-deep underline"
            >
              common trading scams
            </Link>
            .
          </p>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 font-display text-2xl font-bold text-ink">FAQs</h2>
          <FaqSection items={faqs} />
        </section>

        <div className="mt-10 flex justify-center">
          <CtaButton href="/#calculator" ariaLabel="Compare physical and permanent trades" icon="arrow">
            COMPARE IN CALCULATOR
          </CtaButton>
        </div>
      </div>
    </>
  );
}
