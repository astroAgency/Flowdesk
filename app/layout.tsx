import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { LanguageProvider } from "@/context/language-context";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Flowdesk - Your team's work, finally in one place",
  description:
    "Flowdesk brings tasks, docs, and chat together so your team spends less time switching tabs and more time shipping.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
