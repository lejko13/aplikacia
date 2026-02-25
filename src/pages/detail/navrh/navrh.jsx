import './navrh.css'

import React from 'react'

const Navrh = ({children,textbutton,onClick}) => {
  return (
    <div className='Navrh'>
        {children}
    <button className='tujebuttoneznacicoako' onClick={onClick}>{textbutton}</button>


      
    </div>
  )
}

export default Navrh
