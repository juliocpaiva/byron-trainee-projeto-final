import { ItinerariesCards } from "./itineraries-cards";

export const Itineraries = () => {
  return (
    <div
      id="itineraries"
      className="px-6 md:px-20 flex flex-col items-center mt-14 md:mt-24 gap-6 md:gap-10"
    >
      <h1 className="font-sans text-2xl font-semibold text-neutral-900">
        Nossos roteiros
      </h1>
      <ItinerariesCards />
    </div>
  );
};
