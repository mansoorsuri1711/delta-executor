import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_DOMAIN, SITE_NAME, SITE_ORIGIN, STYLES_UPDATED } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Disclaimer — ${SITE_NAME}`,
  description: `Disclaimer para sa ${SITE_DOMAIN}: walang kaanib sa Roblox Corporation, babala sa ban risk, at independent na status ng gabay.`,
  alternates: { canonical: `${SITE_ORIGIN}/disclaimer` },
};

export default function DisclaimerPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Disclaimer" },
        ]}
      />
      <div className="container mx-auto max-w-3xl px-4 pb-12 pt-8">
        <h1 className="mb-6 font-display text-3xl font-bold text-white">Disclaimer</h1>
        <div className="space-y-4 leading-relaxed text-white/75">
          <p>
            Ang {SITE_NAME} ({SITE_DOMAIN}) ay independent, community-operated na website ng gabay.{" "}
            <strong className="text-white">Hindi kami kaanib sa, ineendorso ng, o opisyal na konektado sa Roblox Corporation</strong>{" "}
            o sinumang game developer na ang mga laro ay nasa Roblox platform.
          </p>

          <h2 className="pt-2 font-display text-xl font-bold text-white">Panganib sa Terms of Service</h2>
          <p>
            Ang script executor kabilang ang Delta Executor ay third-party tool na nakikipag-ugnayan sa Roblox sa paraang lumalabag sa{" "}
            <strong className="text-white">Terms of Service ng Roblox</strong>. Ang paggamit ng executor sa anumang Roblox account ay may panganib ng pansamantala o permanenteng suspension. Hindi ginagarantiya ng {SITE_NAME} na hindi ka ma-ba-ban sa paggamit ng Delta Executor. Lubos naming inirerekomenda ang paggamit ng secondary account para sa testing upang protektahan ang main account mo.
          </p>

          <h2 className="font-display text-xl font-bold text-white">Walang garantiya ng resulta</h2>
          <p>
            Wala kaming warranty na ang anumang script, feature, o teknik na inilalarawan sa site na ito ay makakamit ng tiyak na in-game na resulta. Madalas nagbabago ang game mechanics, anti-cheat system, at detection methods ng Roblox. Ang impormasyon sa site na ito ay para lamang sa edukasyon at impormasyon.
          </p>

          <h2 className="font-display text-xl font-bold text-white">Third-party executor</h2>
          <p>
            Ang mga banggit sa third-party executor (hal. sa PC guide page) ay para lamang sa impormasyon. Hindi namin ineendorso ang mga iyon at hindi kami responsable sa anumang pinsala mula sa pag-download o paggamit ng software na hindi namin ipinamamahagi.
          </p>

          <h2 className="font-display text-xl font-bold text-white">Mga trademark</h2>
          <p>
            Ang &ldquo;Roblox,&rdquo; logo ng Roblox, at kaugnay na marka ay trademark ng Roblox Corporation. Ang lahat ng third-party trademark na binanggit sa site na ito ay nananatiling pag-aari ng kani-kanilang may-ari. Ang mga banggit sa mga iyon ay hindi nagpapahiwatig ng kaanib o endorsement ng mga may-ari.
          </p>

          <h2 className="font-display text-xl font-bold text-white">Katumpakan ng impormasyon</h2>
          <p>
            Gumagawa kami ng makatwirang pagsisikap na panatilihing tama at updated ang mga gabay pagkatapos ng Roblox update at bagong release ng Delta Executor. Gayunpaman, mabilis magbago ang executor landscape at maaaring maging outdated ang ilang impormasyon sa pagitan ng mga update.
            Para sa kritikal na hakbang, palaging i-verify laban sa pinakabagong community source at opisyal na download page ng Delta Executor.
          </p>

          <p>Huling in-update: {STYLES_UPDATED}.</p>
        </div>
      </div>
    </>
  );
}