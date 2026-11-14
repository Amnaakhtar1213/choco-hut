import { useState, useEffect, createContext}  from 'react'

const SavedContext = createContext(null)

export function SavedProvider({children}) {
 const [savedItems, setSavedItems] = useState(() => {
  const storedItems = localStorage.getItem("savedItems");
  return storedItems ? JSON.parse(storedItems) : []
 })

 useEffect(() => {
  localStorage.setItem("savedItems", JSON.stringify(savedItems));
 }, [savedItems]);

 function toggleSaved(item){
  setSavedItems((currentItem) => {
    const alreadySaved = currentItem.some((savedItems) => savedItems.id === item.id)

    if(alreadySaved){
      return currentItem.filter((savedItems) => savedItems.id !== item.id)
    }
    return [...currentItem, item];
  })
 }


 const [cartItems, setCartItems] = useState(() => {
  const storedCartItems = localStorage.getItem("cartItems");
  return storedCartItems ? JSON.parse(storedCartItems) : [];
});

useEffect(() => {
  localStorage.setItem("cartItems", JSON.stringify(cartItems))
}, [cartItems])

function addToCart(item) {
  setCartItems((currentItems) => {
    const existingItem = currentItems.find(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItem) {
      return currentItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }

    return [...currentItems, { ...item, quantity: 1 }];
  });
}

 return (
  <SavedContext.Provider value={{savedItems, toggleSaved, cartItems, addToCart}}>
    {children}
  </SavedContext.Provider>
 )
}


export default SavedContext;