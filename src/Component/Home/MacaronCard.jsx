import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import SavedContext from '../../Context/SavedContext'

const MacaronCard = ({cake, showFavorite = true}) => {
  const {savedItems, toggleSaved, addToCart, cartItems } = useContext(SavedContext);

  const isSaved = savedItems.some((savedItems) => savedItems.id === cake.id);

  const isInCart = cartItems.find((cartItem) => cartItem.id === cake.id)
  return (
    <Link to="/macarons" className="block">
    <div className="overflow-hidden rounded-2xl bg-white shadow-md transition-shadow duration-300 hover:shadow-xl">
         <div className="relative h-56 overflow-hidden">
        <img src={cake.image} className="h-full w-full object-cover transition-transform duration-500 hover:scale-110" alt={cake.name}/>
        {showFavorite && (
        <button type="button"
         onClick={() => toggleSaved(cake)} 
         aria-label={isSaved ? "Remove from saved items" : "saved items"}
         className="absolute right-3 top-3 grid ">
          <i className={`fa-heart text-lg ${isSaved ? "fa-solid text-[#efa2a2]" : "fa-regular text-[#efa2a2]"}`}></i></button>
        )}
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
        <button
        type="button"
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          addToCart(cake);
        }}
        className={`rounded-lg px-4 py-2 text-sm font-semibold text-amber-50 transition-colors ${
          isInCart
            ? "bg-[#7f9359] hover:bg-[#687b46]"
            : "bg-[#a15c2b] hover:bg-[#8b4f25]"
        }`}
      >
        {isInCart ? "Added 😋" : "Add to Cart"}
</button>
      </div>
      </div>
      </Link>
  )
}

export default MacaronCard
