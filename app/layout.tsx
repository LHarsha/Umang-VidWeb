import type { Metadata } from "next";
import { Outfit, Syne } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "BeaztMotions — Premium video editing",
  description:
    "Freelance video editor for YouTube, Reels, color grading, and motion graphics. Premium cuts for creators and brands.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${syne.variable} h-full scroll-smooth antialiased`}
    >
      <body className="film-grain min-h-full bg-background font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}
