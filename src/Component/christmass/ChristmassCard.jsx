import React from 'react'
import { Link } from 'react-router-dom'

const ChristmassCard = ({item}) => {
  return (
   <Link to="/christmass" className="block">
      <article className="group overflow-hidden rounded-3xl border border-red-200 bg-[#eed1d1] shadow-lg shadow-red-950/10 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-950/20">
      {/* Product image */}
      <div className="relative h-60 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <span className="absolute left-4 top-4 rounded-full bg-red-700 px-4 py-1.5 text-sm font-semibold text-white shadow">
          {item.category}
        </span>

        {!item.inStock && (
          <span className="absolute right-4 top-4 rounded-full bg-gray-900/85 px-3 py-1.5 text-sm font-semibold text-white">
            Sold out
          </span>
        )}

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-12">
          <p className="text-sm font-medium text-white">
            ★ {item.rating} <span className="text-white/80">({item.reviewCount} reviews)</span>
          </p>
        </div>
      </div>

      {/* Product details */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-xl font-bold text-[#5f2b06]">{item.name}</h2>
          <span className="shrink-0 rounded-xl bg-green-100 px-3 py-1.5 font-bold text-green-900">
            ${item.price.toFixed(2)}
          </span>
        </div>

        <p className="mt-2 text-sm leading-6 text-stone-600">
          {item.description}
        </p>

        <div className="mt-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#7f9359]">
            Ingredients
          </h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {item.ingredients.map((ingredient) => (
              <span
                key={ingredient}
                className="rounded-full bg-amber-50 px-3 py-1 text-xs text-amber-900"
              >
                {ingredient}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#7f9359]">
            Allergens
          </h3>
          <p className="mt-1 text-sm text-stone-600">
            {item.allergens.join(", ")}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-red-200 px-3 py-1 text-xs font-medium text-red-800"
            >
              #{tag}
            </span>
          ))}
        </div>

        <button
          type="button"
          disabled={!item.inStock}
          className="mt-5 w-full rounded-xl bg-red-800 px-4 py-3 font-semibold text-white transition hover:bg-red-900 disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          {item.inStock ? "Add to cart" : "Currently unavailable"}
        </button>
      </div>
    </article>  
   </Link>
  )
}

export default ChristmassCard
