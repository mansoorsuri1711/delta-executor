import HomePageView from "@/components/HomePageView";
import { buildHomeMetadata } from "@/lib/homeMetadata";
import { getLocaleBySlug } from "@/lib/locales";

const locale = getLocaleBySlug("uk");

export const metadata = buildHomeMetadata(locale);

export default function UkHomePage() {
  return <HomePageView locale={locale} />;
}
