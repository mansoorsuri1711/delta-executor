import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaButton from "@/components/CtaButton";
import {
  BRAND_FEATURE_2,
  BRAND_FEATURE_3,
  BRAND_FEATURE_4,
  OG_IMAGE,
  SITE_NAME,
  SITE_ORIGIN,
} from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Blox Fruit Calculator Features",
  description:
    "Explore Blox Fruit Calculator features: WFL trade checker, values list, physical and permanent modes, demand scores, and free browser access.",
  alternates: { canonical: `${SITE_ORIGIN}/features` },
  openGraph: {
    title: "Blox Fruit Calculator Features",
    description: "Everything included in the free trade value toolkit.",
    url: `${SITE_ORIGIN}/features`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Blox Fruit Calculator features" }],
  },
};

const features = [
  {
    title: "Win / Fair / Lose engine",
    body: "Totals both sides and labels the deal so you can negotiate faster than scrolling Discord screenshots.",
  },
  {
    title: "Value + demand + Beli",
    body: "Three signals on every side: trade value for WFL, demand for liquidity, Beli for dealer price context.",
  },
  {
    title: "Physical and permanent modes",
    body: "Per-item Phys/Perm toggles keep multi-fruit offers honest when unlocks and inventory items mix.",
  },
  {
    title: "Searchable values list",
    body: "Filter by rarity, sort by value, and research a fruit before you open the calculator.",
  },
  {
    title: "Mobile-ready layout",
    body: "Build trades on your phone between servers—no app install required.",
  },
  {
    title: "Guides that match real searches",
    body: "WFL meaning, permanent vs physical, trading tips, demand math, and scam prevention—linked from the tool.",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Features", href: "/features" },
        ]}
      />
      <div className="container mx-auto max-w-6xl px-4 pb-14 pt-6">
        <h1 className="font-display text-3xl font-bold text-ink md:text-4xl">
          Blox Fruit Calculator features
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-ink/75">
          Built for traders who need a clear WFL call without leaving the browser. Every feature
          below supports the same job: fewer bad trades.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {features.map((f) => (
            <article key={f.title} className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm">
              <h2 className="font-display text-xl font-bold text-ink">{f.title}</h2>
              <p className="mt-2 text-ink/70">{f.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            { src: BRAND_FEATURE_2, alt: "Online Blox Fruit Calculator on desktop" },
            { src: BRAND_FEATURE_3, alt: "Calculator tool showing value and demand" },
            { src: BRAND_FEATURE_4, alt: "Mobile-friendly Blox Fruit Calculator view" },
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

        <p className="mt-8 text-ink/70">
          Start on the{" "}
          <Link href="/" className="font-semibold text-teal-deep underline">
            homepage calculator
          </Link>
          , browse the{" "}
          <Link href="/blox-fruits-values" className="font-semibold text-teal-deep underline">
            values list
          </Link>
          , or jump to the{" "}
          <Link href="/trade-calculator" className="font-semibold text-teal-deep underline">
            dedicated trade calculator
          </Link>
          .
        </p>

        <div className="mt-8 flex justify-center">
          <CtaButton href="/#calculator" ariaLabel="Open calculator" icon="arrow">
            OPEN CALCULATOR
          </CtaButton>
        </div>
      </div>
    </>
  );
}
