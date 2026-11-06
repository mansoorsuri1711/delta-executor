import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaButton from "@/components/CtaButton";
import FaqSection from "@/components/FaqSection";
import {
  BRAND_FEATURE_2,
  BRAND_FEATURE_4,
  OG_IMAGE,
  SITE_NAME,
  SITE_ORIGIN,
  APP_VERSION,
  STYLES_UPDATED,
  ANDROID_APK_URL,
} from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Delta Executor Nasıl Kullanılır — Script Çalıştırma, Script Hub ve İpuçları (${APP_VERSION})`,
  description:
    "Delta Executor kullanım rehberi: Roblox'a bağlanma, script hub'ı gezme, scriptleri yapıştırma ve çalıştırma, otomatik enjeksiyon, script kaydetme ve ilk scripti çalıştırma. Kasım 2026.",
  alternates: { canonical: `${SITE_ORIGIN}/how-to-use-delta-roblox` },
  openGraph: {
    title: `Delta Executor Nasıl Kullanılır — ${SITE_NAME}`,
    description: `Delta Executor ${APP_VERSION} için tam kullanım rehberi — bağlanma, script hub, çalıştırma ve daha fazlası.`,
    url: `${SITE_ORIGIN}/how-to-use-delta-roblox`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Delta Executor nasıl kullanılır" }],
  },
};

const usageSteps = [
  {
    n: 1,
    title: "Delta Executor'ı kurun ve açın",
    body: `deltaroblox.tr adresinden Delta Executor ${APP_VERSION}'i indirin ve APK'yı kurun (yandan yükleme adımları için indirme rehberimize bakın). Uygulamayı açın. Anahtar istenirse 'Anahtar Al'a dokunun, kontrol noktasını tamamlayın, tam anahtar dizesini kopyalayın ve anahtar alanına yapıştırın.`,
  },
  {
    n: 2,
    title: "Roblox'u başlatın ve bir oyuna katılın",
    body: "Android cihazınızda Roblox'u açın ve herhangi bir oyun lobisine katılın. Oyun dünyasına tam olarak yüklenin — executor, bağlanmak için çalışan bir Roblox sürecine ihtiyaç duyar. Lobiden veya harita yüklenmeden enjekte etmeye çalışmak enjeksiyon hatasına yol açar.",
  },
  {
    n: 3,
    title: "Delta Executor'a geri dönün ve Bağlan'a dokunun",
    body: "Delta Executor'a dönmek için cihazınızın son uygulamalar geçiş özelliğini kullanın. Büyük 'Bağlan' veya 'Enjekte Et' düğmesine dokunun. Delta Roblox sürecine bağlanırken bir yükleme göstergesi göreceksiniz. Durum göstergesi yeşile dönerek 'Enjekte Edildi' gösterdiğinde hazırsınız demektir.",
  },
  {
    n: 4,
    title: "Script Hub'ı açın veya bir script yapıştırın",
    body: "İki seçeneğiniz var: (A) Hub simgesine dokunarak yerleşik script kütüphanesine göz atın ve katıldığınız oyun için bir script seçin; veya (B) düzenleyici alanına dokunun, pano'dan bir Lua scripti yapıştırın ve 5. adıma geçin. Düzenleyici çok satırlı scriptleri destekler.",
  },
  {
    n: 5,
    title: "Çalıştır'a dokunun",
    body: "Düzenleyicide bir script yüklüyken (hub'dan veya manuel olarak yapıştırılmış), 'Çalıştır'a dokunun. Delta, Lua kodunu enjekte edilen Roblox örneğine gönderir. Geri bildirim bildirim olarak görünür: yeşil başarı için, kırmızı Lua hatası için. Bir şeyler yanlış giderse hata mesajını kontrol edin — genellikle satır numarasını gösterir.",
  },
  {
    n: 6,
    title: "Sık kullandığınız scriptleri kaydedin",
    body: "Mevcut scripti adlandırılmış bir yuvaya kaydetmek için düzenleyici araç çubuğundaki kaydet simgesine (disket) dokunun. Kaydedilen scriptler 'Scriptlerim' sekmesinde görünür ve oturumlar arasında kalıcıdır. 'Dosyaya aktar' aracılığıyla bunları cihaz depolama alanınıza .lua dosyası olarak da dışa aktarabilirsiniz.",
  },
  {
    n: 7,
    title: "Konsolu kullanın (isteğe bağlı)",
    body: "Yerleşik konsol sekmesi Lua print() çıktısını ve hata izlerini gösterir. Bir script print('merhaba') çağırırsa burada görürsünüz. Özel scriptleri hata ayıklamak veya bir hub scriptinin gerçek zamanlı olarak ne yaptığını anlamak için kullanışlıdır.",
  },
];

const faqItems = [
  {
    question: "Delta neden 'Enjeksiyon Başarısız' diyor?",
    answer:
      "Enjeksiyon hataları genellikle Roblox henüz tam olarak yüklenmediğinde veya Roblox'un mevcut Delta sürümünün yama yapmadığı bir güncelleme yayınladığında gerçekleşir. Oyunun içinde tam olarak bulunduğunuzdan (sadece lobide değil) ve Delta sürümünüzün güncel olduğundan emin olun. Temiz yeniden kurulum, süregelen enjeksiyon hatalarının çoğunu düzeltir.",
  },
  {
    question: "Aynı anda birden fazla script çalıştırabilir miyim?",
    answer:
      "Evet. Enjeksiyondan sonra yeniden bağlanmak zorunda kalmadan arka arkaya scriptler çalıştırabilirsiniz. Her Çalıştır çağrısı çalışan oturuma yeni bir script ekler. Çakışan scriptlerin (aynı oyun işlevini hedefleyen iki otomatik çiftlik scripti) çökmesine neden olabileceğini unutmayın.",
  },
  {
    question: "Otomatik enjeksiyon nedir ve nasıl etkinleştiririm?",
    answer:
      "Otomatik enjeksiyon, bir Roblox sürecinin başladığını algıladığında otomatik olarak bağlanmayı deneyen Delta Executor'daki bir ayardır. Ayarlar → Otomatik Enjeksiyon bölümünden etkinleştirin. Çoğu Android 9+ cihazda güvenilir biçimde çalışır ancak bazı ROM'larda erişilebilirlik izinleri gerektirebilir.",
  },
  {
    question: "Hub'daki scriptler gri renkte — neden?",
    answer:
      "Gri hub scriptleri, şu anda bulunduğunuz oyunla uyumlu değildir veya güncellenmeyi beklerken bozuk olarak işaretlenmiştir. Desteklenen bir oyuna katılın veya her scriptin hangi oyunu hedeflediğini görmek için hub'ın 'Tümü' sekmesini kontrol edin.",
  },
  {
    question: "Cihazimdaki bir dosyadan script nasıl çalıştırırım?",
    answer:
      "Düzenleyicide klasör simgesine → 'Dosyadan yükle'ye dokunun, ardından cihazdaki .lua veya .txt dosyasına gidin. Script, çalıştırmadan önce inceleyebileceğiniz düzenleyiciye yüklenir. Bu, kodu önce okuyabileceğinizden bilinmeyen kaynaklardan kopyala-yapıştırmadan daha güvenlidir.",
  },
  {
    question: "Büyük bir script çalıştırırken executor neden çöküyor?",
    answer:
      "Çok uzun scriptler (binlerce satır), düşük RAM'li cihazlarda executor'ın Lua VM bellek sınırını tüketebilir. Scripti en az 3 GB RAM'li bir cihazda çalıştırmayı deneyin veya kendiniz yazdıysanız daha küçük modüllere bölün.",
  },
  {
    question: "Her oyun değişikliğinden sonra yeniden enjekte etmem gerekiyor mu?",
    answer:
      "Evet. Bir Roblox oyunundan çıkıp yeni bir oyuna her katıldığınızda Roblox süreci yeniden başlar ve enjeksiyonu kaybeder. Yeni oyunda script çalıştırmadan önce Delta'ya geri dönün ve tekrar Bağlan'a dokunun.",
  },
];

export default function HowToUsePage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Ana Sayfa", href: "/" }, { label: "Nasıl Kullanılır" }]}
      />

      {/* Hero */}
      <div className="container mx-auto max-w-6xl px-4 pb-4 pt-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          <div className="flex-1">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-pink/80">
              Kullanım Rehberi · {APP_VERSION} · {STYLES_UPDATED}
            </p>
            <h1 className="font-display text-4xl font-bold text-white md:text-5xl">
              Delta Executor Nasıl Kullanılır
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/65">
              İlk başlatmadan ilk scripti çalıştırmaya kadar — Script Hub, manuel script yapıştırma, konsol çıktısı, otomatik enjeksiyon ve script kaydetmeyi kapsayan tam rehber.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <CtaButton href={ANDROID_APK_URL} icon="download">
                Delta Executor İndir {APP_VERSION}
              </CtaButton>
              <Link href="/troubleshooting-delta-roblox" className="font-semibold text-pink hover:underline self-center">
                Sorun giderme →
              </Link>
            </div>
            <p className="mt-3 text-xs text-white/35">
              Script executor&apos;lar Roblox Kullanım Koşullarını ihlal eder. Yalnızca yedek hesaplarda kullanın — yasaklanma riski gerçektir.
            </p>
          </div>
          <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-muted md:w-72 lg:w-96">
            <Image
              src={BRAND_FEATURE_2}
              alt="Android üzerinde Delta Executor arayüzü"
              width={800}
              height={600}
              sizes="(max-width: 768px) 100vw, 384px"
              className="h-auto w-full object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Step-by-step */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-2 font-display text-2xl font-bold text-white md:text-3xl">
          Adım adım: ilk scripti çalıştırmak
        </h2>
        <p className="mb-8 text-sm text-white/45">
          Kurulumdan çalıştırılmış scripte kadar tam rehber — ilk seferinde yaklaşık 10 dakika sürer
        </p>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: `Roblox Scriptlerini Çalıştırmak İçin Delta Executor Nasıl Kullanılır (${APP_VERSION})`,
              description:
                "Delta Executor'ı Roblox'a bağlama, script hub'ı kullanma, scriptleri yapıştırma ve çalıştırma için tam rehber.",
              totalTime: "PT10M",
              step: usageSteps.map((s) => ({
                "@type": "HowToStep",
                position: s.n,
                name: s.title,
                text: s.body,
              })),
            }),
          }}
        />

        <ol className="space-y-4">
          {usageSteps.map((s) => (
            <li
              key={s.n}
              className="flex gap-4 rounded-2xl border border-white/10 bg-card p-5"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-pink font-display text-lg font-bold text-black">
                {s.n}
              </span>
              <div>
                <h3 className="font-semibold text-white">{s.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-white/60">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* Script Hub section */}
      <div className="container mx-auto max-w-3xl px-4 pt-12">
        <h2 className="mb-4 font-display text-2xl font-bold text-white">Script Hub açıklandı</h2>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-muted mb-6">
          <Image
            src={BRAND_FEATURE_4}
            alt="Delta Executor script hub tarayıcısı"
            width={1200}
            height={675}
            sizes="(max-width: 768px) 100vw, 768px"
            className="h-auto w-full object-contain"
          />
        </div>
        <div className="space-y-4 text-white/70 leading-relaxed">
          <p>
            Script Hub, Delta Executor navigasyon çubuğundaki ızgara simgesi aracılığıyla erişilebilir.
            Kategoriye göre düzenlenmiş düzenlenmiş Lua scriptleri içerir: otomatik çiftlik, hareket, yönetici
            panelleri, oyuna özgü araçlar ve yardımcı scriptler. Scriptler hub'a eklenmeden önce incelenir;
            bu, kötü amaçlı kod çalıştırma riskini azaltır (ancak ortadan kaldırmaz).
          </p>
          <p>
            Bir hub scripti kullanmak için: oyununuzu arayın veya göz atın, script kartına dokunun,
            açıklamayı okuyun, ardından{" "}
            <strong className="text-white">Çalıştır</strong>&apos;a dokunun. Delta onu çalışan Roblox
            oturumuna anında enjekte eder. Kopyala-yapıştır gerekmez.
          </p>
          <p>
            Kategoriler, desteklenen oyunlar ve ban risk seviyeleri hakkında daha fazla ayrıntı için{" "}
            <Link href="/blog/delta-executor-scripts-hub" className="text-pink hover:underline">
              Script Hub blog rehberine
            </Link>{" "}
            bakın.
          </p>
        </div>
      </div>

      {/* Auto-inject note */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="mb-3 font-display text-xl font-bold text-white">Otomatik enjeksiyon — notlar ve sınırlamalar</h2>
          <p className="text-sm leading-relaxed text-white/65">
            Otomatik enjeksiyon, Roblox başladığında algılar ve her oyuna katıldığınızda Bağlan&apos;a dokunmanıza
            gerek kalmadan otomatik olarak bağlanmayı dener. Uygun ama bazı uyarıları vardır: bazı Android
            sürümlerinde{" "}
            <strong className="text-white">Erişilebilirlik Hizmeti</strong> izni gerektirir. Daha yavaş
            cihazlarda Roblox tam olarak başlatılmadan önce çok erken tetiklenebilir ve enjeksiyon
            hatasına neden olabilir — daha güvenilir yedek, manuel Bağlan dokunuşudur.{" "}
            <strong className="text-white">Ayarlar → Otomatik Enjeksiyon</strong>&apos;dan değiştirin.
          </p>
        </div>
      </div>

      {/* FAQ */}
      <div className="container mx-auto max-w-3xl px-4 pb-14 pt-4">
        <FaqSection title="Nasıl Kullanılır SSS" items={faqItems} />
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/download-delta-roblox" className="font-semibold text-pink hover:underline">
            ← İndirme rehberi
          </Link>
          <Link href="/troubleshooting-delta-roblox" className="font-semibold text-pink hover:underline">
            Sorun giderme →
          </Link>
          <Link href="/blog/delta-executor-scripts-hub" className="font-semibold text-pink hover:underline">
            Script Hub blogu →
          </Link>
        </div>
      </div>
    </>
  );
}
