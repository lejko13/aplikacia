import React from 'react'
import './konverzacialava.css'
const Konverzacialava = ({children,fotka,onClick}) => {
  return (
    <div className='Konverzacialava'>
        <div className='castfotkaaa'>
      
            <div className='lenikonnanananna' onClick={onClick}>
              <img className='fotekcastkleenona3232' src={fotka} alt="" />
              <div className='lennahovertootot'></div>

            </div>
            
        </div>
        <div  className='casttexticeok'> {children}</div>
     
    </div>
  )
}

export default Konverzacialava
