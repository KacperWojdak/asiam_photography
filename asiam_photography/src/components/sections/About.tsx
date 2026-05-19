export default function About() {
  return (
    <section id="about" className="relative grid grid-cols-2 min-h-[70vh]">

      {/* LEFT — Text content */}
      <div className="flex flex-col items-center justify-center text-center px-12 md:px-20 py-16 bg-dark">

        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-8">
          <span className="block w-10 h-px bg-gold/30" />
          <span className="font-condensed text-xs tracking-[0.3em] uppercase text-muted">
            Asia Mańkowska Photography
          </span>
          <span className="block w-10 h-px bg-gold/30" />
        </div>

        {/* Heading */}
        <h2 className="font-serif text-4xl md:text-5xl font-light leading-[1.2] text-light mb-12 whitespace-nowrap">
          Dwa światy, <em className="italic text-gold">jedna perspektywa</em>
        </h2>

        {/* Bio */}
        <div className="mb-12 space-y-5 max-w-md">
          <p className="font-sans text-base font-light leading-relaxed text-muted">
            Poruszam się między dwoma różnymi światami fotografii — cichym i poezyjnym oraz dynamicznym i pełnym energii. Niezależnie od tego, czy uchwytuje emocje podczas spokojnej sesji portretowej, czy elektryzującą atmosferę stadionu piłkarskiego — każda klatka opowiada ludzką historię.
          </p>
          <p className="font-sans text-base font-light leading-relaxed text-muted">
            Z wrażliwym okiem na naturalne światło i instynktem do decydujących momentów, wnoszę to samo zaangażowanie i pasję w każdą sesję — od portretów w złotej godzinie po ostatni gwizdek sędziego.
          </p>
        </div>

        {/* Social links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-10">

          <a
            href="https://www.facebook.com/profile.php?id=100094071768987"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2"
          >
            <span className="font-condensed text-xs tracking-[0.25em] uppercase text-muted/50">
              Portrait & Occasions
            </span>
            <span className="font-condensed text-sm tracking-[0.2em] uppercase text-gold group-hover:text-light transition-colors duration-200">
              Asia M.Photography ↗
            </span>
          </a>

          <span className="hidden sm:block w-px h-10 bg-white/5" />

          <a
            href="https://www.facebook.com/profile.php?id=61558495311793"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2"
          >
            <span className="font-condensed text-xs tracking-[0.25em] uppercase text-muted/50">
              Sport Photography
            </span>
            <span className="font-condensed text-sm tracking-[0.2em] uppercase text-[#8B1A2F] group-hover:text-light transition-colors duration-200">
              Fotografia Sportowa ↗
            </span>
          </a>

          <span className="hidden sm:block w-px h-10 bg-white/5" />

          <a
            href="https://www.instagram.com/asiamankowska"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2"
          >
            <span className="font-condensed text-xs tracking-[0.25em] uppercase text-muted/50">
              Instagram
            </span>
            <span className="font-condensed text-sm tracking-[0.2em] uppercase text-muted group-hover:text-light transition-colors duration-200">
              @asiamankowska ↗
            </span>
          </a>

        </div>
      </div>

      {/* RIGHT — Photo placeholder */}
      <div className="flex items-center justify-center py-16 px-12 md:px-20 bg-[#111009]">
        <div className="relative w-full max-w-sm h-130">

          {/* Outer frame */}
          <div className="absolute inset-0 border border-gold/10" />

          {/* Inner photo area */}
          <div className="absolute inset-6 bg-dark-soft border border-white/5 flex items-center justify-center">
            <div className="flex flex-col items-center gap-4 text-center">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="18" r="10" stroke="#c8a96e" strokeWidth="0.5" opacity="0.3" />
                <path d="M6 42 Q24 28 42 42" stroke="#c8a96e" strokeWidth="0.5" opacity="0.3" fill="none" />
              </svg>
              <span className="font-condensed text-[0.65rem] tracking-[0.25em] uppercase text-muted/30">
                Photo of Asia
              </span>
            </div>
          </div>

          {/* Gold corner accents */}
          <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-gold/30" />
          <div className="absolute top-6 right-6 w-8 h-8 border-t border-r border-gold/30" />
          <div className="absolute bottom-6 left-6 w-8 h-8 border-b border-l border-gold/30" />
          <div className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-gold/30" />

        </div>
      </div>

    </section>
  );
}