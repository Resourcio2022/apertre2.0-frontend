"use client";

import React, { useState } from "react";
import "./faq.css";

function Faq() {
  const [questions] = useState([
    {
      question: "This is a question",
      answer:
        "This is the answer to the question. It can be as long or short as you need.",
    },
    {
      question: "This is a question",
      answer:
        "This is the answer to the question. It can be as long or short as you need.",
    },
    {
      question: "This is a question",
      answer:
        "This is the answer to the question. It can be as long or short as you need.",
    },
    {
      question: "This is a question",
      answer:
        "This is the answer to the question. It can be as long or short as you need.",
    },
    {
      question: "This is a question",
      answer:
        "This is the answer to the question. It can be as long or short as you need.",
    },
  ]);

  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(index === activeQuestion ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-content">
      <div
        className="xl:w-fit sm:p-[3rem] md:p-0 md:text-center iphone:w-full font-mokoto text-[#FBCE1F] text-2xl md:text-4xl iphone:text-center lg:text-[3.75rem] md:[4.27rem] tracking-[0.2rem] md:tracking-[0.45rem] mb-8 md:mb-16 lg:mb-24 relative xl:top-[8rem] 2xl:text-[3.75rem] 2xl:left-[13.5rem]"
        style={{ textTransform: "uppercase", marginBottom: "15rem", textAlign: "center" }}
      >
        Frequently Asked Questions
      </div>
      <div className="text-black normal-case">
        <ul className="faq- list">
          {questions.map((question, index) => (
            <li key={index} className="faq-item">
              <button
                className="faq-button"
                onClick={() => toggleQuestion(index)}
              >
                {question.question}
                <span className="faq-arrow">
                  {activeQuestion === index ? "▲" : "▼"}
                </span>
              </button>
              {activeQuestion === index && (
                <div className="faq-answer">{question.answer}</div>
              )}
            </li>
          ))}
        </ul>
      </div>
      </div>
    </div>
  );
}

export default Faq;