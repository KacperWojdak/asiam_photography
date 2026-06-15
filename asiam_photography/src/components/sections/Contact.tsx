export default function Contact() {
  return (
    <section id="contact" className="relative bg-dark py-28 px-6 overflow-hidden">

      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, #c8a96e33, transparent)" }}
      />

      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-dark-sport to-dark pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <span className="block w-10 h-px bg-gold/30" />
          <span className="font-condensed text-sm tracking-[0.3em] uppercase text-muted">
            Kontakt
            </span>
          <span className="block w-10 h-px bg-gold/30" />
        </div>

        {/* Heading */}
        <h2 className="font-serif text-4xl md:text-5xl font-light text-light mb-6">
          Porozmawiajmy o<br />
          <em className="italic text-gold">Twoim projekcie</em>
        </h2>

        <p className="font-sans text-base font-light leading-relaxed text-light/60 mb-16 max-w-md mx-auto">
          Czy to sesja portretowa, ważna uroczystość czy wydarzenie sportowe — chętnie usłyszę o Twoim pomyśle i wspólnie stworzymy coś wyjątkowego.
        </p>

        {/* Email CTA */}
        <a
        href="mailto:asia.m1@autograf.pl"
        className="inline-block font-condensed text-base tracking-[0.22em] uppercase text-gold hover:text-light transition-colors duration-300"
        >
        asia.m1@autograf.pl
        </a>

        {/* Phone & Location */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 mt-6 mb-16">
        <a
            href="tel:+48883705609"
            className="font-condensed text-sm tracking-[0.2em] uppercase text-light/60 hover:text-light transition-colors duration-200"
        >
            +48 883 705 609
        </a>
        <span className="hidden sm:block w-px h-4 bg-white/10" />
        <span className="font-condensed text-sm tracking-[0.2em] uppercase text-light/40">
            Jawor, Dolnośląskie, Polska
        </span>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-6 mb-16">
          <span className="flex-1 h-px bg-white/5" />
          <span className="font-condensed text-xs tracking-[0.25em] uppercase text-light/30">
            lub znajdź mnie na
          </span>
          <span className="flex-1 h-px bg-white/5" />
        </div>

        {/* Social links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-16">

          {/* FB Portrait */}
          <a
            href="https://www.facebook.com/profile.php?id=100094071768987"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3"
          >
            <div className="w-12 h-12 border border-gold/15 flex items-center justify-center group-hover:border-gold/40 transition-colors duration-300">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="#c8a96e" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="font-condensed text-sm tracking-[0.15em] uppercase text-gold group-hover:text-light transition-colors duration-200">
                Asia M.Photography
              </span>
            </div>
          </a>

          {/* FB Sport */}
          <a
            href="https://www.facebook.com/profile.php?id=61558495311793"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3"
          >
            <div className="w-12 h-12 border border-[#8B1A2F]/20 flex items-center justify-center group-hover:border-[#8B1A2F]/50 transition-colors duration-300">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="#8B1A2F" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="font-condensed text-sm tracking-[0.15em] uppercase text-[#8B1A2F] group-hover:text-light transition-colors duration-200">
                Fotografia Sportowa
              </span>
            </div>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/asiamankowska"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3"
          >
            <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors duration-300">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="#f0ece4" strokeWidth="1" opacity="0.5"/>
                <circle cx="12" cy="12" r="4" stroke="#f0ece4" strokeWidth="1" opacity="0.5"/>
                <circle cx="17.5" cy="6.5" r="1" fill="#f0ece4" opacity="0.5"/>
              </svg>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="font-condensed text-sm tracking-[0.15em] uppercase text-light/60 group-hover:text-light transition-colors duration-200">
                @asiamankowska
              </span>
            </div>
          </a>

        </div>
      </div>

    </section>
  );
}