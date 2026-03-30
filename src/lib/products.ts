export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "hats" | "hoodies" | "t-shirts" | "polos" | "journals";
  imagePlaceholder: string;
}

export const products: Product[] = [
  {
    id: "sacred-anchor-hoodie",
    name: "The Sacred Anchor Hoodie",
    description: "Heavyweight organic cotton in Deep Navy",
    price: 78,
    category: "hoodies",
    imagePlaceholder: "/images/placeholder-hoodie.jpg",
  },
  {
    id: "knucklehead-cap",
    name: "Knucklehead Cap",
    description: "Terra-cotta brushed twill",
    price: 32,
    category: "hats",
    imagePlaceholder: "/images/placeholder-cap.jpg",
  },
  {
    id: "foundation-tee",
    name: "Foundation Tee",
    description: "Stone White / Boxy Fit",
    price: 42,
    category: "t-shirts",
    imagePlaceholder: "/images/placeholder-tee.jpg",
  },
  {
    id: "archive-polo",
    name: "The Archive Polo",
    description: "Fine knit cotton in Midnight",
    price: 64,
    category: "polos",
    imagePlaceholder: "/images/placeholder-polo.jpg",
  },
  {
    id: "grace-mistakes-hoodie",
    name: "Grace > Mistakes Hoodie",
    description: "Heavyweight warmth for long nights of wrestling with questions",
    price: 64,
    category: "hoodies",
    imagePlaceholder: "/images/placeholder-hoodie-2.jpg",
  },
  {
    id: "vesper-hoodie",
    name: "Vesper Hoodie",
    description: "Heavyweight French Terry",
    price: 78,
    category: "hoodies",
    imagePlaceholder: "/images/placeholder-hoodie-3.jpg",
  },
  {
    id: "scribblers-journal",
    name: "The Scribbler's Journal",
    description: "For honest thoughts, messy prayers, and the occasional grocery list",
    price: 42,
    category: "journals",
    imagePlaceholder: "/images/placeholder-journal.jpg",
  },
];

export const categories = ["all", "hats", "hoodies", "t-shirts", "polos", "journals"] as const;
export type Category = (typeof categories)[number];
