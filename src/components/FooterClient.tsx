"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const footerLinks = [
  { href: "/books/daily-devotionals", label: "The Book" },
  { href: "/merch", label: "Merch" },
  { href: "/about", label: "About" },
];

export function FooterNav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="flex flex-col gap-4" aria-label="Footer resources">
      <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-primary)] font-[family-name:var(--font-body)] font-bold mb-2">
        Resources
      </span>
      {footerLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          aria-current={isActive(link.href) ? "page" : undefined}
          className={`transition-colors font-[family-name:var(--font-body)] ${
            isActive(link.href)
              ? "text-[var(--color-primary-container)]"
              : "text-white/60 hover:text-[var(--color-primary-container)]"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

export function ShareButton() {
  const handleShare = async () => {
    const shareData = {
      title: "Christian Knuckleheads",
      text: "Real faith for real people who mess up.",
      url: window.location.origin,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.url);
      }
    } catch {
      // User cancelled or clipboard failed -- no action needed
    }
  };

  return (
    <button
      onClick={handleShare}
      aria-label="Share this site"
      className="w-10 h-10 border border-[var(--color-outline-variant)] flex items-center justify-center hover:bg-[var(--color-primary-container)] transition-colors cursor-pointer text-white/60 hover:text-white"
    >
      <span className="material-symbols-outlined text-sm">share</span>
    </button>
  );
}
