import "./globals.css";
import type { Metadata } from "next";
import { CartProvider } from "@/lib/cart-context";

export const metadata: Metadata = {
  metadataBase: new URL("https://rawaha.online"),

  title: {
    default: "Rawaha International Pvt Ltd | Paper & Printing Supplier in Lahore",
    template: "%s | Rawaha International Pvt Ltd",
  },

  description:
    "Rawaha International Pvt Ltd is a trusted paper and printing supplier in Lahore Urdu Bazar. Serving all Pakistan since 2016 with premium quality and best prices.",

  verification: {
    google: "gQdDC3x6oOroyXB4qi7PlFfObbqgMN044XiG89hZvPE",
  },

  keywords: [
    "Rawaha International Pvt Ltd",
    "Rawaha International",
    "paper supplier Pakistan",
    "paper supplier Lahore",
    "printing paper Pakistan",
    "paper wholesale Pakistan",
    "business card paper supplier",
    "Urdu Bazar paper supplier",
    "paper seller in Lahore",
    "best paper seller in Lahore",
    "paper shop Urdu Bazar",
    "Rawaha paper",
    "Rawaha",
    "Rahawa",
  ],

  alternates: {
    canonical: "https://rawaha.online",
  },

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  authors: [{ name: "Rawaha International Pvt Ltd" }],
  creator: "Rawaha International Pvt Ltd",
  publisher: "Rawaha International Pvt Ltd",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Rawaha International Pvt Ltd – Paper Supplier in Lahore",
    description:
      "Trusted paper and printing supplier in Lahore Urdu Bazar. Nationwide delivery across Pakistan.",
    url: "https://rawaha.online",
    siteName: "Rawaha International Pvt Ltd",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rawaha International Pvt Ltd Paper Supplier",
      },
    ],
    locale: "en_PK",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Rawaha International Pvt Ltd – Paper Supplier Pakistan",
    description:
      "Paper supplier in Lahore providing business card paper and wholesale printing paper across Pakistan.",
    images: ["/og-image.jpg"],
  },

  themeColor: "#ffffff",
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

