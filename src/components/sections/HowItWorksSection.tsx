import {
  IconTruckDelivery,
  IconPhoneCall,
  IconFileDescription,
  IconCheck,
} from "@tabler/icons-react";
import Link from "next/link";

const steps = [
  {
    icon: <IconPhoneCall size={64} className="text-white" />,
    title: "Step 1: Contact Us",
    description:
      "Reach out via phone or email to discuss your dispatch needs and business requirements.",
  },
  {
    icon: <IconFileDescription size={64} className="text-white" />,
    title: "Step 2: Share Your Details",
    description:
      "Provide us with your fleet information and preferences so we can tailor our services to your needs.",
  },
  {
    icon: <IconTruckDelivery size={64} className="text-white" />,
    title: "Step 3: Start Dispatching",
    description:
      "We’ll begin finding top-paying loads, negotiating deals, and managing your fleet efficiently.",
  },
  {
    icon: <IconCheck size={64} className="text-white" />,
    title: "Step 4: Focus on Driving",
    description:
      "Enjoy stress-free operations while we handle the paperwork, communication, and logistics.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="bg-white text-black py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Headline */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-[#D2B48C] md:text-5xl lg:text-6xl">
            How It Works
          </h2>
          <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto">
            Getting started with RoadRanger is simple. Follow these four steps
            to streamline your trucking operations and maximize profits.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white shadow-md rounded-lg p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Step Icon */}
              <div className="bg-[#D2B48C] p-4 rounded-full shadow-md">
                {step.icon}
              </div>
              {/* Step Title */}
              <h3 className="mt-4 text-xl font-bold text-[#D2B48C]">
                {step.title}
              </h3>
              {/* Step Description */}
              <p className="mt-2 text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Call-to-Actions */}
        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="bg-[#D2B48C] text-white px-8 py-4 rounded-full shadow-md hover:bg-white hover:text-[#D2B48C] border border-[#D2B48C] transition-all"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
