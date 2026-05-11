import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-vanilla text-chocolate">
      <Header />
      <main className="mx-auto max-w-5xl px-6 py-16">
        <section className="space-y-6">
          <p className="text-sm uppercase tracking-[0.32em] text-hazelnut">About</p>
          <h1 className="text-5xl font-serif italic leading-tight">About Nude Ritual</h1>
          <p className="max-w-3xl text-base leading-8 text-chocolate/80">
            Nude Ritual is a small Canadian brand creating homemade granola and stone-ground nut butter in small batches. Our approach is simple: premium ingredients, slow baking, and thoughtful packaging for everyday ritual.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
