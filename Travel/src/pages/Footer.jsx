import React from 'react';
import assets from '../assets/assets';

const Footer = () => {
  return (
    <footer className="bg-white px-6 md:px-20 py-12">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        
        {/* Logo Section */}
        <div>
          <img src={assets.footlogo} alt="Jadoo Logo" className="mb-4 w-28 sm:w-32" />
          <p className="text-gray-600 text-sm font-semibold leading-6">
            Book your trip in minute, get full control for much longer.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-bold text-blue-950 text-lg mb-4">Company</h3>
          <ul className="space-y-2 text-gray-600 font-semibold">
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Mobile</a></li>
          </ul>
        </div>

        {/* Contact Links */}
        <div>
          <h3 className="font-bold text-blue-950 text-lg mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-600 font-semibold">
            <li><a href="#">Help/FAQ</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Affiliates</a></li>
          </ul>
        </div>

        {/* More Links */}
        <div>
          <h3 className="font-bold text-blue-950 text-lg mb-4">More</h3>
          <ul className="space-y-2 text-gray-600 font-semibold">
            <li><a href="#">Airlinefees</a></li>
            <li><a href="#">Airline</a></li>
            <li><a href="#">Low fare tips</a></li>
          </ul>
        </div>

        {/* Social Media & App Links */}
        <div className="flex flex-col items-center sm:items-start">
          {/* Social icons */}
          <div className="flex gap-4 justify-center sm:justify-start">
            <img src={assets.facebook} alt="Facebook" className="w-8 h-8 cursor-pointer" />
            <img src={assets.instagram} alt="Instagram" className="w-8 h-8 cursor-pointer" />
            <img src={assets.twitter} alt="Twitter" className="w-8 h-8 cursor-pointer" />
          </div>

          <p className="text-gray-600 text-md mt-2 font-semibold text-center sm:text-left">
            Discover our app
          </p>

          {/* App Store badges */}
          <div className="flex justify-center  sm:justify-start  gap-2 mt-3  md:relative md:right-5 lg:relative  lg:right-10 ">
            <img src={assets.goggle} alt="Google Play" className="w-32 cursor-pointer" />
            <img src={assets.applestore} alt="App Store" className="w-32 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 text-sm mt-12">
        All rights reserved @jadoo.co
      </div>
    </footer>
  );
};

export default Footer;
