export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="flex flex-col items-center gap-6">
        <div className="relative w-12 h-12">
          <div
            className="absolute inset-0 border-2 border-[var(--color-surface-container-highest)] border-t-[var(--color-primary-container)] animate-spin"
            role="status"
            aria-label="Loading"
          />
        </div>
        <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">
          Loading
        </span>
      </div>
    </div>
  );
}
