import { Newsreader, Manrope } from "next/font/google";

export const newsreader = Newsreader({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-newsreader",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
});
