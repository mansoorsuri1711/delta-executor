import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaButton from "@/components/CtaButton";
import FaqSection from "@/components/FaqSection";
import { OG_IMAGE, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "What Is an Anagram? Definition & Easy Examples",
  description:
    "Clear definition of an anagram with easy examples. Learn how letter rearrangements work, how they differ from permutations, and how to make them online.",
  alternates: { canonical: `${SITE_ORIGIN}/what-is-an-anagram` },
  openGraph: {
    title: "What Is an Anagram? Definition & Easy Examples",
    description: "Understand anagrams with simple examples and a free generator.",
    url: `${SITE_ORIGIN}/what-is-an-anagram`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "What is an anagram" }],
  },
};

const faqs = [
  {
    question: "What is an anagram in simple words?",
    answer:
      "An anagram is a word or phrase formed by rearranging the letters of another word or phrase, using all the original letters exactly once.",
  },
  {
    question: "Is “listen” an anagram of “silent”?",
    answer:
      "Yes. Both use L, I, S, T, E, N once each. That same-letter rule is what makes an anagram different from a random scramble that drops or adds letters.",
  },
  {
    question: "Are anagrams used in literature?",
    answer:
      "Frequently. Authors hide names, foreshadow twists, and invent aliases with anagrams. Puzzle designers and crossword setters rely on them too.",
  },
];

export default function WhatIsAnagramPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "What Is an Anagram", href: "/what-is-an-anagram" },
        ]}
      />
      <article className="container mx-auto max-w-3xl px-4 pb-14 pt-6">
        <h1 className="font-display text-3xl font-bold text-ink md:text-5xl">
          What is an anagram?
        </h1>
        <p className="mt-4 text-lg text-ink/65">
          An <strong className="text-ink">anagram</strong> is a word or phrase made by rearranging the letters of
          another word or phrase. Every letter must be used, and no extra letters may appear. That single rule is why
          LISTEN and SILENT feel like twins — and why an{" "}
          <Link href="/" className="font-semibold text-pink hover:underline">
            anagram generator
          </Link>{" "}
          can check your ideas in milliseconds.
        </p>

        <h2 className="mt-10 font-display text-2xl font-bold text-ink">Quick examples</h2>
        <ul className="mt-4 space-y-2 text-ink/75">
          <li>
            <strong>DEBIT CARD</strong> → <strong>BAD CREDIT</strong>
          </li>
          <li>
            <strong>THE EYES</strong> → <strong>THEY SEE</strong>
          </li>
          <li>
            <strong>ELEVEN PLUS TWO</strong> → <strong>TWELVE PLUS ONE</strong>
          </li>
        </ul>
        <p className="mt-4 text-ink/65">
          More classics live in our{" "}
          <Link href="/blog/anagram-examples" className="font-semibold text-pink hover:underline">
            anagram examples
          </Link>{" "}
          article.
        </p>

        <h2 className="mt-10 font-display text-2xl font-bold text-ink">Anagrams vs lookalikes</h2>
        <p className="mt-3 text-ink/70">
          A <em>permutation</em> is any reordering of letters, including nonsense strings. An anagram is a meaningful
          permutation — usually a real word or readable phrase. Palindromes read the same forwards and backwards; they
          are a different toy. For a deeper comparison, see{" "}
          <Link href="/blog/anagram-vs-permutation" className="font-semibold text-pink hover:underline">
            anagram vs permutation
          </Link>
          .
        </p>

        <h2 className="mt-10 font-display text-2xl font-bold text-ink">Why people still care</h2>
        <p className="mt-3 text-ink/70">
          Anagrams power classroom warm-ups, cryptic crossword indicators, branding brainstorms, and story reveals. If
          you want to practice solving without dumping every answer on screen, study{" "}
          <Link href="/blog/how-to-solve-anagrams" className="font-semibold text-pink hover:underline">
            how to solve anagrams
          </Link>
          . When you want speed, open the generator and let the dictionary do the heavy lifting.
        </p>

        <div className="mt-10">
          <CtaButton href="/#generator">Try the generator</CtaButton>
        </div>

        <FaqSection items={faqs} title="Definition FAQs" />
      </article>
    </>
  );
}
