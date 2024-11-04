import React from "react";
import Mobile from "../images/mobile.png";

export const SlideFour = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className=" relative flex flex-col md:flex-row items-center  bg-[#EAEAEA] mx-auto pt-7 lg:p-0 h-[850px] md:h-[380px] lg:w-[650px] md:w-[550px] xl:w-[800px] rounded-3xl md:rounded-3xl mb-20 md:mb-20 lg:mb-24">
        {/* Text Section */}
        <div className="flex flex-col items-center text-center md:items-start lg:items-start   lg:w-[600px] md:w-[400px] lg:pt-2 md:pl-5 xl:pl-24">
          <div className="">
            <h1
              className=" lg:text-3xl  text-[#1E3767] text-[21px] lg:text-start  pt-10 md:text-start md:mr-8"
              style={{
                fontFamily: "Tajawal, sans-serif",
                fontWeight: "800",
              }}
            >
            A special offer to trade
            </h1>
            <h1
              className=" lg:text-4xl text-[#9A2168]  text-[19px] lg:text-start  md:text-start tracking-wider"
              style={{
                fontFamily: "Tajawal, sans-serif",
                fontWeight: "800",
              }}
            >

American indicators!
            </h1>
          </div>
          <p
            className="lg:mt-2 text-[#14192E] text-sm lg:text-start  my-1 mx-6 md:mx-0 md:pl-2 lg:mx-0  tracking-wide opacity-[] md:text-start mr-8 lg:pr-10"
            style={{
              fontFamily: "Tajawal, sans-serif",
              fontWeight: "400",
            }}
          >
           Take advantage of the fluctuations of the American market with our exclusive offer. With Accuindex, we give you the opportunity to explore global markets and expand your portfolio in Dow Jones, Nasdak and S&P 500 indicators.


          </p>
          <p
            className="lg:mt-2 text-[#14192E] text-sm lg:text-start  my-1 mx-6 md:mx-0 md:pl-2 lg:mx-0 tracking-wide opacity-[] md:text-start mr-8 lg:pr-10"
            style={{
              fontFamily: "Tajawal, sans-serif",
              fontWeight: "400",
            }}
          >
          Whether you are a trader or new in the market, this special offer allows you to discover your capabilities and enhance your experiences in trading the most influential indicators.


          </p>
          <p
            className="pt-2 md:text-md text-[#9A2168]"
            style={{
              fontFamily: "Tajawal, sans-serif",
              fontWeight: "800",
            }}
          >
          Ready to start in the world of trading? Start now

          </p>
          <button className="mt-4 md:mb-10 lg:mt-2 lg: bg-[#9A2168] text-white  py-2 px-8  rounded" style={{ fontFamily: 'Tajawal, system-ui', fontWeight: '500' }}
            onClick={scrollToTop}
          >
            <p className="">Open your account today</p>
          </button>
        </div>

        {/* Image Section */}
        <div className="mr-10 lg:mt-0 lg:flex">
          <img
            src={Mobile}
            alt="Mobile"
            className="w-[400px] md:w-[250px] md:absolute md:top-10 md:-right-[120px] "
          />
        </div>
      </div>
    </div>
  );
};


