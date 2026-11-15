import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedGuides, { RELATED_PRESETS } from "@/components/RelatedGuides";
import { OG_IMAGE, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Blog ng Delta Executor — Mga Gabay, Tulong sa Key at Safety Tips`,
  description:
    "Blog ng Delta Executor: gabay para sa mga nagsisimula, key system, kaligtasan at ban risk, at troubleshooting ng key error. In-update noong Nobyembre 2026.",
  alternates: { canonical: `${SITE_ORIGIN}/blog` },
  openGraph: {
    title: `Blog ng Delta Executor — ${SITE_NAME}`,
    description:
      "Praktikal na mga gabay para sa mga user ng Delta Executor — key system, impormasyon sa kaligtasan, at troubleshooting. Walang fluff, walang pekeng download link.",
    url: `${SITE_ORIGIN}/blog`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Blog ng ${SITE_NAME}` }],
  },
};

const posts = [
  {
    href: "/blog/what-is-delta-executor",
    title: "Ano ang Delta Executor? Kumpletong Gabay para sa Nagsisimula",
    excerpt:
      "Bago sa Delta Executor? Ang madaling maintindihang introduksyong ito ay sumasaklaw sa kung ano ito, anong mga platform ang sinusuportahan (Android, iOS, PC emulator), paano gumagana ang key system at mga script sa mataas na antas, at ang tunay na mga panganib na dapat mong unawain bago magsimula.",
    date: "Nobyembre 15, 2026",
    image: "/delta-executer.webp",
    imageAlt: "App na Delta Executor — screen na Get Key",
  },
  {
    href: "/blog/how-to-get-delta-executor-key",
    title: "Paano Kunin ang Iyong Delta Executor Key — Hakbang-hakbang (2026)",
    excerpt:
      "Nalilito ang mga baguhan sa key system, pero limang minuto lang kapag alam mo ang mga hakbang. Binibigyang-lakad ng gabay na ito ang bawat checkpoint sa Linkvertise, LootLabs, at Work.ink — walang install, walang survey. Kasama ang Premium skip at kung ano ang dapat iwasan.",
    date: "Nobyembre 15, 2026",
    image: "/delta-executor-free-download.webp",
    imageAlt: "Delta Executor — success screen ng key whitelist",
  },
  {
    href: "/blog/is-delta-executor-safe",
    title: "Ligtas ba ang Delta Executor? Tapatang Pagsusuri ng Panganib",
    excerpt:
      "Tinatalakay namin ang ban risk, kung ano talagang hinihingi ng Delta sa iyong phone, paano i-verify ang malinis na download gamit ang VirusTotal, panganib mula sa third-party script, at bakit walang executor ang dapat mag-claim na undetectable — diretsong usapan, walang sugarcoating.",
    date: "Nobyembre 15, 2026",
    image: "/delta-executor-logo.webp",
    imageAlt: "Opisyal na ninja logo ng Delta Executor",
  },
  {
    href: "/blog/delta-executor-key-not-working",
    title: "Hindi Gumagana ang Delta Executor Key — Ayusin ang Bawat Error",
    excerpt:
      "Saklaw ng lahat ng karaniwang pagkabigo ng key: 'Invalid Key,' Too Many Requests sa Linkvertise, adblock, device-bind error, natapos na checkpoint pero stuck, at bakit delikado ang bypass site. Tiyak na solusyon para sa bawat sitwasyon.",
    date: "Nobyembre 15, 2026",
    image: "/delta-executor-download.webp",
    imageAlt: "Delta Executor — download at unlock screen",
  },
];

export default function BlogIndexPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
      <div className="container mx-auto max-w-3xl px-4 pb-14 pt-6">
        <h1 className="font-display text-3xl font-bold text-white md:text-5xl">
          Blog ng Delta Executor
        </h1>
        <p className="mt-4 text-white/55">
          Praktikal na mga gabay para sa tunay na user ng Delta Executor — oryentasyon para sa
          nagsisimula, key system walkthrough, pagsusuri sa kaligtasan, at troubleshooting. Walang
          fluff, walang pekeng download link.
        </p>
        <ul className="mt-10 space-y-5">
          {posts.map((post) => (
            <li key={post.href}>
              <Link
                href={post.href}
                className="block rounded-2xl border border-white/10 bg-card transition hover:border-pink/35 overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="relative flex h-44 w-full shrink-0 items-center justify-center overflow-hidden bg-muted sm:h-auto sm:w-40">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      width={280}
                      height={455}
                      sizes="160px"
                      className="brand-shot-sm"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/30">
                      {post.date}
                    </p>
                    <h2 className="mt-1 font-display text-xl font-bold text-white">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-sm text-white/55">{post.excerpt}</p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <RelatedGuides title="Sikat na mga gabay at download" links={[...RELATED_PRESETS.blogIndex]} />
        <p className="mt-12 text-sm text-white/35">
          Handa nang magsimula?{" "}
          <Link href="/download-delta-executor" className="text-pink underline">
            Bisitahin ang download page
          </Link>{" "}
          o{" "}
          <Link href="/" className="text-pink underline">
            tingnan ang lahat ng feature
          </Link>
          .
        </p>
      </div>
    </>
  );
}