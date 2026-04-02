interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
}

export function TestimonialCard({ quote, name, role }: TestimonialCardProps) {
  return (
    <blockquote className="bg-[var(--color-surface-container)] p-6 lg:p-8 border-l-4 border-[var(--color-primary-container)]">
      <p className="text-body-lg text-[var(--color-on-surface)] italic">
        &ldquo;{quote}&rdquo;
      </p>
      <footer className="mt-4">
        <p className="text-sm font-semibold text-[var(--color-on-surface)]">
          &mdash; {name}
        </p>
        <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1">
          {role}
        </p>
      </footer>
    </blockquote>
  );
}
