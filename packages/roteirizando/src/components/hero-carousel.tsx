"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

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
        <Image
          className="embla__slide rounded-2xl w-auto h-auto object-cover"
          src="/amsterdam.jpg"
          alt="Roteirizando"
          width={340}
          height={340}
        />
        <Image
          className="embla__slide rounded-2xl w-auto h-auto object-cover"
          src="/italia.jpg"
          alt="Roteirizando"
          width={340}
          height={340}
        />
        <Image
          className="embla__slide rounded-2xl w-auto h-auto object-cover"
          src="/tokyo-tower.jpg"
          alt="Roteirizando"
          width={340}
          height={340}
        />
        <Image
          className="embla__slide rounded-2xl w-auto h-auto object-cover mr-4"
          src="/machu-pichu.jpg"
          alt="Roteirizando"
          width={340}
          height={340}
        />
      </div>
    </div>
  );
};
