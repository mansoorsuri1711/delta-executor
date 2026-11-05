"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-muted px-4 text-white">
      <h2 className="mb-3 font-display text-2xl font-bold">Bir hata oluştu</h2>
      <p className="mb-6 max-w-md text-center text-white/65">
        Lütfen tekrar deneyin. Sorun devam ederse sayfayı yenileyin.
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="rounded-xl bg-teal px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
      >
        Tekrar dene
      </button>
    </div>
  );
}
