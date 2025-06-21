import React, { useState } from "react";
import FilterSection from "./FilterSection";

interface PriceRange {
  min: number;
  max: number;
}

const FilterSidebar: React.FC = () => {
  const regions = [
    { id: "colombo", name: "Colombo" },
    { id: "kandy", name: "Kandy" },
    { id: "galle", name: "Galle" },
    { id: "anuradhapura", name: "Anuradhapura" },
  ];

  const tourTypes = [
    { id: "cultural", name: "Cultural" },
    { id: "adventure", name: "Adventure" },
    { id: "beach", name: "Beach" },
    { id: "wildlife", name: "Wildlife" },
  ];

  const [priceRange, setPriceRange] = useState<PriceRange>({
    min: 0,
    max: 2000,
  });
  const [duration, setDuration] = useState<string>("");

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setPriceRange((prev) => ({ ...prev, max: value }));
  };

  const handleDurationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDuration(e.target.value);
  };

  const handleApplyFilters = () => {
    // In a real app, you would apply these filters to your tour list
    console.log("Applying filters:", {
      regions: [], // You would get these from FilterSection state
      tourTypes: [], // You would get these from FilterSection state
      priceRange,
      duration,
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md sticky top-4">
      <h3 className="font-bold text-lg mb-4">Filter Tours</h3>

      <FilterSection title="Region" options={regions} />
      <FilterSection title="Tour Type" options={tourTypes} />

      <div className="mb-6">
        <h4 className="font-medium mb-2">Price Range</h4>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">${priceRange.min}</span>
          <span className="text-sm text-gray-600">${priceRange.max}+</span>
        </div>
        <label htmlFor="price-range-slider" className="sr-only">
          Price range slider
        </label>
        <input
          id="price-range-slider"
          type="range"
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          min={priceRange.min}
          max={2000}
          value={priceRange.max}
          onChange={handlePriceChange}
          aria-label={`Price range: $${priceRange.min} to $${priceRange.max}`}
          title="Adjust maximum price"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="duration-select" className="font-medium mb-2 block">
          Duration
        </label>
        <select
          id="duration-select"
          className="w-full p-2 border border-gray-300 rounded-md"
          value={duration}
          onChange={handleDurationChange}
          aria-label="Select tour duration"
        >
          <option value="">Any Duration</option>
          <option value="1-3">1-3 Days</option>
          <option value="4-7">4-7 Days</option>
          <option value="8+">8+ Days</option>
        </select>
      </div>

      <button
        className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 transition"
        onClick={handleApplyFilters}
        aria-label="Apply selected filters to tour results"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default FilterSidebar;
