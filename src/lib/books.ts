export interface Book {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  price: number;
  coverImage: string;
  features: { icon: string; title: string; description: string }[];
  testimonials: { quote: string; name: string; role: string }[];
  retailers: { name: string; icon: string; url: string }[];
}

export const books: Record<string, Book> = {
  "daily-devotionals": {
    slug: "daily-devotionals",
    title: "Daily Devotions for the Christian Knucklehead",
    subtitle: "Wisdom for the rest of us",
    description:
      "Real faith for real people who mess up. A 365-day journey through the awkward, the honest, and the undeniably holy moments of being human.",
    price: 32,
    coverImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAaXcYuyOnZ_WFwe_ut3nr5G-BTJu5z-DV-9mXPmaxDGrh2-AwFmkgyxIMdTeNfNP6DvjxOGpPkZ1IDWI2iNvv1BTq2L6jepOzVAS3hHP2LQqcH0DWb3v-was2nVPZYTOWs5Y8nM7Lq-F_rRbx640VolHjFxF1b0UPDoeWenr618PoeQCAXax-O90sgqq7Fu38lSf4x1M_5oJYiYfocemffgp6Om5H3pZyTRPwILw0r_wVIjRFU95ALf3NQx_bRUvHIhusfizFR-8o",
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
      { name: "Amazon", icon: "shopping_cart", url: "#" },
      { name: "Barnes & Noble", icon: "book", url: "#" },
      { name: "Walmart", icon: "store", url: "#" },
      { name: "BAM!", icon: "local_library", url: "#" },
      { name: "Kindle", icon: "tablet_android", url: "#" },
    ],
  },
};

export function getBook(slug: string): Book | undefined {
  return books[slug];
}
