import Link from "next/link";

const navItems = [
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/info", label: "Info" },
  { href: "/cart", label: "Cart" },
];

export function Header() {
  return (
    <header className="border-b border-[rgba(42,24,16,0.16)] bg-transparent px-6 py-6 print:hidden">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6">
        <Link href="/" className="text-sm uppercase tracking-[0.38em] font-medium font-sans text-chocolate">
          Nude Ritual
        </Link>
        <nav className="flex flex-wrap gap-6 text-xs uppercase tracking-[0.32em] font-medium font-sans text-chocolate/80">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors duration-200 hover:text-hazelnut">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
