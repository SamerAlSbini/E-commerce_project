import React from 'react'
import SeeProduct from './SeeProduct'
import { Link, Outlet } from 'react-router-dom'
import "../Comps/HeadphonesOne.css"
import Pictuers from './Pictuers'
import YouMayAlsoLike from './YouMayAlsoLike'
import { useSelector } from 'react-redux'
import Details from './Details'


function HeadphonesThree() {
  let {ProductInfromation}=useSelector(state=>state.container)
  return (
    <div className='HeadphonesOne'>
  <div className='Go_back'>
      <div className='container'>
  <Link to="/headphones" >Go back</Link>
      </div>
    </div>
    <Outlet/>
<SeeProduct image="./images/image-xx59.jpg" title="XX99 MARK I HEADPHONES" paragraph="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound." price={3500} id={3} />
<Pictuers imgUp="./images/image-gallery3.jpg" imgDown="./images/image-gallery3down.jpg" imgRight="./images/image-gallery3Right.jpg"/>
  <YouMayAlsoLike 
    img3= "./images/image-xx99-mark-two.jpg "  path3="/headphones/headphonesOne" title3="xx99-mark-two"
    img2= "./images/image-xx99-mark-one.jpg " path2="/headphones/headphonesTwo"   title2="xx99-mark-one"
    img1= "./images/image-zx9.jpg "   path1="/speakers/zx9-speaker"  title1="zx9"
  />
<div className='summary'>
{
  ProductInfromation.map((ele) =>
    <Details img={ele.Image} price={ele.Price}  p={ele.Title} counterNumber={ele.num} id={ele.Id} />
  )
  }

</div>
    </div>
  )
}

export default HeadphonesThree