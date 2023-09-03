import React from 'react'
import "./Pictuers.css"
function Pictuers({imgUp,imgDown,imgRight}) {
  return (
    <div className='Pictuers'>
        <div className='container'>
<div className='leftPictuers'>  
<img src={imgUp}/>
<img src={imgDown}/>
</div>
<div className='RightPictuers'>
<img src={imgRight}/>
</div>
</div>
    </div>
  )
}

export default Pictuers