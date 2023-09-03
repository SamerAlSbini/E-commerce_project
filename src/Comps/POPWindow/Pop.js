import React, { useState } from 'react'
import "./Pop.css"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { useDispatch, useSelector } from 'react-redux'
import { ChangeRemove, PopShow } from '../../redux/Slice';

export default function Pop() {
  let dispatch = useDispatch()
  let {show}= useSelector(state =>state.container);
let Active2 = ()=>{
dispatch(PopShow(false))
}
  return (
<>
    <div className={show ? 'Pop' : " hidden"} onClick={Active2}>
        </div>
<div className={ show ?'box' : "hidden"} >
<h1>Your cart is empty</h1>
<div ><ShoppingCartOutlinedIcon className="cart1"/></div>
</div>
</>
  )
}