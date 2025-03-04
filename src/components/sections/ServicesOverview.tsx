import {
  IconUsers,
  IconHistory,
  IconFileDescription,
} from "@tabler/icons-react";
import Link from "next/link";

const services = [
  {
    icon: <IconUsers size={64} className="text-white" />,
    title: "Expert Dispatching",
    description:
      "3+ years of experience finding the best-paying loads and handling negotiations.",
  },
  {
    icon: <IconHistory size={64} className="text-white" />,
    title: "24/7 Fleet Support",
    description:
      "Round-the-clock monitoring and issue resolution to keep you on schedule.",
  },
  {
    icon: <IconFileDescription size={64} className="text-white" />,
    title: "Multilingual Communication",
    description:
      "Clear communication in English, Russian, and Romanian for smooth operations.",
  },
  {
    icon: <IconUsers size={64} className="text-white" />,
    title: "Profit Maximization",
    description:
      "Reasonable fees and efficient operations to boost your bottom line.",
  },
];

const ServicesOverview = () => {
  return (
    <section className="relative bg-white text-black py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Headline */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-[#D2B48C] md:text-5xl lg:text-6xl">
            Our Services
          </h2>
          <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto">
            At RoadRanger, we offer tailored dispatch services to help trucking
            companies succeed. Let us handle the logistics while you focus on
            driving profits!
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white shadow-md rounded-lg p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Service Icon */}
              <div className="bg-[#D2B48C] p-4 rounded-full shadow-md">
                {service.icon}
              </div>
              {/* Service Title */}
              <h3 className="mt-4 text-xl font-bold text-[#D2B48C]">
                {service.title}
              </h3>
              {/* Service Description */}
              <p className="mt-2 text-gray-600">{service.description}</p>
              {/* Learn More Link */}
              <Link
                href="/services"
                className="mt-4 text-[#D2B48C] hover:text-black font-semibold transition-all"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>

        {/* Call-to-Actions */}
        <div className="text-center mt-12">
          <h3 className="text-3xl font-bold text-[#D2B48C]">
            Partner with RoadRanger Today
          </h3>
          <p className="mt-4 text-lg text-gray-700 max-w-xl mx-auto">
            With RoadRanger, every mile means more money in your pocket. Let’s
            get started on your road to higher profits!
          </p>
          <div className="mt-8 flex justify-center gap-4">
            {/* CTA Buttons */}
            <Link
              href="/contact"
              className="bg-[#D2B48C] text-white px-8 py-4 rounded-full shadow-md hover:bg-white hover:text-[#D2B48C] border border-[#D2B48C] transition-all"
            >
              Get a Free Consultation
            </Link>
            <Link
              href="/about"
              className="bg-transparent border border-[#D2B48C] text-[#D2B48C] px-8 py-4 rounded-full shadow-md hover:bg-[#D2B48C] hover:text-white transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
