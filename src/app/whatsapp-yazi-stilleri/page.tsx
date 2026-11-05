import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaButton from "@/components/CtaButton";
import FaqSection from "@/components/FaqSection";
import FontStyleGenerator from "@/components/FontStyleGenerator";
import { BRAND_FEATURE_4, OG_IMAGE, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "WhatsApp Yazı Stilleri — Durum & Sohbet Fontları",
  description:
    "WhatsApp durum, grup adı ve sohbet mesajları için şekilli yazı. Kopyala-yapıştır Unicode stiller; TikTok ve Instagram ile uyumlu.",
  alternates: { canonical: `${SITE_ORIGIN}/whatsapp-yazi-stilleri` },
  openGraph: {
    title: "WhatsApp Yazı Stilleri",
    description: "Durum ve mesajlar için ücretsiz yazı tipi değiştirme.",
    url: `${SITE_ORIGIN}/whatsapp-yazi-stilleri`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "WhatsApp yazı stilleri" }],
  },
};

const faqs = [
  {
    question: "WhatsApp’ta yazı tipi ayarı var mı?",
    answer:
      "Uygulama genel sohbet fontunu değiştirmez (sistem ayarına bağlıdır). Şekilli görünüm için Unicode metin yapıştırmanız gerekir; bu yöntem resmi bir font paketi değildir.",
  },
  {
    question: "Durum metninde karakter sınırı?",
    answer:
      "Durum metni oldukça uzun olabilir; yine de ilk satırda dikkat çeken kısa bir stilli kelime, devamında düz metin okumayı kolaylaştırır.",
  },
  {
    question: "Grup adında çalışır mı?",
    answer:
      "Evet, grup konusu ve açıklamasına yapıştırılabilir. Çok uzun veya aşırı süslü isimler küçük ekranda kesilebilir; kısa tutun.",
  },
  {
    question: "TikTok’ta da aynı mı görünür?",
    answer:
      "Çoğu stil TikTok biyografi ve video açıklamalarında benzer görünür. Platforma özel kısıtlar için TikTok rehberimize bakın.",
  },
];

export default function WhatsappYaziStilleriPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Ana Sayfa", href: "/" }, { label: "WhatsApp Yazı Stilleri" }]}
      />
      <div className="container mx-auto max-w-3xl px-4 pb-14 pt-6">
        <h1 className="font-display text-3xl font-bold text-white md:text-4xl">
          WhatsApp durum ve sohbet için şekilli yazılar
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-white/70">
          Doğum günü mesajı, durum sözü veya grup duyurusu için metni anında farklı stillere
          çevirin. Kurulum yok; kopyalayıp WhatsApp’a yapıştırmanız yeterli.
        </p>

        <div className="mt-8">
          <FontStyleGenerator defaultValue="Merhaba" heading="WhatsApp yazı stili oluştur" />
        </div>

        <section className="mt-12 space-y-4 leading-relaxed text-white/75">
          <h2 className="font-display text-2xl font-bold text-white">Durum vs sohbet mesajı</h2>
          <p>
            <strong className="text-white">Durum</strong> genelde tek satırlık vurgu ister: isim,
            tarih veya kısa slogan stillendirilebilir. <strong className="text-white">Sohbet</strong>{" "}
            mesajlarında uzun paragrafları tamamen şekilli yapmak karşı taraf için yorucu olur;
            yalnızca “Merhaba” veya isim gibi kısa kısımları seçmek daha naziktir.
          </p>
        </section>

        <section className="mt-10 space-y-4 leading-relaxed text-white/75">
          <h2 className="font-display text-2xl font-bold text-white">Hızlı kullanım adımları</h2>
          <ol className="list-decimal space-y-2 pl-5">
            <li>Metninizi yukarıya yazın (ör. “Merhaba” veya durum cümleniz).</li>
            <li>Beğendiğiniz stili kopyalayın.</li>
            <li>WhatsApp → Durum veya sohbet kutusu → yapıştır → gönder.</li>
          </ol>
        </section>

        <section className="mt-10 space-y-4 leading-relaxed text-white/75">
          <h2 className="font-display text-2xl font-bold text-white">TikTok ve diğer uygulamalar</h2>
          <p>
            Aynı Unicode metin TikTok biyografisinde, Instagram DM’de ve birçok mesajlaşma
            uygulamasında benzer görünür. TikTok’a özel ipuçları ve karakter sınırları için{" "}
            <Link href="/blog/tiktok-whatsapp-yazi-tipi" className="text-pink underline">
              TikTok & WhatsApp yazı tipi rehberi
            </Link>{" "}
            yazımıza göz atın. Genel tanım için{" "}
            <Link href="/yazi-stilleri-nedir" className="text-pink underline">
              yazı stilleri nedir
            </Link>{" "}
            sayfasını okuyabilirsiniz.
          </p>
        </section>

        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10">
          <Image
            src={BRAND_FEATURE_4}
            alt="WhatsApp yazı stilleri uygulama örneği"
            width={1200}
            height={900}
            className="h-auto w-full object-contain"
            sizes="(max-width: 768px) 100vw, 672px"
          />
        </div>

        <FaqSection title="WhatsApp yazı stilleri SSS" items={faqs} />

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <CtaButton href="/#generator">Oluşturucuyu aç</CtaButton>
          <Link href="/instagram-yazi-tipleri" className="self-center font-semibold text-pink hover:underline">
            Instagram yazı tipleri →
          </Link>
        </div>
      </div>
    </>
  );
}
