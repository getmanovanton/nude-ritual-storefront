export function Footer() {
  return (
    <footer className="border-t border-[rgba(42,24,16,0.16)] bg-transparent px-6 py-8">
      <div className="mx-auto max-w-6xl space-y-3 text-sm leading-6 text-chocolate/80">
        <p>© {new Date().getFullYear()} Nude Ritual. All rights reserved.</p>
        <p>Made in Canada</p>
      </div>
    </footer>
  );
}
