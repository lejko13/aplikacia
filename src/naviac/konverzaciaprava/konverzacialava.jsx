import React from 'react'
import './konverzaciaprava.css'
const Konverzaciaprava = ({onClick,children,fotka,style}) => {
  return (
   <div className='Konverzaciaprava' style={style}>
        
        <div  className='casttexticeokPRAVA'> 
          <span>{children}</span>
          </div>
        <div className='castfotkaaaPRAVA' onClick={onClick}>
            <div className='lenikonnanananna'><img className='fotekcastkleenona3232' src={fotka} alt="" />
            <div className='hoverinkaakoolennicvivi'></div>
            
            </div>
            
        </div>
     
    </div>
  )
}

export default Konverzaciaprava
