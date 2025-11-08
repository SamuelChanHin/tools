import type { Metadata } from "next";
import AdSpace from "../components/AdSpace";
import Base64Tool from "../components/Base64Tool";

export const metadata: Metadata = {
  title: "Base64 Encoder & Decoder – Free Developer Tool",
  description:
    "Encode and decode Base64 data instantly with our free, easy-to-use Base64 encoder & decoder.",
  keywords:
    "base64 encode, base64 decode, base64 encoder, base64 decoder, encode base64 online, decode base64 online, base64 converter",
  openGraph: {
    title: "Free Base64 Encoder & Decoder Online",
    description:
      "Encode and decode Base64 text instantly. Free, fast, and secure.",
    type: "website",
  },
};

export default function Base64Page() {
  return (
    <div className="min-h-screen">
      <div className="container">
        <header className="header">
          <h1>🔐 Base64 Encoder & Decoder</h1>
          <p className="subtitle">
            Encode text to Base64 or decode Base64 to text instantly • Free
            online tool • No signup required
          </p>
        </header>

        <Base64Tool />

        <AdSpace />

        <div className="content-section">
          <h2>What is Base64 Encoding?</h2>
          <p>
            Base64 is a binary-to-text encoding scheme that converts binary data
            into ASCII text format. It's commonly used to encode data that needs
            to be transmitted over text-based protocols like email, HTTP, or
            stored in JSON and XML files. Base64 encoding ensures that binary
            data remains intact without modification during transport.
          </p>

          <h3>Why Use Base64 Encoding?</h3>
          <p>
            Base64 encoding is essential in web development and data
            transmission:
          </p>
          <ul>
            <li>
              <strong>Email Attachments</strong> - MIME protocol uses Base64 to
              encode binary attachments
            </li>
            <li>
              <strong>Data URLs</strong> - Embed images directly in HTML/CSS
              using Base64 data URIs
            </li>
            <li>
              <strong>API Authentication</strong> - Basic HTTP authentication
              encodes credentials in Base64
            </li>
            <li>
              <strong>JSON/XML Transport</strong> - Send binary data through
              text-only formats
            </li>
            <li>
              <strong>URL Parameters</strong> - Safely transmit binary data in
              URLs
            </li>
            <li>
              <strong>Database Storage</strong> - Store binary content in text
              fields
            </li>
          </ul>

          <h3>How to Use Base64 Encoder/Decoder</h3>
          <p>Our Base64 tool makes encoding and decoding simple:</p>
          <ol>
            <li>
              <strong>To Encode:</strong> Enter or paste your text in the input
              field and click "Encode to Base64"
            </li>
            <li>
              <strong>To Decode:</strong> Paste Base64-encoded text and click
              "Decode from Base64"
            </li>
            <li>
              <strong>Upload Files:</strong> Use the file upload button to
              encode entire files to Base64
            </li>
            <li>
              <strong>Copy/Download:</strong> Copy the result to clipboard or
              download as a text file
            </li>
            <li>
              <strong>Clear:</strong> Reset both input and output fields to
              start fresh
            </li>
          </ol>

          <h3>Base64 Encoding Examples</h3>

          <div className="example-box">
            <h4>Example 1: Text Encoding</h4>
            <p>
              <strong>Original Text:</strong>
            </p>
            <pre>Hello, World!</pre>

            <p>
              <strong>Base64 Encoded:</strong>
            </p>
            <pre>SGVsbG8sIFdvcmxkIQ==</pre>
          </div>

          <div className="example-box">
            <h4>Example 2: Email/Password Encoding (HTTP Basic Auth)</h4>
            <p>
              <strong>Original Text:</strong>
            </p>
            <pre>user@example.com:mypassword</pre>

            <p>
              <strong>Base64 Encoded:</strong>
            </p>
            <pre>dXNlckBleGFtcGxlLmNvbTpteXBhc3N3b3Jk</pre>

            <p>
              <strong>Used in HTTP Header:</strong>
            </p>
            <pre>Authorization: Basic dXNlckBleGFtcGxlLmNvbTpteXBhc3N3b3Jk</pre>
          </div>

          <div className="example-box">
            <h4>Example 3: Data URL for Image</h4>
            <p>
              <strong>Base64 Encoded Image (small PNG):</strong>
            </p>
            <pre>data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...</pre>

            <p>
              This can be used directly in HTML <code>&lt;img&gt;</code> tags or
              CSS backgrounds.
            </p>
          </div>

          <h3>Common Base64 Use Cases</h3>
          <ul>
            <li>
              <strong>Web Development</strong> - Embed small images in CSS/HTML
              without separate HTTP requests
            </li>
            <li>
              <strong>API Integration</strong> - Send binary files through JSON
              APIs
            </li>
            <li>
              <strong>Email Systems</strong> - Attach files to emails using MIME
              encoding
            </li>
            <li>
              <strong>Authentication</strong> - HTTP Basic Auth encodes
              username:password in Base64
            </li>
            <li>
              <strong>Configuration Files</strong> - Store credentials or
              certificates in text config files
            </li>
            <li>
              <strong>Database Storage</strong> - Store binary content in
              VARCHAR/TEXT fields
            </li>
            <li>
              <strong>Cryptography</strong> - Represent encrypted data in
              readable format
            </li>
          </ul>

          <h3>Base64 Character Set</h3>
          <p>Base64 uses 64 characters to represent binary data:</p>
          <ul>
            <li>
              <strong>Letters:</strong> A-Z (uppercase), a-z (lowercase) = 52
              characters
            </li>
            <li>
              <strong>Numbers:</strong> 0-9 = 10 characters
            </li>
            <li>
              <strong>Symbols:</strong> + and / = 2 characters
            </li>
            <li>
              <strong>Padding:</strong> = (used at the end when needed)
            </li>
          </ul>

          <h3>Base64 vs Other Encoding</h3>
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Encoding</th>
                <th>Characters</th>
                <th>Use Case</th>
                <th>Size Increase</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Base64</td>
                <td>A-Z, a-z, 0-9, +, /</td>
                <td>General purpose, email, APIs</td>
                <td>~33%</td>
              </tr>
              <tr>
                <td>Base64 URL-Safe</td>
                <td>A-Z, a-z, 0-9, -, _</td>
                <td>URL parameters, filenames</td>
                <td>~33%</td>
              </tr>
              <tr>
                <td>Hex (Base16)</td>
                <td>0-9, A-F</td>
                <td>Hashes, colors, debugging</td>
                <td>100%</td>
              </tr>
              <tr>
                <td>ASCII</td>
                <td>0-127</td>
                <td>Plain text only</td>
                <td>0%</td>
              </tr>
            </tbody>
          </table>

          <h3>Is Base64 Encryption?</h3>
          <p>
            <strong>No!</strong> Base64 is{" "}
            <strong>encoding, not encryption</strong>. It transforms data format
            but provides <strong>zero security</strong>. Anyone can decode
            Base64 instantly. Never use Base64 alone to protect sensitive data.
            For security, use proper encryption (AES, RSA) before Base64
            encoding.
          </p>

          <h3>Base64 in Web Development</h3>
          <p>Developers use Base64 encoding in various scenarios:</p>
          <ul>
            <li>
              <strong>CSS Background Images:</strong>{" "}
              <code>background: url(data:image/png;base64,...);</code>
            </li>
            <li>
              <strong>HTML Images:</strong>{" "}
              <code>&lt;img src="data:image/png;base64,..." /&gt;</code>
            </li>
            <li>
              <strong>JavaScript:</strong> <code>btoa()</code> encodes,{" "}
              <code>atob()</code> decodes
            </li>
            <li>
              <strong>Node.js:</strong>{" "}
              <code>Buffer.from(str).toString('base64')</code>
            </li>
            <li>
              <strong>HTTP Headers:</strong> Authorization headers for API
              authentication
            </li>
          </ul>

          <h3>Privacy and Security</h3>
          <p>
            All Base64 encoding and decoding happens directly in your browser.
            Your data never leaves your device and is not stored on any server,
            ensuring complete privacy and security. This tool works entirely
            offline after the page loads.
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <h4>🔐 Encode Text</h4>
              <p>
                Convert plain text to Base64 format instantly with proper
                padding.
              </p>
            </div>
            <div className="feature-card">
              <h4>🔓 Decode Base64</h4>
              <p>
                Decode Base64 strings back to readable text with validation.
              </p>
            </div>
            <div className="feature-card">
              <h4>📁 File Support</h4>
              <p>
                Upload files and encode them to Base64 for embedding or
                transmission.
              </p>
            </div>
            <div className="feature-card">
              <h4>⚡ Instant Results</h4>
              <p>
                Real-time encoding and decoding as you type or upload files.
              </p>
            </div>
          </div>

          <h3>Frequently Asked Questions</h3>

          <h4>What is Base64 used for?</h4>
          <p>
            Base64 is used to encode binary data into ASCII text format for
            transmission over text-based protocols like email (MIME), HTTP,
            JSON, and XML. It's commonly used for embedding images in HTML/CSS,
            API authentication, and storing binary data in text fields.
          </p>

          <h4>Is Base64 encoding secure?</h4>
          <p>
            No, Base64 is not a security or encryption method. It's an encoding
            scheme that makes data format-compatible but provides no
            confidentiality. Anyone can decode Base64 data instantly. Use proper
            encryption (AES, RSA) if security is needed.
          </p>

          <h4>Why does Base64 increase file size?</h4>
          <p>
            Base64 encoding increases file size by approximately 33% because it
            represents 3 bytes of binary data using 4 ASCII characters. This
            overhead is the trade-off for making binary data text-compatible.
          </p>

          <h4>Can I decode Base64 without special tools?</h4>
          <p>
            Yes, you can decode Base64 using built-in browser JavaScript (
            <code>atob()</code> function) or command-line tools like{" "}
            <code>base64 -d</code> in Linux/Mac. However, online tools like ours
            provide a more user-friendly interface.
          </p>

          <h4>What does the "=" padding mean in Base64?</h4>
          <p>
            The "=" character is padding added at the end of Base64 strings to
            make the length a multiple of 4. It indicates how many bytes were in
            the original data. One "=" means the last group had 2 bytes, two
            "==" means it had 1 byte.
          </p>
        </div>
      </div>
    </div>
  );
}
