import React from "react";
import man from "../images/ManEn.png";
import map from "../images/Map.png";
import { FaCheck } from "react-icons/fa";

import "react-phone-input-2/lib/style.css";


import "react-toastify/dist/ReactToastify.css";


export const SlideOne = () => {

  return (
    <div className="relative flex flex-col xl:flex-row w-full pt-14">
      {/* Background Map Image */}
      <div className="absolute pt-10 p-3 md:pt-12 lg:pt-4 xl:pt-0 2xl:pl-8">
        <img src={map} alt="Map" className="w-full h-full " />
      </div>

      {/* Left Section: Texts and Form */}
      <div className="relative flex-1 w-full pl-6 pr-6  md:pr-10  xl:pl-24 xl:pt-24 ">
        {/* Text Section */}
        <div className="mb-4 text-white">
          <h1
            className="text-2xl lg:text-3xl font-bold text-[#1E3767] pb-2 text-center lg:text-start"
            style={{ fontFamily: "Tajawal, system-ui", fontWeight: "800" }}

          >
            Trade the largest American Indices with&nbsp;
            <span
              className="text-[#9A2168]"
              style={{ fontFamily: "Poppins, system-ui", fontWeight: "800" }}
            >
              AccuIndex
            </span>
          </h1>
          <p
            className="text-2xl px-10 lg:px-0 lg:text-start text-[#1E3767] text-center"

            style={{ fontFamily: "Tajawal, system-ui", fontWeight: "500" }}
          >
            And get
            <span className="text-[#9A2168] font-bold text-[25px]">&nbsp;30%</span>{" "}
            bonus your first deposit!
          </p>
        </div>

        {/* Input Fields */}
        <form >
          <div className="flex flex-col-reverse sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-4 md:mb-0">
            <div className="w-full sm:w-1/2">
              <label
                className="block mb-1 text-black"
                style={{ fontFamily: "Tajawal, system-ui", fontWeight: "500" }}
              >
                First name
              </label>
              <input

                type="text"
                dir="rtl"
                className="w-full p-2 border border-gray-300 rounded bg-[#FFFFFF];
]"
              />
            </div>
            <div className="w-full sm:w-1/2">
              <label
                className="block mb-1 text-black"
                style={{ fontFamily: "Tajawal, system-ui", fontWeight: "500" }}
              >
                Last name
              </label>
              <input
              
                type="text"

                className="w-full p-2 border border-gray-300 rounded mb-4 bg-[#FFFFFF]"
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              className="block mb-1 text-black"
              style={{ fontFamily: "Tajawal, system-ui", fontWeight: "500" }}
            >
              E-mail
            </label>
            <input
            
              type="text"
              dir="rtl"
              className="w-full p-2 border border-gray-300 rounded bg-[#FFFFFF]"
            />
          </div>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 md:mb-5">
            <div className="w-full flex flex-col">
              <p
                className="leading-7 text-[18px]"
                style={{
                  fontFamily: "Tajawal, system-ui",
                  fontWeight: "500",
                }}
              >
                Country
              </p>
              <input
               
                type="text"
                dir="rtl"
                className="w-full p-2 border border-gray-300 rounded bg-[#FFFFFF];
]"
              />

            </div>

            <div className="w-full flex flex-col  md:ml-2 pb-2 md:pb-0">
              <label
                htmlFor="state"
                className="leading-7 text-[18px]"
                style={{
                  fontFamily: "Tajawal, system-ui",
                  fontWeight: "500",
                }}
              >
                Phone number
              </label>
              <div className="relative w-full">

                <input
                 
                  type="text"
                  dir="rtl"
                  className="w-full p-2 border border-gray-300 rounded bg-[#FFFFFF];
]"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-end text-end mt-4 ">
              <label className="relative cursor-pointer mr-2">
                <input
                
                  type="checkbox"
                  className="sr-only peer"
                />
                <div className="w-5 h-5 border-2 border-[#9A2168] rounded-md peer-checked:bg-[#9A2168] peer-checked:border-bg-[#9A2168] flex justify-center items-center">
                  <FaCheck size={14} color="#FFFFFF" />
                </div>
              </label>
              <p
                dir="rtl"
                className=" text-[#51515199]"
                style={{ fontFamily: "Tajawal, system-ui", fontWeight: "400" }}
              >
                Clicking here, I agree that
                <span
                  className="text-[#9A2168] font-bold"
                  style={{
                    fontFamily: "Tajawal, system-ui",
                    fontWeight: "700",
                  }}
                >
                  {" "}
                  Accuindex &nbsp;
                </span>
                will contact me for marketing purposes. You can cancel the
                subscription at any time. For more details, please see our marketing and communications policy statement

              </p>

            </div>
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="text-white bg-[#9A2168] border-0 py-2 px-20 sm:px-32 md:px-28 lg:px-24 xl:px-28 focus:outline-none hover:bg-[#811e58] rounded text-lg mt-4 md:mb-10"
              style={{ fontFamily: "Tajawal, system-ui", fontWeight: "500" }}
            >
              Sign up
            </button>

          </div>
        </form>
      </div>

      {/* Right Section: Image */}
      <div className="relative w-full flex flex-1 items-end xl:pr-36 inset-y-1">
        <img src={man} alt="Man" className="xl:h-[700px] xl:w-[850px]" />
      </div>
    </div>
  );
};