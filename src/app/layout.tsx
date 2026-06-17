import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { site } from "@/data/site";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Premium Interior Design Studio`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "interior design",
    "Prayog Interiors",
    "residential interior design",
    "commercial interiors",
    "modular kitchen",
    "Jaipur interior designer",
    "turnkey interiors",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    title: `${site.name} — Premium Interior Design Studio`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    images: [
      {
        url: "/projects/giriraj/cover.webp",
        width: 1920,
        height: 1130,
        alt: "Prayog Interiors — refined living room interior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Premium Interior Design Studio`,
    description: site.description,
    images: ["/projects/giriraj/cover.webp"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="noise-overlay">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
