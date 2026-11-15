import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import RelatedGuides, { RELATED_PRESETS } from "@/components/RelatedGuides";
import RobuxUsdConverter from "@/components/RobuxUsdConverter";
import {
  DEVEX_MINIMUM_ROBUX,
  DEVEX_USD_PER_ROBUX,
  DEVEX_US18_USD_PER_ROBUX,
  PURCHASE_APP_USD_PER_ROBUX,
  PURCHASE_WEB_USD_PER_ROBUX,
  QUICK_AMOUNTS,
  RATES_UPDATED,
  USD_TO_PHP,
  formatPhp,
  formatUsd,
  robuxToUsd,
  usdToPhp,
} from "@/lib/robuxRates";
import { OG_IMAGE, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Robux to USD Converter — Calculator at Chart (${RATES_UPDATED})`,
  description:
    "Libreng Robux to USD calculator at USD to Robux converter. I-convert ang 10K, 31K, 100K, o 18 million Robux gamit ang buy rate at DevEx cash-out rate. May tinatayang PHP. In-update noong Nobyembre 2026.",
  alternates: { canonical: `${SITE_ORIGIN}/robux-to-usd` },
  keywords: [
    "robux to usd",
    "robux to usd calculator",
    "robux converter",
    "robux to money converter",
    "usd to robux",
    "10k robux to usd",
    "100k robux to usd",
    "robux to dollar",
    "robux to php",
  ],
  openGraph: {
    title: `Robux to USD Converter — ${SITE_NAME}`,
    description:
      "I-convert ang Robux sa USD at USD sa Robux gamit ang buy rate at DevEx cash-out rate. Libreng money calculator ng Robux.",
    url: `${SITE_ORIGIN}/robux-to-usd`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Robux to USD converter" }],
  },
};

const faqItems = [
  {
    question: "Magkano ang 1 Robux sa USD?",
    answer: `Sa karaniwang app-store buy rate (~$9.99 para sa 800 Robux), ang 1 Robux ay humigit-kumulang ${formatUsd(PURCHASE_APP_USD_PER_ROBUX)}. Sa website ng Roblox (~$9.99 para sa 1,000 Robux) mas malapit sa ${formatUsd(PURCHASE_WEB_USD_PER_ROBUX)}. Kung i-ca-cash-out mo ang kinitang Robux sa DevEx, ang 1 Robux ay nagkakahalagang ${formatUsd(DEVEX_USD_PER_ROBUX)} sa standard rate (o ${formatUsd(DEVEX_US18_USD_PER_ROBUX)} para sa kwalipikadong U.S. 18+ kinitang Robux).`,
  },
  {
    question: "Magkano ang 10,000 Robux sa USD?",
    answer: `Ang pagbili ng ~10K Robux sa app rate ay humigit-kumulang ${formatUsd(robuxToUsd(10_000, "purchaseApp"))}. Sa web rate humigit-kumulang ${formatUsd(robuxToUsd(10_000, "purchaseWeb"))}. Magbabayad ang DevEx ng humigit-kumulang ${formatUsd(robuxToUsd(10_000, "devex"))} kung bahagi iyon ng kwalipikadong cash-out (kailangan pa rin ng DevEx ng hindi bababa sa ${DEVEX_MINIMUM_ROBUX.toLocaleString("en-US")} kinitang Robux).`,
  },
  {
    question: "Magkano ang 100K Robux sa USD?",
    answer: `Ang 100,000 Robux ay humigit-kumulang ${formatUsd(robuxToUsd(100_000, "purchaseApp"))} sa app rate, o humigit-kumulang ${formatUsd(robuxToUsd(100_000, "purchaseWeb"))} sa web. Ang standard DevEx ay ${formatUsd(robuxToUsd(100_000, "devex"))} (${formatUsd(robuxToUsd(100_000, "devexUs18"))} sa U.S. 18+ rate kapag kwalipikado).`,
  },
  {
    question: "Magkano ang 18 million Robux sa USD?",
    answer: `Ang 18,000,000 Robux ay humigit-kumulang ${formatUsd(robuxToUsd(18_000_000, "purchaseApp"))} sa app buy rate, ${formatUsd(robuxToUsd(18_000_000, "purchaseWeb"))} sa web buy rate, o ${formatUsd(robuxToUsd(18_000_000, "devex"))} via standard DevEx (${formatUsd(robuxToUsd(18_000_000, "devexUs18"))} U.S. 18+). Gamitin ang converter sa itaas para sa eksaktong paglipat ng mode.`,
  },
  {
    question: "Ano ang pagkakaiba ng buy rate at DevEx?",
    answer:
      "Ang buy rate ay ang binabayaran ng mga player sa Roblox para bumili ng Robux. Ang DevEx ay ang natatanggap ng kwalipikadong creator kapag nag-ca-cash-out sila ng kinitang Robux. Mas mataas ang buy rate kada Robux kaysa DevEx — iyon ang spread kung paano kumikita ang Roblox. Hindi mo maibebenta ang biniling Robux para sa cash sa DevEx.",
  },
  {
    question: "Maaari ko bang i-convert ang Robux sa totoong pera?",
    answer: `Sa Roblox Developer Exchange (DevEx) lamang kung kwalipikadong creator ka na may sapat na kinitang Robux (minimum ${DEVEX_MINIMUM_ROBUX.toLocaleString("en-US")}), natutugunan ang age at tax requirements, at sumusunod sa rules ng Roblox. Halos palaging scam ang random na “Robux to PayPal” o gift-card site.`,
  },
  {
    question: "Libre ba ang Robux converter na ito?",
    answer: `Oo. Ang ${SITE_NAME} Robux to USD calculator ay libre, gumagana parehong direksyon (Robux → USD at USD → Robux), at hindi nangangailangan ng account. Mga tinataya ang rate na in-update noong ${RATES_UPDATED}. May tinatayang PHP display gamit ang ${USD_TO_PHP} USD/PHP.`,
  },
];

export default function RobuxToUsdPage() {
  const webAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Robux to USD Converter",
    url: `${SITE_ORIGIN}/robux-to-usd`,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description:
      "Libreng Robux to USD at USD to Robux calculator gamit ang Roblox purchase at DevEx rate.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }}
      />
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Robux to USD" }]}
      />

      <div className="container mx-auto max-w-3xl px-4 pb-4 pt-6">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-pink/80">
          Mga Tool · Rate noong {RATES_UPDATED}
        </p>
        <h1 className="font-display text-4xl font-bold text-white md:text-5xl">
          Robux to USD Converter
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-white/65">
          Libreng calculator ng Robux to money — i-convert ang Robux sa USD o USD sa Robux gamit ang
          kasalukuyang buy rate at DevEx cash-out rate. May tinatayang halaga sa PHP (₱) para sa mga
          user sa Pilipinas.
        </p>
      </div>

      <div className="container mx-auto max-w-3xl px-4 pt-6">
        <RobuxUsdConverter />
      </div>

      <div className="container mx-auto max-w-3xl px-4 pt-12">
        <h2 className="mb-3 font-display text-2xl font-bold text-white md:text-3xl">
          Paano gumagana ang Robux to USD calculator
        </h2>
        <div className="space-y-4 text-white/65 leading-relaxed">
          <p>
            Iba-iba ang rate na ginagamit ng Roblox depende kung papasok o lalabas ang pera sa
            platform. Mas mahal bawat Robux kapag bumibili (lalo na sa mobile app) kaysa sa natatanggap
            ng creator sa Developer Exchange. Pinapayagan ka ng converter na magpalit ng mode para
            tumugma ang “robux to money” na sagot sa tanong mo talaga.
          </p>
          <ul className="ml-4 list-disc space-y-2 text-sm text-white/60">
            <li>
              <strong className="text-white">Bili (app store):</strong> ~{formatUsd(PURCHASE_APP_USD_PER_ROBUX)}{" "}
              bawat Robux ($9.99 → 800 R$)
            </li>
            <li>
              <strong className="text-white">Bili (website):</strong> ~{formatUsd(PURCHASE_WEB_USD_PER_ROBUX)}{" "}
              bawat Robux ($9.99 → 1,000 R$ — mas sulit)
            </li>
            <li>
              <strong className="text-white">DevEx:</strong> {formatUsd(DEVEX_USD_PER_ROBUX)} bawat kinitang
              Robux (standard)
            </li>
            <li>
              <strong className="text-white">DevEx U.S. 18+:</strong> {formatUsd(DEVEX_US18_USD_PER_ROBUX)}{" "}
              bawat kwalipikadong kinitang Robux
            </li>
            <li>
              <strong className="text-white">Tinatayang PHP:</strong> USD × {USD_TO_PHP} (hal. $
              {formatUsd(robuxToUsd(1_000, "purchaseWeb")).replace("$", "")} USD ≈{" "}
              {formatPhp(usdToPhp(robuxToUsd(1_000, "purchaseWeb")))} para sa 1,000 R$ sa web rate)
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto max-w-3xl px-4 pt-12">
        <h2 className="mb-3 font-display text-2xl font-bold text-white md:text-3xl">
          Popular na Robux to USD conversion
        </h2>
        <p className="mb-5 text-sm text-white/55">
          Mabilis na chart para sa karaniwang halaga — kabilang ang 10k, 31,000, 100k, at 18 million Robux.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-sm text-white/70">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.04] text-left text-xs uppercase tracking-wider text-white/40">
                <th className="px-4 py-3">Robux</th>
                <th className="px-4 py-3">Bili (app)</th>
                <th className="px-4 py-3">Bili (web)</th>
                <th className="px-4 py-3">DevEx</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {QUICK_AMOUNTS.map((n) => (
                <tr key={n}>
                  <td className="px-4 py-3 font-semibold text-white">
                    {n.toLocaleString("en-US")} R$
                  </td>
                  <td className="px-4 py-3">{formatUsd(robuxToUsd(n, "purchaseApp"))}</td>
                  <td className="px-4 py-3">{formatUsd(robuxToUsd(n, "purchaseWeb"))}</td>
                  <td className="px-4 py-3">{formatUsd(robuxToUsd(n, "devex"))}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="container mx-auto max-w-3xl px-4 pt-12">
        <h2 className="mb-3 font-display text-2xl font-bold text-white md:text-3xl">
          Mga tip sa Robux converter
        </h2>
        <ul className="space-y-3 text-sm text-white/65 leading-relaxed">
          <li className="flex gap-3">
            <span className="mt-0.5 text-pink font-bold shrink-0">→</span>
            <span>
              Mas mainam ang pagbili sa website / gift card kapag posible — karaniwang mas maraming
              Robux sa parehong halaga ng dolyar kaysa in-app purchase.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-0.5 text-pink font-bold shrink-0">→</span>
            <span>
              Para sa <em>kinitang</em> Robux mula sa experiences ang DevEx, hindi para sa biniling
              Robux sa store. Hindi ma-ca-cash-out ang biniling Robux.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-0.5 text-pink font-bold shrink-0">→</span>
            <span>
              Huwag pansinin ang site na nangangako ng instant “Robux to PayPal” o “free Robux
              generator.” Opisyal na channel ng Roblox lamang.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-0.5 text-pink font-bold shrink-0">→</span>
            <span>
              Naghahanap ng Roblox tool bukod sa currency math? Tingnan ang aming{" "}
              <Link href="/download-delta-executor" className="text-pink hover:underline">
                gabay sa pag-download ng Delta Executor
              </Link>{" "}
              at{" "}
              <Link href="/blog/what-is-delta-executor" className="text-pink hover:underline">
                ano ang Delta Executor
              </Link>
              .
            </span>
          </li>
        </ul>
      </div>

      <div className="container mx-auto max-w-3xl px-4 pt-12 pb-6">
        <FaqSection title="FAQ: Robux to USD" items={faqItems} />
      </div>

      <div className="container mx-auto max-w-3xl px-4 pb-14">
        <RelatedGuides links={[...RELATED_PRESETS.robuxToUsd]} />
      </div>
    </>
  );
}