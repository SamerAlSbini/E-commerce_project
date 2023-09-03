import React from 'react'
import Suggestion from './Suggestion'
import "./YouMayAlsoLike.css"
import { useEffect } from 'react'
import { useState } from 'react'

function YouMayAlsoLike({img1,img2,img3,path1,path2,path3,title1,title2,title3}) {

  return (
    <div className='YouMayAlsoLike'>
        <div className='container'>
          {/* 
         img1= "/images/image-xx99-mark-two.jpg "  path1="/headphones/headphonesOne" title1="xx99-mark-two"
         img2= "/images/image-xx99-mark-one.jpg " path2="/headphones/headphonesTwo"   title2="xx99-mark-one"
         img3= "/images/image-zx9.jpg "   path3="/speakers/zx9-speaker"  title3="zx9"
          */}
<h1>YOU MAY ALSO LIKE</h1>
<div className='suggestions'>
<Suggestion img={img1} path={path1} title={title1}/>
<Suggestion img={img2} path={path2} title={title2}/>
<Suggestion img={img3} path={path3} title={title3}/>
</div>
        </div>
    </div>
  )
}

export default YouMayAlsoLike