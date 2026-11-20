import React from 'react'
import cakes from '../Data/cakePage'
import ChristmasData from '../Data/christmass'
import cookies from '../Data/cookiesData'
import cupcakes from '../Data/cupcakeData'
import desserts from '../Data/desserts'
import Halloween from '../Data/Halloween'
import macarons from '../Data/Macarons'
import PastryData from '../Data/pastries'

const menuSections = [
  { title: "Cakes", items: cakes },
  { title: "Cupcakes", items: cupcakes },
  { title: "Cookies", items: cookies },
  { title: "Macarons", items: macarons },
  { title: "Pastries", items: PastryData },
  { title: "Desserts & Drinks", items: desserts },
  // { title: "Halloween Treats", items: Halloween },
  // { title: "Christmas Treats", items: ChristmasData },
];

const seasonalItems = [...Halloween, ...ChristmasData];

const Menu = () => {
  return (
    <div>
         <main className="min-h-screen bg-[#fbf7f0] px-5 py-12 text-[#38251b] sm:px-8">
      <header className="mx-auto mb-12 max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#9b754c]">
          Choco-Hut Bakery
        </p>
        <h1 className="mt-3 font-serif text-5xl font-bold text-[#5f2b06]">
          Our Menu
        </h1>
        <p className="mt-4 text-[#6e5c50]">
          Freshly baked treats for sharing, celebrating, or enjoying all to yourself.
        </p>
      </header>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-y-12">
        {menuSections.map((section) => (
          <section key={section.title}>
            <h2 className="mb-5 border-b border-[#dfd0bd] pb-3 font-serif text-3xl text-[#5f2b06]">
              {section.title}
            </h2>

            <div className="grid grid-cols-1 gap-x-6 gap-y-2 lg:grid-cols-2">
              {section.items.map((item) => (
                <article
                  key={item.id}
                  className="grid grid-cols-[72px_1fr] items-center gap-3 border-b border-[#dfd0bd] py-3 sm:grid-cols-[88px_1fr]"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-16 w-18 rounded-lg object-cover sm:h-20 sm:w-22"
                  />

                  <div className="flex items-start justify-between gap-2 py-1">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#9b754c]">
                        {item.category}
                      </p>
                      <h3 className="mt-1 text-base font-bold text-[#5f2b06]">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-xs leading-5 text-[#6e5c50]">
                        {item.description}
                      </p>
                    </div>

                    <span className="shrink-0 font-bold text-[#713b16]">
                      ${Number(item.price).toFixed(2)}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </section>
             ))}
    </div>

    <section className="mx-auto mt-16 max-w-7xl">
      <h2 className="border-b border-[#dfd0bd] pb-3 font-serif text-3xl text-[#ed9494] text-center">
        Seasonal &amp; Holiday Specials
      </h2>
      <p className="mb-5 mt-2 text-sm text-[#667653] text-center">
        Special treats available during selected times of the year.
      </p>

      <div className="grid grid-cols-1 gap-x-6 gap-y-2 lg:grid-cols-2">
        {seasonalItems.map((item) => (
          <article
            key={item.id}
            className="grid grid-cols-[72px_1fr] items-center gap-3 border-b border-[#dfd0bd] py-3 sm:grid-cols-[88px_1fr]"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-16 w-18 rounded-lg object-cover sm:h-20 sm:w-22"
            />

            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-xs font-semibold uppercase text-[#9b754c]">
                  {item.category}
                </p>
                <h3 className="mt-1 text-base font-bold text-[#5f2b06]">
                  {item.name}
                </h3>
                <p className="mt-1 text-xs leading-5 text-[#6e5c50]">
                  {item.description}
                </p>
              </div>

              <span className="shrink-0 font-bold text-[#713b16]">
                ${Number(item.price).toFixed(2)}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  </main>
    </div>
  )
}

export default Menu
