const photos = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Football match",
    wide: true,
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Player action",
    wide: false,
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Stadium crowd",
    wide: false,
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/2834917/pexels-photo-2834917.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Running event",
    wide: false,
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/3621234/pexels-photo-3621234.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Football celebration",
    wide: false,
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/1618269/pexels-photo-1618269.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Sport action",
    wide: true,
  },
];

export default function SportGallery() {
  return (
    <section id="sport" className="relative bg-dark-sport py-24 px-6 md:px-12">

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
            Football &amp; <span style={{ color: "#8B1A2F" }}>Sport Events</span>
          </h2>
        </div>

        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-condensed text-xs tracking-[0.2em] uppercase text-muted hover:text-[#8B1A2F] transition-colors duration-200 hidden md:block"
        >
          View all on Facebook ↗
        </a>
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-3 gap-3 h-[70vh]">

        {/* Photo 1 — wide, spans 2 columns */}
        <div className="col-span-2 relative overflow-hidden group">
          <img
            src={photos[0].src}
            alt={photos[0].alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-75 group-hover:brightness-100"
          />
          <div className="absolute inset-0 bg-[#8B1A2F]/0 group-hover:bg-[#8B1A2F]/10 transition-all duration-500" />
          {/* Action label */}
          <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="font-condensed text-[0.65rem] tracking-[0.25em] uppercase text-light/60">
              Football
            </span>
          </div>
        </div>

        {/* Photo 2 */}
        <div className="relative overflow-hidden group">
          <img
            src={photos[1].src}
            alt={photos[1].alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-75 group-hover:brightness-100"
          />
          <div className="absolute inset-0 bg-[#8B1A2F]/0 group-hover:bg-[#8B1A2F]/10 transition-all duration-500" />
        </div>

      </div>

      {/* Second row */}
      <div className="grid grid-cols-4 gap-3 mt-3 h-[35vh]">

        {/* Photo 3 */}
        <div className="relative overflow-hidden group">
          <img
            src={photos[2].src}
            alt={photos[2].alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-75 group-hover:brightness-100"
          />
          <div className="absolute inset-0 bg-[#8B1A2F]/0 group-hover:bg-[#8B1A2F]/10 transition-all duration-500" />
        </div>

        {/* Photo 4 */}
        <div className="relative overflow-hidden group">
          <img
            src={photos[3].src}
            alt={photos[3].alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-75 group-hover:brightness-100"
          />
          <div className="absolute inset-0 bg-[#8B1A2F]/0 group-hover:bg-[#8B1A2F]/10 transition-all duration-500" />
          <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="font-condensed text-[0.65rem] tracking-[0.25em] uppercase text-light/60">
              Running
            </span>
          </div>
        </div>

        {/* Photo 5 */}
        <div className="relative overflow-hidden group">
          <img
            src={photos[4].src}
            alt={photos[4].alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-75 group-hover:brightness-100"
          />
          <div className="absolute inset-0 bg-[#8B1A2F]/0 group-hover:bg-[#8B1A2F]/10 transition-all duration-500" />
        </div>

        {/* Photo 6 — wide, spans remaining */}
        <div className="relative overflow-hidden group">
          <img
            src={photos[5].src}
            alt={photos[5].alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-75 group-hover:brightness-100"
          />
          <div className="absolute inset-0 bg-[#8B1A2F]/0 group-hover:bg-[#8B1A2F]/10 transition-all duration-500" />
        </div>

      </div>

      {/* Mobile Facebook link */}
      <div className="mt-10 flex justify-center md:hidden">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-condensed text-xs tracking-[0.2em] uppercase text-muted hover:text-[#8B1A2F] transition-colors duration-200"
        >
          View all on Facebook ↗
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