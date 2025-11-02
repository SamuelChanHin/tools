import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Navigation from "./components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevExp Tools - Free Online Developer Tools",
  description:
    "Free online developer tools: JSON formatter, CSV to JSON converter, Base64 encoder/decoder. Fast, secure, no signup required.",
  keywords:
    "developer tools, json formatter, csv converter, base64 encoder, online tools",
  openGraph: {
    title: "DevExp Tools - Free Developer Tools",
    description:
      "Professional developer tools for JSON, CSV, Base64, and more.",
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

        {/* Global Footer */}
        <footer className="footer">
          <div className="container">
            <p>
              Made with ❤️ for developers |{" "}
              <a href="/" className="footer-link">
                Home
              </a>{" "}
              |{" "}
              <a href="/json-formatter" className="footer-link">
                JSON Formatter
              </a>{" "}
              |{" "}
              <a href="/csv-to-json" className="footer-link">
                CSV to JSON
              </a>{" "}
              |{" "}
              <a href="/base64" className="footer-link">
                Base64
              </a>
            </p>
            <p className="footer-small">
              © 2025 DevExp Tools. All processing happens in your browser.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
