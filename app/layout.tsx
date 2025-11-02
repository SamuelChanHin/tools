import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Navigation from "./components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Free JSON & CSV Tools - Format, Validate, Convert Online | DevExp",
  description:
    "Free online developer tools: JSON formatter, validator, CSV to JSON converter. Fast, secure, and easy to use. No signup required.",
  keywords:
    "json formatter, json validator, csv to json, json converter, format json online, csv converter",
  openGraph: {
    title: "Free JSON & CSV Tools Online",
    description: "Format JSON, convert CSV to JSON, and more developer tools.",
    type: "website",
  },
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
      <head>
        {/* Google Analytics - Replace G-XXXXXXXXXX with your tracking ID */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-CRGL21CS6T"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-CRGL21CS6T');`}
        </Script>
      </head>
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
