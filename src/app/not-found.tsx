import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you requested does not exist. Return to Anagram Generator.",
};

export default function NotFound() {
  return (
    <div className="container mx-auto flex max-w-xl flex-col items-center px-4 py-20 text-center">
      <h1 className="font-display text-4xl font-bold text-ink">404</h1>
      <p className="mt-4 text-lg text-ink/70">
        That page no longer exists or never did. Head back to the Anagram Generator to rearrange
        your next word.
      </p>
      <Link
        href="/"
        className="pink-gradient-btn mt-8 inline-flex rounded-xl px-5 py-3 text-sm font-semibold text-white"
      >
        Back to generator
      </Link>
    </div>
  );
}
