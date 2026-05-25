import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Showcase from "@/components/sections/Showcase";
import SportGallery from "@/components/sections/SportGallery";
import Contact from "@/components/sections/Contact";
import ClubsBanner from "@/components/sections/ClubsBanner";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ClubsBanner />
      <Showcase />
      <SportGallery />
      <Contact />
    </main>
  );
}