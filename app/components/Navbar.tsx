"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem 2.5rem",
        borderBottom: "1px solid var(--border)",
        background: scrolled
          ? "rgba(10, 15, 26, 0.97)"
          : "rgba(10, 15, 26, 0.85)",
        backdropFilter: "blur(12px)",
        transition: "background 0.3s",
      }}
    >
      {/* Logo */}
      <Link href="/" style={{ textDecoration: "none" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "34px",
              height: "34px",
              background: "linear-gradient(135deg, #00c9a7, #017a8b)",
              borderRadius: "9px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              fontSize: "15px",
              color: "#0a0f1a",
              flexShrink: 0,
            }}
          >
            H
          </div>
          <span
            style={{
              fontSize: "1.2rem",
              fontWeight: 800,
              color: "var(--text-primary)",
              letterSpacing: "-0.5px",
            }}
          >
            HepaXAI
          </span>
        </div>
      </Link>

      {/* Desktop Nav Links */}
      <div
        style={{
          display: "flex",
          gap: "2rem",
          alignItems: "center",
        }}
        className="desktop-nav"
      >
        {[
          { label: "Overview", href: "#overview" },
          { label: "Methodology", href: "#methodology" },
          { label: "Datasets", href: "#datasets" },
          { label: "Research", href: "#research" },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            style={{
              fontSize: "0.88rem",
              color: "var(--text-secondary)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--text-primary)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-secondary)")
            }
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* CTA Buttons */}
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <a
          href="https://github.com/benameur21"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
          style={{ fontSize: "0.83rem", padding: "0.5rem 1.1rem" }}
        >
          Contact
        </a>
        <Link
          href="/dashboard"
          className="btn-primary"
          style={{ fontSize: "0.83rem", padding: "0.5rem 1.1rem" }}
        >
          Dashboard →
        </Link>
      </div>
    </nav>
  );
}
