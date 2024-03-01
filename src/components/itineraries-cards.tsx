"use client";

import { useState } from "react";
import { ItinerariesRow } from "./itineraries-row";
import { Button } from "./button";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export const ItinerariesCards = () => {
  const [parent] = useAutoAnimate();
  const [count, setCount] = useState(1);
  const pages = [];

  for (let i = 1; i <= count; i++) {
    pages.push(<ItinerariesRow page={i} key={i} />);
  }

  return (
    <>
      <div className="w-full h-fit flex flex-col gap-6" ref={parent}>
        {pages}
      </div>
      {!(count > 1 && pages.length < 3 * count) && (
        <Button
          type="button"
          variant="secondary"
          className="w-full md:w-56"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Carregar mais
        </Button>
      )}
    </>
  );
};
