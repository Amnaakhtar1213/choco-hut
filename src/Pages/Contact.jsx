import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";

const Contact = () => {
   const [messageSent, setMessageSent] = useState(false);

    function handleSubmit(event) {
    event.preventDefault();

    setMessageSent(true);
     event.currentTarget.reset();
   
     setTimeout(() => {
      setMessageSent(false);
  }, 5000);
}
  return (
    <div>
        <main className="bg-[#fbf7f0] text-[#38251b]">
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=2000&q=85"
          alt="Chocolate dessert"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#2d1b13]/55" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 text-center md:px-12">
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#ead7b7]">
            Get in touch
          </p>
          <h1 className="mt-4 font-serif text-5xl text-white md:text-7xl">
            We’d love to hear from you.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-white/85 md:text-lg">
            Questions, celebrations, or a little something sweet in mind?
            Send us a note.
          </p>
        </div>
      </section>

      {/* Contact details and form */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[0.8fr_1.2fr] md:px-12 md:py-24">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9b754c]">
            Contact details
          </p>
          <h2 className="mt-3 font-serif text-4xl text-[#5f2b06]">
            Let’s make your day sweeter.
          </h2>
          <p className="mt-4 leading-7 text-[#6e5c50]">
            Reach out about our treats, custom celebration cakes, or anything
            else you’d like to ask.
          </p>

          <div className="mt-8 space-y-6 border-t border-[#dfd0bd] pt-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9b754c]">
                Call us
              </p>
              <a
                href="tel:+923001234567"
                className="mt-2 inline-block text-lg text-[#5f2b06] hover:text-[#9b754c]"
              >
                +92 3414277311
              </a>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9b754c]">
                Email
              </p>
              <a
                href="mailto:hello@chocohut.example"
                className="mt-2 inline-block text-lg text-[#5f2b06] hover:text-[#9b754c]"
              >
                cake@chocohut.com
              </a>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9b754c]">
                Opening hours
              </p>
              <p className="mt-2 leading-7 text-[#6e5c50]">
                Monday – Saturday
                <br />
                10:00 AM – 8:00 PM
              </p>
            </div>
          </div>

          <p className="mt-8 rounded-2xl bg-[#efe5d8] p-5 text-sm leading-6 text-[#6e5c50]">
            Planning a celebration? Tell us your date, guest count, and favorite flavors in your message.
          </p>
        </div>

        <div className="rounded-3xl border border-[#eadbc9] bg-white p-6 shadow-xl shadow-[#5f2b06]/10 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9b754c]">
            Send us a message
          </p>
          <h2 className="mt-3 font-serif text-3xl text-[#5f2b06]">
            How can we help?
          </h2>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-medium text-[#5f2b06]">
                  Your name
                </span>
                <input
                name="name"
                  type="text"
                  placeholder="Name"
                  required
                  className="mt-2 w-full rounded-xl border border-[#dfd0bd] bg-[#fbf7f0] px-4 py-3 outline-none transition focus:border-[#9b754c]"
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-[#5f2b06]">
                  Email address
                </span>
                <input
                name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl border border-[#dfd0bd] bg-[#fbf7f0] px-4 py-3 outline-none transition focus:border-[#9b754c]"
                />
              </label>
            </div>

            <label className="block">
              <span className="text-sm font-medium text-[#5f2b06]">
                Subject
              </span>
              <input
              name="subject"
                type="text"
                required
                placeholder="What would you like to ask about?"
                className="mt-2 w-full rounded-xl border border-[#dfd0bd] bg-[#fbf7f0] px-4 py-3 outline-none transition focus:border-[#9b754c]"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-[#5f2b06]">
                Message
              </span>
              <textarea
              name="message"
                rows="5"
                required
                placeholder="Write your message here..."
                className="mt-2 w-full resize-none rounded-xl border border-[#dfd0bd] bg-[#fbf7f0] px-4 py-3 outline-none transition focus:border-[#9b754c]"
              />
            </label>

            <button
              type="submit"
              className="w-full rounded-xl bg-[#5f2b06] px-6 py-3 font-semibold text-white transition hover:bg-[#7a4216] sm:w-auto"
            >
              {messageSent ? "Sent 😊" : "Send Message"}
            </button>
          </form>
        </div>
      </section>

      {/* Closing call to action */}
      <section className="bg-[#efe5d8] px-6 py-14 text-center">
        <p className="font-serif text-3xl text-[#5f2b06]">
          Need something sweet for a celebration?
        </p>
        <Link
          to="/cake"
          className="mt-6 inline-block rounded-full border border-[#5f2b06] px-7 py-3 text-sm font-semibold uppercase tracking-wider text-[#5f2b06] transition hover:bg-[#5f2b06] hover:text-white"
        >
          Explore our cakes
        </Link>
      </section>
    </main>
    </div>
  )
}

export default Contact
