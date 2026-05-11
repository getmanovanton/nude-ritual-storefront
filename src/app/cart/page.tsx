import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function CartPage() {
  return (
    <div className="min-h-screen bg-vanilla text-chocolate">
      <Header />
      <main className="mx-auto max-w-5xl px-6 py-16">
        <section className="space-y-6">
          <p className="text-sm uppercase tracking-[0.32em] text-hazelnut">Cart</p>
          <h1 className="text-5xl font-serif italic leading-tight">Your Ritual Cart</h1>
          <p className="max-w-2xl text-base leading-8 text-chocolate/80">
            This is the place for your selected granola and nut butter. Cart functionality is coming soon as part of the Nude Ritual storefront.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
