import React from "react";
import nam from "../images/name.png"

export const SlideEight = () => {
  return (
    <>
      <div
        className="pb-8 px-8 items-center justify-center lg:mx-12 xl:mx-32 2xl:mx-64"
        style={{ fontFamily: "Tajawal, system-ui", fontWeight: "400" }}
      >
        <div className=" items-center justify-center md:text-end text-center md:flex md:flex-row-reverse">
          <p dir="ltr" className="text-center inline-block">
            <img
              src={nam}
              alt=""
              className=" pb-4 md:w-56 md:pb-1 md:pl-2 inline-block"
            />
           Risk Warning: Before starting trading; You should realize the risks of this, and take into account the level of you rexperience in this field. Moreover; Trading and investment in global markets and foreign exchanges involve a high degree of risk and may cause great losses, so they may not be two suitable options for all individuals
          </p>
        </div>
      </div>
      <div className="text-center "
        style={{ fontFamily: "Tajawal, system-ui", fontWeight: "400" }}
      >
        <hr className="border-t border-gray-400 w-full " />
        <p className="text-[#14192E] opacity-[0.75] p-4 ">
        Copyright © 2024 Accuindex. All rights reserved
        </p>
      </div>
    </>
  );
};


