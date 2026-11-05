import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogPostSchema from "@/components/BlogPostSchema";
import CtaButton from "@/components/CtaButton";
import { BRAND_HERO, OG_IMAGE, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

const TITLE = "Anagram Examples That Actually Stick";
const DESCRIPTION =
  "Famous and fun anagram examples in English — single words, phrases, and name classics you can verify in the generator.";
const PATH = "/blog/anagram-examples";
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

const singles = [
  ["LISTEN", "SILENT"],
  ["CINEMA", "ICEMAN"],
  ["ELVIS", "LIVES"],
  ["ANGERED", "ENRAGED"],
  ["RESCUE", "SECURE"],
];

const phrases = [
  ["DORMITORY", "DIRTY ROOM"],
  ["THE EYES", "THEY SEE"],
  ["ASTRONOMER", "MOON STARER"],
  ["THE MORSE CODE", "HERE COME DOTS"],
  ["SLOT MACHINES", "CASH LOST IN ME"],
];

export default function AnagramExamplesPost() {
  return (
    <>
      <BlogPostSchema
        title={TITLE}
        description={DESCRIPTION}
        slug="anagram-examples"
        datePublished={DATE}
        dateModified={DATE}
        image={`${SITE_ORIGIN}${BRAND_HERO}`}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Anagram Examples" },
        ]}
      />
      <article className="container mx-auto max-w-3xl px-4 pb-14 pt-6">
        <p className="text-sm font-semibold text-ink/45">November 5, 2026</p>
        <h1 className="mt-2 font-display text-3xl font-bold text-ink md:text-5xl">{TITLE}</h1>
        <p className="mt-4 text-lg text-ink/65">
          “Anagram examples” is a top educational query beside the tool itself. Here are rearrangements worth remembering —
          each uses the same letters exactly once. Paste any left-hand side into the{" "}
          <Link href="/" className="font-semibold text-pink hover:underline">
            anagram generator
          </Link>{" "}
          to confirm.
        </p>

        <h2 className="mt-10 font-display text-2xl font-bold text-ink">Single-word classics</h2>
        <ul className="mt-4 space-y-2">
          {singles.map(([a, b]) => (
            <li key={a} className="rounded-xl border border-ink/10 bg-white px-4 py-3 text-ink/80">
              <strong className="text-ink">{a}</strong>
              <span className="mx-2 text-pink">→</span>
              <strong className="text-indigo-deep">{b}</strong>
            </li>
          ))}
        </ul>

        <h2 className="mt-10 font-display text-2xl font-bold text-ink">Phrase anagrams</h2>
        <p className="mt-3 text-ink/70">
          Multi-word results feel magical because meaning shifts while the letter budget stays fixed. That is also why
          the{" "}
          <Link href="/name-anagram-generator" className="font-semibold text-pink hover:underline">
            name anagram generator
          </Link>{" "}
          defaults to phrase mode.
        </p>
        <ul className="mt-4 space-y-2">
          {phrases.map(([a, b]) => (
            <li key={a} className="rounded-xl border border-ink/10 bg-white px-4 py-3 text-ink/80">
              <strong className="text-ink">{a}</strong>
              <span className="mx-2 text-pink">→</span>
              <strong className="text-indigo-deep">{b}</strong>
            </li>
          ))}
        </ul>

        <h2 className="mt-10 font-display text-2xl font-bold text-ink">Name examples people still quote</h2>
        <ul className="mt-4 space-y-2 text-ink/75">
          <li>
            <strong>CLINT EASTWOOD</strong> → <strong>OLD WEST ACTION</strong>
          </li>
          <li>
            <strong>BRITNEY SPEARS</strong> → <strong>PRESBYTERIANS</strong>
          </li>
          <li>
            <strong>TOM MARVOLO RIDDLE</strong> → <strong>I AM LORD VOLDEMORT</strong>
          </li>
        </ul>

        <h2 className="mt-10 font-display text-2xl font-bold text-ink">How to invent your own</h2>
        <p className="mt-3 text-ink/70">
          Start from a word you care about, generate exact matches, then loosen constraints for phrases. If you are
          learning the craft by hand, pair this list with{" "}
          <Link href="/blog/how-to-solve-anagrams" className="font-semibold text-pink hover:underline">
            how to solve anagrams
          </Link>
          .
        </p>

        <div className="mt-10">
          <CtaButton href="/#generator" size="sm">
            Generate your own
          </CtaButton>
        </div>
      </article>
    </>
  );
}
