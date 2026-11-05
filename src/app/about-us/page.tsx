import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaButton from "@/components/CtaButton";
import {
  BRAND_LOGO,
  CONTACT_EMAIL,
  SITE_DOMAIN,
  SITE_NAME,
  SITE_ORIGIN,
  SOCIAL_LINKS,
} from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Hakkımızda — Yazı Stilleri",
  description:
    "Yazıstilleri.com.tr: Instagram, WhatsApp, TikTok ve oyun nickleri için ücretsiz Unicode yazı stili oluşturucu ve Türkçe rehberler.",
  alternates: { canonical: `${SITE_ORIGIN}/about-us` },
  openGraph: {
    title: "Hakkımızda — Yazı Stilleri",
    description: `${SITE_NAME} ekibi ve misyonu.`,
    url: `${SITE_ORIGIN}/about-us`,
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Ana Sayfa", href: "/" }, { label: "Hakkımızda" }]}
      />
      <div className="container mx-auto max-w-4xl px-4 pb-10 pt-8">
        <div className="mb-10 flex flex-col items-start gap-8 md:flex-row">
          <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-muted">
            <Image
              src={BRAND_LOGO}
              alt={`${SITE_NAME} logosu`}
              fill
              sizes="160px"
              className="object-contain p-3"
              priority
            />
          </div>
          <div>
            <h1 className="mb-4 font-display text-3xl font-bold text-white md:text-4xl">
              {SITE_NAME} hakkında
            </h1>
            <p className="text-lg leading-relaxed text-white/75">
              {SITE_NAME}, {SITE_DOMAIN} adresinde yayınlanan ücretsiz bir{" "}
              <strong className="text-white">yazı stili oluşturucu</strong> ve rehber sitesidir.
              Amacımız, Instagram bio’sundan WhatsApp durumuna, şekilli nick’ten estetik caption’a
              kadar Unicode metin ihtiyacını tek, hızlı ve anlaşılır bir yerde toplamak.
            </p>
          </div>
        </div>

        <div className="space-y-5 leading-relaxed text-white/75">
          <p>
            Türkiye’de “yazı stilleri”, “instagram yazı tipleri” ve “şekilli nick” aramaları
            çoğu zaman reklam dolu veya İngilizce arayüzlü sitelere yönlendiriyor. Biz aracı
            Türkçe etiketler, Türkçe karakter desteği ve platforma özel sayfalarla
            tasarladık. Dönüşüm tarayıcınızda gerçekleşir; hesap açmanız gerekmez.
          </p>
          <p>
            Instagram, Meta, WhatsApp, TikTok, PUBG veya Free Fire markalarının sahibi değiliz
            ve bu şirketlerle resmi bir iş ortaklığımız yoktur. Araç eğitim ve kişisel ifade
            amaçlıdır; oyun veya platform kurallarına uymak kullanıcının sorumluluğundadır.
          </p>
          <p>
            <Link href="/" className="text-pink underline">
              Ana oluşturucu
            </Link>
            ,{" "}
            <Link href="/instagram-yazi-tipleri" className="text-pink underline">
              Instagram yazı tipleri
            </Link>
            ,{" "}
            <Link href="/sekilli-nick" className="text-pink underline">
              şekilli nick
            </Link>{" "}
            ve{" "}
            <Link href="/blog" className="text-pink underline">
              blog rehberleri
            </Link>{" "}
            ile başlayabilirsiniz.
          </p>
          <p>
            Soru veya düzeltme için{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-pink underline">
              {CONTACT_EMAIL}
            </a>{" "}
            adresine yazın veya{" "}
            <Link href="/contact-us" className="text-pink underline">
              iletişim formunu
            </Link>{" "}
            kullanın. Bizi sosyal medyada da takip edebilirsiniz:{" "}
            <a href={SOCIAL_LINKS.instagram} className="text-pink underline" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            ,{" "}
            <a href={SOCIAL_LINKS.tiktok} className="text-pink underline" target="_blank" rel="noopener noreferrer">
              TikTok
            </a>
            .
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <CtaButton href="/#generator" ariaLabel="Yazı stili oluşturucuyu aç" icon="arrow">
            Oluşturucuyu aç
          </CtaButton>
        </div>
      </div>
    </>
  );
}
