import React, {useState, useEffect } from 'react';
import ProductOne from './ProductOne';
import './productsSection.css'
import { useSelector } from 'react-redux';
function ProductsSection(props) {
    //  let {Checkout}=useSelector(state=> state.container)
    //  let [localCheckout ,setCheckout]=useState(Checkout)

//  useEffect(()=>{
//      setCheckout(Checkout)
//  },[Checkout])
return (
        <div className="ProductsSection">
            <div className='container'>
            <ProductOne image='./images/image-headphones.png' title='Headphone' path='/headphones'/>
            <ProductOne image='./images/image-speakers.png' title='speakers' path='/speakers'/>
            <ProductOne image='./images/image-earphones.png' title='earphones' path='/earphones'/>
            </div>
        </div>
    );
}

export default ProductsSection;