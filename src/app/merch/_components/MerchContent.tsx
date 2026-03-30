"use client";

import { useState } from "react";
import { ProductCard } from "@/components/ui/ProductCard";
import { FilterChips } from "@/components/ui/FilterChips";
import { products, categories, type Category } from "@/lib/products";

export function MerchContent() {
  const [selected, setSelected] = useState<Category>("all");
  const filtered = selected === "all" ? products : products.filter((p) => p.category === selected);

  return (
    <div>
      <div className="mb-8">
        <FilterChips categories={categories} selected={selected} onSelect={setSelected} />
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
