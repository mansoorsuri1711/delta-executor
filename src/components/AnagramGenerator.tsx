"use client";

import { useEffect, useMemo, useState, useTransition } from "react";
import {
  AnagramHit,
  MultiWordHit,
  buildSignatureIndex,
  findAnagrams,
  findMultiWordAnagrams,
  formatLetterTiles,
  shuffleLetters,
} from "@/lib/anagramEngine";

export type GeneratorMode = "generator" | "solver" | "names";

export type GeneratorStrings = {
  inputLabel: string;
  inputPlaceholder: string;
  lettersHint: string;
  shuffle: string;
  help: string;
  tryPrefix: string;
  exactOnly: string;
  multiWord: string;
  loadingDict: string;
  loadError: string;
  exactFound: string;
  wordsFromLetters: string;
  noMatches: string;
  shorterWords: string;
  multiWordHeading: string;
  sameLetters: string;
  copied: string;
  updating: string;
};

const DEFAULT_STRINGS: GeneratorStrings = {
  inputLabel: "Enter a word or letters",
  inputPlaceholder: "TYPE HERE",
  lettersHint: "Letters appear here…",
  shuffle: "Shuffle",
  help: "Spaces and punctuation are ignored. Results run in your browser.",
  tryPrefix: "Try",
  exactOnly: "Exact anagrams only (same letter count)",
  multiWord: "Include multi-word phrases",
  loadingDict: "Loading dictionary…",
  loadError: "Could not load the word list. Refresh the page to try again.",
  exactFound: "exact anagrams found",
  wordsFromLetters: "words from these letters",
  noMatches: "No matches yet — try another word or turn off exact-only.",
  shorterWords: "Shorter words from these letters",
  multiWordHeading: "Multi-word anagrams",
  sameLetters: "same letters",
  copied: "copied",
  updating: "Updating…",
};

type Props = {
  mode?: GeneratorMode;
  defaultValue?: string;
  heading?: string;
  subheading?: string;
  localeLabel?: string;
  strings?: Partial<GeneratorStrings>;
};

const EXAMPLES: Record<GeneratorMode, string[]> = {
  generator: ["LISTEN", "CINEMA", "DORMITORY", "ASTRONOMER", "ELVIS"],
  solver: ["RTEST", "AELPST", "OREST", "AINRT", "EILNST"],
  names: ["CLINT EASTWOOD", "BRITNEY SPEARS", "TOM MARVOLO RIDDLE", "WILLIAM SHAKESPEARE"],
};

export default function AnagramGenerator({
  mode = "generator",
  defaultValue = "LISTEN",
  heading,
  subheading,
  localeLabel = "English (US)",
  strings,
}: Props) {
  const s = { ...DEFAULT_STRINGS, ...strings };
  const [input, setInput] = useState(defaultValue);
  const [words, setWords] = useState<string[]>([]);
  const [freq, setFreq] = useState<Record<string, number>>({});
  const [ready, setReady] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [includeMulti, setIncludeMulti] = useState(mode === "names");
  const [exactOnly, setExactOnly] = useState(mode === "generator");
  const [results, setResults] = useState<AnagramHit[]>([]);
  const [phrases, setPhrases] = useState<MultiWordHit[]>([]);
  const [copied, setCopied] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const signatureIndex = useMemo(
    () => (words.length ? buildSignatureIndex(words) : new Map<string, string[]>()),
    [words],
  );

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const [wordsRes, freqRes] = await Promise.all([
          fetch("/data/english-words.txt"),
          fetch("/data/word-freq.json"),
        ]);
        if (!wordsRes.ok) throw new Error("words");
        const text = await wordsRes.text();
        const list = text
          .split(/\n+/)
          .map((w) => w.trim().toLowerCase())
          .filter((w) => w.length >= 2);
        let freqMap: Record<string, number> = {};
        if (freqRes.ok) {
          freqMap = (await freqRes.json()) as Record<string, number>;
        }
        if (!cancelled) {
          setWords(list);
          setFreq(freqMap);
          setReady(true);
        }
      } catch {
        if (!cancelled) setLoadError(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!ready) return;
    const letters = input.replace(/[^a-zA-Z]/g, "");
    if (!letters) {
      setResults([]);
      setPhrases([]);
      return;
    }

    startTransition(() => {
      const hits = findAnagrams(input, words, signatureIndex, {
        exactOnly: mode === "solver" ? false : exactOnly,
        minLength: mode === "solver" ? 2 : 3,
        limit: mode === "solver" ? 250 : 120,
        freq,
      });
      setResults(hits);

      const wantMulti = includeMulti || mode === "names";
      if (wantMulti && letters.replace(/\s/g, "").length >= 6) {
        setPhrases(
          findMultiWordAnagrams(input, words, {
            maxPhrases: 36,
            maxWords: mode === "names" ? 4 : 3,
            freq,
          }),
        );
      } else {
        setPhrases([]);
      }
    });
  }, [input, ready, words, signatureIndex, exactOnly, includeMulti, mode, freq]);

  const tiles = formatLetterTiles(input);
  const exactHits = results.filter((r) => r.exact);
  const subHits = results.filter((r) => !r.exact);
  const title =
    heading ||
    (mode === "solver"
      ? "Anagram solver"
      : mode === "names"
        ? "Name anagram generator"
        : "Anagram generator");

  const resultCountLabel = (() => {
    if (isPending) return s.updating;
    if (exactHits.length > 0) return `${exactHits.length} ${s.exactFound}`;
    if (subHits.length > 0) return `${subHits.length} ${s.wordsFromLetters}`;
    if (phrases.length > 0) return `${phrases.length} ${s.multiWordHeading.toLowerCase()}`;
    return s.noMatches;
  })();

  async function copyText(value: string) {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(value);
      setTimeout(() => setCopied(null), 1400);
    } catch {
      /* ignore */
    }
  }

  return (
    <div
      id="generator"
      className="rounded-3xl border border-ink/10 bg-white p-5 shadow-[0_24px_60px_-28px_rgba(20,22,61,0.35)] sm:p-8"
    >
      <div className="mb-6 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">{title}</h2>
          <p className="mt-1 text-sm text-ink/50">{subheading || "anagramgenerator.app"}</p>
        </div>
        <span className="rounded-full border border-ink/8 bg-[#F7F6FB] px-3 py-1 text-xs font-semibold text-ink/55">
          {localeLabel}
        </span>
      </div>

      <label htmlFor="anagram-input" className="mb-2 block text-sm font-semibold text-ink">
        {s.inputLabel}
      </label>

      <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <input
            id="anagram-input"
            value={input}
            onChange={(e) => setInput(e.target.value.toUpperCase())}
            placeholder={s.inputPlaceholder}
            className="w-full rounded-2xl border border-ink/10 bg-[#F4F3FA] px-4 py-3.5 text-base font-semibold uppercase tracking-[0.08em] text-ink outline-none transition placeholder:normal-case placeholder:tracking-normal placeholder:text-ink/35 focus:border-pink/35 focus:bg-white focus:ring-4 focus:ring-pink/10"
            autoComplete="off"
            spellCheck={false}
            aria-describedby="anagram-help"
          />
        </div>
        <button
          type="button"
          onClick={() => setInput(shuffleLetters(input) || input)}
          className="inline-flex items-center justify-center gap-2 rounded-2xl border border-ink/12 bg-white px-4 py-3.5 text-sm font-semibold text-ink transition hover:border-pink/35 hover:bg-blush hover:text-pink-deep sm:shrink-0"
        >
          <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4" fill="none">
            <path
              d="M2 4h3.5L8 6.5 10.5 4H14M2 12h3.5L8 9.5 10.5 12H14M12.5 2.5 14 4l-1.5 1.5M12.5 10.5 14 12l-1.5 1.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {s.shuffle}
        </button>
      </div>

      {tiles.length > 0 ? (
        <div className="mt-3 flex flex-wrap items-center gap-1.5" aria-hidden="true">
          <span className="mr-1 text-[11px] font-semibold uppercase tracking-wide text-ink/40">
            Letters
          </span>
          {tiles.map((ch, i) => (
            <span key={`${ch}-${i}`} className="letter-tile letter-tile-soft">
              {ch}
            </span>
          ))}
        </div>
      ) : null}

      <p id="anagram-help" className="mt-2.5 text-xs leading-relaxed text-ink/45">
        {s.help}
      </p>

      <div className="mt-5">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-ink/40">
          {s.tryPrefix}
        </p>
        <div className="flex flex-wrap gap-2">
          {EXAMPLES[mode].map((ex) => {
            const active = input.replace(/\s+/g, "") === ex.replace(/\s+/g, "");
            return (
              <button
                key={ex}
                type="button"
                onClick={() => setInput(ex)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                  active
                    ? "bg-indigo-deep text-white"
                    : "border border-ink/10 bg-white text-ink/70 hover:border-pink/40 hover:text-pink-deep"
                }`}
              >
                {ex}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {mode !== "solver" && (
          <button
            type="button"
            onClick={() => setExactOnly((v) => !v)}
            aria-pressed={exactOnly}
            className={`rounded-full px-3.5 py-2 text-xs font-semibold transition sm:text-sm ${
              exactOnly
                ? "bg-pink/12 text-pink-deep ring-1 ring-pink/25"
                : "bg-[#F7F6FB] text-ink/65 ring-1 ring-ink/8 hover:text-ink"
            }`}
          >
            {exactOnly ? "✓ " : ""}
            {s.exactOnly}
          </button>
        )}
        <button
          type="button"
          onClick={() => setIncludeMulti((v) => !v)}
          aria-pressed={includeMulti}
          className={`rounded-full px-3.5 py-2 text-xs font-semibold transition sm:text-sm ${
            includeMulti
              ? "bg-pink/12 text-pink-deep ring-1 ring-pink/25"
              : "bg-[#F7F6FB] text-ink/65 ring-1 ring-ink/8 hover:text-ink"
          }`}
        >
          {includeMulti ? "✓ " : ""}
          {s.multiWord}
        </button>
      </div>

      <div className="mt-7 rounded-2xl border border-ink/8 bg-[#FAFAFC] p-4 sm:p-5">
        {!ready && !loadError && (
          <p className="text-sm font-medium text-ink/55">{s.loadingDict}</p>
        )}
        {loadError && (
          <p className="text-sm font-medium text-pink-deep">{s.loadError}</p>
        )}
        {ready && (
          <>
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
              <p
                className={`text-sm font-semibold ${
                  exactHits.length || subHits.length || phrases.length
                    ? "text-ink"
                    : "text-ink/50"
                }`}
              >
                {resultCountLabel}
              </p>
              {(exactHits.length > 0 || phrases.length > 0) && (
                <span className="text-xs text-ink/40">Tap a result to copy</span>
              )}
            </div>

            {exactHits.length > 0 && (
              <ul className="mb-5 grid gap-2 sm:grid-cols-2">
                {exactHits.map((hit, idx) => {
                  const value = hit.word.toUpperCase();
                  const isCopied = copied === value;
                  return (
                    <li
                      key={hit.word}
                      className="animate-tile-pop"
                      style={{ animationDelay: `${Math.min(idx, 8) * 40}ms` }}
                    >
                      <button
                        type="button"
                        onClick={() => copyText(value)}
                        aria-label={`Copy ${hit.word}`}
                        className={`group flex w-full items-center justify-between gap-3 rounded-2xl border bg-white px-3 py-3 text-left transition ${
                          isCopied
                            ? "border-pink/40 ring-2 ring-pink/15"
                            : "border-ink/8 hover:border-pink/30 hover:shadow-[0_10px_24px_-18px_rgba(20,22,61,0.35)]"
                        }`}
                      >
                        <span className="inline-flex flex-wrap gap-1">
                          {value.split("").map((ch, i) => (
                            <span key={`${hit.word}-${i}`} className="letter-tile letter-tile-soft">
                              {ch}
                            </span>
                          ))}
                        </span>
                        <span
                          className={`shrink-0 text-[11px] font-semibold uppercase tracking-wide ${
                            isCopied ? "text-pink-deep" : "text-ink/30 group-hover:text-ink/50"
                          }`}
                        >
                          {isCopied ? s.copied : "Copy"}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}

            {subHits.length > 0 && (
              <div className="mb-5">
                <h3 className="mb-3 text-sm font-bold text-ink">{s.shorterWords}</h3>
                <div className="flex flex-wrap gap-2">
                  {subHits.slice(0, mode === "solver" ? 120 : 60).map((hit) => {
                    const value = hit.word.toUpperCase();
                    const isCopied = copied === value;
                    return (
                      <button
                        key={hit.word}
                        type="button"
                        onClick={() => copyText(value)}
                        className={`rounded-xl border px-2.5 py-1.5 text-sm font-semibold transition ${
                          isCopied
                            ? "border-pink/40 bg-blush text-pink-deep"
                            : "border-ink/10 bg-white text-ink hover:border-pink/35"
                        }`}
                      >
                        {hit.word}
                        <span className="ml-1.5 text-[10px] font-medium text-ink/35">{hit.length}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {phrases.length > 0 && (
              <div>
                <h3 className="mb-3 text-sm font-bold text-ink">{s.multiWordHeading}</h3>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {phrases.map((p) => {
                    const value = p.phrase.toUpperCase();
                    const isCopied = copied === value;
                    return (
                      <li key={p.phrase}>
                        <button
                          type="button"
                          onClick={() => copyText(value)}
                          className={`w-full rounded-xl border px-3 py-2.5 text-left text-sm font-semibold transition ${
                            isCopied
                              ? "border-pink/40 bg-blush text-pink-deep"
                              : "border-ink/10 bg-white text-indigo-deep hover:border-pink/35"
                          }`}
                        >
                          {value}
                          {isCopied ? (
                            <span className="ml-2 text-xs font-medium normal-case tracking-normal">
                              · {s.copied}
                            </span>
                          ) : null}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
