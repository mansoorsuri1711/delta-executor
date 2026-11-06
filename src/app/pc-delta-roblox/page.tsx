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
  ANDROID_APK_URL,
} from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Delta Executor PC Sürümü — Emülatör Rehberi ve Sahte EXE Uyarısı (Kasım 2026)`,
  description:
    "Windows veya Mac için resmi Delta Executor var mı? Gerçek durum, BlueStacks/LDPlayer aracılığıyla emülatör yolu, sistem gereksinimleri, emülatör ne zaman kullanılır ve sahte EXE tehlikeleri. Kasım 2026.",
  alternates: { canonical: `${SITE_ORIGIN}/pc-delta-roblox` },
  openGraph: {
    title: `Delta Executor PC — ${SITE_NAME}`,
    description:
      "Dürüst rehber: PC executor durumu, emülatör yolu, sistem gereksinimleri ve sahte EXE riskleri.",
    url: `${SITE_ORIGIN}/pc-delta-roblox`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Delta Executor PC rehberi" }],
  },
};

const faqItems = [
  {
    question: "Windows için resmi Delta Executor var mı?",
    answer:
      "Kasım 2026 itibarıyla Delta Executor öncelikle Android'i (ve yandan yükleme yoluyla iOS'u) hedefleyen bir mobil executor'dır. Delta Executor ekibinden kamuya doğrulanmış resmi bir Windows PC derlemesi yoktur. Aksini iddia eden herhangi bir siteye şüpheyle yaklaşın.",
  },
  {
    question: "Delta Executor'ı emülatör aracılığıyla PC'de çalıştırabilir miyim?",
    answer:
      "Bazı kullanıcılar Delta Executor'ı LDPlayer veya BlueStacks gibi Android emülatörleri aracılığıyla çalıştırır. Bu işe yarasa da performans değişkendir ve Roblox oyunlarındaki bazı hile karşıtı katmanlar emülatör ortamlarını daha agresif biçimde algılar. Emülatör kullanımını resmi olarak desteklemiyoruz.",
  },
  {
    question: "PC executor EXE dosyaları neden bu kadar tehlikeli?",
    answer:
      "Roblox executor'ı olduğunu iddia eden imzasız EXE dosyaları, en yaygın kötü amaçlı yazılım dağıtım vektörlerinden biridir. Genellikle RAT (Uzaktan Erişim Truva Atı), kripto çalıcı veya Robux ve kripto cüzdanlarını hedef alan çerez kayıt cihazları içerirler. VirusTotal'da her zaman tarayın ve yalnızca tamamen güvendiğiniz kaynaklardan executor çalıştırın.",
  },
  {
    question: "PC için en güvenli Roblox executor hangisidir?",
    answer:
      "Fluxus ve Solara gibi tanınmış PC executor'ları alternatiflerdir. Her birini bağımsız olarak araştırın. Delta Roblox, mobil (Android/iOS) deneyimine odaklanır ve belirli PC araçlarını onaylamaz.",
  },
  {
    question: "Delta resmi PC sürümü yayınlayacak mı?",
    answer:
      "Toplulukta Windows derlemesi hakkında spekülasyon yapılmış olsa da Kasım 2026 itibarıyla onaylanmış bir yayın tarihi yoktur. Duyurular için blogumuzu veya resmi sosyal kanalları takip edin.",
  },
  {
    question: "BlueStacks aracılığıyla Delta çalıştırmak için sistem gereksinimleri nelerdir?",
    answer:
      "BlueStacks, Windows 10/11 veya macOS 10.14+, sanallaştırma desteği olan bir Intel/AMD işlemci, en az 8 GB RAM (16 GB önerilir) ve DirectX 11 uyumlu bir GPU gerektirir. Mac'te BlueStacks yalnızca resmi olarak Intel tabanlı modelleri destekler.",
  },
  {
    question: "Gerçek Android cihaz yerine ne zaman emülatör kullanmalıyım?",
    answer:
      "Yalnızca bir PC'niz varsa ve Android cihazınız yoksa, scriptleri daha büyük bir ekranda test etmek istiyorsanız veya ana Android cihazınıza dokunmak istemiyorsanız emülatör kullanın. Roblox'un hile karşıtı sistemi tarafından emülatör tespitinin gerçek cihazlara kıyasla daha yaygın olduğunu unutmayın.",
  },
];

const emulatorSteps = [
  {
    title: "LDPlayer 9 veya BlueStacks 5 kurun",
    body: "Her ikisi de Delta'nın minimum gereksinimini karşılayan Android 9+'yı destekler. LDPlayer 9 genellikle sistem kaynaklarını daha az kullanır. BlueStacks 5 daha geniş donanım uyumluluğuna sahiptir.",
  },
  {
    title: "ARM çeviri katmanını etkinleştirin",
    body: "Delta Executor ARM için derlenmiştir. LDPlayer'da Ayarlar → Diğer ayarlar → Root modu AÇIK seçeneğine gidin, ardından CPU'yu ARM olarak ayarlayın. BlueStacks varsayılan olarak ARM çevirisini etkinleştirir. Bu adım olmadan Delta kurulmayabilir veya anında çökebilir.",
  },
  {
    title: "Emülatörün içinde Play Store'dan Roblox kurun",
    body: "İkincil bir Google hesabıyla Google Play'e giriş yapın ve Roblox'u kurun. İkincil bir Roblox hesabıyla giriş yapın — asla emülatör ortamında asıl hesabınızı kullanmayın.",
  },
  {
    title: "Delta APK'yı yandan yükleyin",
    body: `PC'nizdeki deltaroblox.tr adresinden Delta Executor ${APP_VERSION} APK'sını indirin. Emülatörün 'APK Yükle' özelliğini (genellikle yan araç çubuğundaki bir düğme) kullanarak APK'yı PC'nizden yükleyin. Emülatör bunu normal bir Android kurulumu olarak işler.`,
  },
  {
    title: "Anahtarı tamamlayın ve normalde bağlanın",
    body: "Anahtar sistemini tamamlamak için emülatör tarayıcısını açın. Ardından emülatörün içinde Roblox'u açın, bir oyuna katılın, Delta'ya geçin ve Bağlan'a dokunun. Emülatörler içinde enjeksiyon, yerel Android donanımından daha az kararlı olabilir.",
  },
];

export default function PcVersionPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Ana Sayfa", href: "/" }, { label: "PC Sürümü" }]}
      />

      {/* Hero */}
      <div className="container mx-auto max-w-6xl px-4 pb-4 pt-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          <div className="flex-1">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-yellow-400/80">
              ⚠ Herhangi bir EXE indirmeden önce okuyun
            </p>
            <h1 className="font-display text-4xl font-bold text-white md:text-5xl">
              Delta Executor — PC Sürümü Rehberi
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/65">
              PC'de Delta Executor mu arıyorsunuz? İşte{" "}
              <strong className="text-white">Kasım 2026</strong> itibarıyla gerçekte ne var, Android
              emülatörü aracılığıyla Delta'yı PC'de nasıl çalıştırabileceğiniz ve Delta olduğunu iddia eden
              resmi olmayan EXE dosyalarına neden çok dikkat etmeniz gerektiği.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <CtaButton href={ANDROID_APK_URL} icon="download">
                Android APK&apos;yı tercih ediyorum
              </CtaButton>
              <Link href="/ios-delta-roblox" className="font-semibold text-pink hover:underline self-center">
                iOS rehberi →
              </Link>
            </div>
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

      {/* Warning box */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/5 p-6">
          <h2 className="mb-3 font-display text-xl font-bold text-yellow-300">
            ⚠ Uyarı: Sahte Delta Executor EXE dosyaları dolaşımda
          </h2>
          <p className="text-sm leading-relaxed text-white/70">
            Birden fazla site ve YouTube kanalı &ldquo;Delta Executor PC&rdquo; veya &ldquo;Delta X PC&rdquo; etiketli
            EXE dosyaları dağıtmaktadır. Bunların pek çoğunun kötü amaçlı yazılım olduğu doğrulanmıştır —
            bazıları şifre çalıcı içerir, bazıları Roblox oturumlarını ele geçiren tarayıcı uzantıları
            yerleştirir, diğerleri sessizce kripto madenciliği yapar.{" "}
            <strong className="text-white">Biz EXE dağıtmıyoruz.</strong>{" "}
            Üçüncü taraf bir siteden Windows için Delta Executor olduğunu iddia eden herhangi bir dosya bizden değildir.
          </p>
          <ul className="mt-4 space-y-1.5 text-sm text-white/60">
            <li className="flex gap-2"><span className="text-red-400">✗</span> Discord sunucularından veya YouTube açıklamalarından gelen imzasız EXE asla çalıştırmayın.</li>
            <li className="flex gap-2"><span className="text-red-400">✗</span> &ldquo;Çalışması için&rdquo; Windows Defender&apos;ı asla devre dışı bırakmayın — bu kötü amaçlı yazılımın konuşmasıdır.</li>
            <li className="flex gap-2"><span className="text-red-400">✗</span> Roblox girişinizi PC &ldquo;executor giriş ekranına&rdquo; asla girmeyin — gerçek executor&apos;lar şifrenize ihtiyaç duymaz.</li>
          </ul>
        </div>
      </div>

      {/* Current status */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-4 font-display text-2xl font-bold text-white">
          Mevcut PC Durumu ({APP_VERSION}, Kasım 2026)
        </h2>
        <div className="space-y-4 text-white/70 leading-relaxed">
          <p>
            Delta Executor, Android&apos;in çalışma zamanı ortamını hedefleyen ve{" "}
            <strong className="text-white">mobil öncelikli bir executor&apos;dır</strong>.
            Temel kod tabanı ARM mimarisini hedefler. Bunu Windows x64&apos;e taşımak önemsiz değildir
            ve bu yazı itibarıyla Delta ekibi resmi bir Windows derlemesi yayınlamamıştır.
          </p>
          <p>
            PC&apos;de Roblox oynuyorsanız ve script çalıştırması istiyorsanız ayrı bir PC executor&apos;a
            ihtiyacınız olacaktır. Fluxus ve Solara toplulukta bilinen seçeneklerdir; ancak executor
            ortamı hızla değiştiğinden mevcut durumlarını kendiniz araştırmanızı tavsiye ederiz.
            Belirli bir PC executor&apos;ı onaylamıyoruz.
          </p>
          <p>
            Delta&apos;nın en güvenilir kullanımı Android&apos;de kalmaktadır. Asıl hesabınızı riske
            atmadan script test etmek istiyorsanız ikincil bir Roblox hesabıyla Android&apos;de
            oynamayı düşünün.
          </p>
        </div>
      </div>

      {/* When to use emulator */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-4 font-display text-2xl font-bold text-white">
          Emülatör kullanmak ne zaman mantıklıdır?
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-green-400/20 bg-green-400/5 p-5">
            <h3 className="font-display font-semibold text-green-400 mb-2">İyi kullanım senaryoları</h3>
            <ul className="space-y-1.5 text-sm text-white/65">
              <li>Yalnızca PC&apos;niz var ve Android cihazınız yok</li>
              <li>Daha büyük ekranda script test etme/geliştirme</li>
              <li>Android cihazınıza dokunmak istemiyorsunuz</li>
              <li>Telefonunuzda çalıştırmadan önce scriptleri denemek</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-red-400/20 bg-red-400/5 p-5">
            <h3 className="font-display font-semibold text-red-400 mb-2">Dezavantajlar</h3>
            <ul className="space-y-1.5 text-sm text-white/65">
              <li>Emülatör donanım imzaları Roblox tarafından daha kolay tespit edilir</li>
              <li>Enjeksiyon kararlılığı yerel Android&apos;den düşüktür</li>
              <li>Önemli miktarda PC RAM gerektirir (8 GB+ önerilir)</li>
              <li>ARM çeviri ek yükü performans sorunlarına neden olabilir</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Emulator section */}
      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-4 font-display text-2xl font-bold text-white">
          Android Emülatörü Aracılığıyla Delta Kullanımı
        </h2>
        <p className="mb-4 text-white/70 leading-relaxed">
          Masaüstünüzde Delta Executor istiyorsanız en yakın seçenek bir Android emülatörüdür.
          İşte kaba bir genel bakış — başarı oranlarının değiştiğini ve emülatör kurulumları için
          destek sunamayacağımızı unutmayın:
        </p>
        <ol className="space-y-3">
          {emulatorSteps.map((step, i) => (
            <li key={i} className="flex gap-4 rounded-2xl border border-white/10 bg-card p-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-pink font-display text-sm font-bold text-black">
                {i + 1}
              </span>
              <div>
                <p className="font-semibold text-white">{step.title}</p>
                <p className="mt-0.5 text-sm text-white/55">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* Emulator system requirements */}
      <div className="container mx-auto max-w-3xl px-4 pt-8">
        <h2 className="mb-4 font-display text-xl font-bold text-white">Emülatör Sistem Gereksinimleri</h2>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-sm text-white/70">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.04] text-left text-xs uppercase tracking-wider text-white/40">
                <th className="px-4 py-3">Bileşen</th>
                <th className="px-4 py-3">Minimum</th>
                <th className="px-4 py-3">Önerilen</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                ["İşletim sistemi", "Windows 10 64-bit", "Windows 11 64-bit"],
                ["İşlemci", "Intel/AMD (sanallaştırma etkin)", "Intel Core i5 8. nesil veya daha yeni"],
                ["RAM", "8 GB", "16 GB"],
                ["GPU", "DirectX 11 uyumlu", "Özel GPU (NVIDIA/AMD)"],
                ["Depolama", "10 GB boş", "20 GB+ SSD"],
              ].map(([comp, min, rec]) => (
                <tr key={comp}>
                  <td className="px-4 py-3 font-semibold text-white/80">{comp}</td>
                  <td className="px-4 py-3">{min}</td>
                  <td className="px-4 py-3 text-pink">{rec}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mac note */}
      <div className="container mx-auto max-w-3xl px-4 pt-6">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm text-white/65">
          <strong className="text-white">Mac mı kullanıyorsunuz?</strong> Intel Mac&apos;te BlueStacks,
          Apple Silicon sınırlamaları ve iPhone Yansıtma&apos;yı alternatif olarak ele alan özel{" "}
          <Link href="/mac-delta-roblox" className="text-pink hover:underline">Mac rehberimize</Link>{" "}
          bakın.
        </div>
      </div>

      {/* FAQ */}
      <div className="container mx-auto max-w-3xl px-4 pb-14">
        <FaqSection title="PC Sürümü SSS" items={faqItems} />
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/download-delta-roblox" className="font-semibold text-pink hover:underline">
            ← Android indirme
          </Link>
          <Link href="/ios-delta-roblox" className="font-semibold text-pink hover:underline">
            iOS rehberi →
          </Link>
          <Link href="/mac-delta-roblox" className="font-semibold text-pink hover:underline">
            Mac rehberi →
          </Link>
          <Link href="/blog/is-delta-executor-safe" className="font-semibold text-pink hover:underline">
            Delta Executor güvenli mi? →
          </Link>
        </div>
      </div>
    </>
  );
}
