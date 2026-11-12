import React from 'react'
import img6 from "../../assets/Features/bg2.jpg"
import TreatCard from '../Home/TreatCard'
import treatsMotionData from '../../Data/TreatData'

const Treats = () => {
  return (
    
       <div className="relative w-full min-h-screen overflow-hidden pb-60 flex items-center justify-center">
      <img src={img6} className="absolute inset-0 w-full h-full  object-cover blur-md scale-110"/>
        <div className="absolute top-10 flex flex-col w-full text-white px-6">
          <h1 className="text-4xl text-[#8B4513] text-center">Treats in Motion <i className="fa-solid fa-face-smile text-[#f69e9e]"></i></h1>
        <p className=" text-lg mt-2 text-[#839b56] text-center">Watch our favorite treats come to life, from rich chocolate drizzles to every delicious detail.</p>
       </div> 
       <div className="relative top-50  md:top-35 grid w-full grid-cols-1 items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-8 px-10 md:px-30  ">
         {treatsMotionData.map((item) => (
           <TreatCard key={item.id} item={item} />
         ))}
       </div>
      </div> 
    
  )
}

export default Treats
