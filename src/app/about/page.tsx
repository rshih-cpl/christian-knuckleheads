import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { NewsletterForm } from "@/components/ui/NewsletterForm";

export const metadata: Metadata = {
  title: "About the Author",
  description:
    "Meet Mitch — a recovered corporate climber finding grace in the grit. The story behind Christian Knuckleheads.",
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Mitch",
          description:
            "Author, recovered corporate climber, and founder of Christian Knuckleheads.",
          url: "https://christianknuckleheads.com/about",
        }}
      />

      {/* Hero */}
      <section
        className="bg-[var(--color-surface)] section-padding"
        aria-labelledby="about-hero-heading"
      >
        <div className="container-site">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-12">
            <div className="order-1 lg:col-span-6 lg:row-start-1 lg:pr-4">
              <span className="text-title-sm mb-4 block text-[var(--color-primary-container)] tracking-widest">
                The Author&apos;s Journey
              </span>
              <h1
                id="about-hero-heading"
                className="font-[family-name:var(--font-headline)] text-[2.5rem] md:text-[4rem] leading-[0.95] font-extrabold italic text-[var(--color-on-surface)]"
              >
                Recovered corporate climber finding grace.
              </h1>
            </div>

            <div className="order-2 lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1 lg:self-end">
              <div className="shadow-ambient relative aspect-[4/5] overflow-hidden bg-[var(--color-surface-container-high)]">
                <Image
                  src="/images/author-mitch.png"
                  alt="Mitch O'Neil, author of Daily Devotions for Christian Knuckleheads"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover grayscale contrast-125"
                  priority
                />
              </div>
            </div>

            <div className="order-3 max-w-prose-custom lg:col-span-6 lg:row-start-2 lg:pr-4 lg:pt-4">
              <blockquote className="text-body-lg italic text-[var(--color-on-surface)]">
                <p>
                  &ldquo;I spent twenty years chasing titles, only to find the
                  most important one was &apos;child of God.&apos;&rdquo;
                </p>
                <footer className="text-[10px] text-white/40 tracking-widest uppercase mt-4 not-italic font-bold">
                  — Mitch, Founder &amp; Lead Correspondent
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
              <h2
                id="background-story-heading"
                className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl font-bold italic"
              >
                The Background Story
              </h2>
              <p className="text-body-lg mt-6 text-[var(--color-secondary)]">
                It started in a corner office on the 44th floor, surrounded by
                glass, steel, and a profound sense of emptiness.
              </p>
            </header>
            <div className="space-y-8 lg:col-span-7 lg:col-start-6">
              <div className="max-w-prose-custom space-y-8 text-[var(--color-on-surface)]">
                <p className="text-body-md leading-loose">
                  Mitch wasn&apos;t looking for a ministry. He was looking for
                  an exit strategy from a life that looked perfect on paper but
                  felt hollow in practice. As a high-performing executive, he
                  mastered the art of &ldquo;the climb&rdquo;—only to realize he
                  had leaned his ladder against the wrong wall.
                </p>
                <p className="text-body-md leading-loose">
                  Christian Knuckleheads started as a series of notes scribbled
                  in the margins of corporate planners. Mitch found himself
                  tired of &ldquo;curated Christianity&rdquo; that didn&apos;t
                  seem to account for the messiness of being human.
                </p>
                <p className="text-body-md leading-loose">
                  With a twenty-year corporate background, he saw that the same
                  principles of authenticity and transparency that made leaders
                  great were often missing from our spiritual lives. He decided
                  to build a home for the honest, the imperfect, and the
                  seekers.
                </p>
              </div>
              <figure className="max-w-prose-custom bg-[var(--color-surface-container)] p-8 md:p-10 border-l-4 border-[var(--color-primary-container)]">
                <blockquote className="font-[family-name:var(--font-headline)] text-xl md:text-2xl italic text-[var(--color-on-surface)]">
                  <p>
                    &ldquo;I realized that my greatest failures weren&apos;t my
                    business mistakes, but the moments I chose my ego over my
                    soul. That&apos;s when the idea for Christian Knuckleheads
                    was born.&rdquo;
                  </p>
                </blockquote>
              </figure>
              <p className="max-w-prose-custom text-body-md leading-loose text-[var(--color-on-surface)]">
                Christian Knuckleheads isn&apos;t about theological perfection or
                polished piety. It&apos;s about the messy, beautiful, and often
                hilarious reality of trying to follow Jesus when you&apos;re
                prone to making mistakes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Cards */}
      <section
        className="bg-[var(--color-surface)] section-padding"
        aria-labelledby="philosophy-heading"
      >
        <div className="container-site">
          <h2 id="philosophy-heading" className="sr-only">
            Philosophy
          </h2>
          <div className="grid grid-cols-1 gap-[1px] md:grid-cols-3">
            {[
              {
                icon: "auto_awesome",
                title: "Unfiltered Truth",
                body: "Moving past the Sunday morning mask to find God in the Tuesday afternoon chaos.",
              },
              {
                icon: "heart_broken",
                title: "Honest Doubt",
                body: 'Questions are the heartbeat of growth. We lean into the hard stuff instead of running for the easy answers.',
              },
              {
                icon: "fitness_center",
                title: "Rugged Faith",
                body: "Built for the long haul. A faith anchored in something bigger than us.",
              },
            ].map((card) => (
              <article
                key={card.title}
                className="bg-[var(--color-surface-container)] p-8 md:p-10 border-l-4 border-[var(--color-primary-container)]"
              >
                <span
                  className="material-symbols-outlined mb-6 text-4xl text-[var(--color-primary-container)]"
                  aria-hidden="true"
                >
                  {card.icon}
                </span>
                <h3 className="font-[family-name:var(--font-headline)] text-2xl mb-3">
                  {card.title}
                </h3>
                <p className="text-[var(--color-secondary)] leading-relaxed">
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Values / Vision */}
      <section
        className="bg-[var(--color-surface-container-low)] section-padding"
        aria-labelledby="values-heading"
      >
        <div className="container-site">
          <div className="mb-12 text-center lg:mb-16">
            <span className="text-title-sm text-[var(--color-primary-container)] tracking-widest">
              Our Vision
            </span>
            <h2
              id="values-heading"
              className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl mt-3 italic"
            >
              Faith for people who mess up.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
            {[
              {
                icon: "book_5",
                title: "The Modern Manuscript",
                body: "Curating wisdom that feels like a shared secret between friends, not a lecture from a podium.",
              },
              {
                icon: "groups",
                title: "Honest Community",
                body: 'Where we drop the pretense and embrace the beautiful mess of human spiritual growth.',
              },
              {
                icon: "footprint",
                title: "Daily Practice",
                body: "Small, manageable steps toward a deeper relationship with God amidst a busy schedule.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="flex flex-col items-center bg-[var(--color-surface-container-high)] p-10 text-center transition-transform duration-500 md:hover:-translate-y-1"
              >
                <div
                  className="mb-8 flex h-16 w-16 items-center justify-center bg-[var(--color-primary-container)]"
                  aria-hidden="true"
                >
                  <span className="material-symbols-outlined text-3xl text-[var(--color-on-primary-container)]">
                    {item.icon}
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-headline)] text-2xl">
                  {item.title}
                </h3>
                <p className="text-body-md mt-4 text-[var(--color-secondary)] leading-relaxed">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section
        className="bg-[var(--color-surface)] section-padding"
        aria-labelledby="about-newsletter-heading"
      >
        <div className="container-site">
          <div className="mx-auto max-w-4xl text-center">
            <h2
              id="about-newsletter-heading"
              className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl mb-8"
            >
              Ready to walk with us?
            </h2>
            <p className="text-[var(--color-secondary)] mb-12 max-w-xl mx-auto">
              Join thousands of other &ldquo;knuckleheads&rdquo; who are finding
              that grace is bigger than our biggest mistakes.
            </p>
            <div className="max-w-2xl mx-auto">
              <NewsletterForm />
            </div>
            <p className="text-[10px] text-white/40 mt-6 uppercase tracking-widest font-bold">
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
          <div className="mx-auto max-w-lg text-center">
            <span className="material-symbols-outlined text-[var(--color-primary-container)] text-4xl mb-4 block">
              chat_bubble
            </span>
            <h2
              id="chat-mitch-heading"
              className="font-[family-name:var(--font-headline)] text-3xl italic mb-4"
            >
              Need to talk?
            </h2>
            <p className="text-[var(--color-secondary)] mb-8">
              Have a story to share or a question about the book? I&apos;d love
              to hear from you.
            </p>
            <Link
              href="mailto:hello@christianknuckleheads.com"
              className="inline-block bg-[var(--color-primary-container)] text-[var(--color-on-primary-container)] px-10 py-4 font-bold uppercase tracking-widest text-sm hover:brightness-110 transition-all"
            >
              Start Conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
