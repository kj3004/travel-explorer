import React from "react";
import SectionHeader from "../common/SectionHeader";
import GoogleReviews from "../../components/googleApi/GoogleReviews";

const Testimonials: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Traveler Testimonials"
          subtitle="What our guests say about their experiences"
        />
        <GoogleReviews placeId="yourplaceid" />
      </div>
    </section>
  );
};

export default Testimonials;
