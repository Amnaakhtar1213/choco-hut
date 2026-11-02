import React from 'react'

const TreatCard = ({item}) => {
  return (
     <div className="mt-2 flex h-full w-90 items-center justify-center overflow-hidden rounded-xl border-4 border-[#FDF4EA] bg-white shadow-xl shadow-[#5f2b06] transition-transform duration-300 hover:scale-105">
     <video src={item.video} autoPlay muted loop playsInline alt={item.name} className="w-full h-full object-cover rounded-xl" />
    </div>
   
    
  )
}

export default TreatCard
