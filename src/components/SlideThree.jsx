import React from "react";
import Layer from "../images/layer1.png";
import Layer1 from "../images/layer2.png";
import Layer2 from "../images/layer3.png";
import Layer3 from "../images/layer4.png";
import Layer4 from "../images/layer5.png";

export const SlideThree = () => {
    return (
        <div className="lg:pt-28 lg:pb-20 2xl:pl-20 2xl:pr-20 ">
            <div className="pt-24 pb-8">
                <p className="text-center text-2xl md:text-3xl lg:text-5xl font-bold text-[#1E3767]"
                    style={{ fontFamily: "Tajawal, system-ui", fontWeight: "800" }}>
                        Why do you choose
                        <span className="text-[#9A2168] font-extrabold" > AccuIndex ?</span> </p>
            </div>
            <div className="flex flex-col-reverse lg:flex-row lg:justify-center lg:space-x-4 space-y-4 md:space-y-7 lg:space-y-0 pt-2 pb-10 lg:pt-10">
                <div className="flex flex-col items-center">
                    <img
                        className="w-14 h-14 p-2  bg-[#9A2168]"
                        style={{ fontFamily: "Tajawal, system-ui", fontWeight: "800" }}
                        src={Layer}
                        alt="Title 1"
                    />
                    <h2 className="text-xl lg:text-lg xl:text-xl font-bold text-center pt-3 pb-2 text-[#1E3767] xl:px-8  "
                    style={{ fontFamily: "Tajawal, system-ui", fontWeight: "600" }}>
                        Smart Risk Management
                                     </h2>
                    <p className="text-gray-500 text-center px-10 md:px-64 lg:px-0 xl:px-10 2xl:px-12" style={{ fontFamily: "Tajawal, system-ui", fontWeight: "400" }}>
                    With Accuindex, you can minimize the risk of forced liquidation during intense market fluctuations
                    bodies
                   
                                   </p>
                </div>

                <div className="flex flex-col items-center pb-3 md:pb-7">
                    <img
                        className="w-14 h-14 p-2 bg-[#9A2168]"
                        style={{ fontFamily: "Tajawal, system-ui", fontWeight: "800" }}
                        src={Layer1}
                        alt="Title 1"
                    />
                    <h2 className="text-xl lg:text-lg xl:text-xl font-bold text-center pt-3 pb-2 text-[#1E3767] lg:text-nowrap "
                    style={{ fontFamily: "Tajawal, system-ui", fontWeight: "600" }}>
                        Instant Trade Execution                    </h2>
                    <p className="text-gray-500 text-center px-10 md:px-64 lg:px-0 xl:px-10 2xl:px-2" style={{ fontFamily: "Tajawal, system-ui", fontWeight: "400" }}>
                    Enjoy instant trade execution without impacting prices, even during periods of high market volatility                  
                     </p>
                </div>

                <div className="flex flex-col items-center">
                    <img
                        className="w-14 h-14 p-2 bg-[#9A2168]"
                        style={{ fontFamily: "Tajawal, system-ui", fontWeight: "800" }}
                        src={Layer2}
                        alt="Title 1"
                    />
                    <h2 className="text-xl lg:text-lg xl:text-xl font-bold text-center pt-3 pb-2 text-[#1E3767] "
                    style={{ fontFamily: "Tajawal, system-ui", fontWeight: "600" }}>
                        Cost-Free
                        Trading                 
                        </h2>
                    <p className="text-gray-500 text-center px-10 md:px-64 lg:px-0 xl:px-10 2xl:px-8" style={{ fontFamily: "Tajawal, system-ui", fontWeight: "400" }}>
                    Accuindex offers Islamic accounts with no swap fees, ideal for traders looking for interest-free options
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    <img
                        className="w-14 h-14 p-2 bg-[#9A2168]"
                        style={{ fontFamily: "Tajawal, system-ui", fontWeight: "800" }}
                        src={Layer3}
                        alt="Title 1"
                    />
                    <h2 className="text-xl lg:text-lg xl:text-xl font-bold text-center pt-3 pb-2 text-[#1E3767] "
                    style={{ fontFamily: "Tajawal, system-ui", fontWeight: "600" }}>
                    Negative Balance Protection               
                    </h2>
                    <p className="text-gray-500 text-center px-10 md:px-64 lg:px-0 xl:px-10 2xl:px-14" style={{ fontFamily: "Tajawal, system-ui", fontWeight: "400" }}>
                    Trade with confidence knowing that you’ll never lose more than your deposited capital, thanks to our negative balance protection.
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    <img
                        className="w-14 h-14 p-2 bg-[#9A2168]"
                        style={{ fontFamily: "Tajawal, system-ui", fontWeight: "800" }}
                        src={Layer4}
                        alt="Title 1"
                    />
                    <h2 className="text-xl lg:text-lg xl:text-xl font-bold text-center pt-3 pb-2 text-[#1E3767] "
                    style={{ fontFamily: "Tajawal, system-ui", fontWeight: "600" }}>
                    Superior Capital Protection                    
                    </h2>
                    <p className="text-gray-500 text-center px-10 md:px-64 lg:px-0 xl:px-10 2xl:px-1" style={{ fontFamily: "Tajawal, system-ui", fontWeight: "400" }}>
                    We ensure protection against sudden price fluctuations, safeguarding your trades from major market gaps
                    </p>
                </div>
            </div>
        </div>
    );
};
