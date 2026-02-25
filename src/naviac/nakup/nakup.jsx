import React, { useState, useEffect, useRef, Children,useContext } from 'react';

import './nakup.css'
import Texticek from '../../naviac/texticek/texticek'
import { motion, AnimatePresence, color } from 'framer-motion';
import NahladSwiper from '../nahladSwiper/nahladSwiper'
import Ukazovatelko from '../ukazovatelko/ukazovatelko';
import Dalsi from '../../naviac/dalsi/dalsi'

import { useMediaQuery } from "react-responsive";
import { GlobalContext } from '../../naviac/reactcontext/reactcontext'
import Lenkosik from '../../naviac/lenkosik/lenkosik'
import Nakupswiper from '../../naviac/nakup/nakupswiper/nakupswiper'
import { data } from 'react-router-dom';
const Nakup = ({pocetnoci,odchod,prichod,onClick,zdielamelen,mozno,hlas,pripocitavamBATOLATA,odpocitavamBATOLATA,pripocitavamDETI,odpocitavamDETI,odpocitavamDOSPELE,datutjem,pridanie,jeden,dva,tri,nazovnazov,odsranenei,children,name,fotky,hodnotenie,location,penezi,hostia,pripocotamvamDOSPELI,menoDALSI,priezviskomenoDALSI,fotkamenoDALSI,popisekmenoDALSI}) => {


    const desktop = useMediaQuery({ minWidth: 88 });
    const zobrazenie = useMediaQuery({
      maxWidth: 829,
    })




  
  const { pocetOblubene, setPocetOblubene, filter, setFilter,owerlap,seTeraz,teraz ,setInfo,scrollToRef,
               informacie,majitel,otazky,doplnok,popokno,setPopokno
               ,ceny,setCeny, dospeli,setDospeli,deti,setDeti,batolata,setBatolata
               ,penaze,setPenaze,setPresun,presun,pocitam2,setPocitam2,otocene, setOtocene,cena,setCena,kvalita,setKvalita
             } = useContext(GlobalContext);

        

            //  

            const[novy,setNovy] = useState(null)
            const[pripocet,setPripocet] = useState({penezi})  

      
            

             //  

        const buttonRef = useRef(null);
          const menuRef = useRef(null);
        
          const plusDO = useRef(null)
          const minusDO = useRef(null)
        
          const plusDE = useRef(null)
          const minusDE = useRef(null)

          const reference = useRef(null);
            const tlacidlo = useRef(null);
            const menucko = useRef(null)


            const[otovreny,setOtovreny] = useState(true)
          const funkcia = () => {
    setNovy((prev) => !prev); // prepína true/false
setOtovreny((prev) => !prev)

  }



useEffect(() => {
  const handleClickOutside = (e) => {
    const refs = [menuRef, buttonRef]

    const klikolDnu = refs.some(
      ref => ref.current && ref.current.contains(e.target)
    )

    if (!klikolDnu) {
      setNovy(false) // čo chceš zavrieť
      setOtovreny(true)
    }
  }

  document.addEventListener("mousedown", handleClickOutside)

  return () => {
    document.removeEventListener("mousedown", handleClickOutside)
  }
}, [novy])

   const icon = {
      fontSize:"18px",
      color:"var(--farba-cierna)"
    }

    const pripoceoitavamm = (hodnota) => {
      setCena(prev => prev + hodnota) 

    }


    const kontrola = () => {
      
    }


    
  return (
    <div className='Nakup'>

    <AnimatePresence>
  {kvalita?.some(polozka => polozka.apartman.id === hlas) && (
    <motion.div
      key={hlas} // vždy unikátne, aby Framer vedel, ktorý element animovať
      className="totojeowerpalnnakliknete"
      initial={{ opacity: 0, y: 0 }}    // štart animácie
      animate={{ opacity: 1, y: 0 }}      // finálna pozícia
      exit={{ opacity: 0, y: 0 }}       // animácia pri odchode
      transition={{ duration: 0.2 }}
    >
      <span className='texticekkolaa'>Apartmán je pripravený na platbu</span>
    </motion.div>
  )}
</AnimatePresence>


 


      



    
        <Lenkosik
        style = {{backgroundColor:"transparent",boxShadow:"none"}}
        nazov = {name}
        fotky = {fotky}
        location = {location}
        hodnotenie = {hodnotenie}
        klikamamma = {onClick}

        ></Lenkosik>
      







      
      {/*  */}
      <div className='celkokokokolloksdrzak'>
        <div style={{width:"100%",display:"flex",justifyContent:"space-between"}}>
           <div>
          <span className='TEXTICEKNEAOVICEK' onClick={onClick}>{nazovnazov}</span>
            <p className='textpodhlavnuym'>         {jeden} /         {dva} /         {tri}</p>
        

      </div>

{desktop && <div style={{display:"flex",gap:"10px"}}>
          <Ukazovatelko
        onClick = {zdielamelen}
        style = {{color:"var(--farba-sivaText)",fontSize:"15px",backgroundColor:"var(--farba-main2)"}}
        ><i class='bx bx-share-alt' ></i></Ukazovatelko>

          <Ukazovatelko
        onClick = {pridanie}
        style = {{color:"white",fontSize:"15px",backgroundColor:"var(--farba-main)"}}
        ><i class='bx bx-clinic'></i></Ukazovatelko>

        <Ukazovatelko
        onClick = {odsranenei}
           style = {{color:"var(--farba-sivaText)",fontSize:"15px",backgroundColor:"var(--farba-main2)"}}
        ><i class='bx bx-trash' ></i></Ukazovatelko>


        </div> }


        

        

        
        </div>

       

      <div className='textceklencos2'>

                      
                    
                      <span  
                      // ref={tlacidlo}
                    
                      id='cena'
                    onClick={() => {
                      setPenaze(prev => !prev)}}
                      style={{fontSize:"var(--font-size-large)",color:"var(--farba-cierna)",textDecoration:"underline",cursor:"pointer"}}
              
                      >€{penezi.toFixed(2)}</span>
                      
                      <span  style={{fontSize:"var( --font-size-base2)",color:"var(--farba-sivaText)"}}>za {pocetnoci} noci</span>


      </div>

      


      {/*  */}

       <div className='horepocet2'>
                            <div className='horehorrehroe' style={{backgroundColor:"var(--farba-main)",borderRadius:"11px 11px 0px 0px"}}>
                                <div className='rovnaka'>
                                    <Texticek
                                hore = "Prichod"
                                horetextuic = {{color:"white"}}
                                tujelegikadolle =  {{color:"white"}}
                                dole = {prichod}
                                 ></Texticek></div>
                                <div className='rovnaka2'>
                                    <Texticek
                                     horetextuic = {{color:"white"}}
                                      tujelegikadolle =  {{color:"white"}}
                                hore = "Odchod"
                                dole = {odchod}
                                ></Texticek></div>

                            </div>
                            <div className='doledoledoel'>

                                <button 
                                ref={buttonRef}
                                className='mojButton'
                                  onClick={funkcia}>
                                    <Texticek
                                    hore ="Hostia"
                                    dole = {datutjem.hostia}
                                    ></Texticek>
                                <div><i  
                             style={{ transform: otovreny ? "rotate(0deg)" : "rotate(180deg)" ,
                              transition:"var(--transition)"
                             }}
                                class=' ikona bx bx-chevron-down' ></i></div>
                              

                                </button>

                                <AnimatePresence>
                                {novy && 
                                
                                  <motion.div
                                  ref={menuRef}
                                    initial={{ opacity: 0, y: 0 }}       // začiatok: neviditeľný, mierne posunutý dole
                                    animate={{ opacity: 1, y: 0 }}        // po zobrazení: plná viditeľnosť, v pozícii
                                    exit={{ opacity: 0, y: 0 }}          // pri miznutí: späť dole a vyblednutie
                                    transition={{ duration: 0.2, ease: "easeInOut" }} 
                                    style={{
                                        top:"65px",
                                        left: "-1px",                 // horizontálne na stred
                                        height:"fit-content",
                                        zIndex:"10",
                                        width: "calc(100% + 2px)", 
                                        backgroundColor:"var(--farba-biela)",
                                        padding:"10px",
                                        borderRadius:"10px",
                                        display:"flex",
                                        gap:"5px",
                                        border:"var( --border)",
                                        flexDirection:"column",
                                        position:'absolute'
                                    }}// plynulý prechod
                                    >
                                      <div className='skuskazas'>
                                         <Texticek
                                        hore ="Dospelí"
                                        dole ="Vek 13 r. a viac"
                                        eurovky = {5}
                                        penaze  = {"€"}
                                        loitko = {"/"}
                                        horetextuic = {{fontSize:"var(  --font-size-base)"}}
                                        ></Texticek>
                                       
                                        <div className='drzaknapocty'>
                                           <div className='renerecek'>
                                            {/* minus */}




                                            <Ukazovatelko
                                            ref={minusDO}
                                               style={{ backgroundColor: 
                                                
                                                  datutjem.dospeli === 1 ? "var(--farba-biela)" : "var(--farba-main2)" 
                                                }}
                                             onClick={odpocitavamDOSPELE}
                                             disabled={datutjem.hostia === 1 || datutjem.dospeli <= 1}
                                           
                                            >
                                            <i class='bx bx-minus'style = {icon} ></i>
                                            </Ukazovatelko>

                                           </div>
                                          {/* plus */}
                                          <div className='dizsplejko'>{datutjem.dospeli}</div>
                                           <div className='renerecek'>
                                              <Ukazovatelko 
                                                ref={plusDO}
                                             onClick={pripocotamvamDOSPELI }
                                             style={{ backgroundColor: 
                                                
                                                  datutjem.hostia === 5 ? "var(--farba-biela)" : "var(--farba-main2)" 
                                                }}
                                            //  onClick={() => { prisli(+1,+5); dospelaci(+1); }}
                                              disabled={ hostia >= 5}

                                            
                                              ><i class='bx bx-plus'style = {icon}></i></Ukazovatelko>
                                           </div>
                                        </div>

                                      </div>
                                      {/* hsjfsjbfjsa */}
                                      <div className='skuskazas'>
                                         <Texticek
                                        hore ="Deti"
                                        dole ="Vek 2 – 12 r."
                                        eurovky = {5}
                                        penaze  = {"€"}
                                        loitko = {"/"}
                                        horetextuic = {{fontSize:"var(  --font-size-base)"}}
                                        ></Texticek>
                                        <div className='drzaknapocty'>
                                           <div className='renerecek'>
                                                 <Ukazovatelko

                                                 style={{ backgroundColor: 
                                                
                                                  datutjem.deti === 0 ? "var(--farba-biela)" : "var(--farba-main2)" 
                                                }}

                                                 ref={minusDE}
                                                 disabled={ datutjem.deti === 0}
                                                     onClick={odpocitavamDETI}
                                                 ><i class='bx bx-minus'style = {icon} ></i></Ukazovatelko>
                                           </div>
                                          <div className='dizsplejko'>{datutjem.deti}</div>
                                           <div className='renerecek'>
                                                 <Ukazovatelko
                                                  style={{ backgroundColor: 
                                                  datutjem.hostia === 5 ? "var(--farba-biela)" : "var(--farba-main2)" 
                                                }}
                                                 ref={plusDE} disabled={datutjem.hostia === 5 }
                                                  onClick={pripocitavamDETI}
                                                 
                                                 ><i class='bx bx-plus'style = {icon}></i></Ukazovatelko>
                                           </div>
                                        </div>



                                      </div>
                                          {/* hsjfsjbfjsa */}
                                      <div className='skuskazas'>
                                         <Texticek
                                        hore ="Batoľatá"
                                        dole ="Do veku 2 r."
                                        eurovky = {5}
                                        penaze  = {"€"}
                                        loitko = {"/"}
                                        horetextuic = {{fontSize:"var(  --font-size-base)"}}
                                        ></Texticek>
                                        <div className='drzaknapocty'>
                                           <div className='renerecek'>
                                                 <Ukazovatelko
                                                  style={{ backgroundColor: 
                                                
                                                  datutjem.batolata === 0 ? "var(--farba-biela)" : "var(--farba-main2)" 
                                                }}

                                                 disabled={datutjem.batolata === 0}
                                                    onClick={odpocitavamBATOLATA}
                                                 ><i class='bx bx-minus'style = {icon} ></i></Ukazovatelko>
                                           </div>

                                          <div className='dizsplejko'>{datutjem.batolata}</div>

                                           <div className='renerecek'>
                                            
                                                 <Ukazovatelko
                                                 disabled={hostia >= 5}
                                                 style={{ backgroundColor: 
                                                
                                                  datutjem.hostia === 5 ? "var(--farba-biela)" : "var(--farba-main2)" 
                                                }}
                                                 onClick={pripocitavamBATOLATA}
                                                 >
                                                  <i class='bx bx-plus'style = {icon}></i></Ukazovatelko>
                                           </div>
                                        </div>

                                      </div>
                                      

                          

                                    


                                    
                                  
                                
                                    </motion.div>
                                  
                                    }
                                    </AnimatePresence>

                            </div>
                        </div>
      </div>



      {children}
      
    </div>
  )
}

export default Nakup
