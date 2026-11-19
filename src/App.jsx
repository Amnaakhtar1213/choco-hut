import { useState } from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import './App.css'

import NavbarGrid from './Pages/NavbarGrid'
import Home from './Pages/Home'
import Footer from './Component/Footer'
import CakePage from './Pages/CakePage'
import CupcakePage from './Pages/CupcakePage'
import CookiesPage from './Pages/CookiesPage'
import DessertPage from './Pages/DessertPage'
import ScrollToTop from './Component/ScrollToTop';
import MacaronsPage from './Pages/MacaronsPage';
import PatriesPage from './Pages/PatriesPage';
import ChristmassPage from './Pages/ChristmassPage';
import HalloweenPage from './Pages/HalloweenPage';
import SavePage from './Pages/SavePage';
import CartPage from './Pages/CartPage';
import About from './Pages/About';
import Contact from './Pages/Contact';
import CheckoutPage from './Pages/CheckoutPage';
import SignInPage from './Pages/signInPage';
import SignUpPage from './Pages/SignUpPage';
import ProductDetail from './Pages/ProductDetail';
import Gift from './Pages/Gift';

function App() {


  return (
    <>
    <ScrollToTop />
     <NavbarGrid />
  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cake" element={<CakePage />} />
      <Route path="/cupcake" element={<CupcakePage />} />
      <Route path="/cookies" element={<CookiesPage />} />
      <Route path="/macarons" element={<MacaronsPage />} />
      <Route path="/dessert" element={<DessertPage />} />
      <Route path="/pastries" element={<PatriesPage />} />

      <Route path="/christmass" element={ <ChristmassPage />} />
      <Route path="/halloween" element={ <HalloweenPage />} />
      <Route path="/save" element={ <SavePage />}/>
      <Route path="/cart" element={ <CartPage />}/> 
      <Route path="/about" element={ <About />}/> 
      <Route path="/contact" element={ <Contact />}/> 
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/user" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
     <Route path="/gift" element={<Gift />} />
     </Routes>
  
   
   
    <Footer />
    </>
  )
}

export default App
