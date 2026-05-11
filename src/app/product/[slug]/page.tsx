import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { products } from "@/data/products";

type Params = {
  params: {
    slug: string;
  };
};

export default function ProductPage({ params }: Params) {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-vanilla text-chocolate">
      <Header />
      <main className="mx-auto max-w-5xl px-6 py-16">
        <div className="space-y-6">
          <div className="flex flex-col gap-4">
            <p className="text-sm uppercase tracking-[0.32em] text-hazelnut">{product.category === "granola" ? "Granola" : "Nut Butter"}</p>
            <h1 className="text-5xl font-serif italic leading-tight">{product.name}</h1>
            <p className="max-w-2xl text-base leading-8 text-chocolate/80">{product.shortDescription}</p>
          </div>

          <div className="grid gap-6 rounded-[2rem] border border-[rgba(42,24,16,0.12)] bg-white/80 p-8 sm:grid-cols-[1.3fr_0.7fr]">
            <div className="space-y-5">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.32em] text-chocolate/70">Ingredients</p>
                <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-chocolate/80">
                  {product.ingredients.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.32em] text-chocolate/70">Allergens</p>
                <p className="text-sm leading-7 text-chocolate/80">{product.allergens.join(", ")}</p>
              </div>
            </div>
            <div className="space-y-6 rounded-3xl bg-[rgba(245,234,216,0.9)] p-6">
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-[0.32em] text-chocolate/70">Details</p>
                <p className="text-2xl font-semibold text-chocolate">${product.price.toFixed(2)}</p>
                <p className="text-sm text-chocolate/80">Weight: {product.weight}</p>
                <p className="text-sm text-hazelnut/90">{product.inStock ? "In stock" : "Sold out"}</p>
              </div>
              <Link
                href="/cart"
                className="inline-flex w-full items-center justify-center rounded-full border border-chocolate/15 bg-chocolate/95 px-6 py-3 text-sm uppercase tracking-[0.28em] text-vanilla transition-colors duration-200 hover:bg-hazelnut"
              >
                View Cart
              </Link>
            </div>
          </div>

          <Link href="/shop" className="text-sm uppercase tracking-[0.28em] text-hazelnut transition-colors duration-200 hover:text-chocolate">
            ← Back to shop
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
