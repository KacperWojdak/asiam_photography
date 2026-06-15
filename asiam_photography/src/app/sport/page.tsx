import Image from "next/image";
import Link from "next/link";

const matches = [
  {
    id: "match-1",
    title: "GKS Legsad Kościelec - Zakaczawie Legnica",
    category: "Piłka nożna",
    cover: "/images/sport/sport_4.jpg",
  },
  {
    id: "match-2",
    title: "GKS Legsad Kościelec - Zakaczawie Legnica",
    category: "Piłka nożna",
    cover: "/images/sport/sport_4.jpg",
  },
  {
    id: "match-3",
    title: "GKS Legsad Kościelec - Zakaczawie Legnica",
    category: "Piłka nożna",
    cover: "/images/sport/sport_4.jpg",
  },
  {
    id: "match-4",
    title: "GKS Legsad Kościelec - Zakaczawie Legnica",
    category: "Piłka nożna",
    cover: "/images/sport/sport_4.jpg",
  },
];

export default function SportPage() {
  return (
    <main className="min-h-screen bg-dark-sport pt-20">

      {/* Header */}
      <div className="flex flex-col items-center text-center py-16 px-6">
        <div className="flex items-center gap-4 mb-6">
          <span className="block w-10 h-px bg-[#8B1A2F]/60" />
        </div>
        <h1 className="font-condensed text-4xl md:text-5xl font-bold uppercase text-light mb-4">
          Galeria <span style={{ color: "#8B1A2F" }}>Sportowa</span>
        </h1>
        <p className="font-sans text-base font-light text-muted max-w-md">
          Wybierz wydarzenie aby zobaczyć album zdjęć.
        </p>
      </div>

      {/* Grid albumów */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 px-4 md:px-12 pb-20">
        {matches.map((match) => (
          <Link
            key={match.id}
            href={`/sport/${match.id}`}
            className="relative overflow-hidden group cursor-pointer h-[40vh]"
          >
            <Image
              src={match.cover}
              alt={match.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-50 group-hover:brightness-75"
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            <div className="absolute inset-0 bg-[#8B1A2F]/0 group-hover:bg-[#8B1A2F]/10 transition-all duration-500" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
              <span className="font-condensed text-[0.65rem] tracking-[0.3em] uppercase mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: "#8B1A2F" }}>
                {match.category}
              </span>
              <h2 className="font-condensed text-2xl md:text-3xl font-bold uppercase text-light mb-4 max-w-sm">
                {match.title}
              </h2>
              <div className="w-8 h-px group-hover:w-16 transition-all duration-500" style={{ backgroundColor: "#8B1A2F" }} />
            </div>

          </Link>
        ))}
      </div>

    </main>
  );
}