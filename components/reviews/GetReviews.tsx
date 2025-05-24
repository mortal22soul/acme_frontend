import { useEffect, useState } from "react";
import { IconStar, IconStarFilled } from "@tabler/icons-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LoadingSpinner } from "@/app/loading";

interface Review {
  id: number;
  customerId: number;
  tripId: number;
  rating: number;
  title: string;
  comment: string;
  createdAt: string;
  updatedAt: string;
}

interface GetReviewsProps {
  id: number;
}

const GetReviews = ({ props }: { props: GetReviewsProps }) => {
  const id = props.id;
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getReviews() {
      try {
        const data = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/reviews/${id}`
        );
        const reviewsData = await data.json();
        setReviews(reviewsData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    }
    getReviews();
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-red-500">{error}</div>;

  // Render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<IconStarFilled key={i} className="text-yellow-500" />);
      } else {
        stars.push(<IconStar key={i} className="text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <div className="space-y-4">
      {Array.isArray(reviews) == true
        ? reviews.map((review) => (
            <Card key={review.id} className="border rounded-lg shadow-sm">
              <CardHeader>
                <CardTitle>{review.title}</CardTitle>
                <div className="flex items-center space-x-1">
                  {renderStars(review.rating)}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>{review.comment}</CardDescription>
              </CardContent>
              <CardFooter className="text-sm text-gray-500">
                <p>{new Date(review.createdAt).toLocaleDateString()}</p>
              </CardFooter>
            </Card>
          ))
        : `No reviews found`}
    </div>
  );
};

export default GetReviews;
