import type { Metadata } from "next";
import { newsreader, manrope } from "@/lib/fonts";
import "@/styles/globals.css";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { BottomNav } from "@/components/BottomNav";
import { ToastProvider } from "@/components/Toast";

export const metadata: Metadata = {
  title: {
    default: "Christian Knuckleheads | Iron & Ink",
    template: "%s | Christian Knuckleheads",
  },
  description:
    "Real faith for real people who mess up. Daily devotionals, community, and merchandise for the beautifully imperfect.",
  metadataBase: new URL("https://christianknuckleheads.com"),
  icons: {
    icon: "/images/ck-logo-transparent.png",
    apple: "/images/ck-logo-transparent.png",
  },
  openGraph: {
    type: "website",
    siteName: "Christian Knuckleheads",
    title: "Christian Knuckleheads | Iron & Ink",
    description:
      "Real faith for real people who mess up. Daily devotionals, community, and merchandise for the beautifully imperfect.",
    images: [
      {
        url: "/images/book-cover.png",
        width: 500,
        height: 667,
        alt: "Daily Devotions for Christian Knuckleheads book cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Knuckleheads | Iron & Ink",
    description:
      "Real faith for real people who mess up. Daily devotionals, community, and merchandise.",
    images: ["/images/book-cover.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${newsreader.variable} ${manrope.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="bg-[var(--color-surface)] text-[var(--color-on-surface)] antialiased overflow-x-hidden">
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <ToastProvider>
          <NavBar />
          <main id="main-content" className="pb-16 md:pb-0">{children}</main>
          <Footer />
          <BottomNav />
        </ToastProvider>
      </body>
    </html>
  );
}
