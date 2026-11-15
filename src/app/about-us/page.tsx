import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaButton from "@/components/CtaButton";
import RelatedGuides, { RELATED_PRESETS } from "@/components/RelatedGuides";
import {
  BRAND_LOGO,
  CONTACT_EMAIL,
  SITE_DOMAIN,
  SITE_NAME,
  SITE_ORIGIN,
  SOCIAL_LINKS,
  APP_VERSION,
  ANDROID_APK_URL,
} from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `About Us — ${SITE_NAME}`,
  description: `Learn about ${SITE_NAME}: who we are, our mission to publish honest Delta Executor guides for Android, iOS, PC, and Mac, and how to reach our team.`,
  alternates: { canonical: `${SITE_ORIGIN}/about-us` },
  openGraph: {
    title: `About ${SITE_NAME}`,
    description: `The team and mission behind the #1 Delta Executor guide site.`,
    url: `${SITE_ORIGIN}/about-us`,
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />
      <div className="container mx-auto max-w-4xl px-4 pb-10 pt-8">
        <div className="mb-10 flex flex-col items-start gap-8 md:flex-row">
          <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-muted">
            <Image
              src={BRAND_LOGO}
              alt={`${SITE_NAME} logo`}
              fill
              sizes="160px"
              className="object-contain p-3"
              priority
            />
          </div>
          <div>
            <h1 className="mb-4 font-display text-3xl font-bold text-white md:text-4xl">
              About {SITE_NAME}
            </h1>
            <p className="text-lg leading-relaxed text-white/75">
              {SITE_NAME} ({SITE_DOMAIN}) is an independent guide site dedicated to{" "}
              <strong className="text-white">Delta Executor</strong> — the free Roblox script executor for Android and iOS.
              We publish step-by-step install guides, key system walkthroughs, safety information, and usage tips to help
              the community get the most out of version {APP_VERSION}.
            </p>
          </div>
        </div>

        <div className="space-y-5 leading-relaxed text-white/75">
          <h2 className="font-display text-xl font-bold text-white">Why we built this site</h2>
          <p>
            Finding accurate, up-to-date Delta Executor information is harder than it should be. Most search results surface
            outdated tutorials for old versions, misleading YouTube thumbnails, or outright scam pages distributing malware
            disguised as the executor. We built {SITE_NAME} to be a reliable, honest reference — one that clearly explains
            what Delta does, what risks exist, and how to install it safely.
          </p>
          <p>
            We are not affiliated with, endorsed by, or sponsored by Roblox Corporation or any game developer on the Roblox
            platform. Delta Executor is a third-party tool; using it may violate Roblox&apos;s Terms of Service and carries a
            ban risk. We say so explicitly throughout our guides because we believe users deserve accurate information, not hype.
          </p>
          <h2 className="font-display text-xl font-bold text-white">What we cover</h2>
          <ul className="ml-4 list-disc space-y-1 text-white/65">
            <li>
              <Link href="/download-delta-executor" className="text-pink underline">Android APK download &amp; install guide</Link>
            </li>
            <li>
              <Link href="/delta-executor-ios" className="text-pink underline">iOS sideloading guide</Link> (Direct Install, AltStore, TrollStore)
            </li>
            <li>
              <Link href="/delta-executor-pc" className="text-pink underline">PC guide</Link> and <Link href="/delta-executor-mac" className="text-pink underline">Mac guide</Link> via Android emulator
            </li>
            <li>
              <Link href="/how-to-use-delta-executor" className="text-pink underline">How to use Delta Executor</Link> — injection, Script Hub, Editor
            </li>
            <li>
              <Link href="/delta-executor-troubleshooting" className="text-pink underline">Troubleshooting guide</Link> for injection failures, key errors, and crashes
            </li>
            <li>
              <Link href="/blog" className="text-pink underline">Blog</Link>:{" "}
              <Link href="/blog/what-is-delta-executor" className="text-pink underline">what is Delta</Link>,{" "}
              <Link href="/blog/how-to-get-delta-executor-key" className="text-pink underline">how to get a key</Link>,{" "}
              <Link href="/blog/is-delta-executor-safe" className="text-pink underline">is it safe</Link>, and{" "}
              <Link href="/blog/delta-executor-key-not-working" className="text-pink underline">key not working</Link>
            </li>
          </ul>
          <h2 className="font-display text-xl font-bold text-white">How we keep content accurate</h2>
          <p>
            Content is written and reviewed by executor community members who test Delta on multiple Android devices and iOS
            firmware versions. We update pages within days of major Roblox patches or new Delta releases to keep information
            current. If you spot an error or outdated detail, please use the{" "}
            <Link href="/contact-us" className="text-pink underline">contact form</Link> — we appreciate corrections.
          </p>
          <p>
            For questions, corrections, or partnership inquiries, email{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-pink underline">
              {CONTACT_EMAIL}
            </a>{" "}
            or use the{" "}
            <Link href="/contact-us" className="text-pink underline">contact form</Link>.
            Follow{" "}
            <a href={SOCIAL_LINKS.telegram} className="text-pink underline" target="_blank" rel="noopener noreferrer">Telegram</a>,{" "}
            <a href={SOCIAL_LINKS.facebook} className="text-pink underline" target="_blank" rel="noopener noreferrer">Facebook</a>,{" "}
            <a href={SOCIAL_LINKS.x} className="text-pink underline" target="_blank" rel="noopener noreferrer">X</a>, or{" "}
            <Link href="/delta-executor-discord" className="text-pink underline">Discord</Link> for update announcements.
          </p>
        </div>

        <RelatedGuides
          title="Guides we recommend first"
          links={[
            ...RELATED_PRESETS.blogIndex,
            { href: "/how-to-use-delta-executor", label: "How to use Delta Executor" },
            { href: "/delta-executor-troubleshooting", label: "Troubleshooting" },
          ]}
        />

        <div className="mt-10 flex justify-center">
          <CtaButton href={ANDROID_APK_URL} icon="download" ariaLabel="Go to Delta Executor download page">
            Download Delta Executor
          </CtaButton>
        </div>
      </div>
    </>
  );
}
