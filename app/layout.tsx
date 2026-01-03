import type { Metadata } from "next";
import { CartProvider } from "@/lib/cart-context";

export const metadata: Metadata = {
  title: "Rawaha",
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


