import React from "react";
import SectionHeader from "../common/SectionHeader";

interface Destination {
  id: number;
  name: string;
  image: string;
  tourCount: number;
}

const PopularDestinations: React.FC = () => {
  const destinations: Destination[] = [
    {
      id: 1,
      name: "Sigiriya",
      image: "/images/destinations/sigiriya.jpg",
      tourCount: 15,
    },
    {
      id: 2,
      name: "Galle",
      image: "/images/destinations/galle.jpg",
      tourCount: 12,
    },
    {
      id: 3,
      name: "Kandy",
      image: "/images/destinations/kandy.jpg",
      tourCount: 18,
    },
    {
      id: 4,
      name: "Ella",
      image: "/images/destinations/ella.jpg",
      tourCount: 10,
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Popular Destinations"
          subtitle="Explore Sri Lanka's most iconic locations"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="relative group overflow-hidden rounded-xl shadow-lg"
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white text-xl font-bold">
                    {destination.name}
                  </h3>
                  <p className="text-gray-200">
                    {destination.tourCount} tours available
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
