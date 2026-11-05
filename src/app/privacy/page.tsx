import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CONTACT_EMAIL, SITE_DOMAIN, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Gizlilik Politikası — ${SITE_NAME}`,
  description:
    `${SITE_DOMAIN} için gizlilik politikası: topladığımız veriler, analitik, çerezler ve gizliliğiniz hakkında bizimle nasıl iletişime geçeceğiniz.`,
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
            Bu Gizlilik Politikası, {SITE_NAME} ({SITE_DOMAIN})&apos;nin bu web sitesini ziyaret ettiğinizde veya içeriğini kullandığınızda bilgileri nasıl işlediğini açıklar.
          </p>

          <h2 className="pt-2 font-display text-xl font-bold text-white">Topladığımız bilgiler</h2>
          <p>
            Bu site, içeriklere erişmek için hesap oluşturmanızı veya kişisel bilgi göndermenizi gerektirmez. Bize e-posta veya iletişim formu aracılığıyla ulaşırsanız, yalnızca sorunuzu yanıtlamak amacıyla gönüllü olarak sağladığınız bilgileri (ad, e-posta adresi ve mesaj) alırız.
          </p>

          <h2 className="font-display text-xl font-bold text-white">Sunucu kayıtları ve analitik</h2>
          <p>
            Barındırma sağlayıcımız ve analitik araçlarımız, IP adresiniz, tarayıcı türü ve sürümü, yönlendiren URL ve ziyaret edilen sayfalar dahil teknik verileri otomatik olarak toplayabilir. Bu veriler, site performansını, güvenliğini ve trafik eğilimlerini izlemek için toplu olarak kullanılır. Bireysel kayıt verilerini üçüncü taraf reklamcılara satmaz veya paylaşmayız.
          </p>

          <h2 className="font-display text-xl font-bold text-white">Çerezler</h2>
          <p>
            Site işlevselliği için gerekli temel çerezler (ör. tema tercihi) kullanılabilir. Analitik çerezler etkinse yalnızca anonimleştirilmiş, toplu veri toplar. Çerezleri tarayıcı ayarlarınız aracılığıyla istediğiniz zaman yönetebilir veya silebilirsiniz; bu durum içeriklerimizi okuma yeteneğinizi etkilemez.
          </p>

          <h2 className="font-display text-xl font-bold text-white">Üçüncü taraf bağlantılar</h2>
          <p>
            Sayfalarımız Roblox, uygulama mağazaları ve sosyal medya platformları dahil harici hizmetlere bağlantı vermektedir. Bu bağlantılara tıklamak sizi {SITE_DOMAIN} dışına çıkarır; burada söz konusu üçüncü tarafların gizlilik politikaları geçerlidir. Veri uygulamaları için bu taraflardan sorumlu değiliz.
          </p>

          <h2 className="font-display text-xl font-bold text-white">Çocukların gizliliği</h2>
          <p>
            Bu site 13 yaşın altındaki çocuklara yönelik değildir. Küçüklerden bilerek kişisel bilgi toplamayız. Bir çocuğun bize kişisel bilgi gönderdiğine inanıyorsanız lütfen bizimle iletişime geçin; bunu derhal sileceğiz.
          </p>

          <h2 className="font-display text-xl font-bold text-white">Bu politikadaki değişiklikler</h2>
          <p>
            Bu politikayı zaman zaman güncelleyebiliriz. Sayfanın altındaki tarih en son revizyon tarihini yansıtır.
          </p>

          <h2 className="font-display text-xl font-bold text-white">İletişim</h2>
          <p>
            Gizlilik soruları veya veri talepleri:{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-pink underline">
              {CONTACT_EMAIL}
            </a>
            . Son güncelleme: 6 Kasım 2026.
          </p>
        </div>
      </div>
    </>
  );
}
