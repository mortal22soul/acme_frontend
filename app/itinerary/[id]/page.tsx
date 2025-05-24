import CreateItinerary from "@/components/itineraries/CreateItinerary";

export default function Itinerary() {
  return (
    <div className="flex flex-col items-center justify-center py-10 px-4">
      <div className="w-full max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-8 drop-shadow-sm">
          Create a New Itinerary
        </h1>
        <CreateItinerary />
      </div>
    </div>
  );
}
