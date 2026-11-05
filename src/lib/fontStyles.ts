export type StyleCategory =
  | "Şık"
  | "El Yazısı"
  | "Gotik"
  | "Balon ve Kare"
  | "Estetik"
  | "Çerçeveli"
  | "Çizgili"
  | "Ters ve Mini"
  | "Oyun ve Nick"
  | "Sembollü";

export type FontStyle = {
  id: string;
  name: string;
  category: StyleCategory;
  preview: string;
  transform: (text: string) => string;
};

export const DEFAULT_PREVIEW = "Yazı Stilleri";

export const STYLE_CATEGORIES: readonly StyleCategory[] = [
  "Şık",
  "El Yazısı",
  "Gotik",
  "Balon ve Kare",
  "Estetik",
  "Çerçeveli",
  "Çizgili",
  "Ters ve Mini",
  "Oyun ve Nick",
  "Sembollü",
] as const;

const TURKISH_LATIN: Record<string, string> = {
  ı: "i",
  İ: "I",
  ğ: "g",
  Ğ: "G",
  ü: "u",
  Ü: "U",
  ş: "s",
  Ş: "S",
  ö: "o",
  Ö: "O",
  ç: "c",
  Ç: "C",
};

const DOUBLE_STRUCK_SPECIAL: Record<string, string> = {
  C: "ℂ",
  H: "ℍ",
  N: "ℕ",
  P: "ℙ",
  Q: "ℚ",
  R: "ℝ",
  Z: "ℤ",
  c: "ℂ",
  h: "ℍ",
  n: "ℕ",
  p: "ℙ",
  q: "ℚ",
  r: "ℝ",
  z: "ℤ",
};

const SCRIPT_CAP_SPECIAL: Record<string, string> = {
  B: "ℬ",
  E: "ℰ",
  F: "ℱ",
  H: "ℋ",
  I: "ℐ",
  L: "ℒ",
  M: "ℳ",
  R: "ℛ",
  e: "ℯ",
  g: "ℊ",
  o: "ℴ",
};

const ITALIC_SPECIAL: Record<string, string> = {
  h: "ℎ",
};

const UPSIDE_DOWN: Record<string, string> = {
  a: "ɐ",
  b: "q",
  c: "ɔ",
  d: "p",
  e: "ǝ",
  f: "ɟ",
  g: "ƃ",
  h: "ɥ",
  i: "ᴉ",
  j: "ɾ",
  k: "ʞ",
  l: "l",
  m: "ɯ",
  n: "u",
  o: "o",
  p: "d",
  q: "b",
  r: "ɹ",
  s: "s",
  t: "ʇ",
  u: "n",
  v: "ʌ",
  w: "ʍ",
  x: "x",
  y: "ʎ",
  z: "z",
  A: "∀",
  B: "𐐒",
  C: "Ɔ",
  D: "p",
  E: "Ǝ",
  F: "Ⅎ",
  G: "פ",
  H: "H",
  I: "I",
  J: "ſ",
  K: "ʞ",
  L: "˥",
  M: "W",
  N: "N",
  O: "O",
  P: "Ԁ",
  Q: "Ό",
  R: "ᴚ",
  S: "S",
  T: "⊥",
  U: "∩",
  V: "Λ",
  W: "M",
  X: "X",
  Y: "⅄",
  Z: "Z",
  ".": "˙",
  ",": "'",
  "?": "¿",
  "!": "¡",
  "'": ",",
  '"': "„",
  "(": ")",
  ")": "(",
  "[": "]",
  "]": "[",
  "{": "}",
  "}": "{",
  "<": ">",
  ">": "<",
  "&": "⅋",
  _: "‾",
  "1": "⇂",
  "2": "ᘔ",
  "3": "Ɛ",
  "4": "߈",
  "5": "ϛ",
  "6": "9",
  "7": "ㄥ",
  "8": "8",
  "9": "6",
  "0": "0",
  ı: "ᴉ",
  İ: "I",
  ğ: "ƃ",
  Ğ: "פ",
  ü: "n",
  Ü: "∩",
  ş: "s",
  Ş: "S",
  ö: "o",
  Ö: "O",
  ç: "ɔ",
  Ç: "Ɔ",
};

type BlockSpec = {
  upper: number;
  lower: number;
  capSpecial?: Record<string, string>;
  lowerSpecial?: Record<string, string>;
};

function fromBlock(char: string, spec: BlockSpec): string | null {
  const cap = capSpecialLookup(char, spec);
  if (cap) return cap;

  const code = char.charCodeAt(0);
  if (code >= 65 && code <= 90) {
    return String.fromCodePoint(spec.upper + (code - 65));
  }
  if (code >= 97 && code <= 122) {
    return String.fromCodePoint(spec.lower + (code - 97));
  }
  return null;
}

function capSpecialLookup(char: string, spec: BlockSpec): string | null {
  if (spec.capSpecial?.[char]) return spec.capSpecial[char];
  if (spec.lowerSpecial?.[char]) return spec.lowerSpecial[char];
  const latin = TURKISH_LATIN[char];
  if (!latin) return null;
  if (spec.capSpecial?.[latin]) return spec.capSpecial[latin];
  if (spec.lowerSpecial?.[latin]) return spec.lowerSpecial[latin];
  return fromBlock(latin, { ...spec, capSpecial: undefined, lowerSpecial: undefined });
}

function mapWithBlock(text: string, spec: BlockSpec): string {
  return [...text]
    .map((ch) => {
      const mapped = fromBlock(ch, spec);
      if (mapped) return mapped;
      const latin = TURKISH_LATIN[ch];
      if (latin) {
        const viaLatin = fromBlock(latin, spec);
        if (viaLatin) return viaLatin;
      }
      return ch;
    })
    .join("");
}

function mapWithTable(text: string, table: Record<string, string>): string {
  return [...text]
    .map((ch) => {
      if (table[ch]) return table[ch];
      const latin = TURKISH_LATIN[ch];
      if (latin && table[latin]) return table[latin];
      return ch;
    })
    .join("");
}

function combineEach(text: string, mark: string): string {
  return [...text]
    .map((ch) => (ch === " " || ch === "\n" ? ch : `${ch}${mark}`))
    .join("");
}

function interleave(text: string, sep: string): string {
  const chars = [...text];
  if (chars.length <= 1) return text;
  return chars.join(sep);
}

function wrap(text: string, left: string, right: string = left): string {
  return `${left}${text}${right}`;
}

const BLOCKS = {
  bold: { upper: 0x1d400, lower: 0x1d41a },
  italic: { upper: 0x1d434, lower: 0x1d44e, lowerSpecial: ITALIC_SPECIAL },
  boldItalic: { upper: 0x1d468, lower: 0x1d482 },
  script: { upper: 0x1d49c, lower: 0x1d4b6, capSpecial: SCRIPT_CAP_SPECIAL },
  boldScript: { upper: 0x1d4d0, lower: 0x1d4ea },
  fraktur: { upper: 0x1d504, lower: 0x1d51e },
  boldFraktur: { upper: 0x1d56c, lower: 0x1d586 },
  doubleStruck: {
    upper: 0x1d538,
    lower: 0x1d552,
    capSpecial: DOUBLE_STRUCK_SPECIAL,
    lowerSpecial: DOUBLE_STRUCK_SPECIAL,
  },
  sansBold: { upper: 0x1d5d4, lower: 0x1d5ee },
  sansItalic: { upper: 0x1d608, lower: 0x1d622 },
  sansBoldItalic: { upper: 0x1d63c, lower: 0x1d656 },
  mono: { upper: 0x1d670, lower: 0x1d68a },
} as const satisfies Record<string, BlockSpec>;

const SMALL_CAPS: Record<string, string> = {
  a: "ᴀ",
  b: "ʙ",
  c: "ᴄ",
  d: "ᴅ",
  e: "ᴇ",
  f: "ꜰ",
  g: "ɢ",
  h: "ʜ",
  i: "ɪ",
  j: "ᴊ",
  k: "ᴋ",
  l: "ʟ",
  m: "ᴍ",
  n: "ɴ",
  o: "ᴏ",
  p: "ᴘ",
  q: "ꞯ",
  r: "ʀ",
  s: "s",
  t: "ᴛ",
  u: "ᴜ",
  v: "ᴠ",
  w: "ᴡ",
  x: "x",
  y: "ʏ",
  z: "ᴢ",
};

const SUPERSCRIPT: Record<string, string> = {
  a: "ᵃ",
  b: "ᵇ",
  c: "ᶜ",
  d: "ᵈ",
  e: "ᵉ",
  f: "ᶠ",
  g: "ᵍ",
  h: "ʰ",
  i: "ⁱ",
  j: "ʲ",
  k: "ᵏ",
  l: "ˡ",
  m: "ᵐ",
  n: "ⁿ",
  o: "ᵒ",
  p: "ᵖ",
  r: "ʳ",
  s: "ˢ",
  t: "ᵗ",
  u: "ᵘ",
  v: "ᵛ",
  w: "ʷ",
  x: "ˣ",
  y: "ʸ",
  z: "ᶻ",
  "0": "⁰",
  "1": "¹",
  "2": "²",
  "3": "³",
  "4": "⁴",
  "5": "⁵",
  "6": "⁶",
  "7": "⁷",
  "8": "⁸",
  "9": "⁹",
  "+": "⁺",
  "-": "⁻",
  "=": "⁼",
  "(": "⁽",
  ")": "⁾",
};

const SUBSCRIPT: Record<string, string> = {
  a: "ₐ",
  e: "ₑ",
  h: "ₕ",
  i: "ᵢ",
  j: "ⱼ",
  k: "ₖ",
  l: "ₗ",
  m: "ₘ",
  n: "ₙ",
  o: "ₒ",
  p: "ₚ",
  r: "ᵣ",
  s: "ₛ",
  t: "ₜ",
  u: "ᵤ",
  v: "ᵥ",
  x: "ₓ",
  "0": "₀",
  "1": "₁",
  "2": "₂",
  "3": "₃",
  "4": "₄",
  "5": "₅",
  "6": "₆",
  "7": "₇",
  "8": "₈",
  "9": "₉",
  "+": "₊",
  "-": "₋",
  "=": "₌",
  "(": "₍",
  ")": "₎",
};

function circled(text: string, black: boolean): string {
  return [...text]
    .map((ch) => {
      const code = ch.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        return String.fromCodePoint((black ? 0x1f170 : 0x24b6) + (code - 65));
      }
      if (code >= 97 && code <= 122) {
        return String.fromCodePoint((black ? 0x1f150 : 0x24d0) + (code - 97));
      }
      const latin = TURKISH_LATIN[ch];
      if (latin) {
        const lc = latin.charCodeAt(0);
        if (lc >= 65 && lc <= 90) {
          return String.fromCodePoint((black ? 0x1f170 : 0x24b6) + (lc - 65));
        }
        if (lc >= 97 && lc <= 122) {
          return String.fromCodePoint((black ? 0x1f150 : 0x24d0) + (lc - 97));
        }
      }
      return ch;
    })
    .join("");
}

function squared(text: string, black: boolean): string {
  return [...text]
    .map((ch) => {
      const code = ch.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        return String.fromCodePoint((black ? 0x1f170 : 0x1f130) + (code - 65));
      }
      if (code >= 97 && code <= 122) {
        return String.fromCodePoint((black ? 0x1f150 : 0x1f190) + (code - 97));
      }
      const latin = TURKISH_LATIN[ch];
      if (latin) {
        const lc = latin.charCodeAt(0);
        if (lc >= 65 && lc <= 90) {
          return String.fromCodePoint((black ? 0x1f170 : 0x1f130) + (lc - 65));
        }
        if (lc >= 97 && lc <= 122) {
          return String.fromCodePoint((black ? 0x1f150 : 0x1f190) + (lc - 97));
        }
      }
      return ch;
    })
    .join("");
}

function fullwidth(text: string): string {
  return [...text]
    .map((ch) => {
      const code = ch.charCodeAt(0);
      if (code >= 33 && code <= 126) {
        return String.fromCodePoint(0xff00 + (code - 32));
      }
      if (code >= 65 && code <= 90) {
        return String.fromCodePoint(0xff21 + (code - 65));
      }
      if (code >= 97 && code <= 122) {
        return String.fromCodePoint(0xff41 + (code - 97));
      }
      const latin = TURKISH_LATIN[ch];
      if (latin) {
        const lc = latin.charCodeAt(0);
        if (lc >= 65 && lc <= 90) {
          return String.fromCodePoint(0xff21 + (lc - 65));
        }
        if (lc >= 97 && lc <= 122) {
          return String.fromCodePoint(0xff41 + (lc - 97));
        }
      }
      return ch;
    })
    .join("");
}

function parenthesized(text: string): string {
  return [...text]
    .map((ch) => {
      const code = ch.charCodeAt(0);
      if (code >= 97 && code <= 122) {
        return String.fromCodePoint(0x249c + (code - 97));
      }
      if (code >= 65 && code <= 90) {
        return String.fromCodePoint(0x1f110 + (code - 65));
      }
      const latin = TURKISH_LATIN[ch];
      if (latin) {
        const lc = latin.charCodeAt(0);
        if (lc >= 97 && lc <= 122) {
          return String.fromCodePoint(0x249c + (lc - 97));
        }
        if (lc >= 65 && lc <= 90) {
          return String.fromCodePoint(0x1f110 + (lc - 65));
        }
      }
      return ch;
    })
    .join("");
}

function upsideDown(text: string): string {
  return [...text]
    .reverse()
    .map((ch) => {
      if (UPSIDE_DOWN[ch]) return UPSIDE_DOWN[ch];
      const latin = TURKISH_LATIN[ch];
      if (latin && UPSIDE_DOWN[latin]) return UPSIDE_DOWN[latin];
      return ch;
    })
    .join("");
}

function mirror(text: string): string {
  return [...text].reverse().join("");
}

function regionalIndicator(text: string): string {
  return [...text]
    .map((ch) => {
      const code = ch.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        return String.fromCodePoint(0x1f1e6 + (code - 65));
      }
      if (code >= 97 && code <= 122) {
        return String.fromCodePoint(0x1f1e6 + (code - 97));
      }
      const latin = TURKISH_LATIN[ch];
      if (latin) {
        const lc = latin.charCodeAt(0);
        if (lc >= 65 && lc <= 90) {
          return String.fromCodePoint(0x1f1e6 + (lc - 65));
        }
        if (lc >= 97 && lc <= 122) {
          return String.fromCodePoint(0x1f1e6 + (lc - 97));
        }
      }
      return ch === " " ? " " : ch;
    })
    .join(" ");
}

function style(
  id: string,
  name: string,
  category: StyleCategory,
  transform: (text: string) => string,
): FontStyle {
  return {
    id,
    name,
    category,
    preview: transform(DEFAULT_PREVIEW),
    transform,
  };
}

export const FONT_STYLES: FontStyle[] = [
  // Şık
  style("math-bold", "Kalın (Math Bold)", "Şık", (t) => mapWithBlock(t, BLOCKS.bold)),
  style("math-italic", "İtalik (Math Italic)", "Şık", (t) => mapWithBlock(t, BLOCKS.italic)),
  style("math-bold-italic", "Kalın İtalik", "Şık", (t) => mapWithBlock(t, BLOCKS.boldItalic)),
  style("sans-bold", "Sans Kalın", "Şık", (t) => mapWithBlock(t, BLOCKS.sansBold)),
  style("sans-italic", "Sans İtalik", "Şık", (t) => mapWithBlock(t, BLOCKS.sansItalic)),
  style("sans-bold-italic", "Sans Kalın İtalik", "Şık", (t) => mapWithBlock(t, BLOCKS.sansBoldItalic)),
  style("double-struck", "Double Struck", "Şık", (t) => mapWithBlock(t, BLOCKS.doubleStruck)),
  style("serif-bold", "Serif Kalın", "Şık", (t) => mapWithBlock(t, BLOCKS.bold)),

  // El Yazısı
  style("script", "El Yazısı (Script)", "El Yazısı", (t) => mapWithBlock(t, BLOCKS.script)),
  style("bold-script", "Kalın El Yazısı", "El Yazısı", (t) => mapWithBlock(t, BLOCKS.boldScript)),

  // Gotik
  style("fraktur", "Gotik (Fraktur)", "Gotik", (t) => mapWithBlock(t, BLOCKS.fraktur)),
  style("bold-fraktur", "Kalın Gotik", "Gotik", (t) => mapWithBlock(t, BLOCKS.boldFraktur)),

  // Balon ve Kare
  style("circled", "Balon (Daire)", "Balon ve Kare", (t) => circled(t, false)),
  style("black-circled", "Siyah Balon", "Balon ve Kare", (t) => circled(t, true)),
  style("squared", "Kare", "Balon ve Kare", (t) => squared(t, false)),
  style("black-squared", "Siyah Kare", "Balon ve Kare", (t) => squared(t, true)),
  style("fullwidth", "Geniş (Fullwidth)", "Balon ve Kare", fullwidth),
  style("parenthesized", "Parantezli", "Balon ve Kare", parenthesized),
  style("regional-flags", "Bayrak Harfleri", "Balon ve Kare", regionalIndicator),

  // Estetik
  style("mono", "Monospace", "Estetik", (t) => mapWithBlock(t, BLOCKS.mono)),
  style("small-caps", "Küçük Büyük Harf", "Estetik", (t) => mapWithTable(t.toLowerCase(), SMALL_CAPS)),
  style("superscript", "Üst Simge", "Estetik", (t) => mapWithTable(t.toLowerCase(), SUPERSCRIPT)),
  style("subscript", "Alt Simge", "Estetik", (t) => mapWithTable(t.toLowerCase(), SUBSCRIPT)),
  style("wide-spacing", "Geniş Boşluklu", "Estetik", (t) => interleave(t, " ")),
  style("dot-spacing", "Noktalı Boşluk", "Estetik", (t) => interleave(t, "·")),

  // Çerçeveli
  style("frame-flower", "Çiçek Çerçeve", "Çerçeveli", (t) => wrap(t, "✿ ", " ✿")),
  style("frame-heart", "Kalp Çerçeve", "Çerçeveli", (t) => wrap(t, "♡ ", " ♡")),
  style("frame-heart-bold", "Kalp Çerçeve 2", "Çerçeveli", (t) => wrap(t, "❤ ", " ❤")),
  style("frame-crown", "Taç", "Çerçeveli", (t) => wrap(t, "♔ ", " ♔")),
  style("frame-star", "Yıldız Çerçeve", "Çerçeveli", (t) => wrap(t, "★ ", " ★")),
  style("frame-sparkle", "Parıltı", "Çerçeveli", (t) => wrap(t, "✨ ", " ✨")),
  style("frame-aesthetic", "Estetik Köşe", "Çerçeveli", (t) => wrap(t, "『", "』")),
  style("frame-bracket", "Japon Köşeli", "Çerçeveli", (t) => wrap(t, "【", "】")),
  style("frame-wave", "Dalga Çerçeve", "Çerçeveli", (t) => wrap(t, "≋ ", " ≋")),
  style("frame-angle", "Açılı Çerçeve", "Çerçeveli", (t) => wrap(t, "⟨ ", " ⟩")),
  style("frame-pretty", "Şık Süs", "Çerçeveli", (t) => wrap(t, "·°˖✧ ", " ✧˖°·")),
  style("frame-bow", "Fiyonk", "Çerçeveli", (t) => wrap(t, "🎀 ", " 🎀")),

  // Çizgili
  style("strike", "Üstü Çizili", "Çizgili", (t) => combineEach(t, "\u0336")),
  style("underline", "Altı Çizili", "Çizgili", (t) => combineEach(t, "\u0332")),
  style("double-underline", "Çift Alt Çizgi", "Çizgili", (t) => combineEach(t, "\u0333")),
  style("overline", "Üst Çizgi", "Çizgili", (t) => combineEach(t, "\u0305")),
  style("slash", "Çapraz Çizgi", "Çizgili", (t) => combineEach(t, "\u0338")),
  style("tilde-strike", "Dalgalı Üst", "Çizgili", (t) => combineEach(t, "\u0330")),
  style("dot-above", "Nokta Üst", "Çizgili", (t) => combineEach(t, "\u0307")),
  style("ring-above", "Halka Üst", "Çizgili", (t) => combineEach(t, "\u030A")),

  // Ters ve Mini
  style("upside-down", "Ters Çevrilmiş", "Ters ve Mini", upsideDown),
  style("mirror", "Ayna", "Ters ve Mini", mirror),
  style("upside-mirror", "Ters Ayna", "Ters ve Mini", (t) => mirror(upsideDown(t))),
  style("mini-sub", "Mini Alt", "Ters ve Mini", (t) => mapWithTable(t.toLowerCase(), SUBSCRIPT)),
  style("mini-super", "Mini Üst", "Ters ve Mini", (t) => mapWithTable(t.toLowerCase(), SUPERSCRIPT)),
  style("tiny-caps", "Mini Caps", "Ters ve Mini", (t) => mapWithTable(t.toLowerCase(), SMALL_CAPS)),

  // Oyun ve Nick
  style("gaming-brackets", "Oyun Köşeli", "Oyun ve Nick", (t) => wrap(t, "【 ", " 】")),
  style("gaming-shade", "Gölgeli Oyun", "Oyun ve Nick", (t) => wrap(t, "░", "░")),
  style("gaming-fire", "Ateş Nick", "Oyun ve Nick", (t) => wrap(t, "▄︻デ══━一 ", "")),
  style("gaming-clan", "Klan Etiketi", "Oyun ve Nick", (t) => wrap(t, "▌│█║▌║▌║ ", " ▌│█║▌║▌║")),
  style("nick-pro", "Pro Nick", "Oyun ve Nick", (t) => wrap(t, "꧁", "꧂")),
  style("nick-king", "Kral Nick", "Oyun ve Nick", (t) => wrap(t, "♚ ", " ♚")),
  style("nick-sword", "Kılıç Nick", "Oyun ve Nick", (t) => wrap(t, "⚔ ", " ⚔")),
  style("nick-emoji", "Emoji Oyun", "Oyun ve Nick", (t) => wrap(t, "🎮 ", " 🎯")),
  style("nick-cyber", "Siber", "Oyun ve Nick", (t) => wrap(t, "▸▹ ", " ◂◃")),
  style("nick-glitch", "Glitch", "Oyun ve Nick", (t) => wrap(t, "̶▸ ", " ◂̶")),

  // Sembollü
  style("sep-heart", "Kalp Ayraç", "Sembollü", (t) => interleave(t, "♥")),
  style("sep-heart-white", "Beyaz Kalp", "Sembollü", (t) => interleave(t, "♡")),
  style("sep-star", "Yıldız Ayraç", "Sembollü", (t) => interleave(t, "★")),
  style("sep-star-outline", "Yıldız 2", "Sembollü", (t) => interleave(t, "☆")),
  style("sep-flower", "Çiçek Ayraç", "Sembollü", (t) => interleave(t, "✿")),
  style("sep-sparkle", "Parıltı Ayraç", "Sembollü", (t) => interleave(t, "✦")),
  style("sep-diamond", "Elmas Ayraç", "Sembollü", (t) => interleave(t, "♦")),
  style("sep-dot", "Nokta Ayraç", "Sembollü", (t) => interleave(t, "•")),
  style("sep-wave", "Dalga Ayraç", "Sembollü", (t) => interleave(t, "〜")),
  style("sep-arrow", "Ok Ayraç", "Sembollü", (t) => interleave(t, "➤")),
  style("sep-cross", "Artı Ayraç", "Sembollü", (t) => interleave(t, "✚")),
  style("sep-slash", "Eğik Ayraç", "Sembollü", (t) => interleave(t, "／")),
];

const styleById = new Map(FONT_STYLES.map((s) => [s.id, s]));

export function applyStyle(styleId: string, text: string): string {
  const found = styleById.get(styleId);
  if (!found) return text;
  return found.transform(text);
}

export function getStylesByCategory(category: StyleCategory): FontStyle[] {
  return FONT_STYLES.filter((s) => s.category === category);
}
