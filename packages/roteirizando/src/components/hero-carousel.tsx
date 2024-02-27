"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import amsterdam from "../../public/amsterdam.jpg";
import italia from "../../public/italia.jpg";
import tokyoTower from "../../public/tokyo-tower.jpg";
import machuPichu from "../../public/machu-pichu.jpg";

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
          src={amsterdam}
          alt="Roteirizando"
          placeholder="blur"
          priority={false}
        />
        <Image
          className="embla__slide rounded-2xl w-auto h-auto object-cover"
          src={italia}
          alt="Roteirizando"
          placeholder="blur"
          priority={false}
        />
        <Image
          className="embla__slide rounded-2xl w-auto h-auto object-cover"
          src={tokyoTower}
          alt="Roteirizando"
          placeholder="blur"
          priority={false}
        />
        <Image
          className="embla__slide rounded-2xl w-auto h-auto object-cover mr-4"
          src={machuPichu}
          alt="Roteirizando"
          placeholder="blur"
          priority={false}
        />
      </div>
    </div>
  );
};
