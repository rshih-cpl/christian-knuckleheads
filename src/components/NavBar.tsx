"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/books/daily-devotionals", label: "Book" },
  { href: "/about", label: "About" },
  { href: "/merch", label: "Merch" },
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
      <header className="sticky top-0 z-50 glass" role="banner">
        <nav
          className="container-site flex items-center justify-between h-16 lg:h-20"
          role="navigation"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="font-[family-name:var(--font-headline)] text-xl lg:text-2xl font-semibold text-[var(--color-on-surface)] hover:text-[var(--color-primary)] transition-colors duration-150"
          >
            Knuckleheads
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`text-body-md transition-colors duration-150 ${
                  isActive(link.href)
                    ? "text-[var(--color-primary)] font-semibold"
                    : "text-[var(--color-on-surface)] hover:text-[var(--color-primary)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#newsletter"
              className="px-5 py-2.5 bg-[var(--color-primary)] text-[var(--color-on-primary)] text-sm font-semibold rounded-[4px] hover:bg-[var(--color-primary-container)] transition-colors duration-150"
            >
              Subscribe
            </Link>
          </div>

          {/* Hamburger button */}
          <button
            ref={hamburgerRef}
            className="lg:hidden p-2 text-[var(--color-on-surface)] hover:text-[var(--color-on-surface-variant)]"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {isOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </nav>
      </header>

      {/* Mobile menu — rendered outside header to avoid sticky context issues */}
      {isOpen && (
        <div
          id="mobile-menu"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="fixed inset-0 z-[60] lg:hidden"
        >
          {/* Backdrop — tap to close */}
          <div
            className="absolute inset-0 bg-[var(--color-surface)]/95 backdrop-blur-md"
            onClick={closeMenu}
            aria-hidden="true"
          />

          {/* Close button pinned top-right */}
          <button
            className="absolute top-4 right-4 z-10 p-3 text-[var(--color-on-surface)]"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>

          {/* Nav links */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full gap-10 px-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`text-2xl font-[family-name:var(--font-headline)] transition-colors duration-150 ${
                  isActive(link.href)
                    ? "text-[var(--color-primary)] font-semibold"
                    : "text-[var(--color-on-surface)] hover:text-[var(--color-primary)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#newsletter"
              onClick={closeMenu}
              className="mt-4 px-10 py-3.5 bg-[var(--color-primary)] text-[var(--color-on-primary)] text-lg font-semibold rounded-[4px] hover:bg-[var(--color-primary-container)] transition-colors duration-150"
            >
              Subscribe
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
