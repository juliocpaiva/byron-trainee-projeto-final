// TODO: remove mockFetcher and use fetcher
export const useFetchItineraries = () => {
  const data = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title:
        "Cinque Terre: Um Roteiro Pelas Encantadoras Terras à Beira-Mar da Itália",
      description:
        "Embarque em uma jornada pitoresca pelas deslumbrantes Cinque Terre com nosso roteiro cuidadosamente planejado. Explore as cinco pitorescas vilas à beira-mar, maravilhe-se com as vistas panorâmicas do Mediterrâneo, saboreie os deliciosos frutos do mar locais e mergulhe na atmosfera única deste destino costeiro italiano.",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1580996378027-23040f16f157?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Amsterdam: Explorando os Canais e a Cultura Holandesa",
      description:
        "Descubra os segredos de Amsterdam com nosso roteiro especializado, mergulhe na atmosfera vibrante dos seus famosos canais, visite museus renomados e delicie-se com a gastronomia local.",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Tóquio: Uma Jornada pela Modernidade e Tradição Japonesa",
      description:
        "Navegue pelas ruas de Tóquio com nosso roteiro detalhado, desde os arranha-céus reluzentes de Shibuya até os santuários tranquilos de Asakusa. Experimente a fusão única de cultura, tecnologia e tradição nesta metrópole eletrizante.",
    },
  ];

  return {
    itinieraries: data as
      | {
          id: number;
          image: string;
          title: string;
          description: string;
        }[]
      | undefined,
    isItinerariesLoading: false,
    itinerariesError: false,
  };
};
