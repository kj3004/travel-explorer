import { Link } from "react-router-dom";
import React from "react";
import mainVideo from "../../assets/videos/main.mp4"; // Make sure path is correct

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Discover the Beauty of Sri Lanka",
  subtitle = "Explore pristine beaches, ancient cities, and breathtaking landscapes with our curated tours.",
  primaryButtonText = "Explore Tours",
  secondaryButtonText = "Contact Us",
}) => {
  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      {/* 🔁 Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={mainVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔳 Overlay for dimming the video */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      {/* 📄 Content */}
      <div className="z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">{subtitle}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/tours"
            className="bg-primary hover:bg-teal-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition"
          >
            {primaryButtonText}
          </Link>
          <Link
            to="/contact"
            className="bg-white hover:bg-gray-100 text-gray-800 px-8 py-3 rounded-lg text-lg font-semibold transition"
          >
            {secondaryButtonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;