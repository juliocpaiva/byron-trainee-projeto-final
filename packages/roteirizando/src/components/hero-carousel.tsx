"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export const HeroCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      stopOnInteraction: false,
      delay: 3000,
    }),
  ]);
  return (
    <div
      className="embla overflow-hidden md:hidden h-[340px] max-h-[340px] rounded-2xl"
      ref={emblaRef}
    >
      <div className="embla__container flex h-full w-full gap-4">
        <img
          className="embla__slide rounded-2xl h-full w-full object-cover"
          src="/amsterdam.jpg"
          alt="Roteirizando"
        />
        <img
          className="embla__slide rounded-2xl h-full w-full object-cover"
          src="/italia.jpg"
          alt="Roteirizando"
        />
        <img
          className="embla__slide rounded-2xl h-full w-full object-cover"
          src="/tokyo-tower.jpg"
          alt="Roteirizando"
        />
        <img
          className="embla__slide rounded-2xl h-full w-full object-cover mr-4"
          src="/machu-pichu.jpg"
          alt="Roteirizando"
        />
      </div>
    </div>
  );
};
