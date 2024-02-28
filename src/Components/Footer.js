import React from 'react'
import { IoCallOutline } from "react-icons/io5"
import { FaFacebook } from "react-icons/fa"
import { TbWorldWww} from "react-icons/tb"
import "./Style.css"
import "./MobileStyle.css"
function Footer() {
  return (
    <div className='footer'>
      <div className='productTitle'>
<p>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
</p> 
</div>
<div className='fluidProduct'>
  <p>CHEMICALS & PROCESS <span>|</span>POWER WATER & WASTE WATER <span>|</span>OILS & GAS <span>|</span>PHARMA <span>|</span>SUGARS & DISTILLERIES<span>|</span> PAPER & PULP <span>|</span>MARINE & DEFENCE<span>|</span> METAL & MINING <span>|</span>FOOD & BEVERAGE<span>|</span> PETROCHEMICAL & REFINERIES <span>|</span>SOLAR<span>|</span> BUILDING<span>|</span> HVAC<span>|</span> FIRE FIGHTING<span>|</span> AGRICULTURE & RESIDENTIAL</p>
</div>
<ul className='contact'>
<li><a href=''><IoCallOutline/> Tollfree:1800 200 1234</a></li>
<li><a href=''><FaFacebook/> www.facebook.com/cripumps</a></li>
<li><a href=''><TbWorldWww/> www.crigroups.com</a></li>
 
</ul>
    </div>
  )
}

export default Footer