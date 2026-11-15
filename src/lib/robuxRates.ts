/**
 * Roblox Robux ↔ USD rates (checked against Roblox Help / DevEx docs, Nov 2026).
 * Purchase rates approximate official packages; DevEx is the cash-out rate for earned Robux.
 */

/** App / mobile store base: $9.99 → 800 Robux */
export const PURCHASE_APP_USD_PER_ROBUX = 9.99 / 800;

/** Web / desktop / gift card base: $9.99 → 1,000 Robux (up to 25% more Robux) */
export const PURCHASE_WEB_USD_PER_ROBUX = 9.99 / 1000;

/** Standard DevEx (earned Robux on/after Sep 5, 2025 10am PT) */
export const DEVEX_USD_PER_ROBUX = 0.0038;

/** U.S. 18+ DevEx rate (eligible earned Robux, effective Jun 8, 2026) */
export const DEVEX_US18_USD_PER_ROBUX = 0.0054;

/** Marketplace resale fee retained by Roblox */
export const MARKETPLACE_FEE = 0.3;

export const DEVEX_MINIMUM_ROBUX = 30_000;

export const RATES_UPDATED = "Nobyembre 15, 2026";

/** Tinatayang USD → PHP para sa mga display sa Pilipinas (hindi opisyal na rate ng Roblox) */
export const USD_TO_PHP = 58.5;

export type RateMode = "purchaseApp" | "purchaseWeb" | "devex" | "devexUs18";

export const RATE_OPTIONS: Array<{
  id: RateMode;
  label: string;
  short: string;
  usdPerRobux: number;
  hint: string;
}> = [
  {
    id: "purchaseApp",
    label: "Bili (app store)",
    short: "Bili · app",
    usdPerRobux: PURCHASE_APP_USD_PER_ROBUX,
    hint: "$9.99 → 800 Robux sa mobile / console store",
  },
  {
    id: "purchaseWeb",
    label: "Bili (website)",
    short: "Bili · web",
    usdPerRobux: PURCHASE_WEB_USD_PER_ROBUX,
    hint: "$9.99 → 1,000 Robux sa web / PC / gift card",
  },
  {
    id: "devex",
    label: "DevEx cash-out",
    short: "DevEx",
    usdPerRobux: DEVEX_USD_PER_ROBUX,
    hint: "$0.0038 bawat kinitang Robux (standard na rate)",
  },
  {
    id: "devexUs18",
    label: "DevEx U.S. 18+",
    short: "DevEx 18+",
    usdPerRobux: DEVEX_US18_USD_PER_ROBUX,
    hint: "$0.0054 bawat kwalipikadong U.S. 18+ na kinitang Robux",
  },
];

export function usdPerRobux(mode: RateMode): number {
  return RATE_OPTIONS.find((r) => r.id === mode)?.usdPerRobux ?? PURCHASE_APP_USD_PER_ROBUX;
}

export function robuxToUsd(robux: number, mode: RateMode): number {
  if (!Number.isFinite(robux) || robux < 0) return 0;
  return robux * usdPerRobux(mode);
}

export function usdToRobux(usd: number, mode: RateMode): number {
  if (!Number.isFinite(usd) || usd < 0) return 0;
  const rate = usdPerRobux(mode);
  if (rate <= 0) return 0;
  return Math.round(usd / rate);
}

export function formatUsd(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: amount >= 100 ? 2 : 4,
  }).format(amount);
}

export function formatRobux(amount: number): string {
  return `${new Intl.NumberFormat("en-US").format(Math.round(amount))} R$`;
}

export function formatPhp(amount: number): string {
  return new Intl.NumberFormat("fil-PH", {
    style: "currency",
    currency: "PHP",
    minimumFractionDigits: 2,
    maximumFractionDigits: amount >= 100 ? 2 : 4,
  }).format(amount);
}

export function usdToPhp(usd: number): number {
  if (!Number.isFinite(usd) || usd < 0) return 0;
  return usd * USD_TO_PHP;
}

/** Popular SERP amounts for quick convert table */
export const QUICK_AMOUNTS = [
  80, 400, 800, 1_000, 2_000, 5_000, 10_000, 31_000, 50_000, 100_000, 1_000_000, 18_000_000,
] as const;
