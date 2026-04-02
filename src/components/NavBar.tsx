"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/books/daily-devotionals", label: "The Book" },
  { href: "/merch", label: "Merch" },
  { href: "/about", label: "About" },
];

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    hamburgerRef.current?.focus();
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu();
        return;
      }
      if (e.key === "Tab" && menuRef.current) {
        const focusable = menuRef.current.querySelectorAll<HTMLElement>(
          'a, button, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeMenu]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-surface)] transition-colors duration-300"
        role="banner"
      >
        <nav
          className="flex items-center justify-between w-full px-6 lg:px-8 py-6"
          role="navigation"
          aria-label="Main navigation"
        >
          <Link href="/" className="shrink-0">
            <Image
              src="/images/ck-logo-transparent.png"
              alt="Christian Knuckleheads"
              width={320}
              height={128}
              className="h-28 lg:h-32 w-auto"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`text-lg font-[family-name:var(--font-headline)] tracking-tight transition-colors duration-300 ${
                  isActive(link.href)
                    ? "text-[var(--color-primary-container)] border-b-2 border-[var(--color-primary-container)] pb-1"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            ref={hamburgerRef}
            className="md:hidden p-2 text-white/70 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {isOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </nav>
      </header>

      {/* Spacer for fixed nav */}
      <div className="h-[140px] lg:h-[160px]" />

      {isOpen && (
        <div
          id="mobile-menu"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="fixed inset-0 z-[60] md:hidden"
        >
          <div
            className="absolute inset-0 bg-[var(--color-surface)]/95 backdrop-blur-md"
            onClick={closeMenu}
            aria-hidden="true"
          />

          <button
            className="absolute top-4 right-4 z-10 p-3 text-white"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>

          <div className="relative z-10 flex flex-col items-center justify-center h-full gap-10 px-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`text-2xl font-[family-name:var(--font-headline)] tracking-tight transition-colors duration-300 ${
                  isActive(link.href)
                    ? "text-[var(--color-primary-container)] font-bold"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
