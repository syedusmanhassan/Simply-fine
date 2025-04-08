import React from "react";
import Bottom from "./picture/paperBottom.png";
import Graph from "./picture/Graph.png";
import FlyingPaper from "./picture/Flyingpaper.png";
import AIBrain from "./picture/AIBrainBg.png";
import award from "./picture/award.png";

const HeroSection = () => {
    return(
        <main className="container mx-auto min-w-full  relative overflow-hidden  bg-[rgba(255,250,243,1)]">
        {/* Hero illustrations - Left side */}
        <div className=" left-0 md:left-10 top-20 w-1/3 md:w-1/4 xl:w-1/3 opacity-90 hidden md:block lg:mb-9">
          <img
            src={Bottom}
            alt="Person working with laptop"
            className="w-[400px] h-72 lg:-mb-72 lg:mt-48 lg:-ml-[100px]"
          />
        </div>

        {/* Hero illustrations - Right side */}
        <div className="absolute right-0 md:right-10 top-10 w-1/3 md:w-1/4 xl:w-1/3 opacity-90 hidden md:block">
          <img
            src={FlyingPaper}
            alt="Person surfing"
            className="w-[390px] h-[300px] lg:ml-[160px] "
          />
        </div>

        {/* Hero text */}
        <div className="text-center max-w-2xl mx-auto relative z-10 pt-10 lg:pt-0 md:pt-24 ">
          <h1 className="text-[1.25rem] md:text-5xl lg:text-[46px] font-bold leading-tight mb-6 font-space lg:-mt-[130px] ipad-mini:-mt-[50px] ipad-air:-mt-[50px]">
            Elevate Your Content Creation
      
            With <span className="bg-[rgba(254,94,58,1)] text-white px-2 py-1 rounded inline-block transform -rotate-6 mt-[13px]">
              AI-Powered
            </span> Precision
          </h1>
        </div>

        {/* Bottom illustrations */}
        <div className="mt-12 lg:mt-60 flex gap-8 ipad-mini:gap-28 ipad-air:gap-28  max-w-5xl mx-auto">
          <div className="relative">
            <img
              src={Graph}
              alt="Growth metrics"
              className="w-[386px] h-[334px] lg:-mt-[230px] lg:ml-[100px] hidden lg:block"
            />
          </div>
          <div className="relative">
            <img
              src={AIBrain}
              alt="Person working with laptop"
              className="lg:w-[316px] lg:h-[318px] lg:-mt-[230px] lg:ml-[175px] w-[200px] ipad-pro:ml-[125px]"
            />
          </div>
          <div className="relative">
            <img
              src={award}
              alt="AI brain"
              className="lg:w-[427px] lg:h-[378px] lg:-mt-[230px] lg:ml-[235px] w-[200px] ipad-pro:ml-[84px]"
            />
          </div>
        </div>
      </main>
    );



}

export default HeroSection;