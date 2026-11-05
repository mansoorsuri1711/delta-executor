import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaButton from "@/components/CtaButton";
import FontStyleGenerator from "@/components/FontStyleGenerator";
import { OG_IMAGE, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Yazı Stilleri Nasıl Kullanılır? — Adım Adım Rehber",
  description:
    "Yazı Stilleri oluşturucuyu kullanarak Instagram, WhatsApp ve oyun nicklerine Unicode metin yapıştırma rehberi. Türkçe karakter ipuçları dahil.",
  alternates: { canonical: `${SITE_ORIGIN}/nasil-kullanilir` },
  openGraph: {
    title: "Yazı Stilleri Nasıl Kullanılır?",
    description: "Kopyala-yapıştır yazı stilleri için adım adım Türkçe kılavuz.",
    url: `${SITE_ORIGIN}/nasil-kullanilir`,
    siteName: SITE_NAME,
    type: "article",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Yazı stilleri nasıl kullanılır" }],
  },
};

const howToSteps = [
  {
    name: "Metninizi yazın",
    text: "Ana sayfadaki veya konuya özel sayfadaki oluşturucuya bio, nick veya mesajınızı girin. Türkçe harfler desteklenen stillerde korunur.",
  },
  {
    name: "Stil seçin veya filtreleyin",
    text: "Kategori (kalın, estetik, oyun, çerçeve vb.) ve arama kutusuyla listeyi daraltın. Karakter sayacı bio sınırları için yardımcı olur.",
  },
  {
    name: "Kopyalayın",
    text: "Beğendiğiniz satırın yanındaki Kopyala düğmesine tıklayın veya dokunun. Panoya Unicode metin kopyalanır.",
  },
  {
    name: "Hedef uygulamaya yapıştırın",
    text: "Instagram bio, WhatsApp durum, TikTok biyografi veya oyun nick alanına uzun basıp Yapıştır deyin. Kaydetmeden önce önizleyin.",
  },
  {
    name: "Gerekirse sadeleştirin",
    text: "Kare kutu veya kesilme görürseniz daha kısa metin veya daha sade bir stil deneyin; zalgo yerine kalın veya caps stiller genelde daha güvenlidir.",
  },
];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Yazı Stilleri nasıl kullanılır",
  description:
    "Yazıstilleri.com.tr oluşturucusu ile Unicode yazı stillerini kopyalayıp sosyal medya ve oyun hesaplarına yapıştırma adımları.",
  step: howToSteps.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
};

export default function NasilKullanilirPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Ana Sayfa", href: "/" }, { label: "Nasıl Kullanılır" }]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <div className="container mx-auto max-w-3xl px-4 pb-14 pt-6">
        <h1 className="font-display text-3xl font-bold text-white md:text-4xl">
          Yazı stillerini kopyala-yapıştır ile kullanma rehberi
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-white/70">
          Bu kılavuz, {SITE_NAME} ile ürettiğiniz metni Instagram, WhatsApp, TikTok ve oyun
          hesaplarına taşımanız için yazıldı. Kayıt veya uygulama indirme gerekmez.
        </p>

        <section className="mt-10 space-y-6 leading-relaxed text-white/75">
          <h2 className="font-display text-2xl font-bold text-white">Başlamadan önce</h2>
          <p>
            Yazı stilleri gerçek font dosyası değildir;{" "}
            <Link href="/yazi-stilleri-nedir" className="text-pink underline">
              Unicode dönüşümü
            </Link>{" "}
            ile oluşur. Bu yüzden Word veya Google Docs’ta “font menüsünden” seçemezsiniz — metni
            oluşturup hedef uygulamaya yapıştırırsınız. Metniniz sunucuya gönderilmeden tarayıcıda
            işlenir.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-2xl font-bold text-white">Adım adım</h2>
          <ol className="mt-6 space-y-8">
            {howToSteps.map((step, i) => (
              <li key={step.name} className="flex gap-4">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet/15 font-display text-lg font-bold text-violet"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-white">{step.name}</h3>
                  <p className="mt-2">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-12 space-y-4 leading-relaxed text-white/75">
          <h2 className="font-display text-2xl font-bold text-white">Platform kısayolları</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <Link href="/instagram-yazi-tipleri" className="text-pink underline">
                Instagram yazı tipleri
              </Link>{" "}
              — 150 karakter bio ipuçları
            </li>
            <li>
              <Link href="/whatsapp-yazi-stilleri" className="text-pink underline">
                WhatsApp yazı stilleri
              </Link>{" "}
              — durum ve grup adı
            </li>
            <li>
              <Link href="/sekilli-nick" className="text-pink underline">
                Şekilli nick
              </Link>{" "}
              — PUBG / Free Fire okunaklılık
            </li>
          </ul>
        </section>

        <section className="mt-12 space-y-4 leading-relaxed text-white/75">
          <h2 className="font-display text-2xl font-bold text-white">Sık yapılan hatalar</h2>
          <p>
            Tüm paragrafı aşırı süslü (zalgo) yapmak mesajı okunaksız kılar. Bio’yu doldurmak için
            gereksiz sembol eklemek karakter limitini boşa harcar. iOS ve Android’de aynı metni
            kontrol etmeden yayınlamak, bir cihazda bozuk görünme riskini artırır.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-white">Hızlı deneme</h2>
          <p className="mt-2 text-white/70">
            Rehberi okuduktan sonra aşağıdaki mini oluşturucu ile ilk kopyalamanızı yapabilirsiniz.
          </p>
          <div className="mt-6">
            <FontStyleGenerator defaultValue="Deneme" heading="Mini oluşturucu" />
          </div>
        </section>

        <div className="mt-12 flex justify-center">
          <CtaButton href="/#generator">Ana oluşturucu</CtaButton>
        </div>
      </div>
    </>
  );
}
