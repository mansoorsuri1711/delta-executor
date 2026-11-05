import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sayfa bulunamadı",
  description: "Bu sayfa mevcut değil. Delta Executor rehberleri için Delta Roblox'a geri dönün.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-pink">404</p>
      <h1 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">Sayfa bulunamadı</h1>
      <p className="mt-4 max-w-md text-white/60">
        Bu URL eksik veya güncelliğini yitirmiş. Android, iOS ve PC Delta Executor rehberleri için Delta Roblox&apos;a geri dönün.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="bfv-outline-btn">
          Ana Sayfa
        </Link>
        <Link href="/download" className="bfv-outline-btn bfv-outline-btn-muted">
          İndirme rehberi
        </Link>
      </div>
    </main>
  );
}
