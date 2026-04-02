import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { NewsletterForm } from "@/components/ui/NewsletterForm";

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Christian Knuckleheads",
          url: "https://christianknuckleheads.com",
          description:
            "Real faith for real people who mess up. Daily devotionals, community, and merchandise.",
          publisher: { "@type": "Person", name: "Mitch" },
        }}
      />

      {/* Hero */}
      <header className="relative pt-8 pb-24 px-6 md:px-24 min-h-screen flex items-center overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 w-full max-w-7xl mx-auto">
          <div className="md:col-span-7 flex flex-col justify-center">
            <div className="field-tag mb-8">
              <span className="text-title-sm text-[var(--color-primary)]">
                FIELD NOTES VOL 01
              </span>
            </div>
            <h1 className="font-[family-name:var(--font-headline)] text-[2.5rem] md:text-[5rem] leading-[0.95] text-[var(--color-on-surface)] font-extrabold mb-8 italic">
              Real faith for <br />
              real people who{" "}
              <span className="text-[var(--color-primary-container)]">
                mess up.
              </span>
            </h1>
            <p className="text-body-lg text-[var(--color-secondary)] max-w-md mb-12 leading-relaxed">
              A raw, unfiltered guide to spirituality for the rest of us. No
              perfection required. Just iron, ink, and honest grace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/books/daily-devotionals"
                className="bg-[var(--color-primary-container)] text-[var(--color-on-primary-container)] px-10 py-5 font-bold uppercase tracking-widest text-sm hover:brightness-110 transition-all text-center"
              >
                Get the Manifesto
              </Link>
              <Link
                href="/books/daily-devotionals"
                className="border border-[var(--color-outline-variant)] text-[var(--color-on-surface)] px-10 py-5 font-bold uppercase tracking-widest text-sm hover:bg-white/5 transition-all text-center"
              >
                Read the Prologue
              </Link>
            </div>
          </div>
          <div className="md:col-span-5 relative flex items-center justify-center">
            <div className="absolute -right-24 -top-24 w-96 h-96 bg-[var(--color-primary-container)]/10 blur-[120px]" />
            <div className="relative z-10 w-full transform md:rotate-6 md:scale-110">
              <Image
                src="/images/book-cover.png"
                alt="Daily Devotions for Christian Knuckleheads book cover"
                width={500}
                height={667}
                className="w-full h-auto shadow-ambient"
                priority
              />
            </div>
          </div>
        </div>
      </header>

      {/* Purchase Section */}
      <section className="bg-[var(--color-surface-container-low)] py-24 px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="font-[family-name:var(--font-headline)] text-4xl mb-4 italic">
                Grab your copy
              </h2>
              <p className="text-[var(--color-secondary)] max-w-sm">
                Directly supports our mission or find it at your favorite global
                retailer.
              </p>
            </div>
            <div className="h-[1px] bg-[var(--color-outline-variant)]/30 flex-grow mx-12 hidden md:block mb-4" />
            <div className="text-right">
              <span className="text-sm text-[var(--color-primary-container)] font-bold">
                $32.00
              </span>
              <span className="block text-xs text-white/40">
                Limited Edition / Autographed
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] overflow-hidden">
            <div className="bg-[var(--color-surface)] p-8 md:p-12 flex flex-col justify-between group hover:bg-[var(--color-primary-container)] transition-colors duration-500">
              <div>
                <h3 className="font-[family-name:var(--font-headline)] text-3xl mb-6 group-hover:text-white">
                  Buy Direct
                </h3>
                <p className="text-[var(--color-secondary)] group-hover:text-white/80 mb-12">
                  The collector&apos;s edition. Hardbound, signed by the author,
                  includes exclusive &ldquo;Iron &amp; Ink&rdquo; bookmark.
                </p>
              </div>
              <Link
                href="/books/daily-devotionals#direct-purchase"
                className="border border-[var(--color-primary-container)] group-hover:border-white py-4 font-bold uppercase tracking-tighter transition-all text-center block"
              >
                Add to Cart
              </Link>
            </div>
            <div className="md:col-span-2 bg-[var(--color-surface)] p-8 md:p-12">
              <h3 className="font-[family-name:var(--font-headline)] text-2xl mb-8 opacity-50">
                Retail Partners
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { label: "AMAZON", sub: "Paperback & Digital" },
                  { label: "BARNES & NOBLE", sub: "Hardcover Edition" },
                  { label: "WALMART", sub: "Online Marketplace" },
                  { label: "BAM!", sub: "Books-A-Million" },
                  { label: "KINDLE", sub: "Instant Access" },
                ].map((r) => (
                  <a
                    key={r.label}
                    href="#"
                    className="flex flex-col gap-2 hover:translate-x-2 transition-transform"
                  >
                    <span className="text-[10px] text-[var(--color-primary)] tracking-widest font-bold">
                      {r.label}
                    </span>
                    <span className="font-[family-name:var(--font-headline)] text-xl">
                      {r.sub}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support the Mission */}
      <section className="py-24 md:py-32 px-6 md:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <h2 className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl mb-8 italic">
              Support the Mission
            </h2>
            <p className="text-body-lg text-[var(--color-secondary)] mb-8 leading-relaxed">
              We aren&apos;t building an audience; we&apos;re building a
              movement of people who are tired of pretending. Join the 10,000.
            </p>
            <Link
              href="/about"
              className="inline-block bg-[var(--color-surface-container-high)] py-4 px-12 font-bold uppercase tracking-widest text-xs hover:bg-[var(--color-primary-container)] transition-colors"
            >
              Join the Collective
            </Link>
          </div>
          <div className="lg:col-span-7 bg-[var(--color-surface-container-low)] p-8 md:p-12 border-l-4 border-[var(--color-primary-container)]">
            <div className="flex justify-between items-end mb-12">
              <div>
                <span className="text-xs text-[var(--color-primary-container)] block mb-2 font-bold tracking-widest uppercase">
                  12-Month Growth Goal
                </span>
                <div className="text-5xl md:text-6xl font-[family-name:var(--font-headline)] font-bold">
                  2,450{" "}
                  <span className="text-2xl font-[family-name:var(--font-body)] text-white/20 font-normal">
                    / 10,000
                  </span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[var(--color-primary)] font-bold">
                  24.5%
                </span>
                <span className="block text-[10px] text-white/40 uppercase tracking-widest">
                  Completed
                </span>
              </div>
            </div>
            <div className="w-full h-1 bg-[var(--color-surface-container-highest)] relative overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full bg-[var(--color-primary-container)] transition-all duration-1000"
                style={{ width: "24.5%" }}
              />
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "Active States", value: "48" },
                { label: "Chapters", value: "12" },
                { label: "Supporters", value: "842" },
                { label: "Days to Goal", value: "194" },
              ].map((stat) => (
                <div key={stat.label}>
                  <span className="block text-[10px] text-white/40 uppercase mb-1">
                    {stat.label}
                  </span>
                  <span className="font-[family-name:var(--font-headline)] text-2xl">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Chief */}
      <section className="bg-[var(--color-surface-container-low)] overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">
          <div className="relative h-[400px] md:h-auto overflow-hidden">
            <Image
              src="/images/author-mitch.png"
              alt="Meet the Chief Knucklehead"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface-container-low)] via-transparent to-transparent" />
          </div>
          <div className="p-8 md:p-16 lg:p-24 flex flex-col justify-center">
            <span className="text-xs tracking-widest text-[var(--color-primary-container)] mb-6 font-bold uppercase">
              The Founder
            </span>
            <h2 className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl mb-8 italic">
              Meet the Chief Knucklehead
            </h2>
            <div className="text-[var(--color-secondary)] space-y-6 text-lg leading-relaxed mb-12">
              <p>
                He&apos;s been high and he&apos;s been low. Mostly low.
                He&apos;s a man who realized that the church is too often a
                showroom for saints when it should be a hospital for sinners.
              </p>
              <p>
                Writing with the grit of a man who&apos;s seen the dark, he
                invites you to step out of the shadows of shame and into the
                light of authentic, messy grace.
              </p>
            </div>
            <div>
              <span className="block mt-4 text-[10px] text-white/40 uppercase tracking-widest">
                Founder &amp; Lead Correspondent
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter & Chat */}
      <section
        id="newsletter"
        className="py-24 md:py-32 px-6 md:px-24 bg-[var(--color-surface)]"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl mb-8">
            Stay in the loop.
          </h2>
          <p className="text-[var(--color-secondary)] mb-12 max-w-xl mx-auto">
            Get weekly field notes on faith, failure, and the messy road in
            between. No spam, just substance.
          </p>
          <div className="max-w-2xl mx-auto">
            <NewsletterForm />
          </div>
          <div className="pt-16 border-t border-[var(--color-outline-variant)]/15 mt-16 flex flex-col md:flex-row justify-center items-center gap-12">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-[var(--color-primary-container)] text-3xl">
                chat_bubble
              </span>
              <div className="text-left">
                <span className="block font-[family-name:var(--font-headline)] text-lg italic">
                  Need to talk?
                </span>
                <a
                  href="mailto:hello@christianknuckleheads.com"
                  className="text-[10px] text-white/40 hover:text-[var(--color-primary)] tracking-widest transition-colors uppercase font-bold"
                >
                  Start a Conversation
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-[var(--color-primary-container)] text-3xl">
                shield
              </span>
              <div className="text-left">
                <span className="block font-[family-name:var(--font-headline)] text-lg italic">
                  Privacy Matters
                </span>
                <span className="text-[10px] text-white/40 tracking-widest uppercase font-bold">
                  Encrypted &amp; Anonymous
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
