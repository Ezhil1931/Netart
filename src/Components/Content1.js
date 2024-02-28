import React from 'react'
import image from "./Assets/image.png"
import trophy from "./Assets/trophy.png"
import "./Style.css"
import "./MobileStyle.css"
function Content1() {
  return (
<div className='content1'>

  <div className='images'>

<div className='firstImg'>
  <img src={trophy}/>
</div>

<div className='secondImg'>
  <img src={image}/>
</div>
</div>


  <div className='secondPara'>
    <p>Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
	</p>
  </div>

  
    
    
    </div>
  )
}

export default Content1