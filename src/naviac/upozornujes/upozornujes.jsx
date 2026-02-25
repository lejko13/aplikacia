import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import './upozornujes.css'

import { useContext } from "react";
import { MyContext } from '../providertelefon/providertelefon'
import { GlobalContext } from '../reactcontext/reactcontext'

const Uporoznujes = ({ prisposobujem, children }) => {
  const { lajknute,texdo,setTextdo,kontext,setKontext,mala,setMala,  kontorla,setKontrola,kontorlaText,setKontrolaText } = useContext(GlobalContext);
   const { suborOpen,setSuborOpen,obsahOpen,setObsahOpen,zobraziekamosa,setZobraziekamosa,
       ukazkameno,setUkazkameno,ukazkamenoODSTRANENEI,setUkazkamenoODSTRANENIE,vypisovaniechyby,setVypisovaniechyby
   } = useContext(MyContext);

  return (
    <AnimatePresence>
      {kontorla && (
        <motion.div
          style={prisposobujem}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="lajknute-container22"
        >
      <div className="kokorvbhjbvfhjes">
        {kontorlaText === "kontola"  && 
         <div className="hhuibxiubmrv"> 
          <div className="booob"><i class='bx bx-x'></i></div>
          <span>  Apartmán sa nachádza v zozname</span>
          </div>}
        {kontorlaText === "existuje"  && <div>Rovnaký názov už existuje</div>}
        {kontorlaText === "jetuzrezervacii"  && <div>Apartmán je v rezerváciách</div>}
        {kontorlaText === "prazdny"  && <div>Zoznam je prázdny</div>}
          {kontorlaText === "vypln"  && <div>Pridajte položku</div>}
          {kontorlaText === "iny"  && <div>Nesprávny kód</div>}
          {/* {kontorlaText === "iny"  && <div>Nesprávny kód</div>} */}
          {kontorlaText === "uspecnepridany"  && 
          <div className="preidanykupon"
          >Zľavový kupón bol prijatý</div>}
            {kontorlaText === "odstrani"  && <div style={{display:"flex",width:"100%",height:"100%"}}>{zobraziekamosa}</div>}
            {kontorlaText === "blok"  && <div style={{display:"flex",width:"100%",height:"100%"}}>{zobraziekamosa}</div>}

             {kontorlaText === "kamos"  && 
          <div className="preidanykupon"
          >{zobraziekamosa}</div>}
          
             {kontorlaText === "odblok"  && 
          <div className="preidanykupon"
          >{zobraziekamosa}</div>}

             {kontorlaText === "kamosOdstranieeni"  && 
          <div className="preidanykupon2"
          >{zobraziekamosa}</div>}

          {/* {kontorlaText === "iny"  && <div>Nesprávny kód</div>} */}

                {kontorlaText === "vyplnvsetkyudaje"  && <div>Vyplň všetky údaje</div>}
                {kontorlaText === "informaciesuulozene"  && 
          <div className="preidanykupon"
          >Informácie sú uložené</div>}

          
                {kontorlaText === "aktualne"  && 
          <div className="preidanykupon"
          >Informácie sú aktualne</div>}

          {/* pridanie praiatela profil 2  */}

                {kontorlaText === "pridaniekamosa"  && 
          <div className="preidanykupon"
          >{ukazkameno}</div>}

           {kontorlaText === "odsraneenipriatela"  && <div style={{display:"flex",display:"flex",width:"100%",height:"100%",alignItems:"center",justifyContent:"center"}}>{ukazkameno}</div>}

           {kontorlaText === "odsraneenipriatela2"  && <div style={{display:"flex",display:"flex",width:"100%",height:"100%",alignItems:"center",justifyContent:"center"}}>{ukazkameno}</div>}
            {/* pridanie praiatela profil 2  */}

           {kontorlaText === "vyberkedy" && <div>Zvoľ dátum príchodu</div>}

            {kontorlaText === "zvolobchod" && <div>Zvoľ dátum odchodu</div>}


            {kontorlaText === "kontolaformularu" && <div>{vypisovaniechyby}</div>}

                 
       
     
      </div>
         

          
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Uporoznujes;
