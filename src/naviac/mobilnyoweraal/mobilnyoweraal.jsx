import "./mobilnyoweraal.css";
import { createPortal } from "react-dom";
import Ukazovatelko from "../ukazovatelko/ukazovatelko";
import { motion, AnimatePresence, color } from "framer-motion";
import { use, useState } from "react";

function Overlapiceko ({ klik,stylecekokok,children, show,setOtvaram ,stilvyska,setOverlayContent}) {
 
  return createPortal(
    <AnimatePresence>
    
        <motion.div
        style={stilvyska}
          className="moj-overlap"
            initial={{ opacity: 1, y: 1000 }}
          animate={{ y: show  ? 0 : 1000 }}
          transition={{ duration: 0.6 }}
        
        >
          <div className="obalicekcelhoe" style={stylecekokok}>
          <Ukazovatelko

            onClick={klik}
            style = {{
              color:"var(--farba-cierna)",
              fontSize:"15px"
            

            }}
          ><i class='bx bx-arrow-back'></i></Ukazovatelko>
          </div>
          <div className="stredovypanelelel">
          {children}
          </div>
          
{/* <div style={{height:"50px",backgroundColor:"yellow"}}>koko</div> */}

        </motion.div>
 
    </AnimatePresence>,
    document.getElementById("mobilportal")
  );
}

export default Overlapiceko;
