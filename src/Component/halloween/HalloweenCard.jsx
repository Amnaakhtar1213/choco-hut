import React from 'react'
import { Link } from 'react-router-dom'

const HalloweenCard = ({item}) => {
  return (
    <Link to="/halloween"  className="block">
     <article className="group overflow-hidden rounded-3xl border border-orange-200 bg-[#eac189] shadow-lg shadow-orange-950/10 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-950/20">
      <div className="relative h-60 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <span className="absolute left-4 top-4 rounded-full bg-orange-600 px-4 py-1.5 text-sm font-semibold text-white shadow">
          {item.category}
        </span>

        {!item.inStock && (
          <span className="absolute right-4 top-4 rounded-full bg-stone-900/85 px-3 py-1.5 text-sm font-semibold text-white">
            Sold out
          </span>
        )}

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-950/75 to-transparent p-4 pt-12">
          <p className="text-sm font-medium text-white">
            ★ {item.rating}{" "}
            <span className="text-white/80">({item.reviewCount} reviews)</span>
          </p>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-xl font-bold text-[#713b16]">{item.name}</h2>
          <span className="shrink-0 rounded-xl bg-orange-100 px-3 py-1.5 font-bold text-orange-900">
            ${item.price.toFixed(2)}
          </span>
        </div>

        <p className="mt-2 text-sm leading-6 text-stone-600">
          {item.description}
        </p>

        <div className="mt-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-orange-800">
            Ingredients
          </h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {item.ingredients.map((ingredient) => (
              <span
                key={ingredient}
                className="rounded-full bg-orange-50 px-3 py-1 text-xs text-orange-950"
              >
                {ingredient}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-orange-800">
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
              className="rounded-full border border-orange-200 px-3 py-1 text-xs font-medium text-orange-900"
            >
              #{tag}
            </span>
          ))}
        </div>

        <button
          type="button"
          disabled={!item.inStock}
          className="mt-5 w-full rounded-xl bg-orange-700 px-4 py-3 font-semibold text-white transition hover:bg-orange-800 disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          {item.inStock ? "Add to cart" : "Currently unavailable"}
        </button>
      </div>
    </article>
    </Link>
  )
}

export default HalloweenCard
