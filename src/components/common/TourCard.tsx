import React from "react";
import type { Tour } from "../../assets/data/tours";
import Button from "./Button";
import { StarIcon } from "@heroicons/react/20/solid";

interface TourCardProps {
  tour: Tour;
  className?: string;
}

const TourCard: React.FC<TourCardProps> = ({ tour, className }) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-md overflow-hidden ${className}`}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-white/90 px-2 py-1 rounded-md text-sm font-medium">
          {tour.duration}
        </div>
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-800">{tour.title}</h3>
          <div className="flex items-center">
            <StarIcon className="h-5 w-5 text-amber-400" />
            <span className="ml-1 text-gray-700">{tour.rating}</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {tour.description}
        </p>

        <div className="flex justify-between items-center">
          <div>
            <span className="text-gray-500 text-sm">From</span>
            <p className="text-teal-600 font-bold">${tour.price}</p>
          </div>
          <Button variant="primary" size="sm">
            View Tour
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
