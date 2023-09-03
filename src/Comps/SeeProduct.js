import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Counter, IDDD,Title, IDNumber, IdArrayPush, Information, total ,ChangeBtn, TitleArray, PopShow, ShowPopfull} from '../redux/Slice'
import "./SeeProduct.css"
import Details from './Details'
export default function SeeProduct({
title,
image,
paragraph,
price,
id
}) {
  let {detailsBtn,counter , ProductInformation}=useSelector(state =>state.container)
  let [number,setNumber]=useState(1)
  let dispatch = useDispatch()
  let hand  = ()=>{
    dispatch(total(price * number))
    dispatch(Information({Title:title,Price:price,Image:image,Id:id,num:number}))
    dispatch(IdArrayPush(id))
    dispatch(IDDD(id))
dispatch(IDNumber(number))
dispatch(ChangeBtn(false));

dispatch(TitleArray(`Item ${title} was added to cart`));

if(number >= 1){
  dispatch(Counter(number))
}


}


  return (
    <div className='SeeProduct' id={id}>
<div className='container'>
<img src={image}/>
<div className='product-text'>
  <p className='par1'>new Product</p>
<h4>{title}</h4>
<p className='desc'>{paragraph}</p>
<p className='price'>$  {price}</p>
<div className='btn-counter'>
<div className='counter'>
<button onClick={()=>{number > 1 ? setNumber(number - 1):setNumber(1) }}>-</button>
<span className='price_number'>{number}</span>
<button onClick={()=> {setNumber(number + 1)}}>+</button>
</div>
<button className='add' onClick={hand}>add to cart</button>
</div>
</div>
</div>

<div>



</div>
    </div>
  )
}
