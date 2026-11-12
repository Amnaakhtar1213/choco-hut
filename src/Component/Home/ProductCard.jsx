import {Link} from 'react-router-dom'

const ProductCard = ({item}) => {
  const Icon = item.icon;
  return (
    <Link to={item.path} className="block">
    <div className=" w-full md:w-110 h-auto md:h-60 rounded-xl flex flex-col md:flex-row  gap-2 p-4 shadow-lg shadow-[#5f2b06] hover:scale-105 transition-transform duration-300 border-3 border-[#FDF4EA]">
   <img src={item.image} alt={item.name} className="w-80 h-50  object-cover rounded-xl  " />
   
   <div className=" mt-4 flex flex-col text-center  gap-2">
   {Icon && <Icon width={32} height={32} className="self-center text-[#5f2b06] shrink-0" />}
    <h1 className="text-xl font-bold text-[#5f2b06]">{item.name}</h1>
    <p className="text-[#7f9359] tracking-wide">{item.description}</p>
    
   </div>
</div>
</Link>


  )
}

export default ProductCard
