import React from 'react'
import HalloweenCard from './HalloweenCard'
import img101 from '../../assets/hero/hallow2.png'
import Halloween from '../../Data/Halloween'
import Nav2 from '../Nav2'
const HalloweenGrid = () => {
  return (
    <section className="bg-[#7b694d] ">
      <Nav2 />
    <div className="mx-auto mb-8 mt-4 max-w-7xl overflow-hidden rounded-3xl border-4 border-orange-200 shadow-lg shadow-orange-950/10">
  <img
    src={img101}
    alt="Halloween treats"
    className="h-48 w-full object-cover sm:h-64 md:h-80"
  />
</div>
<div className="mx-auto flex flex-row h-full w-120 items-center justify-center border border-orange-500 bg-orange-300 text-black rounded-2xl hover:shadow-2xl hover:shadow-black">
  <h1 className="px-4 py-1 text-center text-3xl font-bold">
   TRICK OR TREATS
  </h1>
</div>
         <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 px-5 md:px-20 pb-10 pt-10">
          {Halloween.map((item) => (
            <HalloweenCard key={item.id} item={item} />
          ))}
        </div>
    </section>
  )
}

export default HalloweenGrid
