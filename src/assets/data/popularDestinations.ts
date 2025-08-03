// src/assets/data/popularDestinations.ts

import Galle_Main from "./../images/Galle/Galle Main.jpg";
import Sigiriya_Main from "./../images/Sigiriya/Sigiriya Main.jpg";
import Ella_Main from "./../images/ella/Ella Main.jpg";
import Trincomalee_Main from "./../images/Trinco/Trinco Main.jpg";

export interface Destination {
  id: number;
  name: string;
  image: string;
  tourCount: number;
}

export const popularDestinations: Destination[] = [
  {
    id: 1,
    name: "Galle",
    image: Galle_Main,
    tourCount: 1,
  },
  {
    id: 2,
    name: "Sigiriya",
    image: Sigiriya_Main,
    tourCount: 1,
  },
  {
    id: 3,
    name: "Ella",
    image: Ella_Main,
    tourCount: 2, // appears in two tours
  },
  {
    id: 4,
    name: "Trincomalee",
    image: Trincomalee_Main,
    tourCount: 1,
  },
];
