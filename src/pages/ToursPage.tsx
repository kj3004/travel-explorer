import React from "react";
import { tours } from "../assets/data/tours";
import TourCard from "../components/common/TourCard";
import SearchBar from "../components/common/SearchBar";
import FilterSidebar from "../components/sections/FilterSidebar";

const ToursPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Explore Our Tours
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover the best travel experiences in Sri Lanka with our curated
          collection of tours
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/4">
          <FilterSidebar />
        </div>

        <div className="md:w-3/4">
          <div className="mb-6">
            <SearchBar placeholder="Search tours by name or location..." />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>

          {/* Pagination would go here */}
        </div>
      </div>
    </div>
  );
};

export default ToursPage;
