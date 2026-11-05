import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogPostSchema from "@/components/BlogPostSchema";
import CtaButton from "@/components/CtaButton";
import FaqSection from "@/components/FaqSection";
import { OG_IMAGE, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

const SLUG = "estetik-yazi-stilleri";
const TITLE = "Estetik Yazı Stilleri: Minimal ve Şık Unicode Kombinasyonları";
const DESCRIPTION =
  "Soft script, küçük caps, monospace ve hafif çerçeveli estetik yazı stilleri — profil, durum ve kısa mesajlar için seçim rehberi.";

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
    question: "Estetik stil ile zengin stil arasındaki fark nedir?",
    answer:
      "Estetik stiller genelde az karakter değiştirir ve boşluk bırakır; zengin/zalgo stiller yoğun sembol kullanır. Minimal profiller estetik tercih eder.",
  },
  {
    question: "Pinterest veya Tumblr bio’sunda kullanılır mı?",
    answer:
      "Evet. Kısa tanım satırlarında küçük caps veya hafif script yaygındır; uzun açıklamayı düz metin tutun.",
  },
  {
    question: "Aynı estetiği marka hesabında kullanmak tutarlı mı?",
    answer:
      "Bio ve sabit caption cümlesinde aynı stili tekrarlamak tanınabilirlik sağlar; her gönderide kullanmak gereksizdir.",
  },
];

export default function EstetikYaziStilleriPost() {
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
          { label: "Estetik Yazı Stilleri" },
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
            “Estetik yazı” araması çoğu zaman pastel feed, minimal profil veya soft girl / clean
            girl tarzı hesaplarla birlikte gelir. Burada amaç bağırmak değil, zarif ayrışmaktır.
            Unicode estetik stiller, agresif zalgo veya oyun nick’lerindeki ağır çerçevelerden
            farklı olarak ince ve okunaklı kalır. Bu yazıda hangi stil ailelerinin estetik sayıldığını,
            nerede kullanıldığını ve{" "}
            <Link href="/#generator" className="text-pink underline">
              Yazı Stilleri oluşturucu
            </Link>{" "}
            ile nasıl seçileceğini anlatıyoruz.
          </p>

          <h2 className="font-display text-2xl font-bold text-white">Estetik Unicode ne demek?</h2>
          <p>
            Teknik olarak estetik bir kategori değil, kullanım tercihidir. Genelde script (el yazısı
            benzeri), küçük büyük harf (small caps), ince monospace veya hafif aralıklı (wide)
            karakterler bu gruba girer. Ortak özellik: metnin büyük kısmı hâlâ tanınabilir; göz
            yormadan “farklı” hissi verir. Aşırı kalp, yıldız veya birleşik diacritic kullanılmaz.
          </p>

          <h2 className="font-display text-2xl font-bold text-white">Stil aileleri karşılaştırması</h2>
          <h3 className="font-display text-xl font-bold text-white">Küçük caps (small caps)</h3>
          <p>
            Minimal hesapların favorisidir. İsim veya kısa kelime düzgün hizalanır; hem Instagram
            bio hem WhatsApp durumunda temiz görünür. Uzun cümlelerde monotonluk hissi verebilir —
            yalnızca vurgu kelimesi için kullanın.
          </p>
          <h3 className="font-display text-xl font-bold text-white">Script / italik Unicode</h3>
          <p>
            Duygusal veya sanatsal profillerde işe yarar. “coffee”, “moon”, “notes” gibi İngilizce
            anahtar kelimeler Türk gençliği arasında estetik bio’larda sık görülür; Türkçe kelimede
            de aynı stil uygulanabilir. Uzun ş veya ğ harflerinde mobilde birleşme olursa daha kısa
            kelime seçin.
          </p>
          <h3 className="font-display text-xl font-bold text-white">Monospace</h3>
          <p>
            Teknoloji, kod ve “dark academia” estetiğinde popülerdir. Harfler eş genişlikte hizalanır;
            liste veya kısa alıntı satırında düzenli durur. Çok uzun metinde okuma hızı düşer.
          </p>

          <h2 className="font-display text-2xl font-bold text-white">Platform önerileri</h2>
          <p>
            <Link href="/instagram-yazi-tipleri" className="text-pink underline">
              Instagram
            </Link>{" "}
            bio’sunda estetik stil + düz açıklama + emoji satırı üçlüsü yaygındır.{" "}
            <Link href="/whatsapp-yazi-stilleri" className="text-pink underline">
              WhatsApp
            </Link>{" "}
            durumunda tek stilli kelime (ör. isim) yeterlidir. TikTok biyografisinde link satırını
            düz bırakıp yalnızca kullanıcı adını stillendirmek tıklanabilirliği korur — ayrıntılar{" "}
            <Link href="/blog/tiktok-whatsapp-yazi-tipi" className="text-pink underline">
              TikTok & WhatsApp rehberinde
            </Link>
            .
          </p>

          <h2 className="font-display text-2xl font-bold text-white">Renk ve estetik yazı</h2>
          <p>
            Unicode stiller renk değiştirmez; pastel feed estetiği fotoğraf ve şablonlarla gelir.
            Yanlış beklenti: “pembe yazı stili” diye arayanlar aslında renkli metin veya story
            fontu arıyor olabilir. Renk için Instagram story araçları gerekir; profil bio’sunda renk
            yoktur. Estetik yazı stili yalnızca harf formunu değiştirir.
          </p>

          <h2 className="font-display text-2xl font-bold text-white">Türkçe ve estetik</h2>
          <p>
            Türkçe karakter desteği estetik kullanımda daha da önemlidir çünkü isimler sık
            stillenir. Oluşturucuda önce adınızı yazıp birkaç script ve small caps örneği
            karşılaştırın. Kare kutu görürseniz o stili atlayın.{" "}
            <Link href="/yazi-stilleri-nedir" className="text-pink underline">
              Yazı stilleri nedir
            </Link>{" "}
            sayfasında Unicode sınırlarını özetledik.
          </p>

          <h2 className="font-display text-2xl font-bold text-white">Adım adım estetik bio</h2>
          <ol className="list-decimal space-y-2 pl-5">
            <li>Tek kelimelik anahtar seçin (marka adı, takma ad).</li>
            <li>Oluşturucuda estetik / script / caps kategorilerini filtreleyin.</li>
            <li>En okunaklı varyantı kopyalayın.</li>
            <li>Bio’nun ilk satırına yapıştırın; alt satırları düz Türkçe cümleyle tamamlayın.</li>
            <li>İki cihazda profili kontrol edin.</li>
          </ol>

          <h2 className="font-display text-2xl font-bold text-white">Kaçınılması gerekenler</h2>
          <p>
            Tüm bio’yu script yapmak, anlamsız sembol yığını eklemek ve her gün farklı stil
            kullanmak estetik bütünlüğü bozar. Marka hesaplarında tutarlılık, kişisel hesaplarda
            ise hafif oyun daha iyidir. Uzun paragrafları estetik stile sokmak takipçi okumasını
            zorlaştırır; blog yazısı veya caption gövdesi düz kalmalıdır.
          </p>

          <h2 className="font-display text-2xl font-bold text-white">Estetik kelime listesi (ilham)</h2>
          <p>
            Türkçe ve İngilizce kısa kelimeler estetik bio’larda sık kullanılır: “ışık”, “sessiz”,
            “mavi”, “dream”, “soft”, “veil”, “kitap”. Tek kelimeyi stillendirip alt satırda Türkçe
            cümle kurmak dengeli bir profil verir. Anlamlı kelime seçmek rastgele sembol yığınından
            daha “estetik” algılanır çünkü feed ile anlam uyumu oluşur.
          </p>

          <h2 className="font-display text-2xl font-bold text-white">Mevsimsel ve tema uyumu</h2>
          <p>
            Sonbahar tonlarında monospace veya small caps, yaz tatil fotoğraflarında hafif script
            sık tercih edilir. Tema yalnızca görsellerle de kurulabilir; yazı stili abartılırsa
            feed bütünlüğü bozulur. Bir sezon boyunca aynı stili kullanıp görselleri değiştirmek,
            her hafta farklı Unicode stiline geçmekten daha profesyonel durur.
          </p>
          <p>
            Şekilli nick veya agresif oyun stilleri estetik profille çelişir; oyun hesabınız ayrı,
            estetik Instagram hesabınız ayrıysa her birinde farklı stil ailesi seçmek mantıklıdır.
            Nick tarafı için{" "}
            <Link href="/sekilli-nick" className="text-pink underline">
              şekilli nick
            </Link>{" "}
            sayfasına bakın.
          </p>
        </div>

        <FaqSection title="Estetik yazı SSS" items={faqs} />

        <div className="mt-12 flex justify-center">
          <CtaButton href="/#generator">Estetik stil dene</CtaButton>
        </div>
      </article>
    </>
  );
}
