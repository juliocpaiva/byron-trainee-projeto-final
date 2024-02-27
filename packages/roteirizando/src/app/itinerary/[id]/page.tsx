export default function Itinerary({ params }: { params: { id: string } }) {
  return <h1>{params.id ?? "None"}</h1>;
}
