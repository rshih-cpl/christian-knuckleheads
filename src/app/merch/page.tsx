import type { Metadata } from "next";
import { NewsletterForm } from "@/components/ui/NewsletterForm";
import { MerchContent } from "./_components/MerchContent";

export const metadata: Metadata = {
  title: "Coming Soon | Merch Store",
  description:
    "Garments designed for the journey. Ball caps, tees, polos, and pullovers for the faithful knucklehead. Coming soon.",
};

export default function MerchPage() {
  return (
    <>
      <section
        className="bg-[var(--color-surface)] section-padding"
        aria-labelledby="merch-hero-heading"
      >
        <div className="container-site">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:gap-12">
            <div className="w-full lg:w-2/3">
              <div className="field-tag mb-4">
                <span className="text-title-sm text-[var(--color-primary)]">
                  Coming Soon
                </span>
              </div>
              <h1
                id="merch-hero-heading"
                className="font-[family-name:var(--font-headline)] text-[2.5rem] md:text-[5rem] leading-[0.95] font-extrabold italic"
              >
                Sacred Essentials.
              </h1>
              <p className="text-body-lg mt-6 max-w-prose-custom text-[var(--color-secondary)]">
                We&apos;re launching with a limited first collection—ball caps,
                tees, polos, and a 3/4 zip pullover. Sign up below to be first
                in line when the store drops.
              </p>
            </div>
            <div className="w-full lg:w-1/3 bg-[var(--color-primary-container)]/10 border-l-4 border-[var(--color-primary-container)] p-8">
              <span className="material-symbols-outlined text-[var(--color-primary-container)] text-3xl mb-3 block">
                schedule
              </span>
              <p className="font-[family-name:var(--font-headline)] text-xl italic mb-2">
                Store opening soon
              </p>
              <p className="text-sm text-[var(--color-secondary)]">
                Subscribe to get notified the moment our limited collection goes
                live.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-[var(--color-surface-container-low)] section-padding"
        aria-labelledby="products-heading"
      >
        <div className="container-site">
          <div className="flex items-center justify-between mb-8">
            <h2
              id="products-heading"
              className="font-[family-name:var(--font-headline)] text-2xl md:text-3xl italic"
            >
              Preview the Collection
            </h2>
            <span className="text-title-sm text-[var(--color-primary-container)] tracking-widest">
              Coming Soon
            </span>
          </div>
          <MerchContent />
        </div>
      </section>

      <section
        className="bg-[var(--color-surface)] section-padding"
        aria-labelledby="merch-newsletter-heading"
      >
        <div className="container-site">
          <div className="mx-auto max-w-4xl text-center">
            <span
              className="material-symbols-outlined mb-6 block text-5xl text-[var(--color-primary-container)]"
              aria-hidden="true"
            >
              notifications_active
            </span>
            <h2
              id="merch-newsletter-heading"
              className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl mb-8"
            >
              Be the first to know.
            </h2>
            <p className="text-[var(--color-secondary)] mb-12 max-w-xl mx-auto">
              Drop your email and we&apos;ll notify you the moment the store
              opens. Early subscribers get first access to the limited run.
            </p>
            <div className="max-w-2xl mx-auto">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
