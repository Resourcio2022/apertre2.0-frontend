"use client";
import { useState } from "react";
import { faqData } from "@/constants/faq-constant";

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    
    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="min-h-screen bg-black bg-cover bg-no-repeat bg-faq text-white flex flex-col justify-center p-10 md:p-32">
            <h2 className="text-lg md:text-6xl font-bold text-yellow-400 mb-8 text-center md:text-left font-mokoto break-words px-4">
                FREQUENTLY ASKED QUESTIONS
            </h2>
            <div className="w-full space-y-7 md:space-y-4">
                {faqData.map((item, index) => (
                    <div
                        key={index}
                        className="border border-yellow-400 rounded-md overflow-hidden"
                    >
                        <button
                            className="w-full flex justify-between items-center px-4 py-3 bg-[#373131] text-left font-normal md:font-semibold font-mokoto text-sm md:text-lg hover:bg-[#444] transition-colors duration-200"
                            onClick={() => toggleFAQ(index)}
                        >
                            {item.question}
                            <span
                                className={`transform transition-transform duration-300 ease-in-out ${
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
                        <div
                            className={`grid transition-all duration-300 ease-in-out ${
                                activeIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                            }`}
                        >
                            <div className="overflow-hidden">
                                <div className="p-4 bg-[#373131] text-sm text-gray-200 font-Poppins">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}