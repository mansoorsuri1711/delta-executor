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
  title: `Is Delta Executor Safe? Honest Risk Assessment (2026)`,
  description:
    "An honest look at Delta Executor safety: device risk vs account ban risk, VirusTotal checks, permissions the app requests, and how to avoid malicious scripts. No hype, no cover-ups.",
  alternates: { canonical: `${SITE_ORIGIN}/blog/is-delta-executor-safe` },
  openGraph: {
    title: `Is Delta Executor Safe? — ${SITE_NAME}`,
    description:
      "Device risk, account ban risk, VirusTotal habits, and how to protect yourself when using Delta Executor.",
    url: `${SITE_ORIGIN}/blog/is-delta-executor-safe`,
    siteName: SITE_NAME,
    type: "article",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Is Delta Executor safe?` }],
  },
};

const faqItems = [
  {
    question: "Will Delta Executor get my Roblox account banned?",
    answer:
      "Using any script executor — including Delta — violates Roblox's Terms of Service. Roblox can and does issue account warnings, temporary bans, and permanent bans to accounts caught running executors. The risk is real. Many users choose an alt account specifically to protect their main.",
  },
  {
    question: "Is Delta Executor a virus?",
    answer:
      "The official APK from deltaexecutor.com.ph is not malware. Because Delta requires deep system permissions to interact with Roblox, some antivirus engines flag it as a 'potentially unwanted program' (PUP) or 'hack tool.' That is a category label, not a confirmed malware detection. Always verify the SHA-256 hash of the file you downloaded against the one published on the official site.",
  },
  {
    question: "What permissions does Delta Executor request?",
    answer:
      "Delta requests: 'Draw over other apps' (overlay, needed to display the injection UI on top of Roblox), storage access (to read/write scripts), and internet access (for key validation and Script Hub). It does not request contacts, camera, microphone, or SMS access.",
  },
  {
    question: "Is Delta Executor undetectable?",
    answer:
      "No executor should ever be called 'undetectable.' Roblox's anti-cheat is updated continuously and detection methods evolve. Delta's developers work to maintain compatibility, but bans do occur. Never treat any executor as permanently safe.",
  },
  {
    question: "How can I check if my Delta APK is clean?",
    answer:
      "Upload the APK to VirusTotal (virustotal.com). Expect a small number of antivirus flags (1–5 out of 70+) on any real executor APK — this is normal for tools that modify app processes. A large number of detections (10+), or detections for 'trojan,' 'ransomware,' or 'spyware,' is a red flag. Cross-check the file's SHA-256 hash on the official download page.",
  },
  {
    question: "Should I use an alt account for Delta?",
    answer:
      "Yes — using a dedicated Roblox alt account is the single most effective way to protect your main account from a ban. If the alt gets banned, your progress, Robux, and items on the main account are unaffected.",
  },
  {
    question: "Can Delta Executor steal my Roblox password?",
    answer:
      "The official Delta Executor APK does not harvest credentials. The risk of credential theft comes from scripts you run inside Roblox, not from Delta itself. Never execute scripts that ask for your Roblox username, password, or cookies.",
  },
];

export default function IsDeltaSafePage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Is Delta Executor Safe?" },
        ]}
      />

      <BlogPostSchema
        title="Is Delta Executor Safe? An Honest Risk Assessment (2026)"
        description="An honest look at Delta Executor safety: device risk vs account ban risk, VirusTotal checks, and how to avoid malicious scripts."
        slug="is-delta-executor-safe"
        datePublished="2026-11-15"
        image={`${SITE_ORIGIN}${BRAND_LOGO}`}
      />

      {/* Hero */}
      <div className="container mx-auto max-w-6xl px-4 pb-4 pt-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          <div className="flex-1">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-pink/80">
              Safety Guide · {APP_VERSION} · November 15, 2026
            </p>
            <h1 className="font-display text-4xl font-bold text-white md:text-5xl">
              Is Delta Executor Safe?
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/65">
              The honest answer is nuanced: the official Delta APK is not malware, but using it
              carries real Roblox ban risk and demands certain habits to stay safe. This article
              breaks down every dimension of "safe" so you can make an informed decision.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <CtaButton href={ANDROID_APK_URL} icon="download">
                Download Official APK
              </CtaButton>
              <Link
                href="/download-delta-executor"
                className="font-semibold text-pink hover:underline self-center"
              >
                Safe install guide →
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
              alt="Delta Executor official logo"
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
          <p className="text-sm font-semibold text-yellow-400">Important disclaimer</p>
          <p className="mt-1 text-sm text-white/65">
            Using script executors violates Roblox's Terms of Service and may result in account
            suspensions or permanent bans. This article is for informational purposes only. Use
            Delta Executor at your own risk.
          </p>
        </div>
      </div>

      {/* Device safety */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-4 font-display text-2xl font-bold text-white md:text-3xl">
          Device safety: is the APK itself dangerous?
        </h2>
        <p className="text-white/65 leading-relaxed">
          The official Delta Executor APK, downloaded from <strong className="text-white">deltaexecutor.com.ph</strong>, is
          not malware in the traditional sense. It does not exfiltrate your personal data, subscribe
          you to paid services, or encrypt your files for ransom. However, because it needs to
          interact with another running app (Roblox), it requires elevated permissions that
          legitimate apps rarely need.
        </p>
        <p className="mt-4 text-white/65 leading-relaxed">
          Antivirus tools may flag Delta as a "hack tool" or "PUP" (potentially unwanted program).
          This is a <em>category</em> label, not proof of malicious behaviour. All major executor
          tools receive similar category flags.
        </p>

        <h3 className="mt-8 mb-3 font-display text-xl font-bold text-white">
          Verifying your download with VirusTotal
        </h3>
        <ol className="space-y-2 text-sm text-white/65 leading-relaxed list-decimal list-inside">
          <li>Download the APK from the official site and note the filename.</li>
          <li>
            Go to{" "}
            <a
              href="https://www.virustotal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink hover:underline"
            >
              virustotal.com
            </a>{" "}
            and upload the file.
          </li>
          <li>Wait for the scan to complete (usually under 60 seconds).</li>
          <li>
            Expect 0–5 detections on a clean executor APK. Detections labeled{" "}
            <strong className="text-white">trojan</strong>,{" "}
            <strong className="text-white">spyware</strong>, or{" "}
            <strong className="text-white">ransomware</strong> are serious red flags — do not
            install that file.
          </li>
          <li>
            Cross-check the SHA-256 hash shown by VirusTotal against the hash published on the{" "}
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
          Permissions Delta requests — and why
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-sm text-white/70">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.04] text-left text-xs uppercase tracking-wider text-white/40">
                <th className="px-4 py-3">Permission</th>
                <th className="px-4 py-3">Why it's needed</th>
                <th className="px-4 py-3">Risk level</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                [
                  "Draw over other apps (overlay)",
                  "Displays the Delta UI on top of Roblox",
                  "Low",
                ],
                [
                  "Storage access",
                  "Reads and writes script files to your device",
                  "Low",
                ],
                [
                  "Internet access",
                  "Key validation, Script Hub content, updates",
                  "Low",
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
          Delta does <strong className="text-white/80">not</strong> request contacts, camera,
          microphone, SMS, or location. If a version of "Delta" asks for those, you have a fake or
          tampered APK.
        </p>
      </div>

      {/* Account (Roblox) risk */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-4 font-display text-2xl font-bold text-white md:text-3xl">
          Account (Roblox ban) risk
        </h2>
        <p className="text-white/65 leading-relaxed">
          This is the <strong className="text-white">biggest real risk</strong>. Roblox's Terms of
          Service explicitly prohibit using third-party clients, automation, or script execution. If
          Roblox detects executor activity — through client-side telemetry, server-side anomaly
          detection, or player reports — the account can receive a temporary ban or a permanent
          termination.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            {
              label: "Lower-risk habit",
              color: "border-green-500/30 bg-green-500/5",
              label_color: "text-green-400",
              items: [
                "Use a dedicated alt account",
                "Avoid competitive or ranked game modes",
                "Don't use scripts that give obvious unfair advantages (aimbots, speed hacks)",
                "Keep Delta updated to the latest version",
                "Only run scripts from trusted sources",
              ],
            },
            {
              label: "Higher-risk habit",
              color: "border-red-500/30 bg-red-500/5",
              label_color: "text-red-400",
              items: [
                "Using your main account with years of progress",
                "Running aimbots or wallhacks where other players can report you",
                "Using outdated Delta versions after a Roblox update",
                "Running scripts from random Discord servers without reviewing the code",
                "Believing any claim that an executor is 'undetectable'",
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
          New to Delta? Read{" "}
          <Link href="/blog/what-is-delta-executor" className="text-pink hover:underline">
            what is Delta Executor
          </Link>
          . Key unlock problems and bypass scams are covered in{" "}
          <Link href="/blog/delta-executor-key-not-working" className="text-pink hover:underline">
            key not working
          </Link>
          .
        </p>
      </div>

      {/* Script safety */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-4 font-display text-2xl font-bold text-white md:text-3xl">
          Malicious scripts — the hidden risk inside safe executors
        </h2>
        <p className="text-white/65 leading-relaxed">
          Even if Delta itself is clean, the <em>scripts</em> you run inside it are entirely your
          responsibility. A script can read your Roblox client's local data, perform actions in
          your account, or even attempt to load remote code. Here is how to stay safe:
        </p>
        <ul className="mt-4 space-y-3 text-white/65 leading-relaxed">
          <li className="flex gap-3">
            <span className="text-pink font-bold shrink-0 mt-0.5">→</span>
            <span>
              <strong className="text-white">Review scripts before executing</strong> — if a script
              is hundreds of lines long and you can't read it, don't run it.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-pink font-bold shrink-0 mt-0.5">→</span>
            <span>
              <strong className="text-white">Never run scripts that ask for your login</strong> — no
              legitimate Roblox script needs your username or password.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-pink font-bold shrink-0 mt-0.5">→</span>
            <span>
              <strong className="text-white">Prefer Delta's built-in Script Hub</strong> — these
              scripts are vetted by the Delta team and updated regularly.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-pink font-bold shrink-0 mt-0.5">→</span>
            <span>
              <strong className="text-white">Be cautious with scripts from Discord DMs</strong> — 
              social-engineering attacks often start with someone "gifting" you a script.
            </span>
          </li>
        </ul>
      </div>

      {/* FAQ */}
      <div className="container mx-auto max-w-3xl px-4 pb-6">
        <FaqSection title="Safety FAQ" items={faqItems} />
      </div>

      <div className="container mx-auto max-w-3xl px-4 pb-14">
        <RelatedGuides links={[...RELATED_PRESETS.safety]} />
      </div>
    </>
  );
}
