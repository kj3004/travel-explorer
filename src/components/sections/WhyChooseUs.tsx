import React from "react";
import SectionHeader from "../common/SectionHeader";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

interface Benefit {
  id: number;
  title: string;
  description: string;
}

const WhyChooseUs: React.FC = () => {
  const benefits: Benefit[] = [
    {
      id: 1,
      title: "Local Expertise",
      description:
        "Our team has extensive knowledge of Sri Lanka's hidden gems",
    },
    {
      id: 2,
      title: "Sustainable Travel",
      description: "We promote eco-friendly and responsible tourism practices",
    },
    {
      id: 3,
      title: "Custom Experiences",
      description: "Tailor-made itineraries to match your preferences",
    },
    {
      id: 4,
      title: "24/7 Support",
      description: "Dedicated support throughout your journey",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <img
              src="/images/why-choose-us.jpg"
              alt="Happy travelers"
              className="rounded-xl shadow-lg w-full"
            />
          </div>

          <div className="lg:w-1/2">
            <SectionHeader
              title="Why Choose Travel Explorer"
              subtitle="Your perfect Sri Lankan adventure starts here"
              className="text-left"
            />

            <div className="mt-6 space-y-6">
              {benefits.map((benefit) => (
                <div key={benefit.id} className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircleIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 mt-1">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
