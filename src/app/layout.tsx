import type { Metadata } from "next"
import { Roboto, Josefin_Sans, Open_Sans } from "next/font/google"
import "./globals.css"

const roboto = Roboto({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
})

const josefinSans = Josefin_Sans({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-josefin",
  display: "swap",
})

const openSans = Open_Sans({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-open-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "TANYA SMIT | Gaming Platform",
    template: "%s | TANYA SMIT",
  },
  description:
    "Level up with TANYA SMIT – your ultimate destination for immersive gaming. Explore next-gen titles, cutting-edge graphics, pro tips, and a premium gaming experience like never before.",
  keywords: ["gaming", "tournaments", "leaderboards", "gaming community", "TANYA SMIT"],
  authors: [{ name: "TANYA SMIT" }],
  creator: "TANYA SMIT",
  publisher: "TANYA SMIT",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://tanyasmit.gg"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "TANYA SMIT | Gaming Platform",
    description:
      "Level up with TANYA SMIT – your ultimate destination for immersive gaming. Explore next-gen titles, cutting-edge graphics, pro tips, and a premium gaming experience like never before.",
    siteName: "TANYA SMIT",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "TANYA SMIT Gaming Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TANYA SMIT | Gaming Platform",
    description:
      "Level up with TANYA SMIT – your ultimate destination for immersive gaming.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  themeColor: "#000000",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "TANYA SMIT",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${josefinSans.variable} ${openSans.variable} font-body`}>{children}</body>
    </html>
  )
}