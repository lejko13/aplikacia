import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./lajknute.css";

import { useContext } from "react";
import { MyContext } from '../providertelefon/providertelefon'
import { GlobalContext } from '../reactcontext/reactcontext'

const Lajknute = ({ prisposobujem, children }) => {
  const { lajknute,texdo,setTextdo,kontext,setKontext,mala,setMala } = useContext(GlobalContext);
   const { suborOpen,setSuborOpen,obsahOpen,setObsahOpen} = useContext(MyContext);

  return (
    <AnimatePresence>
      {lajknute && (
        <motion.div
          style={prisposobujem}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="lajknute-container"
        >
      <div className="kokorvbhjbvfhjes">
        <div className="textovacastkokojnjk2">
          <div style={{color:"var(--farba-cierna)",fontSize:"14px",whiteSpace:"nowrap"}}> {mala ? "Pridané do obľúbených" : "Odstránené z obľúbených"}</div>
          
      <div style={{color:"var(--farba-sivaText)",fontSize:"var( --font-size-small)"}}>{texdo.name}</div>
        </div>
         {mala && <div className="zemointbutttin"
         onClick={() => {setSuborOpen(true),setObsahOpen("homelogika")}}
      
         ><span className="textlentakkoko">Zmeniť</span></div>}
      


        <div className="fotkacastlololooko">
          <img  className = "fotototfooofooto"src={texdo.fotky[0]} alt="" />
          
        </div>
      </div>
         

          
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lajknute;
