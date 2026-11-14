import React from 'react'
import CartCard from '../Component/cart/CartCard'
import { useContext } from 'react'
import SavedContext from '../Context/SavedContext'

const CartPage = () => {
  const {cartItems} = useContext(SavedContext)
  return (
  <div className="min-h-screen bg-[#d3ddbf]  p-10">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-[#f9b6b6]">My Cart</h1>
        <p className="mt-2 text-amber-800">Review your treats before checkout.</p>
      </div>

      {cartItems.length === 0 ? (
        <div className="flex min-h-[60vh] items-center justify-center">
          <p className="text-center text-xl text-amber-50">
            Your cart is empty.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-1 lg:grid-cols-2">
          {cartItems.map((item) => (
            <CartCard key={`${item.category}-${item.id}`} item={item} />
          ))}
        </div>
      )}
    </div>      
  )
}

export default CartPage
