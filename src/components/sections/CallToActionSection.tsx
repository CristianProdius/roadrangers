import Link from "next/link";

const CallToActionSection = () => {
  return (
    <section className="bg-white text-[#D2B48C] py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Headline */}
        <h2 className="text-4xl font-extrabold md:text-5xl lg:text-6xl">
          Ready to Maximize Your Profits?
        </h2>
        <p className="mt-6 text-lg max-w-2xl mx-auto">
          Partner with RoadRanger today and experience stress-free dispatching,
          top-paying loads, and 24/7 support. Let us handle the logistics while
          you focus on driving success.
        </p>

        {/* CTA Button */}
        <div className="mt-8">
          <Link
            href="/contact"
            className="bg-black text-[#D2B48C] font-bold px-8 py-4 rounded-full shadow-md hover:bg-white hover:text-black border border-black transition-all"
          >
            Get Started Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
