import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import { CONTACT_EMAIL, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Contact Us — Anagram Generator",
  description:
    "Contact the Anagram Generator team for questions, feedback, or corrections about our free anagram tools and guides.",
  alternates: { canonical: `${SITE_ORIGIN}/contact-us` },
  openGraph: {
    title: "Contact Us — Anagram Generator",
    description: `Reach the ${SITE_NAME} team.`,
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
          { label: "Contact", href: "/contact-us" },
        ]}
      />
      <div className="container mx-auto max-w-3xl px-4 pb-12 pt-8">
        <h1 className="mb-3 font-display text-3xl font-bold text-ink md:text-4xl">Contact us</h1>
        <p className="mb-8 text-lg text-ink/75">
          Feedback on the generator, dictionary quality, or content corrections is welcome. Email{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-pink underline">
            {CONTACT_EMAIL}
          </a>{" "}
          or send a note below.
        </p>
        <ContactForm />
      </div>
    </>
  );
}
