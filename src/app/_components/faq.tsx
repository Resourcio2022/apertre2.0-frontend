"use client";
import React, { useState } from "react";
import { faqData } from "@/constants/faq-constant";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black bg-faq text-white flex flex-col justify-center p-10 md:p-32">
      <h2 className="text-nowrap text-lg md:text-6xl font-bold text-yellow-400 mb-8 text-left font-mokoto ">
        FREQUENTLY ASKED QUESTIONS
      </h2>
      <div className="w-full space-y-7 md:space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border border-yellow-400 rounded-md overflow-hidden"
          >
            <button
              className="w-full flex justify-between items-center px-4 py-3 bg-[#373131] text-left font-normal md:font-semibold text-sm md:text-lg"
              onClick={() => toggleFAQ(index)}
            >
              {item.question}
              <span
                className={`transform transition-transform ${
                  activeIndex === index ? "rotate-180" : "rotate-0"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>
            {activeIndex === index && (
              <div className="p-4 bg-[#373131] text-sm text-gray-200">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
