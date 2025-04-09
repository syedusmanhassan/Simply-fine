import React from 'react';
import Chair from "./picture/chair.png";
import Lock from "./picture/lock.png";
import Photo from "./picture/photo.png";
import Volt from "./picture/volt.png";
import Arrow from "./picture/arrow.png";

const Learn =()=> {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-6xl lg:max-w-[90rem]">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          {/* Left Column */}
          <div className="md:w-1/2 flex flex-col justify-center">
            <h1 className="text-white text-5xl font-bold leading-tight mb-4 text-left lg:text-[55px] font-space">
              Learn what Simply Can do foundation
            </h1>
          </div>

          {/* Right Column */}
          <div className="md:w-1/2 flex flex-col justify-center lg:ml-[500px]">
            <p className="text-white text-lg mb-4 text-justify font-space lg:text-[19px]">
              All the features you need to take a secure, <br/> controlled & impactful approach to AI.
            </p>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg w-fit flex items-center gap-2 hover:bg-orange-600 transition-colors">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="bg-neutral-50 rounded-3xl  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  md:divide-y-0 divide-gray-200 lg:h-[331px]">
          {/* Feature 1 */}
          <div className="p-6 flex flex-col items-end relative z-[4] rounded-r-3xl rounded-l-3xl   bg-neutral-50 border-r-2 ">
            <div className="mb-6">
            <img src={Chair} alt="Icon" className="" />
            </div>
            <h3 className="text-lg font-semibold mb-1 flex items-center font-space text-[20px] text-left lg:mt-[55px]">
              Work with the latest Content Writing
              <img src={Arrow} alt="Icon" className="ml-2" />
            </h3>
            <p className="text-sm text-gray-500 font-space text-[16px] text-left">
              Content Writing with latest Models with Simply's multi-model AI Engine
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 flex flex-col items-end relative z-[3] -ml-[1px] rounded-r-3xl bg-neutral-50 border-r-2 border-white ">
            <div className="mb-6">
            <img src={Photo} alt="Icon" className="" />
            </div>
            <h3 className="text-lg font-semibold mb-1 flex items-center font-space text-[20px] text-left lg:mt-[55px] ">
              Text and images, all in one place
              <img src={Arrow} alt="Icon" className="ml-2" />
            </h3>
            <p className="text-sm text-gray-500 font-space text-[16px] text-left">
              Creativity requires text & strategy - Simply's has all
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 flex flex-col items-end relative z-[2] -ml-[1px] rounded-r-3xl bg-neutral-50 border-r-2 border-white ">
            <div className="mb-6">
            <img src={Lock} alt="Icon" className="" />
            </div>
            <h3 className="text-lg font-semibold mb-1 flex items-center font-space text-[20px] text-left lg:mt-[55px]">
              Security & privacy of the highest degree
              <img src={Arrow} alt="Icon" className="ml-2" />
            </h3>
            <p className="text-sm text-gray-500 font-space text-[16px] text-left">
              We don't allow models to train on your data - period
            </p>
          </div>

          {/* Feature 4 */}
          <div className="p-6 flex flex-col items-end relative z-[1] -ml-[1px] rounded-r-3xl bg-neutral-50 border-r-2 border-white ">
            <div className="mb-6">
            <img src={Volt} alt="Icon" className="" />
            </div>
            <h3 className="text-lg font-semibold mb-1 flex items-center font-space text-[20px] text-left lg:mt-[55px]">
              Dedicated Simply resources
             <img src={Arrow} alt="Icon" className="ml-2" />
            </h3>
            <p className="text-sm text-gray-500 font-space text-[16px] text-left">
              You get access to a team of AI experts who have your back
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Learn;
