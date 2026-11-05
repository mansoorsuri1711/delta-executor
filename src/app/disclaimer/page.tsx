import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_DOMAIN, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Sorumluluk Reddi — ${SITE_NAME}`,
  description:
    `${SITE_DOMAIN} için sorumluluk reddi: Roblox Corporation ile bağlantı yok, yasaklanma riski uyarısı ve bağımsız rehber durumu.`,
  alternates: { canonical: `${SITE_ORIGIN}/disclaimer` },
};

export default function DisclaimerPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Sorumluluk Reddi" },
        ]}
      />
      <div className="container mx-auto max-w-3xl px-4 pb-12 pt-8">
        <h1 className="mb-6 font-display text-3xl font-bold text-white">Sorumluluk Reddi</h1>
        <div className="space-y-4 leading-relaxed text-white/75">
          <p>
            {SITE_NAME} ({SITE_DOMAIN}), bağımsız, topluluk tarafından işletilen bir rehber web sitesidir. {" "}
            <strong className="text-white">Roblox Corporation</strong>&apos;a veya Roblox platformunda oyunları yer alan herhangi bir oyun geliştiricisine bağlı değiliz, onlar tarafından onaylanmış, desteklenmiş veya resmi olarak bağlantılı değiliz.
          </p>

          <h2 className="pt-2 font-display text-xl font-bold text-white">
            Kullanım Koşulları riski
          </h2>
          <p>
            Delta Executor dahil script executor&apos;lar, Roblox ile Roblox&apos;un{" "}
            <strong className="text-white">Kullanım Koşullarını</strong> ihlal eden biçimlerde etkileşime giren üçüncü taraf araçlardır. Herhangi bir Roblox hesabında executor kullanmak, geçici veya kalıcı hesap askıya alınma riskini beraberinde getirir. {SITE_NAME}, Delta Executor kullanımının yasaklanmayla sonuçlanmayacağını garanti etmez. Asıl hesabınızı korumak için test amacıyla yedek bir hesap kullanmanızı kesinlikle tavsiye ederiz.
          </p>

          <h2 className="font-display text-xl font-bold text-white">
            Gelir veya sonuç garantisi yok
          </h2>
          <p>
            Bu sitede açıklanan herhangi bir script, özellik veya tekniğin belirli bir oyun içi sonuç elde edeceğine dair hiçbir garanti vermiyoruz. Oyun mekanikleri, hile karşıtı sistemler ve Roblox&apos;un tespit yöntemleri sık sık değişir. Bu sitedeki bilgiler yalnızca eğitim ve bilgi amaçlı sunulmaktadır.
          </p>

          <h2 className="font-display text-xl font-bold text-white">Üçüncü taraf executor&apos;lar</h2>
          <p>
            Üçüncü taraf executor&apos;lara yapılan atıflar (ör. PC Sürümü sayfasında) yalnızca bilgilendirme amaçlıdır. Bu araçları onaylamıyoruz ve dağıtmadığımız yazılımları indirmekten veya kullanmaktan kaynaklanan zararlardan sorumlu değiliz.
          </p>

          <h2 className="font-display text-xl font-bold text-white">Ticari markalar</h2>
          <p>
            &ldquo;Roblox&rdquo;, Roblox logosu ve ilgili markalar, Roblox Corporation&apos;ın ticari markalarıdır. Bu sitede belirtilen tüm üçüncü taraf ticari markaları, ilgili sahiplerinin mülkiyetinde kalmaya devam eder. Bunlardan bahsedilmesi, söz konusu sahiplerle bağlantı veya onay anlamına gelmez.
          </p>

          <h2 className="font-display text-xl font-bold text-white">Bilgilerin doğruluğu</h2>
          <p>
            Roblox güncellemelerinin ve yeni Delta Executor sürümlerinin ardından rehberleri doğru ve güncel tutmak için makul çaba sarf ediyoruz. Ancak executor ortamı hızla gelişir ve bazı bilgiler güncellemeler arasında güncelliğini yitirebilir. Kritik adımlar için her zaman en son topluluk kaynaklarıyla doğrulama yapın.
          </p>

          <p>Son güncelleme: 6 Kasım 2026.</p>
        </div>
      </div>
    </>
  );
}
