import { SITE_ORIGIN } from "@/lib/siteConfig";

export type SiteLocale = {
  code: string;
  slug: string;
  path: string;
  label: string;
  short: string;
  hreflang: string;
  ogLocale: string;
};

/** Locale URLs: / (US), /uk, /da, /br, /de */
export const SITE_LOCALES: SiteLocale[] = [
  {
    code: "en-US",
    slug: "",
    path: "/",
    label: "English (US)",
    short: "English",
    hreflang: "en-US",
    ogLocale: "en_US",
  },
  {
    code: "en-GB",
    slug: "uk",
    path: "/uk",
    label: "English (UK)",
    short: "English UK",
    hreflang: "en-GB",
    ogLocale: "en_GB",
  },
  {
    code: "da",
    slug: "da",
    path: "/da",
    label: "Danish",
    short: "Dansk",
    hreflang: "da",
    ogLocale: "da_DK",
  },
  {
    code: "pt-BR",
    slug: "br",
    path: "/br",
    label: "Portuguese (Brazil)",
    short: "Português",
    hreflang: "pt-BR",
    ogLocale: "pt_BR",
  },
  {
    code: "de",
    slug: "de",
    path: "/de",
    label: "German",
    short: "Deutsch",
    hreflang: "de",
    ogLocale: "de_DE",
  },
];

export const DEFAULT_LOCALE = SITE_LOCALES[0];

export const LOCALE_SLUGS = SITE_LOCALES.map((l) => l.slug).filter(Boolean);

export function getLocaleBySlug(slug: string): SiteLocale {
  const normalized = slug.replace(/^\/+|\/+$/g, "");
  if (!normalized) return DEFAULT_LOCALE;
  return SITE_LOCALES.find((l) => l.slug === normalized) || DEFAULT_LOCALE;
}

export function getLocaleFromPathname(pathname: string): SiteLocale {
  const segment = pathname.split("/").filter(Boolean)[0] || "";
  if (LOCALE_SLUGS.includes(segment)) {
    return getLocaleBySlug(segment);
  }
  return DEFAULT_LOCALE;
}

export function localeAlternates(): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const locale of SITE_LOCALES) {
    languages[locale.hreflang] = `${SITE_ORIGIN}${locale.path === "/" ? "" : locale.path}`;
  }
  languages["x-default"] = SITE_ORIGIN;
  return languages;
}
