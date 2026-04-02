"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex items-center justify-center min-h-[60vh] px-6">
      <div className="max-w-md text-center">
        <span
          className="material-symbols-outlined text-5xl text-[var(--color-primary-container)] mb-6 block"
          aria-hidden="true"
        >
          error_outline
        </span>
        <h2 className="font-[family-name:var(--font-headline)] text-3xl italic mb-4">
          Something went wrong.
        </h2>
        <p className="text-[var(--color-secondary)] mb-8">
          {error.message || "An unexpected error occurred. Please try again."}
        </p>
        <button
          onClick={reset}
          className="bg-[var(--color-primary-container)] text-[var(--color-on-primary-container)] px-8 py-4 font-bold uppercase tracking-widest text-sm hover:brightness-110 transition-all"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
