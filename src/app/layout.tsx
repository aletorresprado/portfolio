import { getLanguage, getTranslator } from "@/lib/i18n/server";
import { LanguageProvider } from "@/components/LanguageProvider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AtlasChat from "@/components/Atlas/AtlasChat";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const language = await getLanguage();
  const t = await getTranslator();
  return {
  title: {
    default: t("Alejandro Torres — Designer × Developer"),
    template: "%s — Alejandro Torres",
  },

  description:
    t("Designer and developer focused on digital products, visual communication and software solutions. Available for remote opportunities and collaboration with agencies, studios and development teams."),

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
    locale: language === "es" ? "es_AR" : "en_US",
    title: t("Alejandro Torres — Designer × Developer"),
    description:
      t("Design thinking, development skills and a technical mindset. Building digital products for agencies, studios and development teams."),
    siteName: "Alejandro Torres",
  },

  twitter: {
    card: "summary_large_image",
    title: t("Alejandro Torres — Designer × Developer"),
    description:
      t("Designer and developer building digital products and visual experiences."),
  },

  robots: {
    index: true,
    follow: true,
  },
  };
}

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const language = await getLanguage();
  return (
    <html
      lang={language}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider initialLanguage={language}>
          {children}
          <AtlasChat />
        </LanguageProvider>
        <GoogleAnalytics gaId="G-03LJ5PFFM6" />
      </body>
    </html>
  );
}
