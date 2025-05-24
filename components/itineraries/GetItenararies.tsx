import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LoadingSpinner } from "@/app/loading";

interface Itinerary {
  id: number;
  tripId: number;
  day: number;
  activity: string;
  createdAt: string;
  updatedAt: string;
}

interface GetItinerariesProps {
  id: number;
}

const GetItineraries = ({ props }: { props: GetItinerariesProps }) => {
  const id = props.id;
  const [itineraries, setItineraries] = useState<Itinerary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getItineraries() {
      try {
        setLoading(true);
        const data = await fetch(`http://localhost:3000/itineraries/${id}`);
        if (!data.ok) throw new Error("Failed to fetch itineraries");
        const itinerariesData = await data.json();
        setItineraries(itinerariesData);
      } catch (err) {
        setError("Could not load itineraries.");
      } finally {
        setLoading(false);
      }
    }
    getItineraries();
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="space-y-4">
      {Array.isArray(itineraries) && itineraries.length > 0 ? (
        itineraries.map((itinerary) => (
          <Card key={itinerary.id} className="border rounded-lg shadow-sm">
            <CardHeader>
              <CardTitle>Day {itinerary.day}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-gray-700">{itinerary.activity}</div>
            </CardContent>
            <CardFooter className="text-sm text-gray-500">
              <p>{new Date(itinerary.createdAt).toLocaleDateString()}</p>
            </CardFooter>
          </Card>
        ))
      ) : (
        <div className="text-gray-500 italic">No itineraries found.</div>
      )}
    </div>
  );
};

export default GetItineraries;
