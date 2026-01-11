import "./globals.css";
import type { Metadata } from "next";
import { CartProvider } from "@/lib/cart-context";

export const metadata: Metadata = {
  title: "Rawaha | Best Paper & Printing Seller in Lahore – Urdu Bazar",

 description:
    "Rawaha is the most trusted paper and printing seller in Lahore Urdu Bazar. Serving all Pakistan since 2016 with best prices and quality.",

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
     "Rawaha",
    "Rahawa",
    "paper seller in Lahore",
    "best paper seller in Lahore",
    "paper seller in Pakistan",
    "paper shop Urdu Bazar",
    "printing paper Lahore"
  ],
  icons: {
    icon: "/111.png",

  authors: [{ name: "Rawaha International Pvt Ltd" }],
  creator: "Rawaha International Pvt Ltd",
  publisher: "Rawaha International Pvt Ltd",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Rawaha – Best Paper Seller in Lahore",
    description:
      "Trusted paper and printing seller in Lahore Urdu Bazar. Nationwide delivery across Pakistan.",
    url: "https://rawaha.online",
    siteName: "Rawaha",
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
