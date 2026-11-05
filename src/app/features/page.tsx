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
  title: "Anagram Generator Features",
  description:
    "Explore Anagram Generator features: exact anagrams, letter unscrambler, name phrases, one-click copy, browser-only search, and free access.",
  alternates: { canonical: `${SITE_ORIGIN}/features` },
  openGraph: {
    title: "Anagram Generator Features",
    description: "Everything included in the free anagram toolkit.",
    url: `${SITE_ORIGIN}/features`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Anagram Generator features" }],
  },
};

const features = [
  {
    title: "Exact anagram engine",
    body: "Find same-letter rearrangements first so creative wordplay stays honest to the definition of an anagram.",
  },
  {
    title: "Solver / unscramble mode",
    body: "List shorter words from any rack when you need playable options for puzzles and casual word games.",
  },
  {
    title: "Multi-word name phrases",
    body: "Generate readable phrases from full names — the feature most “anagram of my name” searchers actually want.",
  },
  {
    title: "Letter-tile interface",
    body: "See your inventory as tiles and results as copyable words, matching how people visualize rearrangements.",
  },
  {
    title: "Works in the browser",
    body: "Dictionary loads once; generation runs locally for snappy results without shipping your text to a form endpoint.",
  },
  {
    title: "Guides that match search demand",
    body: "Definition, how-to, solve tips, examples, and permutation comparison — linked from the tool, not bolted on as fluff.",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Features", href: "/features" }]} />
      <div className="container mx-auto max-w-6xl px-4 pb-14 pt-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-3xl font-bold text-ink md:text-5xl">
            Features of Anagram Generator
          </h1>
          <p className="mt-4 text-ink/65">
            Everything you need to rearrange letters into words and phrases — without the dated UI or ad walls that
            dominate the SERP.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <article key={f.title} className="rounded-2xl border border-ink/10 bg-white p-5">
              <h2 className="font-display text-xl font-bold text-ink">{f.title}</h2>
              <p className="mt-2 text-sm text-ink/65">{f.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            { src: BRAND_FEATURE_2, alt: "Online anagram generator results UI" },
            { src: BRAND_FEATURE_3, alt: "Anagram tool letter unscramble view" },
            { src: BRAND_FEATURE_4, alt: "Anagram Generator app-style feature art" },
          ].map((img) => (
            <div key={img.src} className="overflow-hidden rounded-2xl border border-ink/10 bg-brand-deep">
              <Image
                src={img.src}
                alt={img.alt}
                width={1200}
                height={900}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="h-auto w-full object-contain"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <CtaButton href="/#generator">Try it free</CtaButton>
          <Link href="/how-to-use-anagram-generator" className="font-semibold text-pink hover:underline">
            Read the how-to guide →
          </Link>
        </div>
      </div>
    </>
  );
}
