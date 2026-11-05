import HomePageView from "@/components/HomePageView";
import { buildHomeMetadata } from "@/lib/homeMetadata";
import { DEFAULT_LOCALE } from "@/lib/locales";

export const metadata = buildHomeMetadata(DEFAULT_LOCALE);

export default function HomePage() {
  return <HomePageView locale={DEFAULT_LOCALE} />;
}
