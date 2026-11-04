import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CONTACT_EMAIL, SITE_DOMAIN, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy — Blox Fruit Calculator",
  description:
    "Privacy policy for bloxfruitcalculator.net: what we collect, how analytics may be used, and how to contact us.",
  alternates: { canonical: `${SITE_ORIGIN}/privacy` },
};

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Privacy", href: "/privacy" },
        ]}
      />
      <div className="container mx-auto max-w-3xl px-4 pb-12 pt-8">
        <h1 className="mb-6 font-display text-3xl font-bold text-ink">Privacy Policy</h1>
        <div className="space-y-4 leading-relaxed text-ink/80">
          <p>
            This Privacy Policy explains how {SITE_NAME} ({SITE_DOMAIN}) handles information when
            you use the Blox Fruit Calculator and the rest of the site.
          </p>
          <h2 className="pt-2 font-display text-xl font-bold text-ink">Information we process</h2>
          <p>
            The calculator runs in your browser. Trade selections are not stored on our servers as
            an account history. If you email us or submit the contact form, we receive the details
            you choose to send so we can reply.
          </p>
          <h2 className="font-display text-xl font-bold text-ink">Logs and analytics</h2>
          <p>
            Like most sites, hosting and analytics providers may process basic technical data such
            as IP address, browser type, and pages viewed. We use this to keep the site fast,
            secure, and useful—not to sell personal profiles.
          </p>
          <h2 className="font-display text-xl font-bold text-ink">Cookies</h2>
          <p>
            Essential cookies may be required for site operation. Analytics cookies, if enabled,
            help us understand aggregate traffic. You can control cookies through your browser
            settings.
          </p>
          <h2 className="font-display text-xl font-bold text-ink">Third parties</h2>
          <p>
            Links to Roblox, community resources, or other sites are outside our control. Their
            privacy practices apply when you leave {SITE_DOMAIN}. We are not affiliated with Roblox
            Corporation or the Blox Fruits game studio.
          </p>
          <h2 className="font-display text-xl font-bold text-ink">Contact</h2>
          <p>
            Privacy questions:{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-teal-deep underline">
              {CONTACT_EMAIL}
            </a>
            . Last updated November 5, 2026.
          </p>
        </div>
      </div>
    </>
  );
}
