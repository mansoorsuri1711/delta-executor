import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaButton from "@/components/CtaButton";
import {
  BRAND_FEATURE_2,
  BRAND_FEATURE_3,
  BRAND_FEATURE_4,
  OG_IMAGE,
  SITE_NAME,
  SITE_ORIGIN,
  SITE_RATING,
  STYLES_UPDATED,
} from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Özellikler — Yazı Stilleri Oluşturucu",
  description:
    "Kategorili Unicode stiller, tek tık kopyala, Türkçe harf desteği, gizlilik odaklı tarayıcı işleme, rehberler ve kullanıcı puanları.",
  alternates: { canonical: `${SITE_ORIGIN}/features` },
  openGraph: {
    title: "Yazı Stilleri Özellikleri",
    description: "Instagram, WhatsApp ve şekilli nick için ücretsiz araç seti.",
    url: `${SITE_ORIGIN}/features`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Yazı Stilleri özellikleri" }],
  },
};

const features = [
  {
    title: "Kategorili stil kütüphanesi",
    body: "Kalın, italik, estetik, oyun, çerçeve, kalp ve daha fazlası — filtre ve arama ile saniyede bulun.",
  },
  {
    title: "Tek tıkla kopyala",
    body: "Her stil satırında anında panoya kopyalama; mobil ve masaüstünde aynı akış.",
  },
  {
    title: "Türkçe karakter desteği",
    body: "ğ, ü, ş, ı, ö, ç harfleri desteklenen dönüşümlerde korunur; desteklenmeyenler düz kalır.",
  },
  {
    title: "Tarayıcıda gizlilik",
    body: "Metin dönüşümü cihazınızda gerçekleşir; hesap açmadan kullanırsınız.",
  },
  {
    title: "Platform rehberleri",
    body: "Instagram bio, şekilli nick, WhatsApp ve TikTok için SERP odaklı Türkçe sayfalar ve blog.",
  },
  {
    title: "Güncel stil seti",
    body: `Stil listesi ${STYLES_UPDATED} itibarıyla güncellenir; popüler Unicode varyantları eklenir.`,
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Ana Sayfa", href: "/" }, { label: "Özellikler" }]}
      />
      <div className="container mx-auto max-w-6xl px-4 pb-14 pt-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-3xl font-bold text-white md:text-5xl">
            {SITE_NAME} ile neler yapabilirsiniz?
          </h1>
          <p className="mt-4 text-white/55">
            Ücretsiz yazı stili oluşturucu, kopyala-yapıştır odaklı tasarım ve Türkiye’deki arama
            ihtiyacına göre yazılmış rehberler — tek pakette.
          </p>
          <p className="mt-3 text-sm text-white/40">
            Kullanıcı değerlendirmesi: {SITE_RATING.ratingValue}/{SITE_RATING.bestRating} (
            {SITE_RATING.ratingCount}+ oy)
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <article key={f.title} className="rounded-2xl border border-white/10 bg-card p-5">
              <h2 className="font-display text-xl font-bold text-white">{f.title}</h2>
              <p className="mt-2 text-sm text-white/55">{f.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            { src: BRAND_FEATURE_2, alt: "Online yazı stilleri arayüzü" },
            { src: BRAND_FEATURE_3, alt: "Yazı stili aracı önizlemesi" },
            { src: BRAND_FEATURE_4, alt: "Mobil yazı stilleri kullanımı" },
          ].map((img) => (
            <div key={img.src} className="overflow-hidden rounded-2xl border border-white/10 bg-muted">
              <Image
                src={img.src}
                alt={img.alt}
                width={1200}
                height={900}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="h-auto w-full object-contain"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <CtaButton href="/#generator">Ücretsiz dene</CtaButton>
          <Link href="/nasil-kullanilir" className="font-semibold text-pink hover:underline">
            Nasıl kullanılır →
          </Link>
        </div>
      </div>
    </>
  );
}
