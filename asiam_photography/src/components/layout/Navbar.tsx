"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark/90 backdrop-blur-sm"
          : "bg-linear-to-b from-dark/80 to-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-10 py-4">
        {/* Logo */}
        <Link href="/" className="font-serif text-base tracking-widest uppercase text-light">
          Asia <span className="italic text-gold">M.</span> Photography
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {[
            { label: "O Mnie", href: "/about" },
            { label: "Galeria Portretowa", href: "/portrait" },
            { label: "Galeria Sportowa", href: "/sport" },
            { label: "Kontakt", href: "/contact" },
          ].map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-condensed text-sm tracking-widest uppercase text-muted hover:text-light transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
                href="https://www.instagram.com/asiamankowska"
                target="_blank"
                rel="noopener noreferrer"
                className="font-condensed text-sm tracking-widest uppercase text-muted hover:text-gold transition-colors duration-200"
            >
                Instagram ↗
            </a>
            </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-light transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-px bg-light transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-light transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-64 border-t border-white/5" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-4 gap-5 list-none bg-dark/95 backdrop-blur-sm items-center">
          {[
            { label: "O mnie", href: "/about" },
            { label: "Galeria Portretowa", href: "/portrait" },
            { label: "Galeria Sportowa", href: "/sport" },
            { label: "Kontakt", href: "/contact" },
          ].map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-condensed text-sm tracking-widest uppercase text-muted hover:text-light transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
                href="https://www.instagram.com/asiamankowska"
                target="_blank"
                rel="noopener noreferrer"
                className="font-condensed text-sm tracking-widest uppercase text-muted hover:text-gold transition-colors"
            >
                Instagram ↗
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}