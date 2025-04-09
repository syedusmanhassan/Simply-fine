import React from 'react';
import ImageVolt from "./picture/ImageVolt.png";
import ImageMobile from "./picture/ImageMobile.png";
import Image3 from "./picture/Image3.png";

const Solution = () => {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <h1 className="text-4xl text-gray-900 mb-6 md:mb-0 font-space text-[55px] lg:pl-9">Solutions for All</h1>
          <div className="max-w-xs lg:max-w-[26rem] flex flex-col items-start lg:mr-28">
            <p className="text-gray-800 mb-4 font-[18px] font-space text-left ">
              A library of Solutions for all you needs.
              Custom Solutions on demand
            </p>
            <button className="border border-gray-300 rounded-md py-2 px-4 hover:bg-gray-50 transition-colors text-gray-800">
              Explore the Blog
            </button>
          </div>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-14 gap-6 lg-h-[447px] lg:min-w-full lg:px-8">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
            <div className="p-6">
              <div className="mb-6 p-4 lg:p-0 rounded-lg flex justify-center">
              <img src={ImageVolt} alt="Icon" className="w-[430px] h-[300px] object-contain" />
              </div>
              <h2 className="text-lg font-semibold mb-2 text-left font-space text-[20px]">Solution for Product Marketers</h2>
              <p className="text-gray-600 mb-4 text-left font-space text-[16px]">
                Uplevel product launches, messaging and enablement, all while empowering your team to achieve 10x results
              </p>
              <div className="flex items-center text-gray-800 hover:text-gray-900">
                <span className="font-medium">Learn More</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
  
          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
            <div className="p-6">
              <div className="mb-6  p-4 lg:p-0 rounded-lg flex justify-center">
              <img src={ImageMobile} alt="Icon" className="w-[430px] h-[300px] object-contain" />
              </div>
              <h2 className="text-lg font-semibold mb-2 text-left font-space text-[20px]">Solution for Product Marketers</h2>
              <p className="text-gray-600 mb-4 text-left font-space text-[16px]">
                Uplevel product launches, messaging and enablement, all while empowering your team to achieve 10x results
              </p>
              <div className="flex items-center text-gray-800 hover:text-gray-900">
                <span className="font-medium">Get the Template</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
  
          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
            <div className="p-6">
              <div className="mb-6 p-4 lg:p-0 rounded-lg flex justify-center">
                <img src={Image3} alt="Icon" className="w-[430px] h-[300px] object-contain" />
              </div>
              <h2 className="text-lg font-semibold mb-2 text-left font-space text-[20px]">How to Pilot AI at your company</h2>
              <p className="text-gray-600 mb-4 text-left font-space text-[16px]">
                Generative AI content program at your company.
              </p>
              <div className="flex items-center text-gray-800 hover:text-gray-900 lg:mt-16">
                <span className="font-medium">Get the eBook</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Solution;
  