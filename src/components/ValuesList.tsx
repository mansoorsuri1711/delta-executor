"use client";

import { useMemo, useState } from "react";
import {
  BLOX_FRUITS,
  FruitRarity,
  formatValue,
} from "@/lib/bloxFruits";

const RARITIES: Array<FruitRarity | "All"> = [
  "All",
  "Mythical",
  "Legendary",
  "Rare",
  "Uncommon",
  "Common",
];

export default function ValuesList() {
  const [query, setQuery] = useState("");
  const [rarity, setRarity] = useState<FruitRarity | "All">("All");
  const [mode, setMode] = useState<"physical" | "permanent">("physical");

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    return BLOX_FRUITS.filter((f) => {
      if (rarity !== "All" && f.rarity !== rarity) return false;
      if (!q) return true;
      return (
        f.name.toLowerCase().includes(q) ||
        f.id.includes(q) ||
        f.rarity.toLowerCase().includes(q)
      );
    }).sort((a, b) => {
      const av = mode === "permanent" ? a.permanentValue : a.physicalValue;
      const bv = mode === "permanent" ? b.permanentValue : b.physicalValue;
      return bv - av;
    });
  }, [query, rarity, mode]);

  return (
    <div>
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search fruits…"
          className="calc-input w-full rounded-2xl border border-ink/12 bg-white px-4 py-3 text-base font-semibold text-ink outline-none transition placeholder:text-ink/30 focus:border-teal/60 focus:ring-4 focus:ring-teal/15 sm:max-w-xs"
        />
        <div className="flex flex-wrap gap-2">
          {RARITIES.map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRarity(r)}
              className={`rounded-xl px-3 py-2 text-xs font-semibold transition ${
                rarity === r
                  ? "bg-teal text-white"
                  : "bg-ink/5 text-ink/65 hover:bg-ink/10"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
        <div className="flex gap-2 sm:ml-auto">
          {(["physical", "permanent"] as const).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setMode(m)}
              className={`rounded-xl px-3 py-2 text-xs font-semibold capitalize transition ${
                mode === m
                  ? "bg-orange/15 text-orange-deep"
                  : "bg-ink/5 text-ink/65 hover:bg-ink/10"
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-ink/10 bg-white shadow-sm">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-ink/10 bg-[#F7FBFA] text-xs uppercase tracking-wide text-ink/50">
            <tr>
              <th className="px-4 py-3 font-semibold">Fruit</th>
              <th className="px-4 py-3 font-semibold">Rarity</th>
              <th className="px-4 py-3 font-semibold">Value</th>
              <th className="px-4 py-3 font-semibold">Demand</th>
              <th className="px-4 py-3 font-semibold">Beli</th>
              <th className="px-4 py-3 font-semibold">Trend</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((fruit) => (
              <tr key={fruit.id} className="border-b border-ink/5 last:border-0">
                <td className="px-4 py-3 font-semibold text-ink">{fruit.name}</td>
                <td className="px-4 py-3 text-ink/65">{fruit.rarity}</td>
                <td className="px-4 py-3 font-bold text-teal-deep">
                  {formatValue(
                    mode === "permanent" ? fruit.permanentValue : fruit.physicalValue
                  )}
                </td>
                <td className="px-4 py-3 text-ink/80">{fruit.demand}/10</td>
                <td className="px-4 py-3 text-ink/65">{formatValue(fruit.beliPrice)}</td>
                <td className="px-4 py-3 text-ink/65">{fruit.trend}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-ink/45">
        Showing {rows.length} fruits · {mode} values · community averages for guidance only
      </p>
    </div>
  );
}
