import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './middlePage.css'
function MiddlePage() {
  let [effectOpactiy ,setEffectOpacity] = useState(true);
  let [effectOpactiy2 ,setEffectOpacity2] = useState(true);
  let [effectOpactiy3 ,setEffectOpacity3] = useState(true);
  // scroll function
  let [scr,setScr]=useState(0)
  const scrollFunction = ()=>{
    setScr(window.scrollY)
  }
  useEffect(()=>{
    window.addEventListener("scroll",scrollFunction)
if(scr>=150){
setEffectOpacity(false);
}
if(scr>=500){
  setEffectOpacity2(false);
  setEffectOpacity3(false);  
}
// console.log(scr)
},[window.scrollY])
return (
    <div className="middle">
        <div className='container'>
            <div className={effectOpactiy?'imageTop':'imageTop opacity'}>
            <img className='thirdPhoto' src='./images/image-speaker-10.jpg'/>
            <img className='secondphoto' src='./images/image-speaker-11.jpg'/>
                <img className='firstphoto' src='./images/image-speaker-zx7.jpg'/>
                <div className='textBtn'>
                    <p className='zx7speakers'>zx7 speaker</p>
                    <span className='seeProduct'><Link to="/speakers/zx7-speaker">see product</Link></span>
                    </div> 
            </div>
            <div className='imageDown'>
<div className={effectOpactiy2?'left':'left opacity'}>
<img src='./images/image-earphones-yx1.jpg'/>
</div>
<div className={effectOpactiy3?'right':'right opacity2'}>
<div className='textBtn2'>
<p className='YX1EARPHONES'>YX1 EARPHONES</p>
  <span className='seeProduct'><Link to="/earphones/yx1-earphones">see product</Link></span>
  </div>  
</div>



            </div>
            
        </div>
    </div>
  )
}

export default MiddlePage