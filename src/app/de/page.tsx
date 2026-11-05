import HomePageView from "@/components/HomePageView";
import { buildHomeMetadata } from "@/lib/homeMetadata";
import { getLocaleBySlug } from "@/lib/locales";

const locale = getLocaleBySlug("de");

export const metadata = buildHomeMetadata(locale);

export default function GermanHomePage() {
  return <HomePageView locale={locale} />;
}
