import {
  IconUsers,
  IconHistory,
  IconFileDescription,
} from "@tabler/icons-react";

import { ButtonsCard } from "../ui/buttons";

const Problem = () => {
  return (
    <section className="relative bg-white text-black py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-[#D2B48C] md:text-5xl lg:text-6xl">
            Tired of Stressful Negotiations, Delayed Loads & Endless Paperwork?
          </h2>
          <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto">
            RoadRanger is here to solve the biggest challenges trucking
            companies face. Let us handle the stress while you focus on driving
            profits!
          </p>
        </div>
        {/* Challenges Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Challenge 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-[#D2B48C] p-4 rounded-full shadow-md">
              <IconUsers size={64} color="white" />
            </div>
            <h3 className="mt-4 text-xl font-bold text-[#D2B48C]">
              Stressful Negotiations
            </h3>
            <p className="mt-2 text-gray-600">
              Dealing with brokers can be exhausting. We negotiate for you to
              secure the best-paying loads.
            </p>
          </div>
          {/* Challenge 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-[#D2B48C] p-4 rounded-full shadow-md">
              <IconHistory size={64} color="white" />
            </div>
            <h3 className="mt-4 text-xl font-bold text-[#D2B48C]">
              Delayed Loads
            </h3>
            <p className="mt-2 text-gray-600">
              Late deliveries hurt your bottom line. We monitor your fleet 24/7
              to keep everything on schedule.
            </p>
          </div>
          {/* Challenge 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-[#D2B48C] p-4 rounded-full shadow-md">
              <IconFileDescription size={64} color="white" />
            </div>
            <h3 className="mt-4 text-xl font-bold text-[#D2B48C]">
              Endless Paperwork
            </h3>
            <p className="mt-2 text-gray-600">
              Managing documents takes time. We handle all administrative tasks
              so you can focus on driving.
            </p>
          </div>
        </div>
        {/* Transition to Solution */}
        <div className="text-center mt-12">
          <h3 className="text-3xl font-bold text-[#D2B48C]">
            How RoadRanger Helps You
          </h3>
          <p className="mt-4 text-lg text-gray-700 max-w-xl mx-auto">
            At RoadRanger, we don’t just dispatch—we partner with you to
            maximize your success on the road. With us, every mile means more
            money in your pocket!
          </p>
          <div className="mt-8 flex justify-center gap-4">
            {/* CTA Buttons */}
            <ButtonsCard className="bg-[#D2B48C] text-white px-8 py-4 rounded-full shadow-md hover:bg-white hover:text-[#D2B48C] border border-[#D2B48C] transition-all">
              Get a Free Consultation
            </ButtonsCard>
            <ButtonsCard className="bg-transparent border border-[#D2B48C] text-[#D2B48C] px-8 py-4 rounded-full shadow-md hover:bg-[#D2B48C] hover:text-white transition-all">
              Learn More
            </ButtonsCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
