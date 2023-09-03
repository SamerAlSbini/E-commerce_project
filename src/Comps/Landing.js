import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Landing.css'
import ProductsSection from './ProductsSection';
import MiddlePage from './MiddlePage.js';

function Landing(props) {   
        let [key,setKey] = useState(null);
        
        useEffect(()=>{
            setKey(false)
            // console.log("hello");
            setTimeout(() => {
            setKey(true)
            }, 2000);
        },[])

    return (
        <div className='parents '>
                    <div className={key ? "Landing  ":"landing2" }>
            <div className='container'>
            <div className='text'>
                <p className='par1'>New product</p>
                <h1 className='h1'>XX99 MARK II <br/>HEADPHONES</h1>
                <p className='desc'>
                Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
                </p>
                <div className='cover-btn'><Link to="/headphones/headphonesOne" className='btn'>SEE PRODUCT</Link></div>
            </div>
            </div>
        </div>
        <div className='overlay '></div>
        
        <MiddlePage/>
        {/* <ProductsSection/> */}
{/* <div className='Orange-speakers'>
<img src='./public/images/image-speaker-zx9.png'/>
<div className='des-text'>
    <p className='second-title'>
    ZX9 SPEAKER
    </p>
    <p className='details'>
    Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
    </p>

   <button className='cover-btn'>see Product</button>
</div>
</div>
 */}


        </div>

    );
}

export default Landing;