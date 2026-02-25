import './upravitdole.css'

import React, { Children } from 'react'

const Upravitdole = ({children,upravitdole,style}) => {
  return (
    <div className='noakotobudevyzera'>
        <div className='text50000base' style={style}>   {upravitdole}</div>
   
      <div className='tusutextylennmo'>   {children}</div>
   
    </div>
  )
}

export default Upravitdole
