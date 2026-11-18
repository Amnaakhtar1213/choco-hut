import React from 'react'
import { useContext, useState } from 'react'
import SavedContext from '../Context/SavedContext'
import macarons from '../Data/Macarons'
import MacaronCard from '../Component/Home/MacaronCard'

const MacaronsPage = () => {
  const [selectedMacarons, setSelectedMacarons] = useState(null)
  const {toggleSaved, addToCart, cartItems, savedItems} = useContext(SavedContext)

  const isSaved = selectedMacarons
  ? savedItems.some((item) => item.id === selectedMacarons.id)
  : false;

  const isInCart = selectedMacarons ? cartItems.some((item) => item.id === selectedMacarons.id) : false;

  return (
    <div className="mt-8 mb-10 px-10">
      <h1 className="text-center text-[#8B4513] font-bold text-3xl ">Macarons </h1>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {macarons.map((cake) => (
       <MacaronCard key={cake.id} cake={cake} onSelect={setSelectedMacarons}/>
         ))}
         </div>

         {selectedMacarons && (
  <div
    onClick={() => setSelectedMacarons(null)}
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
  >
    <article
      role="dialog"
      aria-modal="true"
      aria-label={`${selectedMacarons.name} details`}
      onClick={(event) => event.stopPropagation()}
      className="relative grid h-[calc(80vh-2rem)] max-h-225 w-full max-w-5xl grid-rows-[auto_1fr] overflow-hidden rounded-3xl bg-white shadow-2xl md:grid-cols-2 md:grid-rows-1"
    >
      <button
        type="button"
        onClick={() => setSelectedMacarons(null)}
        aria-label="Close macaron details"
        className="absolute right-4 top-4 z-10 rounded-full bg-white px-3 py-1 text-2xl text-[#8B4513] shadow"
      >
        ×
      </button>

      <img
        src={selectedMacarons.image}
        alt={selectedMacarons.name}
        className="h-72 w-full bg-[#fbf7f0] object-contain p-3 md:h-full"
      />

      <div className="hide-scrollbar min-h-0 overflow-y-auto p-5 sm:p-6">
        <p className="text-sm text-amber-900">{selectedMacarons.category}</p>
        <h2 className="mt-2 text-3xl font-bold text-[#8B4513]">
          {selectedMacarons.name}
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          ★ {selectedMacarons.rating} ({selectedMacarons.reviewCount} reviews)
        </p>
        <p className="mt-3 text-2xl font-bold text-[#8B4513]">
          ${selectedMacarons.price.toFixed(2)}
        </p>
        <p className="mt-3 leading-6 text-[#667653]">
          {selectedMacarons.description}
        </p>

        <h3 className="mt-4 font-bold uppercase text-[#8B4513]">Ingredients</h3>
        <div className="mt-2 flex flex-wrap gap-2">
          {selectedMacarons.ingredients.map((ingredient) => (
            <span key={ingredient} className="rounded-full bg-orange-100 px-3 py-1 text-sm">
              {ingredient}
            </span>
          ))}
        </div>

        <h3 className="mt-4 font-bold uppercase text-[#8B4513]">Allergens</h3>
        <p className="mt-1 text-sm text-gray-700">
          {selectedMacarons.allergens.join(", ")}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {selectedMacarons.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-orange-200 px-3 py-1 text-xs">
              #{tag}
            </span>
          ))}
        </div>

        <p className={`mt-3 text-sm font-semibold ${selectedMacarons.inStock ? "text-green-700" : "text-red-700"}`}>
          {selectedMacarons.inStock ? "In stock" : "Sold out"}
        </p>

        <div className="sticky bottom-0 mt-3 bg-white pb-1 pt-2">
          <button
            type="button"
            onClick={() => toggleSaved(selectedMacarons)}
            className="w-full rounded-lg border-2 border-[#a15c2b] px-4 py-3 font-semibold text-[#8B4513]"
          >
            {isSaved ? "♥ Saved" : "♡ Save this macaron"}
          </button>

          <button
            type="button"
            disabled={!selectedMacarons.inStock || isInCart}
            onClick={() => addToCart(selectedMacarons)}
            className="mt-2 w-full rounded-lg bg-[#a15c2b] px-4 py-3 font-semibold text-amber-50 disabled:bg-[#7f9359]"
          >
            {!selectedMacarons.inStock
              ? "Sold out"
              : isInCart
                ? "Added 😋"
                : "Add to cart"}
          </button>
        </div>
      </div>
    </article>
  </div>
)}

         </div>
     )
}

export default MacaronsPage
