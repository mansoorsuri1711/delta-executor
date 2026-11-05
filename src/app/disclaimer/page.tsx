import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_DOMAIN, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Sorumluluk Reddi — Yazı Stilleri",
  description:
    "Yazı Stilleri sorumluluk reddi: bağımsız araç, platform markalarıyla ilişkisizlik, kullanım sorumluluğu.",
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
        <h1 className="mb-6 font-display text-3xl font-bold text-white">Sorumluluk reddi</h1>
        <div className="space-y-4 leading-relaxed text-white/75">
          <p>
            {SITE_NAME} ({SITE_DOMAIN}) bağımsız bir Unicode yazı stili aracıdır. Instagram,
            WhatsApp, TikTok, Meta, Discord, PUBG Mobile, Free Fire veya diğer platform
            sahipleriyle bağlantılı, onaylı veya sponsorlu değildir.
          </p>
          <p>
            Üretilen metinler eğlence ve kişisel ifade içindir. Platform kuralları, nick
            filtreleri ve karakter sınırları zamanla değişebilir; reddedilen veya kısaltılan
            metinlerden {SITE_NAME} sorumlu tutulamaz.
          </p>
          <p>
            Aşırı zalgo veya okunaksız karakterler bazı uygulamalarda kısıtlanabilir. Ticari
            marka, kullanıcı adı veya yayınlanacak içeriklerde yasal uygunluğu siz
            değerlendirmelisiniz.
          </p>
          <p>
            Oyun ve uygulama adları ilgili hak sahiplerine aittir. Tüm haklar sahiplerinde
            kalır.
          </p>
          <p>Son güncelleme: 5 Kasım 2026.</p>
        </div>
      </div>
    </>
  );
}
