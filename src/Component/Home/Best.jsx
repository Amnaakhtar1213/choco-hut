
import img2 from "../../assets/banner/banner5.jpg"
import BestCard from './BestCard'
import BestData from '../../Data/BestData'
const Best = () => {
  return (
    
      <div className="relative w-full min-h-screen overflow-hidden pb-60">
      <img src={img2} className="absolute inset-0 w-full h-full  object-cover blur-2xl scale-110"/>
       <div className="absolute top-6 flex flex-col items-center w-full text-white text-center">
         <h1 className="text-3xl text-[#FDF4EA]">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
   <path d="M0 0h48v48H0z" fill="none" />
   <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.04 42.5c10.215 0 18.46-8.285 18.46-18.54c0-10.215-8.245-18.46-18.46-18.46C13.785 5.5 5.5 13.745 5.5 23.96c0 10.255 8.285 18.54 18.54 18.54" />
   <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.744 23.975s-4.746 3.813-11.718 3.813c-6.943 0-11.77-3.814-11.77-3.814c0 6.51 5.26 11.77 11.77 11.77c6.484 0 11.717-5.26 11.717-11.77m-14.77-5.216c0-2.488-1.382-4.504-3.086-4.504S14.8 16.27 14.8 18.758m18.48 0c0-2.488-1.382-4.504-3.087-4.504s-3.085 2.016-3.085 4.504" />
          </svg>
         </h1>
          <h1 className="text-4xl text-[#A7B48F]">Our Best Sellers</h1>
        <p className="text-[#FDF4EA] text-lg mt-2">The treats everyone loves, made fresh with a little extra sweetness.</p>
       </div>
       <div className="relative top-60  md:top-40 grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-4 gap-14 px-14  w-full ">
         {BestData.map((item) => (
         <BestCard key={item.id} item={item} />
      ))}
       </div>
      </div> 
  )
}

export default Best
