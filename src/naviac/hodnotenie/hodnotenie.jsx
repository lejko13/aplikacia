import './hodnotenie.css'


import React from 'react'

const Hodnotenie = ({text,ikona}) => {
  return (
     <div style={{display:"flex", flexDirection:"row",alignItems:"center", gap:"var( --gap-malicka)"}}>
        <span style={{ fontSize: '13px', color: 'gold' }}>
          
          {ikona}
          </span>
        <span style={{ whiteSpace: 'nowrap' ,fontSize:"var(--font-size-small)",color:"var(--font-size-base3)",color: 'var( --farba-sivaText)'}}>{text}</span>  
    </div>
  )
}

export default Hodnotenie
