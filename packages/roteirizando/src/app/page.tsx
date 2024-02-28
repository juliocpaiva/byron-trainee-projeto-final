import { HeroSection } from "@/components/hero-section";
import { Itineraries } from "@/components/itineraries";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Itineraries />
      <div className="mt-24"></div>
    </>
  );
}
