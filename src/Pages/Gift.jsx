import React from 'react'
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import gifts from '../Data/gift';
import SavedContext from "../Context/SavedContext";

const Gift = () => {
  const [selectedGift, setSelectedGift] = useState(null);
  const { user, savedItems, cartItems, toggleSaved, addToCart } =
    useContext(SavedContext);

  const isSaved = selectedGift
    ? savedItems.some((item) => item.id === selectedGift.id)
    : false;

  const isInCart = selectedGift
    ? cartItems.some((item) => item.id === selectedGift.id)
    : false;

  return (
    <div>
      <main className="bg-[#fbf7f0] text-[#38251b]">
      {/* Hero */}
      <section className="relative flex min-h-110 items-center overflow-hidden">
        <img
          src={gifts[0].image}
          alt="A sweet gift from Choco-Hut"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#2d1b13]/60" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#ead7b7]">
            Sweet gifts, made with love
          </p>
          <h1 className="mt-4 font-serif text-5xl text-white md:text-7xl">
            A little sweetness, beautifully gifted.
          </h1>
          <p className="mx-auto mt-5 max-w-xl leading-7 text-white/90">
            Send a thoughtful box of Choco-Hut treats for birthdays, thank-yous,
            and all the moments worth celebrating.
          </p>
          <a
            href="#gift-boxes"
            className="mt-8 inline-block rounded-full bg-[#eac189] px-7 py-3 font-semibold text-[#5f2b06] transition hover:bg-white"
          >
            Explore gift boxes
          </a>
        </div>
      </section>

      {/* Gift occasions */}
      <section className="mx-auto grid max-w-6xl gap-4 px-6 py-12 sm:grid-cols-3">
        {[
          ["🎂", "Birthdays", "Make their day a little sweeter."],
          ["♡", "Thank you", "A lovely way to show you care."],
          ["✦", "Just because", "A surprise for an ordinary day."],
        ].map(([icon, title, description]) => (
          <div
            key={title}
            className="rounded-2xl border border-[#eadbc9] bg-white p-6 text-center shadow-sm"
          >
            <span className="text-3xl text-[#9b754c]">{icon}</span>
            <h2 className="mt-3 font-serif text-2xl text-[#5f2b06]">{title}</h2>
            <p className="mt-2 text-sm text-[#6e5c50]">{description}</p>
          </div>
        ))}
      </section>

      {/* Gift cards */}
      <section id="gift-boxes" className="mx-auto max-w-7xl px-6 pb-16">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9b754c]">
            Find their favorite
          </p>
          <h2 className="mt-2 font-serif text-4xl text-[#5f2b06]">
            Gifts for every sweet moment
          </h2>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {gifts.map((gift) => {
            const cardIsSaved = savedItems.some(
              (item) => item.id === gift.id
            );

            return (
              <article
                key={gift.id}
                role="button"
                tabIndex={0}
                onClick={() => setSelectedGift(gift)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    setSelectedGift(gift);
                  }
                }}
                className="group cursor-pointer overflow-hidden rounded-3xl border border-[#eadbc9] bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={gift.image}
                    alt={gift.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-[#9b754c] px-3 py-1 text-xs font-semibold text-white">
                    {gift.category}
                  </span>

                  <button
                    type="button"
                    aria-label={cardIsSaved ? "Remove saved gift" : "Save gift"}
                    onClick={(event) => {
                      event.stopPropagation();
                      toggleSaved(gift);
                    }}
                    className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-2 text-lg text-[#a15c2b]"
                  >
                    {cardIsSaved ? "♥" : "♡"}
                  </button>
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-bold text-[#5f2b06]">
                    {gift.name}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#6e5c50]">
                    {gift.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-[#8b6b4b]">
                      ★ {gift.rating} ({gift.reviewCount})
                    </span>
                    <span className="font-bold text-[#5f2b06]">
                      ${gift.price.toFixed(2)}
                    </span>
                  </div>
                  <p className="mt-3 text-sm font-semibold text-[#9b754c]">
                    View gift details →
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Video feature */}
      <section className="bg-[#efe5d8] px-6 py-14">
        <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-2">
          <video
            controls
            preload="metadata"
            poster={gifts[1].image}
            className="aspect-video w-full rounded-3xl bg-[#5f2b06] object-cover shadow-lg"
          >
            <source src="/videos/gift-packing.mp4" type="video/mp4" />
            Your browser does not support video.
          </video>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9b754c]">
              Packed with care
            </p>
            <h2 className="mt-3 font-serif text-4xl text-[#5f2b06]">
              A little extra love in every box.
            </h2>
            <p className="mt-4 leading-7 text-[#6e5c50]">
              Each gift is prepared with care and ready to make someone’s day.
              Choose a box and add a personal note when you get in touch.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-block rounded-full bg-[#5f2b06] px-6 py-3 font-semibold text-white hover:bg-[#7a4216]"
            >
              Ask about a custom gift
            </Link>
          </div>
        </div>
      </section>

      {/* Gift details pop-up */}
      {selectedGift && (
        <div
          onClick={() => setSelectedGift(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
        >
          <article
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedGift.name} details`}
            onClick={(event) => event.stopPropagation()}
            className="relative grid h-[calc(100dvh-2rem)] max-h-212.5 w-full max-w-5xl grid-rows-[180px_minmax(0,1fr)] overflow-hidden rounded-3xl bg-white shadow-2xl md:grid-cols-2 md:grid-rows-1"
          >
            <button
              type="button"
              onClick={() => setSelectedGift(null)}
              aria-label="Close gift details"
              className="absolute right-4 top-4 z-10 rounded-full bg-white px-3 py-1 text-2xl text-[#5f2b06] shadow"
            >
              ×
            </button>

            <img
              src={selectedGift.image}
              alt={selectedGift.name}
              className="h-full w-full bg-[#fbf7f0] object-contain p-3"
            />

            <div className="hide-scrollbar min-h-0 overflow-y-auto p-5 sm:p-6">
              <p className="text-sm font-medium text-[#9b754c]">
                {selectedGift.category}
              </p>
              <h2 className="mt-2 text-3xl font-bold text-[#5f2b06]">
                {selectedGift.name}
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                ★ {selectedGift.rating} ({selectedGift.reviewCount} reviews)
              </p>
              <p className="mt-3 text-2xl font-bold text-[#5f2b06]">
                ${selectedGift.price.toFixed(2)}
              </p>
              <p className="mt-3 leading-6 text-[#6e5c50]">
                {selectedGift.description}
              </p>

              <h3 className="mt-5 font-bold uppercase text-[#5f2b06]">
                What’s inside
              </h3>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-[#6e5c50]">
                {selectedGift.contents.map((content) => (
                  <li key={content}>{content}</li>
                ))}
              </ul>

              <h3 className="mt-5 font-bold uppercase text-[#5f2b06]">
                Allergens
              </h3>
              <p className="mt-1 text-sm text-[#6e5c50]">
                {selectedGift.allergens.join(", ")}
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {selectedGift.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#eadbc9] px-3 py-1 text-xs text-[#6e5c50]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="sticky bottom-0 mt-4 space-y-2 bg-white pb-1 pt-2">
                <button
                  type="button"
                  onClick={() => toggleSaved(selectedGift)}
                  className="w-full rounded-xl border-2 border-[#a15c2b] px-4 py-3 font-semibold text-[#5f2b06]"
                >
                  {isSaved ? "♥ Saved" : "♡ Save this gift"}
                </button>
                <button
                  type="button"
                  disabled={!selectedGift.inStock || isInCart || !user}
                  onClick={() => addToCart(selectedGift)}
                  className="w-full rounded-xl bg-[#5f2b06] px-4 py-3 font-semibold text-white disabled:cursor-not-allowed disabled:bg-gray-400"
                >
                  {!user
                    ? "Sign in to add to cart"
                    : !selectedGift.inStock
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
    </main>
    </div>
  )
}

export default Gift
