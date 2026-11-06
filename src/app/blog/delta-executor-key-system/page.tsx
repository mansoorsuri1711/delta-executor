import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import BlogPostSchema from "@/components/BlogPostSchema";
import FaqSection from "@/components/FaqSection";
import CtaButton from "@/components/CtaButton";
import {
  BRAND_FEATURE_2,
  SITE_NAME,
  SITE_ORIGIN,
  APP_VERSION,
  ANDROID_APK_URL,
} from "@/lib/siteConfig";

const SLUG = "delta-executor-key-system";
const DATE = "2026-11-06";
const TITLE = "Delta Executor Anahtarı Nasıl Alınır (Adım Adım, 2026)";
const DESCRIPTION =
  "Delta Executor anahtar sistemi için tam rehber: Linkvertise ve Loot-Link kontrol noktaları, yaygın hatalar ve beş dakikadan kısa sürede tamamlama ipuçları — Kasım 2026 güncellendi.";

export const metadata: Metadata = {
  title: `Delta Executor Anahtar Sistemi Rehberi — Anahtarınızı Nasıl Alırsınız (Kas 2026)`,
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
    question: "Delta Executor anahtarı ne kadar süre geçerli?",
    answer:
      "Anahtarlar oluşturulduğu andan itibaren 24 saat geçerlidir. Süresi dolduktan sonra anahtar sayfasından geçmeniz gerekir. Standart ücretsiz sürüm için bu gereksinimi kaldıran ücretli bir katman yoktur — anahtarlar tüm kullanıcılar için ücretsizdir.",
  },
  {
    question: "Anahtar neden her 24 saatte bir sona eriyor?",
    answer:
      "24 saatlik süre sınırı kasıtlı bir kötüye kullanımı önleme önlemidir. Otomatik botların büyük kalıcı anahtar havuzları oluşturmasını engeller ve çalınan bir anahtarın yeniden kullanılabileceği pencereyi sınırlar. Aynı zamanda her anahtarı belirli bir oturuma bağlayarak toplu script çalıştırma kötüye kullanımını azaltır.",
  },
  {
    question: "Delta iOS Premium günlük anahtar gereksinimini kaldırıyor mu?",
    answer:
      "Evet. Delta iOS Premium, 24 saatlik anahtar kontrol noktasını kalıcı bir oturum jetonuyla değiştiren isteğe bağlı ücretli aboneliktir. Zorunlu değildir — ücretsiz anahtar sistemi script çalıştırma açısından aynı biçimde çalışır. Premium, günlük yenilemeyi zahmetli bulan kullanıcılar için bir kolaylık yükseltmesidir.",
  },
  {
    question: "Anahtarım neden geçersiz görünüyor?",
    answer:
      "Yaygın nedenler: (1) anahtar 24 saat sonra süresi doldu, (2) yalnızca bir kısmını kopyaladınız — tüm baştaki karakterler dahil tüm dizeyi kopyaladığınızdan emin olun, (3) farklı anahtar biçimi kullanan eski bir Delta sürümü çalıştırıyorsunuz.",
  },
  {
    question: "Anahtar sistemini atlayabilir miyim?",
    answer:
      "Mevcut Delta Executor sürümüne yerleşik anahtar sistemini kalıcı olarak atlatmanın meşru bir yöntemi yoktur. 'Anahtarsız Delta' reklamı yapan araçlar genellikle bilinmeyen güvenlikteki değiştirilmiş çatallar veya doğrudan kötü amaçlı yazılımdır. Bunları yüklemeyin.",
  },
  {
    question: "Linkvertise sayfasında çok fazla yanıltıcı düğme var — hangisine tıklayacağım?",
    answer:
      "Linkvertise'de: reklamlar olan büyük indirme düğmelerini değil, küçük 'Reklamlarla Ücretsiz Erişim' veya 'Devam Et' bağlantısını arayın. reCAPTCHA veya kısa bekleme sayacını tamamlayın, ardından anahtarınızı almak için son 'Bağlantıyı al' düğmesine tıklayın.",
  },
  {
    question: "Sahte anahtar üreteci araçlar var mı?",
    answer:
      "Evet. Pek çok site ve uygulama, ağ geçidinden geçmeden anında Delta Executor anahtarı oluşturabileceğini iddia eder. Bunlar çalışmaz — anahtarlar şifreli olarak sunucu tarafında oluşturulur ve cihaz kimliğinize bağlıdır. Çevrimdışı anahtar 'oluşturduğunu' iddia eden herhangi bir araç ya geçersiz dizeler üretiyor ya da veri çalan bir dolandırıcılıktır.",
  },
  {
    question: "Anahtar cihazlar arasında çalışıyor mu?",
    answer:
      "Anahtarlar genellikle cihaz kimliğinize bağlıdır. Bir Android telefonda oluşturulan anahtar farklı bir cihazda çalışmaz. Kullandığınız her cihazda yeni bir anahtar oluşturun.",
  },
  {
    question: "24 saat sonra anahtarımı nasıl yenilerim?",
    answer:
      "Anahtarın süresi dolduğunda Delta Executor'ı açın — yeni anahtar almanızı isteyecektir. 'Anahtar Al'a dokunun, Linkvertise veya Loot-Link akışını yeniden tamamlayın (2–5 dakika sürer), yeni anahtarı kopyalayın ve yapıştırın. Süreç ilk seferle aynıdır.",
  },
  {
    question: "Linkvertise döngüsünde sıkışıyorum ve anahtar sayfasına hiç ulaşamıyorum",
    answer:
      "Uygulama içi tarayıcıları kapatın ve anahtar URL'sini Chrome veya Safari'de açın. VPN/reklam engelleyiciyi geçici olarak devre dışı bırakın, büyük sahte İndir reklamlarını yoksayın ve yalnızca küçük Devam Et / Ücretsiz Erişim kontrolüne dokunun. Sayfa sürekli yeniden yükleniyorsa ağ geçidi etki alanı için site çerezlerini temizleyin ve bir kez daha deneyin.",
  },
  {
    question: "Linkvertise 'Çok Fazla İstek' gösteriyor — ne yapmalıyım?",
    answer:
      "Yenileme veya çok fazla anahtar sekmesi açma nedeniyle hız sınırına çarptınız. 10–15 dakika bekleyin, normal bir mobil bağlantı kullanın (veri merkezi VPN değil) ve tek bir temiz akış tamamlayın. Anahtar Al'ı spam yapmayın.",
  },
  {
    question: "Delta anahtarım neden sonsuza kadar oluşturuluyor?",
    answer:
      "Yavaş ağ geçitleri, tamamlanmamış kontrol noktaları veya zayıf ağ genellikle son anahtar ekranını geciktirir. Her gerekli bekleme/CAPTCHA'yı tamamlayın, akış ortasında uygulama değiştirmekten kaçının ve kararlı bir Wi-Fi bağlantısında yeniden deneyin. Birkaç dakika sonra hâlâ askıda kalırsa Anahtar Al'dan bir kez yeniden başlayın.",
  },
  {
    question: "PC'de Delta anahtarına ihtiyacım var mı?",
    answer:
      "PC-emülatör kurulumlarının çoğu BlueStacks/LDPlayer içinde Android Delta APK'yı çalıştırmaya devam eder, bu nedenle aynı mobil anahtar akışı geçerlidir. Kalıcı anahtarsız Windows EXE iddiaları yüksek risk olarak değerlendirilmeli — /pc-delta-roblox sayfasına bakın ve rastgele EXE yansımalarından kaçının.",
  },
  {
    question: "Linkvertise reklamlarını anahtar atlatma araçlarıyla geçmek güvenli mi?",
    answer:
      "Hayır. 'Linkvertise atlatma' tarayıcı uzantıları ve anahtar botları genellikle oturum verilerini çalar veya kötü amaçlı yazılım iter. Bilinmeyen GitHub yansımalarından atlatma araçları yüklemek yerine resmi kısa kilit açma akışını tamamlayın.",
  },
];

export default function KeySystemPage() {
  return (
    <>
      <BlogPostSchema
        title={TITLE}
        description={DESCRIPTION}
        slug={SLUG}
        datePublished={DATE}
        image={`${SITE_ORIGIN}${BRAND_FEATURE_2}`}
        articleBody={`Delta Executor anahtar sistemi, kullanıcıların 24 saatlik erişim anahtarı alabilmek için kısa bir kontrol noktası akışını tamamlamasını gerektirir. Bu rehber her adımı kapsar.`}
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
              <span className="text-white/80" aria-current="page">Anahtar Sistemi</span>
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
            Anahtar sistemi, yeni Delta Executor kullanıcıları için en büyük sürtünme noktasıdır. Doğru yapıldığında beş dakikadan az sürer — ancak kafa karıştırıcı reklam dolu sayfalar insanları yanıltır. Bu rehber her adımı anlatır.
          </p>
        </header>

        <div className="mb-8 overflow-hidden rounded-2xl border border-white/10 bg-muted">
          <Image
            src={BRAND_FEATURE_2}
            alt="Android üzerinde Delta Executor anahtar ekranı"
            width={1200}
            height={675}
            sizes="(max-width: 768px) 100vw, 768px"
            className="h-auto w-full object-contain"
            priority
          />
        </div>

        <div className="space-y-5 leading-relaxed text-white/75">
          <h2 className="font-display text-2xl font-bold text-white">
            Delta Executor neden anahtar sistemine sahip?
          </h2>
          <p>
            Script executor&apos;lar, scriptler için onları tarayan veya enjeksiyon uç noktalarını stres testine tabi tutan otomatik botlar tarafından sık sık hedef alınır. Linkvertise ve Loot-Link gibi reklam kapısı platformlarına dayanan anahtar sistemi, insan doğrulama katmanı olarak işlev görür. Her anahtar cihaz kimliğinize bağlıdır ve 24 saat sonra sona erer; bu, meşru kullanıcılar için erişimi ücretsiz tutarken otomatik kötüye kullanımı sınırlar.
          </p>
          <p>
            <strong className="text-white">{APP_VERSION} (Kasım 2026)</strong> sürümünde anahtar sistemi zorunludur ve onu kaldıran ücretli bir katman yoktur. &ldquo;Kalıcı anahtarsız Delta&rdquo; reklamı yapan herhangi bir araç şüpheyle karşılanmalıdır.
          </p>

          <h2 className="font-display text-2xl font-bold text-white">
            Adım adım: Delta Executor anahtarınızı almak
          </h2>

          <ol className="space-y-4">
            {[
              {
                title: "Delta Executor'ı açın ve 'Anahtar Al'a dokunun",
                body: "Android cihazınızda Delta Executor'ı başlatın. Ana ekranda script düzenleyicinin altında bir 'Anahtar Al' düğmesi göreceksiniz. Dokunun — bu telefonunuzun tarayıcısını anahtar ağ geçidine açar.",
              },
              {
                title: "Ağ geçidinizi seçin (Linkvertise veya Loot-Link)",
                body: "Delta iki ağ geçidi sağlayıcısını destekler. Her ikisi de ücretsizdir. Loot-Link genellikle daha az agresif yönlendirmeye sahiptir ve çoğu kullanıcı için daha hızlıdır. Linkvertise daha fazla reklam kaplamasına sahiptir ancak güvenilir biçimde çalışır.",
              },
              {
                title: "Birinci kontrol noktasını tamamlayın",
                body: "Linkvertise'de: sahte indirme düğmelerini (bunlar reklamlardır) geçin, 'Reklamlarla Ücretsiz Erişim'i bulun, tıklayın, sayacı bekleyin, reCAPTCHA'yı çözün ve 'Bağlantıyı al'a tıklayın. Loot-Link'te: 'Devam Et'e tıklayın, 8–10 saniye bekleyin, kısa bir görevi tamamlayın ve ilerleyin.",
              },
              {
                title: "İkinci kontrol noktasını tamamlayın (gerekiyorsa)",
                body: "Bazı anahtar akışlarında iki kontrol noktası vardır. Sayfa otomatik olarak ikinci bir ağ geçidine yönlendirir. Aynı süreci tekrarlayın — reklam afişlerine değil Devam Et'e tıklayın ve sayacı bekleyin.",
              },
              {
                title: "Anahtarınızı kopyalayın",
                body: "Son kontrol noktasından sonra sayfa anahtarınızı görüntüler — uzun bir alfanümerik dize. Tümünü seçmek için dokunun, ardından panoya kopyalayın. Anahtarı yapıştırana kadar sekmeyi kapatmayın.",
              },
              {
                title: "Anahtarı Delta Executor'a yapıştırın",
                body: "Delta Executor'a geri dönün, anahtar giriş alanına dokunun, anahtarınızı yapıştırın ve 'Gönder'e dokunun. Yeşil onay görmeli ve düzenleyici tam olarak etkinleşmelidir.",
              },
              {
                title: "Bağlanın ve ilk scripti çalıştırın",
                body: "Roblox'u açın, bir oyuna katılın, Delta'ya geri dönün, 'Bağlan'a dokunun, enjekte edildi durumunu (yeşil gösterge) bekleyin, ardından scriptinizi yapıştırın veya yükleyin ve 'Çalıştır'a dokunun.",
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
            Yaygın anahtar hataları ve düzeltmeleri
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-sm text-white/70">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.04] text-left text-xs uppercase tracking-wider text-white/40">
                  <th className="px-4 py-3">Hata</th>
                  <th className="px-4 py-3">Olası neden</th>
                  <th className="px-4 py-3">Düzeltme</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  ["Geçersiz anahtar", "Anahtar süresi doldu (>24 saat) veya kısmi kopyalama", "Yeni anahtar oluştur; tam dizeyi kopyala"],
                  ["Anahtar zaten kullanıldı", "Cihaz uyumsuzluğu", "Anahtarı Delta'yı çalıştırdığınız aynı cihazda oluştur"],
                  ["Ağ geçidi yüklenmiyor", "VPN veya reklam engelleyici Linkvertise'i engelliyor", "VPN'i devre dışı bırakın veya loot-link.net'i geçici olarak beyaz listeye alın"],
                  ["Kontrol noktasında sıkıştı", "reCAPTCHA yavaş veya kaçırıldı", "Ağ geçidi sayfasını yenileyin ve ilk adımdan yeniden deneyin"],
                ].map(([err, cause, fix]) => (
                  <tr key={err}>
                    <td className="px-4 py-3 font-semibold text-white">{err}</td>
                    <td className="px-4 py-3">{cause}</td>
                    <td className="px-4 py-3">{fix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            Yukarıdakilerin hiçbiri yardımcı olmazsa Delta Executor&apos;ı en son sürüme güncelleyin ({APP_VERSION}) — bazen anahtar biçimi yeni bir sürümle değişir ve eski kurulumlar geçerli anahtarları reddeder.
          </p>

          <h2 className="font-display text-2xl font-bold text-white">
            Uyarı: sahte anahtar üreteci siteler
          </h2>
          <p>
            &ldquo;Delta Executor anahtar üreteci&rdquo; veya &ldquo;anahtarsız Delta APK&rdquo; aratıldığında kontrol noktasını tamamlamadan anında anahtar vaat eden düzinelerce site ortaya çıkar. Bunlar iki kategoriye ayrılır:
          </p>
          <ul className="ml-4 list-disc space-y-1 text-white/65">
            <li>
              <strong className="text-white">İşlevsiz anahtar dizeleri:</strong> Anahtar gibi görünen ancak sunucu tarafında doğrulanmış belirteçler olmadığından Delta tarafından reddedilen rastgele alfanümerik dizeler üretirler.
            </li>
            <li>
              <strong className="text-white">Veri çalan anket/APK&apos;lar:</strong> &ldquo;Anahtarınızı alın&rdquo; düğmesi kötü amaçlı yazılım içeren bir ankete, abonelik kaydına veya APK indirmeye yönlendirir. Bunlar daha tehlikeli türdür.
            </li>
          </ul>
          <p>
            Geçerli bir Delta anahtarı almanın tek yolu, Delta Executor uygulamasının içindeki resmi anahtar ağ geçidi bağlantısıdır. Kısayol yoktur — ve bir site bunu sağladığını iddia ediyorsa dolandırıcılık olarak değerlendirin.
          </p>

          <h2 className="font-display text-2xl font-bold text-white">
            Linkvertise tarzı ağ geçidi: daha hızlı tamamlama ipuçları
          </h2>
          <p>
            Linkvertise tarzı akış, anahtar sisteminin en yoğun sürtünme kısmıdır. Hızlandıran birkaç alışkanlık:
          </p>
          <ul className="ml-4 list-disc space-y-1 text-white/65">
            <li>Telefonunuzun yerel tarayıcısını (Chrome veya Safari) kullanın — bazı başlatıcılarda gömülü olan ve reklam scriptlerini genellikle düzgün yüklemeyen uygulama içi tarayıcıyı değil.</li>
            <li>Kontrol noktası sırasında VPN kullanmayın — bazı ağ geçidi sağlayıcıları VPN IP aralıklarını engeller ve sonsuz yönlendirmelere neden olur.</li>
            <li>Reklam engelleyiciler kontrol noktası sayacını bozabilir. Ağ geçidi etki alanını geçici olarak devre dışı bırakın veya beyaz listeye alın.</li>
            <li>Sayaç donuyorsa sayfayı hafifçe kaydırın — bazı ağ geçitleri geri sayım başlamadan önce insan olduğunuzu doğrulamak için kullanıcı etkileşimi gerektirir.</li>
          </ul>
        </div>

        <FaqSection title="Anahtar Sistemi SSS" items={faqItems} />

        <div className="mt-10 flex flex-wrap gap-4">
          <CtaButton href={ANDROID_APK_URL} icon="download" size="sm">
            Delta Executor İndir
          </CtaButton>
          <Link href="/ios-delta-roblox" className="font-semibold text-pink hover:underline self-center">
            iOS rehberi →
          </Link>
          <Link href="/blog/is-delta-executor-safe" className="font-semibold text-pink hover:underline self-center">
            Güvenli mi? →
          </Link>
        </div>
      </article>
    </>
  );
}
