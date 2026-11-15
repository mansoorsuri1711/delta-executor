import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import { CONTACT_EMAIL, SITE_NAME, SITE_ORIGIN, SOCIAL_LINKS } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Contact Us — ${SITE_NAME}`,
  description: `Get in touch with the ${SITE_NAME} team for support, error reports, or feedback. Email ${CONTACT_EMAIL} or use the contact form below.`,
  alternates: { canonical: `${SITE_ORIGIN}/contact-us` },
  openGraph: {
    title: `Contact — ${SITE_NAME}`,
    description: `${SITE_NAME} support and contact.`,
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
          { label: "Contact Us" },
        ]}
      />
      <div className="container mx-auto max-w-3xl px-4 pb-12 pt-8">
        <h1 className="mb-3 font-display text-3xl font-bold text-white md:text-4xl">
          Contact Us
        </h1>
        <p className="mb-4 text-lg text-white/70">
          Have a question about Delta Executor, spotted an error in one of our guides, or need to report an issue?
          Reach us directly at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-pink underline">
            {CONTACT_EMAIL}
          </a>{" "}
          or use the form below.
        </p>
        <p className="mb-2 text-sm text-white/50">
          Typical response time: within 48 hours on business days.
        </p>
        <p className="mb-8 text-sm text-white/50">
          Official community channels:{" "}
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
          Looking for a guide first? Try{" "}
          <Link href="/download-delta-executor" className="text-pink underline">
            download
          </Link>
          ,{" "}
          <Link href="/delta-executor-troubleshooting" className="text-pink underline">
            troubleshooting
          </Link>
          ,{" "}
          <Link href="/blog/how-to-get-delta-executor-key" className="text-pink underline">
            get a key
          </Link>
          , or{" "}
          <Link href="/blog/delta-executor-key-not-working" className="text-pink underline">
            key not working
          </Link>
          .
        </p>
        <ContactForm />
      </div>
    </>
  );
}
