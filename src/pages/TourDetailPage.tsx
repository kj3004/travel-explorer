import React from "react";
import { useParams } from "react-router-dom";
import { tours } from "../assets/data/tours";
import TourGallery from "../components/sections/TourGallery";
import ItineraryAccordion from "../components/sections/ItineraryAccordion";
import EnquiryForm from "../components/sections/EnquiryForm";
import MapEmbed from "../components/common/MapEmbed";
import NotFoundPage from "./NotFoundPage";

const TourDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const tour = tours.find((t) => t.id === parseInt(id || ""));

  if (!tour) {
    return <NotFoundPage />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{tour.title}</h1>
        <div className="flex items-center gap-4 text-gray-600">
          <span>{tour.location}</span>
          <span>•</span>
          <span>{tour.duration}</span>
          <span>•</span>
          <span>From ${tour.price}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <TourGallery images={[tour.image, tour.image, tour.image]} />

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">Tour Highlights</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {tour.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-teal-500 mr-2">✓</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">Detailed Itinerary</h2>
            <ItineraryAccordion itinerary={tour.itinerary} />
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Location</h2>
            <MapEmbed location={tour.location} />
          </div>
        </div>

        <div>
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
            <div className="mb-6">
              <h3 className="font-bold text-lg mb-2">Tour Summary</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-medium">{tour.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span>Price:</span>
                  <span className="font-medium">${tour.price}</span>
                </div>
              </div>
            </div>

            <EnquiryForm tourId={tour.id} tourTitle={tour.title} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetailPage;
