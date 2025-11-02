"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link href="/" className="nav-brand">
          🔧 DevExp Tools
        </Link>
        <div className="nav-links">
          <Link
            href="/"
            className={pathname === "/" ? "nav-link active" : "nav-link"}
          >
            JSON Formatter
          </Link>
          <Link
            href="/csv-to-json"
            className={
              pathname === "/csv-to-json" ? "nav-link active" : "nav-link"
            }
          >
            CSV to JSON
          </Link>
        </div>
      </div>
    </nav>
  );
}
