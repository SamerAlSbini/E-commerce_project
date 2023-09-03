import React from 'react';
import { Link } from 'react-router-dom';
import '../Comps/ProductBox.css'
function ProductBox({title , p , image,id,path}) {
    return (
        <div className='ProductBox' id={id}>
            <div className='container'>
            <div className='image'><img src={image}/></div>
            <div className='text1'>
            <p className='par1'>New product</p>
                <h1 className='h1'>{title} </h1>
                <p className='desc'>
                    {p}
                </p>
                <div className='cover-btn'><Link to={path} className='btn'>SEE PRODUCT</Link></div>
            </div>
            </div>
        </div>
    );
}

export default ProductBox;