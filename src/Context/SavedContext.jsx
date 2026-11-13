import {useContext, useState, useEffect, createContext}  from 'react'

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
 return (
  <SavedContext.Provider value={{savedItems, toggleSaved}}>
    {children}
  </SavedContext.Provider>
 )
}


export default SavedContext;