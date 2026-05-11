import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function InfoPage() {
  return (
    <div className="min-h-screen bg-vanilla text-chocolate">
      <Header />
      <main className="mx-auto max-w-5xl px-6 py-16">
        <section className="space-y-6">
          <p className="text-sm uppercase tracking-[0.32em] text-hazelnut">Info</p>
          <h1 className="text-5xl font-serif italic leading-tight">Delivery & Payment</h1>
          <p className="max-w-3xl text-base leading-8 text-chocolate/80">
            Shipping across Canada with care. Payment options are being prepared for the next stage of the Nude Ritual storefront.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
