import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import PortraitGallery from "@/components/sections/PortraitGallery";
import SportGallery from "@/components/sections/SportGallery";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <PortraitGallery />
      <SportGallery />
    </main>
  );
}