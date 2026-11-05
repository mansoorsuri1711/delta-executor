import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaButton from "@/components/CtaButton";
import FaqSection from "@/components/FaqSection";
import {
  BRAND_FEATURE_3,
  OG_IMAGE,
  SITE_NAME,
  SITE_ORIGIN,
  APP_VERSION,
  STYLES_UPDATED,
  ANDROID_APK_URL,
} from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Delta Executor iOS — iPhone ve iPad Kurulum Rehberi (${APP_VERSION}, Kasım 2026)`,
  description:
    "iPhone ve iPad'e bilgisayar olmadan Delta Executor nasıl kurulur. AltStore ve TrollStore aracılığıyla yandan yükleme, Delta iOS Premium, sertifika geçerliliği, anahtar sistemi ve iOS 17/18 uyumluluk notlarını kapsar.",
  alternates: { canonical: `${SITE_ORIGIN}/ios` },
  openGraph: {
    title: `iOS için Delta Executor — ${SITE_NAME}`,
    description: `Delta Executor ${APP_VERSION}, ${STYLES_UPDATED} için iPhone ve iPad kurulum rehberi.`,
    url: `${SITE_ORIGIN}/ios`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Delta Executor iOS rehberi` }],
  },
};

const iosSteps = [
  {
    n: 1,
    title: "iOS sürümünüzü kontrol edin",
    body: "iOS için Delta Executor, iOS 15.0 ile iOS 18.x arasında test edilmiştir. Ayarlar → Genel → Hakkında bölümünü açın ve sürümünüzü doğrulayın. iOS 14 veya daha eski sürümlerdeki cihazlar güvenilir biçimde çalışmayabilir.",
  },
  {
    n: 2,
    title: "Yandan yükleme yönteminizi seçin",
    body: "İki desteklenen yol vardır: (A) AltStore — tüm iOS sürümlerinde çalışır, ücretsiz Apple ID gerektirir; veya (B) TrollStore — daha hızlı ve kalıcı, ancak yalnızca belirli donanım yazılımı sürümlerinde çalışır (TrollStore'un uyumluluk listesini kontrol edin). Cihazınıza uygun olanı seçin.",
  },
  {
    n: 3,
    title: "Mac veya PC'nize AltStore kurun",
    body: "Bilgisayarınıza altstore.io'dan AltStore'u indirin. iPhone'unuzu USB ile bağlayın, iTunes'u (Windows) veya Finder'ı (macOS) açın ve AltStore sunucusunu kurun. Ardından AltServer aracılığıyla telefonunuza AltStore'u yükleyin.",
  },
  {
    n: 4,
    title: "Delta Executor IPA'sını indirin",
    body: `iPhone'unuzda Safari'yi açın ve bu sayfadan Delta Executor ${APP_VERSION} IPA dosyasını indirin. Chrome kullanmayın — Safari, iOS'ta IPA indirmelerini daha temiz işler.`,
  },
  {
    n: 5,
    title: "AltStore aracılığıyla yandan yükleyin",
    body: "iPhone'unuzda AltStore'u açın, Uygulamalarım sekmesindeki '+' düğmesine dokunun ve indirilen IPA'yı seçin. AltStore, Apple ID'nizi kullanarak imzaladıktan sonra yükler. İmzalama, ücretsiz Apple ID ile 7 gün geçerlidir (haftalık yenileme gerekir); AltStore, AltServer ile aynı Wi-Fi ağındayken arka planda otomatik yenileyebilir.",
  },
  {
    n: 6,
    title: "Geliştirici sertifikasına güvenin",
    body: "Ayarlar → Genel → VPN ve Cihaz Yönetimi bölümüne gidin, Apple ID'nizi bulun ve Güven'e dokunun. Bu adım, her yeni yandan yüklemeden sonra gereklidir.",
  },
  {
    n: 7,
    title: "Anahtarı tamamlayın ve bağlanın",
    body: "Delta Executor'ı açın, Anahtar Al'a dokunun, kontrol noktası adımlarını tamamlayın, anahtarı yapıştırın, ardından Roblox'u açın, bir oyuna katılın, Delta'ya geri dönün ve Enjekte Et'e dokunun.",
  },
];

const faqItems = [
  {
    question: "Delta Executor jailbreak olmadan iPhone'da çalışıyor mu?",
    answer:
      "Evet, yandan yükleme yoluyla (AltStore veya TrollStore). Jailbreak gerekmez. TrollStore daha kalıcı bir kurulum sunar ancak yalnızca belirli donanım yazılımlarında çalışır; AltStore evrensel olarak çalışır.",
  },
  {
    question: "Uygulamayı ne sıklıkla yeniden imzalamam gerekir?",
    answer:
      "AltStore ile ücretsiz Apple ID kullanıldığında imzalar her 7 günde bir sona erer. AltStore, iPhone'unuz AltServer ile aynı Wi-Fi ağındayken otomatik yenileyebilir. Ücretli Apple Geliştirici hesabıyla bu süre 365 güne uzar.",
  },
  {
    question: "Delta için TrollStore mi AltStore'dan mı daha iyi?",
    answer:
      "TrollStore, uygulamaları yeniden imzalama gerektirmeden kalıcı olarak kurar; bu daha pratiktir. Ancak yalnızca iOS 14.0–16.6.1 ve belirli 17.x derlemelerinde çalışır. Denemeden önce TrollStore'un GitHub sayfasındaki uyumluluk tablosunu kontrol edin.",
  },
  {
    question: "iOS'ta Android gibi yasaklanabilir miyim?",
    answer:
      "Evet. Herhangi bir platformda script executor kullanmak Roblox Kullanım Koşullarını ihlal eder. iOS, ban tespitine karşı ekstra koruma sağlamaz. Asıl hesabınız önemliyse yedek hesap kullanın.",
  },
  {
    question: "iOS'ta bağlandıktan sonra uygulama neden çöküyor?",
    answer:
      "Bu genellikle Roblox sürümünün executor'ın enjeksiyon hedefinin ilerisinde olduğu anlamına gelir. En son Roblox iOS derlemesini destekleyen bir Delta güncellemesini bekleyin veya uyumlu bir sürüm için topluluk kanallarımızı kontrol edin.",
  },
  {
    question: "Delta iOS Premium nedir?",
    answer:
      "Delta iOS Premium, standart 24 saatlik anahtar sistemini kalıcı bir abonelik tabanlı erişim jetonuyla değiştiren ücretli bir katmandır. Bu, günlük anahtar kontrol noktasını kaldırır. Fiyatlandırma ve kupon kullanılabilirliği değişir — güncel bilgiler için mevcut indirme sayfasını kontrol edin. Tamamen isteğe bağlıdır; günlük anahtarlarla ücretsiz sürüm aynı şekilde çalışır.",
  },
  {
    question: "Delta iOS için sertifika geçerliliği nasıl çalışır?",
    answer:
      "Ücretsiz Apple ID ile Delta Executor'ı yandan yüklediğinizde Apple ID'niz IPA'yı imzalar ve sertifika 7 gün geçerlidir. 7 günden sonra uygulama 'Bu uygulama artık kullanılamıyor' hatasıyla başlamayı reddeder. AltStore kullanarak yeniden imzalamanız gerekir. TrollStore kullanıcıları bu kısıtlamayla karşılaşmaz.",
  },
  {
    question: "AltStore veya TrollStore olmadan iOS'a Delta'yı doğrudan kurabilir miyim?",
    answer:
      "Doğrudan kurulum (bir .plist bağlantısı aracılığıyla OTA kurulum olarak da bilinir) kurumsal sertifikalar kullanılarak mümkündür. Ancak bu amaçla kullanılan kurumsal sertifikalar Apple tarafından düzenli olarak iptal edilir, yani uygulama günler içinde çalışmayı durdurabilir. AltStore veya TrollStore uzun vadede daha güvenilir seçeneklerdir.",
  },
  {
    question: "Delta iOS, iPhone'da VNG Roblox istemcisiyle çalışıyor mu?",
    answer:
      "VNG Roblox'un iOS kullanılabilirliği sınırlıdır. VNG iOS istemcisini özellikle kullanıyorsanız standart Delta iOS IPA, küresel Roblox paketini hedefleyebilir ve enjeksiyon başarısız olabilir. VNG iOS uyumluluk notları için indirme sayfasını kontrol edin veya VNG rehberimize bakın.",
  },
  {
    question: "Delta Executor Kasım 2026'da hangi iOS sürümlerini destekliyor?",
    answer:
      `Delta Executor ${APP_VERSION}, iOS 15.0 ile iOS 18.x arasında test edilmektedir. iOS 16 ve 17 cihazları en sık test edilenleridir. iOS 14, uyumlu donanım yazılımında TrollStore aracılığıyla çalışabilir ancak resmi olarak desteklenmez. iOS 19 (yayınlanırsa) desteği sonraki bir Delta güncellemesiyle gelecektir.`,
  },
];

export default function IosPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Ana Sayfa", href: "/" }, { label: "iOS" }]}
      />

      {/* Hero */}
      <div className="container mx-auto max-w-6xl px-4 pb-4 pt-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          <div className="flex-1">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-pink/80">
              iOS · {APP_VERSION} · {STYLES_UPDATED}
            </p>
            <h1 className="font-display text-4xl font-bold text-white md:text-5xl">
              iOS için Delta Executor
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/65">
              Jailbreak yapmadan iPhone veya iPad&apos;inizde Delta Executor çalıştırın. AltStore aracılığıyla iOS 15–18&apos;i ve TrollStore aracılığıyla belirli iOS 14–17 donanım yazılımlarını destekler.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <CtaButton href={ANDROID_APK_URL} icon="download">
                Android APK&apos;yı tercih ediyorum
              </CtaButton>
              <Link href="/#ozellikler" className="font-semibold text-pink hover:underline self-center">
                Tüm özellikleri gör →
              </Link>
            </div>
            <p className="mt-3 text-xs text-white/35">
              Script executor&apos;lar Roblox ToS&apos;unu ihlal eder. Yedek bir hesapta kendi riskinizde kullanın.
            </p>
          </div>
          <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-muted md:w-72 lg:w-96">
            <Image
              src={BRAND_FEATURE_3}
              alt="iOS iPhone'da çalışan Delta Executor"
              width={800}
              height={600}
              sizes="(max-width: 768px) 100vw, 384px"
              className="h-auto w-full object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* iOS Premium section */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-4 font-display text-2xl font-bold text-white">
          Delta iOS Premium — nedir?
        </h2>
        <div className="rounded-2xl border border-white/10 bg-card p-6 space-y-3 text-sm text-white/70 leading-relaxed">
          <p>
            Delta iOS Premium, günlük anahtar kontrol noktasını kalıcı bir oturum jetonuyla değiştiren isteğe bağlı ücretli bir aboneliktir. iOS&apos;ta Delta&apos;yı her gün kullanıyorsanız ve anahtar yenileme sürecini zahmetli buluyorsanız Premium bu sürtünmeyi ortadan kaldırır.
          </p>
          <ul className="ml-4 list-disc space-y-1.5 text-white/65">
            <li>
              <strong className="text-white">İçerdiği özellikler:</strong> Günlük anahtar zorunluluğu yok,
              öncelikli destek ve (mevcut olduğunda) Roblox yamalarından sonra güncellenmiş derlemelere erken erişim.
            </li>
            <li>
              <strong className="text-white">Fiyatlandırma ve kuponlar:</strong> Fiyatlandırma periyodik olarak değişir.
              İndirim kuponları zaman zaman resmi Delta sosyal kanallarında dağıtılır.
              Güncel fiyatlandırma için mevcut indirme sayfasını kontrol edin.
            </li>
            <li>
              <strong className="text-white">Sertifika geçerliliği:</strong> Premium, yandan yükleme sertifika modelini değiştirmez — ücretsiz Apple ID ile AltStore aracılığıyla her 7 günde bir yeniden imzalamanız gerekir. Premium yalnızca anahtar kapısını etkiler, IPA imzalama sürecini değil.
            </li>
            <li>
              <strong className="text-white">Gerekli mi?</strong> Hayır. Günlük anahtar yenileme ile ücretsiz sürüm, script çalıştırma açısından aynı biçimde çalışır. Premium yalnızca bir kolaylık yükseltmesidir.
            </li>
          </ul>
        </div>
      </div>

      {/* Compatibility table */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-4 font-display text-2xl font-bold text-white">iOS Uyumluluğu</h2>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-sm text-white/70">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.04] text-left text-xs uppercase tracking-wider text-white/40">
                <th className="px-4 py-3">Yöntem</th>
                <th className="px-4 py-3">iOS Aralığı</th>
                <th className="px-4 py-3">Yeniden İmzalama</th>
                <th className="px-4 py-3">PC Gerekli</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5">
                <td className="px-4 py-3 font-semibold text-white">AltStore</td>
                <td className="px-4 py-3">15.0 – 18.x</td>
                <td className="px-4 py-3">Her 7 günde</td>
                <td className="px-4 py-3">Evet (ilk kurulum)</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="px-4 py-3 font-semibold text-white">TrollStore</td>
                <td className="px-4 py-3">14.0 – 16.6.1 + belirli 17.x</td>
                <td className="px-4 py-3">Hiçbir zaman</td>
                <td className="px-4 py-3">Hayır</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-white">Doğrudan kurulum (OTA)</td>
                <td className="px-4 py-3">Herhangi (değişir)</td>
                <td className="px-4 py-3">Sertifika iptal edilebilir</td>
                <td className="px-4 py-3">Hayır</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Steps */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-2 font-display text-2xl font-bold text-white md:text-3xl">
          Adım adım iOS kurulum rehberi
        </h2>
        <p className="mb-8 text-sm text-white/45">AltStore yöntemi — tüm desteklenen sürümlerde çalışır</p>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: `iOS'a Delta Executor Nasıl Kurulur (${APP_VERSION})`,
              description:
                "AltStore kullanarak iPhone veya iPad'e Delta Executor IPA'yı yandan yükleme için adım adım rehber.",
              totalTime: "PT20M",
              step: iosSteps.map((s) => ({
                "@type": "HowToStep",
                position: s.n,
                name: s.title,
                text: s.body,
              })),
            }),
          }}
        />

        <ol className="space-y-4">
          {iosSteps.map((s) => (
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

      {/* FAQ */}
      <div className="container mx-auto max-w-3xl px-4 pb-14">
        <FaqSection title="iOS SSS" items={faqItems} />
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/download" className="font-semibold text-pink hover:underline">
            ← Android APK rehberi
          </Link>
          <Link href="/pc-version" className="font-semibold text-pink hover:underline">
            PC sürümü →
          </Link>
          <Link href="/mac" className="font-semibold text-pink hover:underline">
            Mac rehberi →
          </Link>
          <Link href="/vng" className="font-semibold text-pink hover:underline">
            VNG (Vietnam) →
          </Link>
          <Link href="/blog/delta-executor-key-system" className="font-semibold text-pink hover:underline">
            Anahtar sistemi rehberi →
          </Link>
        </div>
      </div>
    </>
  );
}
