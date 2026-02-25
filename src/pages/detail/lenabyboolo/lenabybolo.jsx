import './lenabybolo.css'

import React from 'react'
import Ukazka from '../ukazka/ukazka'

const Lenabybolo = ({children,fotka,meno,priezvisko,popisek,onClick2,indo44,info20}) => {
  return (
    <div className='lnetakabybolo'>
        {children}
      
          <Ukazka
          fotka = {fotka}
          meno = {meno}
          priezvisko = {priezvisko}
          popisek = {popisek}
          onClick2 = {onClick2}
          indo44 = {indo44}
          info20= {info20}
          ></Ukazka>
    </div>
  )
}

export default Lenabybolo
