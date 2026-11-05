import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogPostSchema from "@/components/BlogPostSchema";
import CtaButton from "@/components/CtaButton";
import FaqSection from "@/components/FaqSection";
import { OG_IMAGE, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

const SLUG = "tiktok-whatsapp-yazi-tipi";
const TITLE = "TikTok ve WhatsApp Yazı Tipi: Aynı Metin, İki Platform";
const DESCRIPTION =
  "TikTok biyografi ve WhatsApp durum/sohbet için Unicode yazı tipi: limitler, okunaklılık, grup adı ve kopyala-yapıştır ipuçları.";

export const metadata: Metadata = {
  title: `${TITLE} | ${SITE_NAME}`,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_ORIGIN}/blog/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_ORIGIN}/blog/${SLUG}`,
    siteName: SITE_NAME,
    type: "article",
    publishedTime: "2026-11-05",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: TITLE }],
  },
};

const faqs = [
  {
    question: "TikTok’ta link ile stilli metin bir arada olur mu?",
    answer:
      "Evet. Link genelde ayrı satırdadır; stilli metin marka veya slogan satırında kalır. URL’yi stillendirmeyin.",
  },
  {
    question: "WhatsApp Business profilinde fark var mı?",
    answer:
      "İşletme açıklaması da metin alanıdır; aynı Unicode yapıştırma yöntemi geçerlidir. Okunaklılık müşteri mesajları için öncelikli olmalıdır.",
  },
  {
    question: "iPhone ve Android aynı görünür mü?",
    answer:
      "Çoğu yaygın stil evet. Nadir Unicode blokları eski Android sürümlerinde farklı görünebilir; kısa metinle test edin.",
  },
];

export default function TiktokWhatsappYaziTipiPost() {
  return (
    <>
      <BlogPostSchema
        title={TITLE}
        description={DESCRIPTION}
        slug={SLUG}
        datePublished="2026-11-05"
        image={OG_IMAGE}
      />
      <Breadcrumbs
        items={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "TikTok ve WhatsApp Yazı Tipi" },
        ]}
      />
      <article className="container mx-auto max-w-3xl px-4 pb-14 pt-6">
        <header className="mb-8 border-b border-white/10 pb-6">
          <p className="text-sm font-semibold text-white/35">5 Kasım 2026</p>
          <h1 className="mt-2 font-display text-3xl font-bold text-white md:text-4xl">{TITLE}</h1>
          <p className="mt-4 text-lg text-white/70">{DESCRIPTION}</p>
        </header>

        <div className="space-y-5 leading-relaxed text-white/75">
          <p>
            TikTok ve WhatsApp aynı telefonda yan yana durduğu için kullanıcılar çoğu zaman tek bir
            “havalı yazı” üretip her iki uygulamaya da yapıştırmak ister. İyi haber: Unicode metin
            her ikisinde de aynı mantıkla çalışır. Kötü haber: her platformun kendi karakter
            alışkanlıkları, okuma bağlamı ve moderasyon kültürü vardır. Bu rehber,{" "}
            <Link href="/whatsapp-yazi-stilleri" className="text-pink underline">
              WhatsApp yazı stilleri
            </Link>{" "}
            sayfasını tamamlayacak şekilde TikTok biyografisini de kapsar.
          </p>

          <h2 className="font-display text-2xl font-bold text-white">Ortak temel: Unicode kopyala-yapıştır</h2>
          <p>
            Ne TikTok ne WhatsApp, uygulama içinde “font menüsü” sunmaz (WhatsApp yazı boyutu
            sistem ayarına bağlıdır). Şekilli görünüm için metni{" "}
            <Link href="/nasil-kullanilir" className="text-pink underline">
              oluşturucuda
            </Link>{" "}
            üretip ilgili alana yapıştırırsınız. Sunucuya font dosyası gitmez; yalnızca karakter
            dizisi kaydedilir. Bu nedenle aynı kopyayı TikTok bio’suna ve WhatsApp durumuna
            taşıyabilirsiniz.
          </p>

          <h2 className="font-display text-2xl font-bold text-white">WhatsApp: durum, sohbet, grup</h2>
          <p>
            <strong className="text-white">Durum</strong> kısa duyuru alanıdır; tek stilli kelime veya
            isim + düz cümle kombinasyonu idealdir. <strong className="text-white">Sohbet</strong>{" "}
            mesajlarında karşı tarafın okuma hızını düşünün — doğum günü tebriğinde yalnızca
            “Mutlu yıllar” kısmını stillendirmek yeterlidir. <strong className="text-white">Grup adı</strong>{" "}
            ve konusu Unicode kabul eder; çok uzun zalgo isimler küçük ekranda kesilir ve grup
            listesinde tanınmayı zorlaştırır.
          </p>
          <h3 className="font-display text-xl font-bold text-white">WhatsApp Business notu</h3>
          <p>
            İşletme profil açıklamasında okunaklılık güven sinyalidir. Aşırı süslü metin yerine
            sade kalın veya small caps ile işletme adını vurgulayın; adres ve çalışma saatlerini düz
            metin bırakın.
          </p>

          <h2 className="font-display text-2xl font-bold text-white">TikTok: biyografi ve video açıklaması</h2>
          <p>
            TikTok biyografisi sınırlı karaktere sahiptir (uygulama sürümüne göre değişir). Link
            alanı ayrı yönetildiği için slogan satırını stillendirmek güvenlidir. Video
            açıklamasında hashtag’ler düz metin kalmalı; yalnızca marka adı veya seri adını Unicode
            ile öne çıkarabilirsiniz. Trend ses ve görsel estetikle uyum için minimal script veya
            small caps sık tercih edilir — ağır oyun nick stilleri TikTok kimliğinde garip durabilir.
          </p>

          <h2 className="font-display text-2xl font-bold text-white">Aynı metin, farklı bağlam</h2>
          <p>
            WhatsApp’ta aile grubuna gönderilen stilli “Merhaba” samimi karşılanır; TikTok’ta aynı
            metin marka bio’sunda profesyonellik taşır. Bağlam değişince stilin tonu da değişmelidir.
            WhatsApp için sıcak ve kısa, TikTok için marka odaklı ve minimal seçim yapın. İki
            platformda birebir aynı uzun zalgo paragrafı kullanmak nadiren iyi sonuç verir.
          </p>

          <h2 className="font-display text-2xl font-bold text-white">Türkçe karakterler</h2>
          <p>
            Her iki uygulama da Türkçe klavye metnini destekler. Unicode dönüşümünde ş, ğ, ı
            harflerinin korunması isimler için kritiktir. Desteklenmeyen harf düz kalır — bu,
            oluşturucunun hatası değil Unicode harita sınırıdır. Test: metni önce Notlar
            uygulamasına yapıştırın, sonra hedef uygulamaya taşıyın.
          </p>

          <h2 className="font-display text-2xl font-bold text-white">Pratik iş akışı</h2>
          <ol className="list-decimal space-y-2 pl-5">
            <li>Oluşturucuya metni girin (ör. “Merhaba” veya marka adı).</li>
            <li>WhatsApp için okunaklı kalın stil, TikTok için estetik script veya caps seçin.</li>
            <li>Her platform için ayrı kopya kaydedin (Notlar’da iki satır).</li>
            <li>WhatsApp durum/bio ve TikTok profil düzenleme ekranına yapıştırın.</li>
            <li>Arkadaş görünümünde ve gizli sekmede profili kontrol edin.</li>
          </ol>

          <h2 className="font-display text-2xl font-bold text-white">Gizlilik</h2>
          <p>
            {SITE_NAME} metninizi hesaba bağlı saklamaz; dönüşüm tarayıcıda yapılır. Yine de
            herkese açık cihazda kişisel veri yazmayın. Ücretli “font uygulaması” indirmeden önce
            izin listesini okuyun — bizim önerdiğimiz yol ücretsiz kopyala-yapıştırdır. Detay:{" "}
            <Link href="/privacy" className="text-pink underline">
              gizlilik politikası
            </Link>
            .
          </p>

          <h2 className="font-display text-2xl font-bold text-white">Diğer rehberler</h2>
          <p>
            Instagram odaklı içerik için{" "}
            <Link href="/blog/instagram-bio-yazi-stilleri" className="text-pink underline">
              Instagram bio yazı stilleri
            </Link>
            , oyun nick’i için{" "}
            <Link href="/blog/sekilli-nick-rehberi" className="text-pink underline">
              şekilli nick rehberi
            </Link>
            , minimal tarz için{" "}
            <Link href="/blog/estetik-yazi-stilleri" className="text-pink underline">
              estetik yazı stilleri
            </Link>
            .
          </p>

          <h2 className="font-display text-2xl font-bold text-white">WhatsApp durum örnekleri</h2>
          <p>
            <strong className="text-white">Kutlama:</strong> “Mutlu yıllar” kelimesi stilli, isim düz
            metin — grup mesajında herkes okur. <strong className="text-white">Alıntı:</strong> Tek
            stilli kelime (ör. “Sabır”) + düz Türkçe cümle. <strong className="text-white">İş duyurusu:</strong>{" "}
            Yalnızca marka adı stilli; indirim detayı düz. Bu ayrım, estetik ile iletişim netliğini
            bir arada tutar.
          </p>

          <h2 className="font-display text-2xl font-bold text-white">TikTok profil checklist</h2>
          <ol className="list-decimal space-y-2 pl-5">
            <li>Kullanıcı adı (handle) platform kurallarına uygun mu?</li>
            <li>Bio’da stilli yalnızca marka veya slogan satırı mı?</li>
            <li>Link ve e-posta düz metin mi?</li>
            <li>Video açıklamasında hashtag’ler bozulmadan kopyalandı mı?</li>
            <li>Android ve iOS’ta profil önizlemesi kontrol edildi mi?</li>
          </ol>
          <p>
            Checklist’i her büyük profil güncellemesinde tekrarlayın. Unicode metin güncellemesi
            ücretsizdir; sık sık değiştirmek takipçiye “canlı profil” sinyali verir ama her
            değişimde okunaklılığı test etmeyi unutmayın.
          </p>
        </div>

        <FaqSection title="TikTok & WhatsApp SSS" items={faqs} />

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <CtaButton href="/whatsapp-yazi-stilleri">WhatsApp stilleri</CtaButton>
          <Link href="/#generator" className="self-center font-semibold text-pink hover:underline">
            Ana oluşturucu →
          </Link>
        </div>
      </article>
    </>
  );
}
