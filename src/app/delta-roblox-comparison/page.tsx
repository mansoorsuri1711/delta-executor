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
  title: `Delta Executor ve Diğer Roblox Executor'lar — Karşılaştırma Tablosu (${APP_VERSION})`,
  description:
    "Delta Executor ile diğer popüler Roblox executor'larının dürüst karşılaştırması: mobil destek, anahtar sistemi, script hub, güncelleme hızı ve ban riski dürüstlüğü. Sahte 'tespit edilemez' iddiası yok. Kasım 2026.",
  alternates: { canonical: `${SITE_ORIGIN}/delta-roblox-comparison` },
  openGraph: {
    title: `Delta Executor Karşılaştırması — ${SITE_NAME}`,
    description: `Delta Executor ve alternatifler — ${APP_VERSION}, ${STYLES_UPDATED} için dürüst özellik karşılaştırması.`,
    url: `${SITE_ORIGIN}/delta-roblox-comparison`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Delta Executor karşılaştırması" }],
  },
};

const comparisonRows = [
  {
    feature: "Birincil platform",
    delta: "Android ve iOS",
    arceus: "Android",
    hydrogen: "iOS (durduruldu)",
    fluxus: "PC (Windows)",
    solara: "PC (Windows)",
  },
  {
    feature: "Ücretsiz kullanım",
    delta: "✓ Ücretsiz",
    arceus: "✓ Ücretsiz",
    hydrogen: "Ücretsizdi",
    fluxus: "✓ Ücretsiz",
    solara: "✓ Ücretsiz",
  },
  {
    feature: "Anahtar sistemi",
    delta: "Evet (24 saatlik)",
    arceus: "Evet (24 saatlik)",
    hydrogen: "Anahtarsızdı",
    fluxus: "Evet",
    solara: "Değişir",
  },
  {
    feature: "Yerleşik script hub",
    delta: "✓ Evet",
    arceus: "✓ Evet",
    hydrogen: "Sınırlı",
    fluxus: "✓ Evet",
    solara: "✓ Evet",
  },
  {
    feature: "Root gerektirmez (Android)",
    delta: "✓ Root yok",
    arceus: "✓ Root yok",
    hydrogen: "N/A",
    fluxus: "N/A",
    solara: "N/A",
  },
  {
    feature: "iOS desteği",
    delta: "✓ AltStore / TrollStore",
    arceus: "✗ Yalnızca Android",
    hydrogen: "Birincildi",
    fluxus: "✗ Yalnızca PC",
    solara: "✗ Yalnızca PC",
  },
  {
    feature: "Roblox yaması sonrası güncelleme hızı",
    delta: "24–72 saat tipik",
    arceus: "24–72 saat tipik",
    hydrogen: "N/A (durduruldu)",
    fluxus: "Değişken",
    solara: "Değişken",
  },
  {
    feature: "Ban riski dürüstlüğü",
    delta: "Açıkça belirtildi",
    arceus: "Değişir",
    hydrogen: "Belirtiliyordu",
    fluxus: "Kısmen belirtildi",
    solara: "Değişir",
  },
  {
    feature: "'Tespit edilemez' iddiası",
    delta: "✗ Hiçbir zaman iddia edilmedi",
    arceus: "Bazen iddia ediliyor",
    hydrogen: "İddia ediliyordu",
    fluxus: "Bazen iddia ediliyor",
    solara: "Bazen iddia ediliyor",
  },
  {
    feature: "VNG (Vietnam) istemci desteği",
    delta: "✓ Desteklendi",
    arceus: "Kısmi",
    hydrogen: "N/A",
    fluxus: "N/A",
    solara: "N/A",
  },
];

const prosAndCons = {
  pros: [
    "Gerçek çapraz platform mobil executor — hem Android hem iOS'u doğal olarak destekleyen tek büyük seçenek.",
    `Düzenli güncellemeler: ${APP_VERSION}, Kasım 2026 Roblox motor yamasından 48 saat içinde yayınlandı.`,
    "Android'de root gerektirmez — herhangi bir üreticinin standart cihazlarında çalışır.",
    "Yerleşik script hub ile düzenlenmiş, incelenmiş scriptler — kötü amaçlı harici scriptlere maruz kalmayı azaltır.",
    "Ban riski konusunda dürüst — hiçbir executor 'tespit edilemez' olmadığı için bu iddiada bulunmuyoruz.",
    "Küresel Roblox'un yanı sıra VNG Roblox (Vietnam) istemci desteği.",
    "Ücretsiz anahtar sistemi — script çalıştırmak için ücretli katman gerekmez.",
  ],
  cons: [
    "Anahtar sistemi, sık kullananlar için her 24 saatte bir reklam kontrol noktası tamamlamayı gerektirir.",
    "Yerel masaüstü (Windows/Mac) sürümü yok — PC kullanıcılarının daha az kararlı olan emülatöre ihtiyacı var.",
    "Delta güncellemesi yayınlanana kadar büyük Roblox yamalarından sonra enjeksiyon geçici olarak başarısız olabilir.",
    "iOS yandan yüklemesi AltStore veya TrollStore kurulumu gerektirir — doğrudan kurulum kadar basit değil.",
    "Tüm executor'lar gibi Roblox ToS'unu ihlal eder — ne kadar dikkatli script çalıştırırsanız çalıştırın ban riski gerçektir.",
  ],
};

const faqItems = [
  {
    question: "Delta Executor, Arceus X'ten daha mı iyi?",
    answer:
      "Her ikisi de benzer özellik seti ve güncelleme döngüsüne sahip güçlü Android executor'larıdır. Delta'nın Arceus X'in sunmadığı iOS desteğinde önemli bir avantajı var. Script hub kalitesi karşılaştırılabilir. Seçim genellikle mevcut Roblox sürümü için hangisinin daha hızlı güncellendiğine bağlıdır.",
  },
  {
    question: "Delta Executor 'tespit edilemez' mi?",
    answer:
      "Hiçbir executor gerçek anlamda tespit edilemez değildir ve biz bu iddiada bulunmuyoruz. Roblox'un hile karşıtı sistemi sunucu taraflıdır ve sürekli güncellenmektedir. Kalabalık oyunlarda belirgin exploit'ler (uçma, hız hileleri) kullanmak tespit olasılığını önemli ölçüde artırır. Pasif otomatik çiftlik gibi daha az görünür scriptler daha az risk taşır.",
  },
  {
    question: "iOS için en iyi executor hangisi?",
    answer:
      "Delta Executor, AltStore ve TrollStore yandan yüklemesi aracılığıyla gerçek iOS desteğine sahip sayılı executor'lardan biridir. Hydrogen popüler bir seçenekti ancak durduruldu. Yalnızca iOS kullananlar için Delta şu an en aktif şekilde geliştirilen seçenektir.",
  },
  {
    question: "Neden 'en iyi executor' yok — bazıları bunu iddia etmiyor mu?",
    answer:
      "Tüm executor'lar Roblox güncellendiğinde bozulur. 'En iyi', en son Roblox yamasından sonra en hızlı güncellenen demektir. Hiçbir executor'ın kalıcı bir teknik avantajı yoktur — bu sürekli devam eden bir kedi-fare oyunudur. Oynadığınız platforma ve arkasındaki ekibin geçmişine göre seçin.",
  },
  {
    question: "Executor'lar arasında geçiş yapabilir miyim?",
    answer:
      "Evet. Kilitlenme yoktur — birden fazla executor kurabilir ve mevcut Roblox sürümü için hangisi başarıyla enjekte ettiyse onu kullanabilirsiniz. Cihaz depolama alanına kaydedilen scriptleriniz de executor'lar arasında taşınabilir; bunlar yalnızca .lua metin dosyalarıdır.",
  },
];

export default function ComparisonPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Ana Sayfa", href: "/" }, { label: "Karşılaştırma" }]}
      />

      {/* Hero */}
      <div className="container mx-auto max-w-6xl px-4 pb-4 pt-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          <div className="flex-1">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-pink/80">
              Karşılaştırma · {APP_VERSION} · {STYLES_UPDATED}
            </p>
            <h1 className="font-display text-4xl font-bold text-white md:text-5xl">
              Delta Executor ve Diğer Roblox Executor&apos;lar
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/65">
              Mobil destek, anahtar sistemleri, script hub&apos;lar, güncelleme hızı ve ban riski dürüstlüğünü kapsayan dürüst yan yana karşılaştırma. Burada sahte &ldquo;tespit edilemez&rdquo; iddiası yok.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <CtaButton href={ANDROID_APK_URL} icon="download">
                Delta {APP_VERSION} İndir
              </CtaButton>
              <Link href="/" className="font-semibold text-pink hover:underline self-center">
                Delta özellikleri →
              </Link>
            </div>
            <p className="mt-3 text-xs text-white/35">
              Tüm executor&apos;lar Roblox ToS&apos;unu ihlal eder. Roblox kurallarını atlatmak için herhangi bir executor&apos;ı onaylamıyoruz — kendi riskinizde kullanın.
            </p>
          </div>
          <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-muted md:w-72 lg:w-96">
            <Image
              src={BRAND_FEATURE_2}
              alt="Android üzerinde Delta Executor"
              width={800}
              height={600}
              sizes="(max-width: 768px) 100vw, 384px"
              className="h-auto w-full object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Comparison table */}
      <div className="container mx-auto max-w-5xl px-4 pt-10">
        <h2 className="mb-4 font-display text-2xl font-bold text-white">Özellik karşılaştırma tablosu</h2>
        <p className="mb-6 text-sm text-white/45">
          Hydrogen tarihsel referans için listelenmiştir — 2024&apos;te durduruldu. Diğer tüm veriler Kasım 2026 bilinen durumunu yansıtır.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-sm text-white/70">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.04] text-left text-xs uppercase tracking-wider text-white/40">
                <th className="px-4 py-3">Özellik</th>
                <th className="px-4 py-3 text-pink font-bold">Delta Executor</th>
                <th className="px-4 py-3">Arceus X</th>
                <th className="px-4 py-3">Hydrogen</th>
                <th className="px-4 py-3">Fluxus</th>
                <th className="px-4 py-3">Solara</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {comparisonRows.map((row) => (
                <tr key={row.feature}>
                  <td className="px-4 py-3 font-semibold text-white/80">{row.feature}</td>
                  <td className="px-4 py-3 text-pink font-medium">{row.delta}</td>
                  <td className="px-4 py-3">{row.arceus}</td>
                  <td className="px-4 py-3 text-white/40">{row.hydrogen}</td>
                  <td className="px-4 py-3">{row.fluxus}</td>
                  <td className="px-4 py-3">{row.solara}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-white/30">
          Veriler, kamuya açık topluluk bilgisinden ve doğrudan testlerden alınmıştır. Üçüncü taraf executor özellikleri önceden bildirilmeksizin değişebilir.
        </p>
      </div>

      {/* Pros and Cons */}
      <div className="container mx-auto max-w-5xl px-4 pt-12">
        <h2 className="mb-6 font-display text-2xl font-bold text-white">Delta&apos;nın artıları ve eksileri</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-green-400/20 bg-green-400/5 p-5">
            <h3 className="mb-3 font-display font-bold text-green-400">Artılar</h3>
            <ul className="space-y-2">
              {prosAndCons.pros.map((pro) => (
                <li key={pro} className="flex gap-2 text-sm text-white/70">
                  <span className="mt-0.5 text-green-400 shrink-0">✓</span>
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-red-400/20 bg-red-400/5 p-5">
            <h3 className="mb-3 font-display font-bold text-red-400">Eksiler</h3>
            <ul className="space-y-2">
              {prosAndCons.cons.map((con) => (
                <li key={con} className="flex gap-2 text-sm text-white/70">
                  <span className="mt-0.5 text-red-400 shrink-0">✗</span>
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="container mx-auto max-w-5xl px-4 pb-14 pt-4">
        <FaqSection title="Karşılaştırma SSS" items={faqItems} />
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/download-delta-roblox" className="font-semibold text-pink hover:underline">
            ← Android indirme
          </Link>
          <Link href="/" className="font-semibold text-pink hover:underline">
            Tüm özellikler →
          </Link>
          <Link href="/blog/is-delta-executor-safe" className="font-semibold text-pink hover:underline">
            Güvenlik değerlendirmesi →
          </Link>
        </div>
      </div>
    </>
  );
}
