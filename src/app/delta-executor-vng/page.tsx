import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaButton from "@/components/CtaButton";
import FaqSection from "@/components/FaqSection";
import RelatedGuides, { RELATED_PRESETS } from "@/components/RelatedGuides";
import {
  BRAND_FEATURE_2,
  OG_IMAGE,
  SITE_NAME,
  SITE_ORIGIN,
  APP_VERSION,
  STYLES_UPDATED,
  ANDROID_APK_URL,
} from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Delta Executor VNG — Vietnam Roblox Client Guide (${APP_VERSION})`,
  description:
    "Using Delta Executor with the VNG Roblox client in Vietnam. Understand VNG vs global Roblox, which Delta build to use, known compatibility issues, and how to switch between clients.",
  alternates: { canonical: `${SITE_ORIGIN}/delta-executor-vng` },
  openGraph: {
    title: `Delta Executor VNG (Vietnam) — ${SITE_NAME}`,
    description: "Delta Executor guide for the VNG Roblox client used in Vietnam.",
    url: `${SITE_ORIGIN}/delta-executor-vng`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Delta Executor VNG Vietnam guide` }],
  },
};

const faqItems = [
  {
    question: "What is the VNG Roblox client?",
    answer:
      "VNG is a Vietnamese game publisher that licenses and distributes Roblox in Vietnam under a local partnership. The VNG Roblox client is a separate APK from the global Roblox app — it has a different package name, different server endpoints, and may run on a different version cadence. Vietnamese players on the VNG client cannot directly access some global Roblox events or features.",
  },
  {
    question: "Why doesn't the standard Delta APK work with VNG Roblox?",
    answer:
      "The standard Delta Executor APK targets the global Roblox client's package name and injection offsets. The VNG client has a different package identifier and binary structure, so injection either fails silently or causes the game to crash. A VNG-specific Delta build patches the target package and offsets to match.",
  },
  {
    question: "How do I know if I have the VNG client or the global client?",
    answer:
      "Open the Play Store and search for 'Roblox.' If you see two results — 'Roblox' (by Roblox Corporation) and 'Roblox VNG' (by VNG) — you can choose. If you're in Vietnam and downloaded Roblox from the local Play Store listing, you likely have the VNG version. The VNG app icon may have slight differences in the splash screen.",
  },
  {
    question: "Can I switch from the VNG client to the global Roblox client?",
    answer:
      "Yes. Uninstall the VNG client and install the global Roblox app from the Play Store (by Roblox Corporation). Your Roblox account, progress, and Robux transfer between clients — the account is global, only the client differs. After switching, the standard Delta APK will work normally.",
  },
  {
    question: "Is there a Delta VNG build for iOS?",
    answer:
      "VNG Roblox's iOS availability is limited. If you are on a VNG iOS client, compatibility with Delta iOS IPA is not guaranteed. Check the Delta Discord for the latest VNG iOS status.",
  },
  {
    question: "Do VNG Roblox players face different ban risks?",
    answer:
      "The ban risk profile depends on Roblox's anti-cheat, which may differ between the VNG and global clients. Some users report the VNG client has less aggressive anti-cheat coverage, but this is not confirmed by Delta and should not be relied upon. Use an alternate account regardless.",
  },
  {
    question: "Where do I download the Delta VNG build?",
    answer:
      "The VNG-compatible Delta build is available from the official download page linked on this site. Look for the VNG variant download button. If only one APK is listed, check the Delta Discord — VNG builds are sometimes released separately from the main APK.",
  },
];

export default function VngPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "VNG (Vietnam)" }]}
      />

      {/* Hero */}
      <div className="container mx-auto max-w-6xl px-4 pb-4 pt-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          <div className="flex-1">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-pink/80">
              VNG · Vietnam Roblox · {APP_VERSION} · {STYLES_UPDATED}
            </p>
            <h1 className="font-display text-4xl font-bold text-white md:text-5xl">
              Delta Executor for VNG Roblox
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/65">
              Vietnamese Roblox players using the VNG client need a VNG-specific Delta build. This page explains the difference between VNG and global Roblox, which APK to use, and how to switch clients if needed.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <CtaButton href={ANDROID_APK_URL} icon="download">
                Download Delta APK {APP_VERSION}
              </CtaButton>
              <Link href="/download-delta-executor" className="font-semibold text-pink hover:underline self-center">
                Full download guide →
              </Link>
            </div>
            <p className="mt-3 text-xs text-white/35">
              Script executors violate Roblox&apos;s ToS. Use at your own risk on a secondary account.
            </p>
          </div>
          <div className="brand-shot-frame brand-shot-frame--side shrink-0">
            <Image
              src={BRAND_FEATURE_2}
              alt="Delta Executor on Android for VNG Roblox"
              width={280}
              height={455}
              sizes="220px"
              className="brand-shot"
              priority
            />
          </div>
        </div>
      </div>

      {/* VNG vs Global comparison */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-4 font-display text-2xl font-bold text-white">VNG Roblox vs Global Roblox</h2>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-sm text-white/70">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.04] text-left text-xs uppercase tracking-wider text-white/40">
                <th className="px-4 py-3">Feature</th>
                <th className="px-4 py-3">VNG Roblox</th>
                <th className="px-4 py-3">Global Roblox</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                ["Publisher", "VNG Corporation (Vietnam)", "Roblox Corporation (global)"],
                ["Region", "Vietnam (primary)", "Worldwide"],
                ["Package name", "Different from global", "com.roblox.client"],
                ["Update cadence", "May lag behind global", "Direct from Roblox"],
                ["Delta compatibility", "Requires VNG build", "Standard Delta APK"],
                ["Account", "Shared Roblox account", "Shared Roblox account"],
              ].map(([feat, vng, global]) => (
                <tr key={feat as string}>
                  <td className="px-4 py-3 font-semibold text-white">{feat}</td>
                  <td className="px-4 py-3">{vng}</td>
                  <td className="px-4 py-3">{global}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* How to identify and switch */}
      <div className="container mx-auto max-w-3xl px-4 pt-10 space-y-4">
        <h2 className="font-display text-2xl font-bold text-white">How to identify and switch clients</h2>
        <div className="rounded-2xl border border-white/10 bg-card p-6 space-y-3 text-sm text-white/70">
          <p>
            <strong className="text-white">Identifying your client:</strong> Open the Play Store and check which Roblox publisher you have installed. &ldquo;Roblox&rdquo; by Roblox Corporation is the global client. &ldquo;Roblox VNG&rdquo; by VNG is the Vietnam variant.
          </p>
          <p>
            <strong className="text-white">Switching to global:</strong> Uninstall the VNG client, then search for &ldquo;Roblox&rdquo; in the Play Store and install the version published by Roblox Corporation. Your account data, Robux, and game progress all carry over — only the local client binary changes.
          </p>
          <p>
            <strong className="text-white">Why switch?</strong> If you switch to the global client, the standard Delta Executor APK works without a separate VNG build. This also gives you access to global events and the latest Roblox features faster.
          </p>
        </div>
      </div>

      {/* FAQ */}
      <div className="container mx-auto max-w-3xl px-4 pb-14">
        <FaqSection title="VNG FAQ" items={faqItems} />
        <RelatedGuides links={[...RELATED_PRESETS.vng]} />
      </div>
    </>
  );
}
