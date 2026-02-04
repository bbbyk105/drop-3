"use client";

import Link from "next/link";

const navLinks = [
  { label: "SHOP ALL", href: "#" },
  { label: "BEST SELLERS", href: "#" },
  { label: "PRE-WORKOUT", href: "#" },
  { label: "HYDRATION", href: "#" },
  { label: "CREATINE", href: "#" },
  { label: "PROTEIN", href: "#" },
  { label: "WELLNESS", href: "#" },
];

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}

function AccountIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function CartIcon({ count = 0 }: { count?: number }) {
  return (
    <span className="relative inline-flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
        <path d="M3 6h18" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
      {count >= 0 && (
        <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-black px-1 text-[10px] font-medium text-white">
          {count}
        </span>
      )}
    </span>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center px-6 lg:px-8">
        {/* Logo - 左 */}
        <Link
          href="/"
          className="shrink-0 text-xl font-semibold uppercase tracking-tight text-black"
          style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
        >
          KAGED
        </Link>

        {/* Nav links - 中央（均等スペース） */}
        <nav
          className="flex flex-1 items-center justify-center gap-6 overflow-x-auto px-4 scrollbar-none sm:gap-8"
          aria-label="メイン"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="whitespace-nowrap text-sm font-medium uppercase tracking-wide text-black hover:opacity-70"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right icons - 右 */}
        <div className="flex shrink-0 items-center gap-6 text-black">
          <button
            type="button"
            className="p-1 hover:opacity-70"
            aria-label="検索"
          >
            <SearchIcon />
          </button>
          <Link
            href="#account"
            className="p-1 hover:opacity-70"
            aria-label="アカウント"
          >
            <AccountIcon />
          </Link>
          <Link
            href="#cart"
            className="relative p-1 hover:opacity-70"
            aria-label="カート（0点）"
          >
            <CartIcon count={0} />
          </Link>
        </div>
      </div>
    </header>
  );
}
