import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import "../POPWindow/PopFull.css"
import { Link } from 'react-router-dom'
import Details from '../Details'
import { ChangeRemove, ShowPopfull, ZeroCounter } from '../../redux/Slice'
import { PopShow ,TitleArray} from '../../redux/Slice'
function PopFull() {
    let {showPopfull,counter, pricee,ProductInfromation,show} = useSelector(state => state.container)
  let [number,setNumber]=useState(1)
  let [Allow,setAllow]  =useState(false);
  let dispatch = useDispatch()
  //  console.log(ProductInfromation)
  let Remove = ()=>{
dispatch(ZeroCounter(0))
dispatch(PopShow(true))//cart  empty is active
dispatch(ShowPopfull(false)) // clear cart (remove product details) 
dispatch(TitleArray("cart is empty"))
document.body.classList.remove("over")
dispatch(ChangeRemove(null))
}
let Active2 = ()=>{
  dispatch(ShowPopfull(false));
  }
let Active3= ()=>{
  dispatch(ShowPopfull(false)); 
}
  return ( 
<>
<div className={showPopfull? 'Pop' : " hidden"} onClick={Active2}>
        </div>
      <div className={showPopfull? "PopFull" : "hidden"}>
          <div className='head'>
  <h3>CART ({counter})</h3>
          <div className='removeAll'>
      <a href='#' onClick={Remove}>Remove All
      </a>
          </div>
          </div>

        <div className='body_of_popFull'>
  {
  ProductInfromation.map((ele) =>
    <Details img={ele.Image} price={ele.Price}  p={ele.Title} counterNumber={ele.num} id={ele.Id} />
  )
  }
  <div className='total'>
  <span>TOTAL</span>
  <span>$ {pricee}</span>
  </div>
  <button className='checkout'><Link to="checkout"  onClick={Active3}> CHECKOUT  </Link> </button> 
        </div>
      </div>
</>

  )
}

export default PopFull