import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import BlogPostSchema from "@/components/BlogPostSchema";
import FaqSection from "@/components/FaqSection";
import CtaButton from "@/components/CtaButton";
import {
  BRAND_FEATURE_4,
  SITE_NAME,
  SITE_ORIGIN,
  APP_VERSION,
  ANDROID_APK_URL,
} from "@/lib/siteConfig";

const SLUG = "delta-executor-scripts-hub";
const DATE = "2026-11-06";
const TITLE = "Delta Executor Script Hub: En İyi Scriptler ve Nasıl Kullanılır";
const DESCRIPTION =
  "Delta Executor yerleşik script hub'ının turu: hangi kategorileri keşfetmeli, scripti güvenli çalıştırma, kişisel kütüphanenizi yönetme ve Kasım 2026 ipuçları.";

export const metadata: Metadata = {
  title: `Delta Executor Script Hub Rehberi — En İyi Scriptler (2026) — ${SITE_NAME}`,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_ORIGIN}/blog/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_ORIGIN}/blog/${SLUG}`,
    siteName: SITE_NAME,
    type: "article",
    publishedTime: DATE,
  },
};

const faqItems = [
  {
    question: "Script Hub'da kaç tane script var?",
    answer:
      "Script Hub kütüphanesi aktif olarak büyümektedir. Kasım 2026 itibarıyla popüler oyunlar için binlerce script bulunmakta; bunlar etkinlik, keşif ve QoL iyileştirmeleri gibi kategorilere ayrılmıştır. Yeni scriptler yayımlandıkça otomatik güncellenir.",
  },
  {
    question: "Script Hub'dan script çalıştırmak ücretli mi?",
    answer:
      "Hayır. Tüm Script Hub içeriğine Delta Executor ile ücretsiz erişebilirsiniz. Script Hub'ın kendisi ek ücret gerektirmez; yalnızca her 24 saatte bir standart Delta anahtar yenilemesi yeterlidir.",
  },
  {
    question: "Script Hub kodunu çalıştırmadan önce okuyabilir miyim?",
    answer:
      "Evet. Script Hub'daki birçok script, doğrulama ikonuna veya kaynak düğmesine dokunarak kaynak kodunu görüntülemenize olanak tanır. Ham Lua&apos;yı okuyabilirseniz hangi API&apos;lara erişildiğini, hangi ortam değişkenlerinin okunduğunu ve herhangi bir ağ isteği yapılıp yapılmadığını doğrulayabilirsiniz.",
  },
  {
    question: "Script Hub'da hile veren scriptler var mı?",
    answer:
      "Script Hub bazı executor yardımcı araçlarını ve QoL scriptlerini barındırır, ancak delta.deltaroblox.tr standart PvP hile araçlarını kürasyonlamaz. Kütüphanede dolaşım otomasyonu, olayları hızlandırma ve UI tweak gibi özellikler bulunur. Daha açık hile araçları üçüncü taraf Lua scriptleri veya topluluklardan gelir.",
  },
  {
    question: "Çalıştırdıktan sonra scripti nasıl durdururum?",
    answer:
      "Roblox oyunundan çıkmak bir scripti durdurur. Delta aynı zamanda Yürütme sekmesinde çalışan scriptleri listeleme ve tekil scriptleri sonlandırmak için bir Durdur düğmesi sunar. Ayrıca executor&apos;dan ayrılıp yeniden bağlanmak aktif enjeksiyonu temizler.",
  },
  {
    question: "Favori scriptlerimi kaydedebilir miyim?",
    answer:
      "Evet. Script Hub&apos;da bir kez çalıştırdığınız veya bulduktan sonra kaydettiğiniz scriptler kütüphanenizde listelenir. Kütüphane sekmesi savedscripts klasörünüzdeki scriptleri gösterir — kolayca yeniden çalıştırmak için bunlara tekrar dokunun.",
  },
  {
    question: "Çalıştırdığım scriptler güncelleniyor mu?",
    answer:
      "Script Hub aracılığıyla alınan cloud scriptleri, geliştirici güncellemeleri yayınladığında otomatik olarak güncellenir. Yerel olarak kaydettiğiniz ve manuel değiştirdiğiniz scriptler değişmeden kalır — bu nedenle kayıtlı scriptleri kontrol edin ve cloud versiyonu değişmişse yeniden indirin.",
  },
  {
    question: "Kendi scriptimi nasıl yüklerim?",
    answer:
      "Delta Executor&apos;ın alt sekmesindeki Editör sekmesini veya Dosya İçe Aktarma aracını kullanarak .lua dosyalarını yükleyebilirsiniz. Özel scriptler Script Hub klasörünüzün yanında kütüphanenizde listelenir. Delta dosya sistemi yollarını kısıtlamaz, bu nedenle dosya yöneticinizden veya Google Drive&apos;dan scriptleri içe aktarabilirsiniz.",
  },
  {
    question: "Script Hub neden bazı scriptler için boş görünüyor?",
    answer:
      "Görüntüleme veya yükleme sorunları genellikle şunlardan kaynaklanır: (1) yavaş internet bağlantısı nedeniyle script katalog verilerinin yüklenmemesi, (2) eskimiş Delta sürümü — {APP_VERSION} sürümüne güncelleyin, (3) düzgün enjekte edilmemiş bir Roblox oturumu. Roblox oyunundan tamamen çıkın, yeniden başlatın, bağlanın ve tekrar deneyin.",
  },
  {
    question: "Script Hub'da çevrimdışı çalışabilen scriptler var mı?",
    answer:
      "Çoğu Script Hub scripti Roblox ağı aracılığıyla oyun sunucusunda yürütülür. Kütüphanenize manuel olarak kaydetmediğiniz sürece çevrimdışı yürütülemezler. Kayıtlı .lua dosyaları çevrimdışı görüntülenebilir ancak Roblox oturumu dışında çalıştırılamaz.",
  },
];

export default function ScriptsHubPage() {
  return (
    <>
      <BlogPostSchema
        title={TITLE}
        description={DESCRIPTION}
        slug={SLUG}
        datePublished={DATE}
        image={`${SITE_ORIGIN}${BRAND_FEATURE_4}`}
        articleBody={`Delta Executor Script Hub, popüler Roblox oyunları için önceden oluşturulmuş Lua scriptlerine doğrudan executor arayüzünden erişim sağlar.`}
      />

      <nav aria-label="Breadcrumb" className="w-full">
        <div className="container mx-auto px-4 pt-5 pb-2">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-white/45">
            <li className="flex items-center gap-2">
              <Link href="/" className="hover:text-pink">Ana Sayfa</Link>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-white/25" aria-hidden="true">/</span>
              <Link href="/blog" className="hover:text-pink">Blog</Link>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-white/25" aria-hidden="true">/</span>
              <span className="text-white/80" aria-current="page">Script Hub</span>
            </li>
          </ol>
        </div>
      </nav>

      <article className="container mx-auto max-w-3xl px-4 pb-14 pt-6">
        <header className="mb-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-pink/80">
            6 Kasım 2026 · 5 dk okuma
          </p>
          <h1 className="font-display text-3xl font-bold text-white md:text-4xl">
            {TITLE}
          </h1>
          <p className="mt-4 text-lg text-white/65">
            Delta Executor&apos;ın Script Hub&apos;ı, harici araçlara ihtiyaç duymadan doğrudan uygulamanın içinde Roblox scriptlerini bulmayı, çalıştırmayı ve kaydetmeyi sağlar. Bu rehber nasıl kullanacağınızı anlatır.
          </p>
        </header>

        <div className="mb-8 overflow-hidden rounded-2xl border border-white/10 bg-muted">
          <Image
            src={BRAND_FEATURE_4}
            alt="Delta Executor Script Hub arayüzü"
            width={1200}
            height={675}
            sizes="(max-width: 768px) 100vw, 768px"
            className="h-auto w-full object-contain"
            priority
          />
        </div>

        <div className="space-y-5 leading-relaxed text-white/75">
          <h2 className="font-display text-2xl font-bold text-white">
            Script Hub nedir?
          </h2>
          <p>
            Script Hub, Delta Executor&apos;a entegre edilmiş — daha doğrusu oluşturulmuş — önceden oluşturulmuş Lua scriptlerinin bir koleksiyonudur. &ldquo;Boş script editörünü aç → harici siteden script bul → yapıştır → çalıştır&rdquo; iş akışını atlamanıza olanak tanır. Bunun yerine kategorilere göz atın, scripte dokunun ve çalıştırın.
          </p>
          <p>
            Script Hub&apos;ı özellikle ilk kez executor kullanan Roblox oyuncuları için değerli kılan şey budur: Lua bilmenize veya harici topluluklara güvenmenize gerek yoktur.
          </p>

          <h2 className="font-display text-2xl font-bold text-white">
            Script Hub&apos;a erişme
          </h2>
          <ol className="space-y-4">
            {[
              {
                title: "Roblox&apos;a bağlanın",
                body: "Bir Roblox oyununa katılın, Delta Executor&apos;ı açın ve enjeksiyon tamamlanana kadar bekleyin (yeşil gösterge veya bağlantı mesajı). Script Hub yalnızca aktif bir oyun oturumunda çalışır.",
              },
              {
                title: "Script Hub sekmesine gidin",
                body: "Alt gezinme çubuğunda Script Hub sekmesini bulun (genellikle editör ve kütüphane sekmelerinin yanındadır). Dokunun — kategoriler ve arama çubuğu olan bir katalog yüklenir.",
              },
              {
                title: "Oyun veya kategoriye göre filtreleyin",
                body: "Üst filtreler, gösterilen scriptleri daraltmak için şunları içerir: oyun adı, QoL (kalite hayatı), etkinlik, keşif ve daha fazlası. Oyunuz listelenmişse doğrudan adına göre arayın.",
              },
              {
                title: "Script çalıştırın",
                body: "Herhangi bir script kartına dokunun — açıklama, son güncelleme ve varsa kaynak bağlantısıyla bir önizleme gösterir. Çalıştırmak için Çalıştır&apos;a dokunun. Bazı scriptler konum veya ayarlar için parametreler ister.",
              },
              {
                title: "Favori olarak kaydedin",
                body: "Kalp veya Kaydet simgesine dokunun. Script kişisel kütüphanenize eklenir; orada tekrar çalıştırmak için Kütüphane sekmesini açın, scriptinize dokunun ve Çalıştır&apos;a basın.",
              },
            ].map((step, i) => (
              <li key={i} className="flex gap-4 rounded-2xl border border-white/10 bg-card p-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-pink font-display text-lg font-bold text-black">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-white">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/60">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <h2 className="font-display text-2xl font-bold text-white">
            Popüler script kategorileri
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-sm text-white/70">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.04] text-left text-xs uppercase tracking-wider text-white/40">
                  <th className="px-4 py-3">Kategori</th>
                  <th className="px-4 py-3">Ne yapar</th>
                  <th className="px-4 py-3">Örnek scriptler</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  ["Çiftlik", "Tekrarlayan görevleri otomatikleştirir", "Ödülleri topla, rozetlere ulaş"],
                  ["Keşif", "Haritada gezinir veya öğeleri bulur", "Öğe teleportasyonu, harita görünümü"],
                  ["Etkinlik", "Zaman sınırlı event görevlerini tamamlar", "Etkinlik rozeti toplayıcıları"],
                  ["QoL", "Oyun arayüzünü veya mekaniklerini iyileştirir", "Hız tweakler, UI özelleştirici"],
                  ["Görsel", "Grafik veya efektleri ayarlar", "FPS artırıcı, grafik preset"],
                ].map(([cat, what, ex]) => (
                  <tr key={cat}>
                    <td className="px-4 py-3 font-semibold text-white">{cat}</td>
                    <td className="px-4 py-3">{what}</td>
                    <td className="px-4 py-3 text-white/50">{ex}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="font-display text-2xl font-bold text-white">
            Scripti güvenli çalıştırma
          </h2>
          <p>
            Script Hub scriptlerinin büyük çoğunluğu güvenlidir, ancak bilinçli alışkanlıklar geliştirmek iyi bir fikirdir — özellikle harici script kaynaklarına geçecekseniz:
          </p>
          <ul className="ml-4 list-disc space-y-1 text-white/65">
            <li>Popüler, iyi değerlendirilmiş scriptlere önce bakın. Yeni veya değerlendirilmemiş scriptler, Script Hub güncellemesinden henüz geçmemiş olabilir.</li>
            <li>Mümkün olduğunda kaynak kodunu inceleyin. Uzun, gizlenmiş Lua, kaynak kodunu basit ve okunabilir bırakabilen QoL tweakler için gerekli değildir.</li>
            <li>Yalnızca test ettiğiniz bir oyunda çalıştırın — asıl ilerlemenizin önemli olduğu oyunda değil.</li>
            <li>Roblox token&apos;larını, oyun içi para birimini veya hesap verilerini talep eden scriptlerden kaçının. Bunların hiçbirine ihtiyaç duyan meşru bir QoL scripti yoktur.</li>
          </ul>

          <h2 className="font-display text-2xl font-bold text-white">
            Kütüphanenizi yönetme
          </h2>
          <p>
            Kütüphaneniz zamanla büyüdükçe şu alışkanlıkları benimsemenizi öneririz:
          </p>
          <ul className="ml-4 list-disc space-y-1 text-white/65">
            <li>Hâlâ aktif olan oyunlara ait scriptleri silin — Roblox oyunları güncellendikçe eski scriptler bozulur.</li>
            <li>Artık desteklenmeyen oyunlara ait scriptleri Script Hub&apos;daki güncellenmiş sürümleriyle değiştirin.</li>
            <li>Özel olarak değiştirdiğiniz scriptleri harici cloud depolama veya Google Drive&apos;a yedekleyin; Delta yeniden yüklemelerinde kütüphaneler her zaman korunmaz.</li>
          </ul>
        </div>

        <FaqSection title="Script Hub SSS" items={faqItems} />

        <div className="mt-10 flex flex-wrap gap-4">
          <CtaButton href={ANDROID_APK_URL} icon="download" size="sm">
            Delta Executor İndir
          </CtaButton>
          <Link href="/how-to-use-delta-roblox" className="font-semibold text-pink hover:underline self-center">
            Nasıl kullanılır →
          </Link>
          <Link href="/blog/is-delta-executor-safe" className="font-semibold text-pink hover:underline self-center">
            Güvenli mi? →
          </Link>
        </div>
      </article>
    </>
  );
}
