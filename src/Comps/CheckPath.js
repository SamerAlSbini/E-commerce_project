import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { CheckoutChange } from '../redux/Slice';
function CheckPath() {
    const {pathname} = useLocation();
    const dispatch = useDispatch()
    let {Checkout}=useSelector(state=>state.container)
    useEffect(() => {
    if(pathname.includes("checkout")){
        dispatch(CheckoutChange(false))
        // console.log("yesss")
    }
    if(!pathname.includes("checkout")){
        dispatch(CheckoutChange(true));
        // console.log("noooo")
    }
    }, [pathname]);
  return null
}
export default CheckPath