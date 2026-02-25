import React from 'react'
import './blokujem.css'

const Blokujme = ({odblokovat,style}) => {
  return (
    <div className='Blokujme' style={style}>
           <div className='VYTVOERTETEXT2'>
    <div style={{ textAlign: "center" }}>
      {`Pouzivatel je zablokovany...Chcete ho  `}
      <span
        className='pisemnkolentakm'
         onClick={odblokovat}
      >
        odblokovat?
      </span>
    </div>
  </div>
      
    </div>
  )
}

export default Blokujme
