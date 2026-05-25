import Image from "next/image";
import Link from "next/link";

export default function Showcase() {
  return (
    <section id="gallery" className="relative bg-dark py-12 md:py-24 px-4 md:px-12">

      {/* Header */}
      <div className="flex items-end justify-between mb-12">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <span className="block w-8 h-px bg-gold/40" />
            <span className="font-condensed text-xs tracking-[0.3em] uppercase text-muted">
              Portfolio
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-light">
            Zobacz moje <em className="italic text-gold">prace</em>
          </h2>
        </div>

        <div className="flex items-center gap-8">
          <a
            href="https://www.facebook.com/profile.php?id=100094071768987"
            target="_blank"
            rel="noopener noreferrer"
            className="font-condensed text-xs tracking-[0.2em] uppercase text-muted hover:text-gold transition-colors duration-200 hidden md:block"
          >
            Profil na Facebook ↗
          </a>
          <Link
            href="/gallery"
            className="font-condensed text-xs tracking-[0.2em] uppercase text-muted hover:text-gold transition-colors duration-200 hidden md:block"
          >
            Przejdź do galerii ↗
          </Link>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 h-auto md:h-[85vh]">

      {/* Lewe — pionowe */}
      <div className="relative overflow-hidden group h-[50vh] md:h-full">
        <Image
          src="/images/showcase/showcase_1.jpg"
          alt="Fotografia Asia Mańkowska"
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/20 transition-all duration-500" />
      </div>

      {/* Prawa kolumna */}
      <div className="grid grid-rows-2 gap-2 md:gap-3 h-[70vh] md:h-full">

        <div className="relative overflow-hidden group">
          <Image
            src="/images/showcase/showcase_2.jpg"
            alt="Fotografia Asia Mańkowska"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/20 transition-all duration-500" />
        </div>

        <div className="relative overflow-hidden group">
          <Image
            src="/images/showcase/showcase_3.jpg"
            alt="Fotografia Asia Mańkowska"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/20 transition-all duration-500" />
        </div>

      </div>
    </div>

      {/* Przycisk pod gridem */}
      <div className="flex justify-center mt-10">
        <Link
          href="/gallery"
          className="font-condensed text-sm tracking-[0.25em] uppercase text-gold hover:text-light transition-colors duration-300"
        >
          Zobacz całą galerię ↗
        </Link>
      </div>

    </section>
  );
}