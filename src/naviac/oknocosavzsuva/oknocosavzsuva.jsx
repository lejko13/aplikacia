import './oknocosavzsuva.css'

import { motion, AnimatePresence } from 'framer-motion';

import React, { useState, useEffect, useRef,useContext } from 'react';
import { GlobalContext } from '../../naviac/reactcontext/reactcontext';

const Oknocosavzsuva = ({children}) => {

    const { presun,setPresun,cena,setCena,kvalita,setKvalita,prize,setPrize,zobrazovanie,setZobrazovanie,otvrenie,setOtvorenie } = useContext(GlobalContext); 
  return (
<>
    {otvrenie 
      &&   <div className='Oknocosavzsuva'
    
    
    >
      {children}
    </div>
      
    }
    </>
  
  )
}

export default Oknocosavzsuva
