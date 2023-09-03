import React from 'react'
import "../Comps/HeadphonesOne.css"
import SeeProduct from './SeeProduct'
import { Link, Outlet } from 'react-router-dom'
import Pictuers from './Pictuers'
import YouMayAlsoLike from "./YouMayAlsoLike"
function SpeakersOne() {
  return (
    <div className='HeadphonesOne'>
    <div className='Go_back'>
        <div className='container'>
          
    <Link to="/speakers" >Go back</Link>
        </div>
      </div>
      <Outlet/>
  <SeeProduct image="./images/image-zx9.jpg" title="ZX9 SPEAKER" paragraph="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups" price={4500} id={6} />
  <Pictuers imgUp="./images/image-gallerySpeakerOne.jpg" imgDown="./images/image-gallerySpeakerOneDown.jpg" imgRight="./images/image-gallerySpeakerOneRight.jpg"/>
<YouMayAlsoLike 
 
         img2= "./images/image-xx99-mark-two.jpg "  path2="/headphones/headphonesOne" title2="xx99-mark-two"
         img1= "./images/image-xx99-mark-one.jpg " path1="/headphones/headphonesTwo"   title1="xx99-mark-one"
         img3= "./images/image-zx7.jpg "   path3="/speakers/zx7-speaker"  title3="zx7"
          
          
          

/>
  
      </div>
  )
}

export default SpeakersOne;