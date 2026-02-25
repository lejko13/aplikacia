import React, { useState, useRef, useEffect,useContext } from 'react';
import './vyberdatum.css'
import { motion, AnimatePresence } from "framer-motion";
import Ukazka from '../ukazka/ukazka'
import Linka from '../../../../naviac/linka/linka';
import Komponenta from '../komponenta/komponenta'
import Castcosahybe from '../castcosahybe/castcosahybe'

import Castcosahybe2 from '../castcosahybe2/castcosahybe2'
import {useDatePicker} from '../../formularovacast/providerfrom/providerfrom'

import { MyContext } from '../../../../naviac/providertelefon/providertelefon'
import { useMediaQuery } from "react-responsive";

const Vyberdatum = ({type,ocomtoje,placeholder,dolezite}) => {

    const vidim = useMediaQuery({ minWidth: 660});
    const vidimne = useMediaQuery({ maxWidth: 659});

  const {datum, setDatum, rok, setRok,otvorenie, setOtvorenie,krajina, setKrajina,otovreniedatumu, setOtovreniedatumu,otovrenieROKU, setOtovrenieROKU,aktualnyROK, setaktualnyROK,alternativa,setAlternativa,alternativa2,setAlternativa2} = useDatePicker()



    const { suborOpen,setSuborOpen,obsahOpen,setObsahOpen,subor,setSubor,nazovSuboru,setNazovSuboru,unikattne,setUnikatne,meno,dotadok,setDotadok,otazka,setOtazka,kontrlkaaa,setKontrlkaaa,formData, setFormData} = useContext(MyContext);


// const dnes = new Date();   // aktuálny dátum a čas
// console.log(dnes.getDate());
  const inputRef = useRef(null);
  const referecne2 = useRef(null);
  const dalsi = useRef(null);



 

  






  const [farba,setFarba] =  useState(false);

  const funkcia = () => {
    setOtvorenie(prev => !prev)
    if (otvorenie) {
             inputRef.current.style.borderRadius = "12px";
 
    } else{
      inputRef.current.style.borderRadius = "12px 12px 12px 0px";

    }

  }
  
   useEffect(() => {
  const handleClickOutside = (event) => {
    const refs = [inputRef, referecne2, dalsi];

    const clickedInside = refs.some(ref => ref.current && ref.current.contains(event.target));

    if (!clickedInside) {
      setOtvorenie(false);
      setOtovreniedatumu(false)
      setOtovrenieROKU(false)
      setAlternativa(false)
      setAlternativa2(false)
   
      inputRef.current.style.borderRadius = "12px";
 
    }
  };
  

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [otvorenie]);



useEffect(() => {
  
setFormData(prev => ({
  ...prev,
  otazka7: `${krajina.den} / ${krajina.mesiac} / ${krajina.rok}`
}))

},[krajina.den])




     

  return (
    <div className='drziakokmoiVYBER'>
      <div style={{position:"relative",width:"fit-content"}}>
    <span style={{color:"var(--farba-cierna)",position:"relative",fontSize:"var(--font-size-base2)"}}>{ocomtoje}</span>
    <div className="hviezdicakk" style={dolezite}>*</div>
        </div>
    <div style={{position:"relative",width:"100%"}} ref={referecne2}>
        <div style={{position:"relative"}}>
        <input 
        ref={inputRef}
   
            readOnly
           placeholder = {"DD.MM.YYYY"}
            //     value={
            //   krajina
            // }
                value={
              krajina.den !== null && krajina.mesiac !== null && krajina.rok !== null
                ? `${krajina.den} / ${krajina.mesiac } / ${krajina.rok}`
                : ''
            }
           onClick={() => funkcia() }
           style={{
              transition:  otvorenie ?  "0s" : "0.1s",
            border: otvorenie ? "white" : "var( --border)"
           }}
         className = "inputkodoleleni22" tipe="text" />
           <div style={{position:"absolute",top:"12px",right:"20px"}}>
          <i
            className="bx bx-chevron-down"
            style={{
              transform: otvorenie ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease"
            }}
          ></i>


         </div>
         
        </div>
        {vidim &&  <Castcosahybe></Castcosahybe>}


        
        {vidimne &&  <Castcosahybe2></Castcosahybe2>}
     
         
           
  
 
    
    </div>
      
    </div>
  )
}

export default Vyberdatum
