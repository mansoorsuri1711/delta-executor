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
        title: "Yazı Stilleri logo",
        caption: "Yazı Stilleri marka logosu — yazıstilleri.com.tr",
      },
      {
        loc: imageLoc("/yazı-stilleri.webp"),
        title: "Yazı Stilleri",
        caption: "Ücretsiz online yazı stilleri oluşturucu",
      },
    ],
  },
  {
    path: "/instagram-yazi-tipleri",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.95,
    images: [
      {
        loc: imageLoc("/yazı-stilleri-online.webp"),
        title: "Instagram yazı tipleri",
        caption: "Instagram bio ve gönderiler için yazı stilleri",
      },
    ],
  },
  {
    path: "/sekilli-nick",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.95,
    images: [
      {
        loc: imageLoc("/yazı-stilleri-tool.webp"),
        title: "Şekilli nick",
        caption: "Oyun ve sosyal medya için şekilli nick stilleri",
      },
    ],
  },
  {
    path: "/whatsapp-yazi-stilleri",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.95,
    images: [
      {
        loc: imageLoc("/yazı-stilleri-app.webp"),
        title: "WhatsApp yazı stilleri",
        caption: "WhatsApp durum ve sohbet için Unicode yazı stilleri",
      },
    ],
  },
  {
    path: "/nasil-kullanilir",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.9,
    images: [
      {
        loc: imageLoc("/yazı-stilleri.webp"),
        title: "Yazı stilleri nasıl kullanılır",
        caption: "Adım adım yazı stili kopyala yapıştır rehberi",
      },
    ],
  },
  {
    path: "/yazi-stilleri-nedir",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.9,
    images: [
      {
        loc: imageLoc("/yazı-stilleri-online.webp"),
        title: "Yazı stilleri nedir",
        caption: "Unicode yazı stilleri tanımı ve kullanım alanları",
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
        loc: imageLoc("/yazı-stilleri-tool.webp"),
        title: "Yazı Stilleri özellikleri",
        caption: "Kategoriler, kopyala yapıştır ve Türkçe destek",
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
        title: "Hakkımızda Yazı Stilleri",
        caption: "Yazı Stilleri hakkında logo",
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
    path: "/blog/instagram-bio-yazi-stilleri",
    lastMod: LASTMOD,
    changeFreq: "monthly",
    priority: 0.9,
    images: [
      {
        loc: imageLoc("/yazı-stilleri-online.webp"),
        title: "Instagram bio yazı stilleri",
        caption: "Instagram biyografi için şık yazı tipi örnekleri",
      },
    ],
  },
  {
    path: "/blog/sekilli-nick-rehberi",
    lastMod: LASTMOD,
    changeFreq: "monthly",
    priority: 0.9,
    images: [
      {
        loc: imageLoc("/yazı-stilleri-tool.webp"),
        title: "Şekilli nick rehberi",
        caption: "PUBG Free Fire ve sosyal nick için yazı stilleri",
      },
    ],
  },
  {
    path: "/blog/estetik-yazi-stilleri",
    lastMod: LASTMOD,
    changeFreq: "monthly",
    priority: 0.9,
    images: [
      {
        loc: imageLoc("/yazı-stilleri.webp"),
        title: "Estetik yazı stilleri",
        caption: "Estetik ve vaporwave tarzı Unicode yazı örnekleri",
      },
    ],
  },
  {
    path: "/blog/tiktok-whatsapp-yazi-tipi",
    lastMod: LASTMOD,
    changeFreq: "monthly",
    priority: 0.9,
    images: [
      {
        loc: imageLoc("/yazı-stilleri-app.webp"),
        title: "TikTok WhatsApp yazı tipi",
        caption: "TikTok ve WhatsApp için kopyala yapıştır yazı stilleri",
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
