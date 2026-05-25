import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Portrety",
    href: "/gallery/portraits",
    src: "/images/gallery/cover_portraits.jpg",
    alt: "Fotografia portretowa",
    tag: "Portrety",
  },
  {
    name: "Okolicznościowe",
    href: "/gallery/occasions",
    src: "/images/gallery/cover_occasions.jpg",
    alt: "Fotografia okolicznościowa",
    tag: "Okolicznościowe",
  },
  {
    name: "Eventy",
    href: "/gallery/events",
    src: "/images/gallery/cover_events.jpg",
    alt: "Fotografia eventowa",
    tag: "Wydarzenia",
  },
  {
    name: "Krajobraz",
    href: "/gallery/landscape",
    src: "/images/gallery/cover_landscape.jpg",
    alt: "Fotografia krajobrazowa",
    tag: "Krajobraz",
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-dark pt-20">

      {/* Header */}
      <div className="flex flex-col items-center text-center py-16 px-6">
        <div className="flex items-center gap-4 mb-6">
          <span className="block w-10 h-px bg-gold/30" />
          <span className="font-condensed text-xs tracking-[0.3em] uppercase text-muted">
            Asia Mańkowska Photography
          </span>
          <span className="block w-10 h-px bg-gold/30" />
        </div>
        <h1 className="font-serif text-4xl md:text-5xl font-light text-light mb-4">
          Galeria <em className="italic text-gold">fotografii</em>
        </h1>
        <p className="font-sans text-base font-light text-muted max-w-md">
          Wybierz kategorię aby zobaczyć albumy zdjęć.
        </p>
      </div>

      {/* Grid 4 kategorii */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[70vh]">
        {categories.map((cat) => (
          <Link
            key={cat.href}
            href={cat.href}
            className="relative overflow-hidden group cursor-pointer"
          >
            {/* Zdjęcie */}
            <div className="relative h-[60vh] md:h-[45vh] w-full">
              <Image
                src={cat.src}
                alt={cat.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-50 group-hover:brightness-75"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-dark/30 group-hover:bg-dark/10 transition-all duration-500" />

            {/* Treść */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
              <span className="font-condensed text-[0.65rem] tracking-[0.3em] uppercase text-gold/70 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {cat.tag}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-light mb-4">
                {cat.name}
              </h2>
              <div className="w-8 h-px bg-gold/50 group-hover:w-16 transition-all duration-500" />
            </div>

          </Link>
        ))}
      </div>

    </main>
  );
}