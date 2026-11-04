"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  BLOX_FRUITS,
  BloxFruit,
  ValueMode,
  formatValue,
  fruitValue,
} from "@/lib/bloxFruits";
import { TradeSlot, compareTrade, searchFruits } from "@/lib/tradeMath";

const MAX_PER_SIDE = 4;

type SideKey = "you" | "them";

const RARITY_DOT: Record<string, string> = {
  Mythical: "bg-[#A855F7]",
  Legendary: "bg-orange",
  Rare: "bg-sky-500",
  Uncommon: "bg-teal",
  Common: "bg-ink/30",
};

function resultStyles(result: string) {
  if (result === "Win")
    return {
      box: "border-emerald/35 bg-gradient-to-b from-emerald/15 to-emerald/5 text-emerald-deep",
      pill: "bg-emerald text-white",
    };
  if (result === "Lose")
    return {
      box: "border-coral-deep/30 bg-gradient-to-b from-coral/15 to-coral/5 text-coral-deep",
      pill: "bg-coral-deep text-white",
    };
  if (result === "Fair")
    return {
      box: "border-teal/35 bg-gradient-to-b from-teal/15 to-teal/5 text-teal-deep",
      pill: "bg-teal text-white",
    };
  return {
    box: "border-ink/10 bg-[#F7FBFA] text-ink/55",
    pill: "bg-ink/15 text-ink/60",
  };
}

function FruitAvatar({ name, rarity }: { name: string; rarity: string }) {
  const initial = name.replace(/[^A-Za-z]/g, "").slice(0, 1).toUpperCase() || "?";
  return (
    <span
      className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-ink/[0.04] text-sm font-bold text-ink ring-1 ring-ink/8"
      aria-hidden
    >
      {initial}
      <span
        className={`absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full ring-2 ring-white ${RARITY_DOT[rarity] || "bg-ink/30"}`}
      />
    </span>
  );
}

function SidePanel({
  side,
  title,
  hint,
  slots,
  active,
  full,
  onSelect,
  onAddClick,
  onRemove,
  onToggleMode,
  totalsLabel,
}: {
  side: SideKey;
  title: string;
  hint: string;
  slots: TradeSlot[];
  active: boolean;
  full: boolean;
  onSelect: () => void;
  onAddClick: () => void;
  onRemove: (index: number) => void;
  onToggleMode: (index: number) => void;
  totalsLabel: { value: string; demand: string; beli: string };
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect();
        }
      }}
      className={`relative rounded-2xl border-2 p-3.5 transition sm:p-4 ${
        active
          ? side === "you"
            ? "border-teal bg-teal/[0.04] shadow-[0_12px_40px_-24px_rgba(139,92,246,0.55)]"
            : "border-orange bg-orange/[0.04] shadow-[0_12px_40px_-24px_rgba(234,140,0,0.45)]"
          : "border-ink/10 bg-[#F7FBFA] hover:border-ink/20"
      }`}
      aria-pressed={active}
      aria-label={`${title}. ${active ? "Selected for adding fruits." : "Click to add fruits here."}`}
    >
      {active && (
        <span
          className={`absolute -top-2.5 left-4 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white ${
            side === "you" ? "bg-teal" : "bg-orange"
          }`}
        >
          Adding here
        </span>
      )}

      <div className="mb-3 flex items-start justify-between gap-2">
        <div>
          <h3 className="font-display text-lg font-bold text-ink">{title}</h3>
          <p className="text-xs text-ink/50">{hint}</p>
        </div>
        <span
          className={`rounded-lg px-2 py-1 text-xs font-bold tabular-nums ${
            full ? "bg-coral/15 text-coral-deep" : "bg-white text-ink/55 ring-1 ring-ink/8"
          }`}
        >
          {slots.length}/{MAX_PER_SIDE}
        </span>
      </div>

      <div className="mb-3 grid grid-cols-3 gap-1.5 text-center">
        <div className="rounded-xl bg-white px-1.5 py-2 ring-1 ring-ink/6">
          <p className="text-[9px] font-semibold uppercase tracking-wide text-ink/40">Value</p>
          <p className="text-sm font-bold tabular-nums text-teal-deep">{totalsLabel.value}</p>
        </div>
        <div className="rounded-xl bg-white px-1.5 py-2 ring-1 ring-ink/6">
          <p className="text-[9px] font-semibold uppercase tracking-wide text-ink/40">Demand</p>
          <p className="text-sm font-bold tabular-nums text-ink">{totalsLabel.demand}</p>
        </div>
        <div className="rounded-xl bg-white px-1.5 py-2 ring-1 ring-ink/6">
          <p className="text-[9px] font-semibold uppercase tracking-wide text-ink/40">Beli</p>
          <p className="text-sm font-bold tabular-nums text-orange-deep">{totalsLabel.beli}</p>
        </div>
      </div>

      <ul className="mb-3 min-h-[7.5rem] space-y-1.5">
        {slots.length === 0 ? (
          <li className="flex h-[7.5rem] flex-col items-center justify-center rounded-xl border border-dashed border-ink/15 bg-white/80 px-3 text-center">
            <p className="text-sm font-semibold text-ink/55">No fruits yet</p>
            <p className="mt-1 text-xs text-ink/40">
              {active ? "Search below or tap a quick-add" : "Tap this card, then search"}
            </p>
          </li>
        ) : (
          slots.map((slot, index) => {
            const fruit = BLOX_FRUITS.find((f) => f.id === slot.fruitId);
            if (!fruit) return null;
            return (
              <li
                key={`${side}-${slot.fruitId}-${index}`}
                className="flex items-center gap-2 rounded-xl bg-white px-2.5 py-2 ring-1 ring-ink/8"
                onClick={(e) => e.stopPropagation()}
              >
                <FruitAvatar name={fruit.name} rarity={fruit.rarity} />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-ink">{fruit.name}</p>
                  <p className="text-[11px] text-ink/45">
                    {formatValue(fruitValue(fruit, slot.mode))} · D{fruit.demand}/10
                  </p>
                </div>
                <div
                  className="flex shrink-0 rounded-lg bg-ink/[0.04] p-0.5"
                  role="group"
                  aria-label="Physical or permanent"
                >
                  {(["physical", "permanent"] as ValueMode[]).map((mode) => (
                    <button
                      key={mode}
                      type="button"
                      onClick={() => {
                        if (slot.mode !== mode) onToggleMode(index);
                      }}
                      className={`rounded-md px-2 py-1 text-[10px] font-bold uppercase tracking-wide transition ${
                        slot.mode === mode
                          ? mode === "permanent"
                            ? "bg-orange text-white"
                            : "bg-teal text-white"
                          : "text-ink/45 hover:text-ink"
                      }`}
                    >
                      {mode === "permanent" ? "Perm" : "Phys"}
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => onRemove(index)}
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-ink/35 transition hover:bg-coral/10 hover:text-coral-deep"
                  aria-label={`Remove ${fruit.name}`}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                    <path
                      d="M3 3l8 8M11 3l-8 8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </li>
            );
          })
        )}
      </ul>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onSelect();
          onAddClick();
        }}
        disabled={full}
        className={`flex w-full items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-sm font-semibold transition ${
          full
            ? "cursor-not-allowed bg-ink/5 text-ink/35"
            : active
              ? side === "you"
                ? "bg-teal text-white hover:bg-teal-deep"
                : "bg-orange text-white hover:bg-orange-deep"
              : "bg-white text-ink/70 ring-1 ring-ink/10 hover:bg-ink/5"
        }`}
      >
        <span className="text-lg leading-none">+</span>
        {full ? "Side full (4/4)" : active ? "Search to add fruit" : "Select & add fruit"}
      </button>
    </div>
  );
}

export default function BloxFruitCalculator({
  id = "calculator",
  title = "Blox Fruit Calculator",
}: {
  id?: string;
  title?: string;
}) {
  const [you, setYou] = useState<TradeSlot[]>([]);
  const [them, setThem] = useState<TradeSlot[]>([]);
  const [activeSide, setActiveSide] = useState<SideKey>("you");
  const [query, setQuery] = useState("");
  const [defaultMode, setDefaultMode] = useState<ValueMode>("physical");
  const [toast, setToast] = useState<string | null>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const comparison = useMemo(() => compareTrade(you, them), [you, them]);
  const styles = resultStyles(comparison.result);

  const matches = useMemo(() => {
    if (!query.trim()) return [];
    return searchFruits(query).slice(0, 8);
  }, [query]);

  useEffect(() => {
    if (!toast) return;
    const t = window.setTimeout(() => setToast(null), 2200);
    return () => window.clearTimeout(t);
  }, [toast]);

  const focusSearch = () => {
    window.requestAnimationFrame(() => searchRef.current?.focus());
  };

  const addFruit = (fruit: BloxFruit, side: SideKey = activeSide) => {
    const current = side === "you" ? you : them;
    const setter = side === "you" ? setYou : setThem;
    if (current.length >= MAX_PER_SIDE) {
      setToast(`${side === "you" ? "Your offer" : "You receive"} is full (max ${MAX_PER_SIDE}).`);
      return;
    }
    setter([...current, { fruitId: fruit.id, mode: defaultMode }]);
    setQuery("");
    // When a side fills up, move focus to the other side automatically
    if (current.length + 1 >= MAX_PER_SIDE) {
      const other: SideKey = side === "you" ? "them" : "you";
      if ((other === "you" ? you : them).length < MAX_PER_SIDE) {
        setActiveSide(other);
        setToast(`Switched to ${other === "you" ? "Your offer" : "You receive"}`);
      }
    }
  };

  const removeFrom = (side: SideKey, index: number) => {
    const setter = side === "you" ? setYou : setThem;
    const current = side === "you" ? you : them;
    setter(current.filter((_, i) => i !== index));
  };

  const toggleMode = (side: SideKey, index: number) => {
    const setter = side === "you" ? setYou : setThem;
    const current = side === "you" ? you : them;
    setter(
      current.map((slot, i) =>
        i === index
          ? { ...slot, mode: slot.mode === "physical" ? "permanent" : "physical" }
          : slot
      )
    );
  };

  const swapSides = () => {
    setYou(them);
    setThem(you);
    setActiveSide((s) => (s === "you" ? "them" : "you"));
  };

  const reset = () => {
    setYou([]);
    setThem([]);
    setQuery("");
    setActiveSide("you");
    setToast("Trade cleared");
  };

  const quickAdds = BLOX_FRUITS.filter((f) => f.demand >= 8).slice(0, 8);
  const activeLabel = activeSide === "you" ? "Your offer" : "You receive";
  const activeFull = (activeSide === "you" ? you : them).length >= MAX_PER_SIDE;

  return (
    <div
      id={id}
      className="calc-shell relative scroll-mt-20 overflow-hidden rounded-[1.75rem] border border-ink/10 bg-white p-1 shadow-[0_28px_70px_-40px_rgba(139,92,246,0.4)]"
    >
      <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-violet/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-10 h-52 w-52 rounded-full bg-[#C4B5FD]/20 blur-3xl" />

      <div className="relative rounded-[1.4rem] bg-white p-3.5 sm:p-5 md:p-6">
        {/* Header */}
        <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-deep">
              Trade value · W/F/L
            </p>
            <h2 className="mt-0.5 font-display text-xl font-bold text-ink sm:text-2xl md:text-3xl">
              {title}
            </h2>
            <p className="mt-1 max-w-xl text-sm text-ink/55">
              Tap a side → search a fruit → read Win, Fair, or Lose.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={swapSides}
              className="inline-flex items-center gap-1.5 rounded-xl border border-ink/10 bg-white px-3 py-2 text-sm font-semibold text-ink/70 transition hover:bg-ink/5"
              title="Swap both sides"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path
                  d="M2 4.5h8.5M8.5 2l2.5 2.5L8.5 7M12 9.5H3.5M5.5 7L3 9.5 5.5 12"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Swap
            </button>
            <button
              type="button"
              onClick={reset}
              className="rounded-xl border border-ink/10 bg-ink/5 px-3 py-2 text-sm font-semibold text-ink/70 transition hover:bg-ink/10"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Step cue + mode */}
        <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-ink/65">
            <span className="font-semibold text-ink">Step 1:</span> Select a side ·{" "}
            <span className="font-semibold text-ink">Step 2:</span> Add fruits
          </p>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-semibold uppercase tracking-wide text-ink/40">
              New items as
            </span>
            <div className="flex rounded-xl bg-ink/[0.04] p-0.5" role="group" aria-label="Default fruit type">
              {(["physical", "permanent"] as ValueMode[]).map((mode) => (
                <button
                  key={mode}
                  type="button"
                  onClick={() => setDefaultMode(mode)}
                  className={`rounded-[0.65rem] px-3 py-1.5 text-xs font-bold capitalize transition ${
                    defaultMode === mode
                      ? mode === "permanent"
                        ? "bg-orange text-white shadow-sm"
                        : "bg-teal text-white shadow-sm"
                      : "text-ink/55 hover:text-ink"
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Two sides + VS */}
        <div className="grid items-stretch gap-3 lg:grid-cols-[1fr_auto_1fr]">
          <SidePanel
            side="you"
            title="Your offer"
            hint="Fruits you give away"
            slots={you}
            active={activeSide === "you"}
            full={you.length >= MAX_PER_SIDE}
            onSelect={() => setActiveSide("you")}
            onAddClick={focusSearch}
            onRemove={(i) => removeFrom("you", i)}
            onToggleMode={(i) => toggleMode("you", i)}
            totalsLabel={{
              value: formatValue(comparison.you.value),
              demand:
                comparison.you.count > 0
                  ? `${comparison.you.demandAvg.toFixed(1)}/10`
                  : "—",
              beli: formatValue(comparison.you.beli),
            }}
          />

          <div className="flex flex-row items-center justify-center gap-3 lg:flex-col lg:py-6">
            <div
              className={`flex min-w-[5.5rem] flex-col items-center justify-center rounded-2xl border px-3 py-3 text-center ${styles.box}`}
              aria-live="polite"
            >
              <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${styles.pill}`}>
                {comparison.result === "Empty" ? "WFL" : comparison.result}
              </span>
              {comparison.result !== "Empty" ? (
                <>
                  <p className="mt-1.5 text-xs font-semibold opacity-80">
                    {comparison.difference >= 0 ? "+" : "−"}
                    {formatValue(Math.abs(comparison.difference))}
                  </p>
                  <p className="text-[10px] opacity-60">
                    {(Math.abs(comparison.percentDiff) * 100).toFixed(0)}%
                  </p>
                </>
              ) : (
                <p className="mt-1.5 text-[10px] font-medium opacity-70">vs</p>
              )}
            </div>
          </div>

          <SidePanel
            side="them"
            title="You receive"
            hint="Fruits you get back"
            slots={them}
            active={activeSide === "them"}
            full={them.length >= MAX_PER_SIDE}
            onSelect={() => setActiveSide("them")}
            onAddClick={focusSearch}
            onRemove={(i) => removeFrom("them", i)}
            onToggleMode={(i) => toggleMode("them", i)}
            totalsLabel={{
              value: formatValue(comparison.them.value),
              demand:
                comparison.them.count > 0
                  ? `${comparison.them.demandAvg.toFixed(1)}/10`
                  : "—",
              beli: formatValue(comparison.them.beli),
            }}
          />
        </div>

        {/* Search */}
        <div className="relative mt-4">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold text-white ${
                activeSide === "you" ? "bg-teal" : "bg-orange"
              }`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-white/90" />
              Adding to {activeLabel}
            </span>
            {activeFull && (
              <span className="text-xs font-semibold text-coral-deep">
                This side is full — pick the other side or remove a fruit
              </span>
            )}
          </div>
          <label className="sr-only" htmlFor="fruit-search">
            Search fruits to add to {activeLabel}
          </label>
          <div className="relative">
            <svg
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/35"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden
            >
              <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.8" />
              <path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            <input
              ref={searchRef}
              id="fruit-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={`Search fruits for ${activeLabel}…`}
              className={`calc-input w-full rounded-2xl border bg-[#F4F8F7] py-3.5 pl-10 pr-4 text-base font-semibold text-ink outline-none transition placeholder:text-ink/30 hover:border-ink/20 focus:bg-white focus:ring-4 ${
                activeSide === "you"
                  ? "border-teal/25 focus:border-teal/60 focus:ring-teal/15"
                  : "border-orange/25 focus:border-orange/60 focus:ring-orange/15"
              }`}
              autoComplete="off"
              disabled={activeFull}
            />
          </div>

          {query.trim().length > 0 && (
            <ul className="absolute z-30 mt-2 max-h-72 w-full overflow-auto rounded-2xl border border-ink/10 bg-white p-1.5 shadow-2xl">
              {matches.length === 0 ? (
                <li className="px-3 py-3 text-sm text-ink/50">No fruits match “{query.trim()}”.</li>
              ) : (
                matches.map((fruit) => (
                  <li key={fruit.id}>
                    <button
                      type="button"
                      disabled={activeFull}
                      onClick={() => addFruit(fruit)}
                      className="flex w-full items-center gap-3 rounded-xl px-2.5 py-2.5 text-left transition hover:bg-teal/10 disabled:opacity-40"
                    >
                      <FruitAvatar name={fruit.name} rarity={fruit.rarity} />
                      <span className="min-w-0 flex-1">
                        <span className="block truncate font-semibold text-ink">{fruit.name}</span>
                        <span className="text-xs text-ink/45">
                          {fruit.rarity} · Demand {fruit.demand}/10 · Beli{" "}
                          {formatValue(fruit.beliPrice)}
                        </span>
                      </span>
                      <span className="shrink-0 text-sm font-bold text-teal-deep">
                        {formatValue(
                          defaultMode === "permanent"
                            ? fruit.permanentValue
                            : fruit.physicalValue
                        )}
                      </span>
                    </button>
                  </li>
                ))
              )}
            </ul>
          )}
        </div>

        {/* Quick adds */}
        <div className="mt-3">
          <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-wide text-ink/40">
            Popular fruits
          </p>
          <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {quickAdds.map((fruit) => (
              <button
                key={fruit.id}
                type="button"
                onClick={() => addFruit(fruit)}
                disabled={activeFull}
                className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-ink/10 bg-white px-3 py-1.5 text-xs font-semibold text-ink/70 transition hover:border-teal/40 hover:text-teal-deep disabled:opacity-40"
              >
                <span className={`h-1.5 w-1.5 rounded-full ${RARITY_DOT[fruit.rarity]}`} />
                {fruit.name}
                <span className="text-ink/35">{formatValue(fruit.physicalValue)}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Full result summary */}
        <div className={`mt-4 rounded-2xl border px-4 py-4 text-center sm:px-5 ${styles.box}`} aria-live="polite">
          {comparison.result === "Empty" ? (
            <>
              <p className="font-display text-2xl font-bold text-ink/45">Ready when you are</p>
              <p className="mx-auto mt-1 max-w-md text-sm text-ink/50">
                Add at least one fruit on each side to unlock Win / Fair / Lose.
              </p>
            </>
          ) : (
            <>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] opacity-70">
                Trade result
              </p>
              <p className="mt-1 font-display text-4xl font-bold sm:text-5xl">
                {comparison.result}
              </p>
              <p className="mx-auto mt-2 max-w-xl text-sm sm:text-base opacity-90">
                {comparison.summary}
              </p>
              <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold opacity-75">
                <span className="rounded-full bg-white/70 px-2.5 py-1 ring-1 ring-black/5">
                  You {formatValue(comparison.you.value)}
                </span>
                <span aria-hidden>→</span>
                <span className="rounded-full bg-white/70 px-2.5 py-1 ring-1 ring-black/5">
                  Get {formatValue(comparison.them.value)}
                </span>
                <span className="rounded-full bg-white/70 px-2.5 py-1 ring-1 ring-black/5">
                  Diff {comparison.difference >= 0 ? "+" : "−"}
                  {formatValue(Math.abs(comparison.difference))} (
                  {(Math.abs(comparison.percentDiff) * 100).toFixed(1)}%)
                </span>
              </div>
            </>
          )}
        </div>

        <p className="mt-3 text-center text-[11px] text-ink/40">
          Community trade averages for guidance only — not official Blox Fruits prices.
        </p>

        {toast && (
          <div
            className="pointer-events-none absolute bottom-4 left-1/2 z-40 -translate-x-1/2 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white shadow-lg"
            role="status"
          >
            {toast}
          </div>
        )}
      </div>
    </div>
  );
}
