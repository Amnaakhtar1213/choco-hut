import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
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
import Nav1 from './Component/Nav1';
import Nav2 from './Component/Nav2';
import ChristmassPage from './Pages/ChristmassPage';
import HalloweenPage from './Pages/HalloweenPage';
import SavePage from './Pages/SavePage';


function App() {
localStorage.clear()

  return (
    <>
    <ScrollToTop />
    <NavbarGrid />
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cake" element={<CakePage />} />
      <Route path="/Cupcake" element={<CupcakePage />} />
      <Route path="/Cookies" element={<CookiesPage />} />
      <Route path="/macaron" element={<MacaronsPage />} />
      <Route path="/dessert" element={<DessertPage />} />
      <Route path="/pastries" element={<PatriesPage />} />

      <Route path="/christmass" element={ <ChristmassPage />} />
      <Route path="/halloween" element={ <HalloweenPage />} />
      <Route path="/save" element={<SavePage />} />
     </Routes>
  
   
   
    <Footer />
    </>
  )
}

export default App
