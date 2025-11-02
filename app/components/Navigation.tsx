"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const tools = [
  { name: "Home", path: "/" },
  { name: "JSON Formatter", path: "/json-formatter" },
  { name: "CSV to JSON", path: "/csv-to-json" },
  { name: "Base64", path: "/base64" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link href="/" className="nav-brand">
          🔧 DevExp Tools
        </Link>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>

        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          {tools.map((tool) => (
            <Link
              key={tool.path}
              href={tool.path}
              className={
                pathname === tool.path ? "nav-link active" : "nav-link"
              }
              onClick={() => setIsOpen(false)}
            >
              {tool.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
