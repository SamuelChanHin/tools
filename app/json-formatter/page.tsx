import type { Metadata } from "next";
import JSONFormatter from "../components/JSONFormatter";
import AdSpace from "../components/AdSpace";

export const metadata: Metadata = {
  title: "JSON Formatter & Validator – DevExp Tools",
  description:
    "Format, validate, and beautify JSON instantly. No signup required. Privacy-first and free tool.",
  keywords:
    "json formatter, json validator, json beautifier, json minify, format json online, validate json",
  openGraph: {
    title: "Free JSON Formatter & Validator Online",
    description:
      "Format, validate, and beautify JSON data instantly. Free tool for developers.",
    type: "website",
  },
};

export default function JSONFormatterPage() {
  return (
    <div className="min-h-screen">
      <div className="container">
        <header className="header">
          <h1>🔧 JSON Formatter & Validator</h1>
          <p className="subtitle">
            Format, validate, and beautify JSON data instantly • Free online
            tool • No signup required
          </p>
        </header>

        <JSONFormatter />

        <AdSpace />

        <div className="content-section">
          <h2>What is a JSON Formatter?</h2>
          <p>
            A JSON formatter is an online tool that helps developers format,
            validate, and beautify JSON (JavaScript Object Notation) data. JSON
            is the most widely used data format for APIs, configuration files,
            and data exchange between web applications.
          </p>

          <h3>Why Use Our JSON Formatter?</h3>
          <p>
            Working with minified or unformatted JSON can be challenging and
            error-prone. Our free JSON formatter helps you:
          </p>
          <ul>
            <li>
              <strong>Format JSON instantly</strong> - Convert minified JSON
              into readable, properly indented format
            </li>
            <li>
              <strong>Validate JSON syntax</strong> - Detect errors with
              detailed error messages showing exactly where the problem is
            </li>
            <li>
              <strong>Minify JSON</strong> - Compress JSON by removing
              unnecessary whitespace for production
            </li>
            <li>
              <strong>Debug API responses</strong> - Quickly understand complex
              JSON structures from API calls
            </li>
            <li>
              <strong>Copy formatted output</strong> - One-click copy to
              clipboard for easy pasting
            </li>
          </ul>

          <h3>How to Format JSON Online</h3>
          <p>Using our JSON formatter is simple:</p>
          <ol>
            <li>Paste your JSON data into the input field on the left</li>
            <li>
              Click "Format & Beautify" to format your JSON with proper
              indentation
            </li>
            <li>Click "Validate" to check for syntax errors in your JSON</li>
            <li>Click "Minify" to compress your JSON for production use</li>
            <li>Click "Copy" to copy the formatted output to your clipboard</li>
          </ol>

          <h3>Common JSON Formatting Use Cases</h3>
          <ul>
            <li>
              <strong>API Development</strong> - Format API responses for easier
              debugging and testing
            </li>
            <li>
              <strong>Configuration Files</strong> - Validate and format JSON
              configuration files
            </li>
            <li>
              <strong>Data Analysis</strong> - Make complex JSON data structures
              easier to understand
            </li>
            <li>
              <strong>Learning JSON</strong> - Understand JSON structure and
              syntax better
            </li>
            <li>
              <strong>Code Review</strong> - Present JSON data in a readable
              format for team review
            </li>
          </ul>

          <h3>Privacy and Security</h3>
          <p>
            All JSON formatting and validation happens directly in your browser.
            Your data never leaves your device and is not stored on any server,
            ensuring complete privacy and security for sensitive data.
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <h4>✨ Format & Beautify</h4>
              <p>
                Transform minified JSON into readable, properly indented format
                instantly.
              </p>
            </div>
            <div className="feature-card">
              <h4>✓ Validate JSON</h4>
              <p>
                Detect syntax errors with detailed error messages and line
                numbers.
              </p>
            </div>
            <div className="feature-card">
              <h4>⚡ Minify</h4>
              <p>Compress JSON by removing whitespace for production use.</p>
            </div>
            <div className="feature-card">
              <h4>🌙 Dark Mode</h4>
              <p>
                Automatically adapts to your system's color scheme preference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
