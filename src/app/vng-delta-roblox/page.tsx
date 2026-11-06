import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaButton from "@/components/CtaButton";
import FaqSection from "@/components/FaqSection";
import {
  BRAND_FEATURE_2,
  OG_IMAGE,
  SITE_NAME,
  SITE_ORIGIN,
  APP_VERSION,
  STYLES_UPDATED,
  ANDROID_APK_URL,
} from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Delta Executor VNG — Vietnam Roblox İstemcisi Rehberi (${APP_VERSION})`,
  description:
    "Delta Executor VNG nedir? Vietnam yerel Roblox istemcisini (VNG), VNG sürümüne kimin ihtiyaç duyduğunu, küresel Roblox'tan nasıl farklı olduğunu ve Vietnamlı oyuncular için kurulum notlarını açıklar. Kasım 2026.",
  alternates: { canonical: `${SITE_ORIGIN}/vng-delta-roblox` },
  openGraph: {
    title: `Delta Executor VNG (Vietnam) — ${SITE_NAME}`,
    description: `VNG Roblox istemcisi açıklandı, kimin ihtiyacı var ve ${APP_VERSION} için Delta Executor uyumluluk notları.`,
    url: `${SITE_ORIGIN}/vng-delta-roblox`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Delta Executor VNG Vietnam rehberi" }],
  },
};

const faqItems = [
  {
    question: "VNG Roblox nedir?",
    answer:
      "VNG Roblox, Vietnamlı oyun yayıncısı VNG Corporation tarafından yayınlanan yerelleştirilmiş bir Roblox sürümüdür. Yerel ödeme seçenekleri ve içerik kurallarıyla Vietnam pazarına hizmet vermek için başlatılmıştır. VNG istemcisi, küresel Roblox'tan ayrı bir uygulamadır ve farklı bir paket adı kullanır.",
  },
  {
    question: "VNG sürümü Delta Executor'a ihtiyacım var mı?",
    answer:
      "Yalnızca VNG istemcisi üzerinden Roblox oynuyorsanız. Roblox'u küresel Google Play Store'dan veya resmi roblox.com'dan kurduysanız VNG'ye özgü bir Delta derlemesine ihtiyaç duymazsınız — standart Delta Executor APK küresel Roblox paketini hedefler.",
  },
  {
    question: "Resmi Delta Executor VNG derlemesi var mı?",
    answer:
      "Delta Executor ekibi, küresel derlemelerin yanı sıra VNG Roblox paketini hedefleyen derlemeler yayınlamıştır. En son sürüm uyumluluk notları için deltaroblox.tr indirme sayfasını kontrol edin. Her zaman resmi siteden indirin — 'Delta VNG' APK'ları dağıtan üçüncü taraf siteler yaygın kötü amaçlı yazılım kaynaklarıdır.",
  },
  {
    question: "VNG Roblox ile küresel Delta APK'yı kullanabilir miyim?",
    answer:
      "Genellikle hayır. Uygulama paket adları ve dahili kütüphane yolları farklı olduğundan küresel Roblox ile VNG Roblox arasında enjeksiyon hedefi farklıdır. VNG istemcisine karşı küresel Delta derlemesi kullanmak genellikle enjeksiyon hatasıyla sonuçlanır. Roblox istemcinizle eşleşen Delta derlemesini kullanın.",
  },
  {
    question: "VNG Roblox'ta Delta kullanmak hesabımın yasaklanmasına neden olur mu?",
    answer:
      "Evet — VNG Roblox için de aynı ToS geçerlidir. VNG Roblox hesapları, exploit kullanımı nedeniyle yasaklanmaya tabidir ve risk düzeyi küresel Roblox ile benzerdir. Ana ilerlemenizi korumak istiyorsanız ikincil bir VNG hesabı kullanın.",
  },
  {
    question: "Anahtar sistemi VNG derlemelerinde de aynı şekilde çalışıyor mu?",
    answer:
      "Evet. Anahtar sistemi (Linkvertise / Loot-Link kontrol noktası), küresel veya VNG derlemesi kullandığınızdan bağımsız olarak aynı şekilde çalışır. Anahtarlar her iki durumda da cihaza özgüdür ve 24 saat sonra sona erer.",
  },
];

export default function VngPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Ana Sayfa", href: "/" }, { label: "VNG" }]}
      />

      {/* Hero */}
      <div className="container mx-auto max-w-6xl px-4 pb-4 pt-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          <div className="flex-1">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-pink/80">
              VNG · Vietnam Roblox · {APP_VERSION} · {STYLES_UPDATED}
            </p>
            <h1 className="font-display text-4xl font-bold text-white md:text-5xl">
              Delta Executor VNG
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/65">
              VNG (Vietnam) istemcisi üzerinden Roblox oynuyor musunuz? Bu rehber VNG Roblox&apos;un ne olduğunu, neden farklı bir executor derlemesi gerektirdiğini, nasıl kurulacağını ve küresel sürümden ne gibi farklılıkları olduğunu açıklar.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <CtaButton href={ANDROID_APK_URL} icon="download">
                Delta {APP_VERSION} İndir
              </CtaButton>
              <Link href="/how-to-use-delta-roblox" className="font-semibold text-pink hover:underline self-center">
                Nasıl kullanılır →
              </Link>
            </div>
            <p className="mt-3 text-xs text-white/35">
              Script executor&apos;lar, istemci sürümünden bağımsız olarak Roblox ToS&apos;unu ihlal eder. Kendi riskinizde kullanın.
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

      {/* What is VNG */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-4 font-display text-2xl font-bold text-white">
          VNG Roblox nedir?
        </h2>
        <div className="space-y-4 text-white/70 leading-relaxed">
          <p>
            VNG Corporation, Vietnam&apos;ın en büyük oyun yayıncılarından biridir. 2022–2023 yıllarında
            VNG, Vietnam pazarında yerelleştirilmiş bir Roblox sürümü dağıtmak için Roblox
            Corporation ile bir yayıncılık ortaklığı kurdu. VNG Roblox sürümü Android&apos;de mevcuttur ve
            şunları içerir:
          </p>
          <ul className="ml-4 list-disc space-y-2 text-white/65">
            <li>Yerelleştirilmiş ödeme yöntemleri (MoMo, ZaloPay, yerel bankacılık)</li>
            <li>Vietnamca arayüz ve müşteri desteği</li>
            <li>Ayrı bir Google Play listesi (küresel Roblox&apos;tan farklı paket adı)</li>
            <li>Vietnam pazarı için potansiyel olarak farklı içerik moderasyon ayarları</li>
          </ul>
          <p>
            VNG istemcisi, küresel Roblox uygulamasından{" "}
            <strong className="text-white">farklı bir uygulama paket adı</strong> kullandığından
            ({" "}<code className="text-pink bg-white/5 rounded px-1">com.roblox.client</code>{" "}
            ile VNG paketi), executor&apos;ların doğru süreci hedefliyecek şekilde derlenmesi veya
            yapılandırılması gerekir. Yanlış derleme kullanmak enjeksiyon hatalarına yol açar.
          </p>
        </div>
      </div>

      {/* Who needs VNG version */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-4 font-display text-2xl font-bold text-white">
          VNG uyumlu Delta derlemesine kim ihtiyaç duyar?
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-green-400/20 bg-green-400/5 p-5">
            <h3 className="font-display font-bold text-green-400 mb-2">✓ VNG uyumlu derleme kullanın eğer:</h3>
            <ul className="space-y-1.5 text-sm text-white/65">
              <li>Roblox&apos;u VNG&apos;nin Google Play listesinden indirdiyseniz</li>
              <li>Roblox uygulamanız başlangıç ekranında VNG markası gösteriyorsa</li>
              <li>Vietnam&apos;daysanız ve Roblox içinde yerel ödeme yöntemleri kullanıyorsanız</li>
              <li>Küresel Delta derlemesi, Roblox sürümünüzde enjeksiyon hatası veriyorsa</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-card p-5">
            <h3 className="font-display font-bold text-white mb-2">→ Küresel derleme kullanın eğer:</h3>
            <ul className="space-y-1.5 text-sm text-white/65">
              <li>Roblox&apos;u roblox.com veya standart Play Store&apos;dan kurduysanız</li>
              <li>Roblox girişiniz küresel Roblox hesabı kullanıyorsa</li>
              <li>Vietnam dışındaysanız</li>
              <li>Küresel Delta derlemesi daha önce başarıyla enjekte ettiyse</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Differences table */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-4 font-display text-2xl font-bold text-white">
          Küresel ve VNG — Delta kullanıcıları için temel farklar
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-sm text-white/70">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.04] text-left text-xs uppercase tracking-wider text-white/40">
                <th className="px-4 py-3">Özellik</th>
                <th className="px-4 py-3">Küresel Roblox</th>
                <th className="px-4 py-3">VNG Roblox</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                ["Uygulama paketi", "com.roblox.client", "Farklı VNG paketi"],
                ["Gereken Delta derlemesi", "Standart APK", "VNG uyumlu APK"],
                ["Hesap türü", "Küresel Roblox hesabı", "VNG bağlantılı hesap"],
                ["Anahtar sistemi", "Aynı (24 saatlik)", "Aynı (24 saatlik)"],
                ["Yasaklanma riski", "Aynı", "Aynı"],
                ["Script hub", "Aynı", "Aynı"],
              ].map(([aspect, global, vng]) => (
                <tr key={aspect}>
                  <td className="px-4 py-3 font-semibold text-white">{aspect}</td>
                  <td className="px-4 py-3">{global}</td>
                  <td className="px-4 py-3">{vng}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Install note */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-4 font-display text-2xl font-bold text-white">
          VNG Roblox için Delta Executor Kurulumu
        </h2>
        <div className="space-y-3 text-white/70 leading-relaxed">
          <p>
            Kurulum süreci küresel derlemeyle aynıdır — APK&apos;yı yandan yükleyin, gerekli izinleri
            verin ve anahtar akışını tamamlayın. Tek fark hangi APK dosyasını kurduğunuzdur.
            Bu adımları izleyin:
          </p>
          <ol className="space-y-3 mt-4">
            {[
              "deltaroblox.tr adresinden Delta Executor APK'yı indirin. İndirdiğiniz derleme için VNG uyumluluğunu doğrulamak üzere sürüm notlarını kontrol edin.",
              "Android ayarlarında tarayıcınız veya dosya yöneticiniz için 'Bilinmeyen uygulamaları yükle' seçeneğini etkinleştirin.",
              "APK'yı kurun ve istendiğinde depolama ve kaplama izinlerini verin.",
              "Anahtar sistemini tamamlayın. Anahtar akışı VNG ve küresel derlemeler arasında aynıdır.",
              "VNG Roblox'u açın (küresel Roblox değil), bir oyuna katılın, ardından Delta'ya geçin ve Bağlan'a dokunun.",
            ].map((step, i) => (
              <li key={i} className="flex gap-3 rounded-2xl border border-white/10 bg-card p-4 text-sm">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-pink text-xs font-bold text-black">
                  {i + 1}
                </span>
                <span className="text-white/65">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Warning */}
      <div className="container mx-auto max-w-3xl px-4 pt-6">
        <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/5 p-5">
          <h3 className="font-display font-bold text-yellow-300 mb-2">Sahte VNG Delta APK&apos;larına dikkat edin</h3>
          <p className="text-sm text-white/65">
            Vietnamca Telegram kanalları ve yerel dosya paylaşım siteleri &ldquo;Delta VNG&rdquo; etiketli
            değiştirilmiş APK&apos;lar dağıtmaktadır. Bunların pek çoğu VNG ödeme kimlik bilgilerini
            hedef alan çerez çalıcı veya reklam yazılımı içerir. Yalnızca{" "}
            <strong className="text-white">deltaroblox.tr</strong>&apos;den indirin.
          </p>
        </div>
      </div>

      {/* FAQ */}
      <div className="container mx-auto max-w-3xl px-4 pb-14 pt-4">
        <FaqSection title="VNG SSS" items={faqItems} />
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/download-delta-roblox" className="font-semibold text-pink hover:underline">
            ← İndirme rehberi
          </Link>
          <Link href="/how-to-use-delta-roblox" className="font-semibold text-pink hover:underline">
            Nasıl kullanılır →
          </Link>
          <Link href="/troubleshooting-delta-roblox" className="font-semibold text-pink hover:underline">
            Sorun giderme →
          </Link>
        </div>
      </div>
    </>
  );
}
