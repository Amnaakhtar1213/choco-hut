import React from 'react'
import SaveCard from '../Component/save/SaveCard'
import { Link } from 'react-router-dom'

const SavePage = () => {
  return (
    <Link to="/save" className="block">
      <div className="bg-[#8B4513]">
         <div className="flex flex-col items-center justify-center ">
        <h1 className="text-[#A7B48F] font-bold text-3xl mt-4">MY FAVORITES</h1>
        <p className="text-[#A7B48F] mt-2">Your favorite sweets, all in one place.</p>
      </div>
      <div>
        <SaveCard />
      </div>
      </div>
    </Link>
  )
}

export default SavePage
