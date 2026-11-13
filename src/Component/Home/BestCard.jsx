import React from 'react'
import {Link} from 'react-router-dom'

const BestCard = ({item}) => {
  return (
    <Link to={item.path} className="block">
   <div className="flex flex-col items-center">
    <div className="px-2 py-1 border-2 border-amber-50 bg-[#A7B48F] text-center rounded-2xl">
      <h1 className="text-[#FDF4EA] text-xl">{item.name}</h1>
    </div>

     <div className="mt-2 bg-white w-70 h-90 rounded-xl shadow-lg shadow-[#5f2b06] hover:scale-105 transition-transform duration-300 border-3 border-[#FDF4EA]">
     <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-xl" />
    </div>
   </div>
   </Link>
  )
}

export default BestCard
