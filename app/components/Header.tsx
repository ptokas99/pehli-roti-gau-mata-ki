"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/how-it-works",
    label: "How It Works",
  },
  {
    href: "/impact",
    label: "Impact",
  },
  {
    href: "/gaushalas",
    label: "Gaushalas",
  },
  {
    href: "/get-involved",
    label: "Get Involved",
  },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  /* Close mobile menu whenever route changes */
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="site-header">
      <nav className="site-nav">

        {/* BRAND */}
        <Link
          href="/"
          className="brand"
          onClick={closeMenu}
          aria-label="Pehli Roti Gau Matta Ki — Home"
        >
          <Image
            src="/logo.png"
            alt="Pehli Roti Gau Matta Ki"
            width={56}
            height={56}
            priority
            className="brand-logo"
          />

          <span className="brand-copy">
            <strong className="brand-text">
              Pehli Roti Gau Matta Ki
            </strong>

            <small className="brand-hindi">
              पहली रोटी गौ माता की
            </small>
          </span>
        </Link>


        {/* DESKTOP + MOBILE NAV */}
        <div
          id="site-navigation"
          className={`nav-links ${menuOpen ? "open" : ""}`}
        >
          {navItems.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={`nav-link ${active ? "active" : ""}`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            href="/request-a-box"
            onClick={closeMenu}
            className={`nav-cta action-btn ${
              isActive("/request-a-box") ? "active" : ""
            }`}
          >
            <span>Request a Roti Box</span>
            <span className="action-btn-arrow">→</span>
          </Link>
        </div>


        {/* MOBILE TOGGLE */}
        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          type="button"
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

      </nav>
    </header>
  );
}