import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaButton from "@/components/CtaButton";
import { OG_IMAGE, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "How to Use Anagram Generator",
  description:
    "Step-by-step guide to using the free Anagram Generator: exact matches, solver-style sub-words, multi-word name phrases, shuffle, and copy.",
  alternates: { canonical: `${SITE_ORIGIN}/how-to-use-anagram-generator` },
  openGraph: {
    title: "How to Use Anagram Generator",
    description: "Learn how to make word and name anagrams in under a minute.",
    url: `${SITE_ORIGIN}/how-to-use-anagram-generator`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "How to use Anagram Generator" }],
  },
};

const steps = [
  {
    title: "Open the generator",
    body: "Go to the homepage tool (or jump with Make anagrams). The letter tiles update as you type so you can see the pool you are rearranging.",
  },
  {
    title: "Enter a word, name, or raw letters",
    body: "Anything A–Z works. Spaces and punctuation are ignored automatically — useful for full names and quoted phrases.",
  },
  {
    title: "Pick exact-only or expanded results",
    body: "Exact-only shows true anagrams with the same letter count. Turn it off when you want every shorter word available from those letters (solver behavior).",
  },
  {
    title: "Enable multi-word phrases for names",
    body: "Names shine in phrase mode. Keep the box checked on the name page, or toggle it on the homepage when your input is longer than a single word.",
  },
  {
    title: "Shuffle for a fresh look",
    body: "Shuffle does not change the letter inventory — it only reorders tiles. Use it when you want a different visual prompt while results stay accurate.",
  },
  {
    title: "Copy the winners",
    body: "Click any word or phrase to copy it to your clipboard. Paste into a doc, username field, or puzzle draft.",
  },
];

export default function HowToUsePage() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to use Anagram Generator",
    description: "Create word and name anagrams with the free online tool.",
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
          { label: "How to Use", href: "/how-to-use-anagram-generator" },
        ]}
      />
      <article className="container mx-auto max-w-3xl px-4 pb-14 pt-6">
        <h1 className="font-display text-3xl font-bold text-ink md:text-5xl">
          How to use Anagram Generator
        </h1>
        <p className="mt-4 text-lg text-ink/65">
          This walkthrough covers the same workflow whether you arrived from “how to make anagrams,” “how to use an
          anagram generator,” or a shared link to{" "}
          <Link href="/" className="font-semibold text-pink hover:underline">
            anagramgenerator.app
          </Link>
          .
        </p>

        <ol className="mt-10 space-y-6">
          {steps.map((step, index) => (
            <li key={step.title} className="rounded-2xl border border-ink/10 bg-white p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-pink">Step {index + 1}</p>
              <h2 className="mt-1 font-display text-xl font-bold text-ink">{step.title}</h2>
              <p className="mt-2 text-ink/70">{step.body}</p>
            </li>
          ))}
        </ol>

        <h2 className="mt-12 font-display text-2xl font-bold text-ink">Which page should I use?</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-ink/70">
          <li>
            <Link href="/" className="font-semibold text-pink hover:underline">Generator</Link> — creative exact anagrams and optional phrases
          </li>
          <li>
            <Link href="/anagram-solver" className="font-semibold text-pink hover:underline">Solver</Link> — unscramble racks into many words
          </li>
          <li>
            <Link href="/name-anagram-generator" className="font-semibold text-pink hover:underline">Name anagrams</Link> — full-name phrase hunting
          </li>
        </ul>

        <div className="mt-10">
          <CtaButton href="/#generator">Open the generator</CtaButton>
        </div>
      </article>
    </>
  );
}
