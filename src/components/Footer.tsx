import Image from "next/image";
import { FooterNav, ShareButton } from "./FooterClient";

export function Footer() {
  return (
    <footer
      className="bg-[#1A1C1E] w-full px-6 lg:px-8 py-16 mt-24 border-t border-[var(--color-primary-container)]/15"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-12 lg:grid-cols-[auto_1fr_auto] lg:gap-16">
        <div className="max-w-xs">
          <Image
            src="/images/ck-logo-transparent.png"
            alt="Christian Knuckleheads"
            width={200}
            height={80}
            className="h-20 w-auto mb-6"
          />
          <p className="font-[family-name:var(--font-body)] text-white/60">
            A community for those who know they&apos;re broken and aren&apos;t
            afraid to talk about it.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-16">
          <FooterNav />
          <div className="flex flex-col gap-4">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-primary)] font-[family-name:var(--font-body)] font-bold mb-2">
              Legal
            </span>
            <a
              href="#"
              className="text-white/60 hover:text-[var(--color-primary-container)] transition-colors font-[family-name:var(--font-body)]"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-[var(--color-primary-container)] transition-colors font-[family-name:var(--font-body)]"
            >
              Terms of Service
            </a>
            <a
              href="mailto:hello@christianknuckleheads.com"
              className="text-white/60 hover:text-[var(--color-primary-container)] transition-colors font-[family-name:var(--font-body)]"
            >
              Contact
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-primary)] font-[family-name:var(--font-body)] font-bold mb-2">
              Field Office
            </span>
            <span className="text-white/60 font-[family-name:var(--font-body)]">
              Nashville, Tennessee
            </span>
            <a
              href="mailto:hello@christianknuckleheads.com"
              className="text-white/60 hover:text-[var(--color-primary-container)] transition-colors font-[family-name:var(--font-body)]"
            >
              hello@christianknuckleheads.com
            </a>
          </div>
        </div>

        <div className="pt-8 lg:pt-0 border-t lg:border-t-0 border-white/5">
          <p className="font-[family-name:var(--font-body)] text-[10px] text-white/40 tracking-widest uppercase">
            &copy; {new Date().getFullYear()} Christian Knuckleheads. All Rights
            Reserved.
          </p>
          <div className="flex gap-4 mt-6">
            <ShareButton />
            <a
              href="mailto:hello@christianknuckleheads.com"
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
