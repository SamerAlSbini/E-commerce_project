import React from 'react'
import { useSelector } from 'react-redux'
import Message from './message/Message';
import "../Comps/DashboardMessage.css";
function DashboardMessage() {
  let {titleArray}=useSelector(state =>state.container);
  // console.log(titleArray);
  // console.log("hello");
  // let arr= [id];
  return (
    <div className='dashboard'>
    {
        titleArray.map((ele)=>
            <Message title={ele} 
            />
)
    }
    </div>
  )
}

export default DashboardMessage