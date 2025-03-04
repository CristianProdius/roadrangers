/* *   - Headline and subheadline
 *   - Background image or pattern
 *   - CTA button
 *   - Optional floating elements*/

"use client";

import Image from "next/image";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { ButtonsCard } from "../ui/buttons";

import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/background.png" // Replace with your background image path
          alt="Trucks on the road"
          layout="fill"
          objectFit="cover"
          priority={true}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 py-20 lg:py-32 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/logo.png" // Replace with your logo path
            alt="RoadRanger Logo"
            width={250}
            height={250}
            className="drop-shadow-md"
          />
        </div>
        {/* Headline */}
        <TextGenerateEffect
          className="text-5xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl drop-shadow-lg"
          words="RoadRanger – The dispatch partner that works for you!"
        />

        {/* Subheadline */}
        <TextGenerateEffect
          className="mt-6 text-lg text-gray-200 md:text-xl lg:text-2xl max-w-3xl mx-auto"
          words="At RoadRanger, we don’t just dispatch—we partner with you to maximize your success on the road. With us, every mile means more money in your pocket!"
        />

        {/* CTA Button */}
        <div className="mt-8 flex justify-center gap-4">
          {/* Primary Button */}
          <ButtonsCard
            className="bg-[#D2B48C] text-black hover:bg-black hover:text-[#D2B48C] transition-all shadow-lg px-8 py-4"
            onClick={() => console.log("Free Consultation Clicked")}
          >
            Get a Free Consultation
          </ButtonsCard>

          {/* Secondary Button */}
          <ButtonsCard
            className="bg-transparent border border-[#D2B48C] text-[#D2B48C] hover:bg-[#D2B48C] hover:text-black transition-all shadow-lg px-8 py-4"
            onClick={() => console.log("Explore Services Clicked")}
          >
            Explore Services
          </ButtonsCard>
        </div>

        {/* Floating Stats */}
        <div className="mt-16 flex flex-wrap justify-center gap-x-12 gap-y-8">
          <div className="text-center">
            <p className="text-4xl font-bold text-white">127+</p>
            <p className="text-gray-300">Carriers Served</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-white">10+</p>
            <p className="text-gray-300">Years in Business</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-white">24/7</p>
            <p className="text-gray-300">Support Availability</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
