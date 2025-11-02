import JSONFormatter from "./components/JSONFormatter";
import AdSpace from "./components/AdSpace";
import SEOContent from "./components/SEOContent";

export default function Home() {
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

        <SEOContent />

        <footer className="footer">
          <p>
            Made with ❤️ for developers
            {/* |{" "}
            <a href="#" className="footer-link">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#" className="footer-link">
              Contact
            </a> */}
          </p>
          <p className="footer-small">
            © 2025 JSON Formatter Pro. All JSON processing happens in your
            browser.
          </p>
        </footer>
      </div>
    </div>
  );
}
