import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { books, getBook } from "@/lib/books";
import { OrderForm } from "./_components/OrderForm";

const btnFocus =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]";

const primaryLink =
  `inline-flex items-center justify-center font-semibold rounded-[4px] transition-colors duration-150 ${btnFocus} bg-[var(--color-primary)] text-[var(--color-on-primary)] hover:bg-[var(--color-primary-container)] px-8 py-3 text-base`;

const secondaryLink =
  `inline-flex items-center justify-center font-semibold rounded-[4px] transition-colors duration-150 ${btnFocus} bg-[var(--color-surface-container-high)] text-[var(--color-primary)] hover:bg-[var(--color-surface-container-highest)] px-8 py-3 text-base`;

const retailerLink =
  `inline-flex w-full lg:w-auto lg:flex-1 min-w-0 items-center justify-center gap-2 font-semibold rounded-[4px] transition-colors duration-150 ${btnFocus} bg-[var(--color-surface-container-high)] text-[var(--color-primary)] hover:bg-[var(--color-surface-container-highest)] px-5 py-3 text-sm`;

export async function generateStaticParams() {
  return Object.keys(books).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const book = getBook(slug);
  if (!book) return {};
  return {
    title: book.title,
    description: book.description,
  };
}

export default async function BookPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const book = getBook(slug);
  if (!book) notFound();

  const priceFormatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(book.price);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Book",
          name: book.title,
          description: book.description,
          author: {
            "@type": "Person",
            name: "Mitch",
          },
          offers: {
            "@type": "Offer",
            price: book.price,
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
          },
        }}
      />
      {/* Hero */}
      <section className="bg-[var(--color-surface)] section-padding">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <span className="text-title-sm text-[var(--color-secondary)] block mb-4">New Release</span>
              <h1 className="text-display-lg text-[var(--color-primary)] italic mb-6">{book.title}</h1>
              <p className="text-body-lg text-[var(--color-on-surface-variant)] max-w-xl mb-8">{book.description}</p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                <Link href="#direct-purchase" className={primaryLink}>
                  Order Direct Edition
                </Link>
                <Link href="#retailers" className={secondaryLink}>
                  Find Online
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 order-1 lg:order-2 relative mx-auto w-full max-w-[280px] lg:max-w-none">
              <div
                className="absolute inset-0 bg-[var(--color-secondary-container)] rounded-[4px] -z-0 translate-y-3 -translate-x-3 opacity-90"
                aria-hidden
              />
              <div
                className="relative z-10 aspect-[3/4] rounded-[4px] bg-[var(--color-surface-container-high)] shadow-ambient flex flex-col items-center justify-center gap-3 p-8 text-center"
                role="img"
                aria-label="Book cover placeholder"
              >
                <span className="material-symbols-outlined text-5xl text-[var(--color-primary)]" aria-hidden="true">
                  menu_book
                </span>
                <span className="text-headline-sm text-[var(--color-primary)] italic leading-tight">{book.title}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[var(--color-surface-container-low)] section-padding">
        <div className="container-site">
          <h2 className="text-headline-md text-[var(--color-primary)] italic text-center mb-10 lg:mb-14">
            Praise for the book
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {book.testimonials.map((t) => (
              <TestimonialCard key={`${t.name}-${t.role}`} quote={t.quote} name={t.name} role={t.role} />
            ))}
          </div>
        </div>
      </section>

      {/* Book details */}
      <section className="bg-[var(--color-surface)] section-padding">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h2 className="text-headline-md text-[var(--color-primary)] italic mb-6">{book.subtitle}</h2>
              <p className="text-body-lg text-[var(--color-on-surface-variant)] italic max-w-prose-custom">
                {book.description}
              </p>
            </div>
            <div>
              <p className="text-title-sm text-[var(--color-secondary)] mb-6">Inside the Pages</p>
              <ul className="grid grid-cols-1 gap-4 sm:gap-5">
                {book.features.map((f) => (
                  <li
                    key={f.title}
                    className="rounded-[4px] bg-[var(--color-surface-container)] p-6 shadow-ambient"
                  >
                    <div className="flex gap-4">
                      <span
                        className="material-symbols-outlined text-3xl text-[var(--color-secondary)] shrink-0"
                        aria-hidden="true"
                      >
                        {f.icon}
                      </span>
                      <div>
                        <h3 className="text-body-md font-semibold text-[var(--color-primary)]">{f.title}</h3>
                        <p className="text-body-md text-[var(--color-on-surface-variant)] mt-1">{f.description}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Retailers */}
      <section
        id="retailers"
        className="bg-[var(--color-surface-container-low)] section-padding scroll-mt-24"
        aria-labelledby="retailers-heading"
      >
        <div className="container-site">
          <h2 id="retailers-heading" className="text-headline-md text-[var(--color-primary)] italic text-center mb-10">
            Buy Online
          </h2>
          <div className="flex flex-col lg:flex-row lg:flex-wrap gap-3 lg:gap-4 lg:justify-center">
            {book.retailers.map((r) => (
              <a
                key={r.name}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                data-retailer={r.name}
                className={retailerLink}
              >
                <span className="material-symbols-outlined shrink-0" aria-hidden="true">
                  {r.icon}
                </span>
                <span className="truncate">{r.name}</span>
                <span className="material-symbols-outlined text-lg shrink-0" aria-hidden="true">
                  open_in_new
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Direct purchase */}
      <section
        id="direct-purchase"
        className="bg-[var(--color-surface)] section-padding scroll-mt-24"
        aria-labelledby="direct-heading"
      >
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h2 id="direct-heading" className="text-headline-md text-[var(--color-primary)] italic mb-6">
                Autographed Direct Edition
              </h2>
              <p className="text-body-md text-[var(--color-on-surface-variant)] mb-8 max-w-prose-custom">
                Get a personally signed copy delivered directly from the author. Each direct order includes a handwritten
                note of encouragement for your own journey.
              </p>
              <div className="rounded-[4px] bg-[var(--color-surface-container-low)] p-6 lg:p-8 mb-8">
                <p className="text-title-sm text-[var(--color-outline)] mb-6">The direct order process</p>
                <ol className="space-y-5 list-none m-0 p-0">
                  <li className="flex gap-4">
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-secondary-container)] text-[var(--color-on-secondary-container)] text-sm font-bold"
                      aria-hidden
                    >
                      1
                    </span>
                    <p className="text-body-md text-[var(--color-on-surface)] pt-0.5">
                      Submit your order details using the form provided.
                    </p>
                  </li>
                  <li className="flex gap-4">
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-secondary-container)] text-[var(--color-on-secondary-container)] text-sm font-bold"
                      aria-hidden
                    >
                      2
                    </span>
                    <p className="text-body-md text-[var(--color-on-surface)] pt-0.5">
                      <span className="font-semibold">We will email you a payment request</span> via Zelle or Venmo.
                    </p>
                  </li>
                  <li className="flex gap-4">
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-secondary-container)] text-[var(--color-on-secondary-container)] text-sm font-bold"
                      aria-hidden
                    >
                      3
                    </span>
                    <p className="text-body-md text-[var(--color-on-surface)] pt-0.5">
                      Once paid, your copy is signed and shipped within 48 hours.
                    </p>
                  </li>
                </ol>
              </div>
              <p className="text-display-lg text-[var(--color-primary)] italic mb-6">{priceFormatted}</p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[var(--color-secondary)]" aria-hidden="true">
                    payments
                  </span>
                  <span className="text-title-sm text-[var(--color-on-surface)]">Zelle / Venmo Only</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[var(--color-secondary)]" aria-hidden="true">
                    local_shipping
                  </span>
                  <span className="text-title-sm text-[var(--color-on-surface)]">Free Shipping (US Only)</span>
                </div>
              </div>
            </div>
            <div className="rounded-[4px] bg-[var(--color-surface-container-low)] p-6 lg:p-10 shadow-ambient">
              <p className="text-title-sm text-[var(--color-primary)] mb-8">Order details</p>
              <OrderForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
