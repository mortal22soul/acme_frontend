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
import GetItineraries from "@/components/itineraries/GetItenararies";
import { LoadingSpinner } from "@/app/loading";
import { FaMapMarkerAlt, FaPlaneDeparture, FaPlaneArrival, FaChair, FaTag, FaCalendarAlt, FaRegListAlt, FaStar } from "react-icons/fa";

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
  if (!destination) return <LoadingSpinner />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-10 px-2">
      <div className="max-w-4xl mx-auto rounded-3xl p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6 text-center drop-shadow-sm">
          {destination?.destination}
        </h1>
        <div className="mb-8">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
          >
            <CarouselContent>
              {destination.images.map((imageUrl, index) => (
                <CarouselItem key={index} className="flex justify-center">
                  <div className="relative w-full sm:w-96 h-64 sm:h-96 border-4 border-blue-200 rounded-xl shadow-lg overflow-hidden">
                    <Image
                      priority
                      src={imageUrl}
                      alt={`Destination ${index}`}
                      sizes="100vw"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-white bg-blue-700 hover:bg-blue-900 rounded-full p-2 shadow-md" />
            <CarouselNext className="text-white bg-blue-700 hover:bg-blue-900 rounded-full p-2 shadow-md" />
          </Carousel>
          <div className="text-center text-sm text-gray-500 mt-2">
            {destination.images.length} photo{destination.images.length > 1 ? "s" : ""}
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="flex items-center gap-3 text-lg text-gray-700">
            <FaMapMarkerAlt className="text-blue-700" />
            <span>
              From <strong>{destination.origin}</strong> to <strong>{destination.destination}</strong>
            </span>
          </div>
          <div className="flex items-center gap-3 text-lg text-gray-700">
            <FaTag className="text-green-600" />
            <span>
              Price: <strong>${destination.price}</strong>
            </span>
          </div>
          <div className="flex items-center gap-3 text-lg text-gray-700">
            <FaPlaneDeparture className="text-indigo-600" />
            <span>
              Departure: <strong>{new Date(destination.departureDate).toLocaleDateString("en-IN")}</strong>
            </span>
          </div>
          <div className="flex items-center gap-3 text-lg text-gray-700">
            <FaPlaneArrival className="text-indigo-600" />
            <span>
              Return: <strong>{new Date(destination.returnDate).toLocaleDateString("en-IN")}</strong>
            </span>
          </div>
          <div className="flex items-center gap-3 text-lg text-gray-700">
            <FaChair className="text-yellow-600" />
            <span>
              Available Seats: <strong>{destination.availableSeats}</strong>
            </span>
          </div>
          <div className="flex items-center gap-3 text-lg text-gray-700">
            <FaCalendarAlt className="text-pink-600" />
            <span>
              Type: <strong>{destination.type}</strong>
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <Link
            href={`/reviews/${destination.id}`}
            className="px-6 py-3 border-2 border-green-600 rounded-lg font-semibold text-white bg-green-600 hover:bg-white hover:text-green-600 hover:border-green-600 transition shadow"
          >
            Post Review
          </Link>
          <Link
            href={`/itinerary/${destination.id}`}
            className="px-6 py-3 border-2 border-indigo-600 rounded-lg font-semibold text-white bg-indigo-600 hover:bg-white hover:text-indigo-600 hover:border-indigo-600 transition shadow"
          >
            Create Itinerary
          </Link>
          <Link
            href={`/bookings/${destination.id}`}
            className="px-6 py-3 border-2 border-pink-600 rounded-lg font-semibold text-white bg-pink-600 hover:bg-white hover:text-pink-600 hover:border-pink-600 transition shadow"
          >
            Book Now
          </Link>
        </div>
        <div className="flex flex-col md:flex-row gap-8 mt-8">
          {/* Itineraries Section */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <FaRegListAlt className="text-indigo-600 text-2xl" />
              <span className="font-semibold text-2xl text-blue-900">Itineraries</span>
            </div>
            <div className="bg-white/80 border border-indigo-100 rounded-xl shadow p-4 min-h-[120px]">
              <GetItineraries props={{ id }} />
            </div>
          </div>

          {/* Reviews Section */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <FaStar className="text-yellow-500 text-2xl" />
              <span className="font-semibold text-2xl text-blue-900">Reviews</span>
            </div>
            <div className="bg-white/80 border border-yellow-100 rounded-xl shadow p-4 min-h-[120px]">
              <GetReviews props={{ id }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
