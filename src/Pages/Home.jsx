import React from 'react'
import Banner from '../Component/Home/Banner'
import FeaturesProd from '../Component/Home/FeaturesProd'
import Best from '../Component/Home/Best'
import Treats from '../Component/Home/Treats'
import SeasonalSec from '../Component/Home/SeasonalSec'  
import HomeGrid from '../Component/Home/HomeGrid'

const Home = () => {
  return (
    <div>
       <Banner />
      <FeaturesProd />
      <Best />
      <Treats />
      <SeasonalSec />
      <HomeGrid />
       {/* <ChristmassHeader />
      <Christmass />
      <HallowHeader /> */}
    </div>
  )
}

export default Home
