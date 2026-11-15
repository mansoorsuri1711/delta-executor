import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import { CONTACT_EMAIL, SITE_NAME, SITE_ORIGIN, SOCIAL_LINKS } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Makipag-ugnayan — ${SITE_NAME}`,
  description: `Makipag-ugnayan sa team ng ${SITE_NAME} para sa support, ulat ng error, o feedback. Email ${CONTACT_EMAIL} o gamitin ang contact form sa ibaba.`,
  alternates: { canonical: `${SITE_ORIGIN}/contact-us` },
  openGraph: {
    title: `Makipag-ugnayan — ${SITE_NAME}`,
    description: `Support at contact ng ${SITE_NAME}.`,
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
          { label: "Home", href: "/" },
          { label: "Makipag-ugnayan" },
        ]}
      />
      <div className="container mx-auto max-w-3xl px-4 pb-12 pt-8">
        <h1 className="mb-3 font-display text-3xl font-bold text-white md:text-4xl">
          Makipag-ugnayan
        </h1>
        <p className="mb-4 text-lg text-white/70">
          May tanong tungkol sa Delta Executor, may nakitang error sa isa sa aming gabay, o kailangan mag-ulat ng isyu?
          Makipag-ugnayan direkta sa{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-pink underline">
            {CONTACT_EMAIL}
          </a>{" "}
          o gamitin ang form sa ibaba.
        </p>
        <p className="mb-2 text-sm text-white/50">
          Karaniwang oras ng tugon: sa loob ng 48 oras sa araw ng trabaho.
        </p>
        <p className="mb-8 text-sm text-white/50">
          Opisyal na channel ng komunidad:{" "}
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
          <Link href="/delta-executor-discord" className="text-pink underline">
            Discord
          </Link>
          .
        </p>
        <p className="mb-8 text-sm text-white/50">
          Gabay muna? Subukan ang{" "}
          <Link href="/download-delta-executor" className="text-pink underline">
            download
          </Link>
          ,{" "}
          <Link href="/delta-executor-troubleshooting" className="text-pink underline">
            troubleshooting
          </Link>
          ,{" "}
          <Link href="/blog/how-to-get-delta-executor-key" className="text-pink underline">
            kumuha ng key
          </Link>
          , o{" "}
          <Link href="/blog/delta-executor-key-not-working" className="text-pink underline">
            hindi gumagana ang key
          </Link>
          .
        </p>
        <ContactForm />
      </div>
    </>
  );
}