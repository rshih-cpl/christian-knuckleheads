import type { Metadata } from "next";
import Link from "next/link";
import { NewsletterForm } from "@/components/ui/NewsletterForm";

export const metadata: Metadata = {
  title: "About the Author",
  description:
    "Meet Mitch — a recovered corporate climber finding grace in the grit. The story behind Christian Knuckleheads.",
};

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]";

const linkPrimary = `inline-flex items-center justify-center gap-2 font-semibold rounded-[4px] transition-colors duration-150 ${focusRing} bg-[var(--color-primary)] text-[var(--color-on-primary)] hover:bg-[var(--color-primary-container)] px-8 py-3 text-base`;

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="bg-[var(--color-surface)] section-padding"
        aria-labelledby="about-hero-heading"
      >
        <div className="container-site">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-12">
            <div className="order-1 lg:col-span-6 lg:row-start-1 lg:pr-4 xl:translate-x-[4%]">
              <span className="text-title-sm mb-4 text-[var(--color-secondary)]">The Author&apos;s Journey</span>
              <h1
                id="about-hero-heading"
                className="text-display-lg text-balance italic text-[var(--color-primary)]"
              >
                Recovered corporate climber finding grace.
              </h1>
            </div>

            <div className="order-2 lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1 lg:self-end">
              <div className="shadow-ambient relative aspect-[4/5] overflow-hidden rounded-[4px] bg-[var(--color-surface-container-high)] lg:rotate-[2deg] lg:transition-transform lg:duration-700 lg:hover:rotate-0">
                <div className="flex h-full w-full items-center justify-center bg-[var(--color-surface-container-low)]">
                  <span className="material-symbols-outlined text-7xl text-[var(--color-outline)]" aria-hidden="true">
                    person
                  </span>
                </div>
                <span className="sr-only">Author portrait placeholder</span>
              </div>
            </div>

            <div className="order-3 max-w-prose-custom lg:col-span-6 lg:row-start-2 lg:pr-4 lg:pt-4 xl:translate-x-[4%]">
              <blockquote className="text-body-lg italic text-[var(--color-on-surface)]">
                <p>
                  &ldquo;I spent twenty years chasing titles, only to find the most important one was &apos;child of
                  God.&apos;&rdquo;
                </p>
                <footer className="text-label-md mt-4 not-italic text-[var(--color-on-surface-variant)]">
                  — Mitch, Founder
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Background story */}
      <section
        className="bg-[var(--color-surface-container-low)] section-padding"
        aria-labelledby="background-story-heading"
      >
        <div className="container-site">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <header className="lg:col-span-4 lg:max-w-sm">
              <h2 id="background-story-heading" className="text-headline-md text-[var(--color-primary)]">
                The Background Story
              </h2>
              <p className="text-body-lg mt-6 text-[var(--color-on-surface-variant)]">
                It started in a corner office on the 44th floor, surrounded by glass, steel, and a profound sense of
                emptiness.
              </p>
            </header>
            <div className="space-y-8 lg:col-span-7 lg:col-start-6 lg:ml-[clamp(0rem,4vw,2.5rem)]">
              <div className="max-w-prose-custom space-y-8 text-[var(--color-on-surface)]">
                <p className="text-body-md leading-loose">
                  Mitch wasn&apos;t looking for a ministry. He was looking for an exit strategy from a life that looked
                  perfect on paper but felt hollow in practice. As a high-performing executive, he mastered the art of
                  &ldquo;the climb&rdquo;—only to realize he had leaned his ladder against the wrong wall.
                </p>
                <p className="text-body-md leading-loose">
                  Christian Knuckleheads started as a series of notes scribbled in the margins of corporate planners.
                  Mitch found himself tired of &ldquo;curated Christianity&rdquo; that didn&apos;t seem to account for
                  the messiness of being human.
                </p>
                <p className="text-body-md leading-loose">
                  With a twenty-year corporate background, he saw that the same principles of authenticity and
                  transparency that made leaders great were often missing from our spiritual lives. He decided to build
                  a home for the honest, the imperfect, and the seekers.
                </p>
              </div>
              <figure className="max-w-prose-custom rounded-[4px] bg-[var(--color-surface-container-highest)] p-8 md:p-10">
                <blockquote className="text-headline-sm italic text-[var(--color-on-surface)]">
                  <p>
                    &ldquo;I realized that my greatest failures weren&apos;t my business mistakes, but the moments I
                    chose my ego over my soul. That&apos;s when the idea for Christian Knuckleheads was born.&rdquo;
                  </p>
                </blockquote>
              </figure>
              <p className="max-w-prose-custom text-body-md leading-loose text-[var(--color-on-surface)]">
                Christian Knuckleheads isn&apos;t about theological perfection or polished piety. It&apos;s about the
                messy, beautiful, and often hilarious reality of trying to follow Jesus when you&apos;re prone to making
                mistakes. It&apos;s for the corporate climbers, the stay-at-home parents, the retirees, and everyone in
                between who feels like they&apos;re just figuring it out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section
        className="bg-[var(--color-surface)] section-padding"
        aria-labelledby="philosophy-heading"
      >
        <div className="container-site">
          <h2 id="philosophy-heading" className="sr-only">
            Philosophy
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
            <article className="rounded-[4px] bg-[var(--color-surface-container-low)] p-8 md:p-10 shadow-ambient transition-shadow duration-300 hover:shadow-[0_24px_48px_rgba(26,28,30,0.08)]">
              <span className="material-symbols-outlined mb-6 text-4xl text-[var(--color-secondary)]" aria-hidden="true">
                auto_awesome
              </span>
              <h3 className="text-headline-sm text-[var(--color-primary)]">Real Faith</h3>
              <p className="text-body-md mt-4 text-[var(--color-on-surface-variant)] leading-relaxed">
                Moving past the Sunday morning mask to find God in the Tuesday afternoon chaos.
              </p>
            </article>
            <article className="rounded-[4px] bg-[var(--color-surface-container-highest)] p-8 md:p-10 shadow-ambient transition-shadow duration-300 hover:shadow-[0_24px_48px_rgba(26,28,30,0.08)]">
              <span className="material-symbols-outlined mb-6 text-4xl text-[var(--color-secondary)]" aria-hidden="true">
                heart_broken
              </span>
              <h3 className="text-headline-sm text-[var(--color-primary)]">Real People</h3>
              <p className="text-body-md mt-4 text-[var(--color-on-surface-variant)] leading-relaxed">
                A community where your &ldquo;knucklehead&rdquo; moments are seen as opportunities for grace, not
                judgment.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Values / vision */}
      <section
        className="bg-[var(--color-surface-container-low)] section-padding"
        aria-labelledby="values-heading"
      >
        <div className="container-site">
          <div className="mb-12 text-center lg:mb-16">
            <p className="text-title-sm text-[var(--color-outline)]">Our Vision</p>
            <h2 id="values-heading" className="text-headline-md mt-3 italic text-[var(--color-primary)]">
              Faith for people who mess up.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
            <article className="flex flex-col items-center rounded-[4px] bg-[var(--color-surface-container-high)] p-10 text-center shadow-ambient transition-transform duration-500 md:hover:-translate-y-1">
              <div
                className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-primary-container)]"
                aria-hidden="true"
              >
                <span className="material-symbols-outlined text-3xl text-[var(--color-on-primary-container)]">
                  book_5
                </span>
              </div>
              <h3 className="text-headline-sm text-[var(--color-primary)]">The Modern Manuscript</h3>
              <p className="text-body-md mt-4 text-[var(--color-on-surface-variant)] leading-relaxed">
                Curating wisdom that feels like a shared secret between friends, not a lecture from a podium.
              </p>
            </article>
            <article className="flex flex-col items-center rounded-[4px] bg-[var(--color-secondary-container)] p-10 text-center shadow-ambient transition-transform duration-500 md:translate-y-4 md:hover:translate-y-3">
              <div
                className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-on-secondary-container)]"
                aria-hidden="true"
              >
                <span className="material-symbols-outlined text-3xl text-[var(--color-secondary-container)]">groups</span>
              </div>
              <h3 className="text-headline-sm text-[var(--color-on-secondary-fixed)]">Honest Community</h3>
              <p className="text-body-md mt-4 text-[var(--color-on-secondary-fixed-variant)] leading-relaxed">
                Where we drop the pretense and embrace the beautiful mess of human spiritual growth.
              </p>
            </article>
            <article className="flex flex-col items-center rounded-[4px] bg-[var(--color-surface-container-high)] p-10 text-center shadow-ambient transition-transform duration-500 md:hover:-translate-y-1">
              <div
                className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-primary-container)]"
                aria-hidden="true"
              >
                <span className="material-symbols-outlined text-3xl text-[var(--color-on-primary-container)]">
                  footprint
                </span>
              </div>
              <h3 className="text-headline-sm text-[var(--color-primary)]">Daily Practice</h3>
              <p className="text-body-md mt-4 text-[var(--color-on-surface-variant)] leading-relaxed">
                Small, manageable steps toward a deeper relationship with God amidst a busy schedule.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section
        className="bg-[var(--color-surface)] section-padding"
        aria-labelledby="about-newsletter-heading"
      >
        <div className="container-site">
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="about-newsletter-heading" className="text-headline-md text-[var(--color-primary)]">
              Ready to walk with us?
            </h2>
            <p className="text-body-lg mx-auto mt-4 max-w-prose-custom text-[var(--color-on-surface-variant)]">
              Join thousands of other &ldquo;knuckleheads&rdquo; who are finding that grace is bigger than our biggest
              mistakes. Get the weekly devotional directly to your inbox.
            </p>
            <div className="mt-10 text-left sm:text-center">
              <NewsletterForm />
            </div>
            <p className="text-label-md mt-6 uppercase tracking-widest text-[var(--color-on-surface-variant)]">
              No spam. Just soul fuel.
            </p>
          </div>
        </div>
      </section>

      {/* Chat with Mitch */}
      <section
        className="bg-[var(--color-surface-container-low)] section-padding"
        aria-labelledby="chat-mitch-heading"
      >
        <div className="container-site">
          <div className="mx-auto max-w-lg">
            <h2 id="chat-mitch-heading" className="text-headline-md text-[var(--color-primary)]">
              Chat with Mitch
            </h2>
            <p className="text-body-md mt-3 text-[var(--color-on-surface-variant)]">
              Have a story to share or a question about the book? I&apos;d love to hear from you.
            </p>
            <div
              className="mt-8 rounded-[4px] bg-[var(--color-surface)] p-6 shadow-ambient"
              role="region"
              aria-label="Sample reader message"
            >
              <div className="flex gap-3">
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary-container)] text-xs font-bold text-[var(--color-on-primary)]"
                  aria-hidden="true"
                >
                  M
                </div>
                <div className="min-w-0 flex-1">
                  <p className="rounded-[4px] bg-[var(--color-surface-container-low)] px-4 py-3 text-body-md italic text-[var(--color-on-surface)]">
                    Hey Mitch, just finished chapter 3 and&hellip;
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <Link href="mailto:hello@christianknuckleheads.com" className={linkPrimary}>
                Start Conversation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
