"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isOpen,
  onClick,
  index,
}) => {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: true });

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-b border-gray-200 last:border-0"
    >
      <motion.button
        className="w-full py-6 flex justify-between items-center text-left group"
        onClick={onClick}
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2 }}
      >
        <span className="text-lg font-semibold text-black pr-8 group-hover:text-[#D2B48C] transition-colors">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="bg-gray-100 rounded-full p-2"
        >
          <svg
            className="w-6 h-6 text-[#D2B48C]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </motion.button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.p
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              exit={{ y: -10 }}
              className="text-gray-600 leading-relaxed pb-6 pr-12"
            >
              {answer}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  const faqs = [
    {
      question: "What services does RoadRanger provide?",
      answer:
        "RoadRanger offers expert dispatching, load negotiation, fleet monitoring, multilingual communication, and tailored solutions for trucking companies.",
    },
    {
      question: "How can I get started with RoadRanger?",
      answer:
        "Getting started is simple! Contact us via email or phone to discuss your needs. We’ll guide you through the onboarding process step by step.",
    },
    {
      question: "Is RoadRanger available around the clock?",
      answer:
        "Yes! Our team provides 24/7 support to ensure your operations run smoothly at all times.",
    },
    {
      question: "What languages do your dispatchers speak?",
      answer:
        "Our dispatchers are fluent in English, Russian, and Romanian to ensure clear communication with brokers and shippers.",
    },
    {
      question: "What are your fees?",
      answer:
        "We offer a reasonable fee structure designed to maximize owner-operator profits while providing high-quality service.",
    },
    {
      question: "Do you offer additional services beyond dispatching?",
      answer:
        "Yes! We also provide optional accounting services to save you time and money while managing your business effectively.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <motion.div
        className="container mx-auto px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <motion.div
          ref={headerRef}
          className="max-w-7xl mx-auto text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={
              isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
            }
            transition={{ delay: 0.3 }}
            className="text-6xl font-bold text-[#D2B48C] mb-6"
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={
              isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }
            }
            transition={{ delay: 0.4 }}
            className="text-gray-600 text-lg"
          >
            Find answers to common questions about our dispatch services and how
            we can help your trucking business thrive.
          </motion.p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 hover:bg-gray-100 transition-all duration-300"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={index === openIndex}
              onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
              index={index}
            />
          ))}
        </motion.div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Didn’t find the answer you were looking for?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-[#D2B48C] text-white font-medium px-6 py-3 rounded-full shadow-md hover:bg-black hover:text-[#D2B48C] border border-[#D2B48C] transition-all"
          >
            Contact Us for More Details
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default FAQ;
