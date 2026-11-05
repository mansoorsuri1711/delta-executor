import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaButton from "@/components/CtaButton";
import FaqSection from "@/components/FaqSection";
import FontStyleGenerator from "@/components/FontStyleGenerator";
import {
  BRAND_FEATURE_2,
  OG_IMAGE,
  SITE_NAME,
  SITE_ORIGIN,
} from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Instagram Yazı Tipleri — Bio & Gönderi Fontları",
  description:
    "Instagram bio, kullanıcı adı ve gönderi metinleri için ücretsiz yazı tipleri. Unicode fontları kopyala-yapıştır; 150 karakter sınırına uygun stiller.",
  alternates: { canonical: `${SITE_ORIGIN}/instagram-yazi-tipleri` },
  openGraph: {
    title: "Instagram Yazı Tipleri — Bio & Gönderi Fontları",
    description:
      "Bio ve caption için şık Instagram yazı stilleri — kayıt olmadan, tarayıcıda anında.",
    url: `${SITE_ORIGIN}/instagram-yazi-tipleri`,
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Instagram yazı tipleri oluşturucu",
      },
    ],
  },
};

const faqs = [
  {
    question: "Instagram’da gerçek font değiştirmek mümkün mü?",
    answer:
      "Instagram uygulaması sistem fontunu değiştirmez. Gördüğünüz “fontlar” aslında Unicode’da farklı görünen harflerdir; bio, isim veya caption alanına yapıştırınca şekilli görünür.",
  },
  {
    question: "Bio için kaç karakter kullanmalıyım?",
    answer:
      "Profil bio’su en fazla 150 karakter (boşluklar dahil). Uzun cümleler kesilir; kısa slogan veya isim + emoji kombinasyonu genelde daha okunaklıdır.",
  },
  {
    question: "Türkçe harfler (ğ, ü, ş, ı, ö, ç) bozulur mu?",
    answer:
      "Yazı Stilleri oluşturucusu desteklenen harfleri dönüştürür; desteklenmeyen karakterler olduğu gibi kalır. Önce kısa bir metinle deneyip Instagram’da önizlemenizi öneririz.",
  },
  {
    question: "Hesabım ban yiyebilir mi?",
    answer:
      "Yaygın Unicode stilleri milyonlarca hesapta kullanılıyor. Aşırı zalgo (üst üste binen işaretler) veya okunaksız nickler platform kurallarına takılabilir; bio için orta yoğunlukta stiller daha güvenlidir.",
  },
  {
    question: "Gönderi caption’ında da çalışır mı?",
    answer:
      "Evet. Aynı metni caption, yorum veya hikâye metin kutusuna yapıştırabilirsiniz. Çok uzun paragraflarda bazı stiller mobilde daha yavaş kaydırılır; başlık satırı için kalın veya küçük caps stiller popülerdir.",
  },
];

export default function InstagramYaziTipleriPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Instagram Yazı Tipleri" },
        ]}
      />
      <div className="container mx-auto max-w-3xl px-4 pb-14 pt-6">
        <header className="mb-8">
          <h1 className="font-display text-3xl font-bold text-white md:text-4xl">
            Instagram bio ve gönderiler için şekilli yazı tipleri
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-white/70">
            Profil bio’su, görünen ad ve caption’larda sıradan yazı tipinden çıkmak için{" "}
            <strong className="text-white">Unicode yazı stilleri</strong> kullanırsınız. Uygulama
            indirmeden; metni yazın, beğendiğiniz stili kopyalayın, Instagram’a yapıştırın.
          </p>
        </header>

        <FontStyleGenerator
          defaultValue="Instagram Bio"
          heading="Instagram yazı tipi oluştur"
        />

        <section className="mt-12 space-y-4 leading-relaxed text-white/75">
          <h2 className="font-display text-2xl font-bold text-white">
            Instagram “fontları” aslında nasıl çalışır?
          </h2>
          <p>
            Arama motorlarında “Instagram font” denince çoğu kişi uygulama içi ayar arar. Oysa
            Instagram yalnızca birkaç yerde (hikâye sticker, bazı şablonlar) hazır tip sunar; bio
            ve çoğu metin alanı standart sistem fontundadır. Popüler çözüm, Latin harflerinin{" "}
            <em>Mathematical Bold</em>, <em>Script</em> veya <em>Fullwidth</em> gibi Unicode
            karşılıklarına dönüştürülmesidir. Telefonunuz aynı cümleyi okur; ekranda farklı
            çizilir.
          </p>
          <p>
            Bu yüzden stiller WhatsApp, TikTok veya Discord’da da genelde aynı şekilde görünür.
            Platform değişince nadir karakterler kare kutuya düşebilir; bio gibi kısa metinlerde
            risk düşüktür.
          </p>
        </section>

        <section className="mt-10 space-y-4 leading-relaxed text-white/75">
          <h2 className="font-display text-2xl font-bold text-white">
            150 karakter bio sınırı: pratik ipuçları
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Önce düz metinle taslağı yazın; karakter sayısını oluşturucudaki sayaçla kontrol
              edin (Instagram’ın limiti boşluk dahil 150).
            </li>
            <li>
              Tüm bio’yu şekilli yapmak yerine yalnızca isim veya tek satırlık sloganı stillendirin;
              link satırı ve emoji’ler okunurluğu korur.
            </li>
            <li>
              Link tree / mağaza URL’leri düz metin kalsın; tıklanabilirlik bozulmasın.
            </li>
            <li>
              iPhone ve Android’de profilinizi bir kez kontrol edin; bazı ince stiller küçük
              ekranda birbirine yakın görünebilir.
            </li>
          </ul>
        </section>

        <section className="mt-10 space-y-4 leading-relaxed text-white/75">
          <h2 className="font-display text-2xl font-bold text-white">
            Bio vs caption: hangi stil türü?
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-card p-5">
              <h3 className="font-display text-lg font-bold text-white">Bio & görünen ad</h3>
              <p className="mt-2 text-sm">
                Kalın, küçük caps, hafif script veya çerçeveli (parenthesis) stiller öne çıkar.
                Okunaklılık öncelik; zalgo ve aşırı süslü karakterlerden kaçının.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-card p-5">
              <h3 className="font-display text-lg font-bold text-white">Caption & yorum</h3>
              <p className="mt-2 text-sm">
                İlk satırda dikkat çeken bir kelimeyi stillendirmek yeterli olabilir. Uzun
                paragraflarda tamamını dönüştürmek hem okumayı zorlaştırır hem erişilebilirliği
                düşürür.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 space-y-4 leading-relaxed text-white/75">
          <h2 className="font-display text-2xl font-bold text-white">
            Adım adım: Instagram’a yapıştırma
          </h2>
          <ol className="list-decimal space-y-3 pl-5">
            <li>Yukarıdaki kutuya bio veya isminizi yazın.</li>
            <li>Listeden beğendiğiniz stilin yanındaki <strong>Kopyala</strong> düğmesine dokunun.</li>
            <li>Instagram → Profil → <strong>Profili düzenle</strong> → Bio veya Ad alanına yapıştırın.</li>
            <li>Kaydedin; gerekirse hikâyede veya yakın bir arkadaş profilinde kontrol edin.</li>
          </ol>
          <p>
            Daha ayrıntılı anlatım için{" "}
            <Link href="/blog/instagram-bio-yazi-stilleri" className="text-pink underline">
              Instagram bio yazı stilleri rehberi
            </Link>{" "}
            ve{" "}
            <Link href="/nasil-kullanilir" className="text-pink underline">
              nasıl kullanılır
            </Link>{" "}
            sayfalarına göz atabilirsiniz.
          </p>
        </section>

        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10">
          <Image
            src={BRAND_FEATURE_2}
            alt="Instagram yazı tipleri online önizleme"
            width={1200}
            height={900}
            className="h-auto w-full object-contain"
            sizes="(max-width: 768px) 100vw, 672px"
          />
        </div>

        <FaqSection title="Instagram yazı tipleri SSS" items={faqs} />

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <CtaButton href="/#generator">Ana oluşturucuya git</CtaButton>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm font-semibold">
            <Link href="/sekilli-nick" className="text-pink hover:underline">
              Şekilli nick
            </Link>
            <Link href="/whatsapp-yazi-stilleri" className="text-pink hover:underline">
              WhatsApp yazı stilleri
            </Link>
            <Link href="/blog/instagram-bio-yazi-stilleri" className="text-pink hover:underline">
              Bio rehberi →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
