import React from 'react'
import macarons from '../Data/Macarons'
import MacaronCard from '../Component/Home/MacaronCard'

const MacaronsPage = () => {
  return (
    <div className="mt-8 mb-10 px-10">
      <h1 className="text-center text-[#8B4513] font-bold text-3xl ">Macarons </h1>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {macarons.map((cake) => (
       <MacaronCard key={cake.id} cake={cake}/>
         ))}
         </div>
         </div>
     )
}

export default MacaronsPage
