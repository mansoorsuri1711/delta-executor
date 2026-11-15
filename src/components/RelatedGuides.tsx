import Link from "next/link";
import { ROUTES } from "@/lib/routes";

export type RelatedLink = {
  href: string;
  label: string;
};

/** Canonical internal-link graph — use these presets so every page links the right spokes. */
export const RELATED_PRESETS = {
  download: [
    { href: ROUTES.howToUse, label: "Paano gamitin ang Delta Executor" },
    { href: ROUTES.keySystem, label: "Paano kumuha ng Delta key" },
    { href: ROUTES.keyNotWorking, label: "Ayos kapag hindi gumagana ang key" },
    { href: ROUTES.safety, label: "Ligtas ba ang Delta Executor?" },
    { href: ROUTES.whatIs, label: "Ano ang Delta Executor?" },
    { href: ROUTES.ios, label: "Gabay sa iOS install" },
    { href: ROUTES.pc, label: "Gabay sa PC / emulator" },
    { href: ROUTES.troubleshooting, label: "Troubleshooting" },
  ],
  ios: [
    { href: ROUTES.download, label: "Gabay sa Android download" },
    { href: ROUTES.keySystem, label: "Paano kumuha ng Delta key" },
    { href: ROUTES.howToUse, label: "Paano gamitin pagkatapos mag-install" },
    { href: ROUTES.safety, label: "Ligtas ba ang Delta Executor?" },
    { href: ROUTES.whatIs, label: "Ano ang Delta Executor?" },
    { href: ROUTES.keyNotWorking, label: "Hindi gumagana ang key" },
    { href: ROUTES.pc, label: "Gabay sa PC" },
  ],
  pc: [
    { href: ROUTES.download, label: "Android APK (para sa emulator)" },
    { href: ROUTES.mac, label: "Gabay sa Mac" },
    { href: ROUTES.keySystem, label: "Paano kumuha ng Delta key" },
    { href: ROUTES.howToUse, label: "Paano gamitin ang Delta Executor" },
    { href: ROUTES.troubleshooting, label: "Troubleshooting" },
    { href: ROUTES.safety, label: "Ligtas ba ang Delta Executor?" },
    { href: ROUTES.comparison, label: "Paghahambing ng executor" },
  ],
  mac: [
    { href: ROUTES.pc, label: "Gabay sa PC / emulator" },
    { href: ROUTES.ios, label: "Gabay sa iOS install" },
    { href: ROUTES.download, label: "Android download" },
    { href: ROUTES.troubleshooting, label: "Troubleshooting" },
    { href: ROUTES.keySystem, label: "Kumuha ng Delta key" },
  ],
  howToUse: [
    { href: ROUTES.download, label: "I-download ang Delta Executor" },
    { href: ROUTES.keySystem, label: "Paano kumuha ng Delta key" },
    { href: ROUTES.keyNotWorking, label: "Hindi gumagana ang key" },
    { href: ROUTES.whatIs, label: "Ano ang Delta Executor?" },
    { href: ROUTES.troubleshooting, label: "Troubleshooting" },
    { href: ROUTES.safety, label: "Ligtas ba ang Delta Executor?" },
  ],
  troubleshooting: [
    { href: ROUTES.download, label: "Download / muling i-install" },
    { href: ROUTES.keySystem, label: "Kumuha ng bagong Delta key" },
    { href: ROUTES.keyNotWorking, label: "Ayos sa mga error ng key" },
    { href: ROUTES.howToUse, label: "Paano gamitin ang Delta Executor" },
    { href: ROUTES.safety, label: "Ligtas ba ang Delta Executor?" },
    { href: ROUTES.discord, label: "Komunidad sa Discord" },
  ],
  vng: [
    { href: ROUTES.download, label: "Global Android download" },
    { href: ROUTES.keySystem, label: "Paano kumuha ng Delta key" },
    { href: ROUTES.troubleshooting, label: "Troubleshooting" },
    { href: ROUTES.comparison, label: "Paghahambing" },
    { href: ROUTES.safety, label: "Pagsusuri sa kaligtasan" },
  ],
  comparison: [
    { href: ROUTES.download, label: "I-download ang Delta Executor" },
    { href: ROUTES.whatIs, label: "Ano ang Delta Executor?" },
    { href: ROUTES.ios, label: "Gabay sa iOS" },
    { href: ROUTES.pc, label: "Gabay sa PC" },
    { href: ROUTES.safety, label: "Ligtas ba ang Delta Executor?" },
  ],
  discord: [
    { href: ROUTES.download, label: "Gabay sa download" },
    { href: ROUTES.keySystem, label: "Gabay sa key system" },
    { href: ROUTES.troubleshooting, label: "Troubleshooting" },
    { href: ROUTES.contact, label: "Makipag-ugnayan" },
  ],
  whatIs: [
    { href: ROUTES.download, label: "Download para sa Android" },
    { href: ROUTES.ios, label: "Gabay sa iOS install" },
    { href: ROUTES.pc, label: "Gabay sa PC" },
    { href: ROUTES.keySystem, label: "Paano kumuha ng Delta key" },
    { href: ROUTES.howToUse, label: "Paano gamitin ang Delta Executor" },
    { href: ROUTES.safety, label: "Ligtas ba ang Delta Executor?" },
    { href: ROUTES.keyNotWorking, label: "Hindi gumagana ang key" },
  ],
  keySystem: [
    { href: ROUTES.download, label: "I-download muna ang Delta Executor" },
    { href: ROUTES.howToUse, label: "Paano gamitin pagkatapos ng key" },
    { href: ROUTES.keyNotWorking, label: "Hindi gumagana ang key — ayusin ang error" },
    { href: ROUTES.whatIs, label: "Ano ang Delta Executor?" },
    { href: ROUTES.safety, label: "Ligtas ba ang Delta Executor?" },
  ],
  safety: [
    { href: ROUTES.download, label: "Ligtas na gabay sa download" },
    { href: ROUTES.whatIs, label: "Ano ang Delta Executor?" },
    { href: ROUTES.keySystem, label: "Paano gumagana ang key system" },
    { href: ROUTES.keyNotWorking, label: "Mga error at scam sa key" },
    { href: ROUTES.howToUse, label: "Paano gamitin nang ligtas" },
    { href: ROUTES.disclaimer, label: "Disclaimer" },
  ],
  keyNotWorking: [
    { href: ROUTES.keySystem, label: "Buong walkthrough sa key" },
    { href: ROUTES.troubleshooting, label: "Pangkalahatang troubleshooting" },
    { href: ROUTES.download, label: "I-download ulit ang APK" },
    { href: ROUTES.howToUse, label: "Paano gamitin ang Delta Executor" },
    { href: ROUTES.safety, label: "Ligtas ba ang Delta Executor?" },
    { href: ROUTES.whatIs, label: "Ano ang Delta Executor?" },
    { href: ROUTES.discord, label: "Magtanong sa Discord" },
  ],
  blogIndex: [
    { href: ROUTES.whatIs, label: "Ano ang Delta Executor?" },
    { href: ROUTES.keySystem, label: "Paano kumuha ng Delta key" },
    { href: ROUTES.safety, label: "Ligtas ba ang Delta Executor?" },
    { href: ROUTES.keyNotWorking, label: "Hindi gumagana ang key" },
    { href: ROUTES.download, label: "Pahina ng download" },
    { href: ROUTES.robuxToUsd, label: "Robux to USD converter" },
  ],
  robuxToUsd: [
    { href: ROUTES.download, label: "I-download ang Delta Executor" },
    { href: ROUTES.whatIs, label: "Ano ang Delta Executor?" },
    { href: ROUTES.howToUse, label: "Paano gamitin ang Delta Executor" },
    { href: ROUTES.safety, label: "Ligtas ba ang Delta Executor?" },
    { href: ROUTES.blog, label: "Blog ng Delta Executor" },
    { href: ROUTES.home, label: "Home" },
  ],
} as const;

export default function RelatedGuides({
  title = "Mga kaugnay na gabay",
  links,
}: {
  title?: string;
  links: RelatedLink[];
}) {
  if (!links.length) return null;
  return (
    <nav aria-label={title} className="mt-10">
      <h2 className="font-display text-xl font-bold text-white md:text-2xl">{title}</h2>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="block rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-pink transition hover:border-pink/35 hover:bg-pink/5"
            >
              {link.label} →
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}