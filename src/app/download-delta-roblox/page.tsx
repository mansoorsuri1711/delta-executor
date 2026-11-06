import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaButton from "@/components/CtaButton";
import FaqSection from "@/components/FaqSection";
import {
  BRAND_FEATURE_2,
  BRAND_HERO,
  OG_IMAGE,
  SITE_NAME,
  SITE_ORIGIN,
  APP_VERSION,
  STYLES_UPDATED,
  ANDROID_APK_URL,
} from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Delta Executor APK ${APP_VERSION} Android İndir (Kasım 2026)`,
  description:
    "Android'de Delta Executor APK indirme ve kurulum için adım adım rehber. Yandan yükleme, anahtar sistemi ipuçları, APK ayrıntıları, sistem gereksinimleri, sahte APK uyarıları ve güvenli kurulum kontrol listesi.",
  alternates: { canonical: `${SITE_ORIGIN}/download-delta-roblox` },
  openGraph: {
    title: `Delta Executor APK İndir — ${SITE_NAME}`,
    description: "Delta Executor v2.745 için güvenli Android kurulum rehberi, Kasım 2026.",
    url: `${SITE_ORIGIN}/download-delta-roblox`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `${SITE_NAME} indirme rehberi` }],
  },
};

const steps = [
  {
    n: 1,
    title: "Roblox hesabınızı yedekleyin",
    body: "Herhangi bir üçüncü taraf aracı yüklemeden önce Roblox hesabınızda iki faktörlü kimlik doğrulamayı etkinleştirin ve kurtarma kodlarınızı not edin. Bu Delta ile doğrudan ilgili değildir ancak iyi bir güvenlik alışkanlığıdır.",
  },
  {
    n: 2,
    title: "Bilinmeyen kaynaklardan yüklemeye izin verin",
    body: "Android 8 ve üzerinde Ayarlar → Uygulamalar → Özel uygulama erişimi → Bilinmeyen uygulamaları yükle yolunu izleyin, ardından tarayıcınız veya dosya yöneticiniz için izni açın. Daha eski Android sürümlerinde Güvenlik bölümündeki tek bir anahtar tüm kaynakları kapsar.",
  },
  {
    n: 3,
    title: "Delta Executor APK'yı indirin",
    body: `Bu sayfadaki indirme düğmesine dokunarak resmi Delta Executor ${APP_VERSION} APK'sını indirin (${STYLES_UPDATED}). Dosya yaklaşık 167.8 MB büyüklüğündedir. Dosya adının .apk ile bittiğini doğrulayın — Android üzerinde asla .exe dosyası çalıştırmayın.`,
  },
  {
    n: 4,
    title: "APK yükleyiciyi çalıştırın",
    body: "İndirilenler klasörünüzü açın, APK'ya dokunun ve yükleme istemini onaylayın. Android bir izin özeti gösterecektir; Delta Executor, script dosyalarını yüklemek için depolama erişimine ve Roblox üzerinde arayüzünü göstermek için kaplama iznine ihtiyaç duyar.",
  },
  {
    n: 5,
    title: "Kaplama ve depolama izinlerini verin",
    body: "Kurulumdan sonra Delta Executor'ı açın. 'Diğer uygulamaların üzerinde çiz' isteniyor ise Ayarlar → Uygulamalar → Özel uygulama erişimi → Diğer uygulamaların üzerinde görüntüle bölümüne gidin ve Delta'yı etkinleştirin. Depolama için Ayarlar → Uygulamalar → Delta Executor → İzinler → Depolama → İzin Ver yolunu izleyin.",
  },
  {
    n: 6,
    title: "Anahtar sistemini tamamlayın (istenirse)",
    body: "Delta Executor otomatik kötüye kullanımı önlemek için bir anahtar sistemi kullanır. Anahtar bağlantısını açın, Linkvertise veya Loot-Link adımlarını tamamlayın, anahtarı kopyalayın, executor'a yapıştırın ve Bağlan'a dokunun. Tam adımlar için anahtar rehberimize bakın.",
  },
  {
    n: 7,
    title: "Roblox'u başlatın ve bağlanın",
    body: "Önce Roblox'u açın ve herhangi bir oyuna katılın. Delta Executor'a geçin, Bağlan'a dokunun, yeşil 'Enjekte Edildi' durumunu bekleyin, ardından scriptinizi yapıştırın veya yükleyin ve Çalıştır'a dokunun.",
  },
];

const faqItems = [
  {
    question: "Delta Executor indirmek ücretsiz mi?",
    answer:
      "Evet. Delta Executor Android için ücretsizdir. Script çalıştırmak için ücretli bir katman gerekmez — tek engel anahtar sistemidir ve anahtarlar anahtar sayfası aracılığıyla ücretsiz edinilebilir.",
  },
  {
    question: "Roblox hesabım yasaklanır mı?",
    answer:
      "Script executor kullanmak Roblox Kullanım Koşullarını ihlal eder. Özellikle güçlü hile karşıtı sistemlere sahip oyunlarda yasaklanmalar yaşanmaktadır. Asıl hesabınızı korumak istiyorsanız yedek bir hesap kullanın. Delta Roblox yasaklanmayacağınızı garanti etmez.",
  },
  {
    question: "Hangi Android sürümü gereklidir?",
    answer:
      "Delta Executor, Android 5.0 (Lollipop) ve üstünü destekler; Android 8.0 (Oreo) ve sonrasında tam özellik desteği mevcuttur. En kararlı enjeksiyon deneyimi için Android 8+ önerilir. Daha eski sürümlerde enjeksiyon hataları yaşanabilir.",
  },
  {
    question: "Antivirüsüm APK'yı neden işaretliyor?",
    answer:
      "Android antivirüs araçları bazen executor'ları gerçek kötü amaçlı yazılım nedeniyle değil, kanca davranışları nedeniyle işaretleyebilir. Bu sayfadan indirdiyseniz APK resmi derlemedir. Yüklemeden önce VirusTotal'da tarayarak gönül rahatlığı sağlayabilirsiniz.",
  },
  {
    question: "Anahtar sayfasında çok fazla reklam var — ipucu var mı?",
    answer:
      "Uygulamanın içindeki tarayıcı yerine temiz bir tarayıcı kullanın ve her kontrol noktasını sırayla tamamlayın. Linkvertise sayfasındaki yanıltıcı 'İndir' düğmelerine tıklamayın — yalnızca küçük 'Devam et' veya 'Robot değilim' düğmelerine tıklayın.",
  },
  {
    question: "APK dosyası ne kadar büyük?",
    answer:
      `Delta Executor ${APP_VERSION} APK'sı yaklaşık 167.8 MB büyüklüğündedir. İndirmeden önce yeterli boş depolama alanı bulunduğundan emin olun. Kurulu boyut biraz daha büyük olabilir.`,
  },
  {
    question: "'Play Protect kurulumu engelledi' ne anlama gelir?",
    answer:
      "Google Play Protect, Play Store dışındaki tüm APK'ları işaretler. Bu, executor'lar dahil yandan yüklenen tüm uygulamalar için beklenen bir durumdur. Devam etmek için 'Yine de yükle'ye dokunun. Bu uyarı bir virüs tespiti değildir — Play Store dışındaki herhangi bir APK için Play Protect'in varsayılan ihtiyatıdır.",
  },
  {
    question: "Delta Executor'ı yeni bir sürüme nasıl güncellerim?",
    answer:
      "deltaroblox.tr'den en son APK'yı indirin ve mevcut sürümün üzerine doğrudan yükleyin — önce kaldırmanıza gerek yoktur. Kayıtlı scriptleriniz ve ayarlarınız korunur. Güncellemeden sonra sorun yaşarsanız temiz yeniden yükleme (önce kaldırın) çoğu sorunu çözer.",
  },
  {
    question: "Delta Executor ARM64 cihazlarda çalışıyor mu?",
    answer:
      "Evet. Delta Executor, 2017'den sonra üretilen neredeyse tüm Android telefonları kapsayan ARM64 (64-bit) cihazları destekler. Android 5/6'daki ARM32 (32-bit) cihazlarda kararlılık azalabilir.",
  },
  {
    question: "Vietnam (VNG Roblox) için Delta Executor'ı nerede bulabilirim?",
    answer:
      "VNG tarafından yayınlanan Roblox istemcisinde oynuyorsanız VNG uyumlu Delta derlemesine ihtiyacınız vardır. Ayrıntılar ve Vietnam Roblox istemcisine özel indirme bağlantıları için VNG sayfamıza bakın.",
  },
];

export default function DownloadPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Ana Sayfa", href: "/" }, { label: "İndir" }]}
      />

      {/* Hero */}
      <div className="container mx-auto max-w-6xl px-4 pb-4 pt-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          <div className="flex-1">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-pink/80">
              Android APK · {APP_VERSION} · {STYLES_UPDATED}
            </p>
            <h1 className="font-display text-4xl font-bold text-white md:text-5xl">
              Android için Delta Executor İndir
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/65">
              Android için en popüler ücretsiz Roblox script executor. Root gerekmeden temiz ve güvenli kurulum için aşağıdaki adımları izleyin.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <CtaButton href={ANDROID_APK_URL} icon="download">
                APK İndir {APP_VERSION}
              </CtaButton>
              <Link href="/delta-roblox-ios" className="font-semibold text-pink hover:underline self-center">
                iOS rehberi →
              </Link>
            </div>
            <p className="mt-3 text-xs text-white/35">
              İndirerek, script executor&apos;ların Roblox ToS&apos;unu ihlal ettiğini ve kullanımın kendi riskinizde olduğunu kabul etmiş olursunuz.
            </p>
          </div>
          <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-muted md:w-72 lg:w-96">
            <Image
              src={BRAND_FEATURE_2}
              alt="Android üzerinde çalışan Delta Executor"
              width={800}
              height={600}
              sizes="(max-width: 768px) 100vw, 384px"
              className="h-auto w-full object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* APK Details Table */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-4 font-display text-2xl font-bold text-white">APK Ayrıntıları</h2>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-sm text-white/70">
            <tbody className="divide-y divide-white/5">
              {[
                ["Uygulama adı", "Delta Executor"],
                ["Sürüm", APP_VERSION],
                ["Yayın tarihi", STYLES_UPDATED],
                ["Dosya biçimi", "APK (Android Paketi)"],
                ["Minimum Android", "5.0 (Lollipop)"],
                ["Önerilen Android", "8.0+ (Oreo veya üzeri)"],
                ["Mimari", "ARM64 + ARM32"],
                ["Yaklaşık boyut", "167.8 MB"],
                ["Fiyat", "Ücretsiz"],
                ["Root gerekli", "Hayır"],
              ].map(([label, value]) => (
                <tr key={label}>
                  <td className="px-4 py-3 font-semibold text-white/80">{label}</td>
                  <td className="px-4 py-3 text-white/65">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* System Requirements */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-4 font-display text-2xl font-bold text-white">Sistem Gereksinimleri</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-card p-5">
            <h3 className="font-display font-bold text-white mb-3">Minimum</h3>
            <ul className="space-y-2 text-sm text-white/65">
              <li>Android 5.0+</li>
              <li>1 GB RAM</li>
              <li>200 MB boş depolama</li>
              <li>ARM işlemci</li>
              <li>Roblox yüklü</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-pink/20 bg-pink/5 p-5">
            <h3 className="font-display font-bold text-white mb-3">Önerilen</h3>
            <ul className="space-y-2 text-sm text-white/65">
              <li>Android 8.0+ (Oreo veya daha yeni)</li>
              <li>3 GB RAM veya daha fazlası</li>
              <li>500 MB boş depolama</li>
              <li>ARM64 işlemci</li>
              <li>Kararlı internet bağlantısı</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Fake APK warnings */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <div className="rounded-2xl border border-red-400/30 bg-red-400/5 p-6">
          <h2 className="mb-3 font-display text-xl font-bold text-red-300">
            ⚠ Sahte APK&apos;lar, Anahtarsız Dolandırıcılıklar &amp; Play Store Taklitleri
          </h2>
          <div className="space-y-3 text-sm text-white/65">
            <p>
              <strong className="text-white">Sahte APK&apos;lar:</strong> Üçüncü taraf Telegram kanalları,
              YouTube açıklamaları ve klon siteler Delta Executor olduğunu iddia eden APK&apos;lar dağıtır.
              Pek çoğu şifre çalıcı veya kripto madenci içerir. Yalnızca{" "}
              <strong className="text-white">deltaroblox.tr</strong>&apos;den indirin.
            </p>
            <p>
              <strong className="text-white">Anahtarsız dolandırıcılık:</strong> &ldquo;Delta
              Executor Anahtarsız&rdquo; veya &ldquo;Anahtar sistemi olmadan Delta&rdquo; reklamı yapan
              siteler ya bilinmeyen güvenlikteki değiştirilmiş çatallar ya da doğrudan kötü amaçlı
              yazılımdır. Resmi Delta 24 saatlik bir anahtar gerektirir — bunu kalıcı olarak atladığını
              iddia eden herhangi bir derleme son derece dikkatli yaklaşılmalıdır.
            </p>
            <p>
              <strong className="text-white">Play Store taklitleri:</strong> Delta Executor resmi Google
              Play Store&apos;da yer almaz. Play Store&apos;da kendini &ldquo;Delta Executor&rdquo; olarak
              tanıtan herhangi bir uygulama bir taklit uygulamadır — yüklemeyin.
            </p>
          </div>
        </div>
      </div>

      {/* Play Protect note */}
      <div className="container mx-auto max-w-3xl px-4 pt-6">
        <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/5 p-5">
          <h3 className="font-display font-bold text-yellow-300 mb-2">
            Google Play Protect: yanlış pozitif notu
          </h3>
          <p className="text-sm text-white/65">
            Google Play Protect, meşru executor araçları dahil Play Store aracılığıyla dağıtılmayan tüm APK&apos;ları işaretler.
            &ldquo;Play Protect kurulumu engelledi&rdquo; mesajını gördüğünüzde{" "}
            <strong className="text-white">Yine de yükle</strong>&apos;ye dokunun — bu bir virüs tespiti değildir.
            Bağımsız doğrulama istiyorsanız APK&apos;yı yüklemeden önce VirusTotal&apos;da tarayın. Executor
            APK&apos;ları genellikle genel buluşsal yöntemlerden &ldquo;Hacktool&rdquo; tespiti alır — yaygın Trojan
            veya Spyware tespitleri gerçek bir soruna işaret eder.
          </p>
        </div>
      </div>

      {/* How-to steps */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-2 font-display text-2xl font-bold text-white md:text-3xl">
          Android&apos;e Delta Executor nasıl kurulur
        </h2>
        <p className="mb-8 text-sm text-white/45">
          Tam rehber — yandan yükleme, anahtar sistemi ve ilk script çalıştırma
        </p>

        {/* HowTo schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: `Android'e Delta Executor Nasıl Kurulur (${APP_VERSION})`,
              description:
                "Android cihaza Delta Executor APK&apos;yı indirme ve yandan yükleme için adım adım rehber.",
              totalTime: "PT10M",
              supply: [
                { "@type": "HowToSupply", name: "Android telefon (5.0+)" },
                { "@type": "HowToSupply", name: "Roblox yüklü" },
              ],
              tool: [
                { "@type": "HowToTool", name: "Dosya yöneticisi uygulaması" },
                { "@type": "HowToTool", name: "Chrome veya Firefox tarayıcısı" },
              ],
              step: steps.map((s) => ({
                "@type": "HowToStep",
                position: s.n,
                name: s.title,
                text: s.body,
              })),
            }),
          }}
        />

        <ol className="space-y-4">
          {steps.map((s) => (
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

      {/* Safe-install checklist */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-4 font-display text-2xl font-bold text-white">Güvenli kurulum kontrol listesi</h2>
        <ul className="space-y-2 text-sm text-white/65">
          {[
            "Yalnızca deltaroblox.tr'den indirin — rastgele Telegram kanallarından veya YouTube bağlantılarından asla.",
            "APK dosya adı mevcut sürümle eşleşmelidir (örn. delta-executor-v2.745.apk).",
            "Bir site indirme düğmesini göstermeden önce anket doldurmanızı istiyorsa çıkın — bu biz değiliz.",
            "Delta Executor, cihaz yöneticisi ayrıcalıkları gerektirmez. İstenirse bu isteği reddedin.",
            "Daha sıkı güvenlik tercih ediyorsanız kurulumdan sonra 'Bilinmeyen kaynaklar' kısıtlamasını yeniden etkinleştirin.",
            "Emin değilseniz APK'yı yüklemeden önce VirusTotal'da tarayın — az sayıda Hacktool tespiti normaldir; yaygın Trojan tespitleri değildir.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-0.5 text-pink" aria-hidden="true">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Feature image */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-muted">
          <Image
            src={BRAND_HERO}
            alt="Delta Roblox executor arayüzü genel bakış"
            width={1200}
            height={675}
            sizes="(max-width: 768px) 100vw, 768px"
            className="h-auto w-full object-contain"
          />
        </div>
        <p className="mt-3 text-center text-xs text-white/35">
          Delta Executor {APP_VERSION} — Android üzerinde script hub arayüzü
        </p>
      </div>

      {/* FAQ */}
      <div className="container mx-auto max-w-3xl px-4 pb-14">
        <FaqSection
          title="İndirme SSS"
          items={faqItems}
        />
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/delta-roblox-ios" className="font-semibold text-pink hover:underline">
            iOS kurulum rehberi →
          </Link>
          <Link href="/delta-roblox-pc" className="font-semibold text-pink hover:underline">
            PC sürüm bilgisi →
          </Link>
          <Link href="/delta-roblox-vng" className="font-semibold text-pink hover:underline">
            VNG (Vietnam) →
          </Link>
          <Link href="/delta-roblox-mac" className="font-semibold text-pink hover:underline">
            Mac rehberi →
          </Link>
          <Link href="/how-to-use-delta-roblox" className="font-semibold text-pink hover:underline">
            Nasıl kullanılır →
          </Link>
          <Link href="/delta-roblox-troubleshooting" className="font-semibold text-pink hover:underline">
            Sorun giderme →
          </Link>
          <Link href="/" className="font-semibold text-pink hover:underline">
            Tüm özellikler →
          </Link>
          <Link href="/blog/delta-executor-key-system" className="font-semibold text-pink hover:underline">
            Anahtar sistemi rehberi →
          </Link>
        </div>
      </div>
    </>
  );
}
