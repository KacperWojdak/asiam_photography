export default function ClubsBanner() {
  return (
    <section className="relative bg-[#0f0e0c] border-t border-b border-white/5 py-10 px-6 overflow-hidden">

      <div className="absolute inset-0 bg-linear-to-r from-dark via-[#0f0e0c] to-dark pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-8">

        {/* Label — na środku u góry */}
        <div className="flex items-center gap-3">
          <span className="block w-8 h-px bg-gold/30" />
          <span className="font-condensed text-xs tracking-[0.3em] uppercase text-muted whitespace-nowrap">
            Dumny fotograf
          </span>
          <span className="block w-8 h-px bg-gold/30" />
        </div>

        {/* Clubs — pod napisem */}
        <div className="flex items-center gap-16 md:gap-24">

          {/* Legsad Kościelec */}
          <div className="flex flex-col items-center gap-3 group">
            <div className="w-16 h-16 border border-white/10 group-hover:border-gold/30 transition-colors duration-300 flex items-center justify-center bg-dark/50">
              <span className="font-condensed text-[0.6rem] tracking-widest uppercase text-muted/50 text-center leading-tight px-1">
                LKS
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-condensed text-xs tracking-[0.15em] uppercase text-light/70">
                Legsad
              </span>
              <span className="font-condensed text-xs tracking-[0.15em] uppercase text-muted/50">
                Kościelec
              </span>
            </div>
          </div>

          <span className="w-px h-10 bg-white/5" />

          {/* Mewa Kunice */}
          <div className="flex flex-col items-center gap-3 group">
            <div className="w-16 h-16 border border-white/10 group-hover:border-gold/30 transition-colors duration-300 flex items-center justify-center bg-dark/50">
              <span className="font-condensed text-[0.6rem] tracking-widest uppercase text-muted/50 text-center leading-tight px-1">
                MK
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-condensed text-xs tracking-[0.15em] uppercase text-light/70">
                Mewa
              </span>
              <span className="font-condensed text-xs tracking-[0.15em] uppercase text-muted/50">
                Kunice
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}