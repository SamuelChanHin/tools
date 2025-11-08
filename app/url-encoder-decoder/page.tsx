import type { Metadata } from "next";
import AdSpace from "../components/AdSpace";
import UrlEncoderDecoder from "../components/UrlEncoderDecoder";

export const metadata: Metadata = {
  title: "URL Encoder & Decoder – Free Developer Tool",
  description:
    "Encode and decode URLs instantly with our free online URL Encoder & Decoder. Privacy-first and no signup required.",
  keywords:
    "url encode, url decode, url encoder, url decoder, encode url online, decode url online, url encoding tool",
  openGraph: {
    title: "Free URL Encoder & Decoder Online",
    description: "Encode and decode URLs instantly. Free, fast, and secure.",
    type: "website",
  },
};

export default function UrlEncoderDecoderPage() {
  return (
    <div className="min-h-screen">
      <div className="container">
        <header className="header">
          <h1>🌐 URL Encoder & Decoder</h1>
          <p className="subtitle">
            Encode text to URL-safe format or decode URL-encoded text instantly
            • Free online tool • No signup required
          </p>
        </header>

        <UrlEncoderDecoder />

        <AdSpace />

        <div className="content-section">
          <h2>What is URL Encoding?</h2>
          <p>
            URL encoding converts characters into a format that can be safely
            transmitted over the internet. This replaces unsafe characters with
            escape sequences using the percent (%) sign followed by two
            hexadecimal digits.
          </p>

          <h3>Why Use URL Encoding?</h3>
          <ul>
            <li>
              <strong>Encode query parameters</strong> or form data in URLs
            </li>
            <li>
              <strong>Ensure safe transmission</strong> of URLs without
              corruption
            </li>
            <li>
              <strong>Decode encoded URLs</strong> back to human-readable form
            </li>
          </ul>

          <h3>How to Use This Tool</h3>
          <p>
            Select <strong>Encode</strong> or <strong>Decode</strong> mode,
            enter your text or URL below, then click the button to get your
            result instantly.
          </p>

          <h3>Privacy and Security</h3>
          <p>
            All URL encoding and decoding operations happen
            <strong> locally in your browser</strong>. Your data never leaves
            your device and is not uploaded or stored on any server, ensuring
            your privacy and security.
          </p>

          <div className="features-grid" style={{ marginTop: 40 }}>
            <div className="feature-card">
              <h4>🌐 Encode URLs</h4>
              <p>Quickly convert text to URL-safe encoded strings.</p>
            </div>
            <div className="feature-card">
              <h4>🔓 Decode URLs</h4>
              <p>Decode URL-encoded strings back to readable text.</p>
            </div>
            <div className="feature-card">
              <h4>⚡ Real-Time Conversion</h4>
              <p>Instantly see your encoded or decoded results as you type.</p>
            </div>
            <div className="feature-card">
              <h4>🔒 Privacy First</h4>
              <p>
                All processing is done directly in your browser; no data leaves
                your device.
              </p>
            </div>
          </div>

          <h3>Common Use Cases</h3>
          <ul>
            <li>Encoding data for query strings or URLs</li>
            <li>Decoding input from web forms or API responses</li>
            <li>Preparing data safely for web requests</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
