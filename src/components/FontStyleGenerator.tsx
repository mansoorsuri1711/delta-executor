"use client";

import { useMemo, useState } from "react";
import {
  DEFAULT_PREVIEW,
  FONT_STYLES,
  FontStyle,
  STYLE_CATEGORIES,
  StyleCategory,
  getStylesByCategory,
} from "@/lib/fontStyles";

export type FontGeneratorStrings = {
  inputLabel: string;
  inputPlaceholder: string;
  searchLabel: string;
  searchPlaceholder: string;
  categoryAll: string;
  charCount: string;
  wordCount: string;
  copy: string;
  copied: string;
  help: string;
  noResults: string;
  stylesHeading: string;
};

const DEFAULT_STRINGS: FontGeneratorStrings = {
  inputLabel: "Metninizi yazın",
  inputPlaceholder: "Yazı Stilleri",
  searchLabel: "Stil ara",
  searchPlaceholder: "Kalın, kalp, oyun…",
  categoryAll: "Tümü",
  charCount: "Karakter",
  wordCount: "Kelime",
  copy: "Kopyala",
  copied: "Kopyalandı",
  help: "Boşluklar ve Türkçe harfler korunur; desteklenmeyen karakterler olduğu gibi kalır.",
  noResults: "Bu filtreyle stil bulunamadı.",
  stylesHeading: "Yazı stilleri",
};

type Props = {
  defaultValue?: string;
  heading?: string;
  strings?: Partial<FontGeneratorStrings>;
};

function countWords(text: string): number {
  const trimmed = text.trim();
  if (!trimmed) return 0;
  return trimmed.split(/\s+/).filter(Boolean).length;
}

export default function FontStyleGenerator({
  defaultValue = DEFAULT_PREVIEW,
  heading = "Yazı Stilleri Oluşturucu",
  strings,
}: Props) {
  const s = { ...DEFAULT_STRINGS, ...strings };
  const [input, setInput] = useState(defaultValue);
  const [category, setCategory] = useState<StyleCategory | null>(null);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const charCount = [...input].length;
  const wordCount = countWords(input);

  const visibleStyles = useMemo(() => {
    const base: FontStyle[] = category ? getStylesByCategory(category) : FONT_STYLES;
    const q = query.trim().toLowerCase();
    if (!q) return base;
    return base.filter(
      (st) =>
        st.name.toLowerCase().includes(q) ||
        st.category.toLowerCase().includes(q) ||
        st.id.toLowerCase().includes(q),
    );
  }, [category, query]);

  const transformed = useMemo(() => {
    const source = input.length ? input : DEFAULT_PREVIEW;
    return visibleStyles.map((st) => ({
      style: st,
      output: st.transform(source),
    }));
  }, [input, visibleStyles]);

  async function copyOutput(styleId: string, value: string) {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedId(styleId);
      setTimeout(() => setCopiedId(null), 1400);
    } catch {
      /* ignore */
    }
  }

  return (
    <div id="generator" className="bfv-glass-card p-5 sm:p-8">
      <div className="mb-6 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">{heading}</h2>
          <p className="mt-1 text-sm text-white/45">Instagram, TikTok ve biyografi için şık Unicode yazılar</p>
        </div>
        <button
          type="button"
          onClick={() => setShowSearch((v) => !v)}
          className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/65 transition hover:border-pink/40 hover:text-pink"
          aria-pressed={showSearch}
        >
          {showSearch ? "Aramayı gizle" : s.searchLabel}
        </button>
      </div>

      <label htmlFor="font-style-input" className="mb-2 block text-sm font-semibold text-white">
        {s.inputLabel}
      </label>
      <textarea
        id="font-style-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={s.inputPlaceholder}
        rows={3}
        className="w-full resize-y rounded-2xl border border-white/10 bg-black/60 px-4 py-3.5 text-base font-medium text-white outline-none transition placeholder:text-white/30 focus:border-pink/40 focus:ring-4 focus:ring-pink/15"
        spellCheck={false}
        aria-describedby="font-style-help font-style-stats"
      />

      <div
        id="font-style-stats"
        className="mt-3 flex flex-wrap items-center gap-3 text-xs font-semibold text-white/40"
      >
        <span>
          {s.charCount}: <span className="text-white/70">{charCount}</span>
        </span>
        <span aria-hidden="true">·</span>
        <span>
          {s.wordCount}: <span className="text-white/70">{wordCount}</span>
        </span>
      </div>

      <p id="font-style-help" className="mt-2 text-xs leading-relaxed text-white/40">
        {s.help}
      </p>

      {showSearch ? (
        <div className="mt-4">
          <label htmlFor="font-style-search" className="sr-only">
            {s.searchLabel}
          </label>
          <input
            id="font-style-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={s.searchPlaceholder}
            className="w-full rounded-2xl border border-white/10 bg-black/60 px-4 py-2.5 text-sm text-white outline-none transition focus:border-pink/40 focus:ring-4 focus:ring-pink/15"
          />
        </div>
      ) : null}

      <div className="mt-5">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-white/35">Kategori</p>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setCategory(null)}
            className={`rounded-full px-3.5 py-2 text-xs font-semibold transition sm:text-sm ${
              category === null
                ? "bg-pink text-white shadow-glow-primary"
                : "border border-white/10 bg-white/5 text-white/65 hover:border-pink/40 hover:text-pink"
            }`}
          >
            {s.categoryAll}
          </button>
          {STYLE_CATEGORIES.map((cat) => {
            const active = category === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={`rounded-full px-3.5 py-2 text-xs font-semibold transition sm:text-sm ${
                  active
                    ? "bg-pink text-white shadow-glow-primary"
                    : "border border-white/10 bg-white/5 text-white/65 hover:border-pink/40 hover:text-pink"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-7">
        <h3 className="mb-4 text-sm font-bold text-white">{s.stylesHeading}</h3>

        {transformed.length === 0 ? (
          <p className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-6 text-sm text-white/50">
            {s.noResults}
          </p>
        ) : (
          <ul className="grid gap-3 sm:grid-cols-2">
            {transformed.map(({ style: st, output }, idx) => {
              const isCopied = copiedId === st.id;
              return (
                <li
                  key={st.id}
                  className="animate-tile-pop rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-pink/[0.04] p-4"
                  style={{ animationDelay: `${Math.min(idx, 12) * 30}ms` }}
                >
                  <div className="mb-2 flex items-start justify-between gap-2">
                    <div>
                      <p className="text-sm font-bold text-white">{st.name}</p>
                      <p className="text-[11px] font-medium text-pink/80">{st.category}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => copyOutput(st.id, output)}
                      className={`shrink-0 rounded-xl border px-2.5 py-1.5 text-[11px] font-semibold uppercase tracking-wide transition ${
                        isCopied
                          ? "border-pink/40 bg-pink/15 text-pink"
                          : "border-white/10 bg-black/40 text-white/45 hover:border-pink/35 hover:text-pink"
                      }`}
                    >
                      {isCopied ? s.copied : s.copy}
                    </button>
                  </div>
                  <p className="break-words text-base leading-relaxed text-white/90" lang="tr">
                    {output}
                  </p>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
