import React from 'react'
import { Link } from 'react-router-dom'
import "./Suggestion.css"
import { useState } from 'react';
import { useEffect } from 'react';
function Suggestion({img,title,path}) {
  let [width,setWidth] = useState(window.innerWidth)
  let [localStorage,setLocalStorage] = useState(img)
  let [allow,setAllow] =useState(null)
  let fun = ()=>{
      setWidth(window.innerWidth)
    if((width>=768) || (width>0 && width<480)){
setLocalStorage(img)
setAllow(true)
}
    if(width<767 && width>480 ){
      setAllow(false)
      if(localStorage.includes("./images/image-xx99-mark-one.jpg"))  {
            setLocalStorage("./images/image-xx99-mark-one-youMayAlso.jpg")
          }
          if(localStorage.includes("./images/image-zx7.jpg")){
              // console.log("hellloo")
              setLocalStorage("./images/image-zx7-speakerYouMayAlso.jpg")
              }
              if(localStorage.includes("./images/image-zx9.jpg"))  {
                setLocalStorage("./images/image-zx9-speakerYouMayAlso.jpg")
                }
                if(localStorage.includes("./images/image-xx59.jpg"))  {
                  setLocalStorage("./images/image-xx59-headphonesYouMayAlso.jpg")
                }
                if(localStorage.includes("./images/image-xx99-mark-two.jpg")){
                  setLocalStorage("./images/image-xx99-mark-two-headphonesYoumayAlso.jpg")
                }
                }
                // console.log(localStorage)
      }
      useEffect(()=>{
      // console.log((width))
      window.addEventListener("resize",fun)
      fun();
      return(() => {
        window.removeEventListener('resize', fun);
    })

  },[window.innerWidth])
  return (
    <div className={allow?"Suggestion":"SuggestionChange"}>
<img className={allow?"img":"imgChange"} src={localStorage}/>
<p>{title}</p>
<div className='cover-btn'><Link to={path} className='btn'>SEE PRODUCT</Link></div>
    </div>
  )
}
export default Suggestion