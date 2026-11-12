import React from 'react'
import img2 from "../assets/Features/Hutlogo.png"

const Footer = () => {
  return (
    <div className="bg-[#f4e0c9] w-full h-full px-10">
  <div className="relative flex flex-col items-center px-4 md:min-h-56 md:justify-center">
  {/* Logo: above newsletter on small screens, left side on desktop */}
  <img
    src={img2}
    alt="Choco-Hut"
    className="mb-0 h-60 w-60 object-contain md:absolute md:left-4 md:top-1/2 md:mb-0 md:h-60 md:w-60 md:-translate-y-1/2"
  />

  {/* Newsletter */}
  <div className="w-full max-w-2xl border-b border-[#74815F]/30 pb-8 text-center">
    <h2 className="text-2xl font-bold text-[#8B4513]">
      A little sweetness in your inbox
    </h2>
    <p className="my-3 text-[#667653]">
      Get bakery news and seasonal treats.
    </p>

    <form className="mx-auto flex max-w-lg flex-col gap-3 sm:flex-row">
      <input
        type="email"
        placeholder="Your email address"
        className="min-w-0 flex-1 rounded-lg border border-[#74815F]/40 bg-white px-4 py-3 text-gray-800"
      />
      <button className="rounded-lg bg-[#74815F] px-5 py-3 font-semibold text-white">
        Subscribe
      </button>
    </form>
  </div>
</div>

      <div  className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
            <h3 className="text-[#8B4513] mb-3 text-xl font-bold">Choco-Hut</h3> 
          <p className="text-[#667653] ">Handmade treats for life’s sweetest moments.</p>
        </div>
    <div>
      <h3 className="mb-3 font-bold text-[#8B4513]">Explore</h3>
      <ul className="space-y-2 text-[#667653]">
        <li><a href="/cakes">Cakes</a></li>
        <li><a href="/cupcakes">Cupcakes</a></li>
        <li><a href="/macarons">Macarons</a></li>
        <li><a href="/cookies">Cookies</a></li>
        <li><a href="/fudge">Fudge &amp; brownies</a></li>
        <li><a href="/coffee">Coffee</a></li>
      </ul>
    </div>
    <div>
      <h3 className="mb-3 font-bold text-[#8B4513]">Help</h3>
      <ul className="space-y-2 text-[#667653]">
        <li><a href="/contact">Contact us</a></li>
        <li><a href="/delivery">Delivery information</a></li>
        <li><a href="/faqs">FAQs</a></li>
      </ul>
    </div>
     <div>
      <h3 className="mb-3 font-bold text-[#8B4513]">Follow along</h3>
      <ul className="space-y-2 text-[#667653]">
        <li><a href="#">Instagram</a></li>
        <li><a href="#">Facebook</a></li>
        <li><a href="#">TikTok</a></li>
      </ul>
    </div>
      </div>
       <div className="mx-auto mt-10 max-w-6xl border-t border-[#667653]/30 pt-5 text-center text-sm text-[#f48484]">
    © 2026 Choco-Hut. All rights reserved.
       </div>
    </div>
  )
}

export default Footer
