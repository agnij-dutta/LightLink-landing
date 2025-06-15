import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LightLink - Decentralized Cross-Chain Verification",
  description: "LightLink enables trustless cross-chain state verification through ZK proof aggregation. Built for Chromion Hackathon 2025 - connecting Ethereum, Arbitrum, Optimism, Avalanche, and more.",
  keywords: ["blockchain", "cross-chain", "zk-proofs", "ethereum", "arbitrum", "optimism", "avalanche", "chainlink", "defi", "web3"],
  authors: [{ name: "LightLink Team" }],
  creator: "LightLink",
  publisher: "LightLink",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://lightlink.network'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "LightLink - Decentralized Cross-Chain Verification",
    description: "Enable trustless cross-chain state verification through ZK proof aggregation. Connect multiple blockchain networks seamlessly.",
    url: 'https://lightlink.network',
    siteName: 'LightLink',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'LightLink - Cross-Chain ZK Verification',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "LightLink - Decentralized Cross-Chain Verification",
    description: "Enable trustless cross-chain state verification through ZK proof aggregation.",
    images: ['/og-image.png'],
    creator: '@lightlink',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#8B5CF6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="LightLink" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
