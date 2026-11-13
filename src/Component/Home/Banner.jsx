import React from 'react'

import img1 from '../../assets/banner/ban9.png'

const Banner = () => {
  return (
    <div>
      <section className="w-full overflow-hidden">
  <img
    src={img1}
    alt="Choco-Hut bakery banner"
    className="block w-full h-auto md:h-[calc(100vh-100px)] md:object-cover"
  />
</section>
    </div>
  )
}

export default Banner
