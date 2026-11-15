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

/** Primary locale is English — deltaexecutor.com.ph global + PH SERP. */
export const SITE_LOCALES: SiteLocale[] = [
  {
    code: "en",
    slug: "",
    path: "/",
    label: "English",
    short: "EN",
    hreflang: "en",
    ogLocale: "en_PH",
  },
];

export const DEFAULT_LOCALE = SITE_LOCALES[0];

export const LOCALE_SLUGS = SITE_LOCALES.map((l) => l.slug).filter(Boolean);

export function getLocaleBySlug(slug: string): SiteLocale {
  const normalized = slug.replace(/^\/+|\/+$/g, "");
  if (!normalized) return DEFAULT_LOCALE;
  return SITE_LOCALES.find((l) => l.slug === normalized) || DEFAULT_LOCALE;
}

export function getLocaleFromPathname(_pathname: string): SiteLocale {
  return DEFAULT_LOCALE;
}

export function localeAlternates(): Record<string, string> {
  return {
    en: SITE_ORIGIN,
    "x-default": SITE_ORIGIN,
  };
}
