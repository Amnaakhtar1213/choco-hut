import React from 'react'

import HalloweenSec from '../Home/HalloweenSec'
import Christmass from './ChristmassSec'
import img7 from "../../assets/Features/bg2.jpg"

const SeasonalSec = () => {
  return (
<>
  <div className="relative flex w-full flex-col items-center overflow-hidden py-10">
    <img
      src={img7}
      alt=""
      className="absolute inset-0 h-full w-full object-cover blur-lg"
    />

    <div className="relative z-10 flex flex-col items-center text-center">
      <h1 className="text-lg font-bold text-[#8B4513] md:text-4xl">
        A LITTLE SEASONAL MAGIC
      </h1>
      <p className="text-[#97ab65] md:text-xl">
        Find a festive cake for your celebration
      </p>
    </div>

    <div className="relative z-10 mt-10 grid w-full grid-cols-1 items-center gap-10 px-4 sm:px-8 md:grid-cols-2 md:px-16">
      <Christmass />
      <HalloweenSec />
    </div>
  </div>
</>
      
   
  )
}

export default SeasonalSec
