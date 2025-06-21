import React from "react";
import SectionHeader from "../common/SectionHeader";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  comment: string;
  rating: number;
  image: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "London, UK",
      comment:
        "The cultural tour was absolutely amazing! Our guide was knowledgeable and made every site come alive with history.",
      rating: 5,
      image: "/images/testimonials/sarah.jpg",
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Toronto, Canada",
      comment:
        "The wildlife safari exceeded all expectations. We saw elephants, leopards, and so much more. Highly recommended!",
      rating: 5,
      image: "/images/testimonials/michael.jpg",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      location: "Madrid, Spain",
      comment:
        "Beautiful beaches and excellent service. The hotel recommendations were perfect for our family vacation.",
      rating: 4,
      image: "/images/testimonials/emma.jpg",
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Traveler Testimonials"
          subtitle="What our guests say about their experiences"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="font-medium">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">
                    {testimonial.location}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">"{testimonial.comment}"</p>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? "text-amber-400"
                        : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
