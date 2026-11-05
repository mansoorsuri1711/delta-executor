import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogPostSchema from "@/components/BlogPostSchema";
import CtaButton from "@/components/CtaButton";
import FaqSection from "@/components/FaqSection";
import { OG_IMAGE, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

const SLUG = "sekilli-nick-rehberi";
const TITLE = "Şekilli Nick Rehberi: PUBG, Free Fire ve Discord";
const DESCRIPTION =
  "Oyun ve sosyal platformlar için okunaklı şekilli nick: karakter sınırı, zalgo, Türkçe harfler ve kopyala-yapıştır.";

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
    question: "Clan tag’i de şekilli olmalı mı?",
    answer:
      "Genelde hayır. Tag kısa ve standart kalmalı; yalnızca kişisel nick kısmını stillendirmek takım kurallarıyla uyumludur.",
  },
  {
    question: "Discord sunucu adında Unicode çalışır mı?",
    answer:
      "Sunucu ve kanal adlarında çoğu stil görünür; çok uzun veya zalgo isimler moderasyon araçlarına takılabilir.",
  },
  {
    question: "Nick değiştirmek ücretli mi?",
    answer:
      "Oyun içi rename kartları veya ücretli değişim politikaları platforma göre değişir; Unicode kullanımı ekstra ücret gerektirmez.",
  },
];

export default function SekilliNickRehberiPost() {
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
          { label: "Şekilli Nick Rehberi" },
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
            Lobi ekranında “ProGamer42” ile “𝓟𝓻𝓸𝓖𝓪𝓶𝓮𝓻42” aynı seslenmez ama görsel olarak
            farklı algılanır. Şekilli nick, gerçek bir font yüklemek yerine Unicode harf
            varyantlarıyla isminizi özelleştirmektir. Bu rehber,{" "}
            <Link href="/sekilli-nick" className="text-pink underline">
              şekilli nick oluşturucu
            </Link>{" "}
            kullanırken PUBG Mobile, Free Fire ve Discord gibi ortamlarda okunaklı kalmanız için
            pratik kuralları toplar.
          </p>

          <h2 className="font-display text-2xl font-bold text-white">Nick neden görünür?</h2>
          <p>
            Takım davetlerinde, öldürme feed’inde ve arkadaş listesinde nick küçük puntoda
            gösterilir. Aşırı süslü karakterler bu boyutta birleşir ve tanınmaz hale gelir. Oyun
            deneyiminde nick hem kimlik hem iletişim aracıdır; squad sesli sohbette sizi çağıran
            kelime genelde nick’tir. Okunaklılık, stilin “havalı” görünmesinden önce gelmelidir.
          </p>

          <h2 className="font-display text-2xl font-bold text-white">Karakter sınırları ve filtreler</h2>
          <p>
            PUBG Mobile ve Free Fire tipik olarak 12–16 karakter arası kişisel isim sınırı uygular
            (dönem ve bölgeye göre değişebilir). Özel semboller veya boşluk bazen reddedilir.
            Unicode harfler çoğu zaman kabul edilir; reddedilirse daha sade bir stil veya daha
            kısa nick deneyin. Global sunucularda yalnızca Latin alfabesi zorunlu olabilir — o
            durumda Türkçe harf içeren nick’ler zaten engellenir.
          </p>

          <h3 className="font-display text-xl font-bold text-white">Test ritüeli</h3>
          <p>
            Yeni nick’i kaydetmeden önce oluşturucuda kopyalayın, not uygulamasına yapıştırın,
            ardından oyun içi rename ekranına taşıyın. Reddedilirse bir seviye daha sade stile
            geçin. Clan tag’inizi değiştirmeden yalnızca oyuncu adını stillendirmek genelde daha
            az sorun çıkarır.
          </p>

          <h2 className="font-display text-2xl font-bold text-white">Zalgo tuzağı</h2>
          <p>
            Zalgo metinler, harflerin üstüne onlarca birleşik işaret bindirir. Discord’da bile
            taşma kesilebilir; mobil lobide tamamen okunaksız olur. Ayrıca bazı oyunlar aşırı
            Unicode yoğunluğunu otomatik filtreler. Çerçeveli veya kalın harf stilleri aynı
            “farklı görünme” ihtiyacını daha güvenli karşılar.
          </p>

          <h2 className="font-display text-2xl font-bold text-white">Türkçe harfler ve kültür</h2>
          <p>
            Türkiye’de Ayşe, Mehmet, Ğüş gibi nick’ler yaygındır. Kaliteli bir dönüştürücü ş, ğ,
            ı gibi harfleri mümkün olduğunca korur. Desteklenmeyen harf düz kalır — bu bozukluk
            değil, teknik sınırdır. Uluslararası turnuvalarda ASCII zorunluluğu varsa aynı okunuşu
            Latin harflerle yazıp stil uygulayın.
          </p>

          <h2 className="font-display text-2xl font-bold text-white">Discord ve diğer platformlar</h2>
          <p>
            Discord kullanıcı adı politikaları dönemsel olarak güncellenir; görünen ad (display
            name) alanı bio benzeri esneklik sunabilir. Sunucu rollerinde ve kanal listesinde kısa,
            kalın stiller iyi çalışır. Twitch veya Kick nick’leri için de aynı Unicode metin
            kullanılabilir; platform başına yasaklı kelime listelerine dikkat edin.
          </p>

          <h2 className="font-display text-2xl font-bold text-white">Adım adım nick oluşturma</h2>
          <ol className="list-decimal space-y-2 pl-5">
            <li>Kısa bir taban nick seçin (tercihen 8–12 karakter).</li>
            <li>
              <Link href="/sekilli-nick" className="text-pink underline">
                Şekilli nick
              </Link>{" "}
              sayfasında metni girin ve kalın veya çerçeveli stil seçin.
            </li>
            <li>Kopyala → oyun veya Discord rename alanına yapıştırın.</li>
            <li>Lobi ve arkadaş listesinde görünümü doğrulayın.</li>
          </ol>

          <h2 className="font-display text-2xl font-bold text-white">Etik ve güvenlik</h2>
          <p>
            Başka oyuncunun adını taklit eden nick’ler raporlanabilir. Kişisel bilgi (telefon,
            adres) nick’te paylaşılmamalıdır. {SITE_NAME} metninizi sunucuda saklamaz; yine de
            herkese açık bilgisayarlarda hassas kelimeler yazmayın. Detay için{" "}
            <Link href="/yazi-stilleri-nedir" className="text-pink underline">
              yazı stilleri nedir
            </Link>{" "}
            sayfasına bakın.
          </p>

          <h2 className="font-display text-2xl font-bold text-white">Stil seçim tablosu (oyun lobisi)</h2>
          <p>
            Aşağıdaki özet, hızlı karar vermenize yardım eder. Kesin kurallar oyun güncellemesine
            göre değişebilir; reddedilen nick’te bir kademe sadeleştirin.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="text-white">Kalın Unicode:</strong> PUBG/Free Fire lobisinde yüksek
              okunaklılık; clan davetlerinde tanınma iyi.
            </li>
            <li>
              <strong className="text-white">Small caps:</strong> Minimal görünüm; uzun nick’lerde
              tercih edilir.
            </li>
            <li>
              <strong className="text-white">Çerçeveli:</strong> Dikkat çeker ama karakter bütçesini
              hızla tüketir; 8 karakter altı isimlerde deneyin.
            </li>
            <li>
              <strong className="text-white">Zalgo:</strong> Çoğu senaryoda önerilmez; rapor ve filtre
              riski.
            </li>
          </ul>

          <h2 className="font-display text-2xl font-bold text-white">Sezon ve etkinlik nick’leri</h2>
          <p>
            Ramazan, yılbaşı veya oyun içi sezon pass dönemlerinde geçici nick kullanılır. Unicode
            stilli metni kopyalayıp saklayın; sezon bitince eski nick’e dönmek kolaylaşır. Etkinlik
            nick’lerinde bile okunaklılığı koruyun — takım arkadaşınız sesli sohbette sizi
            çağırabilmeli.
          </p>
          <p>
            Rekabetçi modda bazı turnuva kuralları ASCII zorunluluğu getirir; casual lobide Unicode
            geniş tolerans gösterir. Resmi duyuruları okumak sizin sorumluluğunuzdadır — aracımız
            resmi oyun sitesi değildir,{" "}
            <Link href="/disclaimer" className="text-pink underline">
              sorumluluk reddi
            </Link>{" "}
            metninde açıklanmıştır.
          </p>
        </div>

        <FaqSection title="Şekilli nick SSS" items={faqs} />

        <div className="mt-12 flex justify-center">
          <CtaButton href="/sekilli-nick">Nick oluştur</CtaButton>
        </div>
      </article>
    </>
  );
}
