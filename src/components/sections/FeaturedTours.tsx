import React from "react";
import { Link } from "react-router-dom";
import { tours } from "../../assets/data/tours";
import SectionHeader from "../common/SectionHeader";
import TourCard from "../common/TourCard";

const FeaturedTours: React.FC = () => {
  // Get first 3 tours for featured section
  const featuredTours = tours.slice(0, 3);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Featured Tours"
          subtitle="Discover our most popular travel experiences"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {featuredTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/tours"
            className="inline-block bg-primary hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            View All Tours
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;
