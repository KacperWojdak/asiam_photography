const photos = [
  { id: 1, src: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Portrait", tall: true },
  { id: 2, src: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Occasion", tall: false },
  { id: 3, src: "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Nature", tall: false },
  { id: 4, src: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Portrait", tall: false },
  { id: 5, src: "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Landscape", tall: true },
  { id: 6, src: "https://images.pexels.com/photos/3621234/pexels-photo-3621234.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Model", tall: false },
];

export default function PortraitGallery() {
  return (
    <section id="portrait" className="relative bg-dark py-24 px-6 md:px-12">

      {/* Section header */}
      <div className="flex items-end justify-between mb-12">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <span className="block w-8 h-px bg-gold/40" />
            <span className="font-condensed text-xs tracking-[0.3em] uppercase text-muted">
              Portfolio
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-light">
            Portrait &amp; <em className="italic text-gold">Occasions</em>
          </h2>
        </div>

        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-condensed text-xs tracking-[0.2em] uppercase text-muted hover:text-gold transition-colors duration-200 hidden md:block"
        >
          View all on Facebook ↗
        </a>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 grid-rows-2 gap-3 h-[75vh]">

        {/* Photo 1 — tall, spans 2 rows */}
        <div className="row-span-2 relative overflow-hidden group">
          <img
            src={photos[0].src}
            alt={photos[0].alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/20 transition-all duration-500" />
        </div>

        {/* Photo 2 */}
        <div className="relative overflow-hidden group">
          <img
            src={photos[1].src}
            alt={photos[1].alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/20 transition-all duration-500" />
        </div>

        {/* Photo 3 — tall, spans 2 rows */}
        <div className="row-span-2 relative overflow-hidden group">
          <img
            src={photos[2].src}
            alt={photos[2].alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/20 transition-all duration-500" />
        </div>

        {/* Photo 4 */}
        <div className="relative overflow-hidden group">
          <img
            src={photos[3].src}
            alt={photos[3].alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/20 transition-all duration-500" />
        </div>

      </div>

      {/* Second row of photos */}
      <div className="grid grid-cols-2 gap-3 mt-3 h-[40vh]">

        {/* Photo 5 */}
        <div className="relative overflow-hidden group">
          <img
            src={photos[4].src}
            alt={photos[4].alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/20 transition-all duration-500" />
        </div>

        {/* Photo 6 */}
        <div className="relative overflow-hidden group">
          <img
            src={photos[5].src}
            alt={photos[5].alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/20 transition-all duration-500" />
        </div>

      </div>

      {/* Mobile Facebook link */}
      <div className="mt-10 flex justify-center md:hidden">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-condensed text-xs tracking-[0.2em] uppercase text-muted hover:text-gold transition-colors duration-200"
        >
          View all on Facebook ↗
        </a>
      </div>

    </section>
  );
}