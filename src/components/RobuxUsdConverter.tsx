"use client";

import { useMemo, useState } from "react";
import {
  DEVEX_MINIMUM_ROBUX,
  RATE_OPTIONS,
  RATES_UPDATED,
  USD_TO_PHP,
  type RateMode,
  formatPhp,
  formatRobux,
  formatUsd,
  robuxToUsd,
  usdToPhp,
  usdToRobux,
} from "@/lib/robuxRates";

type Direction = "robuxToUsd" | "usdToRobux";

const PRESETS = [
  { label: "10K", robux: 10_000 },
  { label: "31K", robux: 31_000 },
  { label: "100K", robux: 100_000 },
  { label: "1M", robux: 1_000_000 },
  { label: "18M", robux: 18_000_000 },
] as const;

export default function RobuxUsdConverter() {
  const [direction, setDirection] = useState<Direction>("robuxToUsd");
  const [mode, setMode] = useState<RateMode>("purchaseApp");
  const [amount, setAmount] = useState("10000");

  const numeric = useMemo(() => {
    const cleaned = amount.replace(/,/g, "").trim();
    const n = Number.parseFloat(cleaned);
    return Number.isFinite(n) ? Math.max(0, n) : 0;
  }, [amount]);

  const result = useMemo(() => {
    if (direction === "robuxToUsd") {
      return { kind: "usd" as const, value: robuxToUsd(numeric, mode) };
    }
    return { kind: "robux" as const, value: usdToRobux(numeric, mode) };
  }, [direction, mode, numeric]);

  const phpEstimate = useMemo(() => {
    if (direction === "robuxToUsd" && result.kind === "usd") {
      return usdToPhp(result.value);
    }
    if (direction === "usdToRobux") {
      return usdToPhp(numeric);
    }
    return null;
  }, [direction, numeric, result]);

  const activeRate = RATE_OPTIONS.find((r) => r.id === mode)!;
  const belowDevExMin =
    (mode === "devex" || mode === "devexUs18") &&
    direction === "robuxToUsd" &&
    numeric > 0 &&
    numeric < DEVEX_MINIMUM_ROBUX;

  const swap = () => {
    if (direction === "robuxToUsd") {
      setDirection("usdToRobux");
      setAmount(String(Number(robuxToUsd(numeric, mode).toFixed(2))));
    } else {
      setDirection("robuxToUsd");
      setAmount(String(usdToRobux(numeric, mode)));
    }
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-card p-5 shadow-[0_18px_40px_-22px_rgba(0,0,0,0.2)] sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-white/40">
            Live na converter · rate noong {RATES_UPDATED}
          </p>
          <h2 className="mt-1 font-display text-2xl font-bold text-white">
            Calculator ng Robux to USD
          </h2>
        </div>
        <div className="flex rounded-full border border-white/15 bg-white p-1">
          <button
            type="button"
            onClick={() => setDirection("robuxToUsd")}
            className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${
              direction === "robuxToUsd"
                ? "bg-black"
                : "text-white/70 hover:text-white"
            }`}
            style={direction === "robuxToUsd" ? { color: "#ffffff" } : undefined}
          >
            Robux → USD
          </button>
          <button
            type="button"
            onClick={() => setDirection("usdToRobux")}
            className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${
              direction === "usdToRobux"
                ? "bg-black"
                : "text-white/70 hover:text-white"
            }`}
            style={direction === "usdToRobux" ? { color: "#ffffff" } : undefined}
          >
            USD → Robux
          </button>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {RATE_OPTIONS.map((opt) => (
          <button
            key={opt.id}
            type="button"
            onClick={() => setMode(opt.id)}
            className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
              mode === opt.id
                ? "border-black bg-black"
                : "border-white/15 bg-white text-white/70 hover:border-black/40"
            }`}
            style={mode === opt.id ? { color: "#ffffff" } : undefined}
          >
            {opt.short}
          </button>
        ))}
      </div>
      <p className="mt-2 text-xs text-white/45">{activeRate.hint}</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-end">
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/40">
            {direction === "robuxToUsd" ? "Halaga ng Robux" : "Halaga ng USD"}
          </span>
          <input
            type="text"
            inputMode="decimal"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full rounded-full border border-white/15 bg-white px-4 py-3 text-base font-semibold text-white outline-none ring-0 transition focus:border-black"
            aria-label={direction === "robuxToUsd" ? "Halaga ng Robux" : "Halaga ng USD"}
          />
        </label>

        <button
          type="button"
          onClick={swap}
          className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white text-white transition hover:border-black hover:bg-black hover:text-white"
          aria-label="Palitan ang direksyon ng conversion"
          title="Palitan"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
            />
          </svg>
        </button>

        <div>
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/40">
            {result.kind === "usd" ? "Halaga sa USD" : "Halaga sa Robux"}
          </span>
          <div
            className="rounded-full border border-black/20 bg-black px-4 py-3 text-base font-bold"
            style={{ color: "#ffffff" }}
          >
            {result.kind === "usd" ? formatUsd(result.value) : formatRobux(result.value)}
          </div>
          {phpEstimate !== null && phpEstimate > 0 && (
            <p className="mt-2 text-sm font-semibold text-white/75">
              ≈ {formatPhp(phpEstimate)} PHP{" "}
              <span className="text-xs font-normal text-white/45">
                (tinatayang conversion @ ${USD_TO_PHP} USD/PHP)
              </span>
            </p>
          )}
        </div>
      </div>

      {belowDevExMin && (
        <p className="mt-3 rounded-xl border border-yellow-500/30 bg-yellow-500/5 px-3 py-2 text-xs text-white/65">
          Ang DevEx ay nangangailangan ng hindi bababa sa {DEVEX_MINIMUM_ROBUX.toLocaleString("en-US")}{" "}
          kinitang Robux para mag-cash-out. Ang halagang dollar sa itaas ay ang rate na inilalapat sa
          halagang ito kung bahagi ito ng kwalipikadong balanse.
        </p>
      )}

      <div className="mt-5">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/40">
          Mabilis na halaga
        </p>
        <div className="flex flex-wrap gap-2">
          {PRESETS.map((p) => (
            <button
              key={p.label}
              type="button"
              onClick={() => {
                setDirection("robuxToUsd");
                setAmount(String(p.robux));
              }}
              className="rounded-full border border-white/15 bg-white px-3 py-1.5 text-xs font-semibold text-white/75 transition hover:border-black hover:text-white"
            >
              {p.label} R$
            </button>
          ))}
        </div>
      </div>

      <p className="mt-5 text-xs leading-relaxed text-white/40">
        Mga tinataya lamang — maaaring magbago ang tunay na halaga dahil sa mga tier ng package ng
        Roblox, buwis, presyo ayon sa rehiyon, at kwalipikasyon sa DevEx. Hindi kami kaanib sa Roblox
        Corporation.
      </p>
    </div>
  );
}