import React, { useEffect, useState } from 'react'
import "../Comps/Details.css"
import { useDispatch, useSelector } from 'react-redux'
import { Counter , CounterMins, DetailsCounter,Con, FinalTotal, LastFinalTotal ,ChangeBtn, ShowPopfull, PopShow, TitleArray, ConChange} from '../redux/Slice'
import { json, useLocation } from 'react-router-dom'
function Details({
    img,
    p,
    price,
    id,
    counterNumber
}) {
  let pathname = useLocation()
  let {counter,IdArray ,Iddd , Idnumber ,conn} = useSelector(state => state.container)
let [con,setcon]= useState(0); //con  0
// console.log("------------------")
let [Allow ,setAllow]=useState(true);
let dispatch = useDispatch();
let {detailsBtn} = useSelector(state => state.container);    // console.log("idddd",IdArray);
let [btn,setBtn]  =useState(detailsBtn);
let [local ,setlocal] = useState(Idnumber)
let [AllowZero,setAllozero] = useState(null)

  localStorage.setItem(`${id}`,con);
  useEffect(()=>{
  let  data = JSON.parse(localStorage.getItem(`${id}`));
setcon(data)
})

useEffect(()=>{
  if(id!==Iddd){
    const data = JSON.parse(localStorage.getItem(`${id}`));
    if(data !==null){
      setcon(JSON.parse(data))
    }
  }

  
  if(id===Iddd){
    let  data = JSON.parse(localStorage.getItem(`${id}`));

    setAllow(true);
    if(detailsBtn==false){
setcon(con + Idnumber)
        }
        if(counter==0){
          dispatch(PopShow(true))//cart  empty is active
          dispatch(ShowPopfull(false))
        }
      }
    },[counter],[detailsBtn])

    return (
    <div className={con==0?"hidden":"details"} id={id} > 
<div className='details_title'>
<img src={img}/>

<div className='details-text'>
    <p>{p}</p>
    <span className='price'>$ {price}</span>
</div>
</div> 
        <div className='details-counter'>
<button onClick={()=>{ dispatch(CounterMins(counter - 1))
  dispatch(FinalTotal(price) )
  setcon(con  - 1)
dispatch(ChangeBtn(true))
}}>-</button>
<div className='price_number'>{
Allow ?  con
: false
}</div>
<button onClick={()=> {dispatch(CounterMins(counter + 1))
  dispatch(LastFinalTotal(+price))
dispatch(ChangeBtn(true))
setcon(con  + 1)
}}>+</button>
</div>
</div>
  )
}

export default Details