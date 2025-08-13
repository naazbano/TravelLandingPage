
import React from "react";
import assets from "../assets/assets";

const Section = () => {
  
 <section className="w-full bg-white py-10">
  {/* Category label */}
  <div className="text-center">
    <span className="text-xs sm:text-sm font-semibold text-gray-500 tracking-widest uppercase">
      Category
    </span>
  </div>

  {/* Heading */}
  <div className="text-center mt-3 mb-12 px-4">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-950 leading-tight">
      We Offer Best Services
    </h1>
  </div>

  {/* Service Cards */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-6">
    
    {/* Card 1 */}
    <div className="flex flex-col items-center text-center p-6 rounded-2xl hover:shadow-xl transition duration-300 bg-white">
      <img src={assets.weather} alt="Weather" className="mb-4 w-14 h-14 sm:w-16 sm:h-16" />
      <h3 className="text-blue-900 font-semibold text-base sm:text-lg">
        Calculated Weather
      </h3>
      <p className="mt-2 text-gray-600 text-sm sm:text-base">
        Built Wicket longer admire do barton vanity itself do in it.
      </p>
    </div>

    {/* Card 2 */}
    <div className="flex flex-col items-center text-center p-6 rounded-2xl hover:shadow-xl transition duration-300 bg-white">
      <img src={assets.Activeflight} alt="Active Flight" className="mb-4 w-14 h-14 sm:w-16 sm:h-16" />
      <h3 className="text-blue-900 font-semibold text-base sm:text-lg">
        Best Flights
      </h3>
      <p className="mt-2 text-gray-600 text-sm sm:text-base">
        Engrossed listening. Park gate sell they west hard for the.
      </p>
    </div>

    {/* Card 3 */}
    <div className="flex flex-col items-center text-center p-6 rounded-2xl hover:shadow-xl transition duration-300 bg-white">
      <img src={assets.mice} alt="Local Events" className="mb-4 w-14 h-14 sm:w-16 sm:h-16" />
      <h3 className="text-blue-900 font-semibold text-base sm:text-lg">
        Local Events
      </h3>
      <p className="mt-2 text-gray-600 text-sm sm:text-base">
        Barton vanity itself do in it. Preferred to men it engrossed listening.
      </p>
    </div>

    {/* Card 4 */}
    <div className="flex flex-col items-center text-center p-6 rounded-2xl hover:shadow-xl transition duration-300 bg-white">
      <img src={assets.setting} alt="Customization" className="mb-4 w-14 h-14 sm:w-16 sm:h-16" />
      <h3 className="text-blue-900 font-semibold text-base sm:text-lg">
        Customization
      </h3>
      <p className="mt-2 text-gray-600 text-sm sm:text-base">
        We deliver outsourced aviation services for military customers.
      </p>
    </div>

  </div>
</section>

};

export default Section;
