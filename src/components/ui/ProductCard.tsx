"use client";

import Image from "next/image";
import type { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group bg-[var(--color-surface)] hover:bg-[var(--color-surface-container-high)] transition-colors duration-200 overflow-hidden">
      <div className="aspect-[3/4] bg-[var(--color-surface-container-low)] relative overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-all duration-700 saturate-[.7] group-hover:saturate-100 group-hover:scale-105"
        />
        <a
          href="#merch-newsletter-heading"
          className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <span className="bg-[var(--color-primary-container)] text-[var(--color-on-primary-container)] px-6 py-3 text-xs font-bold uppercase tracking-widest">
            Notify Me
          </span>
        </a>
      </div>
      <div className="p-4 lg:p-6">
        <h3 className="text-title-sm text-[var(--color-on-surface)]">
          {product.name}
        </h3>
        <p className="text-[10px] text-white/40 mt-1 uppercase tracking-widest">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-body-md font-semibold text-[var(--color-on-surface)]">
            ${product.price}
          </span>
          <span className="text-[10px] text-[var(--color-primary-container)] uppercase tracking-widest font-bold">
            Coming Soon
          </span>
        </div>
      </div>
    </article>
  );
}
