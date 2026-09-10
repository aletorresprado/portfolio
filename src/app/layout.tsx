import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Alejandro Torres — Designer × Developer",
    template: "%s — Alejandro Torres",
  },

  description:
    "Designer and developer focused on digital products, visual communication and software solutions. Available for remote opportunities and collaboration with agencies, studios and development teams.",

  keywords: [
    "Alejandro Torres",
    "Designer",
    "Developer",
    "Frontend Developer",
    "Full Stack Developer",
    "Graphic Designer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "UI Design",
    "Remote Developer",
  ],

  authors: [
    {
      name: "Alejandro Torres",
    },
  ],

  creator: "Alejandro Torres",

  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Alejandro Torres — Designer × Developer",
    description:
      "Design thinking, development skills and a technical mindset. Building digital products for agencies, studios and development teams.",
    siteName: "Alejandro Torres",
  },

  twitter: {
    card: "summary_large_image",
    title: "Alejandro Torres — Designer × Developer",
    description:
      "Designer and developer building digital products and visual experiences.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
