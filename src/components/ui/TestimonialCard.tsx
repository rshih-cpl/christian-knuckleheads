interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
}

export function TestimonialCard({ quote, name, role }: TestimonialCardProps) {
  return (
    <blockquote className="bg-[var(--color-surface-container-low)] p-6 lg:p-8 rounded-[4px]">
      <p className="text-body-lg text-[var(--color-on-surface)] italic">
        &ldquo;{quote}&rdquo;
      </p>
      <footer className="mt-4">
        <p className="text-body-md font-semibold text-[var(--color-on-surface)]">
          &mdash; {name}
        </p>
        <p className="text-label-md">{role}</p>
      </footer>
    </blockquote>
  );
}
