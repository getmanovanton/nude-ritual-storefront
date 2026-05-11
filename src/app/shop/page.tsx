import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { products } from "@/data/products";

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-vanilla text-chocolate">
      <Header />
      <main className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16">
        <section className="space-y-4">
          <p className="text-sm uppercase tracking-[0.32em] text-hazelnut">Catalog</p>
          <h1 className="text-4xl font-serif italic leading-tight">Shop our small-batch collection</h1>
          <p className="max-w-2xl text-base leading-8 text-chocolate/80">
            Browse handcrafted granola and nut butter blends made slowly in Canada, with simple ingredients and premium flavor.
          </p>
        </section>

        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.slug}`}
              className="rounded-3xl border border-[rgba(42,24,16,0.12)] bg-white/80 p-6 transition-colors duration-200 hover:border-hazelnut/40 hover:bg-[rgba(245,234,216,0.75)]"
            >
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.3em] text-chocolate/70">{product.category === "granola" ? "Granola" : "Nut Butter"}</p>
                <h2 className="text-2xl font-serif italic leading-tight">{product.name}</h2>
                <p className="text-sm leading-7 text-chocolate/75">{product.shortDescription}</p>
                <div className="flex items-center justify-between pt-4 text-sm text-chocolate/80">
                  <span>{product.weight}</span>
                  <span>${product.price.toFixed(2)}</span>
                </div>
                <p className="text-xs uppercase tracking-[0.28em] text-hazelnut/90">{product.inStock ? "In stock" : "Sold out"}</p>
              </div>
            </Link>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
