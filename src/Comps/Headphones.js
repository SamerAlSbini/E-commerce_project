import React from 'react';

import '../App.css'
import ProductBox from './ProductBox';
import Title from './Title';
import ProductsSection from './ProductsSection';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import About from './About';
function Headphones(props) {
    return (
        <div className='headphones'>
            <Title name='Headphones'/>
<ProductBox title = 'XX99 MARK II HEADPHONES'
            p='The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound'
            image='./images/image-xx99-mark-two.jpg'path="/headphones/headphonesOne" />
        <ProductBox id="theSecondBox" title = "XX99 MARK I HEADPHONES" p="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go
        "
        image="./images/image-xx99-mark-one.jpg" path="/headphones/headphonesTwo"/>
        <ProductBox title="XX59 HEADPHONES" 
        p="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move" 
        image="./images/image-xx59.jpg" path="/headphones/headphonesThree"/>
        {/* <ProductsSection/> */}
        
    </div>
    );
}

export default Headphones;