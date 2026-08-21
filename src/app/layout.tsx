import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "We Should All Be Feminists | Academic Presentation",
  description: "Academic presentation on Chimamanda Ngozi Adichie's essay 'We Should All Be Feminists' for SRM Institute of Science and Technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} scroll-smooth`}>
      <body className="font-sans bg-cream-50 text-slate-800 antialiased selection:bg-plum-900 selection:text-gold-400">
        {children}
      </body>
    </html>
  );
}
