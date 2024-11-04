import React, { useState } from "react";

export const SlideSix = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const questions = [
    { question: "Why are the US Elections so important for traders?", answer: "US Elections impact global markets and create volatility, which can offer trading opportunities." },
    { question: "Can I trade different assets during the US Elections?", answer: "Yes, you can trade multiple asset classes including stocks, forex, and commodities during the US Elections." },
    { question: "How soon can I start trading?", answer: "Once you sign up, verify your account, and fund it, you can start trading in minutes!" },
  ];

  return (
    <div className="flex flex-col justify-center bg-gradient-to-r from-[#530037] to-[#9A2168] text-white p-6 mt-10">
      {/* Centered Heading */}
      <h1
        className="text-3xl md:text-4xl lg:text-5xl font-medium text-center mb-4 mt-10"
        style={{
          fontFamily: "Tajawal, sans-serif",
          fontWeight: "800",
        }}
      >
        Frequently Asked Questions
      </h1>

      {/* FAQ Items */}
      <div className="text-left md:ml-10 lg:ml-24 xl:ml-48 2xl:ml-60 py-8 tracking-widest">
        {questions.map((item, index) => (
          <div key={index} className="mb-6">
            <div
              className="flex items-center cursor-pointer text-base md:text-lg lg:text-xl font-semibold"
              onClick={() => toggleQuestion(index)}
              style={{
                fontFamily: "Tajawal, sans-serif",
                fontWeight: "600",
              }}
            >
              <span className="text-2xl mr-2">
                {openQuestion === index ? "-" : "+"}
              </span>
              <span>{item.question}</span>
            </div>

            {openQuestion === index && (
              <p
                className="text-xs md:text-lg lg:text-xl text-[#FFFFFF] mt-2"
                style={{
                  fontFamily: "Tajawal, sans-serif",
                  fontWeight: "300",
                }}
              >
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
