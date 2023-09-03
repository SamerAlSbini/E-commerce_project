import React from 'react';
import './Header.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link, useLocation } from 'react-router-dom';
import { useEffect ,useState  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MenuIcon from '@mui/icons-material/Menu';
import Pop from './POPWindow/Pop';
import { ChangeRemove, Click, list, PopShow,ShowPopfull} from '../redux/Slice';
import { Send } from '@mui/icons-material';
function Header(props) {
  let location = useLocation()
  let {removeValue,ListShow,showPopfull,show,counter,GlobalClick} = useSelector(state => state.container);
  let [send,setSend] = useState(false);
  let [send2,setSend2] = useState(false);
  let dispatch = useDispatch()
  const [width, setWidth] = useState(0)
  let [click , setClick] = useState(true);
  let [Allow,setAllow]=useState(null)
  let [va,setVa]=useState(false)
  let [Al,setAl]=useState(null)
  let [localRemove,setLocalRemove] = useState(removeValue)
  function handleResize() {
    setWidth(window.innerWidth)
    // console.log("scrollC",width)
  }
  useEffect(() => {
    setWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
      if(width<991){
        setAllow(true)   
        // console.log("AllowTruee",Allow) 
        }
         if(width>991){
   setAllow(false)
   // console.log("AllowFAlsee",Allow) 
        }
      },[width,show])
      useEffect(()=>{
        setLocalRemove(removeValue)
        // console.log(Al)
        console.log(localRemove)
        if((Al==true && localRemove==null)){
          if(!document.body.classList.contains("over")){
          document.body.classList.add("over")
          }
          else{
            if(document.body.classList.contains("over")){
              document.body.classList.remove("over")
            }
          }
        }
        // if(localRemove==true && Al==true ){
        //   console.log("jihuguygyugfiu")
        //   document.body.classList.remove("over")
        //   // dispatch(ChangeRemove(null))
        //   // setLocalRemove(null)
        // }
        // if(localRemove==true && Al==true && PopShow==true){
        //   document.body.classList.add("over")
        // }
    },[show,showPopfull])
    useEffect(()=>{
      if(counter == 0){
        setEmpty(false);
        }else{
          setEmpty(true);
        }
    },[counter])  
    // console.log("GlobalClick",GlobalClick);
useEffect(()=>{
  if(ListShow==true){
setClick(false)
  }
  else{
    setClick(true)
  }
},[ListShow])
let handelClick = () =>{
  // setVa(!va)///////////////// this is orginal//////////////////////////////
setClick(!click)
dispatch(list(!ListShow))// va: by default is false
}
let Active = ()=>{
  setSend2(showPopfull)
  dispatch(ShowPopfull(!send2))
  setSend(show)
  dispatch(PopShow(!send)) 
  setAl(true)
  if(counter>0){
    dispatch(ShowPopfull(true));
  dispatch(PopShow(false)) 
  }
  else{
    dispatch(ShowPopfull(false));
    dispatch(PopShow(true));
  }
}
let [empty,setEmpty] = useState(true);
    return (        
        <div className='header'>
            <div className='container'>
         {/* <MenuIcon  display='none' />        */}
          <i className={` ${(Allow ? "fas fa-bars": "hidden")} ${(click ? "fas fa-bars" : "fas fa-times")} `}onClick = {handelClick}/>
            <div className='header-logo'><Link to='/'>audiophile</Link></div>
            {/* <ul className={hello}> */}
            <ul className={Allow? 'hidden':'list'} >
                <li><Link to='/' className='list-one'>Home</Link></li>
                <li><Link to='/headphones'>Headphones </Link></li>
                <li><Link to='/speakers'>Speakers</Link></li>
                <li><Link to='/earphones'>Earphones</Link></li>
            </ul>
            <div className='header-icon'>
              <span className={empty?'cart_number':"hidden"}>{counter}</span>
              <Link><ShoppingCartOutlinedIcon className='cart' onClick={Active}  /></Link>
              </div>
            </div>
        </div>
    );
}

export default Header;