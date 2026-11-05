import HomePageView from "@/components/HomePageView";
import { buildHomeMetadata } from "@/lib/homeMetadata";
import { getLocaleBySlug } from "@/lib/locales";

const locale = getLocaleBySlug("da");

export const metadata = buildHomeMetadata(locale);

export default function DanishHomePage() {
  return <HomePageView locale={locale} />;
}
