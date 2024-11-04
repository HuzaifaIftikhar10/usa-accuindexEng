import React from "react";
import frame from "../images/Frame.png";
import photo from "../images/Mask.png";

export const SlideTwo = () => {
  return (
    <div className="bg-gradient-to-r from-[#9A2168] to-[#530037]  xs:h-[675px] xss:h-[643px] 2xss:h-[623px] 2xs:h-[603px] 3xs:h-[583px] 4xs:h-[563px] 5xs:h-[531px] 6xs:h-[531px] 7xs:h-[511px] 8xs:h-[491px] md:h-[350px] lg:h-[396px] relative flex flex-col-reverse md:flex-row md:mb-20 lg:mb-12 mb-9">
      <div className="relative flex-1 flex items-center justify-center lg:pl-10">
        <div className="absolute top-[24px] md:top-[117px] lg:top-[70px] xl:top-[68px]">
          {/* Background Image (Frame) */}
          <img
            src={frame}
            alt="Frame"
            className="w-[250px] md:w-[340px] lg:w-[480px] h-auto object-cover "
          />
          {/* Overlay Image (Photo) */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={photo}
              alt=""
              className="w-[230px] md:w-[320px] lg:w-[450px] h-auto object-contain "
            />
          </div>
        </div>
      </div>

      <div
        className="flex-1 flex items-center justify-center md:justify-end p-4"

        style={{ fontFamily: "Tajawal, system-ui", fontWeight: "800" }}
      >
        <div className=" lg:p-16 xl:p-32 pt-10">
          <p className="text-white text-center md:text-start pl-2 pr- text-2xl md:text-2xl lg:text-2xl xl:text-3xl md:pr-4">
            The circulation of American indices in light of economic fluctuations
          </p>
          <p
            className="pt-5 text-[#EAEAEA] text-sm text-center md:text-start px-2 lg:pl-2"
            style={{ fontFamily: "Tajawal, system-ui", fontWeight: "400" }}
          >
            American indices such as Dow Jones, Nasdaq and S& P 500 mirrors are to perform the major economic sectors, as they provide exceptional opportunities for trading amid continuous changes.
          </p>

          <p
            className="pt-5 text-[#EAEAEA] text-sm text-center md:text-start px-2 lg:pl-2"
            style={{ fontFamily: "Tajawal, system-ui", fontWeight: "400" }}
          >
           

            With <span className="font-bold">Accuindex,</span> take advantage of market fluctuations to achieve the maximum benefit from price movements.
          </p>



        </div>
      </div>
    </div>
  );

};

