import React, {useRef, useEffect, useState } from 'react'
import "./Checkout.css"
import { Link, useLocation } from 'react-router-dom'
import Details from './Details'
import { useDispatch, useSelector } from 'react-redux'
import FinalDetails from './FinalDetails'
import { PopShow, TitleArray, ZeroCounter, total } from '../redux/Slice'
function Checkout() {
  let [Allow,setAllow] =useState(true)
  // let {pathname} =useLocation()
  let dispatch = useDispatch()
  let {showPopfull,counter, pricee,ProductInfromation,show} = useSelector(state => state.container)
let [vat,setVat] =useState(0)
let [fifty,setfifthy] =useState(50)
let [grandTotal,setGrandTotal] = useState(0)
let [countt ,setcountt] = useState("")
let [Alloww,setAlloww]= useState(false)
// correct inputs (full inputs)
let [name,setName] =useState(true)
let [pass,Setpass] = useState(null)
let [city,SetCity] = useState(true)
let [adress,SetAdress] = useState(true)
let [country,SetCountry] = useState(true)
let [phone,SetPhone] = useState(true)
let [zip,SetZIP]  =useState(null)
let [pin,Setpin]  =useState(null)
let [Emoney,SetEmoney]  =useState(null)


//values of inputs 
let [email,setEmail] = useState("")
let [namee,setNamee] = useState("")
let [ZipValue,setZipValue] = useState("")
let [PhoneValue,setPhoneValue] = useState("")
let [addressValue,SetaddressValue] = useState("")
let [CityValue,SetCityValue] = useState("")
let [CountryValue,SetCountryValue] = useState("")
let [e_moneyValue,Sete_moneyValue] = useState("")
let [e_moneyPinValue,Sete_moneyPinValue] = useState("")
let ref  =useRef()
let ref2  =useRef()
// console.log("zip null",zip)
// console.log("phone true",phone)
// console.log("address true",adress)
// console.log("emoney null",Emoney)
// console.log("name true",name)
// console.log("country true",country)
// console.log("city true ",city)
// console.log("pass null",pass)
// console.log("pin null",pin)

// functions for  warning inputs 
function ChangeFunction2(ele){
  if(Alloww==true){
    if(ele.target.value==""){
      SetPhone(false)
      }
      else if(!ele.target.value==""){
      SetPhone(true)
      }
  }
}
function ChangeFunction3(ele){
  if(Alloww==true){
    if(ele.target.value==""){
setName(false)
      }
      else if(!ele.target.value==""){
setName(true)
      }
  }
}
function ChangeFunction4(ele){
  if(Alloww==true){
    if(ele.target.value==""){
      SetCity(false)
      }
      else if(!ele.target.value==""){
      SetCity(true)
      }
  }
}
function ChangeFunction5(ele){
  if(Alloww==true){
    if(ele.target.value==""){
      SetCountry(false)
      }
      else if(!ele.target.value==""){
        SetCountry(true)
      }
  }
}
function ChangeFunction6(ele){
  if(Alloww==true){
    if(ele.target.value==""){
      SetAdress(false)
      }
      else if(!ele.target.value==""){
        SetAdress(true)
      }
  }
}
function ChangeFunction(ele){
  if(Alloww==true){    
    let emailFormat = /\w+@\w+.(com|net)/i
    if(ele.target.value.match(emailFormat)){
    Setpass(null)
    ele.target.classList.remove("warningg");
    }
    if(ele.target.value==""){
    Setpass(false)
    ele.target.classList.add("warningg");
    }
    if(!ele.target.value=="" ){
    if(!ele.target.value.match(emailFormat)){
      Setpass(true)
      ele.target.classList.add("warningg");
      }
      else{
    Setpass(null)
    ele.target.classList.remove("warningg");
    }
    }
}
}   
    function ZipCode(ele){
      let zipcode = /\d{5}/i; 
        // console.log(zip)
    if(ele.target.value==""){
    SetZIP(false)
    }
    if(ele.target.value!="" ){
      if(ele.target.value.match(zipcode)){
        if(ele.target.value.toString().length!==5){
          SetZIP(true)
          // console.log(ele.target.value)
        }
        else if(ele.target.value.toString().length==5){
          SetZIP(null)
        }
        }
  }
}
function E_money(ele){
  // if(Alloww==true){
    
    
    let e_money = /\d{9}/i;
    if(ele.target.value==""){
    SetEmoney(false)
    // ele.target.classList.add("warningg");
  }
    if(ele.target.value!="" ){
      if(ele.target.value.match(e_money)){
        if(ele.target.value.toString().length!=9){
          SetEmoney(true)
          // ele.target.classList.add("warningg");
        }
        else if(ele.target.value.toString().length==9){
          SetEmoney(null)
          // ele.target.classList.remove("warningg");
        }
      }
    }
  }    
function ChangePin(ele){


    let pinNumber = /\d{4}/ig;
      if(ele.target.value==""){
        Setpin(false)
    }
      if(ele.target.value!="" ){
        if(ele.target.value.match(pinNumber)){
          if(ele.target.value.toString().length!=4){
            Setpin(true)
          }
          else if(ele.target.value.toString().length==4){
            Setpin(null)
          }
          }
      }    
}
useEffect(()=>{
  console.log("hiugiu",Allow)
if(Allow==true){//emony
    ref.current.checked="true"
    ref2.current.checked=!ref.current.checked
}
  // else if(Allow==false){
  //   ref2.current.checked="true"
  //   ref.current.checked="false"
  // }
},[Allow])
useEffect(()=>{

if(Alloww==true){
  if(namee==""){
    setName(false)
  }
  else if(!namee==""){
    setName(true)
  }
if(PhoneValue==""){
  SetPhone(false)
}
else if(!PhoneValue==""){
  SetPhone(true)
}
if(addressValue==""){
  SetAdress(false)
}
  else if(!addressValue==""){
    SetAdress(true)
}
if(CountryValue==""){
  SetCountry(false)
  }
  else if(!CountryValue==""){
    SetCountry(true)
  }
  if(CityValue==""){
  SetCity(false)
}
else if(!CityValue==""){
  SetCity(true)
}
    let zipcode = /\d{5}/ig;
    if(ZipValue==""){
      SetZIP(false)
    }
    if(!ZipValue=="" ){
      if(ZipValue.match(zipcode)){
        if(!ZipValue.toString().length==5){
          SetZIP(true)
        }
        else if(ZipValue.toString().length==5){
          SetZIP(null)
        }
        }
    }
    let pinNumber = /\d{4}/ig;
    if(e_moneyPinValue==""){
    Setpin(false)
    }
    if(!e_moneyPinValue=="" ){
      if(e_moneyPinValue.match(pinNumber)){
        if(!e_moneyPinValue.toString().length==4){
          Setpin(true)
        }
        else if(e_moneyPinValue.toString().length==4){
          Setpin(null)
        }
        }


}
let emailFormat = /\w+@\w+.(com|net)/i
if(email==""){
    Setpass(false)
    }
    if(!email=="" ){
    if(!email.match(emailFormat)){
      Setpass(true)
      }
      else if(email==""){
    Setpass(null)
    }
    }
    let e_money = /\d{9}/i;
    if(e_moneyValue==""){
    SetEmoney(false)
    }
    if(!e_moneyValue=="" ){
      if(e_moneyValue.match(e_money)){
        if(!e_moneyValue.toString().length==9){
          SetEmoney(true)
        }
        else if(e_moneyValue.toString().length==9){
          SetEmoney(null)
        }
        }
    }
  }
  },[Alloww])
let active = (e)=>{
  if(pricee==0){
    e.target.classList.add("preventClicking")
  }
  else if(pricee!=0){
e.target.classList.remove("preventClicking")
  }
  setAlloww(true)
  // console.log("zip null",zip)
  // console.log("phone true",phone)
  // console.log("address true",adress)
  // console.log("emoney null",Emoney)
  // console.log("name true",name)
  // console.log("country true",country)
  // console.log("city true ",city)
  // console.log("pass null",pass)
  // console.log("pin null",pin)
 if(Allow==true){// hide cache and show e-money
if(email!="" &&  Emoney==null && pin==null  && zip==null && phone==true && country==true  && adress==true && city==true && pass==null  && name==true){
  if(pricee!=0){
    dispatch(TitleArray(`You paid ${Number(vat + pricee + fifty).toLocaleString()} successfully`));
     dispatch(ZeroCounter(0));
     setVat(0)
     setfifthy(0)
    setGrandTotal(0)
  }
}
else{
  window.scrollTo(0, 0)
}
 }
else if(Allow==false){
if(email!=""  && zip==null && phone==true && country==true  && adress==true && city==true && pass==null  && name==true){
  if(pricee!=0){
    dispatch(TitleArray(`You paid ${Number(vat + pricee + fifty).toLocaleString()} successfully`));
     dispatch(ZeroCounter(0));
     setVat(0)
     setfifthy(0)
    setGrandTotal(0)
  }
}
else{
  window.scrollTo(0, 0)
}
}
//  }
  }
  // console.log("class information  ",ProductInfromation)
  // console.log(countt)
  useEffect(()=>{
    setVat(pricee / 5)
    // setGrandTotal(Number(vat + pricee + fifty).toLocaleString())

  },[])
  return (
    <div className='Checkout'>
<div className='container'>
<div className='Go_back'>
    <Link to="/" >Go back</Link>
      </div>
<div className='localcontainer'>
<div className='information'>
  <h1>CHECKOUT</h1>
<div className='section'>

  <p className='secondTitle'>BILLING DETAILS</p>

  <div className='BILLING DETAILS'>

<div className='top'>
    <div className='input'>
      <div className='MessageBar'>
    <span className={name?"label":"warningName"}>Name</span><span className='warning'>{
    name?"":"Field cannot be empty"}</span>
      </div>
<input type='text' placeholder='your Name' className={name?'':"warningg"}
  onChange={(e)=>{
  // setName(e.target.value)
  setNamee(e.target.value)
  ChangeFunction3(e)}} />
    </div>
    <div className='input'>
      <div className='MessageBar'>
      <span className={pass?"warningName":pass == null?"label":"warningName"}>Email address</span><span className='warning'>{
pass? "wrong Format": pass == null ?"":"Field cannot be empty"
    }</span>
      </div>
<input type='email' placeholder='oodo@gmail.com' className={pass==true || pass==false?"warningg":""} 
onChange={(e)=>{
  setEmail(e.target.value)
  ChangeFunction(e)}}  />
    </div>
</div>
<div className='input'>
      <div className='MessageBar width '>
      <span className={phone?"label":"warningName"}>Phone Number</span><span className='warning'>{
      phone?"":"Field cannot be empty"}</span>
      </div>
   <input type='text' placeholder='+1 222 222 222'className={phone?"":"warningg"}  onChange={(e)=>{
  setPhoneValue(e.target.value)
//  SetPhone(e.target.value)
  ChangeFunction2(e)}}/>
    </div>
  </div>
</div>
<div className='section'> 
  <p className='secondTitle'>SHIPPING INFO</p>
<div className='BILLING DETAILS'>
<div className='input'>
    <div className='MessageBar'>
    <span className={adress?"label":"warningName"}>Your Address</span><span className='warning'>{
    adress?"":"Field cannot be empty"}</span>
    </div>
<input type='text' className={adress?"fullWidth ":"warningg full"} placeholder="damascus"  onChange={(e)=>{
  // SetAdress(e.target.value)
  SetaddressValue(e.target.value)
  ChangeFunction6(e)}}/>
  </div>
<div className='top'>
  <div className='input'>
    <div className='MessageBar'>
    <span className={zip?"warningName":zip == null?"label":"warningName"}>Zip Code</span><span className='warning'>{
zip? "wrong Format": zip == null ?"":"Field cannot be empty"
    }</span>
    </div>
<input type='text' placeholder='00001'   className={zip==true || zip==false?"warningg":""} onChange={(e)=>{
  if(e.target.value){
    SetZIP(true)
  }
  setZipValue(e.target.value)
  // console.log(zip)
  ZipCode(e)}}/>
  </div>
  <div className='input'>
    <div className='MessageBar'>
    <span className={city?"label":"warningName"}>City</span><span className='warning'>{
    city?"":"Field cannot be empty"}</span>
      </div>
<input type='text' placeholder='new york' className={city?"":"warningg"} onChange={(e)=>{
  // SetCity(e.target.value)
  SetCityValue(e.target.value)
  ChangeFunction4(e)}} />
  </div>
</div>
<div className='input'>
    <div className='MessageBar width'>
    <span className={country?"label":"warningName"}>Country</span><span className='warning'>{
    country?"":"Field cannot be empty"}</span>
    </div>
<input type='text' placeholder='united states' className={country?"":"warningg"} onChange={(e)=>{
  // SetCountry(e.target.value)
  SetCountryValue(e.target.value)
  ChangeFunction5(e)}}/>
  </div>
</div>
</div>
<p className='secondTitle'>PAYMENT DETAILS</p>
<div className='section'>
<div className='payment'>Payment Method</div>
<form action="">
<div onClick={()=>{setAllow(true)}} >
  <input   ref={ref} type="radio" id="method1" name="payMethod" value="e-money"  />
  <label htmlFor="method1"> e-Money</label> 
</div>
<div onClick={()=>{setAllow(false)}}>
  <input   ref={ref2} type="radio" id="method2" name="payMethod" value="cash-on-delivery" />
  <label htmlFor="method2"> Cash on Delivery</label>
</div>
</form>
</div>
<div className='showTime'>
  <div className={Allow?"hidden":"cache"}>
<div className='svgImage'>
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
<path fillRule="evenodd" clipRule="evenodd" d="M42.2812 8.4375H46.5938C47.3704 8.4375 48 9.06713 48 9.84375C48 10.6204 47.3704 11.25 46.5938 11.25H45.0938V23.9062C45.0938 24.6829 44.4641 25.3125 43.6875 25.3125H33.8438V40.9688C33.8438 41.7454 33.2141 42.375 32.4375 42.375H25.0773C24.4239 45.5805 21.5831 48 18.1875 48H1.40625C0.629625 48 0 47.3704 0 46.5938C0 45.8171 0.629625 45.1875 1.40625 45.1875H18.1875C20.021 45.1875 21.585 44.012 22.1653 42.375H8.4375C7.66087 42.375 7.03125 41.7454 7.03125 40.9688C7.03125 40.1921 7.66087 39.5625 8.4375 39.5625H12.5625C13.3379 39.5625 13.9688 38.9317 13.9688 38.1562C13.9688 37.3808 13.3379 36.75 12.5625 36.75H9.43444C6.87619 36.75 4.37297 37.6373 2.38575 39.2485C1.78247 39.7376 0.896906 39.6454 0.407719 39.0419C-0.0814688 38.4385 0.0110625 37.553 0.614344 37.0639C2.84203 35.2578 5.58806 34.1792 8.4375 33.9741V18.375C8.4375 17.5984 9.06713 16.9688 9.84375 16.9688H18.375V7.03125C18.375 6.25462 19.0046 5.625 19.7812 5.625H28.1223C31.9334 2.02078 36.9875 0 42.2641 0H46.5938C47.3704 0 48 0.629625 48 1.40625C48 2.18287 47.3704 2.8125 46.5938 2.8125H42.2642C38.805 2.8125 35.4975 3.79453 32.658 5.625H38.0625C38.8326 5.625 39.4688 6.25228 39.4688 7.03125C39.4688 7.52423 39.3372 7.69561 38.4891 8.80021C38.0648 9.3528 37.4613 10.1389 36.6052 11.3157C36.2039 11.8513 36.3433 12.6075 36.8974 12.9688C37.4088 13.3025 38.0923 13.1781 38.4534 12.6856L41.1473 9.01219C41.4121 8.65088 41.8333 8.4375 42.2812 8.4375ZM32.4375 16.9688C32.9273 16.9688 33.3582 17.2195 33.6099 17.5993C35.4415 15.9118 34.2652 12.7969 31.7344 12.7969C29.5943 12.7969 28.2687 15.1348 29.3533 16.9688H32.4375ZM21.1875 8.4375H35.2472C35.0152 8.75898 34.8251 9.00687 34.6644 9.21646C34.3106 9.67792 34.0992 9.95371 33.896 10.4204C29.6796 8.64131 25.1696 12.4771 26.337 16.9688H21.1875V8.4375ZM22.5938 25.4062V19.7812H19.7812V25.4062H22.5938ZM31.0312 39.5625H16.5403C17.5098 36.8283 15.4711 33.9375 12.5625 33.9375H11.25V19.7812H16.9688V26.8125C16.9688 27.5891 17.5984 28.2188 18.375 28.2188H24C24.7766 28.2188 25.4062 27.5891 25.4062 26.8125V19.7812H31.0312V39.5625ZM33.8438 20.7288V22.5H42.2812V12.2217L40.7213 14.3488C39.9301 15.4278 38.6519 16.0371 37.2972 15.9602C37.1467 18.1043 35.7894 19.9393 33.8438 20.7288Z" fill="#D87D4A"/>
</svg>
</div>
<p>
The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.
</p>
  </div>

  <div className={Allow?"e-money":"hidden"}>

  <div className='input'>
    <div className='MessageBar'>
    <span className={Emoney?"warningName":Emoney == null?"label":"warningName"}>E_money Number</span><span className='warning'>{
Emoney? "wrong Format": Emoney == null ?"":"Field cannot be empty"
    }</span>
    </div>
<input type='text' placeholder='230987654' className={Emoney ==true || Emoney==false?"warningg":""}   onChange={(e)=>{
  if(e.target.value){
    SetEmoney(true)
  }
  Sete_moneyValue(e.target.value)
  E_money(e)}} />
  </div>
  <div className='input'>
    <div className='MessageBar'>
    <span className={pin?"warningName":pin== null?"label":"warningName"}>e_money pin</span><span className='warning'>{
pin? "wrong Format": pin == null ?"":"Field cannot be empty"
    }</span>
    </div>
<input type='text' placeholder='e-money pin' className={pin==true || pin==false ?"warningg":""} onChange={(e)=>{
  if(e.target.value){
    Setpin(true)
  }
  Sete_moneyPinValue(e.target.value)
 ChangePin(e)}} />
  </div>
  </div>
</div>
</div>
<div className='summary'>

<div className='summary_Final'> 
<h2>Summary</h2>
{
  ProductInfromation.map((ele) =>
    <FinalDetails img={ele.Image} price={ele.Price}  p={ele.Title} counterNumber={ele.num} id={ele.Id} />
  )
  }

 <div className='summary_Total'> 
    <span className={pricee==0?"messageEmpty":"hidden"}>{"no items in cart"}</span>
  <div className='Name_Price'>
<span className='string'>TOTAL</span>
<span>$ {Number(pricee).toLocaleString()}</span>
  </div>
  <div className='Name_Price'>
  <span className='string'>SHIPPING</span>
<span>$ {fifty}</span>
</div>
<div className='Name_Price'>
<span className='string'>VAT</span>
<span>$ {Number(vat).toLocaleString()}</span>
</div>
<div className='Name_Price'>
<span className='string'>GRAND TOTAL</span>
<span className='total_orange'>$ {Number(vat + pricee + fifty).toLocaleString()} </span>
</div>
<input type='submit'  value="PAY"  className='CheckoutFinal'onClick={active}/> 
  </div> 
</div>
</div>
</div>
</div>
    </div>
  )
} 

export default Checkout