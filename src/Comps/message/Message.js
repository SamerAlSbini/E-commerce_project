import React, { useRef } from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';
import "../message/Message.css";
import { useSelector } from 'react-redux';
import { useState } from 'react';
// import { TitleArray } from '../../redux/Slice';
function Message({title,id}) {
  let [Alo,setAlo] = useState(true);
  let {ProductInformation} = useSelector(state =>state.container);
  // let {randomID}=useSelector(state =>state.container);

setTimeout(()=>{
setAlo(false); 
},5000)
let hand = ()=>{
  setAlo(false);
}
  return (
    <div className={Alo?'Message':"hidden"} id={id}>
<CheckCircleIcon className='check'/>
<div className='paragraph'>
 {title} 
</div>
<CloseIcon className='CloseIcon' onClick={hand}/>
    </div>
  )
}
export default Message