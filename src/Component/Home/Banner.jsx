import React from 'react'

import img2 from '../../assets/banner/banner7.png'

const Banner = () => {
  return (
    <div>
      <section className="w-full overflow-hidden">
  <img
    src={img2}
    alt="Choco-Hut bakery banner"
    className="block w-full h-auto md:h-[calc(100vh-220px)] md:object-cover"
  />
</section>
    </div>
  )
}

export default Banner
