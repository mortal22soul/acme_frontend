"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function Reviews() {
  return (
    <div className="rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
const testimonials = [
  {
    quote:
      "Our family vacation to Bali was absolutely magical thanks to this agency. They handled every detail perfectly - from flights to accommodations to daily excursions. The kids loved the private villa with pool, and we'll never forget the sunrise hike at Mount Batur!",
    name: "Sarah Johnson",
    title: "Family Vacation to Bali",
    rating: 5,
  },
  {
    quote:
      "As a solo female traveler, safety is my top priority. This agency planned an incredible 3-week European tour with vetted hotels and reliable transportation. Their 24/7 support gave me peace of mind throughout my journey through Italy, France, and Spain.",
    name: "Michelle Rodriguez",
    title: "Solo European Adventure",
    rating: 5,
  },
  {
    quote:
      "The customized African safari exceeded all expectations! From seeing the Big Five to luxury tented camps with gourmet meals, every moment was unforgettable. Our guide's knowledge of wildlife behavior made each game drive special.",
    name: "David & Emily Chen",
    title: "Luxury Safari in Tanzania",
    rating: 5,
  },
  {
    quote:
      "We were skeptical about using a travel agency, but their all-inclusive Caribbean package saved us time and money. The resort was pristine, the food exceptional, and their concierge helped us secure last-minute yacht rentals at local rates!",
    name: "Marcus Williams",
    title: "Anniversary Trip to St. Lucia",
    rating: 4,
  },
  {
    quote:
      "Our corporate retreat in Costa Rica was flawlessly executed. The agency arranged team-building activities, comfortable transportation for 25 people, and unique eco-lodges that impressed even our most discerning executives. Will definitely use them again!",
    name: "Jennifer Kim",
    title: "Corporate Retreat Planner",
    rating: 5,
  },
  {
    quote:
      "As frequent travelers, we appreciate attention to detail. This agency curated a perfect 2-week Japan itinerary during cherry blossom season, including hard-to-get restaurant reservations and a private tea ceremony with a master.",
    name: "Robert & Elizabeth Taylor",
    title: "Japan Cultural Tour",
    rating: 5,
  },
];
