import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_DOMAIN, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Disclaimer — Anagram Generator",
  description:
    "Disclaimer for anagramgenerator.app: free wordplay tool, dictionary guidance only, no affiliation with Scrabble or game publishers.",
  alternates: { canonical: `${SITE_ORIGIN}/disclaimer` },
};

export default function DisclaimerPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Disclaimer", href: "/disclaimer" },
        ]}
      />
      <div className="container mx-auto max-w-3xl px-4 pb-12 pt-8">
        <h1 className="mb-6 font-display text-3xl font-bold text-ink">Disclaimer</h1>
        <div className="space-y-4 leading-relaxed text-ink/80">
          <p>
            {SITE_NAME} on {SITE_DOMAIN} is an independent wordplay toolkit. It is not affiliated with,
            endorsed by, or sponsored by Scrabble, Words With Friends, Hasbro, Mattel, Zynga, or any
            dictionary publisher.
          </p>
          <p>
            Generated words and phrases come from a general English word list for education and
            entertainment. Lexicons used in competitive games can differ. Always confirm tournament
            or ranked plays in the official word source for your game.
          </p>
          <p>
            We do not guarantee that every result is suitable for usernames, trademarks, or publication.
            You are responsible for how you use copied phrases.
          </p>
          <p>
            Game names and trademarks belong to their respective owners. All rights remain with those
            owners.
          </p>
          <p>Last updated November 5, 2026.</p>
        </div>
      </div>
    </>
  );
}
