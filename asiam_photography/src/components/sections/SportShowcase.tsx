import Image from "next/image";
import Link from "next/link";

const photos = [
  { id: 1, src: "/images/sport/sport_1.jpg", alt: "Piłka nożna" },
  { id: 2, src: "/images/sport/sport_2.jpg", alt: "Piłka nożna" },
  { id: 3, src: "/images/sport/sport_3.jpg", alt: "Piłka nożna"},
  { id: 4, src: "/images/sport/sport_4.jpg", alt: "Piłka nożna" },
  { id: 5, src: "/images/sport/sport_5.jpg", alt: "Piłka nożna" },
  { id: 6, src: "/images/sport/sport_6.jpg", alt: "Piłka nożna" },
];

export default function SportGallery() {
  return (
    <section id="sportsgallery" className="relative bg-dark-sport py-24 px-6 md:px-12">

      {/* Diagonal accent top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, #8B1A2F44, transparent)" }}
      />

      {/* Section header */}
      <div className="flex items-end justify-between mb-12">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <span className="block w-8 h-px bg-[#8B1A2F]/60" />
            <span className="font-condensed text-xs tracking-[0.3em] uppercase text-muted">
              Sport
            </span>
          </div>
          <h2 className="font-condensed text-4xl md:text-5xl font-bold uppercase text-light">
            Piłka Nożna &amp; <span style={{ color: "#8B1A2F" }}>Imprezy Sportowe</span>
          </h2>
        </div>

        <a
          href="https://www.facebook.com/profile.php?id=61558495311793"
          target="_blank"
          rel="noopener noreferrer"
          className="font-condensed text-xs tracking-[0.2em] uppercase text-muted hover:text-[#8B1A2F] transition-colors duration-200 hidden md:block"
        >
          Sprawdź galerie na Facebooku ↗
        </a>
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-3 gap-3 h-[70vh]">

        {/* Photo 1 — wide, spans 2 columns */}
        <div className="col-span-2 relative overflow-hidden group">
          <Image
            src={photos[0].src}
            alt={photos[0].alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-75 group-hover:brightness-100"
            sizes="(max-width: 768px) 100vw, 66vw"
          />
          <div className="absolute inset-0 bg-[#8B1A2F]/0 group-hover:bg-[#8B1A2F]/10 transition-all duration-500" />
        </div>

        {/* Photo 2 */}
        <div className="relative overflow-hidden group">
          <Image
            src={photos[1].src}
            alt={photos[1].alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-75 group-hover:brightness-100"
            sizes="(max-width: 768px) 100vw, 66vw"
          />
          <div className="absolute inset-0 bg-[#8B1A2F]/0 group-hover:bg-[#8B1A2F]/10 transition-all duration-500" />
        </div>

      </div>

      {/* Second row */}
      <div className="grid grid-cols-4 gap-3 mt-3 h-[35vh]">

        {/* Photo 3 */}
        <div className="relative overflow-hidden group">
          <Image
            src={photos[2].src}
            alt={photos[2].alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-75 group-hover:brightness-100"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-[#8B1A2F]/0 group-hover:bg-[#8B1A2F]/10 transition-all duration-500" />
        </div>

        {/* Photo 4 */}
        <div className="relative overflow-hidden group">
          <Image
            src={photos[3].src}
            alt={photos[3].alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-75 group-hover:brightness-100"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-[#8B1A2F]/0 group-hover:bg-[#8B1A2F]/10 transition-all duration-500" />
        </div>

        {/* Photo 5 */}
        <div className="relative overflow-hidden group">
          <Image
            src={photos[4].src}
            alt={photos[4].alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-75 group-hover:brightness-100"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-[#8B1A2F]/0 group-hover:bg-[#8B1A2F]/10 transition-all duration-500" />
        </div>

        {/* Photo 6 — wide, spans remaining */}
        <div className="relative overflow-hidden group">
          <Image
            src={photos[5].src}
            alt={photos[5].alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-75 group-hover:brightness-100"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-[#8B1A2F]/0 group-hover:bg-[#8B1A2F]/10 transition-all duration-500" />
        </div>
      </div>

      <div className="flex items-center justify-center gap-10 mt-10">
      <Link
        href="/sport"
        className="font-condensed text-sm tracking-[0.25em] uppercase hover:text-light transition-colors duration-300"
        style={{ color: "#8B1A2F" }}
      >
        Galeria sportowa ↗
      </Link>
    </div>

      {/* Mobile Facebook link */}
      <div className="mt-10 flex justify-center md:hidden">
        <a
          href="https://www.facebook.com/profile.php?id=61558495311793"
          target="_blank"
          rel="noopener noreferrer"
          className="font-condensed text-xs tracking-[0.2em] uppercase text-muted hover:text-[#8B1A2F] transition-colors duration-200"
        >
          Sprawdź galerie na Facebook ↗
        </a>
      </div>

      {/* Bottom accent */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, #8B1A2F44, transparent)" }}
      />

    </section>
  );
}