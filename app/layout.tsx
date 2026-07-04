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
  metadataBase: new URL("https://maurottito.github.io/vm-ai-solutions"),
  title: "VM AI Solutions — AI-Powered Software & Analytics",
  description:
    "VM AI Solutions LLC builds custom AI systems, data analytics platforms, and software for businesses and the public sector.",
  openGraph: {
    title: "VM AI Solutions",
    description:
      "Custom AI systems, data analytics platforms, and software development for businesses and the public sector.",
    type: "website",
    siteName: "VM AI Solutions",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "VM AI Solutions",
    description:
      "Custom AI systems, data analytics platforms, and software development for businesses and the public sector.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
