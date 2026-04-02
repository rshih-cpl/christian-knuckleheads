"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/", icon: "home", label: "Home", fillWhenActive: true },
  { href: "/books/daily-devotionals", icon: "menu_book", label: "Book", fillWhenActive: false },
  { href: "/merch", icon: "store", label: "Merch", fillWhenActive: false },
  { href: "/about", icon: "info", label: "About", fillWhenActive: false },
];

export function BottomNav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-3 bg-[var(--color-surface)]/90 backdrop-blur-xl z-50 border-t border-[#D32F2F]/15"
      aria-label="Mobile navigation"
    >
      {tabs.map((tab) => {
        const active = isActive(tab.href);
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`flex flex-col items-center justify-center ${
              active ? "text-[#D32F2F] font-bold" : "text-white/50"
            }`}
          >
            <span
              className="material-symbols-outlined"
              style={
                active && tab.fillWhenActive
                  ? { fontVariationSettings: "'FILL' 1" }
                  : undefined
              }
            >
              {tab.icon}
            </span>
            <span className="font-[family-name:var(--font-body)] text-[10px] uppercase tracking-widest mt-1">
              {tab.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
