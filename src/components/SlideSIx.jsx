import React from "react";


export const  SlideSix = () => {

    return (
        <div className="flex flex-col justify-center bg-gradient-to-r from-[#530037] to-[#9A2168] text-white p-6 mt-10"
        >
          {/* Centered Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl   font-medium text-center mb-4 mt-10"
          style={{
            fontFamily: "Tajawal, sans-serif",
            fontWeight: "800",
          }}>
         Frequently Asked Questions
          </h1>
          
          {/* Right-Aligned Text Content */}
          <div className="text-left md:ml-10 lg:ml-24 xl:ml-48 2xl:ml-60 py-8 tracking-widest  ">
            <p className="text-base mb-6 md:text-lg lg:text-xl"style={{
            fontFamily: "Tajawal, sans-serif",
            fontWeight: "600",
          }}>
            + Why are the US Elections so important for traders?
            </p>
            <p className="text-base mb-6  md:text-lg lg:text-xl" style={{
            fontFamily: "Tajawal, sans-serif",
            fontWeight: "600",
          }}>
             + Can I trade different assets during the US Elections?

            </p>
            <p className="text-base mb-6  md:text-lg lg:text-xl"style={{
            fontFamily: "Tajawal, sans-serif",
            fontWeight: "600",
          }}>
            - How soon can I start trading? 
            </p>
            <p className="text-base md:text-lg lg:text-xl">
            <p className="text-xs  md:text-lg lg:text-xl text-[#FFFFFF]" 
             style={{
                fontFamily: "Tajawal, sans-serif",
                fontWeight: "300",
              }}>
          Once you sign up, verify your account, and fund it, you can start trading in minutes!
            </p>
            </p>
          </div>
        </div>
      );
  };

  