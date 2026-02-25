import './ukazka.css'

import React from 'react'

const Ukazka = ({krajina,fotka,onMouseEnter,onMouseLeave,onClick, farba ,setFarba,style,polozka}) => {
  return (
    <div className='kkokokoinoi' 
    onClick = {onClick}
    
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}

    style= {{
        backgroundColor: polozka === farba  ? "var(--farba-main2)" : "transparent"
    }}

    
    >
        <div className='fotkkoklen'>
            <img src={fotka} alt="" className='foktatata' />
            </div>
      <p style={{fontSize:"var( --font-size-small)",color:"var(--farba-cierna)"}}>{krajina}</p>
    </div>
  )
}

export default Ukazka
