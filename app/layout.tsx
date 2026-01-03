import type { Metadata } from "next";

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
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
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
    locale: "en_US",
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
      <body>{children}</body>
    </html>
  );
}

