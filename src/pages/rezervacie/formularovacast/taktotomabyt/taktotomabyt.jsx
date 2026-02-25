import { Children } from 'react'
import './taktotomabyt.css'

import React from 'react'

const Taktotomabyt = ({children,onClick,style,onMouseEnter,onMouseLeave}) => {
  return (
    <div className='notakzeta'
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    style={style}
    >
      {children}
    </div>
  )
}

export default Taktotomabyt
