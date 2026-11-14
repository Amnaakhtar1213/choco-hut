import React from 'react'

const CartCard = ({item}) => {
    const quantity = item.quantity ?? 1;
    const lineTotal = Number(item.price) * quantity
  
  return (
     <article className="flex flex-col gap-4 rounded-2xl border border-[#eadbc9] bg-white p-4 shadow-sm sm:flex-row sm:items-center">
      <img
        src={item.image}
        alt={item.name}
        className="h-40 w-full rounded-xl object-cover sm:h-24 sm:w-24"
      />

      <div className="min-w-0 flex-1">
        <p className="text-sm text-[#7f9359]">{item.category}</p>
        <h2 className="text-lg font-bold text-[#5f2b06]">{item.name}</h2>
        <p className="mt-1 text-sm text-stone-600">
          ${Number(item.price).toFixed(2)} each
        </p>
      </div>

      <div className="flex items-center justify-between gap-4 sm:justify-center">
        <div className="flex items-center gap-3 rounded-xl border border-[#eadbc9] px-3 py-2">
          <button type="button" aria-label="Decrease quantity">−</button>
          <span>{quantity}</span>
          <button type="button" aria-label="Increase quantity">+</button>
        </div>

        <p className="font-bold text-[#5f2b06]">
          ${lineTotal.toFixed(2)}
        </p>
      </div>

      <button
        type="button"
        className="text-sm font-semibold text-red-700 hover:text-red-900 sm:ml-2"
      >
        Remove
      </button>
    </article>
  )
}

export default CartCard
