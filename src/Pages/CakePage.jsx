import React from 'react'
import { useState, useContext } from 'react'
import SavedContext from '../Context/SavedContext'
import CakeCard from '../Component/Home/CakeCard'
import cakes from '../Data/cakePage'

const CakePage = () => {
  const [selectedCake, setSelectedCake] = useState(null)
  const {savedItems, addToCart, cartItems, toggleSaved} = useContext(SavedContext)

  const isSaved = selectedCake ? savedItems.some((item) => item.id === selectedCake.id) : false;

  const isInCart = selectedCake ? cartItems.some((item) => item.id === selectedCake.id) : false;

  return (
    <div className="mt-8 px-10 mb-10">
      <h1 className="text-center text-[#8B4513] font-bold text-3xl ">CAKES</h1>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {cakes.map((cake) => (
        <CakeCard key={cake.id} cake={cake} onSelect={setSelectedCake}/>
      ))}
      </div>

      {selectedCake && (
        <div
          onClick={() => setSelectedCake(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
        >
          <article
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedCake.name} details`}
            onClick={(event) => event.stopPropagation()}
            className="relative grid h-[calc(100vh-2rem)] max-h-225 w-full max-w-5xl grid-rows-[auto_1fr] overflow-hidden rounded-3xl bg-white shadow-2xl md:grid-cols-2 md:grid-rows-1"
          >
            <button
              type="button"
              onClick={() => setSelectedCake(null)}
              aria-label="Close cake details"
              className="absolute right-4 top-4 z-10 rounded-full bg-white px-3 py-1 text-2xl text-[#8B4513] shadow"
            >
              ×
            </button>

            <img
              src={selectedCake.image}
              alt={selectedCake.name}
              className="h-72 w-full object-cover md:h-full"
            />

          <div className="p-4 sm:p-8">
  <p className="text-sm font-medium text-amber-900">
    {selectedCake.category}
  </p>

  <h2 className="md:mt-3 text-xl md:font-3xl font-bold text-[#8B4513]">
    {selectedCake.name}
  </h2>

  <p className="mt-1 md:mt-3 text-sm text-gray-600">
    ★ {selectedCake.rating} ({selectedCake.reviewCount} reviews)
  </p>

  <p className="mt-1 md:mt-4 text-xl md:text-2xl font-bold text-[#8B4513]">
    ${selectedCake.price}
  </p>

  <p className="md:mt-4 leading-7 text-[#667653]">
    {selectedCake.description}
  </p>

  <h3 className="md:mt-5 text-sm font-bold uppercase text-[#8B4513]">
    Available sizes
  </h3>
  <div className="mt-1 md:mt-2 flex flex-wrap gap-2">
    {selectedCake.sizes.map((size) => (
      <span key={size} className="rounded-full bg-orange-100 px-3 py-1 text-sm">
        {size}
      </span>
    ))}
  </div>

  <h3 className="mt-1 md:mt-5 text-sm font-bold uppercase text-[#8B4513]">
    Ingredients
  </h3>
  <div className="md:mt-2 flex flex-wrap gap-2">
    {selectedCake.ingredients.map((ingredient) => (
      <span key={ingredient} className="rounded-full bg-orange-50 px-3 py-1 text-sm">
        {ingredient}
      </span>
    ))}
  </div>

  <h3 className="md:mt-5 text-sm font-bold uppercase text-[#8B4513]">
    Allergens
  </h3>
  <p className="mt-2 text-sm text-gray-700">
    {selectedCake.allergens.join(", ")}
  </p>

  <div className="mt-4 flex flex-wrap gap-2">
    {selectedCake.tags.map((tag) => (
      <span key={tag} className="rounded-full border border-orange-200 px-3 py-1 text-xs">
        #{tag}
      </span>
    ))}
  </div>

  <p className={`mt-4 hidden md:flex text-sm font-semibold ${selectedCake.inStock ? "text-green-700" : "text-red-700"}`}>
    {selectedCake.inStock ? "In stock" : "Sold out"}
  </p>
<div className="flex flex-row gap-4 md:flex-col">
  <button
    type="button"
    onClick={() => toggleSaved(selectedCake)}
    className="mt-1 md:mt-5 w-full rounded-lg border-2 border-[#a15c2b] px-4 py-3 font-semibold text-[#8B4513] hover:bg-orange-50"
  >
    {isSaved ? "♥ Saved" : "♡ Save this cake"}
  </button>

  <button
    type="button"
    disabled={!selectedCake.inStock || isInCart}
    onClick={() => addToCart(selectedCake)}
    className="mt-1 md:mt-3 w-full rounded-lg bg-[#a15c2b] px-4 py-3 font-semibold text-amber-50 hover:bg-[#8b4f25] disabled:cursor-not-allowed disabled:bg-[#7f9359]"
  >
    {!selectedCake.inStock
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

export default CakePage
