import useSWR from "swr";
import { fetcher } from "@/utils/fetcher";

interface Itineraries {
  data: {
    id: number;
    attributes: {
      content: string;
      title: string;
      media: {
        data: {
          attributes: {
            url: string;
          };
        }[];
      };
      description: string;
      shortDescription: string;
      publishedAt: Date;
      updatedAt: Date;
    };
  }[];
}

export const useFetchItineraries = (page: number, pageSize: number) => {
  const baseURI = process.env.NEXT_PUBLIC_STRAPI_PUBLIC_URL;

  const { data, isLoading, error } = useSWR<Itineraries>(
    `${baseURI}/api/roteiros?populate[0]=media&pagination[page]=${page}&pagination[pageSize]=${pageSize}`,
    fetcher
  );

  return {
    itineraries: data,
    isLoading,
    isError: error,
  };
};
