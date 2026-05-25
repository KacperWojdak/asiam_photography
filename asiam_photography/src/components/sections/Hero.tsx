import Link from "next/link";

export default function Hero() {
  return (
    <section className="grid grid-cols-2 min-h-screen relative">

      {/* LEFT — Portrait & Nature */}
      <div className="relative flex items-center justify-center p-10 md:p-14 bg-dark-soft overflow-hidden group cursor-pointer">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-[#2a1f14] via-dark-soft to-[#0d0b09]" />

        {/* Grain overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        {/* Decorative SVG */}
        <svg
          className="absolute top-8 right-8 opacity-10 group-hover:opacity-25 transition-opacity duration-700"
          width="80" height="110" viewBox="0 0 80 110" fill="none"
        >
          <line x1="40" y1="0" x2="40" y2="110" stroke="#c8a96e" strokeWidth="0.5" />
          <line x1="25" y1="18" x2="55" y2="18" stroke="#c8a96e" strokeWidth="0.5" />
          <circle cx="40" cy="18" r="3" stroke="#c8a96e" strokeWidth="0.5" fill="none" />
          <path d="M28 55 Q40 44 52 55 Q64 66 52 77 Q40 88 28 77 Q16 66 28 55Z" stroke="#c8a96e" strokeWidth="0.4" fill="none" />
        </svg>

        {/* Hover tint */}
        <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/5 transition-all duration-700" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-sm">
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-6 h-px bg-gold" />
            <span className="font-condensed text-xs tracking-[0.28em] uppercase text-gold">
              Portret · Krajobraz · Okolicznościowe
            </span>
            <span className="block w-6 h-px bg-gold" />
          </div>

          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-[1.05] text-light mb-6">
            Chwile<br />
            <em className="italic text-gold">uchwycone w miękkim świetle</em>
          </h1>

          <p className="font-sans text-base md:text-lg font-light leading-relaxed text-muted mb-8">
            Intymne portrety, sesje okolicznościowe i cicha piękność świata natury — uchwycone z cierpliwością i poetyckim okiem.
          </p>

          <Link href="#portrait"
              className="inline-block font-condensed text-sm tracking-[0.22em] uppercase text-gold px-10 py-4 hover:text-light transition-all duration-300"
            >
            Zobacz galerię
          </Link>
        </div>
      </div>

      {/* DIVIDER ORB */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-dark border border-white/10 flex items-center justify-center font-serif text-base italic text-white/20 select-none">
      </div>

      {/* RIGHT — Sport */}
      <div className="relative flex items-center justify-center p-10 md:p-14 bg-dark-sport overflow-hidden group cursor-pointer brightness-75 hover:brightness-110 transition-all duration-700">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-linear-to-bl from-[#2a0a12] via-dark-sport to-[#0d0a0f]" />

        {/* Diagonal accent */}
        <div
          className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
          style={{
            background: "linear-gradient(135deg, #8B1A2F18 0%, transparent 60%)",
            transform: "skewX(-12deg)",
          }}
        />

        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle, #8B1A2F 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />

        {/* Hover tint */}
        <div className="absolute inset-0 bg-[#8B1A2F]/0 group-hover:bg-[#8B1A2F]/5 transition-all duration-700" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-sm">
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-6 h-px bg-[#8B1A2F]" />
            <span className="font-condensed text-xs tracking-[0.28em] uppercase text-[#8B1A2F]">
              Piłka Nożna · Imprezy Sportowe
            </span>
            <span className="block w-6 h-px bg-[#8B1A2F]" />
          </div>

          <h2 className="font-condensed text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.92] uppercase text-light mb-6">
            Zdjęcia w<br />
            <span style={{ color: "#8B1A2F" }}>Ruchu</span>
          </h2>

          <p className="font-sans text-base md:text-lg font-light leading-relaxed text-muted mb-8">
            Energetyczna fotografia sportowa, która uchwytuje puls gry — surowe emocje, szybkość i kluczowe momenty z boiska.
          </p>

          <Link
              href="#sport"
              className="inline-block font-condensed text-sm tracking-[0.22em] uppercase px-10 py-4 hover:opacity-60 transition-all duration-300"
              style={{ color: "#8B1A2F" }}
            >
            Zobacz galerię sportową
          </Link>
        </div>
      </div>

    </section>
  );
}