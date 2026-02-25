import './biela.css'

import React from 'react'

const Biela = ({obrazok,textpvacast,onClick,farbaobrazok,onMouseLeave,onMouseEnter,style}) => {
  return (
    <div className='biellla' onClick={onClick} onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter} style={style}>
        <div className='drzicikkkokmm'>
        
            <div style={farbaobrazok} className='abytoboolovsreder'>{obrazok}</div>
            <span className='textteexrtbase2'style={farbaobrazok}>{textpvacast}</span>
        </div>

        <div style={farbaobrazok}><i class='bx bx-chevron-right' ></i></div>
      
    </div>
  )
}

export default Biela
