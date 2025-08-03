//Galle Images
import Galle_Main from "./../images/Galle/Galle Main.jpg";
import Galle_1 from "./../images/Galle/Galle_1.jpg";
import Galle_2 from "./../images/Galle/Galle_2.jpg";
import Galle_3 from "./../images/Galle/Galle_3.jpg";

//Arugambay Images
import Arugambay_Main from "./../images/Arugambay/Arugambay Main.jpg";
import Arugambay_1 from "./../images/Arugambay/Arugambay_1.jpg";
import Arugambay_2 from "./../images/Arugambay/Arugambay_2.jpg";

//Sigiriya Images
import Sigiriya_Main from "./../images/Sigiriya/Sigiriya Main.jpg";
import Sigiriya_1 from "./../images/Sigiriya/Sigiriya_1.jpg";
import Sigiriya_2 from "./../images/Sigiriya/Sigiriya_2.jpg";

//Trinco Images
import Trincomalee_Main from "./../images/Trinco/Trinco Main.jpg";
import Trincomalee_1 from "./../images/Trinco/Trinco_1.jpg";
import Trincomalee_2 from "./../images/Trinco/Trinco_2.jpg";

//Nuwara Eliya Images

import NuwaraEliya_Main from "./../images/Nuwara eliya/Nuwara Eliya Main.jpg";
import NuwaraEliya_1 from "./../images/Nuwara eliya/Nuwara Eliya_1.jpg";
import NuwaraEliya_2 from "./../images/Nuwara eliya/Nuwara Eliya_2.jpg";
import NuwaraEliya_3 from "./../images/Nuwara eliya/Nuwara Eliya_3.jpg";
import NuwaraEliya_4 from "./../images/Nuwara eliya/Nuwara Eliya_4.jpg";


//Ella Images
import Ella_Main from "./../images/ella/Ella Main.jpg";
import Ella_1 from "./../images/ella/Ella_1.jpg";
import Ella_2 from "./../images/ella/Ella_2.jpg";
import Ella_3 from "./../images/ella/Ella_3.jpg";
import Ella_4 from "./../images/ella/Ella_4.jpg";
import Ella_5 from "./../images/ella/Ella_5.jpg";
import Ella_6 from "./../images/ella/Ella_6.jpg";


//Unawatuna
import Unawatuna_Main from "./../images/Unawatuna/Unawatuna Main.jpg";
import Unawatuna_1 from "./../images/Unawatuna/Unawatuna_1.jpg";
import Unawatuna_2 from "./../images/Unawatuna/Unawatuna_2.jpg";
import Unawatuna_3 from "./../images/Unawatuna/Unawatuna_3.jpg";

//Mirissa
import Mirissa_Main from "./../images/Mirissa/Mirissa Main.jpg";
import Mirissa_1 from "./../images/Mirissa/Mirissa_1.jpg";
import Mirissa_2 from "./../images/Mirissa/Mirissa_2.jpg";
import Mirissa_3 from "./../images/Mirissa/Mirissa_3.jpg";

//Colombo
import Colombo_Main from "./../images/Colombo/Colombo Main.jpg";
import Colombo_1 from "./../images/Colombo/Colombo_1.jpg";

//Polonnaruwa
import Polonnaruwa_Main from "./../images/Polonnaruwa/Polonnaruwa Main.jpg";
import Polonnaruwa_1 from "./../images/Polonnaruwa/Polonnaruwa_1.jpg";
import Polonnaruwa_2 from "./../images/Polonnaruwa/Polonnaruwa_2.jpg";

//Pasikuda
import Pasikuda_Main from "./../images/Pasikuda/Pasikuda Main.jpg";

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
  image: string[];
  description: string;
  highlights: string[];
  itinerary: DayItinerary[];
  location: string;
}

// Then export your tours data
export const tours: Tour[] = [
  {
    id: 1,
    title: "Southern Heritage & Beach Escape",
    duration: "?",
    price: 0,
    rating: 0,
    image: [Galle_Main, Galle_1, Mirissa_1, Unawatuna_1],
    description:
      "Blend history with beach bliss as you journey from Colombo to Sri Lanka’s iconic southern coastlines and heritage cities.",
    highlights: [],
    itinerary: [],
    location: "Colombo, Galle, Unawatuna, Mirissa, Matara",
  },
  {
    id: 2,
    title: "Surf & Chill at Arugam Bay",
    duration: "?",
    price: 0,
    rating: 0,
    image: [Arugambay_Main, Arugambay_1, Colombo_1],
    description:
      "Experience laid-back surf culture and golden beaches at Sri Lanka’s top surfing destination on the east coast.",
    highlights: [],
    itinerary: [],
    location: "Colombo, Arugam Bay",
  },
  {
    id: 3,
    title: "Cultural Triangle & East Coast Bliss",
    duration: "?",
    price: 0,
    rating: 0,
    image: [Sigiriya_Main, Sigiriya_2, Polonnaruwa_1, Pasikuda_Main],
    description:
      "Explore ancient kingdoms, iconic rock fortresses, and end your trip on untouched white-sand beaches of the east.",
    highlights: [],
    itinerary: [],
    location: "Colombo, Sigiriya, Polonnaruwa, Pasikuda",
  },
  {
    id: 4,
    title: "Trincomalee Treasures & Beach Retreat",
    duration: "?",
    price: 0,
    rating: 0,
    image: [Trincomalee_Main, Trincomalee_2, Colombo_Main],
    description:
      "Discover Trincomalee’s historic temples, stunning coastlines, and calm turquoise waters—perfect for a serene getaway.",
    highlights: [],
    itinerary: [],
    location: "Colombo, Trincomalee",
  },
  {
    id: 5,
    title: "Sacred Hills & Scenic Highlands",
    duration: "?",
    price: 0,
    rating: 0,
    image: [NuwaraEliya_Main,Polonnaruwa_2, NuwaraEliya_1, Ella_1],
    description:
      "Journey through misty mountains, tea plantations, and ancient religious sites in Sri Lanka’s lush hill country.",
    highlights: [],
    itinerary: [],
    location: "Polonnaruwa, Nuwara Eliya, Ella",
  },
  {
    id: 6,
    title: "Scenic Highlands & Adventure in Ella",
    duration: "?",
    price: 0,
    rating: 0,
    image: [Ella_Main, Ella_2, Ella_3, Ella_4],
    description:
      "Discover the breathtaking beauty of Ella—hike lush trails, cross iconic bridges, and relax in Sri Lanka’s hill country paradise.",
    highlights: [],
    itinerary: [],
    location: "Ella, Nine Arches Bridge, Little Adam’s Peak, Ravana Falls",
  },
];
