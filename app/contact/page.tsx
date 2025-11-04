import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact DevExp Tools - Feedback, Support & Suggestions",
  description:
    "Contact DevExp Tools for feedback, bug reports, feature requests, or general inquiries. We value your input and respond to all messages.",
  keywords: "contact devexp, support, feedback, bug report, feature request",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <div className="container">
        <header className="header">
          <h1>Contact Us</h1>
          <p className="subtitle">
            We'd love to hear from you! Send us your feedback, suggestions, or
            questions
          </p>
        </header>

        <div className="content-section">
          <h2>Get in Touch</h2>
          <p>
            Your feedback helps us improve DevExp Tools for everyone. Whether
            you've found a bug, have a feature request, or want to suggest a new
            tool, we're here to listen.
          </p>

          <div className="contact-methods">
            <div className="contact-card">
              <h3>📧 Email Us</h3>
              <p>For general inquiries, feedback, or support:</p>
              <p className="contact-detail">
                <a
                  href="mailto:samueltestingengineer@gmail.com
"
                >
                  samueltestingengineer@gmail.com
                </a>
              </p>
              <p className="contact-note">
                We typically respond within 24-48 hours
              </p>
            </div>

            {/* <div className="contact-card">
              <h3>🐛 Report a Bug</h3>
              <p>Found something not working correctly?</p>
              <p className="contact-detail">
                <a href="mailto:bugs@devexp.cc">bugs@devexp.cc</a>
              </p>
              <p className="contact-note">
                Please include details about your browser and the issue
              </p>
            </div>

            <div className="contact-card">
              <h3>💡 Suggest a Feature</h3>
              <p>Have an idea for a new tool or feature?</p>
              <p className="contact-detail">
                <a href="mailto:features@devexp.cc">features@devexp.cc</a>
              </p>
              <p className="contact-note">
                We prioritize features based on community feedback
              </p>
            </div>

            <div className="contact-card">
              <h3>🤝 Business Inquiries</h3>
              <p>Partnership or advertising opportunities:</p>
              <p className="contact-detail">
                <a href="mailto:business@devexp.cc">business@devexp.cc</a>
              </p>
              <p className="contact-note">
                We respond to all legitimate business inquiries
              </p>
            </div> */}
          </div>

          <h2>What to Include in Your Message</h2>
          <p>To help us respond quickly and effectively, please include:</p>
          <ul>
            <li>
              <strong>Subject</strong> - Brief description of your message topic
            </li>
            <li>
              <strong>Description</strong> - Detailed explanation of your
              feedback or issue
            </li>
            <li>
              <strong>Browser & Device</strong> - If reporting a bug (e.g.,
              "Chrome 120 on Windows 11")
            </li>
            <li>
              <strong>Steps to Reproduce</strong> - If reporting a bug, how can
              we recreate it?
            </li>
            <li>
              <strong>Screenshots</strong> - If applicable, visual examples help
              us understand issues
            </li>
          </ul>

          <h2>Frequently Asked Questions</h2>

          <h3>How long does it take to get a response?</h3>
          <p>
            We aim to respond to all messages within 24-48 hours during business
            days. Bug reports are prioritized and typically addressed first.
          </p>

          <h3>Can you add a specific feature I need?</h3>
          <p>
            We evaluate all feature requests based on community value and
            technical feasibility. Popular requests are prioritized in our
            development roadmap.
          </p>

          <h3>Do you offer custom development or consulting?</h3>
          <p>
            We focus on maintaining and improving DevExp Tools. For custom
            development needs, please email our business inquiries address and
            we'll discuss what's possible.
          </p>

          <h3>Can I contribute to DevExp Tools?</h3>
          <p>
            We appreciate community interest! Contact us to discuss potential
            collaboration opportunities or ways to contribute.
          </p>

          <h3>Is my data shared when I contact you?</h3>
          <p>
            No. We only use your contact information to respond to your message.
            We never share, sell, or use your information for marketing
            purposes.
          </p>

          <h2>Response Times</h2>
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Type of Inquiry</th>
                <th>Priority</th>
                <th>Typical Response Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Critical Bugs</td>
                <td>High</td>
                <td>Within 12-24 hours</td>
              </tr>
              <tr>
                <td>General Bugs</td>
                <td>Medium</td>
                <td>1-2 business days</td>
              </tr>
              <tr>
                <td>Feature Requests</td>
                <td>Medium</td>
                <td>2-3 business days</td>
              </tr>
              <tr>
                <td>General Inquiries</td>
                <td>Normal</td>
                <td>2-3 business days</td>
              </tr>
              <tr>
                <td>Business Inquiries</td>
                <td>Normal</td>
                <td>3-5 business days</td>
              </tr>
            </tbody>
          </table>

          <h2>Before You Contact Us</h2>
          <p>Please check if your question is answered in these resources:</p>
          <ul>
            <li>Tool-specific help sections on each tool page</li>
            <li>
              Our <a href="/about">About page</a> for general information about
              DevExp Tools
            </li>
            <li>Browser console for technical error messages (press F12)</li>
          </ul>

          <div className="features-grid" style={{ marginTop: "32px" }}>
            <div className="feature-card">
              <h4>🚀 Quick Response</h4>
              <p>Most messages answered within 24-48 hours on business days.</p>
            </div>
            <div className="feature-card">
              <h4>🎯 Focused Support</h4>
              <p>We prioritize bugs and issues affecting user experience.</p>
            </div>
            <div className="feature-card">
              <h4>💬 Community Driven</h4>
              <p>Your feedback directly shapes our development priorities.</p>
            </div>
            <div className="feature-card">
              <h4>🔒 Privacy Respected</h4>
              <p>
                Your contact information is never shared or used for marketing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
