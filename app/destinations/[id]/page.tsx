"use client";

import { useState, useEffect, use } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import GetReviews from "@/components/reviews/GetReviews";

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

const Destinations = ({ params }: { params: Promise<{ id: number }> }) => {
  const id = use(params).id;

  const [destination, setDestination] = useState<Destination | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDestination = async () => {
      try {
        const res = await fetch(`http://localhost:3000/trips/${id}`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setDestination(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        }
        console.error("Fetch error:", err);
      }
    };

    fetchDestination();
  }, [id]);

  if (error) return <div className="text-red-500">Error: {error}</div>;
  if (!destination) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-4">
        {destination.destination}
      </h1>
      <div className="mb-6">
        <p className="text-lg text-gray-700 mb-2">
          From <strong className="">{destination.origin}</strong> to{" "}
          <strong className="">{destination.destination}</strong>
        </p>
        <p className="text-lg text-gray-700 mb-2">
          Price: <strong className="">${destination.price}</strong>
        </p>

        <p className="text-lg text-gray-700 mb-2">
          Departure:{" "}
          <strong className="text-gray-800">
            {new Date(destination.departureDate).toLocaleDateString("en-IN")}
          </strong>
        </p>
        <p className="text-lg text-gray-700 mb-2">
          Return:{" "}
          <strong className="text-gray-800">
            {new Date(destination.returnDate).toLocaleDateString("en-IN")}
          </strong>
        </p>

        <p className="text-lg text-gray-700 mb-2">
          Available Seats:{" "}
          <strong className="">{destination.availableSeats}</strong>
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Type: <strong className="">{destination.type}</strong>
        </p>
      </div>

      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}>
        <CarouselContent>
          {destination.images.map((imageUrl, index) => (
            <CarouselItem key={index} className="flex justify-center">
              <div className="relative w-full sm:w-96 h-64 sm:h-96">
                <Image
                  priority
                  src={imageUrl}
                  alt={`Destination ${index}`}
                  sizes="100vw"
                  fill
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-white bg-black rounded-full p-2" />
        <CarouselNext className="text-white bg-black rounded-full p-2" />
      </Carousel>

      <div className="mt-6 flex justify-between items-center">
        <Link
          href={"/"}
          className="px-6 py-3 border-2 rounded-lg font-semibold hover:bg-black hover:text-white transition">
          Learn More
        </Link>
        <Link
          href={`/review/${destination.id}`}
          className="px-6 py-3 border-2 rounded-lg font-semibold text-white bg-black  hover:bg-white hover:text-black hover:border-2 transition">
          Post Review
        </Link>
        <Link
          href={`/itinerary/${destination.id}`}
          className="px-6 py-3 border-2 rounded-lg font-semibold text-white bg-black  hover:bg-white hover:text-black hover:border-2 transition">
          Create Itinerary
        </Link>
        <Link
          href={`/bookings/${destination.id}`}
          className="px-6 py-3 border-2 rounded-lg font-semibold text-white bg-black  hover:bg-white hover:text-black hover:border-2 transition">
          Book Now
        </Link>
      </div>
      <div className="py-4">
        <div className="p-2 font-semibold text-2xl">Reviews</div>
        <GetReviews props={{ id }} />
      </div>
    </div>
  );
};

export default Destinations;
