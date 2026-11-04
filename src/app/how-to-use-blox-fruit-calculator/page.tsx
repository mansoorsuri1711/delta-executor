import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaButton from "@/components/CtaButton";
import {
  BRAND_FEATURE_3,
  OG_IMAGE,
  SITE_NAME,
  SITE_ORIGIN,
} from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "How to Use the Blox Fruit Calculator",
  description:
    "Step-by-step guide to the Blox Fruit Calculator: add offers, toggle physical or permanent, read value and demand, and understand Win / Fair / Lose.",
  alternates: { canonical: `${SITE_ORIGIN}/how-to-use-blox-fruit-calculator` },
  openGraph: {
    title: "How to Use the Blox Fruit Calculator",
    description: "Learn WFL checks in a few clear steps.",
    url: `${SITE_ORIGIN}/how-to-use-blox-fruit-calculator`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "How to use Blox Fruit Calculator" }],
  },
};

const steps = [
  {
    title: "Open the calculator",
    body: "Go to the homepage or the trade calculator page. The tool runs in your browser—no install and no login.",
  },
  {
    title: "Choose which side you are editing",
    body: "Tap Your offer for fruits you give. Tap Their offer for fruits you want. The search bar always adds to the active side.",
  },
  {
    title: "Search and add fruits",
    body: "Type a name like Kitsune or Buddha. Use quick-add chips for high-demand fruits. You can place up to four items on each side.",
  },
  {
    title: "Toggle physical or permanent",
    body: "Each slot shows Phys or Perm. Match the real trade window. Mixing modes is the most common beginner mistake.",
  },
  {
    title: "Read the three totals",
    body: "Value drives WFL. Demand shows average liquidity on that side. Beli reminds you of dealer price versus trade worth.",
  },
  {
    title: "Act on Win, Fair, or Lose",
    body: "Win means you gain value. Fair is close. Lose means you overpay on numbers. Still check demand and recent chat offers before accepting.",
  },
];

export default function HowToUsePage() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to use the Blox Fruit Calculator",
    description:
      "Add both sides of a Blox Fruits trade and read Win, Fair, or Lose from value and demand.",
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.body,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "How to use", href: "/how-to-use-blox-fruit-calculator" },
        ]}
      />
      <div className="container mx-auto max-w-4xl px-4 pb-14 pt-6">
        <h1 className="font-display text-3xl font-bold text-ink md:text-4xl">
          How to use the Blox Fruit Calculator
        </h1>
        <p className="mt-3 text-lg text-ink/75">
          This walkthrough covers the exact flow on{" "}
          <Link href="/" className="font-semibold text-teal-deep underline">
            bloxfruitcalculator.net
          </Link>
          —from empty sides to a clear WFL call.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-ink/10">
          <Image
            src={BRAND_FEATURE_3}
            alt="Blox Fruit Calculator tool with offer totals and WFL result"
            width={1200}
            height={675}
            sizes="(max-width: 896px) 100vw, 896px"
            className="h-auto w-full object-cover"
            priority
          />
        </div>

        <ol className="mt-10 space-y-6">
          {steps.map((step, index) => (
            <li key={step.title} className="rounded-2xl border border-ink/10 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-deep">
                Step {index + 1}
              </p>
              <h2 className="mt-1 font-display text-xl font-bold text-ink">{step.title}</h2>
              <p className="mt-2 text-ink/75">{step.body}</p>
            </li>
          ))}
        </ol>

        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-ink">Example: Buddha for Magma adds</h2>
          <p className="mt-3 leading-relaxed text-ink/75">
            Put Buddha on Their offer and Magma plus smaller fruits on Your offer. If the calculator
            says Lose, you need better adds or a different main fruit. If it says Win but Buddha
            demand is sky-high, the other player may still want extras—demand explains why.
          </p>
          <p className="mt-3 leading-relaxed text-ink/75">
            For more market context, read{" "}
            <Link href="/what-is-wfl" className="font-semibold text-teal-deep underline">
              what WFL means
            </Link>{" "}
            and the{" "}
            <Link
              href="/blog/blox-fruits-trading-guide"
              className="font-semibold text-teal-deep underline"
            >
              trading guide
            </Link>
            .
          </p>
        </section>

        <div className="mt-10 flex justify-center">
          <CtaButton href="/#calculator" ariaLabel="Try the Blox Fruit Calculator" icon="arrow">
            TRY THE CALCULATOR
          </CtaButton>
        </div>
      </div>
    </>
  );
}
