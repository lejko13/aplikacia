import './informaciadvaa.css'
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect } from "react";
import { Children } from 'react';

const Informaciadvaa = ({klik,show,children,setOtvaram}) => {


  useEffect(() => {
  document.body.style.overflow = "hidden";

  return () => {
    document.body.style.overflow = "auto";
  };
}, []);


  return (
   <AnimatePresence>
     {show && <motion.div
          className="owerlapcosavysuva"
            initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={klik}
        >
          
          
{children}

        </motion.div> }
        
     
    </AnimatePresence>
  )
}

export default Informaciadvaa
