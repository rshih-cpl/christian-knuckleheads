import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { books, getBook } from "@/lib/books";
import { OrderForm } from "./_components/OrderForm";

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
  return { title: book.title, description: book.description };
}

export default async function BookPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
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
          author: { "@type": "Person", name: "Mitch" },
          offers: {
            "@type": "Offer",
            price: book.price,
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
          },
        }}
      />

      {/* Hero */}
      <section className="relative px-6 md:px-24 py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-8">
            <div className="flex items-center gap-3">
              <span className="w-12 h-[1px] bg-[var(--color-primary-container)]" />
              <span className="text-title-sm text-[var(--color-primary)]">
                Now Available
              </span>
            </div>
            <h1 className="font-[family-name:var(--font-headline)] text-[2.5rem] md:text-[5.5rem] leading-[0.9] font-extrabold tracking-tighter">
              Wisdom for the <br />
              <span className="italic text-[var(--color-primary-container)]">
                rest of us.
              </span>
            </h1>
            <p className="text-body-lg text-[var(--color-secondary)] max-w-md leading-relaxed">
              A raw, unfiltered journey through faith, failure, and the messy
              reality of being human. No polish, just the Gospel in the trenches.
            </p>
            <div className="flex gap-4 mt-4">
              <Link
                href="#direct-purchase"
                className="px-8 md:px-10 py-4 bg-[var(--color-primary-container)] text-[var(--color-on-primary-container)] font-bold hover:brightness-110 transition-all uppercase tracking-widest text-sm text-center"
              >
                Order Now
              </Link>
              <Link
                href="#inside"
                className="px-8 md:px-10 py-4 border border-[var(--color-outline)] text-[var(--color-on-surface)] font-bold hover:bg-[var(--color-surface-container-high)] transition-all uppercase tracking-widest text-sm text-center"
              >
                Read Excerpt
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative flex justify-center">
            <div className="relative z-10 shadow-[40px_40px_80px_rgba(0,0,0,0.6)]">
              <Image
                src="/images/book-cover.png"
                alt="Daily Devotions for Christian Knuckleheads book cover"
                width={400}
                height={533}
                className="w-[280px] md:w-[400px] h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Mission */}
      <section className="bg-[var(--color-surface-container-low)] px-6 md:px-8 py-24 md:py-32 flex flex-col items-center text-center">
        <span className="text-title-sm tracking-widest text-[var(--color-primary-container)] mb-6">
          The Mission
        </span>
        <h2 className="font-[family-name:var(--font-headline)] text-3xl md:text-5xl lg:text-7xl font-bold mb-12 max-w-4xl leading-tight">
          A field guide for the messy <br className="hidden md:block" />
          and the questioning.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-left max-w-6xl w-full">
          {[
            {
              title: "Unfiltered Truth",
              body: "We stop pretending we have it all together. This isn't about being perfect; it's about being present in the chaos.",
            },
            {
              title: "Honest Doubt",
              body: "Questions are the heartbeat of growth. We lean into the hard stuff instead of running for the easy answers.",
            },
            {
              title: "Rugged Faith",
              body: "Built for the long haul. A faith that can survive the storms because it's anchored in something bigger than us.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="p-8 bg-[var(--color-surface-container)] border-l-4 border-[var(--color-primary-container)]"
            >
              <h3 className="font-[family-name:var(--font-headline)] text-2xl mb-4">
                {card.title}
              </h3>
              <p className="text-[var(--color-secondary)] leading-relaxed">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Inside the Pages */}
      <section
        id="inside"
        className="px-6 md:px-8 py-24 md:py-32 scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
          <div className="w-full md:w-1/2">
            <div className="relative aspect-[4/5] bg-[var(--color-surface-container-highest)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)] via-transparent to-transparent z-10" />
              <Image
                src="/images/book-cover.png"
                alt="Inside the pages"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain p-8"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-10">
            <h2 className="font-[family-name:var(--font-headline)] text-4xl md:text-6xl font-extrabold leading-tight">
              Meticulously <br />
              Crafted.
            </h2>
            <div className="flex flex-col gap-8">
              {[
                {
                  icon: "calendar_today",
                  title: "365 Daily Devotions",
                  desc: "A full year of daily readings designed to challenge your perspective and ground your morning in grit and grace.",
                },
                {
                  icon: "menu_book",
                  title: "Premium Canvas Binding",
                  desc: "Tactile, heavy-duty canvas cover that feels like a field journal. Built to be carried, used, and worn down.",
                },
                {
                  icon: "edit_note",
                  title: "Reflection Space",
                  desc: "Wide margins and dedicated sections for your own field notes, prayers, and questions.",
                },
              ].map((f) => (
                <div key={f.title} className="flex items-start gap-6">
                  <span className="material-symbols-outlined text-[var(--color-primary-container)] text-4xl shrink-0">
                    {f.icon}
                  </span>
                  <div>
                    <h4 className="font-[family-name:var(--font-headline)] text-2xl mb-2">
                      {f.title}
                    </h4>
                    <p className="text-[var(--color-secondary)]">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Shop Retailers */}
      <section
        id="retailers"
        className="bg-[var(--color-surface-container-lowest)] py-24 md:py-32 px-6 md:px-8 scroll-mt-24"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 md:gap-12 border-b border-[var(--color-outline-variant)] pb-12 mb-16">
            <div>
              <span className="text-title-sm tracking-widest text-[var(--color-primary-container)] mb-4 block">
                Availability
              </span>
              <h2 className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl font-bold">
                Shop Retailers
              </h2>
            </div>
            <p className="text-[var(--color-secondary)] max-w-sm mb-2">
              Support local or go global. Find the Knucklehead guide at these
              major book sellers.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8">
            {["Amazon", "B&N", "Walmart", "BAM!", "Kindle"].map((name) => (
              <a
                key={name}
                href="#"
                className="group bg-[var(--color-surface-container-low)] p-8 md:p-10 flex items-center justify-center grayscale hover:grayscale-0 hover:bg-[var(--color-surface-container-high)] transition-all border-b-2 border-transparent hover:border-[var(--color-primary-container)]"
              >
                <span className="text-lg md:text-xl font-bold font-[family-name:var(--font-headline)] group-hover:text-white">
                  {name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Autographed Direct */}
      <section
        id="direct-purchase"
        className="px-6 md:px-8 py-24 md:py-32 scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <div className="flex flex-col gap-8">
            <h2 className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl font-bold">
              Autographed Direct
            </h2>
            <p className="text-[var(--color-secondary)] text-lg leading-relaxed">
              Want a signed copy with a personal note from the author? We handle
              direct orders via Zelle or Venmo. Each book is inspected,
              hand-signed, and shipped directly from our field office.
            </p>
            <div className="bg-[var(--color-primary-container)]/10 p-8 border-l-4 border-[var(--color-primary-container)]">
              <div className="flex justify-between items-center mb-4">
                <span className="text-title-sm tracking-widest text-[var(--color-primary-container)]">
                  Price Per Copy
                </span>
                <span className="text-3xl font-[family-name:var(--font-headline)] font-bold text-white">
                  {priceFormatted}
                </span>
              </div>
              <p className="text-sm text-[var(--color-secondary)] italic">
                Includes flat-rate shipping within the continental U.S.
              </p>
            </div>
            <div className="flex gap-10 mt-4 opacity-70">
              {["Author Signed", "Personal Note", "Direct Support"].map(
                (badge) => (
                  <div key={badge} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[var(--color-primary-container)]">
                      check_circle
                    </span>
                    <span className="text-[10px] tracking-widest uppercase font-bold">
                      {badge}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="bg-[var(--color-surface-container)] p-8 md:p-12 border-t-4 border-[var(--color-primary-container)]">
            <p className="text-title-sm text-[var(--color-primary)] mb-8">
              Order details
            </p>
            <OrderForm />
          </div>
        </div>
      </section>
    </>
  );
}
