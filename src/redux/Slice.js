import { createSlice } from '@reduxjs/toolkit'
export const Slice = createSlice({
    name:"E-Commerce",
    initialState:{
show:false,
showPopfull:false,
ListShow:false,
pricee:0,
counter:0,
currentImage:0,
id:0,
ProductInfromation:[],
IdArray:[],
detailsCounter:0,
Iddd:0,
Idnumber:0,
detailsBtn:true,
title:null,
titleArray:[],
Checkoutt:null,
conn:0,
removeValue:null
// GlobalClick:true,
    },
    reducers:{
PopShow:(state,action)=>{
state.show = action.payload
},
ShowPopfull:(state,action)=>{
    state.showPopfull = action.payload;
},
list:(state,action)=>{
state.ListShow = action.payload
},
total:(state ,action )=>{
    state.pricee = (state.pricee  + action.payload)
},
Counter:(state,action)=>{
  state.counter =   (state.counter +  action.payload) 
},
ZeroCounter:(state,action)=>{
state.counter  = action.payload;
state.pricee = action.payload;
state.ProductInfromation.length=action.payload;
state.IdArray.length=action.payload;
},
CounterMins:(state,action)=>{
   state.counter = action.payload 
},
FinalTotal:(state ,action)=>{
   state.pricee = (state.pricee - action.payload)
},
LastFinalTotal:(state,action)=>{
   state.pricee = (state.pricee + action.payload)
},
ID:(state,action)=>{
    state.id = action.payload;
},
Information:(state,action)=>{
if(!state.IdArray.includes(action.payload.Id)){
    state.ProductInfromation.push(action.payload);
}
// setTimeout(()=>{
// state.ProductInfromation.shift();
// },10000)
},
IdArrayPush:(state,action)=>{
   if (!state.IdArray.includes(action.payload)){
state.IdArray.push(action.payload)
   }
},
DetailsCounter:(state,action)=>{
state.detailsCounter = state.detailsCounter + action.payload;
},
IDDD:(state,action)=>{
state.Iddd = action.payload
},
IDNumber:(state,action)=>{
    state.Idnumber  = action.payload;
},
ChangeBtn:(state,action)=>{
state.detailsBtn = action.payload
},
Title:(state,action)=>{
   state.title = action.payload; 
},
TitleArray:(state,action)=>{
   state.titleArray.push(action.payload); //{title:"frgfrg",id:435}
},
CheckoutChange:(state,action)=>{
state.Checkoutt = action.payload
},
Con:(state,action)=>{
state.ProductInfromation.map((ele)=>{
if(ele.Id==action.payload.localId){
ele.num = action.payload.localNumber
}    
})
},
ConChange:(state,action)=>{
state.conn =  state.conn + action.payload
},
ChangeRemove:(state,action)=>{
state.removeValue = action.payload
}
    }
})
export const {PopShow,ChangeRemove,ConChange,TitleArray,Con,CheckoutChange,Click,Title,list,ShowPopfull,ZeroCounter,ChangeBtn ,IDNumber,total ,Counter ,ID ,CounterMins,FinalTotal,LastFinalTotal,Information,IdArrayPush,DetailsCounter,IDDD} = Slice.actions;
export default Slice.reducer;