import React from 'react';
import ProductBox from './ProductBox';
import ProductsSection from './ProductsSection';
import Title from './Title';
import YouMayAlsoLike from './YouMayAlsoLike';

function Earphones(props) {
    return (
        <div className='earphones'>
            <Title name="Earphones"/>
            <ProductBox image="./images/image-yx1-earphones.jpg"
            p="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
            title="YX1 WIRELESS EARPHONES" path="/earphones/yx1-earphones"/>
            {/* <ProductsSection/> */}
<YouMayAlsoLike
  img1= "./images/image-xx99-mark-two.jpg "  path1="/headphones/headphonesOne" title1="xx99-mark-two"
  img2= "./images/image-xx99-mark-one.jpg " path2="/headphones/headphonesTwo"   title2="xx99-mark-one"
  img3= "./images/image-zx9.jpg "   path3="/speakers/zx9-speaker"  title3="zx9"
   
/>

        </div>
    );
}

export default Earphones;