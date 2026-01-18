import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import SocialSidebar from "@/components/social-sidebar"
import { CartProvider } from "@/lib/cart-context"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rawaha",
  description: "Digital solutions and printing services",
  keywords: [
    "Rawaha",
    "Rawaha.online",
    "paper printing services",
    "printing",
    "digital solutions",
  ],
  authors: [{ name: "Rawaha Team" }],
  creator: "rawaha",
  publisher: "rawaha",
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${geist.className} ${geistMono.className} antialiased`}>
        <CartProvider>
          {children}
          <SocialSidebar />
        </CartProvider>
        <Analytics />
      </body>
    </html>
  )
}
