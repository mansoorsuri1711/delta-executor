import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedGuides, { RELATED_PRESETS } from "@/components/RelatedGuides";
import { OG_IMAGE, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Delta Executor Blog — Guides, Key Help & Safety Tips`,
  description:
    "Delta Executor blog: beginner guide, key system walkthrough, safety and ban risk explained, and key error troubleshooting. Updated November 2026.",
  alternates: { canonical: `${SITE_ORIGIN}/blog` },
  openGraph: {
    title: `Delta Executor Blog — ${SITE_NAME}`,
    description:
      "Practical guides for Delta Executor users — key system, safety info, and troubleshooting. No fluff, no fake download links.",
    url: `${SITE_ORIGIN}/blog`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `${SITE_NAME} blog` }],
  },
};

const posts = [
  {
    href: "/blog/what-is-delta-executor",
    title: "What Is Delta Executor? A Complete Beginner Guide",
    excerpt:
      "New to Delta Executor? This plain-English introduction covers what it is, which platforms it supports (Android, iOS, PC emulator), how the key system and scripts work at a high level, and what real risks you should understand before getting started.",
    date: "November 15, 2026",
    image: "/delta-executer.webp",
    imageAlt: "Delta Executor app — Get Key screen",
  },
  {
    href: "/blog/how-to-get-delta-executor-key",
    title: "How to Get Your Delta Executor Key — Step-by-Step (2026)",
    excerpt:
      "The key system trips up new users, but it only takes five minutes once you know the steps. This guide walks through every Linkvertise, LootLabs, and Work.ink checkpoint — no installs, no surveys. Includes the Premium skip option and what to avoid.",
    date: "November 15, 2026",
    image: "/delta-executor-free-download.webp",
    imageAlt: "Delta Executor key whitelist success screen",
  },
  {
    href: "/blog/is-delta-executor-safe",
    title: "Is Delta Executor Safe? An Honest Risk Assessment",
    excerpt:
      "We cover the ban risk, what Delta actually requests on your phone, how to verify a clean download with VirusTotal, the risk from third-party scripts, and why no executor should ever claim to be undetectable — straight talk with no sugarcoating.",
    date: "November 15, 2026",
    image: "/delta-executor-logo.webp",
    imageAlt: "Delta Executor official ninja logo",
  },
  {
    href: "/blog/delta-executor-key-not-working",
    title: "Delta Executor Key Not Working — Fix Every Error",
    excerpt:
      "Covers every common key failure: 'Invalid Key,' Too Many Requests on Linkvertise, adblock interference, device-bind errors, completed-but-stuck checkpoints, and why bypass sites are unsafe. Specific fixes for each scenario.",
    date: "November 15, 2026",
    image: "/delta-executor-download.webp",
    imageAlt: "Delta Executor download and unlock screen",
  },
];

export default function BlogIndexPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
      <div className="container mx-auto max-w-3xl px-4 pb-14 pt-6">
        <h1 className="font-display text-3xl font-bold text-white md:text-5xl">
          Delta Executor Blog
        </h1>
        <p className="mt-4 text-white/55">
          Practical guides written for real Delta Executor users — beginner orientation, key
          system walkthrough, safety assessment, and troubleshooting. No fluff, no fake download
          links.
        </p>
        <ul className="mt-10 space-y-5">
          {posts.map((post) => (
            <li key={post.href}>
              <Link
                href={post.href}
                className="block rounded-2xl border border-white/10 bg-card transition hover:border-pink/35 overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="relative flex h-44 w-full shrink-0 items-center justify-center overflow-hidden bg-muted sm:h-auto sm:w-40">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      width={280}
                      height={455}
                      sizes="160px"
                      className="brand-shot-sm"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/30">
                      {post.date}
                    </p>
                    <h2 className="mt-1 font-display text-xl font-bold text-white">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-sm text-white/55">{post.excerpt}</p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <RelatedGuides title="Popular guides & download" links={[...RELATED_PRESETS.blogIndex]} />
        <p className="mt-12 text-sm text-white/35">
          Ready to get started?{" "}
          <Link href="/download-delta-executor" className="text-pink underline">
            Visit the download page
          </Link>{" "}
          or{" "}
          <Link href="/" className="text-pink underline">
            browse all features
          </Link>
          .
        </p>
      </div>
    </>
  );
}
