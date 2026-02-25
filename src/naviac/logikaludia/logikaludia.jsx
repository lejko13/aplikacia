import './logikaludia.css'
import { motion, AnimatePresence } from "framer-motion";
import React from 'react'

const Logikaludia = ({animovace,style,children,onMouseEnter,lenta,onMouseLeave,fotecakkklentak,onClick,teext1,text2,text3,fotka}) => {
  return (
    <div className='Ludiakolonka' style={style} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onClick}>

        <div className='fotofotofototecak' style={fotecakkklentak}>
          <div className='llojvrbvi'></div>
            <img className='fotofotkakookopica' src={fotka} alt="" />
            {children}


            <motion.div 
             initial={{ opacity: 0, y: 0 }}   // štart: neviditeľné a posunuté hore
                                            animate={{ opacity: 1, y: 0 }}     // animácia: úplne viditeľné a na správnej pozícii
                                            exit={{ opacity: 0, y: 20 }}      // pri odchode: zmizne a posunie sa hore
                                            transition={{ duration: 0.3 }}  
            style={animovace} className='popouokonknomale'>okokoko</motion.div>
        </div>

        <div className='textovacast909i90' style={{display:"flex",flexDirection:"column",gap:"1.5px"}}>
            <div style={{display:"flex",gap:"5px"}}>
                <span className='horetextovacastikook' >{teext1}</span>
                <span className='horetextovacastikook' >{text3}</span>
            </div>
            <p className='doeltexovacast' style={lenta}>{text2}</p>

        </div>
      
    </div>
  )
}

export default Logikaludia
