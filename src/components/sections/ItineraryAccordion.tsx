import React, { useState } from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

interface DayItinerary {
  day: number;
  title: string;
  description: string;
}

interface ItineraryAccordionProps {
  itinerary: DayItinerary[];
}

const ItineraryAccordion: React.FC<ItineraryAccordionProps> = ({
  itinerary,
}) => {
  const [expandedDay, setExpandedDay] = useState<number | null>(1);

  const toggleDay = (day: number) => {
    setExpandedDay(expandedDay === day ? null : day);
  };

  return (
    <div className="space-y-2">
      {itinerary.map((day) => (
        <div
          key={day.day}
          className="border border-gray-200 rounded-lg overflow-hidden"
        >
          <button
            type="button"
            className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
            onClick={() => toggleDay(day.day)}
            aria-expanded={expandedDay === day.day ? "true" : "false"}
            aria-controls={`day-${day.day}-content`}
            aria-label={`Toggle Day ${day.day}: ${day.title}`}
          >
            <div className="flex items-center">
              <span className="font-medium mr-3">Day {day.day}</span>
              <span>{day.title}</span>
            </div>
            {expandedDay === day.day ? (
              <ChevronDownIcon
                className="h-5 w-5 text-gray-500"
                aria-hidden="true"
              />
            ) : (
              <ChevronRightIcon
                className="h-5 w-5 text-gray-500"
                aria-hidden="true"
              />
            )}
          </button>

          {expandedDay === day.day && (
            <div
              id={`day-${day.day}-content`}
              className="p-4 bg-white"
              role="region"
              aria-labelledby={`day-${day.day}-button`}
            >
              <p className="text-gray-700">{day.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ItineraryAccordion;
