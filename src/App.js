import { BrowserRouter, Routes , Route } from 'react-router-dom';
import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './Comps/Header';
import Landing from './Comps/Landing';
import Speakers from './Comps/Speakers';
import Earphones from './Comps/Earphones';
import Pop from './Comps/POPWindow/Pop';
import ProductsSection from './Comps/ProductsSection';
import { useDispatch, useSelector } from 'react-redux';
import HeadphonesOne from './Comps/HeadphonesOne';
// import HeadphonesMain from './Comps/HeadphonesMain';
import Headphones from './Comps/Headphones';
import PopFull from './Comps/POPWindow/PopFull';
import Headphonestwo from './Comps/Headphonestwo';
import Message from './Comps/message/Message';
import DashboardMessage from './Comps/DashboardMessage';
import { PopShow, ShowPopfull } from './redux/Slice';
import HeadphonesThree from './Comps/HeadphonesThree';
import EarphonesOne from './Comps/earphonesOne';
import SpeakersOne from './Comps/SpeakersOne';
import SpeakersTwo from './Comps/SpeakersTwo';
import About from './Comps/About';
import Footer from './Comps/Footer';
import Features from './Comps/Features';
import ScrollToTop from './Comps/ScrollToTop';
import CheckPath from './Comps/CheckPath';
import Checkout from './Comps/Checkout';
import Details from './Comps/Details';
// import PopFull from './Comps/POPWindow/PopFull';
function App() {
  let {ListShow ,counter ,ProductInfromation , Checkoutt}  =useSelector(state => state.container)
  let [localCheckout ,setCheckout]=useState(Checkoutt)
  let dispatch = useDispatch();
// flash product section
let [EffectOpactiy5,setEffectOpacity5] = useState(true)
let [scr,setScr]=useState(0)
const scrollFunction = ()=>{
  setScr(window.scrollY)
}
// console.log("app Product",ProductInfromation)

useEffect(()=>{
  window.addEventListener("scroll",scrollFunction)
  if(scr>=830){
    setEffectOpacity5(false)
  }
// console.log(scr)
},[window.scrollY])
useEffect(()=>{
  setCheckout(Checkoutt)
},[Checkoutt])
// console.log(Checkoutt);
  return (
    // <BrowserRouter>
    <>
    <ScrollToTop/>
    <CheckPath/>
    <div className="App">
      <div className={ListShow ?"Animation-list " : " Animation-list-hide"}>
      <div className="overlay-list"></div>
      <ProductsSection/>
      </div>
      <Header />
      <Routes>
        <Route path='/' element={<Landing/>} /> 
        <Route path='/headphones' element={<Headphones/>} />
 <Route path='/headphones/headphonesOne' element={<HeadphonesOne/>}/>
 <Route path='/headphones/headphonesTwo' element={<Headphonestwo/>}/>
 <Route path='/headphones/headphonesThree' element={<HeadphonesThree/>}/>
        <Route path='/speakers' element={<Speakers/>} />
        <Route path='/speakers/zx9-speaker' element={<SpeakersOne/>} />
        <Route path='/speakers/zx7-speaker' element={<SpeakersTwo/>} />
        <Route path='/earphones' element={<Earphones/>} />
 <Route path='/earphones/yx1-earphones' element={<EarphonesOne/>}/>
 <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
    <Pop/>
<PopFull/>
    {/* <PopFull/> */}
    <div className={localCheckout?"ProductsSection":"hidden"}>
    <div className={EffectOpactiy5?'ProductsSectionHome':"ProductsSectionHome opacity"}>
    <ProductsSection />
    </div>
    </div>
    <DashboardMessage/>
    {/* <div className={localCheckout?"about":"hidden"}> */}
    <About/>
    {/* </div> */}
    <Footer/>
   
    </div>

<div>


</div>

</>

    // </BrowserRouter>
    
  );
}

export default App;
