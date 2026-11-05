import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sayfa bulunamadı",
  description: "Aradığınız sayfa yok. Yazı Stilleri oluşturucuya dönün.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="container mx-auto flex max-w-xl flex-col items-center px-4 py-20 text-center">
      <p className="text-sm font-bold uppercase tracking-wider text-pink">404</p>
      <h1 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">Sayfa bulunamadı</h1>
      <p className="mt-4 text-white/55">
        Bu adres artık geçerli değil veya hiç var olmadı. Yazı stilleri oluşturucuya dönüp Instagram,
        WhatsApp veya şekilli nick için yeni bir stil kopyalayabilirsiniz.
      </p>
      <Link
        href="/#generator"
        className="pink-gradient-btn mt-8 inline-flex rounded-xl px-5 py-3 text-sm font-semibold text-white"
      >
        Yazı stili oluştur
      </Link>
    </div>
  );
}
