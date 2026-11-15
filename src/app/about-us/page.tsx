import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaButton from "@/components/CtaButton";
import RelatedGuides, { RELATED_PRESETS } from "@/components/RelatedGuides";
import {
  BRAND_LOGO,
  CONTACT_EMAIL,
  SITE_DOMAIN,
  SITE_NAME,
  SITE_ORIGIN,
  SOCIAL_LINKS,
  APP_VERSION,
  ANDROID_APK_URL,
} from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Tungkol sa Amin — ${SITE_NAME}`,
  description: `Alamin ang tungkol sa ${SITE_NAME}: sino kami, aming misyon na maglathala ng tapatang gabay sa Delta Executor para sa Android, iOS, PC, at Mac, at paano makipag-ugnayan sa aming team.`,
  alternates: { canonical: `${SITE_ORIGIN}/about-us` },
  openGraph: {
    title: `Tungkol sa ${SITE_NAME}`,
    description: `Ang team at misyon sa likod ng nangungunang site ng gabay sa Delta Executor.`,
    url: `${SITE_ORIGIN}/about-us`,
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Tungkol sa Amin" }]}
      />
      <div className="container mx-auto max-w-4xl px-4 pb-10 pt-8">
        <div className="mb-10 flex flex-col items-start gap-8 md:flex-row">
          <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-muted">
            <Image
              src={BRAND_LOGO}
              alt={`Logo ng ${SITE_NAME}`}
              fill
              sizes="160px"
              className="object-contain p-3"
              priority
            />
          </div>
          <div>
            <h1 className="mb-4 font-display text-3xl font-bold text-white md:text-4xl">
              Tungkol sa {SITE_NAME}
            </h1>
            <p className="text-lg leading-relaxed text-white/75">
              Ang {SITE_NAME} ({SITE_DOMAIN}) ay independent na site ng gabay na nakatuon sa{" "}
              <strong className="text-white">Delta Executor</strong> — ang libreng Roblox script executor para sa Android at iOS.
              Naglalathala kami ng hakbang-hakbang na gabay sa install, walkthrough sa key system, impormasyon sa kaligtasan, at mga tip sa paggamit upang matulungan ang komunidad na masulit ang bersyon {APP_VERSION}.
            </p>
          </div>
        </div>

        <div className="space-y-5 leading-relaxed text-white/75">
          <h2 className="font-display text-xl font-bold text-white">Bakit namin ginawa ang site na ito</h2>
          <p>
            Mas mahirap kaysa dapat ang makahanap ng tama at updated na impormasyon tungkol sa Delta Executor. Karamihan sa resulta ng paghahanap ay lumang tutorial para sa dating bersyon, nakakalinlang na YouTube thumbnail, o outright scam page na namamahagi ng malware na disguised bilang executor. Ginawa namin ang {SITE_NAME} bilang maaasahan at tapat na sanggunian — malinaw na ipinapaliwanag kung ano ang ginagawa ng Delta, anong mga panganib ang mayroon, at paano ito ligtas na i-install.
          </p>
          <p>
            Hindi kami kaanib sa, ineendorso ng, o sponsored ng Roblox Corporation o ng sinumang game developer sa Roblox platform. Ang Delta Executor ay third-party tool; ang paggamit nito ay maaaring lumabag sa Terms of Service ng Roblox at may ban risk. Sinasabi namin ito nang malinaw sa buong gabay dahil naniniwala kaming karapatan ng mga user ang tumpak na impormasyon, hindi hype.
          </p>
          <h2 className="font-display text-xl font-bold text-white">Ano ang saklaw namin</h2>
          <ul className="ml-4 list-disc space-y-1 text-white/65">
            <li>
              <Link href="/download-delta-executor" className="text-pink underline">Android APK download at gabay sa install</Link>
            </li>
            <li>
              <Link href="/delta-executor-ios" className="text-pink underline">Gabay sa iOS sideloading</Link> (Direct Install, AltStore, TrollStore)
            </li>
            <li>
              <Link href="/delta-executor-pc" className="text-pink underline">Gabay sa PC</Link> at <Link href="/delta-executor-mac" className="text-pink underline">Mac</Link> via Android emulator
            </li>
            <li>
              <Link href="/how-to-use-delta-executor" className="text-pink underline">Paano gamitin ang Delta Executor</Link> — injection, Script Hub, Editor
            </li>
            <li>
              <Link href="/delta-executor-troubleshooting" className="text-pink underline">Gabay sa troubleshooting</Link> para sa injection failure, key error, at crash
            </li>
            <li>
              <Link href="/blog" className="text-pink underline">Blog</Link>:{" "}
              <Link href="/blog/what-is-delta-executor" className="text-pink underline">ano ang Delta</Link>,{" "}
              <Link href="/blog/how-to-get-delta-executor-key" className="text-pink underline">paano kumuha ng key</Link>,{" "}
              <Link href="/blog/is-delta-executor-safe" className="text-pink underline">ligtas ba ito</Link>, at{" "}
              <Link href="/blog/delta-executor-key-not-working" className="text-pink underline">hindi gumagana ang key</Link>
            </li>
          </ul>
          <h2 className="font-display text-xl font-bold text-white">Paano namin pinapanatiling tama ang content</h2>
          <p>
            Isinulat at ni-review ng mga miyembro ng executor community na sumusubok sa Delta sa maraming Android device at iOS firmware version. Ina-update namin ang mga pahina sa loob ng ilang araw pagkatapos ng malalaking Roblox patch o bagong Delta release. Kung may nakita kang error o lumang detalye, gamitin ang{" "}
            <Link href="/contact-us" className="text-pink underline">contact form</Link> — pinahahalagahan namin ang mga correction.
          </p>
          <p>
            Para sa tanong, correction, o partnership inquiry, mag-email sa{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-pink underline">
              {CONTACT_EMAIL}
            </a>{" "}
            o gamitin ang{" "}
            <Link href="/contact-us" className="text-pink underline">contact form</Link>.
            Sundan ang{" "}
            <a href={SOCIAL_LINKS.telegram} className="text-pink underline" target="_blank" rel="noopener noreferrer">Telegram</a>,{" "}
            <a href={SOCIAL_LINKS.facebook} className="text-pink underline" target="_blank" rel="noopener noreferrer">Facebook</a>,{" "}
            <a href={SOCIAL_LINKS.x} className="text-pink underline" target="_blank" rel="noopener noreferrer">X</a>, o{" "}
            <Link href="/delta-executor-discord" className="text-pink underline">Discord</Link> para sa mga announcement ng update.
          </p>
        </div>

        <RelatedGuides
          title="Mga gabay na inirerekomenda muna"
          links={[
            ...RELATED_PRESETS.blogIndex,
            { href: "/how-to-use-delta-executor", label: "Paano gamitin ang Delta Executor" },
            { href: "/delta-executor-troubleshooting", label: "Troubleshooting" },
          ]}
        />

        <div className="mt-10 flex justify-center">
          <CtaButton href={ANDROID_APK_URL} icon="download" ariaLabel="Pumunta sa download page ng Delta Executor">
            I-download ang Delta Executor
          </CtaButton>
        </div>
      </div>
    </>
  );
}