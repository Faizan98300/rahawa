import "./globals.css";
import type { Metadata } from "next";
import { CartProvider } from "@/lib/cart-context";

export const metadata: Metadata = {
  title: "Rawaha International Pvt Ltd – Paper Supplier & Business Card Paper in Pakistan",

  description:
    "Rawaha International Pvt Ltd is a trusted paper supplier based in Lahore, Pakistan. We provide business card paper, printing paper, and wholesale paper solutions across Pakistan.",

  verification: {
    google: "gQdDC3x6oOroyXB4qi7PlFfObbqgMN044XiG89hZvPE",
  },

  keywords: [
    "Rawaha International Pvt Ltd",
    "Rawaha International",
    "paper supplier Pakistan",
    "paper supplier Lahore",
    "paper business card Pakistan",
    "business card paper supplier",
    "printing paper Pakistan",
    "paper wholesale Pakistan",
    "Urdu Bazar paper supplier",
    "Rawaha paper",
  ],

  authors: [{ name: "Rawaha International Pvt Ltd" }],
  creator: "Rawaha International Pvt Ltd",
  publisher: "Rawaha International Pvt Ltd",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "Rawaha International Pvt Ltd – Paper Supplier in Lahore, Pakistan",
    description:
      "Rawaha International Pvt Ltd is a Lahore-based paper supplier providing business card paper, printing paper, and wholesale paper solutions across Pakistan.",
    url: "https://rawaha.online",
    siteName: "Rawaha International Pvt Ltd",
    images: [
      {
        url: "https://rawaha.online/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rawaha International Pvt Ltd Paper Supplier",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Rawaha International Pvt Ltd – Paper Supplier Pakistan",
    description:
      "Paper supplier in Lahore, Pakistan providing business card paper and wholesale printing paper solutions.",
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
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
