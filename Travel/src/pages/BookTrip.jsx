import React from "react";
import assets from "../assets/assets";

const steps = [
  {
    icon: assets.designation,
    title: "Choose Destination",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
  },
  {
    icon: assets.payment,
    title: "Make Payment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
  },
  {
    icon: assets.Airport,
    title: "Reach Airport on Selected Date",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
  },
];

const BookTrip = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT COLUMN */}
        <div className="flex flex-col">
          <p className="text-sm sm:text-base font-bold text-gray-500">
            Easy and Fast
          </p>
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-blue-950 mt-4 leading-tight">
            Book Your Next Trip <br /> In 3 Easy Steps
          </h1>

          <div className="mt-10 flex flex-col gap-6">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-4 sm:gap-6">
                <img
                  src={step.icon}
                  alt={`${step.title} icon`}
                  className="w-10 h-10 sm:w-12 sm:h-12"
                />
                <div>
                  <h3 className="font-bold text-gray-700 text-base sm:text-lg">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm sm:text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="relative flex justify-center">
          {/* Main Card */}
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-3xl shadow-2xl p-5 bg-white">
            <img
              src={assets.travel}
              alt="Trip to Greece"
              className="rounded-2xl w-full h-auto"
            />
            <h3 className="font-bold text-lg sm:text-xl text-gray-800 mt-6">
              Trip To Greece
            </h3>
            <p className="text-gray-500 text-sm sm:text-base mt-1">
              14-29 June | by Robbin joseph
            </p>
            <div className="flex items-center gap-4 mt-4 text-gray-500">
              <span>
                <img src={assets.leaf} alt="Leaf icon" />
              </span>
              <span>
                <img src={assets.map} alt="Map icon" />
              </span>
              <span>
                <img src={assets.send} alt="Send icon" />
              </span>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-2">
                <img src={assets.building} alt="People going" />
                <p className="text-gray-500 text-sm sm:text-base">
                  24 people going
                </p>
              </div>
              <img
                src={assets.heart}
                alt="Like"
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
            </div>
          </div>

          {/* Floating Rome Card */}
          <div className="absolute top-60 -right-3 sm:bottom-12 sm:right-0 w-40 sm:w-48 bg-white p-2 rounded-2xl shadow-xl flex items-center gap-3 lg:right-15 lg:w-60 ">
            <img
              src={assets.rome}
              alt="Trip to Rome"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
            />
            <div>
              <p className="text-xs sm:text-sm font-semibold text-gray-600">
                Ongoing
              </p>
              <p className="text-sm sm:text-base font-bold text-gray-800">
                Trip to Rome
              </p>
              <p className="text-[10px] sm:text-xs mt-1">
                <span className="text-purple-600 font-bold">40%</span>
                <span className="text-black px-1">completed</span>
              </p>
              <div className="w-full h-1.5 bg-gray-200 rounded-full mt-2 overflow-hidden">
                <div
                  className="h-full bg-purple-500 rounded-full"
                  style={{ width: "40%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookTrip;
