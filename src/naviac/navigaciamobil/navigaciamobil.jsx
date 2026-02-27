import './navigaciamobil.css'

import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Ikony  from '../header/ikony/ikony'
import { RiShoppingBasket2Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import IkonaMobil from '../../naviac/ikonaMobil/ikonaMobil'
import { color } from 'framer-motion';
import { useMediaQuery } from "react-responsive";
import { MyContext } from '../providertelefon/providertelefon'
import { useContext } from "react";
import { GlobalContext } from '../reactcontext/reactcontext'
import { use } from 'react';
import Tlacidlo from '../../naviac/tlacidlo/tlacidlo'


const Navigaciamobil = ({otvorenie,setOtvorenie,hoverheader,sethoverheader,inputRef,farba,setFarba,setQuery,query,setDomov,pojdeme,poslednyref,aktivny,setAktivny,scrollToTop
}) => {
   
   const textmaly = useMediaQuery({ maxWidth: 750 });
    const isDesktop = useMediaQuery({ minWidth: 1160 });

       const { pocetOblubene, setPocetOblubene, filter, setFilter,presun } = useContext(GlobalContext);


   const {setSuborOpen,setObsahOpen, portal, setPortal,animacia,setAnimacia,mobil,setMobil,rezim,setRezim,open,setOpen,obsah,setObsah,ulozit,setUlozit} = useContext(MyContext);
   
   const navigate = useNavigate();

   const lajk = useRef(null)

  
useEffect(() => {
  function handleClickOutside(event) {
    if (lajk.current && !lajk.current.contains(event.target)) {
      setMobil(false); // klik mimo → zavrie
    }
  }

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);
   

const[pozadie,setPozadie] = useState(false)

const changeTheme = () => {
  if (!rezim) {
    document.documentElement.style.setProperty("--farba-main2", "var(--farba-main2ZMENA)");
    document.documentElement.style.setProperty("--farba-biela", "var(--farba-bielaZMENA)");
    document.documentElement.style.setProperty("--farba-siva", "var(--farba-sivaZMENA)");
    document.documentElement.style.setProperty("--farba-sivaText", "var( --farba-sivaTextZMENA)");
    document.documentElement.style.setProperty("--farba-cierna", "var( --farba-ciernaZMENA)");
    document.documentElement.style.setProperty("--farbaSPECIALNABIELA", "var(   --farbaSPECIALNABIELAZMENA)");
  } else {
    document.documentElement.style.setProperty("--farba-main2", "var(--farba-main2kopia)");
    document.documentElement.style.setProperty("--farba-biela", "var(--farba-bielakopia)");
    document.documentElement.style.setProperty("--farba-siva", "var( --farba-sivakopia)");
    document.documentElement.style.setProperty("--farba-sivaText", "var(   --farba-sivaTextkopia)");
    document.documentElement.style.setProperty("--farba-cierna", "var(--farba-ciernakopia)");
    document.documentElement.style.setProperty("--farbaSPECIALNABIELA", "var(--farbaSPECIALNABIELAkopia)");
  }
  setDarkMode(!rezim);
};


const funkcianaotovrenie = () => {
  navigate("/Profil"),
setOpen(true),setObsah("detail"),setFarba(5),setUlozit("ulozit")
  
}

const centrum = () => {
    navigate("/Centrum"),setMobil(false)
}

  const formular = () => {
  setSuborOpen(true),setMobil(false),
  setObsahOpen("formular")
}

  return (
    <>
    {textmaly &&  <AnimatePresence>
       
         <motion.div
          ref={lajk}
          className="obalzecoaako"
          initial={{ opacity: 1, x: 40 }}
          animate={{ x: mobil === "open" ? -220 : 40 }}
          transition={{ duration: 0.3 }}
        >
          <div className='obsahtlacidloo'>

        

            <Tlacidlo
            stiloko = {{display:"none"}}
            
              onClick={() =>  {navigate("/Konverzacie"),setMobil(false)}}
            ikona={<i class='bx bx-message' ></i>}
            text = {"Správy"}
            ></Tlacidlo>

            <Tlacidlo
                     stiloko = {{display:"none"}}
            onClick={() =>  {navigate("/Profil"),setMobil(false)}}
            ikona={<i class='bx bx-user' ></i>}
            text = {"Profil"}
            ></Tlacidlo>

            <div style={{padding:"5px 0px",width:"100%"}}>
              {/* <div style={{height:"1px",backgroundColor:"var(--farba-siva)"}}></div> */}
            </div>


{/* tujetocelel */}
             <Tlacidlo
                      stiloko = {{display:"none"}}
                      onClick={() => funkcianaotovrenie()}
            ikona={<i class='bx bx-cog' ></i>}
            text = {"Nastavenia účtu"}
            ></Tlacidlo>
{/* tujetocelel */}
            <Tlacidlo
                     stiloko = {{display:"none"}}
            ikona={<i class='bx bx-info-circle'></i>}
            onClick={() => centrum()}
            text = {"Centurm pomoci"}
            ></Tlacidlo>

      

            <Tlacidlo
                     stiloko = {{display:"none"}}
            onClick = {() =>  {setRezim(prev => !prev),changeTheme()} }
            ikona={
              rezim ?
           <i class='bx bx-moon' ></i> :  <i class='bx bx-sun' ></i>
          }
            text = {  rezim ?
           "Tmavý" : "Svetlý"}
            ></Tlacidlo>

            <div style={{padding:"10px 0px",width:"100%"}}>
              {/* <div style={{height:"1px",backgroundColor:"var(--farba-siva)"}}></div> */}
            </div>


             <Tlacidlo
                      stiloko = {{display:"none"}}
            //  zobrazenie = {{display:"none"}}
            ikona={<i class='bx bx-log-out' ></i>}
            onClick={() => formular()}
            text = {"Odhlásiť sa"}
            ></Tlacidlo>


          </div>

          

         
        </motion.div>
      </AnimatePresence>}
  
    
    <div className='kokokokoo90092'>
          <div className='buzna'>
            <div className='buzna2'>

              <IkonaMobil
               sztylicek = {{display:"none"}}
              onClick = {() => {setAktivny(1),navigate("/"),setDomov("domov"),scrollToTop()}}

              // stylecek = {{color:aktivny === 1  ? "var(--farba-cierna)" : "var(--farba-sivaText)"}} 
              style = {{color:aktivny === 1  ? "var(--farba-cierna)" : "var(--farba-sivaText)"}}           
              ikona = {<i class='bx bx-home-alt'></i>}
              text = {"Domov"}
              stylecek = {{display:"none"}}
              
              ></IkonaMobil>

              <IkonaMobil
                // sztylicek = {{display:"none"}}
                podmienka={presun.length > 0}
                zobrazenie = {presun.length}

              onClick={() => {setAktivny(2),
                      navigate("/Rezervacie")
                   
                    }}
               stylecek = {{display:"none"}}
              
            
              style = {{color:aktivny === 2 ? "var(--farba-cierna)" : "var(--farba-sivaText)"}}  
              ikona={<RiShoppingBasket2Line  />}
              text = {"Rezervácie"}
              ></IkonaMobil>
              {/* <IkonaMobil
                   onClick={() => {setAktivny(3),
                      
                      navigate("/Konverzacie")
                    }}
            
              style = {{color:aktivny === 3 ? "var(--farba-cierna)" : "var(--farba-sivaText)"}}  
            ikona={<i class='bx bx-chat'></i>}
              text = {"Správy"}
              ></IkonaMobil> */}

              <IkonaMobil
              // sztylicek = {{display:"none"}}
               stylecek = {{display:"none"}}
              podmienka={pocetOblubene > 0}
              
                   onClick = {() => {setAktivny(4),navigate("/Upozornenia")}}
            
              style = {{color:aktivny === 4 ? "var(--farba-cierna)" : "var(--farba-sivaText)"}}  
              ikona={<i class='bx bx-heart' ></i>}
              text = {"Obľúbené"}
              zobrazenie = {pocetOblubene}
              ></IkonaMobil>

               <IkonaMobil
                   sztylicek = {{display:"none"}}
               stylecek = {{display:"none"}}
              
                onMouseDown={(e) => e.stopPropagation()}
                   onClick = {() => {setAktivny(6),setAnimacia(prev => (!prev),setMobil(false))}}
                  //  onClick = {() => {setAktivny(6),setAnimacia(prev => (prev === false ? "ano" : false))}}
                 
            
              style = {{color:aktivny === 6 ? "var(--farba-cierna)" : "var(--farba-sivaText)"}}  
            ikona={<i class='bx bx-cog'></i>}
              text = {"Profil"}
              ></IkonaMobil>
              

              <IkonaMobil
                  sztylicek = {{display:"none"}}
                  onClick={() => {
                    setAktivny(5);
                    setAnimacia(false),
                  setMobil(prev => (prev === "open" ? false : "open"));
                  }}
                   onMouseDown={(e) => {
                    e.stopPropagation();   // toto je to dôležité
                  }}
             stylecek = {{display:"none"}}
              
              style = {{color:aktivny === 5 ? "var(--farba-cierna)" : "var(--farba-sivaText)"}}  
            ikona={<i class='bx bx-user' ></i>}
              text = {"Profil"}
              ></IkonaMobil>

             
            </div>
        </div>
       
       
    </div>


    
    </>
  )
}

export default Navigaciamobil
