import React from 'react'
import img10 from '../../assets/hero/bell3.jpg'

const ChristmassHeader = () => {
  return (
    <div className="relative h-full w-full flex items-center justify-center">
      <img src={img10} alt="Christmas Bell" className="w-full h-full object-cover"/>
      <h1 className="absolute inset-0 z-10 top-10 md:top-40 text-red-800 text-xl md:text-4xl font-bold text-center"> <i className="fa-solid fa-snowflake text-white"></i> MERRY CHRISTMASS <i className="fa-solid fa-snowflake text-white"></i></h1>
      <p className="absolute inset-0 top-13 text-sm md:text-lg md:top-50 text-white text-center mt-2 ">Celebrate the season with something sweet.</p>
    </div>
  )
}

export default ChristmassHeader

