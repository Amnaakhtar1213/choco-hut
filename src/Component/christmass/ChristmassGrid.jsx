import React from 'react'
import ChristmasData from '../../Data/christmass'
import ChristmassCard from './ChristmassCard'
import img11 from "../../assets/hero/merry2.png"
import Nav2 from '../Nav2'
import ChristmassHeader from './ChristmassHeader'

const ChristmassGrid = () => {
  return (
     <section className="bg-[#dacbb7] ">
      <Nav2 />
     <div className="mx-auto mb-8 max-w-7xl overflow-hidden rounded-3xl mt-4">
  <img
    src={img11}
    alt="Christmas treats"
    className="h-48 w-full object-cover sm:h-64 md:h-80"
  />
</div>
<div className="mx-auto flex flex-row h-full w-120 items-center justify-center border border-green-900 bg-red-800 text-green-950 rounded-2xl hover:shadow-2xl hover:shadow-green-500">
  <h1 className="px-4 py-1 text-center text-3xl font-bold">
   HAPPY CHRISTMASS
  </h1>
</div>
         <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 px-5 md:px-20 pt-10">
          {ChristmasData.map((item) => (
            <ChristmassCard key={item.id} item={item} />
          ))}
        </div>
    </section>
  )
}

export default ChristmassGrid
