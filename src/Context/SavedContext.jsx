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
  if(!user){
    alert("Please sign in before adding products to your cart.");
    return
  }
  setCartItems((currentItems) => {
    const existingItem = currentItems.find(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItem) {
      return currentItems.filter((cartItem) =>
        !(cartItem.id === item.id)
      );
    }

    return [...currentItems, { ...item, quantity: 1 }];
  });
}

function changeCartQuantity(item, amount) {
  setCartItems((currentItems) =>
    currentItems.map((cartItem) =>
      cartItem.id === item.id && cartItem.name === item.name
        ? {
            ...cartItem,
            quantity: Math.max(1, (cartItem.quantity ?? 1) + amount),
          }
        : cartItem
    )
  );
}

function removeFromCart(item) {
  setCartItems((currentItems) =>
    currentItems.filter(
      (cartItem) =>
        !(cartItem.id === item.id && cartItem.name === item.name)
    )
  );
}

function clearCart(){
  setCartItems([])
}

const [user, setUser] = useState(() => {
  const storedUser = localStorage.getItem("user");
  return storedUser ? JSON.parse(storedUser) : null;
})

useEffect(() => {
  if(user){
    localStorage.setItem("user", JSON.stringify(user))
  } else {
    localStorage.removeItem("user")
  }
}, [user])

function signIn(userData){
  setUser(userData)
}

function signOut(){
  setUser(null)
}

 return (
  <SavedContext.Provider value={{savedItems, toggleSaved, cartItems, addToCart, changeCartQuantity, removeFromCart, clearCart, user, signIn, signOut}}>
    {children}
  </SavedContext.Provider>
 )
}


export default SavedContext;