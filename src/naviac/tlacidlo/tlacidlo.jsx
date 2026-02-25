import './tlacidlo.css'

import React from 'react'
import Oznamenie from '../../naviac/oznamenie/oznamenie'


const Tlacidlo = ({ikona,text,zobrazenie,onClick,stiloko}) => {
  return (
    <div className='Tlacidlo' onClick={onClick}>
        <span style={zobrazenie} className='Tlacidlotlacidlo'>{ikona}</span>
        <span  className='snowboard'>{text}</span>
        <div style={stiloko}>
          <Oznamenie
          style={{right:"10px",}}
          ></Oznamenie>
      </div>
    </div>
  )
}

export default Tlacidlo
