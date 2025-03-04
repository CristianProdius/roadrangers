import {
  IconTruck,
  IconCash,
  IconGlobe,
  IconSettings,
  IconClock,
} from "@tabler/icons-react";

const benefits = [
  {
    icon: <IconTruck size={64} className="text-white" />,
    title: "Proven Industry Experience",
    description:
      "3+ years in trucking. Our dispatchers are well-versed in FMCSA regulations, Hours of Service rules, and best practices.",
  },
  {
    icon: <IconCash size={64} className="text-white" />,
    title: "Reasonable Fee",
    description:
      "We focus on quality service without cutting into owner-operator profits. Affordable fees allow you to grow your fleet.",
  },
  {
    icon: <IconGlobe size={64} className="text-white" />,
    title: "Multilingual Dispatchers",
    description:
      "Fluent in English, Russian, and Romanian. No misunderstandings with brokers or shippers—smooth communication guaranteed.",
  },
  {
    icon: <IconSettings size={64} className="text-white" />,
    title: "Tailored Solutions",
    description:
      "We integrate seamlessly with your TMS or software platforms, ensuring minimal disruptions and real-time updates.",
  },
  {
    icon: <IconClock size={64} className="text-white" />,
    title: "24/7 Availability",
    description:
      "Around-the-clock monitoring prevents costly delays. Extended coverage ensures early starts and late-night check calls.",
  },
  {
    icon: <IconSettings size={64} className="text-white" />,
    title: "Advanced Technology",
    description:
      "Utilizing the latest technology to provide real-time tracking and updates, ensuring efficiency and transparency.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="relative bg-white text-black py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-[#D2B48C] md:text-5xl lg:text-6xl">
            Why Partner with Us?
          </h2>
          <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto">
            At RoadRanger, we don’t just dispatch—we partner with you to ensure
            success on the road. Here’s why trucking companies trust us.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white shadow-md rounded-lg p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Benefit Icon */}
              <div className="bg-[#D2B48C] p-4 rounded-full shadow-md">
                {benefit.icon}
              </div>
              {/* Benefit Title */}
              <h3 className="mt-4 text-xl font-bold text-[#D2B48C]">
                {benefit.title}
              </h3>
              {/* Benefit Description */}
              <p className="mt-2 text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-3xl font-bold text-[#D2B48C] text-center mb-6">
            How We Compare to Traditional Dispatch Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Traditional Dispatch */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-bold text-gray-800 mb-4">
                Traditional Dispatch
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>High fees that cut into profits</li>
                <li>Limited availability and support</li>
                <li>Generic services without customization</li>
                <li>Language barriers causing miscommunication</li>
              </ul>
            </div>

            {/* RoadRanger Dispatch */}
            <div className="bg-[#D2B48C] p-6 rounded-lg shadow-sm text-white">
              <h4 className="text-xl font-bold mb-4">RoadRanger Dispatch</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Reasonable fees to maximize owner profits</li>
                <li>24/7 availability for seamless operations</li>
                <li>Tailored solutions for every client</li>
                <li>Multilingual communication (English, Russian, Romanian)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
