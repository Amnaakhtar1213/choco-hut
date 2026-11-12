import React from 'react'
import cupcakes from '../Data/cupcakeData'
import CupcakeCard from '../Component/Home/CupcakeCard'

const CupcakePage = () => {
  return (
    <div className="px-10 mt-8 mb-10">
       <h1 className="text-center text-[#8B4513] font-bold text-3xl ">CupCakes</h1>
 <div className=" mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {cupcakes.map((cake) => (
        <CupcakeCard key={cake.id} cake={cake}/>
      ))}
      </div>
    </div>
  )
}

export default CupcakePage
