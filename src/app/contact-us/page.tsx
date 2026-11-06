import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import { CONTACT_EMAIL, SITE_NAME, SITE_ORIGIN, SOCIAL_LINKS } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `İletişim — ${SITE_NAME}`,
  description:
    `Destek, hata bildirimi veya geri bildirim için Delta Roblox ekibiyle iletişime geçin. ${CONTACT_EMAIL} adresine e-posta gönderin veya aşağıdaki iletişim formunu kullanın.`,
  alternates: { canonical: `${SITE_ORIGIN}/contact-us` },
  openGraph: {
    title: `İletişim — ${SITE_NAME}`,
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
        <h1 className="mb-3 font-display text-3xl font-bold text-white md:text-4xl">
          İletişim
        </h1>
        <p className="mb-4 text-lg text-white/70">
          Delta Executor hakkında sorunuz mu var, rehberlerimizde bir hata mı fark ettiniz veya bir sorun mu bildirmek istiyorsunuz? Doğrudan{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-pink underline">
            {CONTACT_EMAIL}
          </a>{" "}
          adresine ulaşın veya aşağıdaki formu kullanın.
        </p>
        <p className="mb-2 text-sm text-white/50">
          Tipik yanıt süresi: iş günlerinde 48 saat içinde.
        </p>
        <p className="mb-8 text-sm text-white/50">
          Resmi kanallar:{" "}
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
          </a>
          ,{" "}
          <a href="/discord-delta-roblox" className="text-pink underline">
            Discord
          </a>
          .
        </p>
        <ContactForm />
      </div>
    </>
  );
}
