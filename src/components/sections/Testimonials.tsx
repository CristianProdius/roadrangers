"use client";

import { AnimatedTestimonials } from "../ui/animated-testimonials";

const testimonials = [
  {
    quote:
      "RoadRanger has been a game-changer for our trucking business. Their dispatchers are professional, multilingual, and always available when we need them!",
    name: "John Doe",
    designation: "Owner-Operator",
    src: "/testimonial1.png",
  },
  {
    quote:
      "Thanks to RoadRanger, I no longer worry about delayed loads or endless paperwork. Their tailored solutions have saved me time and money.",
    name: "Jane Smith",
    designation: "Fleet Manager",
    src: "/testimonial2.png",
  },
  {
    quote:
      "The team at RoadRanger is exceptional! Their 24/7 support and reasonable fees make them the perfect dispatch partner.",
    name: "Michael Brown",
    designation: "Logistics Coordinator",
    src: "/testimonial3.png",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white text-black py-16 px-6 ">
      <div className="max-w-7xl mx-auto">
        {/* Section Headline */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-[#D2B48C] md:text-5xl lg:text-6xl">
            What Our Clients Say
          </h2>
          <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto">
            Hear from trucking professionals who trust RoadRanger to handle
            their dispatch needs and drive their success.
          </p>
        </div>

        {/* Animated Testimonials Component */}
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </section>
  );
};

export default Testimonials;
