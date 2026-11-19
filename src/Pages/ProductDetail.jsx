import React from 'react'
import { useLocation, Link } from 'react-router-dom';
import { useContext } from 'react';
import SavedContext from '../Context/SavedContext';

const ProductDetail = () => {
  const { state } = useLocation();
  const { cartItems, addToCart } = useContext(SavedContext);
  const item = state?.item;

  if (!item) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#7b694d] px-4">
        <section className="rounded-3xl bg-[#eac189] p-8 text-center shadow-xl">
          <p className="text-lg text-[#713b16]">
            Choose a treat to see its details.
          </p>
          <Link
            to="/halloween"
            className="mt-4 inline-block font-semibold text-orange-800 underline"
          >
            Back to treats
          </Link>
        </section>
      </main>
    );
  }

  const isInCart = cartItems.some((cartItem) => cartItem.id === item.id);

  return (
    <div>
      <main className="min-h-screen bg-[#7b694d] px-4 py-8 sm:px-8 sm:py-12">
      <article className="mx-auto grid h-[calc(100vh-4rem)] max-h-225 w-full max-w-7xl grid-rows-[minmax(180px,32vh)_1fr] overflow-hidden rounded-3xl border-4 border-orange-200 bg-[#eac189] shadow-2xl md:min-h-162 md:grid-cols-2 md:grid-rows-1">
        {/* Large cake image */}
        <div className="relative min-h-80 md:min-h-full">
          <img
            src={item.image}
            alt={item.name}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <span className="absolute left-5 top-5 rounded-full bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow">
            {item.category}
          </span>

          {!item.inStock && (
            <span className="absolute right-5 top-5 rounded-full bg-stone-900/85 px-4 py-2 text-sm font-semibold text-white">
              Sold out
            </span>
          )}
        </div>

        {/* Cake information */}
        <section className="flex flex-col p-6 sm:p-8 md:p-10">
          <Link
            to="/halloween"
            className="w-fit font-medium text-orange-900 underline underline-offset-4"
          >
            ← Back to treats
          </Link>

          <p className="mt-7 text-sm font-semibold text-orange-900">
            ★ {item.rating}{" "}
            <span className="font-normal text-stone-700">
              ({item.reviewCount} reviews)
            </span>
          </p>

          <h1 className="mt-3 text-3xl font-bold text-[#713b16] sm:text-4xl">
            {item.name}
          </h1>

          <p className="mt-4 text-3xl font-bold text-orange-900">
            ${item.price.toFixed(2)}
          </p>

          <p className="mt-5 leading-7 text-stone-700">
            {item.description}
          </p>

          <div className="mt-7">
            <h2 className="text-sm font-bold uppercase tracking-wider text-orange-900">
              Ingredients
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {item.ingredients.map((ingredient) => (
                <span
                  key={ingredient}
                  className="rounded-full bg-orange-50 px-3 py-1.5 text-sm text-orange-950"
                >
                  {ingredient}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-orange-900">
              Allergens
            </h2>
            <p className="mt-2 text-stone-700">
              {item.allergens.join(", ")}
            </p>
          </div>

          <div className="mt-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-orange-900">
              Tags
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-orange-300 px-3 py-1.5 text-sm font-medium text-orange-950"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

<div className="sticky bottom-0 mt-4 bg-[#eac189] pb-2 pt-3">
          <button
            type="button"
            disabled={!item.inStock || isInCart}
            onClick={() => addToCart(item)}
            className="mt-auto w-full rounded-xl bg-orange-700 px-5 py-4 font-semibold text-white transition hover:bg-orange-800 disabled:cursor-not-allowed disabled:bg-stone-500 md:mt-8"
          >
            {!item.inStock
              ? "Sold out"
              : isInCart
                ? "Added to cart 😋"
                : "Add to cart"}
          </button>
          </div>
        </section>
      </article>
    </main>
    </div>
  )
}

export default ProductDetail
