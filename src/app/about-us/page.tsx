import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaButton from "@/components/CtaButton";
import { BRAND_LOGO, CONTACT_EMAIL, SITE_DOMAIN, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "About Us — Anagram Generator",
  description:
    "About Anagram Generator on anagramgenerator.app: a free browser tool that rearranges words and names into anagrams and phrases.",
  alternates: { canonical: `${SITE_ORIGIN}/about-us` },
  openGraph: {
    title: "About Us — Anagram Generator",
    description: `Independent anagram toolkit at ${SITE_DOMAIN}.`,
    url: `${SITE_ORIGIN}/about-us`,
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About", href: "/about-us" }]} />
      <div className="container mx-auto max-w-4xl px-4 pb-10 pt-8">
        <div className="mb-10 flex flex-col items-start gap-8 md:flex-row">
          <div className="relative h-40 w-40 flex-shrink-0 overflow-hidden rounded-2xl border border-ink/10 bg-brand-soft">
            <Image
              src={BRAND_LOGO}
              alt="Anagram Generator logo"
              fill
              sizes="160px"
              className="object-contain p-3"
              priority
            />
          </div>
          <div>
            <h1 className="mb-4 font-display text-3xl font-bold text-ink md:text-4xl">
              About {SITE_NAME}
            </h1>
            <p className="text-lg leading-relaxed text-ink/80">
              We build one clear thing: a free{" "}
              <strong className="text-ink">Anagram Generator</strong> that turns any word, name, or
              letter rack into new words and phrases. We operate at{" "}
              <strong className="text-ink">{SITE_DOMAIN}</strong>.
            </p>
          </div>
        </div>

        <div className="space-y-5 text-ink/80 leading-relaxed">
          <p>
            Most anagram sites are either decades-old forms or game unscramblers with thin explanations.
            We designed anagramgenerator.app around how people actually search: generate, solve, anagram a
            name, and learn what an anagram is — with a modern letter-tile interface.
          </p>
          <p>
            Generation runs in your browser after the dictionary loads. We are not affiliated with Scrabble,
            Words With Friends, or any dictionary publisher. Treat game-critical plays as guidance and confirm
            in your preferred lexicon when stakes are high.
          </p>
          <p>
            Explore the{" "}
            <Link href="/" className="text-pink underline">
              homepage generator
            </Link>
            , the{" "}
            <Link href="/anagram-solver" className="text-pink underline">
              anagram solver
            </Link>
            , and guides like{" "}
            <Link href="/what-is-an-anagram" className="text-pink underline">
              what is an anagram
            </Link>
            .
          </p>
          <p>
            Questions or corrections? Email{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-pink underline">
              {CONTACT_EMAIL}
            </a>{" "}
            or use the{" "}
            <Link href="/contact-us" className="text-pink underline">
              contact page
            </Link>
            .
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <CtaButton href="/#generator" ariaLabel="Open Anagram Generator" icon="arrow">
            MAKE ANAGRAMS
          </CtaButton>
        </div>
      </div>
    </>
  );
}
