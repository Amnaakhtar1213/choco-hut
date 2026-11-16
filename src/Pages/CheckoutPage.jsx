import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import SavedContext from "../Context/SavedContext";

const CheckoutPage = () => {
  const { cartItems, clearCart } = useContext(SavedContext);
  const [fulfillment, setFulfillment] = useState("pickup");
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + Number(item.price) * (item.quantity ?? 1),
    0
  );

  const deliveryFee = fulfillment === "delivery" ? 5 : 0;
  const total = subtotal + deliveryFee;

  function handleSubmit(event) {
    event.preventDefault();
    clearCart();
    setOrderSubmitted(true);
  }

  if (orderSubmitted) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#fbf7f0] px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9b754c]">
          Choco-Hut
        </p>
        <h1 className="mt-4 font-serif text-4xl text-[#5f2b06]">
          Thank you for your order!
        </h1>
        <p className="mt-3 text-stone-600">
          Your order request has been received in this demo.
        </p>
        <Link
          to="/"
          className="mt-6 rounded-full bg-[#5f2b06] px-6 py-3 font-semibold text-white hover:bg-[#7a4216]"
        >
          Back to Home
        </Link>
      </main>
    );
  }

  if (cartItems.length === 0) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#fbf7f0] px-6 text-center">
        <h1 className="font-serif text-4xl text-[#5f2b06]">
          Your cart is empty
        </h1>
        <p className="mt-3 text-stone-600">
          Add some treats before checking out.
        </p>
        <Link
          to="/cake"
          className="mt-6 rounded-full bg-[#5f2b06] px-6 py-3 font-semibold text-white hover:bg-[#7a4216]"
        >
          Explore our cakes
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fbf7f0] px-4 py-12 text-[#38251b] md:px-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9b754c]">
            Choco-Hut
          </p>
          <h1 className="mt-3 font-serif text-4xl text-[#5f2b06] md:text-5xl">
            Checkout
          </h1>
          <p className="mt-3 text-stone-600">
            A few details, then your treats are almost ready.
          </p>
        </header>

        <form
          onSubmit={handleSubmit}
          className="grid gap-8 lg:grid-cols-[1fr_0.75fr]"
        >
          <div className="space-y-8">
            <section className="rounded-3xl border border-[#eadbc9] bg-white p-6 shadow-sm md:p-8">
              <h2 className="font-serif text-2xl text-[#5f2b06]">
                How would you like to receive your order?
              </h2>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <label className="flex cursor-pointer gap-3 rounded-2xl border border-[#dfd0bd] bg-[#fbf7f0] p-4">
                  <input
                    type="radio"
                    name="fulfillment"
                    value="pickup"
                    checked={fulfillment === "pickup"}
                    onChange={() => setFulfillment("pickup")}
                  />
                  <span>
                    <span className="block font-semibold text-[#5f2b06]">
                      Pick up
                    </span>
                    <span className="mt-1 block text-sm text-stone-600">
                      Collect your order from the bakery.
                    </span>
                  </span>
                </label>

                <label className="flex cursor-pointer gap-3 rounded-2xl border border-[#dfd0bd] bg-[#fbf7f0] p-4">
                  <input
                    type="radio"
                    name="fulfillment"
                    value="delivery"
                    checked={fulfillment === "delivery"}
                    onChange={() => setFulfillment("delivery")}
                  />
                  <span>
                    <span className="block font-semibold text-[#5f2b06]">
                      Delivery
                    </span>
                    <span className="mt-1 block text-sm text-stone-600">
                      Have your order brought to your address.
                    </span>
                  </span>
                </label>
              </div>

              {fulfillment === "delivery" && (
                <label className="mt-5 block">
                  <span className="text-sm font-medium text-[#5f2b06]">
                    Delivery address
                  </span>
                  <textarea
                    required
                    rows="3"
                    placeholder="Enter your full address"
                    className="mt-2 w-full rounded-xl border border-[#dfd0bd] bg-[#fbf7f0] px-4 py-3 outline-none focus:border-[#9b754c]"
                  />
                </label>
              )}

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-medium text-[#5f2b06]">
                    Preferred date
                  </span>
                  <input
                    required
                    type="date"
                    className="mt-2 w-full rounded-xl border border-[#dfd0bd] bg-[#fbf7f0] px-4 py-3 outline-none focus:border-[#9b754c]"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-[#5f2b06]">
                    Preferred time
                  </span>
                  <input
                    required
                    type="time"
                    className="mt-2 w-full rounded-xl border border-[#dfd0bd] bg-[#fbf7f0] px-4 py-3 outline-none focus:border-[#9b754c]"
                  />
                </label>
              </div>
            </section>

            <section className="rounded-3xl border border-[#eadbc9] bg-white p-6 shadow-sm md:p-8">
              <h2 className="font-serif text-2xl text-[#5f2b06]">
                Your details
              </h2>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-medium text-[#5f2b06]">
                    Full name
                  </span>
                  <input
                    required
                    type="text"
                    placeholder="Your name"
                    className="mt-2 w-full rounded-xl border border-[#dfd0bd] bg-[#fbf7f0] px-4 py-3 outline-none focus:border-[#9b754c]"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-[#5f2b06]">
                    Phone number
                  </span>
                  <input
                    required
                    type="tel"
                    placeholder="Your phone number"
                    className="mt-2 w-full rounded-xl border border-[#dfd0bd] bg-[#fbf7f0] px-4 py-3 outline-none focus:border-[#9b754c]"
                  />
                </label>
              </div>

              <label className="mt-5 block">
                <span className="text-sm font-medium text-[#5f2b06]">
                  Order notes <span className="text-stone-500">(optional)</span>
                </span>
                <textarea
                  rows="3"
                  placeholder="Cake message or other requests"
                  className="mt-2 w-full rounded-xl border border-[#dfd0bd] bg-[#fbf7f0] px-4 py-3 outline-none focus:border-[#9b754c]"
                />
              </label>
            </section>
          </div>

          <aside className="h-fit rounded-3xl border border-[#eadbc9] bg-white p-6 shadow-sm md:p-8">
            <h2 className="font-serif text-2xl text-[#5f2b06]">
              Order summary
            </h2>

            <div className="mt-5 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={`${item.id}-${item.name}`}
                  className="flex justify-between gap-4 text-sm"
                >
                  <span className="text-stone-600">
                    {item.name} × {item.quantity ?? 1}
                  </span>
                  <span className="font-medium text-[#5f2b06]">
                    ${(Number(item.price) * (item.quantity ?? 1)).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-3 border-t border-[#eadbc9] pt-5 text-sm">
              <div className="flex justify-between">
                <span className="text-stone-600">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-600">Delivery</span>
                <span>
                  {fulfillment === "delivery"
                    ? `$${deliveryFee.toFixed(2)}`
                    : "Pickup"}
                </span>
              </div>
              <div className="flex justify-between border-t border-[#eadbc9] pt-4 text-lg font-bold text-[#5f2b06]">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-xl bg-[#5f2b06] px-6 py-3 font-semibold text-white transition hover:bg-[#7a4216]"
            >
              Place Order Request
            </button>
          </aside>
        </form>
      </div>
    </main>
  );
};

export default CheckoutPage;