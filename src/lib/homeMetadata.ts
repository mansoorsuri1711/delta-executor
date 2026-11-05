import type { Metadata } from "next";
import { OG_IMAGE, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";
import { SiteLocale, localeAlternates } from "@/lib/locales";
import { getMessages } from "@/lib/i18n/messages";

export function buildHomeMetadata(locale: SiteLocale): Metadata {
  const url = `${SITE_ORIGIN}${locale.path === "/" ? "" : locale.path}`;
  const t = getMessages(locale.code);

  return {
    title: {
      default: t.metaTitle,
      template: `%s | ${SITE_NAME}`,
    },
    description: t.metaDescription,
    alternates: {
      canonical: url,
      languages: localeAlternates(),
    },
    openGraph: {
      title: t.metaTitle,
      description: t.metaDescription,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: locale.ogLocale,
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: t.brand,
        },
      ],
    },
  };
}
