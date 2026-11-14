import React from 'react'
import cookies from '../../Data/cookiesData'
import CookiesCard from './CookiesCard'
import { Link } from 'react-router-dom'

const CookiesGrid = () => {
  return (
   <div className=" overflow-hidden mb-10">
      <div className="relative z-10 px-10">
      <div className="bg-[#FFF8F0] px-4 py-1 rounded-xl inline-block">
        <h1 className="text-[#8B4513] font-bold text-xl">Cookies</h1> 
      </div>
     <div className="mt-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {cookies.slice(0,4).map((cake) => (
        <CookiesCard key={cake.id} cake={cake} showFavorite={false}/>
      ))}
      </div>
      <div className="mt-6 flex justify-center">
        <Link to="/cookies" className="group text-[#8B4513] bg-[#FFF8F0]  py-2 px-4 rounded-xl border-2 border-[#8B4513] hover:bg-[#8B4513] hover:text-[#FFF8F0] hover:border-[#FFF8F0]">More Cookies <i className="fa-solid fa-arrow-right text-center transition-transform duration-300 group-hover:translate-x-1"></i></Link>
      </div>
      </div>
     
    </div>
  )
}

export default CookiesGrid
