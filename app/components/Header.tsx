"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="site-nav">

        {/* LOGO + NGO NAME */}
        <Link href="/" className="brand" onClick={closeMenu}>
          <Image
            src="/logo.png"
            alt="Pehli Roti Gau Matta Ki"
            width={56}
            height={56}
            priority
            className="brand-logo"
          />

          <span className="brand-text">
            Pehli Roti Gau Matta Ki
          </span>
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "×" : "☰"}
        </button>

        {/* NAVIGATION */}
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link href="/about" onClick={closeMenu}>
            About
          </Link>

          <Link href="/how-it-works" onClick={closeMenu}>
            How It Works
          </Link>

          <Link href="/impact" onClick={closeMenu}>
            Impact
          </Link>

          <Link href="/gaushalas" onClick={closeMenu}>
            Gaushalas
          </Link>

          <Link href="/get-involved" onClick={closeMenu}>
            Get Involved
          </Link>

          <Link
            href="/request-a-box"
            className="nav-cta"
            onClick={closeMenu}
          >
            Request a Roti Box
          </Link>
        </div>

      </nav>
    </header>
  );
}