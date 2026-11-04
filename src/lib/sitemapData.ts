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
        title: "Blox Fruit Calculator logo",
        caption: "Brand mark for bloxfruitcalculator.net",
      },
      {
        loc: imageLoc("/blox-fruit-calculator.webp"),
        title: "Blox Fruit Calculator",
        caption: "Compare Blox Fruits trades and check WFL online",
      },
    ],
  },
  {
    path: "/features",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.9,
    images: [
      {
        loc: imageLoc("/blox-fruit-calculator-online.webp"),
        title: "Blox Fruit Calculator features",
        caption: "WFL checker, value list, physical and permanent support",
      },
    ],
  },
  {
    path: "/how-to-use-blox-fruit-calculator",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.95,
    images: [
      {
        loc: imageLoc("/blox-fruit-calculator-tool.webp"),
        title: "How to use Blox Fruit Calculator",
        caption: "Step-by-step trade value and WFL guide",
      },
    ],
  },
  {
    path: "/trade-calculator",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.95,
    images: [
      {
        loc: imageLoc("/blox-fruit-calculator.webp"),
        title: "Blox Fruits trade calculator",
        caption: "Win Fair Lose trade checker for Blox Fruits",
      },
    ],
  },
  {
    path: "/blox-fruits-values",
    lastMod: LASTMOD,
    changeFreq: "daily",
    priority: 0.95,
    images: [
      {
        loc: imageLoc("/blox-fruit-calculator-online.webp"),
        title: "Blox fruit values list",
        caption: "Blox fruit values, trade value, demand, and Beli prices",
      },
    ],
  },
  {
    path: "/what-is-wfl",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.9,
    images: [
      {
        loc: imageLoc("/blox-fruit-calculator-tool.webp"),
        title: "What is WFL in Blox Fruits",
        caption: "Win Fair Lose meaning for Blox Fruits trades",
      },
    ],
  },
  {
    path: "/permanent-vs-physical-fruits",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.9,
    images: [
      {
        loc: imageLoc("/blox-fruit-calculator-app.webp"),
        title: "Permanent vs physical Blox Fruits",
        caption: "Difference between permanent and physical fruits",
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
        title: "About Blox Fruit Calculator",
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
    path: "/blog/blox-fruits-trading-guide",
    lastMod: LASTMOD,
    changeFreq: "monthly",
    priority: 0.9,
    images: [
      {
        loc: imageLoc("/blox-fruit-calculator.webp"),
        title: "Blox Fruits trading guide",
        caption: "How to trade fruits smarter with a value calculator",
      },
    ],
  },
  {
    path: "/blog/how-demand-and-value-work",
    lastMod: LASTMOD,
    changeFreq: "monthly",
    priority: 0.9,
    images: [
      {
        loc: imageLoc("/blox-fruit-calculator-tool.webp"),
        title: "How demand and value work",
        caption: "Demand scores and trade values explained",
      },
    ],
  },
  {
    path: "/blog/blox-fruits-trading-scams",
    lastMod: LASTMOD,
    changeFreq: "monthly",
    priority: 0.9,
    images: [
      {
        loc: imageLoc("/blox-fruit-calculator-online.webp"),
        title: "Blox Fruits trading scams",
        caption: "Common trade scams and how to avoid them",
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
