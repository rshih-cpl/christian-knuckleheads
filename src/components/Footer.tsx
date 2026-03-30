import Link from "next/link";
import { NewsletterForm } from "@/components/ui/NewsletterForm";

export function Footer() {
  return (
    <footer
      className="bg-[var(--color-surface-container-low)] section-padding"
      role="contentinfo"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <p className="font-[family-name:var(--font-headline)] text-xl font-semibold text-[var(--color-on-surface)]">
              Knuckleheads
            </p>
            <p className="text-label-md mt-2">
              The Modern Manuscript &middot; Est. 2024
            </p>
            <div className="mt-6 max-w-sm" id="newsletter">
              <p className="text-body-md font-semibold text-[var(--color-on-surface)] mb-3">
                Join the Collective
              </p>
              <NewsletterForm compact />
            </div>
          </div>

          {/* Nav */}
          <nav aria-label="Footer navigation">
            <p className="text-title-sm text-[var(--color-on-surface)] mb-4">
              Navigate
            </p>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/books/daily-devotionals"
                  className="text-body-md text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-colors duration-150"
                >
                  Book
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-body-md text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-colors duration-150"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/merch"
                  className="text-body-md text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-colors duration-150"
                >
                  Merch
                </Link>
              </li>
            </ul>
          </nav>

          {/* Social */}
          <div>
            <p className="text-title-sm text-[var(--color-on-surface)] mb-4">
              Connect
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Follow on Instagram"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--color-surface-container)] text-[var(--color-on-surface-variant)] hover:bg-[var(--color-primary)] hover:text-[var(--color-on-primary)] transition-colors duration-200"
              >
                <span className="material-symbols-outlined text-xl" aria-hidden="true">
                  photo_camera
                </span>
              </a>
              <a
                href="#"
                aria-label="Follow on X (Twitter)"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--color-surface-container)] text-[var(--color-on-surface-variant)] hover:bg-[var(--color-primary)] hover:text-[var(--color-on-primary)] transition-colors duration-200"
              >
                <span className="material-symbols-outlined text-xl" aria-hidden="true">
                  tag
                </span>
              </a>
              <a
                href="#"
                aria-label="Follow on Facebook"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--color-surface-container)] text-[var(--color-on-surface-variant)] hover:bg-[var(--color-primary)] hover:text-[var(--color-on-primary)] transition-colors duration-200"
              >
                <span className="material-symbols-outlined text-xl" aria-hidden="true">
                  group
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Legal */}
        <div className="mt-12 pt-8 text-center">
          <p className="text-label-md">
            &copy; 2024&ndash;{new Date().getFullYear()} Christian Knuckleheads.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
