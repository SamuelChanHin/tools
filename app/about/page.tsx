import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About DevExp Tools - Free Developer Tools & Converters",
  description:
    "Learn about DevExp Tools, our mission to provide free, privacy-first developer tools for JSON formatting, CSV conversion, Base64 encoding, and more.",
  keywords: "about devexp, developer tools, free tools, online converters",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="container">
        <header className="header">
          <h1>About DevExp Tools</h1>
          <p className="subtitle">
            Free, privacy-first developer tools built by developers, for
            developers
          </p>
        </header>

        <div className="content-section">
          <h2>Our Mission</h2>
          <p>
            DevExp Tools was created to provide developers with fast, reliable,
            and completely free online tools for everyday development tasks. We
            believe that essential developer utilities should be accessible to
            everyone without requiring signups, subscriptions, or complex
            installations.
          </p>

          <h2>What We Offer</h2>
          <p>
            Our growing collection of tools helps developers work more
            efficiently:
          </p>
          <ul>
            <li>
              <strong>JSON Formatter & Validator</strong> - Format, validate,
              beautify, and minify JSON data with syntax highlighting
            </li>
            <li>
              <strong>CSV to JSON Converter</strong> - Transform CSV files into
              JSON format with custom delimiter support
            </li>
            <li>
              <strong>Base64 Encoder/Decoder</strong> - Encode text to Base64 or
              decode Base64 strings with file upload support
            </li>
          </ul>
          <p>
            We're constantly adding new tools based on developer feedback and
            common needs in the software development community.
          </p>

          <h2>Our Values</h2>

          <h3>Privacy First</h3>
          <p>
            All data processing happens directly in your browser using
            client-side JavaScript. Your data never leaves your device and is
            never uploaded to our servers. We don't track what you process,
            store your files, or collect any personal information beyond
            standard anonymous analytics.
          </p>

          <h3>Always Free</h3>
          <p>
            We believe essential developer tools should be free and accessible
            to everyone. All our tools are completely free to use with no hidden
            fees, paywalls, or feature limitations. We support the site through
            ethical advertising that doesn't compromise user experience.
          </p>

          <h3>No Signup Required</h3>
          <p>
            Start using our tools immediately without creating an account,
            providing an email address, or going through any registration
            process. We respect your time and privacy.
          </p>

          <h3>Open & Transparent</h3>
          <p>
            We're committed to transparency in how our tools work and how we
            operate the site. If you have questions about our practices or
            suggestions for improvement, we're always happy to hear from you.
          </p>

          <h2>Who We Are</h2>
          <p>
            DevExp Tools is maintained by a team of experienced developers who
            understand the daily challenges of software development. We've built
            these tools because we use them ourselves and wanted to share them
            with the broader developer community.
          </p>
          <p>
            Our team has years of experience in web development, backend
            systems, and DevOps. We understand the importance of reliable, fast
            tools that just work when you need them.
          </p>

          <h2>Technology</h2>
          <p>
            DevExp Tools is built with modern web technologies to ensure fast
            performance and reliability:
          </p>
          <ul>
            <li>
              <strong>Next.js</strong> - React framework for fast, SEO-friendly
              pages
            </li>
            <li>
              <strong>Client-side Processing</strong> - All data processing
              happens in your browser
            </li>
            <li>
              <strong>Responsive Design</strong> - Works perfectly on desktop,
              tablet, and mobile devices
            </li>
            <li>
              <strong>Dark Mode Support</strong> - Automatically adapts to your
              system preferences
            </li>
          </ul>

          <h2>Contact & Support</h2>
          <p>
            We value feedback from our users. Whether you've found a bug, have a
            feature request, or want to suggest a new tool, please don't
            hesitate to reach out through our{" "}
            <Link href="/contact">contact page</Link>.
          </p>

          <h2>Supporting DevExp Tools</h2>
          <p>If you find our tools useful, you can support us by:</p>
          <ul>
            <li>Sharing DevExp Tools with other developers</li>
            <li>Providing feedback and suggestions for improvements</li>
            <li>Supporting us through our Buy Me a Coffee page</li>
            <li>Following us on social media for updates</li>
          </ul>

          <div className="features-grid" style={{ marginTop: "32px" }}>
            <div className="feature-card">
              <h4>🔒 Privacy-Focused</h4>
              <p>
                All processing happens in your browser. Your data never leaves
                your device.
              </p>
            </div>
            <div className="feature-card">
              <h4>⚡ Lightning Fast</h4>
              <p>Instant results with no server delays or waiting times.</p>
            </div>
            <div className="feature-card">
              <h4>🆓 Completely Free</h4>
              <p>No hidden fees, subscriptions, or feature limitations.</p>
            </div>
            <div className="feature-card">
              <h4>🌐 Works Everywhere</h4>
              <p>Responsive design works on all devices and browsers.</p>
            </div>
          </div>

          <div style={{ marginTop: "48px", textAlign: "center" }}>
            <h3>Ready to Get Started?</h3>
            <p>Explore our collection of free developer tools:</p>
            <div
              style={{
                display: "flex",
                gap: "12px",
                justifyContent: "center",
                flexWrap: "wrap",
                marginTop: "20px",
              }}
            >
              <Link href="/json-formatter" className="btn btn-primary">
                JSON Formatter
              </Link>
              <Link href="/csv-to-json" className="btn btn-primary">
                CSV to JSON
              </Link>
              <Link href="/base64" className="btn btn-primary">
                Base64 Encoder
              </Link>
              <Link href="/" className="btn btn-secondary">
                View All Tools
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
