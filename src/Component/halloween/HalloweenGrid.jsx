import React from 'react'
import { useState, useContext } from 'react'
import SavedContext from '../../Context/SavedContext'
import HalloweenCard from './HalloweenCard'
import img9 from '../../assets/hero/hallow2.png'
import Halloween from '../../Data/Halloween'

const HalloweenGrid = () => {
  const [selectedItems, setSelectedItems] = useState(null)
  const {addToCart, cartItems, savedItems, toggleSaved} = useContext(SavedContext)

   const isInCart = selectedItems
    ? cartItems.some((cartItem) => cartItem.id === selectedItems.id)
    : false;

    const isSaved = selectedItems
  ? savedItems.some((savedItem) => savedItem.id === selectedItems.id)
  : false;

  return (
    <section className="bg-[#7b694d] pt-4">
    <div className="mx-auto mb-8 max-w-7xl overflow-hidden rounded-3xl border-4 border-orange-200 shadow-lg shadow-orange-950/10">
  <img
    src={img9}
    alt="Halloween treats"
    className="h-48 w-full object-cover sm:h-64 md:h-80"
  />
</div>
<div className="mx-auto flex flex-col h-full w-120 items-center justify-center border border-orange-500 bg-orange-300 text-black rounded-2xl hover:shadow-2xl hover:shadow-black">
  <h1 className="px-4 py-1 text-center text-3xl font-bold">
   TRICK OR TREATS
  </h1>
  <p className="text-orange-500">SPECIAL OFFERS</p>
</div>
         <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 px-5 md:px-20 pb-10 pt-10">
          {Halloween.map((item) => (
            <HalloweenCard key={item.id} item={item} showFavorite={false} onSelect={setSelectedItems}/>
          ))}
        </div>

        {selectedItems && (
  <div
    onClick={() => setSelectedItems(null)}
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
  >
    <article
      onClick={(event) => event.stopPropagation()}
      className="relative grid max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl border-4 border-orange-200 bg-[#eac189] shadow-2xl md:grid-cols-2"
    >
      <button
        type="button"
        onClick={() => setSelectedItems(null)}
        aria-label="Close cake details"
        className="absolute right-4 top-4 z-10 rounded-full bg-white px-3 py-1 text-2xl text-orange-900 shadow"
      >
        ×
      </button>

      <img
        src={selectedItems.image}
        alt={selectedItems.name}
        className="h-72 w-full object-cover md:h-full md:min-h-125"
      />

      <div className="p-6 sm:p-8">
        <p className="text-sm text-orange-900">
          ★ {selectedItems.rating} ({selectedItems.reviewCount} reviews)
        </p>

        <h2 className="mt-3 text-3xl font-bold text-[#713b16]">
          {selectedItems.name}
        </h2>

        <p className="mt-3 text-2xl font-bold text-orange-900">
          ${selectedItems.price.toFixed(2)}
        </p>

        <p className="mt-5 leading-7 text-stone-700">
          {selectedItems.description}
        </p>

        <h3 className="mt-6 font-bold uppercase text-orange-900">
          Ingredients
        </h3>
        <div className="mt-2 flex flex-wrap gap-2">
          {selectedItems.ingredients.map((ingredient) => (
            <span
              key={ingredient}
              className="rounded-full bg-orange-50 px-3 py-1 text-sm"
            >
              {ingredient}
            </span>
          ))}
        </div>

        <h3 className="mt-6 font-bold uppercase text-orange-900">
          Allergens
        </h3>
        <p className="mt-2 text-stone-700">
          {selectedItems.allergens.join(", ")}
        </p>

        {/* <button
          type="button"
          disabled={!selectedItems.inStock}
          onClick={() => addToCart(selectedItems)}
          className="mt-8 w-full rounded-xl bg-orange-700 px-5 py-4 font-semibold text-white hover:bg-orange-800 disabled:bg-gray-400"
        >
          {selectedItems.inStock ? "Add to cart" : "Sold out"}
        </button> */}
<button
  type="button"
  aria-pressed={isSaved}
  onClick={() => toggleSaved(selectedItems)}
  className="mt-4 w-full rounded-xl border-2 border-orange-700 px-5 py-3 font-semibold text-orange-900 hover:bg-orange-100"
>
  {isSaved ? "Saved ♥" : "♡ Save to favorites"}
</button> 
          <button
          type="button"
           onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          addToCart(selectedItems);
        }}
          className={`mt-5 w-full rounded-xl  px-4 py-3 font-semibold text-white transition  disabled:cursor-not-allowed disabled:bg-gray-400 ${isInCart ? "bg-black " : "bg-orange-700 hover:bg-orange-800"}`}
        >
          {isInCart ? "Added 😋" : "Add to cart"}
        </button>

      </div>
    </article>
  </div>
)}
    </section>
  )
}

export default HalloweenGrid
