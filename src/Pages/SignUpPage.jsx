
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import SavedContext from "../Context/SavedContext";

const SignUpPage = () => {
  const navigate = useNavigate();
  const { signIn } = useContext(SavedContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Saves the user's name and email through SavedContext.
    // The password is not saved.
    signIn({ name, email });
    navigate("/");
  }

  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-[#fbf7f0] px-4 py-10">
      <section className="w-full max-w-md rounded-2xl border border-[#eadbc9] bg-white p-8 shadow-lg">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#9b754c]">
          Choco-Hut
        </p>

        <h1 className="mt-3 text-center font-serif text-3xl text-[#5f2b06]">
          Create your account
        </h1>

        <p className="mt-2 text-center text-stone-600">
          Sign up to continue with your order.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <label className="block">
            <span className="text-sm font-medium text-[#5f2b06]">Name</span>
            <input
              type="text"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Your name"
              className="mt-2 w-full rounded-lg border border-[#dfd0bd] bg-[#fbf7f0] px-4 py-3 outline-none focus:border-[#9b754c]"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-[#5f2b06]">
              Email address
            </span>
            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              className="mt-2 w-full rounded-lg border border-[#dfd0bd] bg-[#fbf7f0] px-4 py-3 outline-none focus:border-[#9b754c]"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-[#5f2b06]">Password</span>
            <input
              type="password"
              required
              minLength={8}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="At least 8 characters"
              className="mt-2 w-full rounded-lg border border-[#dfd0bd] bg-[#fbf7f0] px-4 py-3 outline-none focus:border-[#9b754c]"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-[#5f2b06]">
              Confirm password
            </span>
            <input
              type="password"
              required
              minLength={8}
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              placeholder="Enter your password again"
              className="mt-2 w-full rounded-lg border border-[#dfd0bd] bg-[#fbf7f0] px-4 py-3 outline-none focus:border-[#9b754c]"
            />
          </label>

          {error && <p className="text-sm text-red-700">{error}</p>}

          <button
            type="submit"
            className="w-full rounded-lg bg-[#5f2b06] px-4 py-3 font-semibold text-white transition hover:bg-[#7a4216]"
          >
            Create account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-stone-600">
          Already have an account?{" "}
          <Link
            to="/user"
            className="font-semibold text-[#8b5e34] hover:text-[#5f2b06]"
          >
            Sign in
          </Link>
        </p>
      </section>
    </main>
  );
};

export default SignUpPage;