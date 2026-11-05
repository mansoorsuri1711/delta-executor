import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import AnagramGenerator from "@/components/AnagramGenerator";
import FaqSection from "@/components/FaqSection";
import { BRAND_FEATURE_2, OG_IMAGE, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Name Anagram Generator — Anagram Your Name Free",
  description:
    "Free name anagram generator. Turn your full name into clever multi-word anagrams for usernames, aliases, and wordplay — instantly in your browser.",
  alternates: { canonical: `${SITE_ORIGIN}/name-anagram-generator` },
  openGraph: {
    title: "Name Anagram Generator — Anagram Your Name Free",
    description: "Create multi-word anagrams from any name.",
    url: `${SITE_ORIGIN}/name-anagram-generator`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Name anagram generator" }],
  },
};

const faqs = [
  {
    question: "How do I anagram my name?",
    answer:
      "Type your first and last name together, keep multi-word phrases enabled, and generate. Add a middle name or initial if you want more letter combinations.",
  },
  {
    question: "Why don’t I get a single-word anagram?",
    answer:
      "Most personal names do not rearrange into one dictionary word. Multi-word phrases are the realistic — and usually funnier or more memorable — result.",
  },
  {
    question: "Are famous name anagrams real?",
    answer:
      "Yes. Classic examples include Clint Eastwood → Old West Action and the literary reveal hidden in Tom Marvolo Riddle. Try them above, then invent your own.",
  },
];

export default function NameAnagramPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Name Anagram Generator", href: "/name-anagram-generator" },
        ]}
      />
      <div className="container mx-auto max-w-6xl px-4 pb-14 pt-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-3xl font-bold text-ink md:text-5xl">
            Name anagram generator
          </h1>
          <p className="mt-4 text-ink/65">
            Anagram your name into usernames, pen names, gamertags, and party-trick phrases. This page is tuned for the
            “name anagram generator” and “anagram of my name” searches that thin tool-only sites under-serve.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <AnagramGenerator
            mode="names"
            defaultValue="CLINT EASTWOOD"
            heading="Name anagram generator"
            subheading="Full name → multi-word phrases"
          />
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-3xl border border-ink/10 bg-brand-deep">
            <Image
              src={BRAND_FEATURE_2}
              alt="Name anagram generator showing multi-word phrase results"
              width={1200}
              height={900}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-auto w-full object-contain"
            />
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">
              Make better name anagrams
            </h2>
            <ul className="mt-5 space-y-3 text-ink/70">
              <li>Use legal first + last name first; add a middle name only if results feel thin.</li>
              <li>Prefer phrases with fewer, longer words — they read like intentional aliases.</li>
              <li>
                Cross-check meaning before you publish a username; funny is good, awkward is forever.
              </li>
              <li>
                Explore more inspiration in{" "}
                <Link href="/blog/anagram-examples" className="font-semibold text-pink hover:underline">
                  anagram examples
                </Link>
                .
              </li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <FaqSection items={faqs} title="Name anagram FAQs" />
        </div>
      </div>
    </>
  );
}
