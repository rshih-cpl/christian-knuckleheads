"use client";

import type { Category } from "@/lib/products";

interface FilterChipsProps {
  categories: readonly Category[];
  selected: Category;
  onSelect: (category: Category) => void;
}

export function FilterChips({
  categories,
  selected,
  onSelect,
}: FilterChipsProps) {
  return (
    <div
      className="flex flex-wrap gap-2"
      role="radiogroup"
      aria-label="Filter by category"
    >
      {categories.map((cat) => (
        <button
          key={cat}
          role="radio"
          aria-checked={selected === cat}
          onClick={() => onSelect(cat)}
          className={`px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-all ${
            selected === cat
              ? "bg-[var(--color-primary-container)] text-[var(--color-on-primary-container)]"
              : "bg-[var(--color-surface-container-high)] text-white/60 hover:text-white hover:bg-[var(--color-surface-container-highest)]"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
