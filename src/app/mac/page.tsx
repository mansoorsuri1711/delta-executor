import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaButton from "@/components/CtaButton";
import FaqSection from "@/components/FaqSection";
import {
  BRAND_HERO,
  OG_IMAGE,
  SITE_NAME,
  SITE_ORIGIN,
  APP_VERSION,
  STYLES_UPDATED,
  ANDROID_APK_URL,
} from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Mac için Delta Executor — Seçenekler, Sınırlar ve Emülatör Rehberi (${APP_VERSION})`,
  description:
    "Mac için Delta Executor var mı? Gerçek seçeneklerinizi kapsayan dürüst yanıt: BlueStacks aracılığıyla Android emülatörü, neden yerel macOS derlemesi olmadığı ve nelere dikkat etmeniz gerektiği. Kasım 2026.",
  alternates: { canonical: `${SITE_ORIGIN}/mac` },
  openGraph: {
    title: `Mac için Delta Executor — ${SITE_NAME}`,
    description: `Mac kullanıcıları için Delta Executor ${APP_VERSION} ile yapabilecekleriniz — emülatör rehberi ve dürüst sınırlar.`,
    url: `${SITE_ORIGIN}/mac`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Delta Executor Mac rehberi" }],
  },
};

const faqItems = [
  {
    question: "macOS için yerel Delta Executor uygulaması var mı?",
    answer:
      "Hayır. Kasım 2026 itibarıyla Delta Executor'ın resmi olarak yayınlanmış yerel bir macOS derlemesi yoktur. Executor, özellikle Android çalışma zamanı için inşa edilmiştir. Yerel macOS Delta indirmesi sunan herhangi bir site Delta ekibinden değildir.",
  },
  {
    question: "Apple Silicon (M1/M2/M3) Mac'te Delta Executor çalıştırabilir miyim?",
    answer:
      "Apple Silicon Mac'ler belirli emülatörler aracılığıyla Android uygulamalarını çalıştırabilir, ancak destek tutarsızdır. BlueStacks resmi olarak Apple Silicon'ı desteklemez. LDPlayer'ın sınırlı macOS desteği vardır. Apple Silicon'da en iyi seçeneğiniz, fiziksel bir iPhone'da Delta çalıştırabiliyorsanız iPhone yansıtmadır (macOS Sequoia+).",
  },
  {
    question: "Mac'te emülatör aracılığıyla Delta çalıştırmak yasaklanmama neden olur mu?",
    answer:
      "Her zaman geçerli kurallar uygulanır: Roblox'un sunucu tarafı tespitinin hedeflediği şey çalıştırdığınız scriptlerdir, platform değil. Emülatörler ekstra koruma sağlamaz. Hatta emülatör ortamları, gerçek Roblox oynanışında nadir olan donanım imzalarını ortaya çıkardığından daha kolay tespit edilebilir.",
  },
  {
    question: "Diğer executor'larla kullanabileceğim Mac sürümü Roblox var mı?",
    answer:
      "Roblox'un yerel bir macOS istemcisi vardır. Delta'dan ayrı olan PC odaklı executor'lar bazen macOS'u Windows ile birlikte destekler. Delta Roblox özellikle mobil deneyime odaklanır ve belirli PC/Mac executor'larını onaylamaz.",
  },
  {
    question: "Şu anda Mac'te Delta'yı denemenin en kolay yolu nedir?",
    answer:
      "iPhone'unuz varsa, AltStore veya TrollStore aracılığıyla Delta Executor'ı kurun (iOS rehberimize bakın) ve ekranı Mac'inizde görmek için macOS Sequoia'daki iPhone Yansıtma özelliğini kullanın. Bu yerel bir Mac deneyimi değildir, ancak Mac'inizden iPhone'unuzu kontrol etmenizi sağlar. Aksi takdirde, Intel Mac'te Android Nougat/Pie görüntüsü ile BlueStacks en çok test edilen emülatör yoludur.",
  },
];

const emulatorSteps = [
  {
    n: 1,
    title: "BlueStacks 5 kurun (yalnızca Intel Mac)",
    body: "BlueStacks 5 for macOS'u bluestacks.com'dan indirin. BlueStacks 5, macOS 10.14 veya üzerini çalıştıran Intel Mac'leri destekler. Apple Silicon (M1/M2/M3) resmi olarak desteklenmez — Rosetta'yı kendi riskinizde deneyin. Kurulum 5–10 dakika sürer.",
  },
  {
    n: 2,
    title: "Android ortamını kurun",
    body: "İlk başlatmada BlueStacks bir Android 9 örneği oluşturur. Play Store'u etkinleştirmek için Google hesabıyla giriş yapın. Delta'ya dokunmadan önce BlueStacks içinde Play Store'dan Roblox'u kurun ve başlatıldığını doğrulayın.",
  },
  {
    n: 3,
    title: "ARM çevirisini etkinleştirin",
    body: "Delta Executor ARM için derlenmiştir. BlueStacks'te Ayarlar → Motor → ARM çevirisini etkinleştir (deneysel) seçeneğine gidin. Kaydedin ve BlueStacks'i yeniden başlatın. Bu adım olmadan Delta APK kurulmayabilir veya başlatmada çökebilir.",
  },
  {
    n: 4,
    title: "Delta Executor APK'yı yandan yükleyin",
    body: `Mac'inizde deltaroblox.tr adresinden Delta Executor ${APP_VERSION} APK'sını indirin. BlueStacks'te yan araç çubuğundaki APK simgesine tıklayın ve indirilen dosyayı seçin. BlueStacks bunu normal bir Android uygulaması olarak kurar.`,
  },
  {
    n: 5,
    title: "BlueStacks içinde Roblox'u açın ve bir oyuna katılın",
    body: "BlueStacks ana ekranından Roblox'u başlatın, ikincil hesapla giriş yapın ve herhangi bir oyuna katılın. Tam harita yüklemesini bekleyin.",
  },
  {
    n: 6,
    title: "Delta'yı bağlayın ve çalıştırın",
    body: "BlueStacks içinde Delta Executor'a geçin. İstenirse anahtar akışını tamamlayın. Bağlan'a dokunun. Durum yeşile döndüğünde bir script yükleyin ve çalıştırın. Not: emülatörlerde enjeksiyon, yerel Android donanımından daha az kararlıdır — ara sıra hatalar normaldir.",
  },
];

export default function MacPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Ana Sayfa", href: "/" }, { label: "Mac" }]}
      />

      {/* Hero */}
      <div className="container mx-auto max-w-6xl px-4 pb-4 pt-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          <div className="flex-1">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-yellow-400/80">
              ⚠ Yerel macOS derlemesi yok
            </p>
            <h1 className="font-display text-4xl font-bold text-white md:text-5xl">
              Mac için Delta Executor
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/65">
              Delta Executor&apos;ın resmi yerel macOS sürümü yoktur. Bu sayfa gerçek seçeneklerinizi açıklar: Intel Mac&apos;te Android emülatörü aracılığıyla Delta çalıştırma veya iPhone&apos;da Delta kullanarak Mac&apos;e yansıtma.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <CtaButton href={ANDROID_APK_URL} icon="download">
                Android APK İndir
              </CtaButton>
              <Link href="/ios" className="font-semibold text-pink hover:underline self-center">
                iOS (iPhone) rehberi →
              </Link>
            </div>
            <p className="mt-3 text-xs text-white/35">
              Script executor&apos;lar Roblox ToS&apos;unu ihlal eder. Yedek hesaplarda kendi riskinizde kullanın.
            </p>
          </div>
          <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-muted md:w-72 lg:w-96">
            <Image
              src={BRAND_HERO}
              alt="Delta Executor arayüzü genel bakış"
              width={1200}
              height={675}
              sizes="(max-width: 768px) 100vw, 384px"
              className="h-auto w-full object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Situation overview */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-4 font-display text-2xl font-bold text-white">
          Mevcut Mac durumu ({APP_VERSION}, {STYLES_UPDATED})
        </h2>
        <div className="space-y-4 text-white/70 leading-relaxed">
          <p>
            Delta Executor, Android&apos;in ARM çalışma zamanı için inşa edilmiş{" "}
            <strong className="text-white">mobil öncelikli bir executor&apos;dır</strong>.
            Cocoa veya Electron sarmalayıcısı yoktur ve .dmg veya .app dosyası olarak dağıtılmaz.
            Delta geliştirme ekibi Kasım 2026 itibarıyla macOS yayını duyurmamıştır.
          </p>
          <p>
            Pratik seçenekleriniz şunlardır:
          </p>
          <ul className="ml-4 list-disc space-y-2 text-white/65">
            <li>
              <strong className="text-white">Intel Mac&apos;te Android emülatörü</strong> — BlueStacks 5,
              Delta&apos;yı sanallaştırılmış bir Android ortamında çalıştırmanıza olanak tanır. Enjeksiyon
              güvenilirliği yerel Android&apos;den düşüktür ve Apple Silicon resmi olarak desteklenmez.
            </li>
            <li>
              <strong className="text-white">iPhone + macOS Sequoia yansıtma</strong> — Delta çalıştıran
              bir iPhone&apos;unuz varsa macOS Sequoia&apos;nın iPhone Yansıtma özelliği Mac&apos;inizden telefonu
              kontrol etmenizi sağlar. Telefondaki Delta&apos;yı doğal olarak kullanırsınız ancak Mac ekranında
              görüp kontrol edersiniz.
            </li>
            <li>
              <strong className="text-white">Windows&apos;ta PC emülatörü (ayrı makine)</strong> —
              Bir Windows PC&apos;ye erişiminiz varsa bu daha kararlı bir emülatör ortamıdır.{" "}
              <Link href="/pc-version" className="text-pink hover:underline">PC sürümü rehberimize</Link>{" "}
              bakın.
            </li>
          </ul>
          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/5 p-4 text-sm">
            <strong className="text-yellow-300">Sahte Mac indirmeleri:</strong> &ldquo;Mac için Delta Executor
            .dmg&rdquo; veya &ldquo;Delta X Mac&rdquo; indirmesi sunan siteler bizimle bağlantılı değildir ve potansiyel
            kötü amaçlı yazılım olarak değerlendirilmelidir. Bu alandaki macOS executor&apos;larının güvenlik
            geçmişi kötüdür. Her zaman kaynakları doğrulayın.
          </div>
        </div>
      </div>

      {/* Comparison table */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-4 font-display text-2xl font-bold text-white">Seçeneklere genel bakış</h2>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-sm text-white/70">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.04] text-left text-xs uppercase tracking-wider text-white/40">
                <th className="px-4 py-3">Seçenek</th>
                <th className="px-4 py-3">Mac uyumluluğu</th>
                <th className="px-4 py-3">Güvenilirlik</th>
                <th className="px-4 py-3">Notlar</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                ["BlueStacks (Intel Mac)", "İyi", "Orta", "ARM çevirisi gerekli; Apple Silicon yok"],
                ["iPhone Yansıtma (macOS Sequoia)", "Mükemmel", "Yüksek", "Fiziksel iPhone ve macOS Sequoia gerektirir"],
                ["LDPlayer (Mac)", "Sınırlı", "Düşük", "Resmi Mac desteği yok; deneysel"],
                ["Yerel macOS derlemesi", "Yok", "N/A", "Kasım 2026 itibarıyla mevcut değil"],
              ].map(([opt, compat, rel, notes]) => (
                <tr key={opt}>
                  <td className="px-4 py-3 font-semibold text-white">{opt}</td>
                  <td className="px-4 py-3">{compat}</td>
                  <td className="px-4 py-3">{rel}</td>
                  <td className="px-4 py-3 text-white/40 text-xs">{notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Emulator steps */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-4 font-display text-2xl font-bold text-white">
          Intel Mac&apos;te BlueStacks Kurulum Adımları
        </h2>
        <ol className="space-y-4">
          {emulatorSteps.map((s) => (
            <li key={s.n} className="flex gap-4 rounded-2xl border border-white/10 bg-card p-5">
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

      {/* Discord for Mac users */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-4 font-display text-2xl font-bold text-white">
          Mac kullanıcıları için Discord
        </h2>
        <p className="mb-4 text-white/65 leading-relaxed">
          Emülatör enjeksiyonu ve Apple Silicon sınırları sık bozulur. Delta Discord&apos;unda yama
          duyuruları, BlueStacks / yansıtma ipuçları ve hata tartışmaları bulunur — sahte davetlere
          dikkat ederek katılın.
        </p>
        <div className="bfv-glass-card flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/55">
            Güvenli katılım adımları ve DM dolandırıcılık uyarıları Discord rehberinde.
          </p>
          <Link
            href="/discord"
            className="shrink-0 rounded-full border border-pink/30 bg-pink/10 px-5 py-2.5 text-sm font-semibold text-pink hover:bg-pink/20"
          >
            Discord rehberi →
          </Link>
        </div>
      </div>

      {/* FAQ */}
      <div className="container mx-auto max-w-3xl px-4 pb-14 pt-4">
        <FaqSection title="Mac SSS" items={faqItems} />
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/download" className="font-semibold text-pink hover:underline">
            ← Android indirme
          </Link>
          <Link href="/ios" className="font-semibold text-pink hover:underline">
            iOS rehberi →
          </Link>
          <Link href="/pc-version" className="font-semibold text-pink hover:underline">
            PC sürümü →
          </Link>
          <Link href="/discord" className="font-semibold text-pink hover:underline">
            Discord →
          </Link>
          <Link href="/troubleshooting" className="font-semibold text-pink hover:underline">
            Sorun giderme →
          </Link>
        </div>
      </div>
    </>
  );
}
