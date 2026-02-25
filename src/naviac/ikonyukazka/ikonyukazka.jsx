import './ikonyukazka.css'


import React from 'react'

const Ikonyukazka = ({children,style}) => {
  return (
    <div className='Ikonyukazka' style={style}>
        {children}
      
    </div>
  )
}

export default Ikonyukazka
