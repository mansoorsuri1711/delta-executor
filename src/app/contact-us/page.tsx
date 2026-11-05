import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import { CONTACT_EMAIL, SITE_NAME, SITE_ORIGIN, SOCIAL_LINKS } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "İletişim — Yazı Stilleri",
  description:
    "Yazı Stilleri ekibiyle iletişime geçin: geri bildirim, içerik düzeltmesi veya teknik sorular için destek@yazıstilleri.com.tr.",
  alternates: { canonical: `${SITE_ORIGIN}/contact-us` },
  openGraph: {
    title: "İletişim — Yazı Stilleri",
    description: `${SITE_NAME} destek ve iletişim.`,
    url: `${SITE_ORIGIN}/contact-us`,
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Ana Sayfa", href: "/" },
          { label: "İletişim" },
        ]}
      />
      <div className="container mx-auto max-w-3xl px-4 pb-12 pt-8">
        <h1 className="mb-3 font-display text-3xl font-bold text-white md:text-4xl">İletişim</h1>
        <p className="mb-4 text-lg text-white/70">
          Oluşturucu hakkında öneri, hatalı stil bildirimi veya rehber düzeltmesi için bize
          ulaşın. E-posta:{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-pink underline">
            {CONTACT_EMAIL}
          </a>
        </p>
        <p className="mb-8 text-sm text-white/50">
          Resmi hesaplarımız:{" "}
          <a href={SOCIAL_LINKS.instagram} className="text-pink underline" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          ,{" "}
          <a href={SOCIAL_LINKS.youtube} className="text-pink underline" target="_blank" rel="noopener noreferrer">
            YouTube
          </a>
          ,{" "}
          <a href={SOCIAL_LINKS.x} className="text-pink underline" target="_blank" rel="noopener noreferrer">
            X
          </a>
          .
        </p>
        <ContactForm />
      </div>
    </>
  );
}
