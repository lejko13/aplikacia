import './hybesdva.css'

import React from 'react'
import { motion } from "framer-motion";
import {useDatePicker} from '../../formularovacast/providerfrom/providerfrom'
import Linka from "../../../../naviac/linka/linka";
import { Children } from 'react';


import { useMediaQuery } from "react-responsive";

const Hybesdva = ({logika,sirka,text,children}) => {

    const isMobile = useMediaQuery({ maxWidth: 1000 });
  

  const {datum, setDatum, rok, setRok,otvorenie, setOtvorenie,krajina, setKrajina,otovreniedatumu, setOtovreniedatumu} = useDatePicker()
  return (
    <motion.div
    className='dvaojkkaka'
    initial={{opacity: 1}}
  animate={{
    // width:"fit-content",
    width: logika ? "fit-content" : "0px",
   marginLeft: logika ? "10px" : "0px",
   
    
  }}
  transition={{ duration: 0.2 }}
    
    >
          <Linka></Linka>
      <div className='obashvovacastleokok'
      style={sirka}>
        <div className='horeidnofnicvai'>
          {text}
        </div>
            <Linka></Linka>

            <div className='tujemagiaavpireio'>
              {children}
              
            </div>
      </div>


   

      
    </motion.div>
  )
}

export default Hybesdva
