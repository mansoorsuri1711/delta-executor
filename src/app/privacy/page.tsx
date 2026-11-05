import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CONTACT_EMAIL, SITE_DOMAIN, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Gizlilik Politikası — Yazı Stilleri",
  description:
    "yazıstilleri.com.tr gizlilik politikası: hangi veriler işlenir, analitik, çerezler ve iletişim.",
  alternates: { canonical: `${SITE_ORIGIN}/privacy` },
};

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Gizlilik Politikası" },
        ]}
      />
      <div className="container mx-auto max-w-3xl px-4 pb-12 pt-8">
        <h1 className="mb-6 font-display text-3xl font-bold text-white">Gizlilik Politikası</h1>
        <div className="space-y-4 leading-relaxed text-white/75">
          <p>
            Bu Gizlilik Politikası, {SITE_NAME} ({SITE_DOMAIN}) sitesini ve yazı stili
            oluşturucuyu kullandığınızda bilgilerin nasıl ele alındığını açıklar.
          </p>
          <h2 className="pt-2 font-display text-xl font-bold text-white">İşlediğimiz bilgiler</h2>
          <p>
            Yazı stili dönüşümü tarayıcınızda çalışır. Oluşturucuya yazdığınız metinler hesap
            geçmişi olarak sunucularımızda saklanmak üzere tasarlanmamıştır. Bize e-posta
            gönderirseniz veya iletişim formunu doldurursanız, yanıt verebilmek için gönderdiğiniz
            bilgileri alırız.
          </p>
          <h2 className="font-display text-xl font-bold text-white">Loglar ve analitik</h2>
          <p>
            Barındırma ve analitik hizmetleri, IP adresi, tarayıcı türü ve görüntülenen sayfalar
            gibi teknik verileri işleyebilir. Bunu siteyi hızlı, güvenli ve kullanışlı tutmak için
            kullanırız; kişisel profil satışı yapmıyoruz.
          </p>
          <h2 className="font-display text-xl font-bold text-white">Çerezler</h2>
          <p>
            Sitenin çalışması için gerekli çerezler kullanılabilir. Analitik çerezler etkinse
            toplu trafiği anlamamıza yardım eder. Tarayıcı ayarlarınızdan çerezleri
            yönetebilirsiniz.
          </p>
          <h2 className="font-display text-xl font-bold text-white">Üçüncü taraflar</h2>
          <p>
            Sosyal medya veya harici sitelere giden bağlantılar kendi gizlilik uygulamalarına
            tabidir. {SITE_DOMAIN} dışına çıktığınızda o sitelerin politikaları geçerlidir.
          </p>
          <h2 className="font-display text-xl font-bold text-white">İletişim</h2>
          <p>
            Gizlilik soruları:{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-pink underline">
              {CONTACT_EMAIL}
            </a>
            . Son güncelleme: 5 Kasım 2026.
          </p>
        </div>
      </div>
    </>
  );
}
