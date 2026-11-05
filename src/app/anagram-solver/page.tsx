import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import AnagramGenerator from "@/components/AnagramGenerator";
import FaqSection from "@/components/FaqSection";
import CtaButton from "@/components/CtaButton";
import { BRAND_FEATURE_3, OG_IMAGE, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Anagram Solver — Unscramble Letters into Words",
  description:
    "Free anagram solver and letter unscrambler. Enter scrambled letters to find every English word you can make — sorted by length for puzzles and word games.",
  alternates: { canonical: `${SITE_ORIGIN}/anagram-solver` },
  openGraph: {
    title: "Anagram Solver — Unscramble Letters into Words",
    description: "Unscramble letter racks into real words instantly.",
    url: `${SITE_ORIGIN}/anagram-solver`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Anagram solver on anagramgenerator.app" }],
  },
};

const faqs = [
  {
    question: "What is an anagram solver?",
    answer:
      "An anagram solver (or word unscrambler) takes a set of letters and lists the dictionary words that can be formed from them. It is the go-to tool when you have a scrambled rack and need playable options fast.",
  },
  {
    question: "How is the solver different from the anagram generator?",
    answer:
      "The generator highlights exact same-length rearrangements and creative phrases. The solver emphasizes every shorter word hiding in your letters — the pattern people search for with “unscramble” and “anagram solver.”",
  },
  {
    question: "Can I solve Scrabble or WWF racks here?",
    answer:
      "Yes for casual play. Results are ranked with common English words first. Official tournament lexicons can differ, so confirm critical scores in your game’s word list when it matters.",
  },
];

export default function AnagramSolverPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Anagram Solver", href: "/anagram-solver" },
        ]}
      />
      <div className="container mx-auto max-w-6xl px-4 pb-14 pt-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-3xl font-bold text-ink md:text-5xl">
            Anagram solver for scrambled letters
          </h1>
          <p className="mt-4 text-ink/65">
            Unscramble any letter rack into real English words. Ideal when you searched for an anagram solver,
            word unscrambler, or “unscramble letters into words.” Prefer creative exact matches? Use the{" "}
            <Link href="/" className="font-semibold text-pink hover:underline">
              anagram generator
            </Link>{" "}
            instead.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <AnagramGenerator
            mode="solver"
            defaultValue="AELPST"
            heading="Anagram solver"
            subheading="Unscramble letters → words"
          />
        </div>

        <div className="mt-14 grid items-center gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">
              How this letter unscrambler works
            </h2>
            <ol className="mt-5 space-y-4 text-ink/70">
              <li>
                <strong className="text-ink">1. Paste your rack.</strong> Enter the letters on your tile bar,
                crossword stub, or puzzle clue — order does not matter.
              </li>
              <li>
                <strong className="text-ink">2. Scan by length.</strong> Longer words appear first so high-value
                plays are easy to spot.
              </li>
              <li>
                <strong className="text-ink">3. Copy a candidate.</strong> Tap any word to copy it, then test it
                on the board.
              </li>
            </ol>
            <p className="mt-5 text-sm text-ink/60">
              Want pattern tips without a tool? Read{" "}
              <Link href="/blog/how-to-solve-anagrams" className="font-semibold text-pink hover:underline">
                how to solve anagrams
              </Link>
              .
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-ink/10 bg-brand-deep">
            <Image
              src={BRAND_FEATURE_3}
              alt="Anagram solver tool unscrambling letters into English words"
              width={1200}
              height={900}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <FaqSection items={faqs} title="Anagram solver FAQs" />
        </div>

        <div className="mt-10 flex justify-center">
          <CtaButton href="/#generator" size="sm">
            Switch to generator
          </CtaButton>
        </div>
      </div>
    </>
  );
}
