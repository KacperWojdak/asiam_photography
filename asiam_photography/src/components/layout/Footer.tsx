import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-dark border-t border-white/5 py-12 px-6 md:px-12">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12">

        {/* Logo */}
        <Link href="/" className="font-serif text-sm tracking-widest uppercase text-light/50 hover:text-light transition-colors duration-200 shrink-0">
          Asia <span className="italic text-gold/70">M.</span> Photography
        </Link>

        {/* Nav 2x2 */}
        <div className="flex gap-16 md:gap-24">

          {/* Kolumna 1 */}
          <div className="flex flex-col gap-4">
            <Link
              href="/about"
              className="font-condensed text-xs tracking-[0.2em] uppercase text-light/40 hover:text-light/70 transition-colors duration-200"
            >
              O mnie
            </Link>
            <Link
              href="/contact"
              className="font-condensed text-xs tracking-[0.2em] uppercase text-light/40 hover:text-light/70 transition-colors duration-200"
            >
              Kontakt
            </Link>
          </div>

          {/* Kolumna 2 */}
          <div className="flex flex-col gap-4">
            <Link
              href="/portrait"
              className="font-condensed text-xs tracking-[0.2em] uppercase text-light/40 hover:text-light/70 transition-colors duration-200"
            >
              Galeria Portretowa
            </Link>
            <Link
              href="/sport"
              className="font-condensed text-xs tracking-[0.2em] uppercase text-light/40 hover:text-light/70 transition-colors duration-200"
            >
              Galeria Sportowa
            </Link>
          </div>

        </div>

        {/* Copyright */}
        <div className="flex items-center gap-4">
            <p className="font-condensed text-xs tracking-[0.2em] uppercase text-light/20">
                © {new Date().getFullYear()} Asia Mańkowska
            </p>
            <span className="text-light/10">·</span>
            <a
                href="https://github.com/KacperWojdak"
                target="_blank"
                rel="noopener noreferrer"
                className="font-condensed text-xs tracking-[0.2em] uppercase text-light/20 hover:text-light/50 transition-colors duration-200"
            >
                Strona stworzona we współpracy z Kacprem W. ↗
            </a>
        </div>
      </div>
    </footer>
  );
}