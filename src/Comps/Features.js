import React from 'react'
import "./Features.css"
function Features({p1,p2,arr}) {
     
  return (
    <div className='Features'>
      <div className='container'>
      <div className='features'>
        <h1 className='heading'>FEATURES</h1>
        <div className='p1'>
{p1}
        </div>
<div className='p2'>
{p2}
</div>
      </div>
      <div className='inTheBox'>
        <h1 className='heading'>IN THE BOX</h1>
{arr.map((ele) =>
<div className='p1'><span className='orange'>{ele.number}</span>     {ele.name}</div>
)
}
      </div>
      </div>


    </div>
  )
}

export default Features