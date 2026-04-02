export interface Book {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  price: number;
  coverImage: string;
  features: { icon: string; title: string; description: string }[];
  testimonials: { quote: string; name: string; role: string }[];
  retailers: { name: string; icon: string; url: string; comingSoon?: boolean }[];
}

export const books: Record<string, Book> = {
  "daily-devotionals": {
    slug: "daily-devotionals",
    title: "Daily Devotions for Christian Knuckleheads",
    subtitle: "Wisdom for the rest of us",
    description:
      "Real faith for real people who mess up. A 365-day journey through the awkward, the honest, and the undeniably holy moments of being human.",
    price: 32,
    coverImage: "/images/book-cover.png",
    features: [
      {
        icon: "auto_stories",
        title: "365 Raw & Honest Daily Devotions",
        description: "Bite-sized wisdom designed for busy mornings and quiet nights.",
      },
      {
        icon: "history_edu",
        title: "Premium Canvas Hardcover Binding",
        description: "Interactive prompts to capture your own journey.",
      },
      {
        icon: "brush",
        title: "Space for Your Own Messy Thoughts",
        description: "Over 20 custom illustrations by the author.",
      },
    ],
    testimonials: [
      {
        quote:
          "Finally, a devotional that doesn't feel like a lecture from a perfect person. It's like sitting down with a friend who's been through it all.",
        name: "Sarah J.",
        role: "Reader",
      },
      {
        quote:
          "Mitch has a way of finding God in the middle of a bad day. This book is the daily reminder I didn't know I needed.",
        name: "David L.",
        role: "Pastor",
      },
      {
        quote:
          "Honest, raw, and surprisingly funny. It's the most relatable faith-based book I've read in years.",
        name: "Marcus T.",
        role: "Author",
      },
    ],
    retailers: [
      { name: "Amazon", icon: "shopping_cart", url: "", comingSoon: true },
      { name: "Barnes & Noble", icon: "book", url: "", comingSoon: true },
      { name: "Walmart", icon: "store", url: "", comingSoon: true },
      { name: "BAM!", icon: "local_library", url: "", comingSoon: true },
      { name: "Kindle", icon: "tablet_android", url: "", comingSoon: true },
    ],
  },
};

export function getBook(slug: string): Book | undefined {
  return books[slug];
}
