import Image from "next/image";
import Link from "next/link";

interface Props {
  id: string;
  image: string;
  title: string;
  description: string;
}

export const ItineraryCard = (props: Props) => {
  return (
    <Link
      href={`/itinerary/${props.id ?? ""}`}
      className="bg-neutral-50 rounded-xl shadow-sm p-4 flex flex-col gap-4 grow 2xl:grow-0 basis-[410px]"
    >
      <img
        src={props.image}
        alt={props.title}
        className="h-48 object-cover rounded-lg"
      />
      <div className="flex flex-col gap-2">
        <h2 className="font-sans text-lg text-neutral-800 font-semibold leading-snug">
          {props.title}
        </h2>
        <p className="font-sans text-base text-neutral-800 font-normal leading-relaxed">
          {props.description}
        </p>
      </div>
    </Link>
  );
};
