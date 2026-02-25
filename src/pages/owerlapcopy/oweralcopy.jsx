import React, { useContext, useState } from 'react';
import { motion, AnimatePresence, color } from "framer-motion";
import { createPortal } from 'react-dom';
import { GlobalContext } from '../../naviac/reactcontext/reactcontext';
import './owerlapcopy.css'
import Ukazovatelko from '../../naviac/ukazovatelko/ukazovatelko';
import { MyContext } from '../../naviac/providertelefon/providertelefon'

const Owerlap2 = ({ children,style,dizajnicek,open}) => {
  const [hoverecek, setHoverecek] = useState(null);
  const { teraz, seTeraz } = useContext(GlobalContext);
 const { portal, setPortal} = useContext(MyContext);
  return createPortal(
    

    <AnimatePresence>
      
    {open && ( <motion.div
          onClick={() => setPortal(0)}
          className="Owerlap2"
          style={style}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        
         
        >
          <div  style = {dizajnicek}className='obsahtOwerlap' onClick={e => e.stopPropagation()}>
         {/* <Ukazovatelko
            
              onMouseEnter={() => setHoverecek(1)}
              onMouseLeave={() => setHoverecek(null)}
              style={{
                 zIndex: 300, 
                color:"var(--farba-cierna)",
                backgroundColor: hoverecek === 1 ?"transparent" : "var(--farba-main2)",
                position: "fixed",
                top: "20px",
                right: "20px"
              }}
         ><i class='bx bx-x'></i></Ukazovatelko> */}
            

       {children}
            
     
          </div>
        </motion.div>)}
     
       

    </AnimatePresence>,
     document.getElementById("overlay-root")

  );
};

export default Owerlap2;
