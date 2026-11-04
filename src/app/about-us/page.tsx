import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaButton from "@/components/CtaButton";
import { BRAND_LOGO, CONTACT_EMAIL, SITE_DOMAIN, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "About Us — Blox Fruit Calculator",
  description:
    "About Blox Fruit Calculator on bloxfruitcalculator.net: a free browser tool that compares Blox Fruits trades, values, demand, and Win / Fair / Lose.",
  alternates: { canonical: `${SITE_ORIGIN}/about-us` },
  openGraph: {
    title: "About Us — Blox Fruit Calculator",
    description: `Independent Blox Fruits trade toolkit at ${SITE_DOMAIN}.`,
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
              alt="Blox Fruit Calculator logo"
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
              <strong className="text-ink">Blox Fruit Calculator</strong> that turns messy trade
              offers into value, demand, and Win / Fair / Lose. We operate at{" "}
              <strong className="text-ink">{SITE_DOMAIN}</strong>.
            </p>
          </div>
        </div>

        <div className="space-y-5 text-ink/80 leading-relaxed">
          <p>
            Blox Fruits trading moves faster than most value screenshots. Our calculator lets you
            compare both sides of a deal, toggle physical and permanent fruits, and read a clear WFL
            result before you accept.
          </p>
          <p>
            We are not affiliated with Blox Fruits, Roblox Corporation, or any third-party value
            publisher. Values are community references for guidance. Markets change—always confirm
            with recent offers.
          </p>
          <p>
            Explore the{" "}
            <Link href="/" className="text-teal-deep underline">
              homepage calculator
            </Link>
            , the{" "}
            <Link href="/blox-fruits-values" className="text-teal-deep underline">
              values list
            </Link>
            , and guides like{" "}
            <Link href="/what-is-wfl" className="text-teal-deep underline">
              what WFL means
            </Link>
            .
          </p>
          <p>
            Questions or corrections? Email{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-teal-deep underline">
              {CONTACT_EMAIL}
            </a>{" "}
            or use the{" "}
            <Link href="/contact-us" className="text-teal-deep underline">
              contact page
            </Link>
            .
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <CtaButton href="/#calculator" ariaLabel="Open Blox Fruit Calculator" icon="arrow">
            OPEN CALCULATOR
          </CtaButton>
        </div>
      </div>
    </>
  );
}
