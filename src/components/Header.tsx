import Link from "next/link";
import Image from "next/image";

const navItems = [
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/info", label: "Info" },
  { href: "/cart", label: "Cart" },
];

export function Header() {
  return (
    <header className="border-b border-vanilla/20 bg-chocolate px-6 py-0 print:hidden">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6">
        <Link href="/">
          <Image
            src="/logo-cream.png"
            alt="Nude Ritual"
            width={1024}
            height={1024}
            priority
            className="h-48 w-[260px] object-contain md:h-60 md:w-[320px]"
          />
        </Link>
        <nav className="flex flex-wrap gap-6 text-xs uppercase tracking-[0.32em] font-medium font-sans text-vanilla/80">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors duration-200 hover:text-vanilla">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
