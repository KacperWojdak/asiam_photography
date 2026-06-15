import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Showcase from "@/components/sections/Showcase";
import SportShowcase from "@/components/sections/SportShowcase";
import Contact from "@/components/sections/Contact";
import ClubsBanner from "@/components/sections/ClubsBanner";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ClubsBanner />
      <Showcase />
      <SportShowcase />
      <Contact />
    </main>
  );
}