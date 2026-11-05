import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { OG_IMAGE, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Blog — Delta Executor Rehberleri ve İpuçları — ${SITE_NAME}`,
  description:
    "Delta Executor blogu: anahtar sistemi nasıl kullanılır, güvenlik ve ban riski açıklaması ve script hub ipuçları. Kasım 2026 için güncellendi.",
  alternates: { canonical: `${SITE_ORIGIN}/blog` },
  openGraph: {
    title: `Delta Roblox Blogu`,
    description: "Executor rehberleri, güvenlik bilgisi ve script hub ipuçları.",
    url: `${SITE_ORIGIN}/blog`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `${SITE_NAME} blogu` }],
  },
};

const posts = [
  {
    href: "/blog/delta-executor-key-system",
    title: "Delta Executor Anahtarı Nasıl Alınır (Adım Adım, 2026)",
    excerpt:
      "Anahtar sistemi otomatik kötüye kullanımı engeller ancak yeni kullanıcıları şaşırtabilir. Bu rehber, anahtarınızı beş dakikadan kısa sürede almanız için Linkvertise ve Loot-Link kontrol noktalarının her adımını anlatır.",
    date: "6 Kasım 2026",
  },
  {
    href: "/blog/is-delta-executor-safe",
    title: "Delta Executor Güvenli mi? Dürüst Risk Değerlendirmesi",
    excerpt:
      "Yasaklanma riskini, kötü amaçlı yazılım endişelerini, Delta'nın telefonunuzda gerçekte ne talep ettiğini ve güvenli indirmeyi ele alıyoruz — hiçbir şeyi süslemiyor, açıkça söylüyoruz.",
    date: "6 Kasım 2026",
  },
  {
    href: "/blog/delta-executor-scripts-hub",
    title: "Delta Executor Script Hub: En İyi Scriptler ve Nasıl Kullanılır",
    excerpt:
      "Yerleşik script hub'ın turu — hangi kategorileri keşfetmeli, scripti güvenli çalıştırma ve kendi script kütüphanenizi yönetme ipuçları.",
    date: "6 Kasım 2026",
  },
];

export default function BlogIndexPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Ana Sayfa", href: "/" }, { label: "Blog" }]} />
      <div className="container mx-auto max-w-3xl px-4 pb-14 pt-6">
        <h1 className="font-display text-3xl font-bold text-white md:text-5xl">
          Delta Roblox Blogu
        </h1>
        <p className="mt-4 text-white/55">
          Gerçek Delta Executor kullanıcıları için yazılmış pratik rehberler — anahtar sistemi, güvenlik ve scriptler. Saçma sapan içerik yok, sahte indirme bağlantısı yok.
        </p>
        <ul className="mt-10 space-y-5">
          {posts.map((post) => (
            <li key={post.href}>
              <Link
                href={post.href}
                className="block rounded-2xl border border-white/10 bg-card p-5 transition hover:border-pink/35"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-white/30">
                  {post.date}
                </p>
                <h2 className="mt-1 font-display text-2xl font-bold text-white">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-white/55">{post.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-12 text-sm text-white/35">
          Başlamak mı istiyorsunuz?{" "}
          <Link href="/download" className="text-pink underline">
            İndirme sayfasına
          </Link>{" "}
          gidin veya{" "}
          <Link href="/#ozellikler" className="text-pink underline">
            tüm özelliklere
          </Link>{" "}
          göz atın.
        </p>
      </div>
    </>
  );
}
