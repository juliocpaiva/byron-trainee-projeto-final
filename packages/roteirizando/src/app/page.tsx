import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { useFetchItineraries } from "@/utils/hooks/use-fetch-itineraries";

export default function Home() {
  const { itinieraries, isItinerariesLoading, itinerariesError } =
    useFetchItineraries();

  return (
    <>
      <Navbar />
      <HeroSection />
    </>
  );
}
