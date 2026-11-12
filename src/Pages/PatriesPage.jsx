import React from 'react'
import PastryData from '../Data/pastries'
import PastriesCard from '../Component/Home/PastriesCard'

const PatriesPage = () => {
  return (
     <div className="mt-8 px-10 mb-10">
       <h1 className="text-center text-[#8B4513] font-bold text-3xl ">Pastries</h1>
      <div className=" mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {PastryData.map((cake) => (
        <PastriesCard key={cake.id} cake={cake}/>
      ))}
      </div>
    </div>
  )
}

export default PatriesPage
