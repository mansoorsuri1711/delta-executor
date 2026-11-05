import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogPostSchema from "@/components/BlogPostSchema";
import CtaButton from "@/components/CtaButton";
import { BRAND_FEATURE_2, OG_IMAGE, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

const TITLE = "Anagram vs Permutation: What’s the Difference?";
const DESCRIPTION =
  "Anagram vs permutation explained simply — with examples for wordplay fans, students, and coding interview prep.";
const PATH = "/blog/anagram-vs-permutation";
const DATE = "2026-11-05";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_ORIGIN}${PATH}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_ORIGIN}${PATH}`,
    siteName: SITE_NAME,
    type: "article",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: TITLE }],
  },
};

export default function AnagramVsPermutationPost() {
  return (
    <>
      <BlogPostSchema
        title={TITLE}
        description={DESCRIPTION}
        slug="anagram-vs-permutation"
        datePublished={DATE}
        dateModified={DATE}
        image={`${SITE_ORIGIN}${BRAND_FEATURE_2}`}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Anagram vs Permutation" },
        ]}
      />
      <article className="container mx-auto max-w-3xl px-4 pb-14 pt-6">
        <p className="text-sm font-semibold text-ink/45">November 5, 2026</p>
        <h1 className="mt-2 font-display text-3xl font-bold text-ink md:text-5xl">{TITLE}</h1>
        <p className="mt-4 text-lg text-ink/65">
          Searchers compare “anagram vs permutation” in math class, interview prep, and wordplay forums. The concepts
          overlap, but they are not twins. Here is the clean distinction — and how our{" "}
          <Link href="/" className="font-semibold text-pink hover:underline">
            anagram generator
          </Link>{" "}
          uses it.
        </p>

        <h2 className="mt-10 font-display text-2xl font-bold text-ink">Permutation in one sentence</h2>
        <p className="mt-3 text-ink/70">
          A <strong>permutation</strong> is any rearrangement of a sequence. For the letters in CAT, the permutations
          include CAT, CTA, ACT, ATC, TCA, and TAC — whether or not they form English words.
        </p>

        <h2 className="mt-8 font-display text-2xl font-bold text-ink">Anagram in one sentence</h2>
        <p className="mt-3 text-ink/70">
          An <strong>anagram</strong> is a permutation that produces another meaningful word or phrase using the same
          letters. ACT is an anagram of CAT; TCA is a permutation but not a useful English anagram.
        </p>

        <h2 className="mt-8 font-display text-2xl font-bold text-ink">Side-by-side</h2>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-ink/10">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-brand-deep">
              <tr>
                <th className="px-4 py-3">Idea</th>
                <th className="px-4 py-3">Permutation</th>
                <th className="px-4 py-3">Anagram</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink/8 bg-white text-ink/75">
              <tr>
                <td className="px-4 py-3">Definition</td>
                <td className="px-4 py-3">Any reordering</td>
                <td className="px-4 py-3">Meaningful reordering</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Must be a word?</td>
                <td className="px-4 py-3">No</td>
                <td className="px-4 py-3">Usually yes (or a phrase)</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Used in</td>
                <td className="px-4 py-3">Math, CS, combinatorics</td>
                <td className="px-4 py-3">Puzzles, writing, branding</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Example from LISTEN</td>
                <td className="px-4 py-3">LNEIST (nonsense OK)</td>
                <td className="px-4 py-3">SILENT, ENLIST, TINSEL</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="mt-8 font-display text-2xl font-bold text-ink">Interview angle</h2>
        <p className="mt-3 text-ink/70">
          Coding problems titled “valid anagram” usually mean: same character frequencies (a letter-count permutation
          that matches). That is exactly the signature test dictionary anagram tools use before checking word validity.
        </p>

        <h2 className="mt-8 font-display text-2xl font-bold text-ink">Wordplay angle</h2>
        <p className="mt-3 text-ink/70">
          Generators filter permutations through a dictionary (and sometimes a phrase search). That is why{" "}
          <Link href="/what-is-an-anagram" className="font-semibold text-pink hover:underline">
            what is an anagram
          </Link>{" "}
          focuses on meaning, while permutation counting focuses on combinations.
        </p>

        <div className="mt-10">
          <CtaButton href="/#generator" size="sm">
            See real anagrams
          </CtaButton>
        </div>
      </article>
    </>
  );
}
