import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogPostSchema from "@/components/BlogPostSchema";
import CtaButton from "@/components/CtaButton";
import {
  BRAND_FEATURE_3,
  OG_IMAGE,
  SITE_NAME,
  SITE_ORIGIN,
} from "@/lib/siteConfig";

const title = "How Demand and Value Work in Blox Fruits Trading";
const description =
  "Understand Blox Fruits trade value vs demand scores, why Fair deals still need adds, and how to use both numbers in a WFL calculator.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_ORIGIN}/blog/how-demand-and-value-work` },
  openGraph: {
    title,
    description,
    url: `${SITE_ORIGIN}/blog/how-demand-and-value-work`,
    siteName: SITE_NAME,
    type: "article",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: title }],
  },
};

export default function DemandValuePost() {
  return (
    <>
      <BlogPostSchema
        title={title}
        description={description}
        slug="how-demand-and-value-work"
        datePublished="2026-11-05"
        image={`${SITE_ORIGIN}${BRAND_FEATURE_3}`}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Demand & value", href: "/blog/how-demand-and-value-work" },
        ]}
      />
      <article className="container mx-auto max-w-3xl px-4 pb-14 pt-6">
        <h1 className="font-display text-3xl font-bold text-ink md:text-4xl">{title}</h1>
        <p className="mt-3 text-ink/55">November 5, 2026 · 9 min read</p>
        <div className="mt-6 overflow-hidden rounded-2xl border border-ink/10">
          <Image
            src={BRAND_FEATURE_3}
            alt="Blox Fruits value and demand totals shown in a calculator"
            width={1600}
            height={900}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            className="h-auto w-full object-cover"
          />
        </div>

        <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/80">
          <p>
            Most new traders stare at a single value number and wonder why “Fair” offers keep
            getting declined. The missing piece is demand. Value answers “what is it worth on
            average?” Demand answers “how many people want it right now?” You need both.
          </p>

          <h2 className="font-display text-2xl font-bold text-ink">What trade value measures</h2>
          <p>
            Trade value is a community average of what fruits move for in player deals. It is not
            the Beli price on the fruit dealer. The{" "}
            <Link href="/blox-fruits-values" className="font-semibold text-teal-deep underline">
              Blox Fruits values list
            </Link>{" "}
            stores that average so a{" "}
            <Link href="/" className="font-semibold text-teal-deep underline">
              Blox Fruit Calculator
            </Link>{" "}
            can total multi-item offers into one WFL call.
          </p>

          <h2 className="font-display text-2xl font-bold text-ink">What demand (1–10) measures</h2>
          <p>
            Demand is liquidity. A 10/10 fruit finds partners quickly and often draws adds. A 2/10
            fruit may sit for days even if the value looks respectable. Demand shifts when stock
            floods, YouTubers hype a fruit, or an update changes PvP and grinding metas.
          </p>

          <h2 className="font-display text-2xl font-bold text-ink">Why Fair can still feel unfair</h2>
          <p>
            Imagine your side equals their side on value, but you offer a low-demand mythical for a
            high-demand grinding fruit. Their fruit will re-trade tomorrow; yours might not. They
            will ask for adds—and they are not being irrational. The calculator surfaces average
            demand on each side so you see that gap before you argue.
          </p>

          <h2 className="font-display text-2xl font-bold text-ink">Value vs Beli price</h2>
          <p>
            Beli is what the NPC dealer charges. Trade value is what players pay each other. Some
            fruits trade far above Beli because demand and rarity outrun shop supply. Others lag
            below Beli when nobody wants them. Always compare apples to apples inside the
            calculator—not dealer stickers to trade asks.
          </p>

          <h2 className="font-display text-2xl font-bold text-ink">Practical rules</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Use value for the first WFL filter</li>
            <li>Use demand to decide adds and patience</li>
            <li>Treat unstable trends as a reason to demand a Win buffer</li>
            <li>Never ignore permanent vs physical when comparing numbers</li>
          </ul>

          <p>
            For the WFL labels themselves, read{" "}
            <Link href="/what-is-wfl" className="font-semibold text-teal-deep underline">
              what WFL means
            </Link>
            . For a full trading workflow, use the{" "}
            <Link
              href="/blog/blox-fruits-trading-guide"
              className="font-semibold text-teal-deep underline"
            >
              trading guide
            </Link>
            .
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <CtaButton href="/blox-fruits-values" ariaLabel="Open values list" icon="arrow">
            OPEN VALUES LIST
          </CtaButton>
        </div>
      </article>
    </>
  );
}
