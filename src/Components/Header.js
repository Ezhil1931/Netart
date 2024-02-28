import React from 'react'
import "./Style.css"
import "./MobileStyle.css"
import logo from './Assets/logo.png'
function Header() {
  return (
    <div className='header'>
<div className='logo'>
<img src={logo}/>
</div>
<div className='title'>
<p> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</p>
</div>

<div className='para'> 
    <li> C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
    <li>  C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. 
</li>
</div>
</div>
  
  )
}

export default Header