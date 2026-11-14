import React from 'react'
import CakeGrid from './CakeGrid'
import img6 from '../../assets/banner/ban8.png'
import CupcakeGrid from './CupcakeGrid'
import CookiesGrid from './CookiesGrid'
import MacaronGrid from './MacaronGrid'
import DessertGrid from './DessertGrid'
import PastriesGrid from './PastriesGrid'

const HomeGrid = () => {
  return (
    <div className="relative isolate overflow-hidden">
      <img src={img6} className="absolute inset-0 h-full w-full object-cover"/>
      <CakeGrid />
      <CupcakeGrid />
      <CookiesGrid />
      <MacaronGrid />
      <PastriesGrid />
      <DessertGrid />
    </div>
  )
}

export default HomeGrid
