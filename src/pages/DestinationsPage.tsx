import React from "react";
import SectionHeader from "../components/common/SectionHeader";

const DestinationsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <SectionHeader
        title="Explore Sri Lankan Destinations"
        subtitle="Discover the most beautiful places to visit"
      />
      {/* Add destination listing components here */}
    </div>
  );
};

export default DestinationsPage;
