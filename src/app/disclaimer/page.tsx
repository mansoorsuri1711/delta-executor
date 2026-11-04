import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_DOMAIN, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Disclaimer — Blox Fruit Calculator",
  description:
    "Disclaimer for bloxfruitcalculator.net: unofficial fan tool, community values only, no affiliation with Roblox or Blox Fruits.",
  alternates: { canonical: `${SITE_ORIGIN}/disclaimer` },
};

export default function DisclaimerPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Disclaimer", href: "/disclaimer" },
        ]}
      />
      <div className="container mx-auto max-w-3xl px-4 pb-12 pt-8">
        <h1 className="mb-6 font-display text-3xl font-bold text-ink">Disclaimer</h1>
        <div className="space-y-4 leading-relaxed text-ink/80">
          <p>
            {SITE_NAME} on {SITE_DOMAIN} is an unofficial fan tool. It is not affiliated with,
            endorsed by, or sponsored by Blox Fruits, its developers, or Roblox Corporation.
          </p>
          <p>
            Fruit values, demand scores, and Win / Fair / Lose results are community estimates for
            educational and planning purposes. Markets change with updates, stock, and player
            behavior. Always verify offers in-game before you accept a trade.
          </p>
          <p>
            We do not guarantee profits, perfect accuracy, or recovery of items lost to scams or
            bad deals. Use the calculator as a guide alongside your own judgment and safe trading
            habits.
          </p>
          <p>
            Roblox® and related marks are trademarks of their respective owners. Blox Fruits is a
            game experience on the Roblox platform. All rights belong to their owners.
          </p>
          <p>Last updated November 5, 2026.</p>
        </div>
      </div>
    </>
  );
}
