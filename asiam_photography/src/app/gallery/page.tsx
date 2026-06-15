import Image from "next/image";
import Link from "next/link";

const albums = [
  {
    id: "agnieszka",
    title: "Sesja portretowa Agnieszki",
    cover: "/images/gallery/cover_portraits.jpg",
  },
  {
    id: "maciek-chrzciny",
    title: "Chrzciny Maćka",
    cover: "/images/gallery/cover_occasions.jpg",
  },
  {
    id: "zlot-motorow",
    title: "Zlot Motorów Jawor",
    cover: "/images/gallery/cover_events.jpg",
  },
  {
    id: "las-jawor",
    title: "Las w Jaworze",
    cover: "/images/gallery/cover_landscape.jpg",
  },
];

export default function PortraitsGalleryPage() {
  return (
    <main className="min-h-screen bg-dark pt-20">

      {/* Header */}
      <div className="flex flex-col items-center text-center py-16 px-6">
        <div className="flex items-center gap-4 mb-6">
          <span className="block w-10 h-px bg-gold/30" />
        </div>
        <h1 className="font-serif text-4xl md:text-5xl font-light text-light mb-4">
          Galeria <em className="italic text-gold">fotografii</em>
        </h1>
        <p className="font-sans text-base font-light text-muted max-w-md">
          Wybierz album aby zobaczyć zdjęcia.
        </p>
      </div>

      {/* Grid albumów */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 min-h-[70vh]">
        {albums.map((album) => (
          <Link
            key={album.id}
            href={`/gallery/${album.id}`}
            className="relative overflow-hidden group cursor-pointer"
          >
            <div className="relative h-[60vh] md:h-[45vh] w-full">
              <Image
                src={album.cover}
                alt={album.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-50 group-hover:brightness-75"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="absolute inset-0 bg-dark/30 group-hover:bg-dark/10 transition-all duration-500" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
              <h2 className="font-serif text-3xl md:text-4xl font-light text-light mb-4">
                {album.title}
              </h2>
              <div className="w-8 h-px bg-gold/50 group-hover:w-16 transition-all duration-500" />
            </div>

          </Link>
        ))}
      </div>

    </main>
  );
}