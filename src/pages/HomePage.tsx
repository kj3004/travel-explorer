import React from "react";
import HeroSection from "../components/sections/HeroSection";
import FeaturedTours from "../components/sections/FeaturedTours";
import PopularDestinations from "../components/sections/PopularDestinations";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import Testimonials from "../components/sections/Testimonials";
import BlogSection from "../components/sections/BlogSection";

const HomePage: React.FC = () => {
  return (
    <div className="space-y-16 pb-16">
      <HeroSection />
      <FeaturedTours />
      <PopularDestinations />
      <WhyChooseUs />
      <Testimonials />
      <BlogSection />
    </div>
  );
};

export default HomePage;
