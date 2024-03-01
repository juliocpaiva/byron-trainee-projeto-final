import { useFetchItineraries } from "@/utils/hooks/use-fetch-itineraries";
import { ItineraryCard } from "./itinerary-card";

interface Props {
  page: number;
}

export const ItinerariesRow = (props: Props) => {
  const { itineraries, isLoading, isError } = useFetchItineraries(
    props.page,
    3
  );

  return (
    <>
      {(isLoading || isError) && <Skeleton />}
      {itineraries?.data?.length! > 0 && (
        <div className="flex gap-6 flex-wrap h-fit w-full">
          {itineraries?.data.map((itinerary) => {
            return (
              <ItineraryCard
                key={itinerary.id}
                id={itinerary.id.toString()}
                image={
                  process.env.NEXT_PUBLIC_STRAPI_PUBLIC_URL +
                  itinerary.attributes.media.data[0].attributes.url
                }
                title={itinerary.attributes.title}
                description={itinerary.attributes.shortDescription}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

const Skeleton = () => {
  return (
    <div className="flex w-full md:min-h-96 flex-wrap gap-6">
      <div className="bg-neutral-200 rounded-xl shadow-sm p-4 grow 2xl:grow-0 basis-[410px] md:h-auto h-96"></div>
      <div className="bg-neutral-200 rounded-xl shadow-sm p-4 grow 2xl:grow-0 basis-[410px] md:h-auto h-96"></div>
      <div className="bg-neutral-200 rounded-xl shadow-sm p-4 grow 2xl:grow-0 basis-[410px] md:h-auto h-96"></div>
    </div>
  );
};
