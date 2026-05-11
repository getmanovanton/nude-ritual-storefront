import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-vanilla text-chocolate">
      <Header />
      <main className="flex min-h-[calc(100vh-6rem)] flex-col items-center justify-center px-6 py-20 text-center sm:px-10">
        <h1 className="max-w-4xl text-5xl font-serif italic leading-tight sm:text-6xl">Nude Ritual</h1>
        <p className="mt-6 max-w-2xl text-base uppercase tracking-[0.35em] text-chocolate/80 sm:text-sm">
          Slow-baked granola, stone-ground butter
        </p>
        <Link
          href="/shop"
          className="mt-12 inline-flex rounded-full border border-chocolate/15 bg-chocolate px-8 py-4 text-sm uppercase tracking-[0.28em] text-vanilla transition-colors duration-200 hover:bg-hazelnut"
        >
          Explore the Ritual
        </Link>
      </main>
      <Footer />
    </div>
  );
}
