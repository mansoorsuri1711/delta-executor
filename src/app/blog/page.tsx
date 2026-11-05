import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { OG_IMAGE, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Blog — Yazı Stilleri Rehberleri",
  description:
    "Instagram bio, şekilli nick, estetik yazı ve TikTok/WhatsApp yazı tipi hakkında Türkçe rehberler — yazıstilleri.com.tr.",
  alternates: { canonical: `${SITE_ORIGIN}/blog` },
  openGraph: {
    title: "Yazı Stilleri Blog",
    description: "Pratik Unicode yazı stili kılavuzları.",
    url: `${SITE_ORIGIN}/blog`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Yazı Stilleri blog" }],
  },
};

const posts = [
  {
    href: "/blog/instagram-bio-yazi-stilleri",
    title: "Instagram Bio Yazı Stilleri: 150 Karakterde Öne Çıkın",
    excerpt:
      "Bio sınırı, okunaklı stil seçimi, iOS/Android farkları ve kopyala-yapıştır adımları.",
    date: "5 Kasım 2026",
  },
  {
    href: "/blog/sekilli-nick-rehberi",
    title: "Şekilli Nick Rehberi: PUBG, Free Fire ve Discord",
    excerpt:
      "Karakter limiti, zalgo tuzağı, Türkçe harfler ve lobi ekranında okunaklı nick ipuçları.",
    date: "5 Kasım 2026",
  },
  {
    href: "/blog/estetik-yazi-stilleri",
    title: "Estetik Yazı Stilleri: Minimal ve Şık Unicode Kombinasyonları",
    excerpt:
      "Soft script, küçük caps ve çerçevesiz sade stiller — profil ve durum metinleri için.",
    date: "5 Kasım 2026",
  },
  {
    href: "/blog/tiktok-whatsapp-yazi-tipi",
    title: "TikTok ve WhatsApp Yazı Tipi: Aynı Metin, İki Platform",
    excerpt:
      "Biyografi sınırları, durum metni, grup adı ve TikTok link satırı için pratik öneriler.",
    date: "5 Kasım 2026",
  },
];

export default function BlogIndexPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Ana Sayfa", href: "/" }, { label: "Blog" }]} />
      <div className="container mx-auto max-w-3xl px-4 pb-14 pt-6">
        <h1 className="font-display text-3xl font-bold text-white md:text-5xl">Yazı Stilleri blog</h1>
        <p className="mt-4 text-white/55">
          Yalnızca gerçek arama ihtiyacına yanıt veren rehberler: bio, nick, estetik metin ve
          mesajlaşma uygulamaları.
        </p>
        <ul className="mt-10 space-y-5">
          {posts.map((post) => (
            <li key={post.href}>
              <Link
                href={post.href}
                className="block rounded-2xl border border-white/10 bg-card p-5 transition hover:border-pink/35 hover:border-pink/30"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-white/30">{post.date}</p>
                <h2 className="mt-1 font-display text-2xl font-bold text-white">{post.title}</h2>
                <p className="mt-2 text-sm text-white/55">{post.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
