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

/** Primary locale: Filipino for Philippines SERP (deltaexecutor.com.ph). */
export const SITE_LOCALES: SiteLocale[] = [
  {
    code: "fil",
    slug: "",
    path: "/",
    label: "Filipino",
    short: "FIL",
    hreflang: "fil-PH",
    ogLocale: "fil_PH",
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
    "fil-PH": SITE_ORIGIN,
    fil: SITE_ORIGIN,
    "x-default": SITE_ORIGIN,
  };
}
