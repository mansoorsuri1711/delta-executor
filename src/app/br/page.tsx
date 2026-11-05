import HomePageView from "@/components/HomePageView";
import { buildHomeMetadata } from "@/lib/homeMetadata";
import { getLocaleBySlug } from "@/lib/locales";

const locale = getLocaleBySlug("br");

export const metadata = buildHomeMetadata(locale);

export default function BrazilHomePage() {
  return <HomePageView locale={locale} />;
}
