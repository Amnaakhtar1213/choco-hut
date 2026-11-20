import React from 'react'
import Nav1 from '../Component/Nav1'
import Nav2 from '../Component/Nav2'
import { useLocation } from 'react-router-dom'

const NavbarGrid = () => {
  const {pathname} = useLocation();
const isSeasonalPage = ["/christmass", "/halloween", "/menu", "/checkout"].includes(pathname)
  return (
    <>
      {isSeasonalPage ? (
  <>
    <Nav1 />
    <div className="sticky top-0 z-50">
      <Nav2 />
    </div>
  </>
) : (
  <div className="sticky top-0 z-50">
    <Nav1 />
    <Nav2 />
  </div>
)}
    </>
  )}

export default NavbarGrid
