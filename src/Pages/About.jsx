import React from 'react'
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <main className="bg-[#fbf7f0] text-[#38251b]">
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden">
        <img
         src="https://images.unsplash.com/photo-1605291445244-9ff5e28a5376?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
          alt="Decorated chocolate celebration cake"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 md:px-12">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-[#ead7b7]">
            The story of Choco-Hut
          </p>
          <h1 className="max-w-3xl font-serif text-5xl leading-tight text-white md:text-7xl">
            A little sweetness,
            <br />
            made with intention.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/85 md:text-lg">
            Thoughtful bakes, rich chocolate, and lovely details for life’s
            sweetest moments.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:px-12 md:py-28">
        <div className="order-2 md:order-1">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9b754c]">
            Our story
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-[#5f2b06] md:text-5xl">
            Sweet moments begin with care.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-8 text-[#6e5c50]">
            <p>
              At Choco-Hut, we believe a little chocolate can make an ordinary
              moment feel special.
            </p>
            <p>
              Our story began with a love of thoughtful baking: rich chocolate,
              delicate textures, and treats made to be shared. From celebration
              cakes to small everyday indulgences, each creation is designed to
              feel warm, beautiful, and memorable.
            </p>
            <p>
              We bring care to every detail—from the first swirl of frosting to
              the final finishing touch—so there’s always something lovely to
              place at the center of your table.
            </p>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <img
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=85"
            alt="A baker preparing fresh treats"
            className="h-[28rem] w-full rounded-t-[10rem] object-cover shadow-xl md:h-[36rem]"
          />
        </div>
      </section>

      {/* Approach */}
      <section className="bg-[#efe5d8] px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9b754c]">
              The Choco-Hut touch
            </p>
            <h2 className="mt-4 font-serif text-4xl text-[#5f2b06] md:text-5xl">
              Made to be remembered
            </h2>
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-3">
            <div className="border-t border-[#b99b7c] pt-6">
              <span className="font-serif text-3xl text-[#a68158]">01</span>
              <h3 className="mt-4 font-serif text-2xl text-[#5f2b06]">
                Thoughtful flavors
              </h3>
              <p className="mt-3 leading-7 text-[#6e5c50]">
                Comforting classics and lovely combinations bring a little
                delight to every bite.
              </p>
            </div>

            <div className="border-t border-[#b99b7c] pt-6">
              <span className="font-serif text-3xl text-[#a68158]">02</span>
              <h3 className="mt-4 font-serif text-2xl text-[#5f2b06]">
                Care in every detail
              </h3>
              <p className="mt-3 leading-7 text-[#6e5c50]">
                From the finish to the presentation, every treat is made to feel
                special.
              </p>
            </div>

            <div className="border-t border-[#b99b7c] pt-6">
              <span className="font-serif text-3xl text-[#a68158]">03</span>
              <h3 className="mt-4 font-serif text-2xl text-[#5f2b06]">
                Made for sharing
              </h3>
              <p className="mt-3 leading-7 text-[#6e5c50]">
                Whether it’s a celebration or a quiet cup of tea, there’s a
                Choco-Hut treat for the moment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing image and link */}
      <section className="relative isolate flex min-h-[28rem] items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=2000&q=85"
          alt="Rich chocolate treats ready to share"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[#2d1b13]/65" />

        <div className="mx-auto w-full max-w-7xl px-6 py-20 text-center md:px-12">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#ead7b7]">
            Made for sharing. Remembered for the sweetness.
          </p>
          <h2 className="mx-auto mt-5 max-w-2xl font-serif text-4xl leading-tight text-white md:text-6xl">
            Find something lovely for your table.
          </h2>
          <Link
            to="/cake"
            className="mt-8 inline-block rounded-full border border-[#ead7b7] px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-[#ead7b7] hover:text-[#38251b]"
          >
            Explore our treats
          </Link>
        </div>
      </section>
    </main>
  );
};



export default About
