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

const LASTMOD = "2026-11-06";

export const SITEMAP_PAGES: SitemapPage[] = [
  {
    path: "/",
    lastMod: LASTMOD,
    changeFreq: "daily",
    priority: 1,
    images: [
      {
        loc: imageLoc("/delta-roblox-logo.webp"),
        title: "Delta Roblox logosu",
        caption: "Delta Roblox — deltaroblox.tr marka logosu",
      },
      {
        loc: imageLoc("/delta-roblox.webp"),
        title: "Delta Executor",
        caption: "Delta Executor — Android ve iOS için ücretsiz Roblox script executor",
      },
      {
        loc: imageLoc("/delta-roblox-android.webp"),
        title: "Delta Executor özellikleri — Android",
        caption: "Script hub, hızlı enjeksiyon ve root gerektirmeyen Android yürütme",
      },
      {
        loc: imageLoc("/delta-roblox-ios.webp"),
        title: "Delta Executor özellikleri — iOS",
        caption: "Delta Executor iOS özelliklerine genel bakış",
      },
      {
        loc: imageLoc("/delta-roblox-scripts.webp"),
        title: "Delta Executor script kütüphanesi",
        caption: "Roblox oyunları için yerleşik script hub",
      },
    ],
  },
  {
    path: "/download",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.98,
    images: [
      {
        loc: imageLoc("/delta-roblox-android.webp"),
        title: "Android için Delta Executor APK İndir",
        caption: "Delta Executor v2.745 Android APK indirme ve kurulum rehberi",
      },
    ],
  },
  {
    path: "/ios",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.95,
    images: [
      {
        loc: imageLoc("/delta-roblox-ios.webp"),
        title: "iOS için Delta Executor",
        caption: "AltStore ve TrollStore ile Delta Executor iOS kurulum rehberi",
      },
    ],
  },
  {
    path: "/pc-version",
    lastMod: LASTMOD,
    changeFreq: "monthly",
    priority: 0.85,
    images: [
      {
        loc: imageLoc("/delta-roblox.webp"),
        title: "Delta Executor PC sürümü rehberi",
        caption: "Delta Executor PC durumu ve sahte EXE uyarısı",
      },
    ],
  },
  {
    path: "/about-us",
    lastMod: LASTMOD,
    changeFreq: "monthly",
    priority: 0.65,
    images: [
      {
        loc: imageLoc("/delta-roblox-logo.webp"),
        title: "Delta Roblox hakkında",
        caption: "Delta Roblox ekibi ve misyonu",
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
    path: "/blog/delta-executor-key-system",
    lastMod: LASTMOD,
    changeFreq: "monthly",
    priority: 0.92,
    images: [
      {
        loc: imageLoc("/delta-roblox-android.webp"),
        title: "Delta Executor anahtar sistemi rehberi",
        caption: "Delta Executor anahtar kontrol noktasını beş dakikadan kısa sürede tamamlama",
      },
    ],
  },
  {
    path: "/blog/is-delta-executor-safe",
    lastMod: LASTMOD,
    changeFreq: "monthly",
    priority: 0.9,
    images: [
      {
        loc: imageLoc("/delta-roblox.webp"),
        title: "Delta Executor güvenli mi?",
        caption: "Dürüst risk değerlendirmesi: ban riski, kötü amaçlı yazılım ve izinler",
      },
    ],
  },
  {
    path: "/blog/delta-executor-scripts-hub",
    lastMod: LASTMOD,
    changeFreq: "monthly",
    priority: 0.88,
    images: [
      {
        loc: imageLoc("/delta-roblox-scripts.webp"),
        title: "Delta Executor script hub",
        caption: "En iyi scriptler ve Delta Executor yerleşik hub nasıl kullanılır",
      },
    ],
  },
  {
    path: "/how-to-use",
    lastMod: LASTMOD,
    changeFreq: "monthly",
    priority: 0.9,
    images: [
      {
        loc: imageLoc("/delta-roblox-android.webp"),
        title: "Delta Executor nasıl kullanılır — script çalıştırma rehberi",
        caption: "Adım adım: Roblox'a bağlan, Script Hub, scripti yapıştır ve çalıştır",
      },
    ],
  },
  {
    path: "/troubleshooting",
    lastMod: LASTMOD,
    changeFreq: "monthly",
    priority: 0.88,
    images: [
      {
        loc: imageLoc("/delta-roblox.webp"),
        title: "Delta Executor sorun giderme rehberi",
        caption: "Enjeksiyon hatası, anahtar hataları, çökmeler ve Play Protect engellerini çözme",
      },
    ],
  },
  {
    path: "/mac",
    lastMod: LASTMOD,
    changeFreq: "monthly",
    priority: 0.78,
    images: [
      {
        loc: imageLoc("/delta-roblox.webp"),
        title: "Mac için Delta Executor — emülatör rehberi",
        caption: "macOS kullanıcıları için seçenekler: BlueStacks emülatörü ve iPhone Mirroring",
      },
    ],
  },
  {
    path: "/vng",
    lastMod: LASTMOD,
    changeFreq: "monthly",
    priority: 0.82,
    images: [
      {
        loc: imageLoc("/delta-roblox-android.webp"),
        title: "Delta Executor VNG — Vietnam Roblox istemcisi rehberi",
        caption: "VNG Roblox açıklaması: kimin ihtiyacı var ve Delta VNG için nasıl kurulur",
      },
    ],
  },
  {
    path: "/discord",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.9,
    images: [
      {
        loc: imageLoc("/delta-roblox.webp"),
        title: "Delta Executor Discord sunucusu",
        caption: "Delta Executor Discord — güvenli katılım, duyurular ve dolandırıcılık uyarıları",
      },
    ],
  },
  {
    path: "/comparison",
    lastMod: LASTMOD,
    changeFreq: "monthly",
    priority: 0.85,
    images: [
      {
        loc: imageLoc("/delta-roblox-android.webp"),
        title: "Delta Executor ile diğer Roblox executor'lar karşılaştırması",
        caption: "Dürüst karşılaştırma tablosu: mobil destek, anahtar sistemi, script hub, güncelleme hızı",
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
