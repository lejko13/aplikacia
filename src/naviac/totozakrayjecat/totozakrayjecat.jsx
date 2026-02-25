import './totozakrayjecat.css'
import React from 'react'
import { motion } from 'framer-motion'

const Totozakrayjecat = ({podmienka,priezviko,meno,odblokujmme}) => {
  return (
    <motion.div
  initial={{ opacity: 0 }}
  animate={{ 
    opacity: podmienka ? 1 : 0,
    backgroundColor: podmienka ? "transparent" : "transparent"
  }}
  exit={{ opacity: 0 }}
  transition={{ ease: "easeOut" }}
  className="okokokytryurtuyryu"
 style={{
  pointerEvents: podmienka ? "auto" : "none",

}}
>
    <div className='VYTVOERTETEXT'>
        <div style={{ textAlign: "center" }}>
           Pouzivatel {meno} {priezviko} je zablokovany...Chcete ho  <span className='pisemnkolentakm'  
        onClick={odblokujmme}> odblokovat? </span>  

        </div>
</div>
    
</motion.div>
  )
}

export default Totozakrayjecat

 