import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import SeeProduct from './SeeProduct'
import "./HeadphonesOne.css"
import Features from './Features'
import Pictuers from './Pictuers'
import YouMayAlsoLike from './YouMayAlsoLike'
 function HeadphonesOne() {
  return (
    <div className='HeadphonesOne'>
      <div className='Go_back'>
        <div className='container'>
    <Link to="/headphones" >Go back</Link>
        </div>
      </div>
      <Outlet/>
<SeeProduct image="./images/image-xx99-mark-two.jpg" title="XX99 MARK II HEADPHONES" paragraph="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound." price={2000} id={1} />
<Features p2={"Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms."} p1={"Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m)."} arr={[{number:"1x",name:"Headphone Unit"},{number:"2x",name:"Replacement Earcups"},{number:"1x",name:"User Manual"},{number:"1x",name:"3.5mm 5m Audio Cable "},{number:"1x",name:"Travel Bag"}]}/>
    <Pictuers imgUp="./images/image-gallery-1.jpg" imgDown="./images/image-gallery-2.jpg" imgRight="./images/image-gallery-3.jpg"/>
    <YouMayAlsoLike
      img1= "./images/image-xx99-mark-one.jpg "  path1="/headphones/headphonestwo" title1="XX99 MARK I"
      img2= "./images/image-zx7.jpg " path2="/speakers/zx7-speaker"   title2="zx7"
      img3= "./images/image-zx9.jpg "   path3="/speakers/zx9-speaker"  title3="zx9"
    />
    </div>
  )
}
export default HeadphonesOne
