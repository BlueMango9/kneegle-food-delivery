import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kneegle - Order Food Online | University Campus Delivery",
  description: "Order food online from top restaurants near Kattankulathur, Chennai. Fast delivery to SRM Campus.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className="font-sans bg-gray-100 text-gray-900 antialiased selection:bg-[#E23744] selection:text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
