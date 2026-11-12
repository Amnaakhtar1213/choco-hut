import React from 'react'
import desserts from '../Data/desserts'
import DessertCard from '../Component/Home/DessertCard'

const DessertPage = () => {
  return (
    <div className="px-10 mt-8 mb-10">
       <h1 className="text-center text-[#8B4513] font-bold text-3xl ">Coffee, Fudges, Tiramisu & Brownies</h1>
      <div className=" mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {desserts.map((cake) => (
           <DessertCard key={cake.id} cake={cake}/>
         ))}
         </div>
    </div>
  )
}

export default DessertPage
