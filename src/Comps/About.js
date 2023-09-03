import React, { useEffect, useRef, useState } from 'react'
import './About.css'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
function About() {
  let [EffectOpactiy4,setEffectOpacity4] = useState(true)
  let [scr,setScr]=useState(0)
  let {Checkoutt}=useSelector(state=> state.container)
  let [localCheckout ,setCheckout]=useState(Checkoutt)
  let [className,setClassName] = useState()
  let ref = useRef(null)
  let refNode = ref.current
  //  console.log(refNode)
  let {pathname}=useLocation()
//   useEffect(()=>{
//     setCheckout(Checkout)
//     // if(pathname.includes("/checkout")){
//     //   ref.current.className="adsd"
//     // }
//     // if(!pathname.includes("/checkout")){
//     //   ref.current.className="about"
//     // }
//     if(pathname.includes("/checkout")){
//       ref.current.className="aboutWithOutMargin"
//     }
// },[Checkout])
  const scrollFunction = ()=>{
    setScr(window.scrollY)
  }
  useEffect(()=>{
    let refNode = ref.current
    setCheckout(Checkoutt)
    // to delete margin from about
    if(pathname.includes("/checkout")){
      if(!refNode.classList.contains("aboutWithOutMargin")){
        refNode.classList.add("aboutWithOutMargin")
        // console.log(refNode)
      }
    }
    if(!pathname.includes("/checkout")){
      if(refNode.classList.contains("aboutWithOutMargin")){
        refNode.classList.remove("aboutWithOutMargin")
        // console.log(refNode)
      }
    }

    window.addEventListener("scroll",scrollFunction)
    if(scr>=1400){
      if(window.innerWidth>380){
        setEffectOpacity4(false)
      }
    }
    if(scr>=1900){
      if(window.innerWidth<380){
        setEffectOpacity4(false);
    }
    }

},[window.scrollY])
return (
  <div ref={ref} className={EffectOpactiy4?'about':'about opacity'}>
        <div className={localCheckout?"container":"hidden"}>
        <div className='txtAbout'>
    <h1>BRINGING YOU THE <span className='best'>BEST</span> AUDIO GEAR</h1>
    <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment</p>
</div>
        <div className='imageAbout'>
            <img src='./images/image-best-gear (1).jpg'/>
        </div>
        </div>
    </div>
  )
}
export default About; 