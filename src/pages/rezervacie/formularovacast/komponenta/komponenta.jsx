import './komponenta.css'
import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import Linka from '../../../../naviac/linka/linka';
const Komponenta = () => {
  return (
    <motion.div
             className='datumovacast'
               initial={{ opacity: 0, marginLeft: 0 }}
              animate={{
                opacity: datum ? 1 : 1,
                pointerEvents: datum ? "auto" : "none",
                    marginLeft: datum ? "10px" : "0px",
                width: datum ? "150px" : "0px" // alebo width: "1px" podľa potreby
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
             <div className='tuvyberasdatum'>{2026}</div>
                   <Linka></Linka>
              <div className='tusazbierakvsektok'>
                {/* {mesiace.map((item) => 
                <div className='tumapujemjakaco' 
                onMouseEnter={() => setStylik(item.id)}
                onMouseLeave={() => setStylik(null)}

                style={{
               backgroundColor: FinalDATUM === item.id 
                  ? "var(--farba-main)"         // vybrané vždy má prednosť
                  : stylick === item.id 
                    ? "var(--farba-main)"       // hover, ak nie je vybrané
                    : "var(--farba-biela)",
                 color: FinalDATUM === item.id ? "white" : (stylick === item.id ? "white" : "var(--farba-sivaText)")

                }}
                onClick={() => {setDatumUDAJ(item.mesiac),setFinalDATUM(item.id),setMounth(item.id)} }
                >{item.mesiac}</div>
                )} */}

              </div>
         
            </motion.div>

  )
}

export default Komponenta
