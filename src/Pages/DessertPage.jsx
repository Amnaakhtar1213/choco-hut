import React from 'react'
import { useState, useContext } from 'react'
import SavedContext from '../Context/SavedContext'
import desserts from '../Data/desserts'
import DessertCard from '../Component/Home/DessertCard'

const DessertPage = () => {
  const [selectedDessert, setSelectedDessert] = useState(null)
  const {toggleSaved, addToCart, cartItems, savedItems} = useContext(SavedContext);

  const isSaved = selectedDessert ? savedItems.some((item) => item.id === selectedDessert.id) : false;

  const isInCart = selectedDessert
  ? cartItems.some((item) => item.id === selectedDessert.id)
  : false;

  return (
    <div className="px-10 mt-8 mb-10">
       <h1 className="text-center text-[#8B4513] font-bold text-3xl ">Coffee, Fudges, Tiramisu & Brownies</h1>
      <div className=" mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {desserts.map((cake) => (
           <DessertCard key={cake.id} cake={cake} onSelect={setSelectedDessert} />
         ))}
         </div>
         {selectedDessert && (
  <div
    onClick={() => setSelectedDessert(null)}
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
  >
    <article
      role="dialog"
      aria-modal="true"
      aria-label={`${selectedDessert.name} details`}
      onClick={(event) => event.stopPropagation()}
      className="relative grid h-[calc(80vh-2rem)] max-h-225 w-full max-w-5xl grid-rows-[auto_1fr] overflow-hidden rounded-3xl bg-white shadow-2xl md:grid-cols-2 md:grid-rows-1"
    >
      <button
        type="button"
        onClick={() => setSelectedDessert(null)}
        aria-label="Close dessert details"
        className="absolute right-4 top-4 z-10 rounded-full bg-white px-3 py-1 text-2xl text-[#8B4513] shadow"
      >
        ×
      </button>

      <img
        src={selectedDessert.image}
        alt={selectedDessert.name}
        className="h-72 w-full bg-[#fbf7f0] object-contain rounded-2xl p-3 md:h-full"
      />

      <div className="hide-scrollbar min-h-0 overflow-y-auto p-5 sm:p-6">
        <p className="text-sm font-medium text-amber-900">
          {selectedDessert.category}
        </p>

        <h2 className="mt-2 text-3xl font-bold text-[#8B4513]">
          {selectedDessert.name}
        </h2>

        <p className="mt-2 text-sm text-gray-600">
          ★ {selectedDessert.rating} ({selectedDessert.reviewCount} reviews)
        </p>

        <p className="mt-3 text-2xl font-bold text-[#8B4513]">
          ${selectedDessert.price.toFixed(2)}
        </p>

        <p className="mt-3 leading-6 text-[#667653]">
          {selectedDessert.description}
        </p>

        <h3 className="mt-4 text-sm font-bold uppercase text-[#8B4513]">
          Ingredients
        </h3>
        <div className="mt-2 flex flex-wrap gap-2">
          {selectedDessert.ingredients.map((ingredient) => (
            <span
              key={ingredient}
              className="rounded-full bg-orange-50 px-3 py-1 text-sm"
            >
              {ingredient}
            </span>
          ))}
        </div>

        <h3 className="mt-4 text-sm font-bold uppercase text-[#8B4513]">
          Allergens
        </h3>
        <p className="mt-1 text-sm text-gray-700">
          {selectedDessert.allergens.join(", ")}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {selectedDessert.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-orange-200 px-3 py-1 text-xs"
            >
              #{tag}
            </span>
          ))}
        </div>

        <p
          className={`mt-3 text-sm font-semibold ${
            selectedDessert.inStock ? "text-green-700" : "text-red-700"
          }`}
        >
          {selectedDessert.inStock ? "In stock" : "Sold out"}
        </p>

        <div className="sticky bottom-0 mt-3 bg-white pb-1 pt-2">
          <button
            type="button"
            onClick={() => toggleSaved(selectedDessert)}
            className="w-full rounded-lg border-2 border-[#a15c2b] px-4 py-3 font-semibold text-[#8B4513] hover:bg-orange-50"
          >
            {isSaved ? "♥ Saved" : "♡ Save this dessert"}
          </button>

          <button
            type="button"
            disabled={!selectedDessert.inStock || isInCart}
            onClick={() => addToCart(selectedDessert)}
            className="mt-2 w-full rounded-lg bg-[#a15c2b] px-4 py-3 font-semibold text-amber-50 hover:bg-[#8b4f25] disabled:bg-[#7f9359]"
          >
            {!selectedDessert.inStock
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

export default DessertPage
