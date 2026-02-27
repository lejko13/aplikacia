import './ikonaMobil.css'

import React from 'react'
import Oznamenie from '../../naviac/oznamenie/oznamenie'

const IkonaMobil = ({zobrazenie,sztylicek,ikona,text,style,stylecek,onClick,celocek,onMouseDown,podmienka}) => {
  return (
    <div className='IkonaMobil' style={celocek}
     onMouseDown={onMouseDown}
  onClick={(e) => {
    e.stopPropagation(); // zabráni "bublaniu" hore
    onClick && onClick(); // spustí vlastný handler
  }}

    >
        <div  className = "ikkoonnaa" style={style}>{ikona}</div>
        <div  className = "ikonaaaaloca" style={stylecek}>{text}</div>
        <div style={sztylicek}>
          {podmienka &&   <Oznamenie
          style={{top:"0px",height:"14px", width: "14px",top:"-2px",right:"-2px"}}
          >{zobrazenie}</Oznamenie>}
         
          </div>
        
      
    </div>
  )
}

export default IkonaMobil
