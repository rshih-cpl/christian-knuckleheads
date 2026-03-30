"use client";

import { ProductCard } from "@/components/ui/ProductCard";
import { products } from "@/lib/products";

export function MerchPreview() {
  const preview = products.slice(0, 3);

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {preview.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
