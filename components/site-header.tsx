import Link from "next/link";

const links = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-[rgba(251,251,253,0.8)] backdrop-blur-xl saturate-150">
      <div className="mx-auto flex h-12 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link
          href="#"
          className="flex items-center gap-2 text-sm font-semibold text-[#1d1d1f]"
        >
          <LogoMark className="size-5" />
          VM AI Solutions
        </Link>
        <nav className="flex items-center gap-5 text-xs text-[#1d1d1f]/80 sm:gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-opacity hover:opacity-60"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function LogoMark({ className = "size-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect width="32" height="32" rx="8" fill="#1d1d1f" />
      <path
        d="M8 10l5 12 3-7 3 7 5-12"
        stroke="#f5f5f7"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
