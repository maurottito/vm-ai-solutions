import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: new URL("https://maurottito.github.io/vm-ai-solutions"),
  icons: {
    icon: [
      { url: `${basePath}/favicon.ico`, sizes: "32x32" },
      { url: `${basePath}/icon.png`, type: "image/png", sizes: "64x64" },
    ],
    shortcut: `${basePath}/favicon.ico`,
    apple: `${basePath}/apple-icon.png`,
  },
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
      className={`${montserrat.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
