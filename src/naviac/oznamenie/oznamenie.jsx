import './oznamenie.css'
import React from 'react'
import { motion } from 'framer-motion'  // 🔥 toto chýbalo

const Oznamenie = ({children,style}) => {
  return (
    <motion.div
    style={style}
    className='Oznamenie'
      initial={{ opacity: 0, x: 0 }}   // začiatok animácie (posunuté doprava)
      animate={{ opacity: 1, x: 0 }}    // finálny stav
      exit={{ opacity: 0, x: 0 }}      // pri odchádzaní (plynulé zmiznutie)
      transition={{ duration: 0.3 }}
    >
        {children}

    </motion.div>
  )
}

export default Oznamenie
