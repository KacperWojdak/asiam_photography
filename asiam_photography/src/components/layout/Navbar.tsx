"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pathParts = pathname.split("/").filter(Boolean);
  const isHome = pathname === "/";
  const isSimplePage = ["about", "contact"].includes(pathParts[0]);
  const isListingPage = (pathParts[0] === "gallery" || pathParts[0] === "sport") && pathParts.length === 1;
  const isAlbumPage = (pathParts[0] === "gallery" || pathParts[0] === "sport") && pathParts.length === 2;

  const handleBackToListing = () => {
  router.push(`/${pathParts[0]}`);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark/90 backdrop-blur-sm"
          : "bg-linear-to-b from-dark/80 to-transparent"
      }`}
    >
      <div className="relative flex items-center justify-between px-6 md:px-10 py-4 min-h-15">

        {/* NAVBAR 1 — Strona główna */}
        {isHome && (
          <>
            <Link href="/" className="font-serif text-base tracking-widest uppercase text-light">
              Asia <span className="italic text-gold">M.</span> Photography
            </Link>

            <ul className="hidden md:flex items-center gap-8 list-none">
              {[
                { label: "O mnie", href: "/about" },
                { label: "Galeria", href: "/gallery" },
                { label: "Sport", href: "/sport" },
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

            <button
              className="md:hidden flex flex-col gap-1.5 p-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-px bg-light transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-5 h-px bg-light transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-px bg-light transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </>
        )}

        {/* NAVBAR 2 — /gallery navbar 4 single page*/}
        {(isListingPage || isSimplePage) && (
        <>
          <Link
            href="/"
            className="font-condensed text-sm tracking-widest uppercase text-muted hover:text-light transition-colors duration-200"
          >
            ← Strona główna
          </Link>

          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 font-serif text-base tracking-widest uppercase text-light"
          >
            Asia <span className="italic text-gold">M.</span> Photography
          </Link>

          <div className="w-32" />
        </>
      )}

        {/* NAVBAR 3 — /gallery/portraits/album-1 (zdjęcia z albumu) */}
        {isAlbumPage && (
        <>
          <button
            onClick={handleBackToListing}
            className="font-condensed text-sm tracking-widest uppercase text-muted hover:text-light transition-colors duration-200"
          >
            ← Galeria
          </button>

          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 font-serif text-base tracking-widest uppercase text-light"
          >
            Asia <span className="italic text-gold">M.</span> Photography
          </Link>

          <div className="w-32" />
        </>
      )}
      </div>

      {/* Mobile menu — tylko strona główna */}
      {isHome && (
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            menuOpen ? "max-h-64 border-t border-white/5" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col px-6 py-4 gap-5 list-none bg-dark/95 backdrop-blur-sm items-center">
            {[
              { label: "Galeria", href: "/gallery" },
              { label: "Sport", href: "/sport" },
              { label: "O mnie", href: "/about" },
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
      )}
    </nav>
  );
}