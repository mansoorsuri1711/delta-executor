import { SITE_ORIGIN } from "@/lib/siteConfig";

function imageLoc(path: string): string {
  return `${SITE_ORIGIN}${path}`;
}

export type SitemapPage = {
  path: string;
  lastMod: string;
  changeFreq: "daily" | "weekly" | "monthly" | "yearly";
  priority: number;
  images?: Array<{ loc: string; title: string; caption: string }>;
};

const LASTMOD = "2026-11-05";

export const SITEMAP_PAGES: SitemapPage[] = [
  {
    path: "/",
    lastMod: LASTMOD,
    changeFreq: "daily",
    priority: 1,
    images: [
      {
        loc: imageLoc("/logo-icon.png"),
        title: "Anagram Generator logo",
        caption: "Brand mark for anagramgenerator.app",
      },
      {
        loc: imageLoc("/anagram-generator.webp"),
        title: "Anagram Generator",
        caption: "Free online anagram generator for words and names",
      },
    ],
  },
  {
    path: "/uk",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.95,
  },
  {
    path: "/da",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.95,
  },
  {
    path: "/br",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.95,
  },
  {
    path: "/de",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.95,
  },
  {
    path: "/anagram-solver",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.95,
    images: [
      {
        loc: imageLoc("/anagram-generator-tool.webp"),
        title: "Anagram solver",
        caption: "Unscramble letters into real English words",
      },
    ],
  },
  {
    path: "/name-anagram-generator",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.95,
    images: [
      {
        loc: imageLoc("/anagram-generator-online.webp"),
        title: "Name anagram generator",
        caption: "Create multi-word anagrams from your name",
      },
    ],
  },
  {
    path: "/how-to-use-anagram-generator",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.9,
    images: [
      {
        loc: imageLoc("/anagram-generator-app.webp"),
        title: "How to use Anagram Generator",
        caption: "Step-by-step guide to making anagrams online",
      },
    ],
  },
  {
    path: "/what-is-an-anagram",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.9,
    images: [
      {
        loc: imageLoc("/anagram-generator.webp"),
        title: "What is an anagram",
        caption: "Definition and examples of anagrams",
      },
    ],
  },
  {
    path: "/features",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.85,
    images: [
      {
        loc: imageLoc("/anagram-generator-online.webp"),
        title: "Anagram Generator features",
        caption: "Exact anagrams, solver mode, and name phrases",
      },
    ],
  },
  {
    path: "/about-us",
    lastMod: LASTMOD,
    changeFreq: "monthly",
    priority: 0.7,
    images: [
      {
        loc: imageLoc("/logo-icon.png"),
        title: "About Anagram Generator",
        caption: "Logo on the About page",
      },
    ],
  },
  {
    path: "/blog",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.8,
  },
  {
    path: "/blog/how-to-solve-anagrams",
    lastMod: LASTMOD,
    changeFreq: "monthly",
    priority: 0.9,
    images: [
      {
        loc: imageLoc("/anagram-generator-tool.webp"),
        title: "How to solve anagrams",
        caption: "Practical tips for solving anagram puzzles faster",
      },
    ],
  },
  {
    path: "/blog/anagram-examples",
    lastMod: LASTMOD,
    changeFreq: "monthly",
    priority: 0.9,
    images: [
      {
        loc: imageLoc("/anagram-generator.webp"),
        title: "Anagram examples",
        caption: "Famous and fun anagram examples in English",
      },
    ],
  },
  {
    path: "/blog/anagram-vs-permutation",
    lastMod: LASTMOD,
    changeFreq: "monthly",
    priority: 0.9,
    images: [
      {
        loc: imageLoc("/anagram-generator-online.webp"),
        title: "Anagram vs permutation",
        caption: "How anagrams differ from letter permutations",
      },
    ],
  },
  {
    path: "/contact-us",
    lastMod: LASTMOD,
    changeFreq: "yearly",
    priority: 0.6,
  },
  {
    path: "/privacy",
    lastMod: LASTMOD,
    changeFreq: "yearly",
    priority: 0.4,
  },
  {
    path: "/disclaimer",
    lastMod: LASTMOD,
    changeFreq: "yearly",
    priority: 0.4,
  },
];

export function absoluteUrl(path: string): string {
  if (path === "/") return `${SITE_ORIGIN}/`;
  return `${SITE_ORIGIN}${path}`;
}
