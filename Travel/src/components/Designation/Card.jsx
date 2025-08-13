import React from 'react'
import asstes from '../../assets/assets'

const Card = () => {

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
    
    {/* Card 1 */}
    <div className="w-full max-w-xs bg-white rounded-3xl overflow-hidden shadow-lg">
      <img src={asstes.italy} className="w-full h-56 sm:h-60 object-cover" alt="Rome" />
      <div className="flex justify-between items-center px-4 py-2">
        <p className="text-gray-600">Rome, Italy</p>
        <p className="text-gray-600">$5.42k</p>
      </div>
      <div className="flex items-center px-4 pb-4">
        <img src={asstes.arrow} alt="Arrow" className="w-4 h-4" />
        <p className="text-gray-600 ml-2">10 Days Trip</p>
      </div>
    </div>

    {/* Card 2 - Highlighted */}
    <div className="w-full max-w-xs bg-white rounded-3xl overflow-hidden shadow-xl transform scale-105 lg:scale-110 z-10 relative">
      <img src={asstes.london} className="w-full h-56 sm:h-60 object-cover" alt="London" />
      <div className="flex justify-between items-center px-4 py-2">
        <p className="text-gray-600">London, UK</p>
        <p className="text-gray-600">$4.2k</p>
      </div>
      <div className="flex items-center px-4 pb-4">
        <img src={asstes.arrow} alt="Arrow" className="w-4 h-4" />
        <p className="text-gray-600 ml-2">12 Days Trip</p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="w-full max-w-xs bg-white rounded-3xl overflow-hidden shadow-lg">
      <img src={asstes.europe} className="w-full h-56 sm:h-60 object-cover" alt="Europe" />
      <div className="flex justify-between items-center px-4 py-2">
        <p className="text-gray-600">Full Europe</p>
        <p className="text-gray-600">$15k</p>
      </div>
      <div className="flex items-center px-4 pb-4">
        <img src={asstes.arrow} alt="Arrow" className="w-4 h-4" />
        <p className="text-gray-600 ml-2">28 Days Trip</p>
      </div>
    </div>

  </div>
</div>
  )
}

export default Card
