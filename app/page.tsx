import type { Metadata } from "next";
import ToolCard from "./components/ToolCard";

export const metadata: Metadata = {
  title: "DevExp Tools – Free Developer Tools Online",
  description:
    "Discover fast, free, privacy-first developer tools including JSON formatter, CSV to JSON, & more.",
  keywords:
    "developer tools, json formatter, csv converter, base64 encoder, online tools, free tools",
  openGraph: {
    title: "DevExp Tools - Free Online Developer Tools",
    description:
      "Professional developer tools for JSON, CSV, Base64, and more.",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <div className="container">
        <header className="homepage-header">
          <h1 className="homepage-title">🔧 DevExp Tools</h1>
          <p className="homepage-subtitle">
            Professional developer tools • Free forever • No signup required •
            Privacy-first
          </p>
        </header>

        <div className="tools-grid">
          <ToolCard
            title="JSON Formatter"
            description="Format, validate, beautify, and minify JSON data instantly with syntax highlighting."
            icon="📝"
            href="/json-formatter"
            tags={["JSON", "Formatter", "Validator"]}
          />

          <ToolCard
            title="CSV to JSON"
            description="Convert CSV files to JSON format with custom delimiters and header support."
            icon="📊"
            href="/csv-to-json"
            tags={["CSV", "JSON", "Converter"]}
          />

          <ToolCard
            title="Base64 Encoder"
            description="Encode text to Base64 or decode Base64 strings with file upload support."
            icon="🔐"
            href="/base64"
            tags={["Base64", "Encoder", "Decoder"]}
          />

          {/* Add more tools as you build them */}
          {/* <ToolCard
            title="URL Encoder"
            description="Encode and decode URLs for safe transmission"
            icon="🔗"
            href="/url-encoder"
            tags={['URL', 'Encoder', 'Decoder']}
          /> */}
        </div>

        <section className="content-section">
          <h2>Free Developer Tools for Everyone</h2>
          <p>
            DevExp Tools provides a collection of free online utilities designed
            for developers, data analysts, and anyone working with data formats.
            All tools run entirely in your browser, ensuring your data stays
            private and secure.
          </p>

          <h3>Why Choose DevExp Tools?</h3>
          <div className="features-grid">
            <div className="feature-card">
              <h4>🚀 Fast & Efficient</h4>
              <p>
                All processing happens locally in your browser for instant
                results.
              </p>
            </div>
            <div className="feature-card">
              <h4>🔒 Privacy First</h4>
              <p>
                Your data never leaves your device. No server uploads, no
                tracking.
              </p>
            </div>
            <div className="feature-card">
              <h4>💯 Free Forever</h4>
              <p>
                All tools are completely free with no limitations or hidden
                fees.
              </p>
            </div>
            <div className="feature-card">
              <h4>📱 Works Everywhere</h4>
              <p>
                Responsive design works perfectly on desktop, tablet, and
                mobile.
              </p>
            </div>
          </div>

          <h3>Our Tools</h3>
          <ul>
            <li>
              <strong>JSON Formatter & Validator</strong> - Format, validate,
              beautify, and minify JSON with error detection
            </li>
            <li>
              <strong>CSV to JSON Converter</strong> - Transform CSV data into
              JSON format with custom delimiters
            </li>
            <li>
              <strong>Base64 Encoder/Decoder</strong> - Encode text to Base64 or
              decode Base64 strings
            </li>
          </ul>

          <h3>Who Uses DevExp Tools?</h3>
          <p>Our tools are trusted by:</p>
          <ul>
            <li>
              <strong>Web Developers</strong> - Debug API responses, format
              configuration files
            </li>
            <li>
              <strong>Data Analysts</strong> - Convert and transform data
              between formats
            </li>
            <li>
              <strong>QA Engineers</strong> - Validate data structures and test
              cases
            </li>
            <li>
              <strong>Students</strong> - Learn data formats and practice coding
            </li>
            <li>
              <strong>DevOps Engineers</strong> - Work with configuration and
              deployment data
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
