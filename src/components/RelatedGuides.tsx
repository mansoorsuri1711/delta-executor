import Link from "next/link";
import { ROUTES } from "@/lib/routes";

export type RelatedLink = {
  href: string;
  label: string;
};

/** Canonical internal-link graph — use these presets so every page links the right spokes. */
export const RELATED_PRESETS = {
  download: [
    { href: ROUTES.howToUse, label: "How to use Delta Executor" },
    { href: ROUTES.keySystem, label: "How to get a Delta key" },
    { href: ROUTES.keyNotWorking, label: "Key not working fixes" },
    { href: ROUTES.safety, label: "Is Delta Executor safe?" },
    { href: ROUTES.whatIs, label: "What is Delta Executor?" },
    { href: ROUTES.ios, label: "iOS install guide" },
    { href: ROUTES.pc, label: "PC / emulator guide" },
    { href: ROUTES.troubleshooting, label: "Troubleshooting" },
  ],
  ios: [
    { href: ROUTES.download, label: "Android download guide" },
    { href: ROUTES.keySystem, label: "How to get a Delta key" },
    { href: ROUTES.howToUse, label: "How to use after install" },
    { href: ROUTES.safety, label: "Is Delta Executor safe?" },
    { href: ROUTES.whatIs, label: "What is Delta Executor?" },
    { href: ROUTES.keyNotWorking, label: "Key not working" },
    { href: ROUTES.pc, label: "PC guide" },
  ],
  pc: [
    { href: ROUTES.download, label: "Android APK (for emulator)" },
    { href: ROUTES.mac, label: "Mac guide" },
    { href: ROUTES.keySystem, label: "How to get a Delta key" },
    { href: ROUTES.howToUse, label: "How to use Delta Executor" },
    { href: ROUTES.troubleshooting, label: "Troubleshooting" },
    { href: ROUTES.safety, label: "Is Delta Executor safe?" },
    { href: ROUTES.comparison, label: "Executor comparison" },
  ],
  mac: [
    { href: ROUTES.pc, label: "PC / emulator guide" },
    { href: ROUTES.ios, label: "iOS install guide" },
    { href: ROUTES.download, label: "Android download" },
    { href: ROUTES.troubleshooting, label: "Troubleshooting" },
    { href: ROUTES.keySystem, label: "Get Delta key" },
  ],
  howToUse: [
    { href: ROUTES.download, label: "Download Delta Executor" },
    { href: ROUTES.keySystem, label: "How to get a Delta key" },
    { href: ROUTES.keyNotWorking, label: "Key not working" },
    { href: ROUTES.whatIs, label: "What is Delta Executor?" },
    { href: ROUTES.troubleshooting, label: "Troubleshooting" },
    { href: ROUTES.safety, label: "Is Delta Executor safe?" },
  ],
  troubleshooting: [
    { href: ROUTES.download, label: "Download / reinstall" },
    { href: ROUTES.keySystem, label: "Get a fresh Delta key" },
    { href: ROUTES.keyNotWorking, label: "Key-specific error fixes" },
    { href: ROUTES.howToUse, label: "How to use Delta Executor" },
    { href: ROUTES.safety, label: "Is Delta Executor safe?" },
    { href: ROUTES.discord, label: "Discord community" },
  ],
  vng: [
    { href: ROUTES.download, label: "Global Android download" },
    { href: ROUTES.keySystem, label: "How to get a Delta key" },
    { href: ROUTES.troubleshooting, label: "Troubleshooting" },
    { href: ROUTES.comparison, label: "Comparison" },
    { href: ROUTES.safety, label: "Safety review" },
  ],
  comparison: [
    { href: ROUTES.download, label: "Download Delta Executor" },
    { href: ROUTES.whatIs, label: "What is Delta Executor?" },
    { href: ROUTES.ios, label: "iOS guide" },
    { href: ROUTES.pc, label: "PC guide" },
    { href: ROUTES.safety, label: "Is Delta Executor safe?" },
  ],
  discord: [
    { href: ROUTES.download, label: "Download guide" },
    { href: ROUTES.keySystem, label: "Key system guide" },
    { href: ROUTES.troubleshooting, label: "Troubleshooting" },
    { href: ROUTES.contact, label: "Contact us" },
  ],
  whatIs: [
    { href: ROUTES.download, label: "Download for Android" },
    { href: ROUTES.ios, label: "iOS install guide" },
    { href: ROUTES.pc, label: "PC guide" },
    { href: ROUTES.keySystem, label: "How to get a Delta key" },
    { href: ROUTES.howToUse, label: "How to use Delta Executor" },
    { href: ROUTES.safety, label: "Is Delta Executor safe?" },
    { href: ROUTES.keyNotWorking, label: "Key not working" },
  ],
  keySystem: [
    { href: ROUTES.download, label: "Download Delta Executor first" },
    { href: ROUTES.howToUse, label: "How to use after the key" },
    { href: ROUTES.keyNotWorking, label: "Key not working — fix errors" },
    { href: ROUTES.whatIs, label: "What is Delta Executor?" },
    { href: ROUTES.safety, label: "Is Delta Executor safe?" },
  ],
  safety: [
    { href: ROUTES.download, label: "Safe download guide" },
    { href: ROUTES.whatIs, label: "What is Delta Executor?" },
    { href: ROUTES.keySystem, label: "How the key system works" },
    { href: ROUTES.keyNotWorking, label: "Key errors & scams" },
    { href: ROUTES.howToUse, label: "How to use safely" },
    { href: ROUTES.disclaimer, label: "Disclaimer" },
  ],
  keyNotWorking: [
    { href: ROUTES.keySystem, label: "Full key walkthrough" },
    { href: ROUTES.troubleshooting, label: "General troubleshooting" },
    { href: ROUTES.download, label: "Re-download APK" },
    { href: ROUTES.howToUse, label: "How to use Delta Executor" },
    { href: ROUTES.safety, label: "Is Delta Executor safe?" },
    { href: ROUTES.whatIs, label: "What is Delta Executor?" },
    { href: ROUTES.discord, label: "Ask on Discord" },
  ],
  blogIndex: [
    { href: ROUTES.whatIs, label: "What is Delta Executor?" },
    { href: ROUTES.keySystem, label: "How to get a Delta key" },
    { href: ROUTES.safety, label: "Is Delta Executor safe?" },
    { href: ROUTES.keyNotWorking, label: "Key not working" },
    { href: ROUTES.download, label: "Download page" },
  ],
} as const;

export default function RelatedGuides({
  title = "Related guides",
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
