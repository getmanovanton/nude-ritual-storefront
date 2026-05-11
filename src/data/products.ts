export type Product = {
  id: string;
  slug: string;
  name: string;
  category: "granola" | "nut-butter";
  price: number;
  weight: string;
  shortDescription: string;
  ingredients: string[];
  allergens: string[];
  image: string;
  inStock: boolean;
};

export const products: Product[] = [
  {
    id: "granola-cacao-hazelnut",
    slug: "cacao-hazelnut",
    name: "Cacao & Hazelnut",
    category: "granola",
    price: 18,
    weight: "350g",
    shortDescription: "Dark chocolate nibs and toasted hazelnuts in a crunchy oat blend.",
    ingredients: ["Rolled oats", "Hazelnuts", "Cacao nibs", "Maple syrup", "Coconut oil"],
    allergens: ["Tree nuts", "Oats"],
    image: "/products/cacao-hazelnut.jpg",
    inStock: true,
  },
  {
    id: "granola-vanilla-almond",
    slug: "vanilla-almond",
    name: "Vanilla & Almond",
    category: "granola",
    price: 17,
    weight: "350g",
    shortDescription: "Warm vanilla and crunchy almonds baked to golden perfection.",
    ingredients: ["Rolled oats", "Almonds", "Vanilla bean", "Maple syrup", "Coconut oil"],
    allergens: ["Tree nuts", "Oats"],
    image: "/products/vanilla-almond.jpg",
    inStock: true,
  },
  {
    id: "granola-maple-pecan",
    slug: "maple-pecan",
    name: "Maple & Pecan",
    category: "granola",
    price: 20,
    weight: "350g",
    shortDescription: "Maple sweetness with buttery pecans in a small-batch recipe.",
    ingredients: ["Rolled oats", "Pecans", "Maple syrup", "Brown sugar", "Sea salt"],
    allergens: ["Tree nuts", "Oats"],
    image: "/products/maple-pecan.jpg",
    inStock: true,
  },
  {
    id: "butter-dark-cacao-hazelnut",
    slug: "dark-cacao-hazelnut-butter",
    name: "Dark Cacao Hazelnut Butter",
    category: "nut-butter",
    price: 16,
    weight: "220g",
    shortDescription: "Stone-ground hazelnuts with deep cacao for a rich spread.",
    ingredients: ["Hazelnuts", "Cocoa powder", "Maple syrup", "Sea salt"],
    allergens: ["Tree nuts"],
    image: "/products/dark-cacao-hazelnut.jpg",
    inStock: true,
  },
  {
    id: "butter-almond-vanilla",
    slug: "almond-vanilla-butter",
    name: "Almond Vanilla Butter",
    category: "nut-butter",
    price: 15,
    weight: "220g",
    shortDescription: "Creamy almond butter finished with fragrant vanilla.",
    ingredients: ["Almonds", "Vanilla bean", "Maple syrup", "Sea salt"],
    allergens: ["Tree nuts"],
    image: "/products/almond-vanilla.jpg",
    inStock: true,
  },
  {
    id: "butter-pecan-maple",
    slug: "pecan-maple-butter",
    name: "Pecan Maple Butter",
    category: "nut-butter",
    price: 18,
    weight: "220g",
    shortDescription: "Roasted pecans blended with Canadian maple for a smooth finish.",
    ingredients: ["Pecans", "Maple syrup", "Sea salt"],
    allergens: ["Tree nuts"],
    image: "/products/pecan-maple.jpg",
    inStock: false,
  },
];
