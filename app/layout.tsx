import "./globals.css";
import type { Metadata } from "next";
import { CartProvider } from "@/lib/cart-context";

export const metadata: Metadata = {
  title: "Rawaha International Pvt Ltd – Paper Supplier & Business Card Paper in Pakistan
",
  description: "Digital solutions and printing services",

  verification: {
    google: "gQdDC3x6oOroyXB4qi7PlFfObbqgMN044XiG89hZvPE",
  },

  keywords: [
    "Rawaha",
    "Rawaha.online",
    "paper printing services",
    "printing",
    "digital solutions",
  ],

  authors: [{ name: "Rawaha Team" }],
  creator: "Rawaha",
  publisher: "Rawaha",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Rawaha",
    description: "Rawaha digital and printing solutions",
    url: "https://rawaha.online",
    siteName: "Rawaha",
    images: [
      {
        url: "https://rawaha.online/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rawaha",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Rawaha",
    description: "Rawaha digital solutions",
    images: ["https://rawaha.online/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
