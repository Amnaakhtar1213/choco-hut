import React from 'react'
import MacaronCard from './MacaronCard'
import macarons from '../../Data/Macarons'
import { Link } from 'react-router-dom'

const MacaronGrid = () => {
  return (
   <div className=" overflow-hidden mb-10">
         <div className="relative z-10 px-10">
         <div className="bg-[#FFF8F0] px-4 py-1 rounded-xl inline-block">
           <h1 className="text-[#8B4513] font-bold text-xl">Macarons</h1> 
         </div>
        <div className="mt-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
         {macarons.slice(0,4).map((cake) => (
           <MacaronCard key={cake.id} cake={cake} showFavorite={false}/>
         ))}
         </div>
         <div className="mt-6 flex justify-center">
           <Link to="/macarons" className="group text-[#8B4513] bg-[#FFF8F0]  py-2 px-4 rounded-xl border-2 border-[#8B4513] hover:bg-[#8B4513] hover:text-[#FFF8F0] hover:border-[#FFF8F0]">More Macarons <i className="fa-solid fa-arrow-right text-center transition-transform duration-300 group-hover:translate-x-1"></i></Link>
         </div>
         </div>
        
       </div>
  )
}

export default MacaronGrid
