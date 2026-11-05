/** Letter-signature helpers and anagram search over an in-memory word list. */

export type AnagramHit = {
  word: string;
  length: number;
  exact: boolean;
};

export type AnagramSearchOptions = {
  /** Exact letter-count anagrams only (true) or also shorter sub-words (false). */
  exactOnly?: boolean;
  /** Minimum word length for sub-word / solver results. */
  minLength?: number;
  /** Cap results returned. */
  limit?: number;
  /** Frequency map: lower index = more common. */
  freq?: Record<string, number>;
};

export type MultiWordHit = {
  phrase: string;
  words: string[];
};

function normalizeLetters(input: string): string {
  return input.toLowerCase().replace(/[^a-z]/g, "");
}

export function letterSignature(letters: string): string {
  return normalizeLetters(letters).split("").sort().join("");
}

export function countLetters(letters: string): number[] {
  const counts = new Array(26).fill(0);
  for (const ch of normalizeLetters(letters)) {
    counts[ch.charCodeAt(0) - 97] += 1;
  }
  return counts;
}

export function canSpell(word: string, pool: number[]): boolean {
  const need = countLetters(word);
  for (let i = 0; i < 26; i++) {
    if (need[i] > pool[i]) return false;
  }
  return true;
}

export function subtractLetters(pool: number[], word: string): number[] {
  const next = pool.slice();
  for (const ch of word) {
    next[ch.charCodeAt(0) - 97] -= 1;
  }
  return next;
}

export function poolSize(pool: number[]): number {
  return pool.reduce((a, b) => a + b, 0);
}

export function shuffleLetters(input: string): string {
  const chars = normalizeLetters(input).split("");
  for (let i = chars.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [chars[i], chars[j]] = [chars[j], chars[i]];
  }
  return chars.join("").toUpperCase();
}

/** Build signature → words index once per dictionary load. */
export function buildSignatureIndex(words: string[]): Map<string, string[]> {
  const index = new Map<string, string[]>();
  for (const word of words) {
    const sig = letterSignature(word);
    const bucket = index.get(sig);
    if (bucket) bucket.push(word);
    else index.set(sig, [word]);
  }
  return index;
}

export function findAnagrams(
  input: string,
  words: string[],
  signatureIndex: Map<string, string[]>,
  options: AnagramSearchOptions = {},
): AnagramHit[] {
  const letters = normalizeLetters(input);
  if (!letters) return [];

  const exactOnly = options.exactOnly ?? false;
  const minLength = options.minLength ?? 2;
  const limit = options.limit ?? 200;
  const freq = options.freq;
  const source = letters.toLowerCase();
  const pool = countLetters(letters);
  const exactSig = letterSignature(letters);
  const hits: AnagramHit[] = [];
  const seen = new Set<string>();

  const exactBucket = signatureIndex.get(exactSig) || [];
  for (const word of exactBucket) {
    if (word === source) continue;
    if (seen.has(word)) continue;
    seen.add(word);
    hits.push({ word, length: word.length, exact: true });
  }

  if (!exactOnly) {
    for (const word of words) {
      if (word.length < minLength || word.length > letters.length) continue;
      if (word.length === letters.length) continue; // already handled
      if (seen.has(word)) continue;
      if (!canSpell(word, pool)) continue;
      seen.add(word);
      hits.push({ word, length: word.length, exact: false });
    }
  }

  hits.sort((a, b) => {
    if (a.exact !== b.exact) return a.exact ? -1 : 1;
    if (b.length !== a.length) return b.length - a.length;
    const fa = freq?.[a.word] ?? 999999;
    const fb = freq?.[b.word] ?? 999999;
    if (fa !== fb) return fa - fb;
    return a.word.localeCompare(b.word);
  });

  return hits.slice(0, limit);
}

/**
 * Greedy multi-word phrase search for names / longer inputs.
 * Prefers fewer, longer, more common words.
 */
export function findMultiWordAnagrams(
  input: string,
  words: string[],
  options: { maxPhrases?: number; maxWords?: number; freq?: Record<string, number> } = {},
): MultiWordHit[] {
  const letters = normalizeLetters(input);
  if (letters.length < 4 || letters.length > 18) return [];

  const maxPhrases = options.maxPhrases ?? 40;
  const maxWords = options.maxWords ?? 4;
  const freq = options.freq;
  const pool0 = countLetters(letters);
  const candidates = words
    .filter((w) => w.length >= 3 && w.length <= letters.length && canSpell(w, pool0))
    .sort((a, b) => {
      if (b.length !== a.length) return b.length - a.length;
      const fa = freq?.[a] ?? 999999;
      const fb = freq?.[b] ?? 999999;
      return fa - fb;
    })
    .slice(0, 800);

  const results: MultiWordHit[] = [];
  const seenPhrases = new Set<string>();

  function dfs(pool: number[], path: string[], startIdx: number) {
    if (results.length >= maxPhrases) return;
    if (poolSize(pool) === 0) {
      if (path.length >= 2) {
        const sorted = [...path].sort();
        const key = sorted.join(" ");
        if (!seenPhrases.has(key)) {
          seenPhrases.add(key);
          results.push({ phrase: path.join(" "), words: [...path] });
        }
      }
      return;
    }
    if (path.length >= maxWords) return;

    for (let i = startIdx; i < candidates.length; i++) {
      const w = candidates[i];
      if (!canSpell(w, pool)) continue;
      // Keep phrases roughly descending in length for readability
      if (path.length && w.length > path[path.length - 1].length) continue;
      dfs(subtractLetters(pool, w), [...path, w], i + 1);
      if (results.length >= maxPhrases) return;
    }
  }

  dfs(pool0, [], 0);

  results.sort((a, b) => {
    if (a.words.length !== b.words.length) return a.words.length - b.words.length;
    const la = a.words.reduce((s, w) => s + w.length, 0);
    const lb = b.words.reduce((s, w) => s + w.length, 0);
    return lb - la;
  });

  return results.slice(0, maxPhrases);
}

export function formatLetterTiles(input: string): string[] {
  return normalizeLetters(input).toUpperCase().split("");
}
