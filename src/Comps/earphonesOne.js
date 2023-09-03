import React from 'react'
import SeeProduct from './SeeProduct'
import { Link, Outlet } from 'react-router-dom'
// import "../HeadphonesOne.css"
import "../Comps/HeadphonesOne.css"
import Pictuers from './Pictuers'

function EarphonesOne() {
  return (
    <div className='HeadphonesOne'>
  <div className='Go_back'>
      <div className='container'>
  <Link to="/earphones" >Go back</Link>
      </div>
    </div>
    <Outlet/>
<SeeProduct image="./images/image-yx1-earphones.jpg" title="YX1 WIRELESS EARPHONES" paragraph="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature." price={550} id={4} />
<Pictuers imgUp="./images/image-galleryEarphonesUp.jpg" imgDown="./images/image-galleryEearphonesdown.jpg" imgRight="./images/image-galleryEearphonesRight.jpg"/>
    </div>
  )
}
export default EarphonesOne;