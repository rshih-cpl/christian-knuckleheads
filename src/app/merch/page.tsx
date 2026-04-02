import type { Metadata } from "next";
import { NewsletterForm } from "@/components/ui/NewsletterForm";
import { MerchContent } from "./_components/MerchContent";

export const metadata: Metadata = {
  title: "Sacred Essentials | Merch Store",
  description:
    "Garments designed for the journey. Hats, hoodies, tees, and polos for the faithful knucklehead.",
};

const visionSteps = [
  {
    id: "foundation",
    num: "01",
    title: "Foundation",
    body: "Establish a digital sanctuary where the Knucklehead philosophy—humility through grace—is accessible to all seekers.",
  },
  {
    id: "community",
    num: "02",
    title: "Community",
    body: "Launch the Sacred Circles local gatherings to move beyond digital connection into real-world fellowship.",
  },
  {
    id: "impact",
    num: "03",
    title: "Impact",
    body: "Channel 15% of all Sacred Essentials proceeds into literary literacy programs in underserved parishes.",
  },
] as const;

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
                  Curated Collection
                </span>
              </div>
              <h1
                id="merch-hero-heading"
                className="font-[family-name:var(--font-headline)] text-[2.5rem] md:text-[5rem] leading-[0.95] font-extrabold italic"
              >
                Sacred Essentials.
              </h1>
              <p className="text-body-lg mt-6 max-w-prose-custom text-[var(--color-secondary)]">
                Garments designed for the journey—balancing the weight of
                tradition with the comfort of everyday life.
              </p>
            </div>
            <blockquote className="w-full bg-[var(--color-surface-container)] p-8 lg:w-1/3 border-l-4 border-[var(--color-primary-container)]">
              <p className="text-body-lg italic text-[var(--color-secondary)]">
                &ldquo;This isn&apos;t just merch. It&apos;s a reminder of who
                we are: stumbling seekers, anchored in grace.&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      <section
        className="bg-[var(--color-surface-container-low)] section-padding"
        aria-labelledby="products-heading"
      >
        <div className="container-site">
          <h2 id="products-heading" className="sr-only">
            Sacred Essentials product catalog
          </h2>
          <MerchContent />
        </div>
      </section>

      <section
        className="bg-[var(--color-surface)] section-padding"
        aria-labelledby="vision-heading"
      >
        <div className="container-site">
          <h2
            id="vision-heading"
            className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl font-bold italic"
          >
            Beyond the Garment: The 12-Month Vision.
          </h2>
          <ol className="mt-12 grid list-none grid-cols-1 gap-12 p-0 lg:grid-cols-3 lg:gap-10">
            {visionSteps.map((step) => (
              <li key={step.id} className="flex flex-col gap-4">
                <span
                  className="font-[family-name:var(--font-headline)] text-5xl font-bold italic text-[var(--color-secondary)]/20"
                  aria-hidden="true"
                >
                  {step.num}
                </span>
                <div>
                  <h3 className="text-title-sm text-[var(--color-primary-container)]">
                    {step.title}
                  </h3>
                  <p className="text-body-md mt-3 text-[var(--color-secondary)]">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <blockquote className="mt-12 bg-[var(--color-surface-container)] p-8 lg:mt-16 lg:p-10 border-l-4 border-[var(--color-primary-container)]">
            <p className="font-[family-name:var(--font-headline)] text-xl md:text-2xl italic leading-relaxed text-[var(--color-primary)]">
              &ldquo;We aren&apos;t building a brand; we&apos;re rediscovering a
              way of being.&rdquo;
            </p>
            <footer className="text-[10px] text-white/40 mt-4 font-bold uppercase tracking-widest">
              — The Author
            </footer>
          </blockquote>
        </div>
      </section>

      <section
        className="bg-[var(--color-surface-container-low)] section-padding"
        aria-labelledby="merch-newsletter-heading"
      >
        <div className="container-site">
          <div className="mx-auto max-w-4xl text-center">
            <span
              className="material-symbols-outlined mb-6 block text-5xl text-[var(--color-primary-container)]"
              aria-hidden="true"
            >
              auto_stories
            </span>
            <h2
              id="merch-newsletter-heading"
              className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl mb-8"
            >
              Join the Inner Circle
            </h2>
            <p className="text-[var(--color-secondary)] mb-12 max-w-xl mx-auto">
              Get early access to drops, exclusive devotional content, and a
              direct line to our editorial team.
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
