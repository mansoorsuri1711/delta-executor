import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CONTACT_EMAIL, SITE_DOMAIN, SITE_NAME, SITE_ORIGIN, STYLES_UPDATED } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Privacy Policy — ${SITE_NAME}`,
  description: `Privacy policy for ${SITE_DOMAIN}: what data we collect, analytics, cookies, and how to contact us about your privacy.`,
  alternates: { canonical: `${SITE_ORIGIN}/privacy` },
};

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
      />
      <div className="container mx-auto max-w-3xl px-4 pb-12 pt-8">
        <h1 className="mb-6 font-display text-3xl font-bold text-white">Privacy Policy</h1>
        <div className="space-y-4 leading-relaxed text-white/75">
          <p>
            This Privacy Policy explains how {SITE_NAME} ({SITE_DOMAIN}) handles information when you visit or use this website.
          </p>

          <h2 className="pt-2 font-display text-xl font-bold text-white">Information we collect</h2>
          <p>
            This site does not require you to create an account or submit personal information to access content. If you contact us via email or the contact form, we receive only the information you voluntarily provide (name, email address, and message) solely to respond to your inquiry.
          </p>

          <h2 className="font-display text-xl font-bold text-white">Server logs and analytics</h2>
          <p>
            Our hosting provider and analytics tools may automatically collect technical data including your IP address, browser type and version, referring URL, and pages visited. This data is used in aggregate to monitor site performance, security, and traffic trends. We do not sell or share individual log data with third-party advertisers.
          </p>

          <h2 className="font-display text-xl font-bold text-white">Cookies</h2>
          <p>
            Essential cookies may be used for site functionality (e.g. theme preference). Analytics cookies, if active, collect only anonymized, aggregated data. You can manage or delete cookies at any time through your browser settings; this does not affect your ability to read our content.
          </p>

          <h2 className="font-display text-xl font-bold text-white">Third-party links</h2>
          <p>
            Our pages link to external services including Roblox, app stores, and social media platforms. Clicking those links takes you outside {SITE_DOMAIN}, where the third party&apos;s own privacy policy applies. We are not responsible for the data practices of those parties.
          </p>

          <h2 className="font-display text-xl font-bold text-white">Children&apos;s privacy</h2>
          <p>
            This site is not directed at children under 13. We do not knowingly collect personal information from minors. If you believe a child has submitted personal information to us, please contact us and we will delete it promptly.
          </p>

          <h2 className="font-display text-xl font-bold text-white">Changes to this policy</h2>
          <p>
            We may update this policy from time to time. The date at the bottom of the page reflects the most recent revision.
          </p>

          <h2 className="font-display text-xl font-bold text-white">Contact</h2>
          <p>
            For privacy questions or data requests:{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-pink underline">
              {CONTACT_EMAIL}
            </a>
            . Last updated: {STYLES_UPDATED}.
          </p>
        </div>
      </div>
    </>
  );
}
