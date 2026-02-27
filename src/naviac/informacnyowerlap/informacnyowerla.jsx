import './informacnyowerlap.css'
import { motion, AnimatePresence } from "framer-motion";
import React from 'react'
import { Children } from 'react';

const Informacnyowerla = ({show,children,setOtvaram,props}) => {
  return (
   <AnimatePresence>
     {show && <motion.div
          className="owerlapcosavysuva"
            initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => {setOtvaram(false),props && props();}}
        >
          
          
{children}

        </motion.div> }
        
     
    </AnimatePresence>
  )
}

export default Informacnyowerla
