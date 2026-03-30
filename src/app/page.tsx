import Link from "next/link";
import { NewsletterForm } from "@/components/ui/NewsletterForm";
import { MerchPreview } from "./_components/MerchPreview";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]";

const linkPrimary = `inline-flex items-center justify-center gap-2 font-semibold rounded-[4px] transition-colors duration-150 ${focusRing} bg-[var(--color-primary)] text-[var(--color-on-primary)] hover:bg-[var(--color-primary-container)] px-8 py-3 text-base`;

const linkSecondary = `inline-flex items-center justify-center font-semibold rounded-[4px] transition-colors duration-150 ${focusRing} bg-[var(--color-surface-container-high)] text-[var(--color-primary)] hover:bg-[var(--color-surface-container-highest)] px-8 py-3 text-base`;

const linkTertiary = `inline-flex items-center justify-center font-semibold rounded-[4px] transition-colors duration-150 ${focusRing} bg-transparent text-[var(--color-primary)] underline-offset-4 hover:underline px-8 py-3 text-base`;

export default function HomePage() {
  return (
    <>
      <section
        className="bg-[var(--color-surface)] section-padding"
        aria-labelledby="hero-heading"
      >
        <div className="container-site">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative z-10">
              <span className="text-title-sm mb-4 inline-block rounded-full bg-[var(--color-secondary-container)] px-3 py-1 text-[var(--color-on-secondary-container)]">
                New Release
              </span>
              <h1
                id="hero-heading"
                className="text-display-lg text-balance text-[var(--color-primary)]"
              >
                Daily Devotions for the Christian Knucklehead
              </h1>
              <p className="text-body-lg mt-6 max-w-prose-custom text-[var(--color-on-surface-variant)]">
                Real faith for real people who mess up. A 365-day journey through the awkward, the honest, and the
                undeniably holy moments of being human.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Link href="/books/daily-devotionals" className={linkPrimary}>
                  Order the Book
                  <span className="material-symbols-outlined text-[1.25em]" aria-hidden="true">
                    arrow_forward
                  </span>
                </Link>
                <Link href="/books/daily-devotionals" className={linkTertiary}>
                  Read Excerpt
                </Link>
              </div>
            </div>
            <div className="relative">
              <div
                className="absolute inset-0 -z-10 scale-110 translate-x-4 rounded-full bg-[var(--color-secondary)]/5 blur-3xl lg:translate-x-10"
                aria-hidden="true"
              />
              <div className="shadow-ambient flex aspect-[3/4] items-center justify-center rounded-[4px] bg-[var(--color-surface-container-low)]">
                <span className="material-symbols-outlined text-7xl text-[var(--color-outline)]" aria-hidden="true">
                  menu_book
                </span>
                <span className="sr-only">Book cover placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-[var(--color-surface-container-low)] section-padding"
        aria-labelledby="twelve-month-heading"
      >
        <div className="container-site">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative rounded-[4px] bg-[var(--color-surface-container)] p-8 md:p-12">
              <span className="material-symbols-outlined absolute right-4 top-4 text-4xl text-[var(--color-secondary)] opacity-20" aria-hidden="true">
                flag
              </span>
              <p className="text-title-sm mb-3 text-[var(--color-secondary)]">Our 12-Month Goal</p>
              <h2 id="twelve-month-heading" className="text-headline-md text-[var(--color-primary)]">
                Building a Collective of the Honestly Broken
              </h2>
              <p className="text-body-lg mt-6 text-[var(--color-on-surface-variant)]">
                We&apos;re on a mission to spend the next 12 months building a loyal audience of 10,000
                &quot;Knuckleheads&quot;—people who are tired of polished religion and hungry for messy, authentic grace.
              </p>
              <ul className="mt-8 space-y-4" role="list">
                {[
                  "365 Days of Daily Content",
                  "Global Community Growth",
                  "Direct Support Channels",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="material-symbols-outlined shrink-0 text-[var(--color-secondary)]" aria-hidden="true">
                      check_circle
                    </span>
                    <span className="text-title-sm text-[var(--color-primary)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 id="support-mission-heading" className="text-headline-md text-[var(--color-primary)]">
                Support the Mission
              </h2>
              <p className="text-body-lg mt-6 text-[var(--color-on-surface-variant)]">
                This isn&apos;t just about a book; it&apos;s about starting a movement for the rest of us. Your support
                helps us create more resources, reach more people, and prove that God uses the stumblers just as much as
                the sprinters.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Link href="/about" className={linkPrimary}>
                  Partner With Us
                </Link>
                <Link href="/about" className={linkSecondary}>
                  View Progress
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface)] section-padding" aria-labelledby="author-heading">
        <div className="container-site">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
            <div className="relative w-full shrink-0 lg:w-5/12">
              <div className="shadow-ambient relative z-10 aspect-[4/5] overflow-hidden rounded-[4px] bg-[var(--color-surface-container-low)]">
                <div className="flex h-full w-full items-center justify-center bg-[var(--color-secondary)]/10">
                  <span className="material-symbols-outlined text-7xl text-[var(--color-outline)]" aria-hidden="true">
                    person
                  </span>
                </div>
                <span className="sr-only">Author photo placeholder</span>
              </div>
            </div>
            <div className="w-full lg:w-7/12">
              <h2 id="author-heading" className="text-headline-md text-[var(--color-primary)]">
                Meet the Chief Knucklehead
              </h2>
              <div className="mt-8 space-y-6 text-body-lg text-[var(--color-on-surface-variant)]">
                <p>
                  I started writing these devotionals because I couldn&apos;t find anything that spoke to my actual
                  life—a life messy with mistakes, filled with questions, and occasionally held together by duct tape,
                  strong coffee, and a lot of grace.
                </p>
                <p>
                  Being a &quot;Christian Knucklehead&quot; isn&apos;t about failing at faith; it&apos;s about realizing
                  that God&apos;s strength is made perfect in our very obvious, very human weaknesses. We&apos;re just
                  professional mess-makers following a perfect Savior.
                </p>
              </div>
              <p className="mt-8">
                <Link
                  href="/about"
                  className="group text-title-sm inline-flex items-center gap-2 text-[var(--color-secondary)] transition-opacity hover:opacity-80"
                >
                  Learn more about the mission
                  <span
                    className="h-px w-8 bg-[var(--color-secondary)] transition-all group-hover:w-12"
                    aria-hidden="true"
                  />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-[var(--color-surface-container-low)] section-padding"
        aria-labelledby="merch-heading"
      >
        <div className="container-site">
          <div className="mb-12 lg:mb-16">
            <p className="text-title-sm text-[var(--color-secondary)]">The Outpost</p>
            <h2 id="merch-heading" className="text-headline-md mt-2 text-[var(--color-primary)]">
              Knucklehead Provisions
            </h2>
          </div>
          <MerchPreview />
        </div>
      </section>

      <section
        id="newsletter"
        className="bg-[var(--color-surface)] section-padding"
        aria-labelledby="newsletter-heading"
      >
        <div className="container-site">
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="newsletter-heading" className="text-headline-md text-[var(--color-primary)]">
              Join the Collective of the Honest
            </h2>
            <p className="text-body-lg mx-auto mt-4 max-w-prose-custom text-[var(--color-on-surface-variant)]">
              Weekly doses of grace and real-life faith for people who don&apos;t have it all figured out.
            </p>
            <div className="mt-10 text-left sm:text-center">
              <NewsletterForm />
            </div>
            <p className="text-label-md mt-6 uppercase tracking-widest text-[var(--color-on-surface-variant)]">
              No spam. Just soul-food for mess-makers.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
