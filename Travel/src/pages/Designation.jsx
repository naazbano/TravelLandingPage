import React from 'react'
import Card from '../components/Designation/Card'



const Designation = () => {

  return (
   <>
     <section className="w-full bg-white py-10 px-4 sm:px-6">
  {/* Label */}
  <div className="text-center">
    <span className="text-xs sm:text-sm font-semibold text-gray-500 tracking-widest uppercase">
      Top Selling
    </span>
  </div>

  {/* Heading */}
  <div className="text-center mt-3 mb-8 sm:mb-12">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-950 leading-tight">
      Top Destinations
    </h1>
  </div>
</section>

    <Card/>
  
   </>
  )
}

export default Designation