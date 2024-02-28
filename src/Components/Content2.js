import React from 'react'
import "./Style.css"
import "./MobileStyle.css"
import productImg from './Assets/product.png'

function Content2() {
  return (
    <div
    className='content2'>

<div className='thirdPara'>
  <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. 
</p>
</div>
<div className='thirdImg'>
  <img src={productImg}/>
</div>

<div className='productName'>
  <p>
Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p><hr/>
</div>

    </div>
  )
}

export default Content2