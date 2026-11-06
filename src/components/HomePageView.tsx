import Image from "next/image";
import Link from "next/link";
import FaqSection from "@/components/FaqSection";
import { WEB_APPLICATION_JSON_LD } from "@/lib/appFacts";
import { imageObjectLicensing } from "@/lib/schemaImageLicensing";
import {
  ANDROID_APK_URL,
  APP_VERSION,
  BRAND_FEATURE_2,
  BRAND_FEATURE_3,
  BRAND_FEATURE_4,
  BRAND_HERO,
  SITE_ORIGIN,
  SITE_RATING,
  SOCIAL_LABELS,
  SOCIAL_LINKS,
  STYLES_UPDATED,
  SITE_NAME,
} from "@/lib/siteConfig";
import { type SiteLocale, DEFAULT_LOCALE } from "@/lib/locales";
import { getMessages } from "@/lib/i18n/messages";

export default function HomePageView({ locale = DEFAULT_LOCALE }: { locale?: SiteLocale }) {
  const t = getMessages(locale.code);

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_ORIGIN}/#website`,
        url: SITE_ORIGIN,
        name: t.brand,
        description: t.metaDescription,
        publisher: { "@id": `${SITE_ORIGIN}/#organization` },
        inLanguage: "tr",
      },
      {
        ...WEB_APPLICATION_JSON_LD,
        name: "Delta Executor",
        alternateName: ["Delta Roblox", "Delta X Executor"],
        "@id": `${SITE_ORIGIN}/#app`,
        description: t.metaDescription,
      },
      {
        "@type": "HowTo",
        name: t.howTitle,
        description: `${t.howIntroBefore} ${t.howIntroLink} ${t.howIntroAfter}`,
        totalTime: "PT10M",
        step: t.howSteps.map((step, index) => ({
          "@type": "HowToStep",
          position: index + 1,
          name: step.name,
          text: step.text,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: t.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      {
        "@type": "ImageObject",
        contentUrl: `${SITE_ORIGIN}${BRAND_HERO}`,
        url: `${SITE_ORIGIN}${BRAND_HERO}`,
        width: 1200,
        height: 675,
        caption: "Delta Roblox — Delta Executor mobile guide",
        ...imageObjectLicensing,
      },
    ],
  };

  const guideTopics = [
    {
      title: "Android indirme",
      body: "Delta Executor Android'de APK olarak kurulur. Bilinmeyen kaynaklara izin verme, doğru derlemeyi seçme ve kurulum sonrası kontroller modern sürümlerde sık takıldığınız noktalardır. Adım adım kontrol listesini indirme sayfasında bulursunuz.",
      href: "/download-delta-roblox",
      linkLabel: "Android indirme rehberi",
    },
    {
      title: "iOS kurulumu",
      body: "iPhone ve iPad'de Delta genellikle IPA veya doğrudan kurulum yollarıyla gelir. İmzalama hataları, süresi dolmuş profiller ve sürüm uyumsuzluğu en yaygın engellerdir. iOS sayfası hangi yöntemin ne zaman işe yaradığını açıklar.",
      href: "/ios-delta-roblox",
      linkLabel: "iOS kurulum rehberi",
    },
    {
      title: "PC sürümü",
      body: "Birçok yansıma sitesi “PC için Delta” diye EXE dosyası sunar. Gerçekte çoğu bağlantı şüpheli veya alakasız yazılım taşır. PC sayfasında bu iddiaları ayıklıyor ve güvenli alternatifleri netleştiriyoruz.",
      href: "/pc-delta-roblox",
      linkLabel: "PC sürümü rehberi",
    },
    {
      title: "Nasıl kullanılır",
      body: "Kurulumdan sonra bağlanma, Script Hub, yapıştırma ve çalıştırma akışını bilmek gerekir. Kullanım rehberi bu adımları sırayla gösterir; böylece sadece APK indirip ekranda takılmazsınız.",
      href: "/how-to-use-delta-roblox",
      linkLabel: "Kullanım rehberi",
    },
    {
      title: "Anahtar sistemi",
      body: "Delta anahtarları süre sınırlıdır ve yanlış linkler hesabınızı riske atabilir. Anahtar blog yazısı anahtarların nasıl çalıştığını, yenilemeyi ve güvenli kilit açma alışkanlıklarını anlatır.",
      href: "/blog/delta-executor-key-system",
      linkLabel: "Anahtar sistemi yazısı",
    },
    {
      title: "Güvenlik incelemesi",
      body: "“Delta güvenli mi?” sorusu hesap riski, sahte yansımalar ve verilen izinlerle ilgilidir. Güvenlik yazısı hangi uyarıların gerçek, hangilerinin abartı olduğunu ayırmanıza yardım eder.",
      href: "/blog/is-delta-executor-safe",
      linkLabel: "Güvenlik incelemesi",
    },
    {
      title: "Sorun giderme",
      body: "Enjeksiyon hataları, anahtar sorunları, çökmeler ve Play Protect engelleri sık görülür. Sorun giderme sayfası her hata için kısa teşhis ve çözüm sırası verir.",
      href: "/troubleshooting-delta-roblox",
      linkLabel: "Sorun giderme rehberi",
    },
    {
      title: "Mac rehberi",
      body: "macOS'ta resmi bir Delta uygulaması yoktur; çoğu kullanıcı emülatör veya iPhone yansıtma ile ilerler. Mac sayfası hangi seçeneğin kime uyduğunu anlatır.",
      href: "/mac-delta-roblox",
      linkLabel: "Mac rehberi",
    },
    {
      title: "VNG (Vietnam)",
      body: "VNG Roblox istemcisi bazı bölgelerde standart istemciden farklıdır. VNG sayfası kimin buna ihtiyacı olduğunu ve kurulumu nasıl yapacağını açıklar.",
      href: "/vng-delta-roblox",
      linkLabel: "VNG rehberi",
    },
    {
      title: "Discord sunucusu",
      body: "Güncelleme duyuruları, hata bildirimi ve script tartışması Discord’da akar. Discord sayfası güvenli katılım adımlarını ve sahte davet / DM dolandırıcılık uyarılarını verir.",
      href: "/discord-delta-roblox",
      linkLabel: "Discord rehberi",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />

      <section className="relative overflow-hidden px-4 pb-10 pt-10 sm:px-6 md:px-8 md:pb-14 md:pt-16">
        <div className="pointer-events-none absolute left-10 top-20 h-32 w-32 animate-soft-pulse rounded-full bg-pink/10 blur-2xl" />
        <div className="pointer-events-none absolute right-20 top-40 h-24 w-24 animate-soft-pulse rounded-full bg-pink/15 blur-xl" />
        <div className="pointer-events-none absolute bottom-20 right-1/3 h-28 w-28 animate-soft-pulse rounded-full bg-emerald/10 blur-xl" />

        <div className="container relative mx-auto max-w-4xl">
          <div className="mx-auto flex flex-col items-center text-center animate-fade-up">
            <p className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-pink/25 bg-pink/10 px-3 py-1 text-xs font-semibold text-pink">
              {APP_VERSION} · {t.freeMeta}
            </p>
            <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="brand-gradient-text">{t.brand}</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg md:text-xl">
              {t.heroSubPrefix}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={ANDROID_APK_URL}
                className="bfv-outline-btn"
                download
                rel="noopener noreferrer"
              >
                Delta Executor İndir
                <span aria-hidden="true">→</span>
              </a>
              <Link href="/ios-delta-roblox" className="bfv-outline-btn bfv-outline-btn-muted">
                iOS rehberi
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              {(Object.keys(SOCIAL_LINKS) as Array<keyof typeof SOCIAL_LINKS>).map((key) => (
                <a
                  key={key}
                  href={key === "discord" ? "/discord-delta-roblox" : SOCIAL_LINKS[key]}
                  {...(key === "discord"
                    ? {}
                    : { target: "_blank", rel: "noopener noreferrer" })}
                  className="rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-1.5 text-xs font-semibold text-white/75 transition hover:border-pink/40 hover:bg-pink/10 hover:text-pink"
                >
                  {SOCIAL_LABELS[key]}
                </a>
              ))}
            </div>
            <p className="mt-3 text-xs text-white/40">
              Resmi Delta kanalları — Telegram, Facebook, X ve Discord
            </p>
            <div className="mx-auto mt-8 w-full max-w-xl text-left">
              <h2 className="font-display text-2xl font-bold text-white md:text-3xl">APK özeti</h2>
              <p className="mt-2 mb-4 text-sm text-white/55">
                En son Delta Executor derlemesi için hızlı bilgiler
              </p>
              <div className="overflow-x-auto rounded-2xl border border-white/10">
                <table className="w-full text-sm text-white/70">
                  <tbody className="divide-y divide-white/5">
                    {[
                      ["Uygulama adı", "Delta Executor"],
                      ["Sürüm", APP_VERSION],
                      ["Güncellendi", STYLES_UPDATED],
                      ["Platform", "Android 5.0+ · iOS 15–18"],
                      ["Mimari", "ARM64 + ARM32"],
                      ["Yaklaşık boyut", "167.8 MB"],
                      ["Fiyat", "Ücretsiz (anahtar sistemi)"],
                      ["Root / jailbreak gerekli", "Hayır"],
                    ].map(([label, value]) => (
                      <tr key={label}>
                        <td className="px-4 py-3 font-semibold text-white/70">{label}</td>
                        <td className="px-4 py-3 text-white/55">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="mt-5 flex items-center gap-2 text-sm text-white/45">
              <span className="text-gold" aria-hidden="true">
                ★
              </span>
              {SITE_RATING.ratingValue} · {Number(SITE_RATING.ratingCount).toLocaleString("tr-TR")}{" "}
              {t.ratingsLabel} · Ücretsiz · Android · Oyun · {STYLES_UPDATED}
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">{t.whatTitle}</h2>
          <div className="mx-auto mt-8 max-w-3xl">
            <p className="text-base leading-relaxed text-white/60 sm:text-lg">{t.whatBody}</p>
            <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">
              &ldquo;delta roblox&rdquo; ve &ldquo;delta executor indir&rdquo; için canlı Google sonuçları YouTube kurulum videoları, Play Store benzerleri ve tek sayfalık yansıma siteleriyle doludur.{" "}
              <Link href="/download-delta-roblox" className="font-semibold text-pink hover:underline">
                İndirme rehberimiz
              </Link>{" "}
              her sorguyu tek bir devasa URL&apos;ye yığmak yerine kurulum adımlarını deltaroblox.tr&apos;de platforma özgü ayrıntılarla sunar.
            </p>
          </div>
          <div className="relative mx-auto mt-8 max-w-2xl">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-pink/20 via-transparent to-emerald/10 blur-2xl" />
            <Image
              src={BRAND_HERO}
              alt="Delta Roblox ana görsel — Delta Executor mobil arayüzü siyan parıltıyla"
              width={1200}
              height={675}
              sizes="(max-width: 672px) 100vw, 672px"
              priority
              className="h-auto w-full rounded-[1.5rem] border border-white/10 shadow-[0_30px_60px_-28px_rgba(0,0,0,0.85)]"
            />
          </div>
        </div>
      </section>

      <section id="ozellikler" className="scroll-mt-28 px-4 py-14 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
            Delta Executor neler yapabilir?
          </h2>
          <p className="mt-3 text-base leading-relaxed text-white/55 sm:text-lg">
            Yerleşik hub, yerel Lua motoru, ARM64 desteği, hızlı enjeksiyon ve düzenli yamalarla mobil öncelikli
            Roblox script executor — Android ve iOS&apos;ta ücretsiz. Kullanıcı puanı: {SITE_RATING.ratingValue}/
            {SITE_RATING.bestRating} ({SITE_RATING.ratingCount}+ değerlendirme) · sürüm {APP_VERSION}.
          </p>
          <div className="mt-10 space-y-10">
            {[
              {
                title: "Yerel Lua çalıştırma motoru",
                body: `Delta Executor ${APP_VERSION}, Roblox'un Lua VM'siyle doğrudan entegre olan hafif, özel bir Lua çalışma zamanı çalıştırır. Bu, geniş Roblox API kapsamı sağlar — standart Roblox Lua işlevlerinin çoğu ve pek çok UNC düzeyinde çağrı beklendiği gibi çalışır. Script uyumluluğu, Roblox motoru güncellemelerine karşı düzenli olarak test edilir.`,
              },
              {
                title: "Çapraz platform: Android ve iOS",
                body: "Executor, Android 5+'ta root olmadan ve iOS 15–18'de AltStore veya TrollStore yandan yüklemesi yoluyla yerel olarak çalışır. Her iki platform da aynı script hub'ı ve anahtar sistemini paylaşır, bu nedenle cihaz değiştirmek yeni bir araç öğrenmek anlamına gelmez.",
              },
              {
                title: "Yerleşik Script Hub",
                body: "Popüler Roblox oyunları için yüzlerce düzenlenmiş Lua scripte göz atın — Blox Fruits, Brookhaven, Pet Simulator, Arsenal, Jailbreak, Da Hood, Grow a Garden ve daha fazlası. Scriptler, oturum çalan kodları taramak için eklenmeden önce incelenir. Harici sitelerden kopyala-yapıştır gerekmez.",
              },
              {
                title: "Düzenli Roblox güncelleme yamaları",
                body: `Roblox sık güncellenir ve executor'ların buna uyum sağlaması gerekir. Delta genellikle büyük Roblox motor sürümlerinden 24–72 saat içinde uyumluluk güncellemeleri yayınlar. Sürüm ${APP_VERSION} (${STYLES_UPDATED}), Kasım 2026 Roblox motor değişikliklerine yönelik düzeltmeleri içerir.`,
              },
              {
                title: "Anahtar sistemiyle ücretsiz",
                body: "Delta Executor tamamen ücretsizdir. Anahtar sistemi — 24 saatlik cihaza özgü anahtar oluşturan kısa bir reklam kapısı kontrol noktası — tek erişim gereksinimidir. Script çalıştırmayı engelleyen gizli premium ücretli katman yoktur. iOS Premium, günlük anahtarı kaldıran isteğe bağlı bir kolaylık yükseltmesidir.",
              },
              {
                title: "ARM ve ARM64 mimari desteği",
                body: "APK, 2014'ten sonra üretilen neredeyse tüm Android telefonları kapsayan ARM ve ARM64 desteğiyle derlenir. ARM64 cihazlar gelişmiş performans ve bellek verimliliğinden yararlanır. Gerçek telefon çoğunluğunu dışarıda bırakan yalnızca x86 kısıtlaması yoktur.",
              },
              {
                title: "Çökme karşıtı kararlılık",
                body: "Enjeksiyon katmanı, tam bir Roblox çökmesine tırmandırılmadan önce Lua çalışma zamanı hatalarını yakalayan bir hata sınırlama sistemi içerir. Bir script yakalanmamış bir hata fırlatırsa Delta, Roblox oturumunuzu sert biçimde çöktürmek yerine hata ayrıntılarını içeren bir bildirim gösterir.",
              },
              {
                title: "Karanlık mod arayüzü",
                body: "Delta Executor arayüzünün tamamı varsayılan olarak karanlık renk şeması kullanır; bu, AMOLED Android ekranlarında pil tüketimini azaltır ve Roblox arka planda çalışırken kaplamayı daha az göze çarpar hale getirir. Açık mod anahtarı yoktur — karanlık arayüz sabitlenmiştir.",
              },
              {
                title: "Scriptleri otomatik kaydet",
                body: "Düzenleyiciye yazdığınız veya yapıştırdığınız scriptler her 30 saniyede bir yerel bir yuvaya otomatik kaydedilir. Executor beklenmedik şekilde kapatılırsa son kaydedilen sürüm bir sonraki başlatmada geri yüklenir. Kişisel bir kütüphane oluşturmak için manuel kayıt yuvaları da mevcuttur.",
              },
              {
                title: "Sözdizimi ipuçlarıyla script düzenleyici",
                body: "Yerleşik düzenleyici, Lua anahtar kelimelerini vurgular ve çalıştırılmadan önce temel sözdizimi hatalarını işaretler; bu, önemsiz yazım hatalarından kaynaklanan sinir bozucu çökmeleri azaltır. Basit bir satır sayacı ve hata göstergesi, hangi satırın dikkat gerektirdiğini gösterir.",
              },
              {
                title: "Root gerektirmez (Android)",
                body: "Delta Executor, root veya özel çekirdek gerektirmeyen bir kullanıcı alanı yöntemiyle enjekte eder. Çoğu büyük üreticinin stok Android'inde çalışır — Samsung, Xiaomi, OnePlus, OPPO, Vivo ve diğerleri.",
              },
              {
                title: "Pano ve dosyadan script yükleme",
                body: "Scriptleri doğrudan panodan yapıştırın veya cihaz depolama alanınızdan .lua / .txt dosyalarını yükleyin. Yalnızca yerleşik hub'a bağlı kalmak zorunda kalmadan kişisel bir script kütüphanesi yönetmek için kullanışlıdır.",
              },
            ].map((feature) => (
              <div key={feature.title}>
                <h3 className="font-display text-xl font-bold text-white md:text-2xl">{feature.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-white/60 sm:text-lg">{feature.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              { src: BRAND_FEATURE_2, alt: "Delta Executor Android üzerinde — script hub görünümü" },
              { src: BRAND_FEATURE_3, alt: "Delta Executor iOS üzerinde — bağlanma ekranı" },
              { src: BRAND_FEATURE_4, alt: "Delta Executor script kütüphanesi genel bakışı" },
            ].map((img) => (
              <div key={img.src} className="overflow-hidden rounded-2xl border border-white/10 bg-muted">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={1200}
                  height={900}
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="h-auto w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* v2.745 improvements */}
      <section className="px-4 py-12 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
            {APP_VERSION} sürümünde neler yeni?
          </h2>
          <p className="mt-3 text-white/55 mb-6">{STYLES_UPDATED} sürümü — öne çıkan iyileştirmeler</p>
          <ul className="space-y-3">
            {[
              "Roblox Kasım 2026 motor uyumluluğu — son Roblox yama döngüsünden sonra enjeksiyon geri geldi.",
              "Script hub yenilendi: güncel Blox Fruits, Da Hood ve Grow a Garden scriptleri.",
              "ARM64 enjeksiyon yolu optimize edildi — 4 GB+ RAM’li cihazlarda daha hızlı bağlanma.",
              "Android 13/14’te otomatik enjeksiyon güvenilirliği artırıldı.",
              "iOS derlemesi iOS 18.1 için güncellendi — AltStore imzalama doğrulandı.",
              "Hata bildirimi artık script hatalarında Lua satır numarasını gösteriyor.",
              "Yavaş bağlantılarda anahtar geçidi zaman aşımı uzatıldı.",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm text-white/65">
                <span className="mt-0.5 text-pink shrink-0" aria-hidden="true">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="bfv-glass-card p-6 sm:p-10">
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">{t.howTitle}</h2>
            <p className="mt-3 max-w-2xl text-white/55">
              {t.howIntroBefore}{" "}
              <Link href="/download-delta-roblox" className="font-semibold text-pink hover:underline">
                {t.howIntroLink}
              </Link>{" "}
              {t.howIntroAfter}
            </p>
            <ol className="mt-8 grid gap-4 md:grid-cols-2">
              {t.howSteps.map((step, index) => (
                <li key={step.name} className="flex gap-4 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-pink text-sm font-bold text-black">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">{step.name}</h3>
                    <p className="mt-1 text-sm text-white/55">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Pros & Cons */}
      <section className="px-4 py-12 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">Artılar ve eksiler</h2>
          <p className="mt-3 mb-6 text-white/55">Dürüst değerlendirme — sahte “tespit edilemez” iddiaları yok</p>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-green-400/20 bg-green-400/5 p-5">
              <h3 className="mb-3 font-display font-bold text-green-400">Artılar</h3>
              <ul className="space-y-2 text-sm text-white/65">
                {[
                  "Android ve iOS — gerçek çapraz platform mobil destek",
                  "Root veya jailbreak gerekmez",
                  "Anahtar sistemiyle ücretsiz — zorunlu ödeme duvarı yok",
                  "Modern telefonlar için yerel ARM64",
                  "Seçilmiş script hub kötü amaçlı script riskini azaltır",
                  "Roblox yamalarına genelde 24–72 saat içinde yanıt",
                ].map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="text-green-400 shrink-0">✓</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-red-400/20 bg-red-400/5 p-5">
              <h3 className="mb-3 font-display font-bold text-red-400">Eksiler</h3>
              <ul className="space-y-2 text-sm text-white/65">
                {[
                  "Her gün 24 saatlik anahtar yenileme",
                  "Yerel Windows/Mac derlemesi yok",
                  "iOS’ta ücretsiz Apple ID ile 7 günde bir yeniden imzalama",
                  "Roblox güncellemelerinden sonra enjeksiyon geçici bozulabilir",
                  "Ban riski gerçek — Roblox ToS ihlali",
                ].map((c) => (
                  <li key={c} className="flex gap-2">
                    <span className="text-red-400 shrink-0">✗</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Supported games overview */}
      <section className="px-4 py-12 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">Script Hub’daki popüler oyunlar</h2>
          <p className="mt-3 mb-6 text-white/55">
            Yerleşik hub, şu oyun türleri için bilgilendirici script kategorileri içerir.{" "}
            <Link href="/blog/delta-executor-scripts-hub" className="text-pink hover:underline">
              Tam hub rehberi →
            </Link>
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { game: "Blox Fruits", type: "Otomatik farm, ışınlanma, meyve bulucu" },
              { game: "Brookhaven", type: "Admin araçları, sosyal scriptler" },
              { game: "Pet Simulator X", type: "Otomatik toplama, kuluçka otomasyonu" },
              { game: "Arsenal", type: "Nişan yardımcıları, ESP" },
              { game: "Jailbreak", type: "Araç hızı, ışınlanma" },
              { game: "Da Hood", type: "Otomatik farm, hitbox, hareket" },
              { game: "Grow a Garden", type: "Tarım otomasyonu, istatistik araçları" },
              { game: "Adopt Me", type: "Takas yardımcıları, otomatik eylem" },
              { game: "Genel yardımcılar", type: "Admin panelleri, anti-AFK, FPS açma" },
            ].map((item) => (
              <div key={item.game} className="rounded-xl border border-white/10 bg-card p-4">
                <p className="font-semibold text-white text-sm">{item.game}</p>
                <p className="mt-1 text-xs text-white/45">{item.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison teaser */}
      <section className="px-4 py-8 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-3xl">
          <div className="bfv-glass-card flex flex-col sm:flex-row sm:items-center gap-4 justify-between p-6 sm:p-8">
            <div>
              <h2 className="font-display text-xl font-bold text-white">Delta diğer executor’lara göre nasıl?</h2>
              <p className="mt-2 text-sm text-white/55">
                Yan yana tablo: mobil destek, anahtar sistemi, script hub, güncelleme hızı — sahte iddia yok.
              </p>
            </div>
            <Link
              href="/comparison-delta-roblox"
              className="shrink-0 rounded-full border border-pink/30 bg-pink/10 px-5 py-2.5 text-sm font-semibold text-pink hover:bg-pink/20"
            >
              Karşılaştırmayı gör →
            </Link>
          </div>
        </div>
      </section>

      {/* Discord / community — competitor IA covers this on every major Delta site */}
      <section className="px-4 py-12 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">Delta topluluğu &amp; Discord</h2>
          <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">
            Rakip hub’lar güncelleme bildirimleri, script paylaşımı ve hata raporları için Discord’a ağırlık verir.
            Delta Roblox sizi yama notları için resmi görünüklü topluluk kanallarına yönlendirir — ve
            destek postasını alan adında tutar, böylece rastgele davet dolandırıcılıklarına yönlendirilmezsiniz.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              { t: "Güncelleme duyuruları", d: "Roblox yamalarından sonra Android / iOS derlemelerinin ne zaman yetiştiğini öğrenin." },
              { t: "Hata bildirimi", d: "Enjeksiyon hataları ve anahtar sorunları kayıtlarla daha hızlı teşhis edilir." },
              { t: "Script paylaşımı", d: "Topluluk hub’ları çalışan scriptleri ortaya çıkarır — yine de çalıştırmadan önce kontrol edin." },
              { t: "Eğitimler", d: "Bağlanma, anahtar yenileme ve ilk script çalıştırma için kısa klipler." },
            ].map((item) => (
              <li key={item.t} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <h3 className="font-semibold text-white">{item.t}</h3>
                <p className="mt-1 text-sm text-white/55">{item.d}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-white/55">
            <Link href="/discord-delta-roblox" className="font-semibold text-pink hover:underline">
              Discord rehberine git →
            </Link>
            {" "}E-posta mı tercih ediyorsunuz?{" "}
            <Link href="/contact-us" className="font-semibold text-pink hover:underline">
              destek@deltaroblox.tr
            </Link>
            {" "}adresine yazın. Hesabınızı “beyaz listeye aldığını” iddia eden Discord DM’lerine Roblox şifrelerinizi asla yapıştırmayın.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">{t.toolExplainerTitle}</h2>
          <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">{t.toolExplainerBody}</p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">{t.controlsTitle}</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {t.controls.map((item) => (
              <article key={item.t} className="bfv-feature-card p-5">
                <h3 className="font-display text-lg font-bold text-white">{item.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{item.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              Android, iOS ve scriptler — özetle
            </h2>
            <p className="mt-4 text-white/55">
              Dört ana sayfa görseli, insanların Delta Roblox etrafında gerçekten aradığı konuları kapsar.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: t.cardExactTitle,
                body: t.cardExactBody,
                img: BRAND_FEATURE_2,
                href: "/download-delta-roblox",
                alt: "Delta Roblox Android APK indirme özellik görseli",
              },
              {
                title: t.cardSolverTitle,
                body: t.cardSolverBody,
                img: BRAND_FEATURE_3,
                href: "/ios-delta-roblox",
                alt: "Delta Executor iOS kurulum özellik görseli",
              },
              {
                title: t.cardWhatsappTitle,
                body: t.cardWhatsappBody,
                img: BRAND_FEATURE_4,
                href: "/blog/delta-executor-scripts-hub",
                alt: "Delta Executor script hub özellik görseli",
              },
            ].map((card) => (
              <article
                key={card.title}
                className="overflow-hidden rounded-2xl border border-white/10 bg-card shadow-card-dark"
              >
                <Link href={card.href} className="block bg-muted">
                  <Image
                    src={card.img}
                    alt={card.alt}
                    width={900}
                    height={675}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="h-auto w-full object-contain"
                  />
                </Link>
                <div className="p-5">
                  <h3 className="font-display text-xl font-bold text-white">
                    <Link href={card.href} className="hover:text-pink">
                      {card.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{card.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">{t.platformsTitle}</h2>
            <p className="mt-4 text-white/55">{t.platformsIntro}</p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.platforms.map((item) => (
              <article key={item.t} className="bfv-feature-card p-5">
                <h3 className="font-display text-lg font-bold text-white">{item.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{item.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">{t.whoTitle}</h2>
            <p className="mt-4 text-white/55">{t.whoIntro}</p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {t.whoItems.map((item) => (
              <article key={item.t} className="bfv-feature-card p-5">
                <h3 className="font-display text-xl font-bold text-white">{item.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{item.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-pink">{t.whyEyebrow}</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-white md:text-4xl">{t.whyTitle}</h2>
          <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">{t.whyBody}</p>
          <h3 className="mt-10 font-display text-2xl font-bold text-white">{t.compareTitle}</h3>
          <p className="mt-3 text-white/60">{t.compareBody}</p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">{t.tipsTitle}</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {t.tips.map((tip) => (
              <article key={tip.t} className="bfv-feature-card p-5">
                <h3 className="font-display text-lg font-bold text-white">{tip.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{tip.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">{t.trustTitle}</h2>
          <ul className="mt-6 space-y-3">
            {t.trustItems.map((item) => (
              <li key={item} className="flex gap-3 text-white/65">
                <span className="mt-1 text-pink" aria-hidden="true">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6">
            <Link href="/disclaimer" className="font-semibold text-pink hover:underline">
              {t.trustLink}
            </Link>
          </p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-6 font-display text-3xl font-bold text-white md:text-4xl">{t.faqTitle}</h2>
          <FaqSection title={t.faqTitle} items={t.faqs} includeSchema={false} />
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">{t.modesTitle}</h2>
          <p className="mt-3 text-base leading-relaxed text-white/55 sm:text-lg">{t.modesIntro}</p>
          <div className="mt-10 space-y-10">
            {guideTopics.map((topic) => (
              <div key={topic.href}>
                <h3 className="font-display text-xl font-bold text-white md:text-2xl">{topic.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-white/60 sm:text-lg">
                  {topic.body}{" "}
                  <Link href={topic.href} className="font-semibold text-pink hover:underline">
                    {topic.linkLabel} →
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 pt-8 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="bfv-glass-card flex flex-col items-start gap-6 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div>
              <h2 className="font-display text-2xl font-bold text-white md:text-3xl">{t.ctaTitle}</h2>
              <p className="mt-2 max-w-xl text-white/60">{t.ctaBody}</p>
            </div>
            <a
              href={ANDROID_APK_URL}
              download
              rel="noopener noreferrer"
              className="bfv-outline-btn shrink-0"
            >
              {t.ctaButton}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
