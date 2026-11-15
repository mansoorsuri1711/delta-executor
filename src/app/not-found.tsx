import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hindi natagpuan ang pahina",
  description: "Walang ganitong pahina. Bumalik sa mga gabay sa Delta Executor sa deltaexecutor.com.ph.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="container mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-pink">404</p>
      <h1 className="mt-3 font-display text-4xl font-bold text-white md:text-5xl">Hindi natagpuan ang pahina</h1>
      <p className="mt-4 text-white/60">
        Nawawala o luma na ang URL na ito. Bumalik sa mga gabay sa Delta Executor para sa Android, iOS, at PC.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link href="/" className="bfv-outline-btn">
          Home
          <span aria-hidden="true">→</span>
        </Link>
        <Link href="/download-delta-executor" className="bfv-outline-btn bfv-outline-btn-muted">
          Gabay sa pag-download
        </Link>
      </div>
    </div>
  );
}