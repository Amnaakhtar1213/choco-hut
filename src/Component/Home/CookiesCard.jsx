import React from 'react'
import { Link } from 'react-router-dom'

const CookiesCard = ({cake}) => {
  return (
    <Link to="/cookies" className="block">
   <div className="overflow-hidden rounded-2xl bg-white shadow-md transition-shadow duration-300 hover:shadow-xl">
         <div className="relative h-56 overflow-hidden">
        <img src={cake.image} className="h-full w-full object-cover transition-transform duration-500 hover:scale-110" alt={cake.name}/>
        <button className="absolute right-3 top-3 grid "><i className="fa-solid fa-heart text-lg text-[#efa2a2]"></i></button>
      </div>
      <div className="p-4">
        <p className="text-sm font-medium text-amber-900">{cake.category}</p>
        <h1 className="text-lg font-bold text-[#8B4513]">{cake.name}</h1>
        <p className="mt-2  text-sm text-[#667653]">{cake.description}</p>
      </div>
      <div className="mt-3 flex items-center gap-2 text-sm px-3">
        <span><i className="text-amber-300 fa-solid fa-star"></i></span>
        <span className="text-gray-500">{cake.rating}</span>
        <span className="text-gray-700">({cake.reviewCount} reviews)</span>
      </div>
      <div className="mt-2 mb-2 flex justify-between items-center gap-3 px-10">
        <span className="text-lg font-bold">${cake.price}</span>
        <button className="rounded-lg bg-[#a15c2b] text-amber-50 py-2 px-4 text-sm font-semibold transition-colors hover:bg-[#8b4f25]">Add to Cart</button>
      </div>
      </div>
      </Link>
  )
}

export default CookiesCard
