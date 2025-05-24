"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LoadingSpinner } from "@/app/loading";

interface Destination {
  id: number;
  agentId: number;
  destination: string;
  origin: string;
  images: string[];
  price: number;
  departureDate: string;
  returnDate: string;
  availableSeats: number;
  type: string;
  createdAt: string;
  updatedAt: string;
}
import { IconPlus } from "@tabler/icons-react";

const Destinations = () => {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const res = await fetch("http://localhost:3000/trips");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setDestinations(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        }
        console.error("Fetch error:", err);
      }
    };

    fetchDestinations();
  }, []);

  if (error) return <div className="text-red-500">Error: {error}</div>;
  if (!destinations.length) return <LoadingSpinner />;

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl  font-bold text-center mb-6">Available Trips</h1>
      <div
        className="flex justify-end
      ">
        <Link href={"/destinations/new"}>
          <Button className="m-4 ">
            <IconPlus></IconPlus>Add destination
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {destinations.map((destination) => (
          <Card
            key={destination.id}
            className="shadow-lg rounded-lg overflow-hidden">
            <CardHeader>
              <CardTitle className="text-lg font-bold">
                {destination.destination}
              </CardTitle>
              <CardDescription>
                From <strong>{destination.origin}</strong>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Carousel className="w-full">
                <CarouselContent>
                  {destination.images.map((imageUrl, index) => (
                    <CarouselItem key={index} className="flex justify-center">
                      <div className="relative w-full h-52">
                        <Image
                          priority
                          src={imageUrl}
                          alt={`Image ${index} of ${destination.destination}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="rounded-lg object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {/* <CarouselPrevious /> */}
                {/* <CarouselNext /> */}
              </Carousel>

              <p className="text-sm text-gray-600 mt-2">
                <strong>Price:</strong> ${destination.price}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Departure:</strong>{" "}
                {new Date(destination.departureDate).toLocaleDateString(
                  "en-IN"
                )}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Return:</strong>{" "}
                {new Date(destination.returnDate).toLocaleDateString("en-IN")}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Seats Available:</strong> {destination.availableSeats}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Type:</strong> {destination.type}
              </p>
            </CardContent>
            <Link href={`/destinations/${destination.id}`}>
              <div className="text-center transition rounded-lg p-4 border-2 hover:bg-black hover:text-white">
                View Trip
              </div>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
