import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaButton from "@/components/CtaButton";
import FaqSection from "@/components/FaqSection";
import { OG_IMAGE, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Yazı Stilleri Nedir? — Unicode & Kopyala-Yapıştır Fontlar",
  description:
    "Yazı stilleri gerçek font değil; Unicode karakter dönüşümüdür. Instagram, WhatsApp, oyun nickleri, güvenlik ve gizlilik — net Türkçe açıklama.",
  alternates: { canonical: `${SITE_ORIGIN}/yazi-stilleri-nedir` },
  openGraph: {
    title: "Yazı Stilleri Nedir?",
    description: "Unicode fancy text ile gerçek font arasındaki fark.",
    url: `${SITE_ORIGIN}/yazi-stilleri-nedir`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Yazı stilleri tanımı" }],
  },
};

const faqs = [
  {
    question: "Yazı stili indirmem gerekir mi?",
    answer:
      "Hayır. Yazı Stilleri tarayıcıda çalışır; sonuç düz metindir. Karşı tarafın telefonunda ek font yüklü olması gerekmez.",
  },
  {
    question: "Bu yöntem virüs veya hack riski taşır mı?",
    answer:
      "Unicode metin normal yazıdır. Yine de bilinmeyen uygulamalardan ‘font apk’ indirmek ayrı bir risktir; biz yalnızca kopyala-yapıştır öneriyoruz.",
  },
  {
    question: "Arama motorları şekilli metni okur mu?",
    answer:
      "Google çoğu Unicode harfi Latin eşdeğerine yakın yorumlar ama erişilebilirlik ve SEO için web sitenizin gövde metnini düz yazı tutmanız önerilir; sosyal biyografi için stiller uygundur.",
  },
  {
    question: "Hangi platformlar destekler?",
    answer:
      "Instagram, WhatsApp, TikTok, Discord, Telegram ve çoğu oyun nick alanı Unicode metni kabul eder. Çok eski sistemlerde nadir kare kutular görülebilir.",
  },
];

export default function YaziStilleriNedirPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Ana Sayfa", href: "/" }, { label: "Yazı Stilleri Nedir" }]}
      />
      <div className="container mx-auto max-w-3xl px-4 pb-14 pt-6">
        <h1 className="font-display text-3xl font-bold text-white md:text-4xl">
          Yazı stilleri nedir, gerçek fonttan farkı ne?
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-white/70">
          İnternette “yazı tipi değiştirme” araması çoğu zaman{" "}
          <strong className="text-white">Unicode metin dönüşümü</strong> anlamına gelir: aynı
          kelime, farklı kod noktalarındaki harflerle yazılır ve ekranda başka görünür.
        </p>

        <section className="mt-10 space-y-4 leading-relaxed text-white/75">
          <h2 className="font-display text-2xl font-bold text-white">Unicode “fancy text” nasıl oluşur?</h2>
          <p>
            Bilgisayarlar harfleri sayısal kodlarla saklar. Unicode standardı, Latin alfabesinin
            birçok görsel varyantını tanımlar — örneğin kalın matematik harfleri, el yazısı
            benzeri semboller veya geniş aralıklı (fullwidth) karakterler. Bir oluşturucu, her
            normal harfi eşleşen Unicode karakterine map eder; ortaya kopyalanabilir bir dize
            çıkar.
          </p>
          <p>
            Bu süreçte .ttf veya .otf font dosyası yüklenmez; WhatsApp veya Instagram sunucusu
            yalnızca metin string’i görür. Bu yüzden “font uygulaması” yerine “yazı stili
            oluşturucu” demek daha doğrudur.
          </p>
        </section>

        <section className="mt-10 space-y-4 leading-relaxed text-white/75">
          <h2 className="font-display text-2xl font-bold text-white">Gerçek font vs yazı stili</h2>
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[280px] text-left text-sm">
              <thead className="bg-muted/40">
                <tr>
                  <th className="px-4 py-3 font-semibold text-white">Gerçek font</th>
                  <th className="px-4 py-3 font-semibold text-white">Yazı stili (Unicode)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink/10">
                <tr>
                  <td className="px-4 py-3">Dosya yüklenir, tasarım programında seçilir</td>
                  <td className="px-4 py-3">Kopyala-yapıştır metin</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Web sitesi CSS ile font-family kullanır</td>
                  <td className="px-4 py-3">Sosyal bio, nick, mesaj alanları</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Tüm paragraf tutarlı görünür</td>
                  <td className="px-4 py-3">Platform fontu + Unicode karışımı</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10 space-y-4 leading-relaxed text-white/75">
          <h2 className="font-display text-2xl font-bold text-white">Nerede kullanılır?</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <Link href="/instagram-yazi-tipleri" className="text-pink underline">
                Instagram bio ve caption
              </Link>
            </li>
            <li>
              <Link href="/whatsapp-yazi-stilleri" className="text-pink underline">
                WhatsApp durum ve sohbet
              </Link>
            </li>
            <li>
              <Link href="/sekilli-nick" className="text-pink underline">
                Oyun ve Discord nick
              </Link>
            </li>
            <li>TikTok biyografi —{" "}
              <Link href="/blog/tiktok-whatsapp-yazi-tipi" className="text-pink underline">
                rehber
              </Link>
            </li>
          </ul>
        </section>

        <section className="mt-10 space-y-4 leading-relaxed text-white/75">
          <h2 className="font-display text-2xl font-bold text-white">Gizlilik ve güvenlik</h2>
          <p>
            {SITE_NAME} oluşturucusu metninizi sunucuya kaydetmek için tasarlanmamıştır; dönüşüm
            tarayıcınızda gerişir. Yine de herkese açık bir cihazda hassas şifre veya kişisel
            veri yazmamanız iyi bir alışkanlıktır. Ücretli “font” uygulamaları izin isterse
            politikasını okuyun; bizim önerimiz basit kopyala-yapıştır yoludur.
          </p>
          <p>
            Ayrıntılı kullanım için{" "}
            <Link href="/nasil-kullanilir" className="text-pink underline">
              nasıl kullanılır
            </Link>{" "}
            ve{" "}
            <Link href="/privacy" className="text-pink underline">
              gizlilik politikası
            </Link>
            .
          </p>
        </section>

        <FaqSection title="Yazı stilleri SSS" items={faqs} />

        <div className="mt-12 flex justify-center">
          <CtaButton href="/#generator">Hemen dene</CtaButton>
        </div>
      </div>
    </>
  );
}
