import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaButton from "@/components/CtaButton";
import FaqSection from "@/components/FaqSection";
import FontStyleGenerator from "@/components/FontStyleGenerator";
import { BRAND_FEATURE_3, OG_IMAGE, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Şekilli Nick — Oyun & Sosyal Medya İçin Yazı Stilleri",
  description:
    "PUBG, Free Fire, Discord ve Instagram için okunaklı şekilli nick oluştur. Türkçe harf desteği, çerçeve stiller ve tek tıkla kopyala.",
  alternates: { canonical: `${SITE_ORIGIN}/sekilli-nick` },
  openGraph: {
    title: "Şekilli Nick Oluşturucu",
    description: "Oyun ve profil nickleri için Unicode yazı stilleri — ücretsiz.",
    url: `${SITE_ORIGIN}/sekilli-nick`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Şekilli nick yazı stilleri" }],
  },
};

const faqs = [
  {
    question: "PUBG Mobile veya Free Fire nick sınırı var mı?",
    answer:
      "Oyunlar genelde 12–16 karakter civarı sınır koyar ve bazı özel sembolleri reddeder. Kısa nick yazın; reddedilirse daha sade bir stil veya daha az sembol deneyin.",
  },
  {
    question: "Zalgo nick neden sorun çıkarır?",
    answer:
      "Üst üste binen Unicode işaretleri (zalgo) lobi listesinde okunaksız görünür ve bazı oyunlar filtreler. Çerçeve veya kalın harf stilleri genelde daha güvenlidir.",
  },
  {
    question: "Türkçe karakterli nick kullanabilir miyim?",
    answer:
      "Evet; oluşturucu desteklediği harfleri dönüştürür. Oyun sunucusu yalnızca ASCII kabul ediyorsa ş, ğ gibi harfler zaten engellenir — o zaman Latin eşdeğerleriyle deneyin.",
  },
  {
    question: "Aynı nick başkasında varsa ne yapmalıyım?",
    answer:
      "Stili değiştirmek görünümü farklılaştırır ama okunuş aynı kalabilir. Sonuna ince bir sembol veya farklı çerçeve ekleyerek ayırt edin; yine de oyunun tekrar eden isim kuralına uyun.",
  },
];

export default function SekilliNickPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Ana Sayfa", href: "/" }, { label: "Şekilli Nick" }]}
      />
      <div className="container mx-auto max-w-3xl px-4 pb-14 pt-6">
        <h1 className="font-display text-3xl font-bold text-white md:text-4xl">
          Oyun ve sosyal hesaplar için şekilli nick üret
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-white/70">
          Lobi ekranında, arkadaş listesinde ve profil URL’lerinde fark edilmek için nick’inizi
          Unicode ile stillendirin. Metin sunucuya “font dosyası” olarak gitmez; yalnızca
          karakter dizisi olarak kaydedilir.
        </p>

        <div className="mt-8">
          <FontStyleGenerator defaultValue="Nick" heading="Şekilli nick oluştur" />
        </div>

        <section className="mt-12 space-y-4 leading-relaxed text-white/75">
          <h2 className="font-display text-2xl font-bold text-white">PUBG ve Free Fire okunaklılık</h2>
          <p>
            Battle royale oyunlarında nick küçük puntoyla listelenir. İnce script veya aşırı süslü
            harfler “Ayşe” yerine “A??e” gibi görünebilir.{" "}
            <strong className="text-white">Kalın (bold)</strong>,{" "}
            <strong className="text-white">monospace</strong> veya hafif{" "}
            <strong className="text-white">çerçeveli</strong> stiller genelde en iyi sonucu verir.
          </p>
          <p>
            Clan tag’i varsa yalnızca kişisel kısmı stillendirin; tag kuralları sabit kalsın.
            Yeni sezon öncesi bir arkadaşınızın ekran görüntüsünde test etmek zaman kazandırır.
          </p>
        </section>

        <section className="mt-10 space-y-4 leading-relaxed text-white/75">
          <h2 className="font-display text-2xl font-bold text-white">Çerçeve stiller vs zalgo</h2>
          <p>
            Çerçeveli nickler (parantez, kalp, yıldız kombinasyonları) karakter sınırını hızla
            doldurur ama genelde okunabilir kalır. Zalgo ise dikey alanı şişirir; Discord ve bazı
            launcher’lar bile taşmayı keser. Rekabetçi veya turnuva hesaplarında sade stiller
            tercih edilir.
          </p>
        </section>

        <section className="mt-10 space-y-4 leading-relaxed text-white/75">
          <h2 className="font-display text-2xl font-bold text-white">Türkçe harfler ve filtreler</h2>
          <p>
            Türkçe alfabede ğ, ı, ş gibi harfler nick kültürünün parçası. Oluşturucumuz bu
            harfleri mümkün olduğunca koruyarak dönüştürür; desteklenmeyen harf düz kalır. Global
            sunucularda İngilizce klavye zorunluluğu varsa aynı okunuşu Latin harflerle yazıp
            stil uygulayın.
          </p>
        </section>

        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10">
          <Image
            src={BRAND_FEATURE_3}
            alt="Şekilli nick yazı stili aracı"
            width={1200}
            height={900}
            className="h-auto w-full object-contain"
            sizes="(max-width: 768px) 100vw, 672px"
          />
        </div>

        <FaqSection title="Şekilli nick hakkında SSS" items={faqs} />

        <div className="mt-12 flex flex-col items-center gap-4">
          <CtaButton href="/#generator">Tüm stilleri dene</CtaButton>
          <Link href="/blog/sekilli-nick-rehberi" className="font-semibold text-pink hover:underline">
            Detaylı şekilli nick rehberi →
          </Link>
        </div>
      </div>
    </>
  );
}
