// import React from 'react'
// import { Link } from 'react-router-dom'
// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import './footer.css'
// function Footer() {
//   return (
//     <div className='footer'>

//       <div className='footer-head'>
//       <div className='container'>
//         <div className='footer-logo'><Link to='/'>audiophile</Link></div>
//             <ul className= "listFooter" >
//                 <li><Link to='/' >Home</Link></li>
//                 <li><Link to='/headphones'>Headphones </Link></li>
//                 <li><Link to='/speakers'>Speakers</Link></li>
//                 <li><Link to='/earphones'>Earphones</Link></li>
//             </ul>
//         </div>

// <div className='footer_body'>
// <div className='container'>
// <div className='footer_paragraph'>
// Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
// </div>
// <div className='social-media'>
// <FacebookIcon  className='facebook'/>
// <InstagramIcon className='instagram'/>
// <TwitterIcon className='twitter'/>
// </div>
// </div>
// </div>
// <div className='copyRight'>
//   <div className='container'>
// Copyright 2021. All Rights Reserved
//   </div>
// </div>

//       </div>
//         {/* <div className='container'>
//         <div className='footer-logo'><Link to='/'>audiophile</Link></div>
//             <ul className= "listFooter" >
//                 <li><Link to='/' >Home</Link></li>
//                 <li><Link to='/headphones'>Headphones </Link></li>
//                 <li><Link to='/speakers'>Speakers</Link></li>
//                 <li><Link to='/earphones'>Earphones</Link></li>
//             </ul>
//         </div> */}
//     </div>
//   )
// }

// export default Footer;

import React from 'react'
import { Link } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import './footer.css'
function Footer() {
  return (
    <div className='footer'>
      <div className='footer-head'>
      <div className='container'>
        <div className='footer-logo'>
        <div className='linetop'></div>
          <Link to='/'>audiophile</Link>
          </div>
            <ul className= "listFooter" >
                <li><Link to='/' >Home</Link></li>
                <li><Link to='/headphones'>Headphones </Link></li>
                <li><Link to='/speakers'>Speakers</Link></li>
                <li><Link to='/earphones'>Earphones</Link></li>
            </ul>
        </div>
        </div>
<div className='footer_body'>
<div className='container'>
<div className='footer_paragraph'>
Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
</div>
<div className='social-media'>
<FacebookIcon  className='facebook'/>
<InstagramIcon className='instagram'/>
<TwitterIcon className='twitter'/>
</div>
</div>
</div>
<div className='copyRight'>
  <div className='container'>
Copyright 2023. All Rights Reserved
  </div>
</div>

    </div>
  )
}

export default Footer;