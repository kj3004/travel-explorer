// First, define your interfaces
export interface DayItinerary {
  day: number;
  title: string;
  description: string;
}

export interface Tour {
  id: number;
  title: string;
  duration: string;
  price: number;
  rating: number;
  image: string;
  description: string;
  highlights: string[];
  itinerary: DayItinerary[];
  location: string;
}

// Then export your tours data
export const tours: Tour[] = [
  {
    id: 1,
    title: "Classic Sri Lanka Tour",
    duration: "7 Days",
    price: 1200,
    rating: 4.8,
    image: "/images/tours/classic-sri-lanka.jpg",
    description:
      "Explore the best of Sri Lanka's cultural triangle and scenic highlights...",
    highlights: [
      "Visit ancient cities of Anuradhapura and Polonnaruwa",
      "Climb Sigiriya Rock Fortress",
      "Safari in Minneriya National Park",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Colombo",
        description: "Airport pickup and transfer to hotel...",
      },
      // Add more days...
    ],
    location: "Colombo, Kandy, Sigiriya",
  },
  // Add more tours...
];
