import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogPostSchema from "@/components/BlogPostSchema";
import FaqSection from "@/components/FaqSection";
import CtaButton from "@/components/CtaButton";
import RelatedGuides, { RELATED_PRESETS } from "@/components/RelatedGuides";
import {
  BRAND_LOGO,
  OG_IMAGE,
  SITE_NAME,
  SITE_ORIGIN,
  APP_VERSION,
  ANDROID_APK_URL,
} from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Ligtas ba ang Delta Executor? Tapatang Pagsusuri ng Panganib (2026)`,
  description:
    "Tapatang tingin sa kaligtasan ng Delta Executor: panganib sa device vs ban sa account, VirusTotal check, mga permission ng app, at paano iwasan ang malicious script. Walang hype, walang cover-up.",
  alternates: { canonical: `${SITE_ORIGIN}/blog/is-delta-executor-safe` },
  openGraph: {
    title: `Ligtas ba ang Delta Executor? — ${SITE_NAME}`,
    description:
      "Panganib sa device, ban sa account, VirusTotal habits, at paano protektahan ang sarili sa paggamit ng Delta Executor.",
    url: `${SITE_ORIGIN}/blog/is-delta-executor-safe`,
    siteName: SITE_NAME,
    type: "article",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Ligtas ba ang Delta Executor?` }],
  },
};

const faqItems = [
  {
    question: "Ma-ba-ban ba ang Roblox account ko sa Delta Executor?",
    answer:
      "Ang paggamit ng anumang script executor — kabilang ang Delta — ay lumalabag sa Terms of Service ng Roblox. Maaaring magbigay ang Roblox ng warning, pansamantalang ban, at permanenteng ban sa account na nahuhuli sa executor. Totoo ang panganib. Maraming user ang gumagamit ng alt account para protektahan ang main.",
  },
  {
    question: "Virus ba ang Delta Executor?",
    answer:
      "Hindi malware ang opisyal na APK mula sa deltaexecutor.com.ph. Dahil kailangan ng Delta ng malalim na system permission para makipag-ugnayan sa Roblox, may antivirus na nagfa-flag nito bilang 'potentially unwanted program' (PUP) o 'hack tool.' Category label iyon, hindi kumpirmadong malware. Palaging i-verify ang SHA-256 hash ng na-download na file laban sa opisyal na site.",
  },
  {
    question: "Anong mga permission ang hinihingi ng Delta Executor?",
    answer:
      "Hinihingi ng Delta: 'Draw over other apps' (overlay, para sa injection UI sa ibabaw ng Roblox), storage access (basahin/isulat ang script), at internet access (key validation at Script Hub). Hindi nito hinihingi ang contacts, camera, microphone, o SMS.",
  },
  {
    question: "Undetectable ba ang Delta Executor?",
    answer:
      "Walang executor ang dapat tawaging 'undetectable.' Patuloy na ina-update ang anti-cheat ng Roblox. Sinisikap ng developer ng Delta na mapanatili ang compatibility, ngunit may nangyayaring ban. Huwag ituring ang anumang executor na permanenteng ligtas.",
  },
  {
    question: "Paano ko malalaman kung malinis ang Delta APK ko?",
    answer:
      "I-upload ang APK sa VirusTotal (virustotal.com). Asahan ang kaunting antivirus flag (1–5 sa 70+) sa tunay na executor APK — normal ito sa tool na nagmo-modify ng app process. Red flag ang maraming detection (10+), o trojan/ransomware/spyware. I-cross-check ang SHA-256 hash sa opisyal na download page.",
  },
  {
    question: "Dapat ba akong gumamit ng alt account para sa Delta?",
    answer:
      "Oo — ang dedicated Roblox alt account ang pinakamabisang proteksyon ng main account laban sa ban. Kung ma-ban ang alt, hindi apektado ang progress, Robux, at item sa main.",
  },
  {
    question: "Maaari bang nakawin ng Delta Executor ang Roblox password ko?",
    answer:
      "Hindi kinukuha ng opisyal na Delta Executor APK ang credentials. Mula sa script na pinapatakbo mo sa Roblox ang panganib ng credential theft, hindi sa Delta mismo. Huwag magpatakbo ng script na humihingi ng Roblox username, password, o cookies.",
  },
];

export default function IsDeltaSafePage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Ligtas ba ang Delta Executor?" },
        ]}
      />

      <BlogPostSchema
        title="Ligtas ba ang Delta Executor? Tapatang Pagsusuri ng Panganib (2026)"
        description="Tapatang tingin sa kaligtasan ng Delta Executor: panganib sa device vs ban, VirusTotal check, at paano iwasan ang malicious script."
        slug="is-delta-executor-safe"
        datePublished="2026-11-15"
        image={`${SITE_ORIGIN}${BRAND_LOGO}`}
      />

      {/* Hero */}
      <div className="container mx-auto max-w-6xl px-4 pb-4 pt-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          <div className="flex-1">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-pink/80">
              Gabay sa Kaligtasan · {APP_VERSION} · Nobyembre 15, 2026
            </p>
            <h1 className="font-display text-4xl font-bold text-white md:text-5xl">
              Ligtas ba ang Delta Executor?
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/65">
              Nuanced ang tapat na sagot: hindi malware ang opisyal na Delta APK, ngunit may tunay
              na Roblox ban risk at nangangailangan ng tamang habit para manatiling ligtas. Binibiyak
              ng artikulong ito ang bawat dimensyon ng &quot;ligtas&quot; upang makagawa ka ng informed na
              desisyon.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <CtaButton href={ANDROID_APK_URL} icon="download">
                I-download ang Opisyal na APK
              </CtaButton>
              <Link
                href="/download-delta-executor"
                className="font-semibold text-pink hover:underline self-center"
              >
                Gabay sa ligtas na install →
              </Link>
              <Link
                href="/disclaimer"
                className="font-semibold text-pink hover:underline self-center"
              >
                Disclaimer →
              </Link>
            </div>
          </div>
          <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-muted md:w-64 lg:w-72 flex items-center justify-center p-6">
            <Image
              src={BRAND_LOGO}
              alt="Opisyal na logo ng Delta Executor"
              width={256}
              height={256}
              sizes="(max-width: 768px) 256px, 288px"
              className="h-auto w-full max-w-[200px] object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Disclaimer banner */}
      <div className="container mx-auto max-w-3xl px-4 pt-8">
        <div className="rounded-2xl border border-yellow-500/30 bg-yellow-500/5 px-5 py-4">
          <p className="text-sm font-semibold text-yellow-400">Mahalagang disclaimer</p>
          <p className="mt-1 text-sm text-white/65">
            Lumalabag sa Terms of Service ng Roblox ang paggamit ng script executor at maaaring magresulta
            ng account suspension o permanenteng ban. Para sa impormasyon lamang ang artikulong ito. Gamitin
            ang Delta Executor sa sarili mong panganib.
          </p>
        </div>
      </div>

      {/* Device safety */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-4 font-display text-2xl font-bold text-white md:text-3xl">
          Kaligtasan ng device: delikado ba ang APK mismo?
        </h2>
        <p className="text-white/65 leading-relaxed">
          Ang opisyal na Delta Executor APK, na-download mula sa{" "}
          <strong className="text-white">deltaexecutor.com.ph</strong>, ay hindi malware sa tradisyonal
          na kahulugan. Hindi nito inilalabas ang personal na data mo, hindi ka sinusubscribe sa bayad
          na serbisyo, o ine-encrypt ang file para sa ransom. Gayunpaman, dahil kailangan nitong
          makipag-ugnayan sa ibang tumatakbong app (Roblox), nangangailangan ito ng elevated permission
          na bihira sa lehitimong app.
        </p>
        <p className="mt-4 text-white/65 leading-relaxed">
          Maaaring i-flag ng antivirus ang Delta bilang &quot;hack tool&quot; o &quot;PUP&quot; (potentially unwanted
          program). <em>Category</em> label ito, hindi patunay ng malicious na asal. Katulad na
          category flag ang natatanggap ng lahat ng major executor tool.
        </p>

        <h3 className="mt-8 mb-3 font-display text-xl font-bold text-white">
          Pag-verify ng download mo sa VirusTotal
        </h3>
        <ol className="space-y-2 text-sm text-white/65 leading-relaxed list-decimal list-inside">
          <li>I-download ang APK mula sa opisyal na site at tandaan ang filename.</li>
          <li>
            Pumunta sa{" "}
            <a
              href="https://www.virustotal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink hover:underline"
            >
              virustotal.com
            </a>{" "}
            at i-upload ang file.
          </li>
          <li>Hintayin matapos ang scan (karaniwang wala pang 60 segundo).</li>
          <li>
            Asahan ang 0–5 detection sa malinis na executor APK. Seryosong red flag ang detection na
            may label na <strong className="text-white">trojan</strong>,{" "}
            <strong className="text-white">spyware</strong>, o{" "}
            <strong className="text-white">ransomware</strong> — huwag i-install ang file na iyon.
          </li>
          <li>
            I-cross-check ang SHA-256 hash sa VirusTotal laban sa hash sa{" "}
            <Link href="/download-delta-executor" className="text-pink hover:underline">
              download page
            </Link>
            .
          </li>
        </ol>
      </div>

      {/* Permissions */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-4 font-display text-2xl font-bold text-white md:text-3xl">
          Mga permission na hinihingi ng Delta — at bakit
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-sm text-white/70">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.04] text-left text-xs uppercase tracking-wider text-white/40">
                <th className="px-4 py-3">Permission</th>
                <th className="px-4 py-3">Bakit kailangan</th>
                <th className="px-4 py-3">Antas ng panganib</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                [
                  "Draw over other apps (overlay)",
                  "Ipinapakita ang Delta UI sa ibabaw ng Roblox",
                  "Mababa",
                ],
                [
                  "Storage access",
                  "Nagbabasa at nagsusulat ng script file sa device mo",
                  "Mababa",
                ],
                [
                  "Internet access",
                  "Key validation, Script Hub content, update",
                  "Mababa",
                ],
              ].map(([perm, reason, risk]) => (
                <tr key={perm as string}>
                  <td className="px-4 py-3 font-semibold text-white">{perm}</td>
                  <td className="px-4 py-3">{reason}</td>
                  <td className="px-4 py-3 text-green-400">{risk}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-white/50">
          <strong className="text-white/80">Hindi</strong> humihingi ang Delta ng contacts, camera,
          microphone, SMS, o location. Kung humihingi ang bersyon ng &quot;Delta&quot; ng mga iyon, peke o
          binago ang APK.
        </p>
      </div>

      {/* Account (Roblox) risk */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-4 font-display text-2xl font-bold text-white md:text-3xl">
          Panganib sa account (Roblox ban)
        </h2>
        <p className="text-white/65 leading-relaxed">
          Ito ang <strong className="text-white">pinakamalaking tunay na panganib</strong>. Malinaw na
          ipinagbabawal ng Terms of Service ng Roblox ang third-party client, automation, o script
          execution. Kapag na-detect ang executor activity — sa client-side telemetry, server-side
          anomaly detection, o report ng player — maaaring temporary ban o permanenteng termination ang
          account.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            {
              label: "Mas mababang panganib na habit",
              color: "border-green-500/30 bg-green-500/5",
              label_color: "text-green-400",
              items: [
                "Gumamit ng dedicated alt account",
                "Iwasan ang competitive o ranked game mode",
                "Huwag gumamit ng obvious unfair advantage (aimbot, speed hack)",
                "Panatilihing updated ang Delta",
                "Script mula sa pinagkakatiwalaang source lamang",
              ],
            },
            {
              label: "Mas mataas na panganib na habit",
              color: "border-red-500/30 bg-red-500/5",
              label_color: "text-red-400",
              items: [
                "Ginagamit ang main account na may taon ng progress",
                "Aimbot o wallhack kung saan maaaring i-report ka",
                "Lumang Delta pagkatapos ng Roblox update",
                "Script mula sa random Discord nang hindi binabasa ang code",
                "Paniniwala na 'undetectable' ang executor",
              ],
            },
          ].map((col) => (
            <div
              key={col.label}
              className={`rounded-2xl border p-5 ${col.color}`}
            >
              <p className={`mb-3 text-sm font-semibold ${col.label_color}`}>{col.label}</p>
              <ul className="space-y-1.5 text-sm text-white/65">
                {col.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="shrink-0 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-white/55">
          Bago sa Delta? Basahin ang{" "}
          <Link href="/blog/what-is-delta-executor" className="text-pink hover:underline">
            ano ang Delta Executor
          </Link>
          . Saklaw sa{" "}
          <Link href="/blog/delta-executor-key-not-working" className="text-pink hover:underline">
            hindi gumagana ang key
          </Link>{" "}
          ang problema sa unlock at bypass scam.
        </p>
      </div>

      {/* Script safety */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-4 font-display text-2xl font-bold text-white md:text-3xl">
          Malicious script — nakatagong panganib sa loob ng ligtas na executor
        </h2>
        <p className="text-white/65 leading-relaxed">
          Kahit malinis ang Delta mismo, ikaw ang responsable sa <em>script</em> na pinapatakbo mo.
          Maaaring basahin ng script ang local data ng Roblox client, gumawa ng aksyon sa account mo,
          o mag-load ng remote code. Ganito manatiling ligtas:
        </p>
        <ul className="mt-4 space-y-3 text-white/65 leading-relaxed">
          <li className="flex gap-3">
            <span className="text-pink font-bold shrink-0 mt-0.5">→</span>
            <span>
              <strong className="text-white">Suriin muna ang script bago i-execute</strong> — kung
              daan-daang linya at hindi mo mabasa, huwag patakbuhin.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-pink font-bold shrink-0 mt-0.5">→</span>
            <span>
              <strong className="text-white">Huwag magpatakbo ng script na humihingi ng login</strong> —
              walang lehitimong Roblox script ang kailangan ng username o password.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-pink font-bold shrink-0 mt-0.5">→</span>
            <span>
              <strong className="text-white">Mas mainam ang built-in Script Hub ng Delta</strong> —
              vet ng Delta team at regular na ina-update ang mga script.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-pink font-bold shrink-0 mt-0.5">→</span>
            <span>
              <strong className="text-white">Mag-ingat sa script mula sa Discord DM</strong> — madalas
              nagsisimula ang social-engineering sa pag-&quot;regalo&quot; ng script.
            </span>
          </li>
        </ul>
      </div>

      {/* FAQ */}
      <div className="container mx-auto max-w-3xl px-4 pb-6">
        <FaqSection title="FAQ sa Kaligtasan" items={faqItems} />
      </div>

      <div className="container mx-auto max-w-3xl px-4 pb-14">
        <RelatedGuides links={[...RELATED_PRESETS.safety]} />
      </div>
    </>
  );
}
