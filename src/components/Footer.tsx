import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer
      className="bg-[#1A1C1E] w-full px-6 lg:px-8 py-16 mt-24 border-t border-[#D32F2F]/15"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-xs">
          <Image
            src="/images/ck-logo.png"
            alt="Christian Knuckleheads"
            width={120}
            height={48}
            className="h-12 w-auto mb-6 mix-blend-lighten"
          />
          <p className="font-[family-name:var(--font-body)] text-white/60">
            A community for those who know they&apos;re broken and aren&apos;t
            afraid to talk about it.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-24 gap-y-12">
          <nav className="flex flex-col gap-4" aria-label="Footer resources">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-primary)] font-[family-name:var(--font-body)] font-bold mb-2">
              Resources
            </span>
            <Link
              href="/books/daily-devotionals"
              className="text-white/60 hover:text-[#D32F2F] transition-colors font-[family-name:var(--font-body)]"
            >
              The Book
            </Link>
            <Link
              href="/merch"
              className="text-white/60 hover:text-[#D32F2F] transition-colors font-[family-name:var(--font-body)]"
            >
              Merch
            </Link>
            <Link
              href="/about"
              className="text-white/60 hover:text-[#D32F2F] transition-colors font-[family-name:var(--font-body)]"
            >
              About
            </Link>
          </nav>
          <div className="flex flex-col gap-4">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-primary)] font-[family-name:var(--font-body)] font-bold mb-2">
              Legal
            </span>
            <a
              href="#"
              className="text-white/60 hover:text-[#D32F2F] transition-colors font-[family-name:var(--font-body)]"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-[#D32F2F] transition-colors font-[family-name:var(--font-body)]"
            >
              Terms of Service
            </a>
            <a
              href="mailto:hello@cknuckleheads.com"
              className="text-white/60 hover:text-[#D32F2F] transition-colors font-[family-name:var(--font-body)]"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="w-full md:w-auto pt-12 md:pt-0 border-t md:border-t-0 border-white/5">
          <p className="font-[family-name:var(--font-body)] text-[10px] text-white/40 tracking-widest uppercase">
            &copy; {new Date().getFullYear()} Christian Knuckleheads. All Rights
            Reserved.
          </p>
          <div className="flex gap-4 mt-6">
            <a
              href="#"
              aria-label="Share"
              className="w-10 h-10 border border-[var(--color-outline-variant)] flex items-center justify-center hover:bg-[var(--color-primary-container)] transition-colors cursor-pointer text-white/60 hover:text-white"
            >
              <span className="material-symbols-outlined text-sm">share</span>
            </a>
            <a
              href="mailto:hello@cknuckleheads.com"
              aria-label="Email"
              className="w-10 h-10 border border-[var(--color-outline-variant)] flex items-center justify-center hover:bg-[var(--color-primary-container)] transition-colors cursor-pointer text-white/60 hover:text-white"
            >
              <span className="material-symbols-outlined text-sm">mail</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
