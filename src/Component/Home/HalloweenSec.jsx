import React from 'react'
import { Link } from 'react-router-dom'
import img14 from '../../assets/hero/hallowcake1.jpg'
import img15 from '../../assets/hero/Designer.png'

const HalloweenSec = () => {
  return (
    // <Link to="/halloween" className="block">
    //   <div  className="absolute grid w-full md:grid-cols-1 items-center justify-items-center gap-4 px-10">
    //      <div className="relative w-full overflow-hidden rounded-xl border-2 border-orange-300 shadow-xl shadow-black">
    //       <img
    //         src="https://images.unsplash.com/photo-1637209697457-f88bc41d4545?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    //         alt="Halloween seasonal cakes"
    //         className="h-86 w-full rounded-xl object-cover blur-xl"
    //       />
    //       <div className="flex flex-row items-center justify-center">
    //         <h2 className="absolute top-3 left-4 text-lg font-bold text-black-800">Halloween cakes <i className="fa-solid fa-arrow-right text-sm inline-block transition-transform duration-300 group-hover:translate-x-2"></i></h2>
    //       </div>
      
    //        <div className=" absolute inset-0 top-10 grid grid-cols-2 gap-4 p-2">
    //        <div className=" overflow-hidden h-72 rounded-xl border-0 border-white bg-white p-2 shadow-xl ">
    //       <img
    //         src={img14}
    //         alt="Halloween cake"
    //         className="h-full w-full rounded-lg object-cover transition-transform duration-500 hover:scale-110"
    //       />
    //     </div>
    //     <div className=" overflow-hidden h-72 rounded-xl border-4 border-white bg-white p-2 shadow-xl ">
    //       <img
    //         src={img15}
    //         alt="Christmas cake"
    //         className="h-full w-full rounded-lg object-cover transition-transform duration-300 ease-in-out hover:scale-120"
    //       />
    //     </div>
    //       </div> 
    //     </div>
    //   </div>
    // </Link>



    <Link to="/halloween" className="group block w-full">
  <div className="relative h-88 w-full overflow-hidden rounded-xl border-2 border-orange-300 shadow-xl shadow-black">
    {/* Blurred background */}
    <img
      src="https://images.unsplash.com/photo-1637209697457-f88bc41d4545?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
      alt=""
      className="absolute inset-0 h-full w-full object-cover blur-xl"
    />

    <h2 className="absolute left-4 top-3 z-10 text-lg font-bold text-orange-950">
      Halloween cakes
      <i className="fa-solid fa-arrow-right ml-2 inline-block text-sm transition-transform duration-300 group-hover:translate-x-2" />
    </h2>

    {/* Two visible image tiles */}
    <div className="absolute inset-x-0 bottom-0 top-12 grid grid-cols-2 gap-3 p-3">
      <div className="min-h-0 overflow-hidden rounded-xl border-4 border-white bg-white p-1 shadow-xl">
        <img
          src={img14}
          alt="Halloween cake"
          className="h-full w-full rounded-lg object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      <div className="min-h-0 overflow-hidden rounded-xl border-4 border-white bg-white p-1 shadow-xl">
        <img
          src={img15}
          alt="Halloween cupcake"
          className="h-full w-full rounded-lg object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
    </div>
  </div>
</Link>
  )
}

export default HalloweenSec
