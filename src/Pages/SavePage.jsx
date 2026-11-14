import React from 'react'
import { useContext } from 'react'
import SavedContext from '../Context/SavedContext'
import SaveCard from '../Component/save/SaveCard'


const SavePage = () => {
  const {savedItems} = useContext(SavedContext)
  
  return (
    <div className="bg-amber-900 p-10 min-h-screen">
      <div className="flex flex-col items-center justify-center ">
        <h1 className="text-amber-50 text-3xl font-bold"> My Favorites </h1>
        <p className="text-[#A7B48F] mt-2">Your favorite sweets, all in one place.</p>
      </div>

      {savedItems.length === 0 ? (
        <div className="flex items-center justify-center min-h-[60vh]">
          <p className="text-amber-50 text-center text-xl">  You haven’t saved any treats yet.</p>
          </div>
      ) : (
           <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 lg:grid-cols-4">
          {savedItems.map((item) => (
            <SaveCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>       
  )
}

export default SavePage
