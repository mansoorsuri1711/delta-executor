import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CONTACT_EMAIL, SITE_DOMAIN, SITE_NAME, SITE_ORIGIN, STYLES_UPDATED } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Patakaran sa Privacy — ${SITE_NAME}`,
  description: `Patakaran sa privacy para sa ${SITE_DOMAIN}: anong data ang kinokolekta namin, analytics, cookies, at paano makipag-ugnayan tungkol sa iyong privacy.`,
  alternates: { canonical: `${SITE_ORIGIN}/privacy` },
};

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Patakaran sa Privacy" },
        ]}
      />
      <div className="container mx-auto max-w-3xl px-4 pb-12 pt-8">
        <h1 className="mb-6 font-display text-3xl font-bold text-white">Patakaran sa Privacy</h1>
        <div className="space-y-4 leading-relaxed text-white/75">
          <p>
            Ipinaliliwanag ng Patakaran sa Privacy na ito kung paano pinapamahalaan ng {SITE_NAME} ({SITE_DOMAIN}) ang impormasyon kapag binisita o ginagamit mo ang website na ito.
          </p>

          <h2 className="pt-2 font-display text-xl font-bold text-white">Impormasyon na kinokolekta namin</h2>
          <p>
            Hindi kailangan ng site na ito na gumawa ng account o magsumite ng personal na impormasyon para ma-access ang content. Kung makikipag-ugnayan ka sa amin via email o contact form, natatanggap lamang namin ang impormasyong kusang ibinibigay mo (pangalan, email address, at mensahe) upang tugunan ang iyong inquiry.
          </p>

          <h2 className="font-display text-xl font-bold text-white">Server logs at analytics</h2>
          <p>
            Maaaring awtomatikong magkolekta ng teknikal na data ang hosting provider at analytics tools namin, kabilang ang IP address, uri at bersyon ng browser, referring URL, at mga binisitang pahina. Ginagamit ang data nang aggregate upang subaybayan ang performance, seguridad, at traffic trends. Hindi namin ibinebenta o ibinabahagi ang indibidwal na log data sa third-party advertiser.
          </p>

          <h2 className="font-display text-xl font-bold text-white">Cookies</h2>
          <p>
            Maaaring gumamit ng essential cookies para sa functionality ng site (hal. theme preference). Kung aktibo ang analytics cookies, nangongolekta lamang ito ng anonymized at aggregated data. Maaari mong pamahalaan o burahin ang cookies anumang oras sa settings ng browser; hindi nito apektado ang iyong kakayahang basahin ang content namin.
          </p>

          <h2 className="font-display text-xl font-bold text-white">Mga third-party link</h2>
          <p>
            May mga link ang aming pahina sa panlabas na serbisyo kabilang ang Roblox, app store, at social media platform. Kapag nag-click ka sa mga link na iyon, mapupunta ka sa labas ng {SITE_DOMAIN}, kung saan ang sariling privacy policy ng third party ang ilalapat. Hindi kami responsable sa data practices ng mga partidong iyon.
          </p>

          <h2 className="font-display text-xl font-bold text-white">Privacy ng mga menor de edad</h2>
          <p>
            Hindi nakatuon ang site na ito sa mga batang wala pang 13 taong gulang. Walang sinasadyang kinokolekta naming personal na impormasyon mula sa mga menor de edad. Kung naniniwala kang may menor de edad na nagsumite ng personal na impormasyon sa amin, makipag-ugnayan sa amin at buburahin namin ito agad.
          </p>

          <h2 className="font-display text-xl font-bold text-white">Mga pagbabago sa patakarang ito</h2>
          <p>
            Maaari naming i-update ang patakarang ito paminsan-minsan. Ang petsa sa ibabang bahagi ng pahina ang pinakabagong rebisyon.
          </p>

          <h2 className="font-display text-xl font-bold text-white">Makipag-ugnayan</h2>
          <p>
            Para sa tanong sa privacy o data request:{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-pink underline">
              {CONTACT_EMAIL}
            </a>
            . Huling in-update: {STYLES_UPDATED}.
          </p>
        </div>
      </div>
    </>
  );
}