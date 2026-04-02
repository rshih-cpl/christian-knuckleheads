"use client";

import { useState, useMemo } from "react";
import { ProductCard } from "@/components/ui/ProductCard";
import { FilterChips } from "@/components/ui/FilterChips";
import { products, categories, type Category } from "@/lib/products";

export function MerchContent() {
  const [selected, setSelected] = useState<Category>("all");
  const filtered = selected === "all" ? products : products.filter((p) => p.category === selected);

  const counts = useMemo(() => {
    const map: Partial<Record<Category, number>> = { all: products.length };
    for (const p of products) {
      map[p.category] = (map[p.category] ?? 0) + 1;
    }
    return map;
  }, []);

  return (
    <div>
      <div className="mb-8">
        <FilterChips
          categories={categories}
          selected={selected}
          onSelect={setSelected}
          counts={counts}
        />
      </div>
      <div
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        aria-live="polite"
      >
        {filtered.length > 0 ? (
          filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div
            className="col-span-full text-center py-16 text-[var(--color-secondary)]"
            role="status"
          >
            <span
              className="material-symbols-outlined text-4xl mb-4 block text-[var(--color-primary-container)]"
              aria-hidden="true"
            >
              inventory_2
            </span>
            <p className="font-[family-name:var(--font-headline)] text-xl italic">
              No products in this category yet.
            </p>
            <p className="text-sm mt-2">
              More items coming soon.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
