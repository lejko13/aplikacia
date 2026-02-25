import './klikacka.css'


import React, { Children } from 'react'

const Klikacka = ({children,style,onMouseLeave,onMouseEnter,onClick}) => {
  return (
    <div className='Klikacka'style={style} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {children}
      
    </div>
  )
}

export default Klikacka
