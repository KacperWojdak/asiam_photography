import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import PortraitGallery from "@/components/sections/PortraitGallery";
import SportGallery from "@/components/sections/SportGallery";
import Contact from "@/components/sections/Contact";
import ClubsBanner from "@/components/sections/ClubsBanner";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ClubsBanner />
      <PortraitGallery />
      <SportGallery />
      <Contact />
    </main>
  );
}