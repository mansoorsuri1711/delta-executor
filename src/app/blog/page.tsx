import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { OG_IMAGE, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Anagram Blog — Tips, Examples & Wordplay Guides",
  description:
    "SERP-driven anagram guides: how to solve anagrams, famous examples, and anagram vs permutation — written for anagramgenerator.app.",
  alternates: { canonical: `${SITE_ORIGIN}/blog` },
  openGraph: {
    title: "Anagram Blog",
    description: "Practical anagram guides matched to real search demand.",
    url: `${SITE_ORIGIN}/blog`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Anagram Generator blog" }],
  },
};

const posts = [
  {
    href: "/blog/how-to-solve-anagrams",
    title: "How to Solve Anagrams Faster",
    excerpt:
      "Pattern tricks puzzle solvers use: letter frequency, hooks, vowel frames, and when to reach for a generator.",
    date: "November 5, 2026",
  },
  {
    href: "/blog/anagram-examples",
    title: "Anagram Examples That Actually Stick",
    excerpt:
      "Famous single-word and phrase anagrams you can verify — from LISTEN/SILENT to name classics.",
    date: "November 5, 2026",
  },
  {
    href: "/blog/anagram-vs-permutation",
    title: "Anagram vs Permutation: What’s the Difference?",
    excerpt:
      "A clear comparison for students, interview prep, and wordplay fans who mix the two terms.",
    date: "November 5, 2026",
  },
];

export default function BlogIndexPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }]} />
      <div className="container mx-auto max-w-3xl px-4 pb-14 pt-6">
        <h1 className="font-display text-3xl font-bold text-ink md:text-5xl">Anagram blog</h1>
        <p className="mt-4 text-ink/65">
          Only posts that match live search demand around anagram generators, solvers, and definitions — no filler topics.
        </p>
        <ul className="mt-10 space-y-5">
          {posts.map((post) => (
            <li key={post.href}>
              <Link
                href={post.href}
                className="block rounded-2xl border border-ink/10 bg-white p-5 transition hover:border-pink/35 hover:shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-ink/40">{post.date}</p>
                <h2 className="mt-1 font-display text-2xl font-bold text-ink">{post.title}</h2>
                <p className="mt-2 text-sm text-ink/65">{post.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
