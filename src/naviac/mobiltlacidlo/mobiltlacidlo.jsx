import './mobiltlacidlo.css'

import React from 'react'

const Mobiltlacidlo = ({text,onClick}) => {
  return (
    <button className='buttnecekosti'onClick={onClick}>{text}</button>
  )
}

export default Mobiltlacidlo
