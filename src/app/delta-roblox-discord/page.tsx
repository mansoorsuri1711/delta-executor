import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaButton from "@/components/CtaButton";
import FaqSection from "@/components/FaqSection";
import {
  ANDROID_APK_URL,
  APP_VERSION,
  DISCORD_INVITE_URL,
  OG_IMAGE,
  SITE_NAME,
  SITE_ORIGIN,
  STYLES_UPDATED,
} from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Delta Executor Discord — Topluluk, Güncellemeler ve Güvenli Katılım (${APP_VERSION})`,
  description:
    "Delta Executor Discord sunucusu nedir, nasıl güvenli katılınır, hangi kanallar işe yarar ve sahte davet / DM dolandırıcılıklarından nasıl kaçınılır. Güncelleme duyuruları, hata bildirimi ve script ipuçları. Kasım 2026.",
  alternates: { canonical: `${SITE_ORIGIN}/delta-roblox-discord` },
  openGraph: {
    title: `Delta Executor Discord — ${SITE_NAME}`,
    description:
      "Delta Executor topluluk Discord’una güvenli katılım, kanal özeti ve dolandırıcılık uyarıları.",
    url: `${SITE_ORIGIN}/delta-roblox-discord`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Delta Executor Discord rehberi" }],
  },
};

const channels = [
  {
    t: "Duyurular & yama notları",
    d: "Roblox güncellemesinden sonra Android / iOS derlemesinin ne zaman çıktığını buradan takip edin. Eski APK ile enjekte etmeye çalışmadan önce sabitlemeyi okuyun.",
  },
  {
    t: "Destek / sorun giderme",
    d: "Enjeksiyon hataları, anahtar sorunları ve Play Protect engelleri için kayıtlarla birlikte yardım isteyin. Önce sorun giderme sayfamızdaki adımları deneyin.",
  },
  {
    t: "Script paylaşımı",
    d: "Topluluk çalışan scriptleri paylaşır. Yine de oturum çalan kod riski vardır — anlamadığınız Lua’yı çalıştırmayın.",
  },
  {
    t: "Eğitimler",
    d: "Bağlanma, anahtar yenileme ve ilk script çalıştırma için kısa klipler. Kurulum adımları için indirme ve nasıl kullanılır rehberlerimizle eşleştirin.",
  },
];

const scamSigns = [
  "Hesabınızı “beyaz listeye alacağım” diyerek Roblox şifresi veya cookie isteyen DM’ler",
  "Ücretli “ömür boyu anahtar” veya “garantili ban yok” satan roller",
  "deltaroblox.tr dışında rastgele discord.gg linkleri (özellikle YouTube açıklamaları ve reklamlar)",
  "Delta APK’sı yerine .exe / .scr / şüpheli zip indirten “hızlı kurulum” botları",
  "Resmi gibi görünen ama yazımı yanlış sunucu adları (Delta Executer, Deltaa, vb.)",
];

const joinSteps = [
  {
    n: 1,
    title: "Yalnızca bu sitedeki daveti kullanın",
    body: `Davet linkleri sık değişir. Güncel bağlantıyı deltaroblox.tr/delta-roblox-discord üzerinden açın — rastgele yorum veya DM davetlerine tıklamayın.`,
  },
  {
    n: 2,
    title: "Discord hesabınızı doğrulayın",
    body: "Sunucu kuralları genelde e-posta / telefon doğrulaması ister. Bu normaldir. Kimse sizden Roblox şifresi istememelidir.",
  },
  {
    n: 3,
    title: "Kuralları ve sabitlenen duyuruları okuyun",
    body: `Sürüm ${APP_VERSION} (${STYLES_UPDATED}) notları ve bozulmuş enjeksiyon uyarıları genelde #announcements veya benzeri kanallarda sabitlenir.`,
  },
  {
    n: 4,
    title: "Destek isterken kayıt ekleyin",
    body: "Cihaz modeli, Android/iOS sürümü, Delta sürümü ve hata metni olmadan yardım yavaşlar. Önce /delta-roblox-troubleshooting adımlarını deneyin.",
  },
];

const faqItems = [
  {
    question: "Delta Executor’ın resmi Discord’u var mı?",
    answer:
      "Delta topluluğu Discord üzerinden duyuru ve destek paylaşır. Davet linkleri ban veya yeniden oluşturma nedeniyle sık değiştiği için yalnızca deltaroblox.tr’de yayınlanan güncel daveti kullanın. Rastgele “resmi” iddiasındaki sunuculara katılmayın.",
  },
  {
    question: "Discord’a katılmak zorunlu mu?",
    answer:
      "Hayır. APK indirme, kurulum ve anahtar akışı Discord olmadan da tamamlanabilir. Discord isteğe bağlıdır: daha hızlı yama haberleri, topluluk scriptleri ve hata tartışması için faydalıdır.",
  },
  {
    question: "Birisi DM’den anahtar veya ücretsiz Robux teklif ederse ne yapmalıyım?",
    answer:
      "Engelleyin ve bildirin. Gerçek anahtar akışı uygulama içi kontrol noktasındadır. DM üzerinden satılan anahtarlar veya “beyaz liste” teklifleri neredeyse her zaman dolandırıcılıktır. Roblox şifrenizi asla yapıştırmayın.",
  },
  {
    question: "Discord’dan APK indirmeli miyim?",
    answer:
      "Mümkünse hayır. APK’yı deltaroblox.tr indirme rehberi üzerinden alın, sürüm dizesini doğrulayın ve bilinmeyen kaynaklardan gelen yeniden paketlenmiş dosyalardan kaçının. Discord dosya ekleri kolayca sahte olabilir.",
  },
  {
    question: "Sunucuya giremiyorum / davet geçersiz diyor",
    answer:
      "Davet süresi dolmuş veya sunucu yeniden kurulmuş olabilir. Bu sayfadaki güncel linki yenileyin. Hâlâ olmazsa destek@deltaroblox.tr adresine yazın — şüpheli üçüncü taraf “yeni davet” sitelerine gitmeyin.",
  },
];

export default function DiscordPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Ana Sayfa", href: "/" }, { label: "Discord" }]}
      />

      <div className="container mx-auto max-w-6xl px-4 pb-4 pt-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-pink">
              Topluluk · {STYLES_UPDATED}
            </p>
            <h1 className="font-display text-3xl font-bold text-white md:text-5xl">
              Delta Executor Discord
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/65">
              Güncelleme duyuruları, hata bildirimi, script ipuçları ve eğitimler için Delta topluluk
              sunucusu — sahte davet ve DM dolandırıcılıklarına karşı net güvenlik kurallarıyla.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={DISCORD_INVITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bfv-outline-btn"
              >
                Discord’a katıl
                <span aria-hidden="true">→</span>
              </a>
              <CtaButton href={ANDROID_APK_URL} icon="download">
                APK indir
              </CtaButton>
            </div>
            <p className="mt-3 text-xs text-white/35">
              Davet linki değişebilir. Yalnızca bu sayfadaki bağlantıyı kullanın. Roblox şifrenizi asla
              Discord DM’lerine yapıştırmayın.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-3xl px-4 pt-10">
        <h2 className="mb-4 font-display text-2xl font-bold text-white">
          Discord’da ne bulursunuz?
        </h2>
        <p className="mb-6 text-white/60 leading-relaxed">
          Rakip Delta siteleri neredeyse her zaman bir Discord sayfası tutar çünkü oyuncular yama
          zamanlamasını ve script tartışmasını orada arar. deltaroblox.tr de aynı niyeti karşılar —
          ama destek e-postasını alan adında tutarak rastgele davet tuzaklarına yönlendirmez.
        </p>
        <ul className="grid gap-4 sm:grid-cols-2">
          {channels.map((item) => (
            <li key={item.t} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <h3 className="font-semibold text-white">{item.t}</h3>
              <p className="mt-1 text-sm text-white/55">{item.d}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="container mx-auto max-w-3xl px-4 pt-12">
        <h2 className="mb-4 font-display text-2xl font-bold text-white">
          Güvenli katılım — 4 adım
        </h2>
        <ol className="space-y-4">
          {joinSteps.map((step) => (
            <li
              key={step.n}
              className="flex gap-4 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-pink text-sm font-bold text-black">
                {step.n}
              </span>
              <div>
                <h3 className="font-semibold text-white">{step.title}</h3>
                <p className="mt-1 text-sm text-white/55">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="container mx-auto max-w-3xl px-4 pt-12">
        <h2 className="mb-4 font-display text-2xl font-bold text-white">
          Sahte Discord uyarıları
        </h2>
        <p className="mb-4 text-white/60 leading-relaxed">
          “Delta Discord” araması reklamlar ve kopya sunucularla doludur. Şunlardan uzak durun:
        </p>
        <ul className="space-y-2">
          {scamSigns.map((sign) => (
            <li key={sign} className="flex gap-2 text-sm text-white/65">
              <span className="mt-0.5 shrink-0 text-red-400">✗</span>
              <span>{sign}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="container mx-auto max-w-3xl px-4 pt-12">
        <h2 className="mb-4 font-display text-2xl font-bold text-white">
          Discord mu, site rehberleri mi?
        </h2>
        <div className="space-y-4 text-white/65 leading-relaxed">
          <p>
            Discord hızlı duyurular için iyidir. Kalıcı kurulum adımları için site sayfalarını kullanın:{" "}
            <Link href="/download-delta-roblox" className="font-semibold text-pink hover:underline">
              Android indirme
            </Link>
            ,{" "}
            <Link href="/delta-roblox-ios" className="font-semibold text-pink hover:underline">
              iOS
            </Link>
            ,{" "}
            <Link href="/how-to-use-delta-roblox" className="font-semibold text-pink hover:underline">
              nasıl kullanılır
            </Link>
            ,{" "}
            <Link href="/delta-roblox-troubleshooting" className="font-semibold text-pink hover:underline">
              sorun giderme
            </Link>{" "}
            ve{" "}
            <Link href="/blog/delta-executor-key-system" className="font-semibold text-pink hover:underline">
              anahtar sistemi
            </Link>
            .
          </p>
          <p>
            E-posta desteği için{" "}
            <Link href="/contact-us" className="font-semibold text-pink hover:underline">
              iletişim
            </Link>{" "}
            sayfasını kullanın — şifre veya cookie isteyen “yetkili” görünümlü botlara değil.
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-3xl px-4 py-12">
        <FaqSection title="Discord SSS" items={faqItems} />
      </div>

      <div className="container mx-auto max-w-3xl px-4 pb-16">
        <div className="bfv-glass-card flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <h2 className="font-display text-xl font-bold text-white">Hazır mısınız?</h2>
            <p className="mt-1 text-sm text-white/55">
              Önce güvenli davetle katılın, sonra güncel APK ile kurulum yapın.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={DISCORD_INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bfv-outline-btn"
            >
              Discord’a katıl →
            </a>
            <Link href="/download-delta-roblox" className="font-semibold text-pink hover:underline self-center">
              İndirme rehberi →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
