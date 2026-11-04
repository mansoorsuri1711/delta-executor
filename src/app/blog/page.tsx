import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  BRAND_FEATURE_2,
  BRAND_FEATURE_3,
  BRAND_HERO,
  SITE_NAME,
  SITE_ORIGIN,
} from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Blog — Blox Fruit Calculator Guides",
  description:
    "SERP-driven Blox Fruits guides: trading tips, demand and value, and how to avoid trade scams—written for calculator users.",
  alternates: { canonical: `${SITE_ORIGIN}/blog` },
  openGraph: {
    title: "Blog — Blox Fruit Calculator Guides",
    description: "Practical Blox Fruits trading articles people actually search for.",
    url: `${SITE_ORIGIN}/blog`,
    siteName: SITE_NAME,
    type: "website",
  },
};

const posts = [
  {
    href: "/blog/blox-fruits-trading-guide",
    title: "Blox Fruits Trading Guide: Better Deals With a Value Calculator",
    excerpt:
      "How to prepare offers, read WFL, use demand, and avoid emotional overpays in real trades.",
    date: "November 2026",
    read: "11 min",
    image: BRAND_HERO,
    alt: "Blox Fruits trading guide with value calculator",
  },
  {
    href: "/blog/how-demand-and-value-work",
    title: "How Demand and Value Work in Blox Fruits Trading",
    excerpt:
      "Why Fair trades still need adds, what a 10/10 demand score means, and how to read both numbers together.",
    date: "November 2026",
    read: "9 min",
    image: BRAND_FEATURE_3,
    alt: "Demand and value explained for Blox Fruits",
  },
  {
    href: "/blog/blox-fruits-trading-scams",
    title: "Blox Fruits Trading Scams to Avoid Before You Accept",
    excerpt:
      "Middleman tricks, fake confirmations, phishing links, and habits that keep your fruits safe.",
    date: "November 2026",
    read: "8 min",
    image: BRAND_FEATURE_2,
    alt: "Blox Fruits trading scam prevention tips",
  },
];

export default function BlogPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }]} />
      <div className="container mx-auto max-w-5xl px-4 pb-10 pt-8">
        <h1 className="mb-3 font-display text-3xl font-bold text-ink md:text-4xl">
          Blox Fruit Calculator blog
        </h1>
        <p className="mb-10 text-lg text-ink/80">
          Only topics people search alongside trade calculators: trading systems, demand literacy,
          and scam prevention. No filler posts.
        </p>
        <div className="grid gap-6 md:grid-cols-1">
          {posts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="group grid overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm transition hover:border-teal/30 sm:grid-cols-[240px_1fr]"
            >
              <div className="relative min-h-[160px] sm:min-h-full">
                <Image
                  src={post.image}
                  alt={post.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 240px"
                  className="object-cover"
                />
              </div>
              <div className="p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-ink/45">
                  {post.date} · {post.read}
                </p>
                <h2 className="mt-2 font-display text-xl font-bold text-ink group-hover:text-teal-deep">
                  {post.title}
                </h2>
                <p className="mt-2 text-ink/70">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
