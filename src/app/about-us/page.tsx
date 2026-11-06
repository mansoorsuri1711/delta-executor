import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaButton from "@/components/CtaButton";
import {
  BRAND_LOGO,
  CONTACT_EMAIL,
  SITE_DOMAIN,
  SITE_NAME,
  SITE_ORIGIN,
  SOCIAL_LINKS,
  APP_VERSION,
  ANDROID_APK_URL,
} from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Hakkımızda — ${SITE_NAME}`,
  description:
    `Delta Roblox hakkında bilgi edinin: kimiz, Android ve iOS için en iyi ücretsiz Roblox executor rehberlerini sunma misyonumuz ve ekibimize nasıl ulaşabileceğiniz.`,
  alternates: { canonical: `${SITE_ORIGIN}/about-us` },
  openGraph: {
    title: `${SITE_NAME} Hakkında`,
    description: `Delta Executor'ın 1 numaralı rehber sitesinin arkasındaki ekip ve misyon.`,
    url: `${SITE_ORIGIN}/about-us`,
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Ana Sayfa", href: "/" }, { label: "Hakkımızda" }]}
      />
      <div className="container mx-auto max-w-4xl px-4 pb-10 pt-8">
        <div className="mb-10 flex flex-col items-start gap-8 md:flex-row">
          <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-muted">
            <Image
              src={BRAND_LOGO}
              alt={`${SITE_NAME} logosu`}
              fill
              sizes="160px"
              className="object-contain p-3"
              priority
            />
          </div>
          <div>
            <h1 className="mb-4 font-display text-3xl font-bold text-white md:text-4xl">
              {SITE_NAME} Hakkında
            </h1>
            <p className="text-lg leading-relaxed text-white/75">
              {SITE_NAME} ({SITE_DOMAIN}), Android ve iOS için ücretsiz Roblox script executor&apos;u{" "}
              <strong className="text-white">Delta Executor</strong>&apos;a adanmış bağımsız bir rehber sitesidir. Topluluğun {APP_VERSION} sürümünden en iyi şekilde yararlanmasına yardımcı olmak için kurulum rehberleri, anahtar sistemi kılavuzları, güvenlik bilgileri ve script hub ipuçları yayınlıyoruz.
            </p>
          </div>
        </div>

        <div className="space-y-5 leading-relaxed text-white/75">
          <p>
            Doğru ve güncel Delta Executor bilgisi bulmak gereğinden zor olmalı. Sonuçların çoğu eski sürümler için güncelliğini yitirmiş öğreticiler, yanıltıcı başlıklı YouTube videoları veya executor kılığına girmiş kötü amaçlı yazılım dağıtan açık dolandırıcılık sayfalarıdır. {SITE_NAME}&apos;i güvenilir, dürüst bir referans olmak için inşa ettik — Delta&apos;nın ne yaptığını, hangi risklerin var olduğunu ve güvenli kurulumu net bir şekilde açıklıyoruz.
          </p>
          <p>
            Roblox Corporation veya Roblox platformundaki herhangi bir oyun geliştiricisi ile bağlantılı, onaylanmış veya sponsorlu değiliz. Delta Executor üçüncü taraf bir araçtır; kullanımı Roblox Kullanım Koşullarını ihlal edebilir ve yasaklanma riskini beraberinde getirir. Kullanıcıların gerçek bilgiyi değil, hype&apos;ı hak ettiğine inandığımızdan rehberlerimiz boyunca buna şeffaf biçimde yer veriyoruz.
          </p>
          <p>
            İçeriğimiz, birden fazla Android cihazı ve iOS donanım yazılımı sürümünde Delta&apos;yı test eden executor topluluğu üyeleri tarafından yazılmakta ve incelenmektedir. Bilgileri güncel tutmak için büyük Roblox yamaları veya executor sürüm yayınlarından sonra sayfaları günler içinde güncelliyoruz.
          </p>
          <p>
            {" "}
            <Link href="/download-delta-roblox" className="text-pink underline">
              Android APK indirme rehberimizle
            </Link>{" "}
            başlayın,{" "}
            <Link href="/delta-roblox-ios" className="text-pink underline">
              iOS kurulum rehberimize
            </Link>{" "}
            göz atın veya{" "}
            <Link href="/#ozellikler" className="text-pink underline">
              tam özellikler genel bakışına
            </Link>{" "}
            bakın. {" "}
            <Link href="/blog" className="text-pink underline">
              Bloğumuz
            </Link>{" "}
            anahtar sistemi, güvenlik soruları ve script hub ipuçlarını ele alır.
          </p>
          <p>
            Sorularınız, düzeltmeleriniz veya ortaklık teklifleriniz için{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-pink underline">
              {CONTACT_EMAIL}
            </a>{" "}
            adresine e-posta gönderin veya{" "}
            <Link href="/contact-us" className="text-pink underline">
              iletişim formunu
            </Link>{" "}
            kullanın.             Güncelleme duyuruları için{" "}
            <a
              href={SOCIAL_LINKS.telegram}
              className="text-pink underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram
            </a>
            ,{" "}
            <a
              href={SOCIAL_LINKS.facebook}
              className="text-pink underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            ,{" "}
            <a
              href={SOCIAL_LINKS.x}
              className="text-pink underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              X
            </a>{" "}
            ve{" "}
            <Link href="/delta-roblox-discord" className="text-pink underline">
              Discord
            </Link>
            &apos;u takip edebilirsiniz.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <CtaButton href={ANDROID_APK_URL} icon="download" ariaLabel="Delta Executor indirme sayfasına git">
            Delta Executor İndir
          </CtaButton>
        </div>
      </div>
    </>
  );
}
