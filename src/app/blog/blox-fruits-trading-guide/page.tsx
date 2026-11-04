import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogPostSchema from "@/components/BlogPostSchema";
import CtaButton from "@/components/CtaButton";
import {
  BRAND_HERO,
  OG_IMAGE,
  SITE_NAME,
  SITE_ORIGIN,
} from "@/lib/siteConfig";

const title = "Blox Fruits Trading Guide: Better Deals With a Value Calculator";
const description =
  "Practical Blox Fruits trading guide: prepare offers, read WFL, use demand, manage adds, and avoid emotional overpays with a value calculator.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_ORIGIN}/blog/blox-fruits-trading-guide` },
  openGraph: {
    title,
    description,
    url: `${SITE_ORIGIN}/blog/blox-fruits-trading-guide`,
    siteName: SITE_NAME,
    type: "article",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: title }],
  },
};

export default function TradingGuidePost() {
  return (
    <>
      <BlogPostSchema
        title={title}
        description={description}
        slug="blox-fruits-trading-guide"
        datePublished="2026-11-05"
        image={`${SITE_ORIGIN}${BRAND_HERO}`}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Trading guide", href: "/blog/blox-fruits-trading-guide" },
        ]}
      />
      <article className="container mx-auto max-w-3xl px-4 pb-14 pt-6">
        <h1 className="font-display text-3xl font-bold text-ink md:text-4xl">{title}</h1>
        <p className="mt-3 text-ink/55">November 5, 2026 · 11 min read</p>
        <div className="mt-6 overflow-hidden rounded-2xl border border-ink/10">
          <Image
            src={BRAND_HERO}
            alt="Trader using a Blox Fruit Calculator to plan a fair fruit trade"
            width={1600}
            height={900}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            className="h-auto w-full object-cover"
          />
        </div>

        <div className="prose-like mt-8 space-y-5 text-lg leading-relaxed text-ink/80">
          <p>
            Blox Fruits trading rewards players who prepare before the trade window opens. The
            players who lose value usually accept the first “almost fair” offer under pressure. This
            guide walks through a repeatable process you can run with the{" "}
            <Link href="/" className="font-semibold text-teal-deep underline">
              Blox Fruit Calculator
            </Link>{" "}
            every time.
          </p>

          <h2 className="font-display text-2xl font-bold text-ink">1. Know what you are holding</h2>
          <p>
            List every physical fruit and permanent unlock you are willing to move. Check each one
            on the{" "}
            <Link href="/blox-fruits-values" className="font-semibold text-teal-deep underline">
              values list
            </Link>{" "}
            for trade value, demand, and trend. High demand fruits are your leverage. Low demand
            fruits are better as carefully priced adds—not as the headline of a desperate offer.
          </p>

          <h2 className="font-display text-2xl font-bold text-ink">2. Decide your target before chatting</h2>
          <p>
            Pick one primary goal: a specific mythical, a grinding fruit like Buddha, or upgrading
            into a permanent. Vague goals invite random overpays. When someone pings you, you already
            know what “good” looks like.
          </p>

          <h2 className="font-display text-2xl font-bold text-ink">3. Build the offer in the calculator first</h2>
          <p>
            Open the{" "}
            <Link href="/trade-calculator" className="font-semibold text-teal-deep underline">
              trade calculator
            </Link>
            . Place your items on Your offer and the target on You receive. Toggle Phys/Perm so the
            math matches reality. If the result is Lose, adjust adds before you message anyone—not
            after you feel locked into the conversation.
          </p>

          <h2 className="font-display text-2xl font-bold text-ink">4. Read demand beside WFL</h2>
          <p>
            A Fair result with a demand gap often still needs a small add. Buddha at high demand can
            pull extras even when value looks even. Learn the pattern in{" "}
            <Link
              href="/blog/how-demand-and-value-work"
              className="font-semibold text-teal-deep underline"
            >
              how demand and value work
            </Link>{" "}
            and in the{" "}
            <Link href="/what-is-wfl" className="font-semibold text-teal-deep underline">
              WFL explainer
            </Link>
            .
          </p>

          <h2 className="font-display text-2xl font-bold text-ink">5. Negotiate with numbers, not ego</h2>
          <p>
            Share a clear structure: “My side totals X value at Y demand; your side is Z.” Calm
            math ends arguments faster than insulting the other player’s list. If they refuse every
            fair structure, walk. Another server will post tomorrow.
          </p>

          <h2 className="font-display text-2xl font-bold text-ink">6. Protect the final click</h2>
          <p>
            Re-check the Roblox trade window item by item. Confirm permanent vs physical labels.
            Never leave the official window for “middleman” DMs or password “verification.” Keep{" "}
            <Link
              href="/blog/blox-fruits-trading-scams"
              className="font-semibold text-teal-deep underline"
            >
              scam patterns
            </Link>{" "}
            in mind whenever a deal feels rushed.
          </p>

          <h2 className="font-display text-2xl font-bold text-ink">7. Review after the trade</h2>
          <p>
            Note which fruits were easy to move and which sat cold. Update your personal rules—maybe
            you stop offering unstable mythicals without a Win buffer. Trading skill compounds when
            you treat each deal as data.
          </p>

          <h2 className="font-display text-2xl font-bold text-ink">Quick checklist</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Values and demand checked on both sides</li>
            <li>Physical / permanent modes correct</li>
            <li>WFL is Win or Fair (or you knowingly accept a Lose for a goal fruit)</li>
            <li>Trade window matches the calculator</li>
            <li>No off-platform “verification” requests</li>
          </ul>

          <p>
            Run that checklist on bloxfruitcalculator.net and you will leave fewer fruits on the
            table—and bring fewer regrets into the next server hop.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <CtaButton href="/#calculator" ariaLabel="Open Blox Fruit Calculator" icon="arrow">
            OPEN CALCULATOR
          </CtaButton>
        </div>
      </article>
    </>
  );
}
