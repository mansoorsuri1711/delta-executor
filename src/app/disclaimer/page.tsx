import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_DOMAIN, SITE_NAME, SITE_ORIGIN, STYLES_UPDATED } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Disclaimer — ${SITE_NAME}`,
  description: `Disclaimer for ${SITE_DOMAIN}: no affiliation with Roblox Corporation, ban risk warning, and independent guide status.`,
  alternates: { canonical: `${SITE_ORIGIN}/disclaimer` },
};

export default function DisclaimerPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Disclaimer" },
        ]}
      />
      <div className="container mx-auto max-w-3xl px-4 pb-12 pt-8">
        <h1 className="mb-6 font-display text-3xl font-bold text-white">Disclaimer</h1>
        <div className="space-y-4 leading-relaxed text-white/75">
          <p>
            {SITE_NAME} ({SITE_DOMAIN}) is an independent, community-operated guide website.{" "}
            <strong className="text-white">We are not affiliated with, endorsed by, or officially connected to Roblox Corporation</strong>{" "}
            or any game developer whose games appear on the Roblox platform.
          </p>

          <h2 className="pt-2 font-display text-xl font-bold text-white">Terms of Service risk</h2>
          <p>
            Script executors including Delta Executor are third-party tools that interact with Roblox in ways that violate{" "}
            <strong className="text-white">Roblox&apos;s Terms of Service</strong>. Using an executor on any Roblox account
            carries the risk of temporary or permanent account suspension. {SITE_NAME} does not guarantee that using Delta Executor
            will not result in a ban. We strongly recommend using a secondary account for testing to protect your main account.
          </p>

          <h2 className="font-display text-xl font-bold text-white">No guarantee of outcome</h2>
          <p>
            We make no warranty that any script, feature, or technique described on this site will achieve a specific in-game outcome.
            Game mechanics, anti-cheat systems, and Roblox&apos;s detection methods change frequently. Information on this site is
            provided for educational and informational purposes only.
          </p>

          <h2 className="font-display text-xl font-bold text-white">Third-party executors</h2>
          <p>
            References to third-party executors (e.g. on the PC guide page) are for informational purposes only. We do not endorse them
            and are not responsible for any harm arising from downloading or using software we do not distribute.
          </p>

          <h2 className="font-display text-xl font-bold text-white">Trademarks</h2>
          <p>
            &ldquo;Roblox,&rdquo; the Roblox logo, and related marks are trademarks of Roblox Corporation. All third-party trademarks
            mentioned on this site remain the property of their respective owners. References to them do not imply affiliation or
            endorsement by those owners.
          </p>

          <h2 className="font-display text-xl font-bold text-white">Accuracy of information</h2>
          <p>
            We make reasonable efforts to keep guides accurate and up to date following Roblox updates and new Delta Executor releases.
            However, the executor landscape evolves rapidly and some information may become outdated between updates.
            For critical steps, always verify against the latest community sources and the official Delta Executor download page.
          </p>

          <p>Last updated: {STYLES_UPDATED}.</p>
        </div>
      </div>
    </>
  );
}
