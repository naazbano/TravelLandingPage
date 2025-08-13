
import React from 'react';
import asstes from '../../assets/assets';

const HeroSection = () => {
  return (
    <div
      className="w-full min-h-screen bg-white relative"
      style={{
        backgroundImage: `url(${asstes.background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'right top',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Navbar */}
      <nav className="relative font-sans w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center">
                <img
                  className="h-10 w-auto"
                  src={asstes.logo}
                  alt="Lidtoo Logo"
                />
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center font-medium text-black space-x-8">
              <div>Destination</div>
              <div>Hotels</div>
              <div>Flights</div>
              <div>Bookings</div>
              <button>Login</button>
              <button className="px-5 py-2 border-2 rounded-md">SignUp</button>
              <select name="language" id="lang" className=" rounded-md px-1 py-0.5">
                <option value="En" defaultValue>
                  En
                </option>
              </select>
            </div>

            {/* Mobile Menu Button (optional) */}
            <div className="md:hidden">
              <button className="p-2 border rounded-md">Menu</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="text-center lg:text-left">
            <p className="font-bold text-lg text-red-600 uppercase tracking-wider">
              Best Destinations around the world
            </p>
            <h1
              className="mt-4 text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight tracking-tighter"
              style={{ fontFamily: "'Volkhov', serif", color: '#181E4B' }}
            >
              Travel,{' '}
              <span className="relative inline-block">
                enjoy
                <img
                  src={asstes.Decore}
                  alt="Decorative underline"
                  className="absolute -bottom-1 left-0 w-full h-auto"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </span>{' '}
              and live a new and full life.
            </h1>
            <p className="mt-6 text-gray-600 text-lg max-w-md mx-auto lg:mx-0">
              Built Wicket longer admire do barton vanity itself do in it. Preferred to
              sportsmen it engrossed listening. Park gate sell they west hard for the.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-6">
              <a
                href="#"
                className="px-8 py-4 bg-yellow-500 text-white font-semibold rounded-lg shadow-lg hover:bg-yellow-600 transition-all duration-300"
              >
                Find out more
              </a>
              <a href="#" className="flex items-center gap-2 group">
                <img src={asstes.playicon} alt="Play" />
                <span className="font-semibold text-gray-600 group-hover:text-gray-900">
                  Play Demo
                </span>
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative flex justify-center">
            <img
              src={asstes.Image}
              alt="Travel illustration"
              className="max-w-full h-auto"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  'https://placehold.co/700x700/EFEFEF/333333?text=Image+Not+Found';
              }}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
