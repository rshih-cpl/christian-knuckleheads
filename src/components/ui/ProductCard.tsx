"use client";

import { useToast } from "@/components/Toast";
import { Button } from "@/components/ui/Button";
import type { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToast } = useToast();

  return (
    <article className="group bg-[var(--color-surface)] hover:bg-[var(--color-surface-container-low)] transition-colors duration-200 rounded-[4px] overflow-hidden">
      <div className="aspect-[3/4] bg-[var(--color-surface-container-low)] relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-[var(--color-outline)]">
          <span className="material-symbols-outlined text-5xl" aria-hidden="true">
            image
          </span>
        </div>
      </div>
      <div className="p-4 lg:p-6">
        <h3 className="text-title-sm text-[var(--color-on-surface)]">{product.name}</h3>
        <p className="text-label-md mt-1">{product.description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-body-md font-semibold text-[var(--color-on-surface)]">
            ${product.price}
          </span>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => addToast(`${product.name} added to bag`)}
          >
            Add to Bag
          </Button>
        </div>
      </div>
    </article>
  );
}
