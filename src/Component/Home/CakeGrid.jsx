import React from 'react'
import CakeCard from './CakeCard'
import cakes from '../../Data/cakePage'
import { Link } from 'react-router-dom'


const CakeGrid = () => {
  return (
    <div className=" overflow-hidden mb-10">
      <div className="relative z-10 px-10">
         <div className="mb-8 mt-6 text-center">
        <h1 className="text-[#8B4513] text-3xl font-bold">Explore Our Tasty Delights</h1>
        <p className="text-[#667653]">Discover freshly made favorites from our dessert collection.</p>
        <p className="text-[#f2a2a2]">A little something sweet for every occasion.</p>
      </div>
      <div className="bg-[#FFF8F0] px-4 py-1 rounded-xl inline-block">
        <h1 className="text-[#8B4513] font-bold text-xl">Cakes</h1> 
      </div>
     <div className="mt-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {cakes.slice(0,4).map((cake) => (
        <CakeCard key={cake.id} cake={cake} showFavorite={false}/>
      ))}
      </div>
      <div className="mt-6 flex justify-center">
        <Link to="/cake" className="group text-[#8B4513] bg-[#FFF8F0]  py-2 px-4 rounded-xl border-2 border-[#8B4513] hover:bg-[#8B4513] hover:text-[#FFF8F0] hover:border-[#FFF8F0]">More Cakes <i className="fa-solid fa-arrow-right text-center transition-transform duration-400 group-hover:translate-x-1"></i></Link>
      </div>
      </div>
     
    </div>
  )
}

export default CakeGrid
