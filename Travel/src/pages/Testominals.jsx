import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import assets from "../assets/assets";

const Testimonials = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 px-4 sm:px-6">
        {/* Left Side - Heading */}
        <div>
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-snug mt-2">
            What People Say <br /> About Us.
          </h2>
        </div>

        {/* Right Side - Cards */}
        <div className="relative flex flex-col items-start md:items-end ">
          {/* Top Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-md z-20  lg:relative lg:right-40  ">
            <div className="flex items-center mb-4 ">
              <img
                src={assets.mikeTaylor}
                alt="Mike Taylor"
                className="w-12 h-12 rounded-full"
              />
              <div className="ml-4">
                <h4 className="font-bold text-gray-800">Mike Taylor</h4>
                <p className="text-sm text-gray-500">Lahore, Pakistan</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              "On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or diverted
              no."
            </p>
          </div>

          {/* Bottom Card - partially hidden */}
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-md absolute md:top-24 md:left-20 top-36 left-8 z-10 opacity-70 hidden sm:block">
            <div className="flex items-center mb-4">
              <div className="ml-4">
                <h4 className="font-bold text-gray-800">Chris Thomas</h4>
                <p className="text-sm text-gray-500">CEO of Red Button</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              "Windows talking painted pasture yet its express parties use.
              Sure last upon he same as knew next."
            </p>
          </div>
        </div>
      </div>

      {/* Logos */}
      <div className="flex flex-wrap justify-evenly items-center gap-9 mt-25 px-4 ">
        <img src={assets.axon} alt="Axon" className="h-12 sm:h-16" />
        <img src={assets.Jetstar} alt="Jetstar" className="h-12 sm:h-16" />
        <img
          src={assets.expedia}
          alt="Expedia"
          className="h-30 w-35 sm:h-20 relative top-5"
        />
        <img src={assets.qantas} alt="Qantas" className="h-10  w-20 sm:h-10" />
        <img src={assets.alitalia} alt="Alitalia" className="h-10  w-20 sm:h-10" />
      </div>

      {/* Subscribe Section */}
      <div className="bg-purple-50 rounded-lg px-6 py-10 mt-16 max-w-4xl mx-auto relative">
        <p className="text-center text-lg sm:text-xl font-medium text-gray-800">
          Subscribe to get information, latest news and other interesting offers
          about Jadoo
        </p>
        <div className="flex flex-col sm:flex-row justify-center mt-8 gap-4">
          <input
            type="email"
            placeholder="Your email"
            className="px-4 py-2 rounded-lg sm:rounded-l-lg border border-gray-300 text-black w-full sm:w-64 focus:outline-none"
          />
          <button className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-2 rounded-lg sm:rounded-r-lg">
            Subscribe
          </button>
        </div>

        <button className="absolute right-4 top-4 sm:top-1  bg-purple-500 hover:bg-purple-600 text-white p-3 rounded-full">
          <FaPaperPlane />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
