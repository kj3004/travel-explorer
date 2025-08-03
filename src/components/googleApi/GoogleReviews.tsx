// src/components/GoogleReviews.tsx
import React, { useEffect, useState } from "react";

interface Review {
  author_name: string;
  profile_photo_url: string;
  rating: number;
  text: string;
  relative_time_description: string;
}

const GoogleReviews: React.FC<{ placeId: string }> = ({ placeId }) => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
        const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

      const proxyUrl = "https://corsproxy.io/?";
      const endpoint = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`;

      try {
        const res = await fetch(`${proxyUrl}${encodeURIComponent(endpoint)}`);
        const data = await res.json();
        if (data.result?.reviews) {
          setReviews(data.result.reviews.slice(0, 3)); // Limit to 3
        }
      } catch (err) {
        console.error("Error fetching Google reviews:", err);
      }
    };

    fetchReviews();
  }, [placeId]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
      {reviews.map((review, index) => (
        <div key={index} className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center mb-4">
            <img
              src={review.profile_photo_url}
              alt={review.author_name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="ml-4">
              <h3 className="font-medium">{review.author_name}</h3>
              <p className="text-gray-600 text-sm">
                {review.relative_time_description}
              </p>
            </div>
          </div>
          <p className="text-gray-700 mb-4">"{review.text}"</p>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 ${
                  i < review.rating ? "text-amber-400" : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GoogleReviews;
