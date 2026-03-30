"use client";

import type { Category } from "@/lib/products";

interface FilterChipsProps {
  categories: readonly string[];
  selected: Category;
  onSelect: (category: Category) => void;
}

export function FilterChips({ categories, selected, onSelect }: FilterChipsProps) {
  return (
    <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Filter by category">
      {categories.map((cat) => (
        <button
          key={cat}
          role="radio"
          aria-checked={selected === cat}
          onClick={() => onSelect(cat as Category)}
          className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-150 capitalize ${
            selected === cat
              ? "bg-[var(--color-secondary-container)] text-[var(--color-on-secondary-container)]"
              : "bg-[var(--color-surface-container)] text-[var(--color-on-surface-variant)] hover:bg-[var(--color-surface-container-high)]"
          }`}
        >
          {cat === "all" ? "All Items" : cat.charAt(0).toUpperCase() + cat.slice(1)}
        </button>
      ))}
    </div>
  );
}
