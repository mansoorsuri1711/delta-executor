import {
  BLOX_FRUITS,
  BloxFruit,
  ValueMode,
  formatValue,
  fruitValue,
} from "@/lib/bloxFruits";

export type TradeSlot = {
  fruitId: string;
  mode: ValueMode;
};

export type WflResult = "Win" | "Fair" | "Lose" | "Empty";

export type TradeTotals = {
  value: number;
  beli: number;
  demandSum: number;
  demandAvg: number;
  count: number;
};

export type TradeComparison = {
  you: TradeTotals;
  them: TradeTotals;
  difference: number;
  percentDiff: number;
  result: WflResult;
  summary: string;
};

const FAIR_PCT = 0.08; // within 8% = Fair

export function emptyTotals(): TradeTotals {
  return { value: 0, beli: 0, demandSum: 0, demandAvg: 0, count: 0 };
}

export function sumSide(slots: TradeSlot[]): TradeTotals {
  let value = 0;
  let beli = 0;
  let demandSum = 0;
  let count = 0;

  for (const slot of slots) {
    const fruit = BLOX_FRUITS.find((f) => f.id === slot.fruitId);
    if (!fruit) continue;
    value += fruitValue(fruit, slot.mode);
    beli += fruit.beliPrice;
    demandSum += fruit.demand;
    count += 1;
  }

  return {
    value,
    beli,
    demandSum,
    demandAvg: count ? demandSum / count : 0,
    count,
  };
}

export function compareTrade(youSlots: TradeSlot[], themSlots: TradeSlot[]): TradeComparison {
  const you = sumSide(youSlots);
  const them = sumSide(themSlots);

  if (you.count === 0 && them.count === 0) {
    return {
      you,
      them,
      difference: 0,
      percentDiff: 0,
      result: "Empty",
      summary: "Add fruits on both sides to see Win / Fair / Lose.",
    };
  }

  if (you.count === 0 || them.count === 0) {
    return {
      you,
      them,
      difference: them.value - you.value,
      percentDiff: 0,
      result: "Empty",
      summary: "Fill both sides of the trade to calculate W/F/L.",
    };
  }

  const difference = them.value - you.value;
  const baseline = Math.max(you.value, them.value, 1);
  const percentDiff = difference / baseline;

  let result: WflResult = "Fair";
  if (percentDiff > FAIR_PCT) result = "Win";
  else if (percentDiff < -FAIR_PCT) result = "Lose";

  const absLabel = formatValue(Math.abs(difference));
  let summary = "This trade looks roughly fair on trade value.";
  if (result === "Win") {
    summary = `You gain about ${absLabel} in trade value — a Win if demand holds.`;
  } else if (result === "Lose") {
    summary = `You give about ${absLabel} more value than you receive — a Lose on numbers.`;
  }

  // Demand nuance note when values are fair but demand differs
  if (result === "Fair" && you.demandAvg && them.demandAvg) {
    const demandGap = them.demandAvg - you.demandAvg;
    if (demandGap >= 1.5) {
      summary =
        "Values are close, but their side has higher average demand — often easier to re-trade.";
    } else if (demandGap <= -1.5) {
      summary =
        "Values are close, but your side has higher demand — you may want a small add.";
    }
  }

  return { you, them, difference, percentDiff, result, summary };
}

export function searchFruits(query: string): BloxFruit[] {
  const q = query.trim().toLowerCase();
  if (!q) return BLOX_FRUITS;
  return BLOX_FRUITS.filter(
    (f) =>
      f.name.toLowerCase().includes(q) ||
      f.id.includes(q) ||
      f.rarity.toLowerCase().includes(q)
  );
}
