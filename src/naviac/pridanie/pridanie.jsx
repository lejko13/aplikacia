import React, { useState } from 'react'
import './pridanie.css'
import Ukazovatelko from '../ukazovatelko/ukazovatelko'
import { color } from 'framer-motion'
const Pridanie2 = ({setHover,onClick,style,ikona}) => {
    const[hover2,setHover2] = useState(false)
  return (
    <div className='obalLen'
    style={style}
    onClick={onClick}
    onMouseEnter={() => {
        setHover2(true)
        setHover(true)
    }}
    onMouseLeave={() => {
        setHover2(false)
        setHover(false)
    }}
  
    >
        <Ukazovatelko
        style={{ 
            
            fontSize: "18px",
            color:"var(--farba-cierna)",
        backgroundColor: hover2  ? "transparent" : "var(--farba-siva" }}
        >
            
            {ikona}
            

        </Ukazovatelko>
      
    </div>
  )
}

export default Pridanie2
