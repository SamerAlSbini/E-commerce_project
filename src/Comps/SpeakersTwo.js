import React from 'react'
import "../Comps/HeadphonesOne.css"
import SeeProduct from './SeeProduct'
import { Link, Outlet } from 'react-router-dom'
import Pictuers from './Pictuers'
import YouMayAlsoLike from './YouMayAlsoLike'
function SpeakersTwo() {
  return (
    <div className='HeadphonesOne'>
    <div className='Go_back'>
        <div className='container'>
    <Link to="/speakers" >Go back</Link>
        </div>
      </div>
      <Outlet/>
  <SeeProduct image="./images/image-zx7.jpg" title="ZX7 SPEAKER" paragraph="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups" price={4500} id={7} />
  <Pictuers imgUp="./images/image-gallerySpeakersTwoDown.jpg" imgDown="./images/image-gallerySpeakerTwoUp.jpg" imgRight="./images/image-gallerySpeakersTwoRight.jpg"/>
  <YouMayAlsoLike
    img1= "./images/image-xx99-mark-two.jpg "  path1="/headphones/headphonesOne" title1="xx99-mark-two"
    img2= "./images/image-xx99-mark-one.jpg " path2="/headphones/headphonesTwo"   title2="xx99-mark-one"
    img3= "./images/image-zx9.jpg "   path3="/speakers/zx9-speaker"  title3="zx9"
  />
      </div>
  )
}

export default SpeakersTwo;