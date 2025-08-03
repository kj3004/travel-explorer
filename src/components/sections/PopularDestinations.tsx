import React from "react";
import { popularDestinations } from "../../assets/data/popularDestinations";


const PopularDestinations = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Popular Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {popularDestinations.map((dest) => (
            <div
              key={dest.id}
              className="rounded-lg overflow-hidden shadow-lg relative group"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-60 object-cover transition-transform group-hover:scale-105 duration-300"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4">
                <h3 className="text-white text-xl font-semibold uppercase text-center w-full">
                  {dest.name}
                </h3>
                <p className="text-gray-200 text-sm ">
                  {dest.tourCount} tour{dest.tourCount > 1 ? "s" : ""} available
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
