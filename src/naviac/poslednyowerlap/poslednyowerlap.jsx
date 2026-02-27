import { createPortal } from "react-dom";
import { MyContext } from '../providertelefon/providertelefon'
import { useContext } from "react";


import React, { useState, useEffect, useRef } from 'react';

import { motion, AnimatePresence } from "framer-motion";
import './poslednyowerlap.css'
import Ukazovatelko  from "../ukazovatelko/ukazovatelko";
import Tujelogika from '../../naviac/tujelogika/tujelogika'
import Homelogika from '../../naviac/homelogika/homelogika'
import Uravitlogika from '../../naviac/upravitlogika/upravitlogika'
import Templatelogika from '../../naviac/templatelogika/templatelogika'
import { GlobalContext } from '../reactcontext/reactcontext'
import Maleokno from  '../../naviac/maleokno/maleokno'
import Form from '../../naviac/formular/formular'

import { useNavigate } from 'react-router-dom';
const portalRoot = document.getElementById("okokokoko");

const Poslednyowerlap = ({ open, onClose, children,focus }) => {
    const navigate = useNavigate();
       const { suborOpen,setSuborOpen,obsahOpen,setObsahOpen,subor,setSubor,nazovSuboru,setNazovSuboru,unikattne,setUnikatne,meno,dotadok,setDotadok,otazka,setOtazka,halava,setHlava} = useContext(MyContext);


          const { pocetOblubene, setPocetOblubene, filter, setFilter,owerlap,seTeraz,teraz ,popokno,setPopokno,
             lajknute,setLajknute,lajkujem,texdo,setTextdo,kontext,setKontext,oblubene,setOblubene,mala,setMala ,
             lentakoko,setLentakoko
            } = useContext(GlobalContext);
        
const funkce = () => setSubor(prev => prev.filter(item => item.id !== unikattne));
 const tatak = () => setOblubene((smola) => smola.filter((item) => item.id !== lentakoko))



 const klik = () => {
  if (!apartman) return;
  navigate(`/Detail/${apartman.id}`);
};





useEffect(() => {
  if (suborOpen) {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
  };
}, [suborOpen]);



const zatvorenie = () => {setSuborOpen(false),setObsahOpen("")}
  return createPortal(
    <AnimatePresence>
      {suborOpen && (
        <motion.div
        className="poslednyowerlap"
   
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
            //  onClick={() => setSuborOpen(false)}
        >
          {obsahOpen === "logikaNovehoSuboru" && 
          <>
           <Templatelogika
            klikatelko3 = {{display:"none"}}
           klikatelko2 = {{display:"none"}}
            text = "Vytvorenie zoznamu prianí"
            uprava={{ backgroundColor: "pink" }}
            spodocekosti = {{display:"none"}}
            infookliku = {() => {setObsahOpen("homelogika"),setNazovSuboru("")}}
            // alternativna = {{display:"block"}}
            // text4 = "Vytvoriť nový zoznam prianí"
            >
                  <Tujelogika
                  focus = {focus}
                  ></Tujelogika>
            </Templatelogika>

           </>
           }
          {obsahOpen === "Uravitlogika" && 
          <>
           <Templatelogika
            klikatelko3 = {{display:"none"}}
           klikatelko = {{display:"none"}}
            text = "Vytvoriť nový zoznam"
            uprava={{ backgroundColor: "pink" }}
            spodocekosti = {{display:"none"}}
            infookliku = {() => {setObsahOpen(""),setSuborOpen(false),setNazovSuboru("")}}
            // alternativna = {{display:"block"}}
            // text4 = "Vytvoriť nový zoznam prianí"
            >
              
                  <Uravitlogika
                  focus = {focus}
                  ></Uravitlogika>
            </Templatelogika>

           </>
           }
          {obsahOpen === "homelogika" &&  
          
            <Templatelogika

  klikatelko3 = {{display:"none"}}
            klikatelko = {{display:"none"}}
            text = "Uložiť do zoznamu"
      
            spodocekosti = {{display:"none"}}
            // alternativna = {{display:"block"}}
            
            ><Homelogika
              focus = {focus}
              klikammmmmoo = {() => console.log("koko")}
            text4 = "Vytvoriť nový zoznam prianí"
            ></Homelogika>
            </Templatelogika>}


     {obsahOpen === "maleokno" &&  
          
            <Templatelogika
            stylecekokok = {{width:"300px",padding:"10px",gap:"15px"}}
          letkokonitna = {{ height: "20px" }}
            klikatelko = {{display:"none"}}
            klikatelko2 = {{display:"none"}}
            text = "Odstrániť tento zoznam"
      
            spodocekosti = {{display:"none"}}
            // alternativna = {{display:"block"}}
            
            >
              {/* <Maleokno
            text2 = {"Odstrániť tieto priania?"}
            text1 = {`Zoznam ${meno} bude natrvalo odstránený`}
            onClick = {() => zatvorenie()}
            onClick2 = {() => {zatvorenie(),funkce()}
            }
            ></Maleokno> */}

            <Uravitlogika
            input = {{display:"none"}}
            fletextsmall = {{display:"none"}}
            dajhe = {{display:"none"}}
                  focus = {focus}
                  children2  = 
                  {<div style={{width:"100%",height:"45px",display:"flex",justifyContent:"space-between"}}>

                    <div style={{width:"80px",backgroundColor:"var(--farba-main2)",color:"var(--farba-sivaText)",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"12px",fontSize:"var(  --font-size-base100)"}}
                         onClick={() => zatvorenie()}
                    >Zrušit</div>

                    <div
                    style={{width:"110px",backgroundColor:"var(--farba-main)",color:"var(--farba-biela)",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"12px",fontSize:"var(  --font-size-base100)"}}

                     onClick = {() => {zatvorenie(),funkce()}}
             
                    >Odstraniť</div>

                  </div>}
                  >
                    <div style={{height:"100%",textAlign:"center",color:"var( --farba-sivaText)",fontSize:"var(  --font-size-base69)"}}>{`Zoznam ${meno} bude natrvalo odstránený`}</div>
                  </Uravitlogika>

            </Templatelogika>
            
            }

     {obsahOpen === "maleokno2" &&  
          
            <Templatelogika
           stylecekokok = {{width:"300px",padding:"10px",gap:"15px"}}
          letkokonitna = {{ height: "20px" }}
            klikatelko = {{display:"none"}}
            klikatelko2 = {{display:"none"}}
            text = "Odstrániť z obľúbených"
      
            spodocekosti = {{display:"none"}}
            // alternativna = {{display:"block"}}
            
            >
              {/* <Maleokno
            text1 = {"Položka v zozname obľúbených bude odstránená."}
            text2 = {"Odstrániť z obľúbených"}
            onClick = {() => zatvorenie()}
            onClick2 = {() => {zatvorenie(),setPocetOblubene(prev => prev - 1),tatak()}
            }
            ></Maleokno> */}
                 <Uravitlogika
            input = {{display:"none"}}
            fletextsmall = {{display:"none"}}
            dajhe = {{display:"none"}}
                  focus = {focus}
                  children2  = 
                  {<div style={{width:"100%",height:"45px",display:"flex",justifyContent:"space-between"}}>

                    <div style={{width:"80px",backgroundColor:"var(--farba-main2)",color:"var(--farba-sivaText)",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"12px",fontSize:"var(  --font-size-base100)"}}
                         onClick={() => zatvorenie()}
                    >Zrušit</div>

                    <div
                    style={{width:"110px",backgroundColor:"var(--farba-main)",color:"var(--farba-biela)",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"12px",fontSize:"var(  --font-size-base100)"}}

                     onClick = {() => {zatvorenie(),setPocetOblubene(prev => prev - 1),tatak()}}
             
                    >Odstraniť</div>

                  </div>}
                  >
                    <div style={{height:"100%",textAlign:"center",color:"var( --farba-sivaText)",fontSize:"var(  --font-size-base69)"}}>{"Položka v zozname obľúbených bude odstránená"}</div>
                  </Uravitlogika>
            </Templatelogika>
            
            }


         
    {obsahOpen === "formular" &&

            <Form
            setSuborOpen ={setSuborOpen}
            setObsahOpen = {setObsahOpen}
            >
              
            </Form>

      }

    {obsahOpen === "prazdno" &&

    <div className="okonotusadejemagia">
      <Ukazovatelko
      onClick = {() => {
  setDotadok("")
  setSuborOpen(false)
  setObsahOpen("")
}}
      style = {{position:"absolute",top:"10px",right:"10px",backgroundColor:"var(--farba-main2)",color:"var(--farba-cierna)"}}
      ><i class='bx bx-x' ></i></Ukazovatelko>

      {dotadok}
    </div>

      }
        {obsahOpen === "odsrraneniekazda" &&
        halava
        }

         {obsahOpen === "otazka" &&  
         otazka
          //   <Templatelogika
          //   stylecekokok = {{width:"300px",padding:"10px",gap:"15px"}}
          // letkokonitna = {{ height: "20px" }}
          //   klikatelko = {{display:"none"}}
          //   klikatelko2 = {{display:"none"}}
          //   text = "Odstrániť tento zoznam"
      
          //   spodocekosti = {{display:"none"}}
          //   // alternativna = {{display:"block"}}
            
          //   >
          //     {/* <Maleokno
          //   text2 = {"Odstrániť tieto priania?"}
          //   text1 = {`Zoznam ${meno} bude natrvalo odstránený`}
          //   onClick = {() => zatvorenie()}
          //   onClick2 = {() => {zatvorenie(),funkce()}
          //   }
          //   ></Maleokno> */}

          //   <Uravitlogika
          //   input = {{display:"none"}}
          //   fletextsmall = {{display:"none"}}
          //   dajhe = {{display:"none"}}
          //         focus = {focus}
          //         children2  = 
          //         {<div style={{width:"100%",height:"45px",display:"flex",justifyContent:"space-between"}}>

          //           <div style={{width:"80px",backgroundColor:"var(--farba-main2)",color:"var(--farba-sivaText)",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"12px",fontSize:"var(  --font-size-base100)"}}
          //                onClick={() => zatvorenie()}
          //           >Zrušit</div>

          //           <div
          //           style={{width:"110px",backgroundColor:"var(--farba-main)",color:"var(--farba-biela)",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"12px",fontSize:"var(  --font-size-base100)"}}

          //            onClick = {() => {zatvorenie(),funkce()}}
             
          //           >Odstraniť</div>

          //         </div>}
          //         >
          //           <div style={{height:"100%",textAlign:"center",color:"var( --farba-sivaText)",fontSize:"var(  --font-size-base69)"}}>{`Zoznam ${meno} bude natrvalo odstránený`}</div>
          //         </Uravitlogika>

          //   </Templatelogika>
            }
      
            
         
        </motion.div>
      )}
    </AnimatePresence>,
    portalRoot // ⬅ sem teraz letí celá overlay
  );
};

export default Poslednyowerlap;
