import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
  const navigate = useNavigate()

  function handleSubmit(){
   event.preventDefault();
   navigate("/checkout")
  }
  
  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-[#fbf7f0] px-4 py-10">
      <section className="w-full max-w-md rounded-2xl border border-[#eadbc9] bg-white p-8 shadow-lg">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#9b754c]">
          Choco-Hut
        </p>

        <h1 className="mt-3 text-center font-serif text-3xl text-[#5f2b06]">
          Sign in to continue
        </h1>

        <p className="mt-2 text-center text-stone-600">
          Sign in before placing your order.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <label className="block">
            <span className="text-sm font-medium text-[#5f2b06]">
              Email address
            </span>
            <input
              type="email" required
              placeholder="you@example.com"
              className="mt-2 w-full rounded-lg border border-[#dfd0bd] bg-[#fbf7f0] px-4 py-3 outline-none focus:border-[#9b754c]"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-[#5f2b06]">
              Password
            </span>
            <input
              type="password" required
              placeholder="Enter your password"
              className="mt-2 w-full rounded-lg border border-[#dfd0bd] bg-[#fbf7f0] px-4 py-3 outline-none focus:border-[#9b754c]"
            />
          </label>

          <button
            type="submit"
            className="w-full rounded-lg bg-[#5f2b06] px-4 py-3 font-semibold text-white transition hover:bg-[#7a4216]"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-stone-600">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="font-semibold text-[#8b5e34] hover:text-[#5f2b06]"
          >
            Create an account
          </Link>
        </p>

        <div className="mt-5 text-center">
          <Link
            to="/cart"
            className="text-sm font-medium text-[#8b5e34] hover:text-[#5f2b06]"
          >
            Back to Cart
          </Link>
        </div>
      </section>
    </main>
  );
};

export default SignInPage;