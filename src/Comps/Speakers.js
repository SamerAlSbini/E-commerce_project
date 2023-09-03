import React from 'react';
import Title from './Title';
import '../App.css'
import ProductBox from './ProductBox'
import ProductsSection from './ProductsSection';
function Speakers(props) {
    return (
        <div className='speakers'>
            <Title name="Speakers"/>
            <ProductBox 
            image='./images/image-zx9.jpg'
            title="ZX9 SPEAKER"
            p='Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups'
            path="/speakers/zx9-speaker"
            />
            <ProductBox id="theSecondBox" image='./images/image-zx7.jpg'
            title="ZX7 SPEAKER"
            p='Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.'
            path='/speakers/zx7-speaker'
            />
            {/* <ProductsSection/> */}
        </div>
    );
}

export default Speakers;