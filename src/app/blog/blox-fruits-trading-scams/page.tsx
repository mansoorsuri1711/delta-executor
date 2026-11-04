import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogPostSchema from "@/components/BlogPostSchema";
import CtaButton from "@/components/CtaButton";
import {
  BRAND_FEATURE_2,
  OG_IMAGE,
  SITE_NAME,
  SITE_ORIGIN,
} from "@/lib/siteConfig";

const title = "Blox Fruits Trading Scams to Avoid Before You Accept";
const description =
  "Common Blox Fruits trading scams: fake middlemen, phishing links, double-trade tricks, and rushed confirms—plus habits that keep your fruits safe.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_ORIGIN}/blog/blox-fruits-trading-scams` },
  openGraph: {
    title,
    description,
    url: `${SITE_ORIGIN}/blog/blox-fruits-trading-scams`,
    siteName: SITE_NAME,
    type: "article",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: title }],
  },
};

export default function ScamsPost() {
  return (
    <>
      <BlogPostSchema
        title={title}
        description={description}
        slug="blox-fruits-trading-scams"
        datePublished="2026-11-05"
        image={`${SITE_ORIGIN}${BRAND_FEATURE_2}`}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Trading scams", href: "/blog/blox-fruits-trading-scams" },
        ]}
      />
      <article className="container mx-auto max-w-3xl px-4 pb-14 pt-6">
        <h1 className="font-display text-3xl font-bold text-ink md:text-4xl">{title}</h1>
        <p className="mt-3 text-ink/55">November 5, 2026 · 8 min read</p>
        <div className="mt-6 overflow-hidden rounded-2xl border border-ink/10">
          <Image
            src={BRAND_FEATURE_2}
            alt="Player carefully reviewing a Blox Fruits trade before accepting"
            width={1600}
            height={900}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            className="h-auto w-full object-cover"
          />
        </div>

        <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/80">
          <p>
            A perfect WFL score cannot save you from a scam. Scammers win by rushing you, confusing
            the window, or pulling you off Roblox entirely. Use the calculator to judge value—then
            use this checklist to judge people.
          </p>

          <h2 className="font-display text-2xl font-bold text-ink">1. Fake middleman / “trusted MM”</h2>
          <p>
            Someone offers to hold both sides “so it is safe.” Real safety is the official trade
            window. Do not hand fruits to a third account that appeared in chat five minutes ago.
          </p>

          <h2 className="font-display text-2xl font-bold text-ink">2. Phishing and “value site” clones</h2>
          <p>
            Links that ask for your Roblox password, email code, or “verify ownership” are theft.
            Bookmark tools you trust—like{" "}
            <Link href="/" className="font-semibold text-teal-deep underline">
              bloxfruitcalculator.net
            </Link>
            —and type the address yourself when something feels off.
          </p>

          <h2 className="font-display text-2xl font-bold text-ink">3. Item switch mid-confirm</h2>
          <p>
            Scammers change a permanent to a physical (or a high fruit to a lookalike) while you are
            distracted. Read every line in the trade window again after any edit. Re-run the{" "}
            <Link href="/trade-calculator" className="font-semibold text-teal-deep underline">
              trade calculator
            </Link>{" "}
            if the items changed.
          </p>

          <h2 className="font-display text-2xl font-bold text-ink">4. Cross-trade pressure</h2>
          <p>
            Offers that mix Robux, other games, or real money outside Roblox rules are a red flag.
            Even when the WFL looks dreamy, the recovery path if something fails is usually zero.
          </p>

          <h2 className="font-display text-2xl font-bold text-ink">5. “I’ll add after” promises</h2>
          <p>
            Anything not in the current trade window does not exist. If the calculator says you need
            an add, that add must appear before you click Accept—not in a future pinky promise.
          </p>

          <h2 className="font-display text-2xl font-bold text-ink">Safe habits that actually work</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Enable Roblox 2-step verification</li>
            <li>Never share passwords or backup codes</li>
            <li>Screenshot the agreed offer, then match the live window</li>
            <li>Walk away from countdown pressure and insults</li>
            <li>Confirm Phys vs Perm every time—see{" "}
              <Link
                href="/permanent-vs-physical-fruits"
                className="font-semibold text-teal-deep underline"
              >
                permanent vs physical
              </Link>
            </li>
          </ul>

          <p>
            Value literacy and scam literacy belong together. Pair this article with the{" "}
            <Link
              href="/blog/blox-fruits-trading-guide"
              className="font-semibold text-teal-deep underline"
            >
              trading guide
            </Link>{" "}
            and a quick WFL check before every serious deal.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <CtaButton href="/#calculator" ariaLabel="Check your trade safely" icon="arrow">
            CHECK YOUR TRADE
          </CtaButton>
        </div>
      </article>
    </>
  );
}
