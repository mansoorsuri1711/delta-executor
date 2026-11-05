import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogPostSchema from "@/components/BlogPostSchema";
import CtaButton from "@/components/CtaButton";
import FaqSection from "@/components/FaqSection";
import { OG_IMAGE, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

const SLUG = "instagram-bio-yazi-stilleri";
const TITLE = "Instagram Bio Yazı Stilleri: 150 Karakterde Öne Çıkın";
const DESCRIPTION =
  "Instagram biyografisi için Unicode yazı stilleri, karakter limiti, okunaklı font seçimi ve kopyala-yapıştır adımları.";

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
    question: "Bio’da emoji ile yazı stili birlikte kullanılır mı?",
    answer:
      "Evet. Emojiler normal Unicode karakterlerdir; stilli metnin üst ve alt satırlarına emoji ekleyerek hiyerarşi kurabilirsiniz. Çok fazla emoji okunurluğu düşürür.",
  },
  {
    question: "Görünen ad (display name) bio’dan farklı mı?",
    answer:
      "Evet. Görünen ad arama ve etiketlerde daha görünür olabilir; kısa isimler için kalın veya script stiller popülder. Bio daha uzun açıklama içindir.",
  },
  {
    question: "Link sticker ile bio metni çakışır mı?",
    answer:
      "Hayır. Link satırı genelde ayrıdır; bio metnini stillendirmek tıklanabilir linkleri etkilemez. URL’leri düz metin bırakın.",
  },
];

export default function InstagramBioBlogPost() {
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
          { label: "Instagram Bio Yazı Stilleri" },
        ]}
      />
      <article className="container mx-auto max-w-3xl px-4 pb-14 pt-6">
        <header className="mb-8 border-b border-white/10 pb-6">
          <p className="text-sm font-semibold text-white/35">5 Kasım 2026</p>
          <h1 className="mt-2 font-display text-3xl font-bold text-white md:text-4xl">{TITLE}</h1>
          <p className="mt-4 text-lg text-white/70">{DESCRIPTION}</p>
        </header>

        <div className="prose-yazi space-y-5 leading-relaxed text-white/75">
          <p>
            Instagram profilinizin biyografisi yalnızca 150 karakterlik küçük bir alan gibi
            görünse de, markanızın veya kişisel tarzınızın vitrinidir. Düz Arial benzeri metin
            kaybolurken, doğru seçilmiş bir{" "}
            <Link href="/instagram-yazi-tipleri" className="text-pink underline">
              Instagram yazı stili
            </Link>{" "}
            isminizi ve sloganınızı kaydırmadan önce yakalar. Bu rehberde Unicode bio fontlarının
            nasıl çalıştığını, hangi stillerin okunaklı kaldığını ve adım adım nasıl
            yapıştıracağınızı anlatıyoruz.
          </p>

          <h2 className="font-display text-2xl font-bold text-white">Bio neden hâlâ önemli?</h2>
          <p>
            Reels ve hikâyeler dikkati dağıtsa da yeni ziyaretçiler hâlâ profile tıklayıp bio’yu
            okur. Link tree, mağaza veya iletişim cümlesi burada durur. Stil kullanmak “daha
            profesyonel görünmek”ten çok, aynı kalabalık feed içinde tanınabilirlik yaratmakla
            ilgilidir. Özellikle kişisel marka, küçük işletme ve içerik üreticileri için bio
            satırındaki ilk iki kelime kritik filtre görevi görür.
          </p>

          <h2 className="font-display text-2xl font-bold text-white">150 karakter kuralını yönetmek</h2>
          <p>
            Instagram bio limiti boşluk dahil 150 karakterdir. Unicode stilleri bazı harfleri
            daha geniş kod noktalarıyla değiştirdiği için görsel uzunluk hissi artabilir; yine de
            platform sayacı genelde standart karakter sayımına dayanır. Pratik yaklaşım: önce düz
            metin taslağı yazın,{" "}
            <Link href="/#generator" className="text-pink underline">
              oluşturucudaki
            </Link>{" "}
            karakter sayacıyla kontrol edin, ardından yalnızca isim veya tek cümleyi stillendirin.
            Tüm paragrafı script yapmak hem limiti doldurur hem de mobilde okumayı zorlaştırır.
          </p>

          <h3 className="font-display text-xl font-bold text-white">Satır kırılımı ve emoji</h3>
          <p>
            Bio’da Enter ile satır atlarsınız. İlk satırda stilli isim, ikinci satırda düz metin
            açıklama, üçüncü satırda emoji veya konum en yaygın düzenlerden biridir. Emoji
            stilli harflerle çakışmaz; ancak ondan fazla süs emoji’si ciddiyeti azaltabilir.
          </p>

          <h2 className="font-display text-2xl font-bold text-white">Hangi stil türü bio için uygun?</h2>
          <p>
            <strong className="text-white">Kalın (bold) matematik harfleri</strong> en güvenli
            seçenektir: iOS ve Android’de tutarlı görünür, erişilebilirlik açısından script’ten
            iyidir. <strong className="text-white">Küçük caps</strong> minimal estetik arayanlar için
            uygundur. <strong className="text-white">Script / el yazısı</strong> stilleri romantik
            veya sanatsal profillerde işe yarar; uzun kelimelerde harfler birbirine karışabilir.
            <strong className="text-white"> Zalgo</strong> ve aşırı birleşik işaretler bio’da neredeyse
            her zaman kötü fikirdir — hem okunmaz hem de platform moderasyonunda risk taşıyabilir.
          </p>

          <h2 className="font-display text-2xl font-bold text-white">Türkçe karakterler</h2>
          <p>
            Türkçe kullanıcılar için ı, ş, ğ harfleri kimlik cümlesinin parçasıdır. İyi bir
            oluşturucu desteklenen harfleri dönüştürür, desteklenmeyeni olduğu gibi bırakır. Bio
            kaydetmeden önce kendi telefonunuzda önizleyin; nadir karakterler eski cihazlarda kare
            kutu gösterebilir. Gerekirse yalnızca İngilizce harfli marka adını stillendirin,
            Türkçe açıklamayı düz bırakın.
          </p>

          <h2 className="font-display text-2xl font-bold text-white">Adım adım kopyala-yapıştır</h2>
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              <Link href="/instagram-yazi-tipleri" className="text-pink underline">
                Instagram yazı tipleri
              </Link>{" "}
              sayfasında veya ana oluşturucuda metninizi yazın.
            </li>
            <li>Listedeki Kopyala düğmesiyle stili panoya alın.</li>
            <li>Instagram → Profil → Profili düzenle → Bio alanına yapıştırın.</li>
            <li>Kaydedin; bir arkadaşınızdan profilinize bakmasını isteyerek ikinci görüş alın.</li>
          </ol>
          <p>
            Daha genel adımlar için{" "}
            <Link href="/nasil-kullanilir" className="text-pink underline">
              nasıl kullanılır
            </Link>{" "}
            rehberine de göz atabilirsiniz.
          </p>

          <h2 className="font-display text-2xl font-bold text-white">Caption ile bio arasındaki fark</h2>
          <p>
            Caption’lar çok daha uzun olabilir; burada yalnızca başlık satırını stillendirmek
            yeterlidir. Bio ise kısa ve net kalmalıdır. Aynı stili her yerde tekrarlamak marka
            tutarlılığı sağlar ama her caption’ı süslü yapmak takipçi deneyimini yorar. Bio’da
            odak: kim olduğunuz ve ne sunduğunuz; caption’da odak: içerik mesajı.
          </p>

          <h2 className="font-display text-2xl font-bold text-white">Sık hatalar</h2>
          <p>
            Tüm bio’yu zalgo yapmak, link URL’sini stillendirmek, karakter limitini aşmak ve
            Android/iOS kontrol etmeden yayınlamak en yaygın hatalardır. Ayrıca telif veya marka
            adlarını taklit eden nick’ler hukuki sorun doğurabilir; stil kullanırken içerik etik
            kurallarına uyun.
          </p>

          <h2 className="font-display text-2xl font-bold text-white">Örnek bio düzenleri</h2>
          <p>
            <strong className="text-white">İçerik üreticisi:</strong> Birinci satırda stilli kanal adı,
            ikinci satırda düz Türkçe niche cümlesi (“Günlük tarif & kahve”), üçüncü satırda tek emoji
            veya konum. Link satırını Meta’nın link aracıyla ekleyin; URL’yi Unicode ile oynamayın.
          </p>
          <p>
            <strong className="text-white">Küçük işletme:</strong> Stilli işletme adı + düz çalışma saati
            cümlesi. Telefon numarasını düz rakamla yazın; müşterinin kopyalayıp araması gerekir.
            WhatsApp hattınız varsa{" "}
            <Link href="/whatsapp-yazi-stilleri" className="text-pink underline">
              WhatsApp yazı stilleri
            </Link>{" "}
            rehberindeki durum formatını da düşünebilirsiniz.
          </p>
          <p>
            <strong className="text-white">Kişisel profil:</strong> Stilli isim veya takma ad; alt satırda
            hobi veya mizah cümlesi düz metin. Her hafta stil değiştirmek zorunda değilsiniz; tutarlı
            bir bold isim yıllarca tanınabilirlik sağlar.
          </p>

          <h2 className="font-display text-2xl font-bold text-white">Erişilebilirlik ve SEO notu</h2>
          <p>
            Ekran okuyucular bazı Unicode harfleri farklı telaffuz edebilir. Bio kısa olduğu için
            risk düşüktür; yine de kritik bilgiyi (iletişim, marka adı) mümkünse okunması kolay
            stillerde tutun. Kendi web sitenizin ana metnini şekilli yapmak arama motorları için
            dezavantajlı olabilir; Instagram bio’su için bu endişe geçerli değildir. Genel tanım
            için{" "}
            <Link href="/yazi-stilleri-nedir" className="text-pink underline">
              yazı stilleri nedir
            </Link>{" "}
            sayfamıza bakın.
          </p>
        </div>

        <FaqSection title="Instagram bio SSS" items={faqs} />

        <div className="mt-12 flex justify-center">
          <CtaButton href="/instagram-yazi-tipleri">Bio stili oluştur</CtaButton>
        </div>
      </article>
    </>
  );
}
