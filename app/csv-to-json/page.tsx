import type { Metadata } from "next";
import AdSpace from "../components/AdSpace";
import CSVToJSON from "../components/CSVToJSON";

export const metadata: Metadata = {
  title: "Free CSV to JSON Converter Online | Convert CSV to JSON Instantly",
  description:
    "Convert CSV files to JSON format instantly. Free online CSV to JSON converter with preview, validation, and download. Supports custom delimiters and headers.",
  keywords:
    "csv to json, csv converter, convert csv to json online, csv to json converter, csv parser, json converter",
  openGraph: {
    title: "Free CSV to JSON Converter Online",
    description:
      "Convert CSV files to JSON format instantly. Free, fast, and secure.",
    type: "website",
  },
};

export default function CSVToJSONPage() {
  return (
    <div className="min-h-screen">
      <div className="container">
        <header className="header">
          <h1>📊 CSV to JSON Converter</h1>
          <p className="subtitle">
            Convert CSV files to JSON format instantly • Free online tool • No
            signup required
          </p>
        </header>

        <CSVToJSON />

        <AdSpace />

        <div className="content-section">
          <h2>What is a CSV to JSON Converter?</h2>
          <p>
            A CSV to JSON converter is a free online tool that transforms CSV
            (Comma-Separated Values) files into JSON (JavaScript Object
            Notation) format. CSV files are commonly used in spreadsheets and
            databases, while JSON is the standard format for web APIs and modern
            applications.
          </p>

          <h3>Why Convert CSV to JSON?</h3>
          <p>
            Converting CSV to JSON is essential when working with web
            development and APIs:
          </p>
          <ul>
            <li>
              <strong>API Integration</strong> - Most modern APIs use JSON
              format for data exchange
            </li>
            <li>
              <strong>Web Applications</strong> - JavaScript works natively with
              JSON data structures
            </li>
            <li>
              <strong>Data Processing</strong> - JSON supports nested data
              better than flat CSV files
            </li>
            <li>
              <strong>Database Import</strong> - NoSQL databases like MongoDB
              use JSON-like documents
            </li>
            <li>
              <strong>Configuration Files</strong> - JSON is preferred for
              modern application configs
            </li>
          </ul>

          <h3>How to Convert CSV to JSON Online</h3>
          <p>Using our CSV to JSON converter is simple:</p>
          <ol>
            <li>
              Paste your CSV data into the input field or upload a CSV file
            </li>
            <li>Choose your delimiter (comma, semicolon, tab, or custom)</li>
            <li>Select if your CSV has a header row</li>
            <li>Click "Convert to JSON" to see the formatted JSON output</li>
            <li>Download the JSON file or copy to clipboard</li>
          </ol>

          <h3>CSV to JSON Conversion Examples</h3>
          <p>Here's how CSV data transforms into JSON format:</p>

          <div className="example-box">
            <h4>Input CSV:</h4>
            <pre>
              name,age,city John Doe,30,Hong Kong Jane Smith,25,Tokyo Mike
              Johnson,35,Singapore
            </pre>

            <h4>Output JSON:</h4>
            <pre>{`[
  {
    "name": "John Doe",
    "age": "30",
    "city": "Hong Kong"
  },
  {
    "name": "Jane Smith",
    "age": "25",
    "city": "Tokyo"
  },
  {
    "name": "Mike Johnson",
    "age": "35",
    "city": "Singapore"
  }
]`}</pre>
          </div>

          <h3>Common CSV to JSON Use Cases</h3>
          <ul>
            <li>
              <strong>Excel to API</strong> - Export data from Excel/Google
              Sheets and convert to JSON for APIs
            </li>
            <li>
              <strong>Database Migration</strong> - Convert SQL query results
              (CSV) to JSON for NoSQL databases
            </li>
            <li>
              <strong>Data Analysis</strong> - Transform CSV datasets into JSON
              for JavaScript data processing
            </li>
            <li>
              <strong>Web Development</strong> - Convert spreadsheet data to
              JSON for frontend applications
            </li>
            <li>
              <strong>Configuration Management</strong> - Convert CSV config
              data to JSON format
            </li>
          </ul>

          <h3>Features of Our CSV to JSON Converter</h3>
          <ul>
            <li>
              <strong>Multiple Delimiters</strong> - Support for comma,
              semicolon, tab, and custom delimiters
            </li>
            <li>
              <strong>Header Detection</strong> - Automatically use first row as
              JSON keys or provide custom headers
            </li>
            <li>
              <strong>File Upload</strong> - Upload CSV files directly from your
              computer
            </li>
            <li>
              <strong>Large File Support</strong> - Handle CSV files with
              thousands of rows
            </li>
            <li>
              <strong>Preview Output</strong> - See formatted JSON before
              downloading
            </li>
            <li>
              <strong>One-Click Download</strong> - Export JSON file instantly
            </li>
            <li>
              <strong>Privacy First</strong> - All conversion happens in your
              browser, no data uploaded
            </li>
          </ul>

          <h3>CSV Delimiters Supported</h3>
          <p>Our converter supports all common CSV delimiters:</p>
          <ul>
            <li>
              <strong>Comma (,)</strong> - Standard CSV format
            </li>
            <li>
              <strong>Semicolon (;)</strong> - Common in European CSV files
            </li>
            <li>
              <strong>Tab (\t)</strong> - Tab-separated values (TSV)
            </li>
            <li>
              <strong>Pipe (|)</strong> - Alternative delimiter for special data
            </li>
            <li>
              <strong>Custom</strong> - Specify any character as delimiter
            </li>
          </ul>

          <h3>Privacy and Security</h3>
          <p>
            All CSV to JSON conversion happens directly in your browser. Your
            data never leaves your device and is not stored on any server,
            ensuring complete privacy and security for sensitive data.
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <h4>📊 Convert CSV</h4>
              <p>
                Transform CSV files to JSON format with proper structure and
                formatting.
              </p>
            </div>
            <div className="feature-card">
              <h4>⚡ Instant Results</h4>
              <p>
                See converted JSON output immediately as you type or upload
                files.
              </p>
            </div>
            <div className="feature-card">
              <h4>💾 Download JSON</h4>
              <p>
                Export converted JSON to a file with one click for easy sharing.
              </p>
            </div>
            <div className="feature-card">
              <h4>🔒 Privacy First</h4>
              <p>
                All processing happens locally in your browser. No server
                uploads.
              </p>
            </div>
          </div>
        </div>

        <footer className="footer">
          <p>
            Made with ❤️ for developers
            {/* |{" "}
            <a href="/" className="footer-link">
              JSON Formatter
            </a>{" "}
            |{" "}
            <a href="/csv-to-json" className="footer-link">
              CSV to JSON
            </a> */}
          </p>
          <p className="footer-small">
            © 2025 DevExp Tools. All processing happens in your browser.
          </p>
        </footer>
      </div>
    </div>
  );
}
