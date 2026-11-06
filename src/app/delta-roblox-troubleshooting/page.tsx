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
  title: `Delta Executor Sorun Giderme — Enjeksiyon Hatası, Anahtar Sorunları ve Çökmeler (${APP_VERSION})`,
  description:
    "Delta Executor hatalarını düzeltin: enjeksiyon başarısız, anahtar süresi doldu, Hata 280, geçersiz paket, VNG uyumsuzluğu, iOS yerel sorunları, Play Protect, izinler ve çökmeler. Kasım 2026.",
  alternates: { canonical: `${SITE_ORIGIN}/delta-roblox-troubleshooting` },
  openGraph: {
    title: `Delta Executor Sorun Giderme — ${SITE_NAME}`,
    description: `${APP_VERSION}, ${STYLES_UPDATED} sürümündeki her yaygın Delta Executor hatasına çözümler.`,
    url: `${SITE_ORIGIN}/delta-roblox-troubleshooting`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Delta Executor sorun giderme rehberi" }],
  },
};

const issues = [
  {
    id: "inject-fail",
    title: "Enjeksiyon Başarısız / Enjeksiyon Hatası",
    cause: "Roblox yüklenmesini tamamlamamış, uyumsuz bir Roblox sürümü yayınlanmış veya çakışan bir uygulama (ekran kaydedici, kaplama) müdahale ediyor.",
    steps: [
      "Bir Roblox oyununun tam içinde olduğunuzdan emin olun — menüde veya lobide değil.",
      "Diğer uygulamaların üzerinde çizen tüm kaplama uygulamalarını (ekran kaydediciler, bildirim yöneticileri) kapatın.",
      "deltaroblox.tr'den Delta Executor'ı en son sürüme güncelleyin.",
      "Hem Roblox hem de Delta Executor'ı tamamen kapatın, ardından Roblox'u başlatın, oyuna katılın, sonra Delta'yı açın ve Bağlan'a dokunun.",
      "Bir Roblox güncellemesinden sonra hata devam ederse Delta yaması için 24–48 saat bekleyin.",
    ],
  },
  {
    id: "key-invalid",
    title: "Anahtar Geçersiz / Anahtar Süresi Doldu",
    cause: "Delta anahtarları 24 saat sonra sona erer. Kısmi kopyalama, yanlış cihaz veya eski executor sürümü de anahtar reddine neden olabilir.",
    steps: [
      "Anahtarınızın süresinin dolmadığını kontrol edin — 24 saatten fazla olduysa yeni bir tane oluşturun.",
      "Tüm anahtar dizesini kopyalayın; kısmi seçimi önlemek için uzun basın → Tümünü Seç yapın.",
      "Anahtarlar cihaza özgüdür: A telefondaki anahtar B telefonda çalışmaz. Kullandığınız cihazda yeni bir anahtar oluşturun.",
      "En son Delta Executor sürümünü çalıştırdığınızdan emin olun. Eski derlemeler kullanımdan kaldırılmış anahtar biçimleri kullanıyor olabilir.",
      "Ağ geçidi ipuçları için tam anahtar sistemi rehberine bakın: /blog/delta-executor-key-system.",
    ],
  },
  {
    id: "scripts-not-running",
    title: "Roblox Güncellemesinden Sonra Scriptler Çalışmıyor",
    cause: "Roblox motorunu düzenli olarak günceller; bu, dahili API adreslerini değiştirebilir. Bu adreslere başvuran scriptler, Delta veya scriptin kendisi güncellenene kadar çalışmaz.",
    steps: [
      "deltaroblox.tr'den Delta Executor'ı en yeni derlemeye güncelleyin — yamalar, büyük Roblox sürümlerinden 24–72 saat sonra yayınlanır.",
      "Belirli scriptin Script Hub'da veya scriptin asıl yazarından güncel bir sürümü olup olmadığını kontrol edin.",
      "Önce basit bir script test edin (örn. print('merhaba')) — executor'ın kendisinin çalıştığını doğrulamak için. Bu çalışırsa sorun scripttedir, Delta'da değil.",
      "Hub'ın yenilenmesini bekleyin — hub scriptleri executor yamaları ile birlikte güncellenir.",
    ],
  },
  {
    id: "play-protect",
    title: "Google Play Protect Kurulumu Engelliyor",
    cause: "Play Protect, yandan yüklenen tüm executor'lar dahil Play Store'dan gelmeyen APK'ları işaretler. Bu genel bir uyarıdır, virüs tespiti değil.",
    steps: [
      "Play Protect uyarı ekranında 'Yine de yükle'ye dokunun — bu, herhangi bir imzasız APK yandan yüklendiğinde görünür.",
      "Play Protect'i kalıcı olarak devre dışı bırakmayın. Belirli bir güvenilir APK için uyarının ötesine geçmek güvenlidir.",
      "Play Protect kurulumdan sonra dosyayı karantinaya alıyorsa Play Protect ayarlarına gidin ve 'Bu uygulamaya izin ver'e dokunun.",
      "Bağımsız doğrulama istiyorsanız yüklemeden önce APK'yı VirusTotal'da tarayın.",
    ],
  },
  {
    id: "permissions",
    title: "İzin Hataları (Depolama / Kaplama)",
    cause: "Delta Executor, script dosyalarını yüklemek için depolama erişimine ve Roblox ön planda çalışırken kaplamayı görüntülemek için 'diğer uygulamaların üzerinde çiz' iznine ihtiyaç duyar.",
    steps: [
      "Ayarlar → Uygulamalar → Delta Executor → İzinler → Depolama bölümüne gidin ve İzin Ver'e getirin.",
      "Kaplama için: Ayarlar → Uygulamalar → Özel uygulama erişimi → Diğer uygulamaların üzerinde görüntüle → Delta Executor'ı bulun ve etkinleştirin.",
      "Android 13+'da istenirse 'Yalnızca medyaya erişime izin ver'i seçin — tam depolama erişimi gerekmez.",
      "İzinlerin geçerli olması için izinleri verdikten sonra Delta Executor'ı yeniden başlatın.",
    ],
  },
  {
    id: "crash",
    title: "Uygulama Başlatılırken veya Çalıştırma Sırasında Çöküyor",
    cause: "Çökmeler uyumsuz Roblox sürümlerinden, düşük cihaz RAM'inden, bozuk kurulumdan veya çakışan uygulamalardan kaynaklanabilir.",
    steps: [
      "Delta Executor'ın önbelleğini temizleyin: Ayarlar → Uygulamalar → Delta Executor → Depolama → Önbelleği Temizle.",
      "deltaroblox.tr'den temiz bir kopyayı kaldırın ve yeniden yükleyin — eski APK'yı yeniden kullanmayın.",
      "RAM boşaltmak için başlatmadan önce arka plan uygulamalarını kapatın. Delta, 2 GB+ boş bellekle en iyi çalışır.",
      "Script çalıştırma sırasında çöküyorsa scriptin kendisi bellek yetersizliği hatasına neden oluyor olabilir. Daha küçük bir script deneyin.",
      "Delta Executor için pil optimizasyonunu devre dışı bırakın: Ayarlar → Pil → Pil optimizasyonu → Tüm uygulamalar → Delta → Optimize etme.",
    ],
  },
  {
    id: "error-280",
    title: "Delta Executor Hata Kodu 280",
    cause:
      "Hata 280 genellikle kurulu APK bozulduğunda, eksik olduğunda veya Android mimarinizle uyumsuz olduğunda (ARM'a karşı x86 emülatör) görünür. Kesilen indirmelerden sonra da ortaya çıkar.",
    steps: [
      "İndirilenler klasöründen eksik APK'yı silin ve mevcut Delta derlemesinin yeni bir kopyasını alın.",
      "Yeniden yüklemeden önce mevcut Delta paketlerini kaldırın (Ayarlar → Uygulamalar → Kaldır).",
      "Desteklenen bir ARM64 Android cihazına kurulum yaptığınızı doğrulayın — başka bir mimari için değiştirilmiş APK kullanmayın.",
      "Agresif antivirüs / Play Protect karantinasını geçici olarak duraklatın, kurun, ardından taramayı yeniden etkinleştirin.",
      "Emülatördeyseniz 64-bit Android görüntüsü kullanın ve tam paket için yeterli depolama ayırın.",
    ],
  },
  {
    id: "invalid-package",
    title: "Geçersiz Paket / Uygulama Kurulamadı",
    cause:
      "APK kesilmiş, yanlış imzalanmış, eski imzayla çakışmış veya APK olmayan bir dosyadan yeniden adlandırılmışsa Android paketi reddeder.",
    steps: [
      "ZIP, HTML veya EXE dosyasını .apk olarak yeniden adlandırmayın — gerçek bir APK yeniden indirin.",
      "Android paket çakışması bildiriyorsa önce eski Delta derlemelerini kaldırın.",
      "APK'yı açmak için kullandığınız tarayıcı/dosya yöneticisi için bilinmeyen uygulamaları yükle seçeneğini etkinleştirin.",
      "Depolama alanı boşaltın; cihaz paketi açamazsa kurulum başarısız olur.",
      "\"Anahtarsız modlu\" paketlerden kaçının — bunlar geçersiz veya kötü amaçlı imzaların yaygın kaynağıdır.",
    ],
  },
  {
    id: "vng-error",
    title: "Delta Executor VNG Hatası",
    cause:
      "Küresel Delta APK, Vietnam Roblox (VNG) istemcisine temiz bağlanamaz. Küresel ve VNG derlemelerini karıştırmak, bağlanma / sürüm uyumsuzluğu hatalarına yol açar.",
    steps: [
      "Roblox uygulamanızın VNG Vietnam derlemesi mi yoksa küresel derleme mi olduğunu doğrulayın.",
      "Vietnam istemcisinde oynuyorken özel VNG Delta paketini kullanın — /delta-roblox-vng sayfasına bakın.",
      "Roblox istemciniziyle hangisinin eşleştiğini bilmiyorsanız küresel ve VNG Delta değişkenlerini yan yana yüklemeyin.",
      "Büyük istemci yamalarından sonra hem Roblox VNG hem de Delta VNG'yi güncelleyin.",
      "Paketler değiştirildikten sonra hâlâ bağlanılamıyorsa her iki uygulamanın önbelleğini temizleyin.",
    ],
  },
  {
    id: "ios-chinese-error",
    title: "Delta iOS Çince / Yerel Hata",
    cause:
      "Bazı iOS derlemeleri, sertifika araçları veya yansıtılmış Asya CDN derlemeleri kullanıldığında kısa süreliğine Çince arayüz dizileri veya yerel ayarla ilgili kurulum iletişim kutuları gösterir. Bu genellikle ayrı bir ürün değil, yerelleştirme paketleme tuhaflığıdır.",
    steps: [
      "Kurulumu tamamlayın, ardından Delta'nın içinde Ayarlar'ı açın ve varsa dili Türkçe veya İngilizce'ye geçirin.",
      "Rastgele Telegram IPA yansımaları yerine güvendiğiniz iOS rehber yolundan (/delta-roblox-ios) yeniden yükleyin.",
      "Roblox iOS yamalarından sonra en yeni IPA'ya güncelleyin — yerel tuhaflıklar genellikle yeni derlemelerle düzelir.",
      "Cihaz dili Çince ise işletim sistemi yerelini uygulama dizelerinden ayırt etmek için İngilizce sistem diliyle test edin.",
      "İlgisiz yerelleştirme paketleri içeren \"kırık Premium\" IPA'lardan kaçının.",
    ],
  },
  {
    id: "not-compatible",
    title: "Uygulama Telefonumla Uyumlu Değil",
    cause:
      "Android sürümünüz desteklenen tabanın altında, CPU ABI desteklenmiyor veya başka bir platform için tasarlanmış bir derleme indirdiniz (örneğin Android için yeniden adlandırılmış bir PC EXE).",
    steps: [
      "Android sürümünü kontrol edin: Delta modern Android'i hedefler (mevcut derlemeler için genellikle 8+; eski 5.0 iddiaları en yeni APK için geçerli olmayabilir).",
      "64-bit ARM cihazları tercih edin; çok eski yalnızca 32-bit telefonlar başarısız olabilir.",
      "ABI'yi kontrol etmeden yalnızca emülatörler için etiketlenmiş paketleri fiziksel telefonlara yüklemeye zorlamayın.",
      "RAM ve depolama alanı boşaltın, ardından yeniden deneyin — depolama alanı kritik düzeyde düşük olduğunda bazı üreticiler genel bir \"uyumlu değil\" mesajı gösterir.",
      "Resmi olmayan çatalları takip etmeden önce /download-delta-roblox adresindeki sistem gereksinimleri tablosunu okuyun.",
    ],
  },
];

const faqItems = [
  {
    question: "Delta Executor dün çalışıyordu, bugün bozuldu — ne oldu?",
    answer:
      "Roblox, bazen günlük olarak düzenli güncellemeler yayınlar. Herhangi bir güncelleme enjeksiyonu bozabilir veya dahili API'leri değiştirebilir. En yaygın düzeltme, deltaroblox.tr'den Delta Executor'ı en son sürüme güncellemek ve bir yama henüz yayınlanmadıysa 48 saate kadar beklemektir.",
  },
  {
    question: "Anahtar sayfası neden anahtar vermeden döngüde kalıyor?",
    answer:
      "Muhtemelen Devam Et / Erişimi Al düğmesi yerine bir reklama tıkladınız. Linkvertise ve Loot-Link'teki reklam ağları kasıtlı olarak indirme düğmelerini taklit eder. Büyük renkli indirme afişlerine değil, 'Reklamlarla Ücretsiz Erişim' veya 'Devam Et' etiketli küçük metin bağlantısını arayın. Telefon tarayıcısında (uygulama içi tarayıcıda değil) tamamlamak daha güvenilirdir.",
  },
  {
    question: "Delta Executor kurulu ama uygulama çekmecemde görünmüyor",
    answer:
      "Bazı başlatıcılar, yeni kurulan APK'ları cihazı yeniden başlatana kadar gizler. Kurulumdan sonra Android cihazınızı yeniden başlatın. Hâlâ görünmüyorsa APK'yı kaldırın ve yeniden yükleyin.",
  },
  {
    question: "Kurulu Delta Executor sürümünü kontrol etmenin bir yolu var mı?",
    answer:
      "Delta Executor'ı açın, Ayarlar'a (dişli simgesi) gidin ve ayarlar ekranının altındaki sürüm numarasını arayın. deltaroblox.tr'de listelenen mevcut sürümle karşılaştırın.",
  },
  {
    question: "Delta neden 'Roblox algılanamadı' diyor?",
    answer:
      "Delta çalışan bir Roblox sürecini bulamıyor. Roblox'un açık olduğundan ve bir oyunun içinde olduğunuzdan (yalnızca uygulama ana ekranında değil) emin olun. Hata devam ederse Delta'ya gerekli izinleri verdiğinizi kontrol edin — bazı Android sürümleri açık arka plan izni olmadan süreç tespitini kısıtlar.",
  },
  {
    question: "iOS sürümüm enjeksiyondan hemen sonra çöküyor",
    answer:
      "Roblox güncellemesinden sonra iOS enjeksiyon hataları yaygındır. Yeni Roblox iOS derlemesini hedefleyen bir Delta güncellemesini bekleyin. Bu arada, ekip tarafından sabitlenen uyumlu bir .ipa sürümü için Delta topluluğunu (Discord veya sosyal medya) kontrol edin.",
  },
  {
    question: "Delta Executor hatalarına genellikle ne sebep olur?",
    answer:
      "Aynı temel nedenler tüm rakip hata rehberlerinde ortaya çıkar: eski Delta derlemeleri, Roblox sürüm uyumsuzluğu, bozuk kurulumlar, dolu önbellekler, anahtar/bağlanma sırasında zayıf internet, eksik izinler ve APK'yı karantinaya alan güvenlik yazılımı. Nadir hata kodlarını takip etmeden önce kontrol listesini sırayla çalıştırın.",
  },
  {
    question: "Hata Kodu 280'i nasıl düzeltirim?",
    answer:
      "Hata 280'i bozuk veya uyumsuz bir paket olarak değerlendirin. APK'yı silin, Delta'yı kaldırın, yeni bir mevcut derleme indirin ve desteklenen bir ARM64 Android cihazına veya uygun bir 64-bit emülatör görüntüsüne kurun. Yukarıdaki Hata Kodu 280 bölümüne bakın.",
  },
];

export default function TroubleshootingPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Ana Sayfa", href: "/" }, { label: "Sorun Giderme" }]}
      />

      {/* Hero */}
      <div className="container mx-auto max-w-6xl px-4 pb-4 pt-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          <div className="flex-1">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-pink/80">
              Sorun Giderme · {APP_VERSION} · {STYLES_UPDATED}
            </p>
            <h1 className="font-display text-4xl font-bold text-white md:text-5xl">
              Delta Executor Sorun Giderme
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/65">
              En yaygın Delta Executor sorunlarını düzeltin: enjeksiyon hataları, geçersiz anahtarlar, Roblox güncellemelerinden sonra bozulan scriptler, izin hataları ve çökmeler.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <CtaButton href={ANDROID_APK_URL} icon="download">
                Delta {APP_VERSION}&apos;i Yeniden Yükle
              </CtaButton>
              <Link href="/how-to-use-delta-roblox" className="font-semibold text-pink hover:underline self-center">
                Nasıl kullanılır →
              </Link>
            </div>
          </div>
          <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-muted md:w-72 lg:w-96">
            <Image
              src={BRAND_HERO}
              alt="Delta Executor arayüzü"
              width={1200}
              height={675}
              sizes="(max-width: 768px) 100vw, 384px"
              className="h-auto w-full object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Quick jump */}
      <div className="container mx-auto max-w-3xl px-4 pt-8">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/45">Soruna atla</p>
          <div className="flex flex-wrap gap-2">
            {issues.map((issue) => (
              <a
                key={issue.id}
                href={`#${issue.id}`}
                className="rounded-full border border-pink/20 bg-pink/5 px-3 py-1.5 text-xs font-semibold text-pink hover:bg-pink/10"
              >
                {issue.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Issues */}
      <div className="container mx-auto max-w-3xl px-4 pt-8">
        <div className="space-y-8">
          {issues.map((issue) => (
            <section
              key={issue.id}
              id={issue.id}
              className="scroll-mt-24 rounded-2xl border border-white/10 bg-card p-6"
            >
              <h2 className="font-display text-xl font-bold text-white">{issue.title}</h2>
              <p className="mt-2 text-sm text-white/55">
                <strong className="text-white/70">Neden: </strong>{issue.cause}
              </p>
              <ol className="mt-4 space-y-2">
                {issue.steps.map((step, i) => (
                  <li key={i} className="flex gap-3 text-sm text-white/65">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-pink text-[10px] font-bold text-black">
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </section>
          ))}
        </div>
      </div>

      {/* Key link */}
      <div className="container mx-auto max-w-3xl px-4 pt-8">
        <div className="rounded-2xl border border-pink/20 bg-pink/5 p-5">
          <p className="text-sm text-white/70">
            <strong className="text-white">Anahtar sorunları mı?</strong> Anahtar sisteminin kapı kapı ekran görüntüleri ve yaygın hata tablosu içeren ayrı bir ayrıntılı rehberi var.{" "}
            <Link href="/blog/delta-executor-key-system" className="text-pink hover:underline">
              Anahtar sistemi rehberini okuyun →
            </Link>
          </p>
        </div>
      </div>

      {/* FAQ */}
      <div className="container mx-auto max-w-3xl px-4 pb-14 pt-4">
        <FaqSection title="Sorun Giderme SSS" items={faqItems} />
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/download-delta-roblox" className="font-semibold text-pink hover:underline">
            ← İndir
          </Link>
          <Link href="/delta-roblox-ios" className="font-semibold text-pink hover:underline">
            iOS rehberi →
          </Link>
          <Link href="/blog/delta-executor-key-system" className="font-semibold text-pink hover:underline">
            Anahtar rehberi →
          </Link>
        </div>
      </div>
    </>
  );
}
