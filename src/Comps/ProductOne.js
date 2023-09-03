import React from 'react';
import { Link } from 'react-router-dom';
import './ProductOne.css';
import { useDispatch, useSelector } from 'react-redux';
import { Click, list } from '../redux/Slice';

function ProductOne({image , title , path}) {
   
   let {ListShow,GlobalClick}= useSelector(state=> state.container)
   let dispatch  = useDispatch()
    return (
        <div className='productOne'>
            <img src={image}/>
            <div className='prodText'>
            <h4>{title}</h4>
            <Link to={path} className='shop' onClick={()=>{
dispatch(list(false));
// dispatch(Click(true));
            }}>Shop</Link>
            </div>
        </div>
    );
}

export default ProductOne;