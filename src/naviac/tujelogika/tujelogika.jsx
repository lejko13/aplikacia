import './tujelogika.css'


import { useRef, useState, useEffect } from "react";
import Linka from '../linka/linka';
import Ukazovatelko from '../../naviac/ukazovatelko/ukazovatelko'
import { MyContext } from '../providertelefon/providertelefon'
import { useContext } from "react";

import Ikonypage from '../../naviac/ikonypage/ikonypage'
import { use } from 'react';
import { color } from 'framer-motion';
import { GlobalContext } from '../reactcontext/reactcontext'
const Tujelogika = ({focus}) => {
   const { lajknute,texdo,setTextdo,kontext,setKontext,mala,setMala,  kontorla,setKontrola,kontorlaText,setKontrolaText,automatika } = useContext(GlobalContext);
  const { suborOpen,setSuborOpen,obsahOpen,setObsahOpen,subor,setSubor,nazovSuboru,setNazovSuboru} = useContext(MyContext);
  const zatvorenie = useRef(null)

  useEffect(() => {
  const handleClickOutside = (e) => {
    if (!zatvorenie?.current.contains(e.target)) {
      setSuborOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [setSuborOpen]);

useEffect(() => {
  if (obsahOpen && focus.current) {
    focus.current.focus();
  }
}, [obsahOpen]);



// 
const dnes = new Date();

const den = String(dnes.getDate()).padStart(2, '0');
const mesiac = String(dnes.getMonth() + 1).padStart(2, '0'); // mesiace sú 0–11
const rok = dnes.getFullYear();

const datum = `${den}.${mesiac}.${rok}`;
// 




const kontrola = () => {
  
  if (nazovSuboru.trim() === "") {
  console.log("Input je prázdny");
  automatika();
  setKontrolaText("prazdny");
  return;
}

// 2️⃣ kontrola duplicity
if (subor.some(item => item.nazov === nazovSuboru.trim())) {
  console.log("Tento názov už existuje");
  automatika();
  setKontrolaText("existuje");
  return;
}
  
 setSubor(prev => [
  ...prev,
  {
    id: Date.now(),
    nazov: nazovSuboru,
    cas: new Date().toLocaleString(),
    zbierka:[],
    datum:datum
  }
  
  
]);
        console.log("plne");
        setObsahOpen("homelogika")
        setNazovSuboru("")
        //  setObsahOpen(false) 
        //  setSuborOpen(false)
        
  
}
const[hover,setHover] = useState(null)

const kliknutie2 = (e) => {
  if (e.key !== "Enter") return;
if (!nazovSuboru.trim()) {
  console.log("Input je prázdny");
  automatika();
  setKontrolaText("prazdny");
  return null;
}

// 2️⃣ kontrola duplicity
if (subor.some(item => item.nazov === nazovSuboru.trim())) {
  console.log("Tento názov už existuje");
  automatika();
  setKontrolaText("existuje");
  return null;
}

  setSubor(prev => [
    ...prev,
    { id: Date.now(), nazov: nazovSuboru, cas: new Date().toLocaleString(), zbierka: [], datum:datum }
  ]);

  console.log("plne");
  setObsahOpen("homelogika");
  setNazovSuboru("");
};
  return (
    <>
    <div className='vraperecekosti'>
      <Linka></Linka>
    <div className='strednyobsahinput'>
<div style={{ display: "flex", flexDirection: "column" ,gap:"5px"}}>
  <div >
            <input  
            className='inputikceoksti'
            ref={focus}
            onKeyDown={kliknutie2}
            type="text"   
              maxLength={50}     // určuje typ
            value={nazovSuboru}      // riadenie hodnoty
            onChange={e => setNazovSuboru(e.target.value)} />
        </div>
            <div style={{color:"var(--farba-sivaText)",display:"flex",gap:"5px",fontSize:"var(  --font-size-small)"}}>
              <span>{nazovSuboru.trim().length}</span>
              <span>/</span>
              <span>50</span>
            </div>
          
        </div>
       </div>
          <Linka></Linka>
       <div className='tusuikony' >

        <Ikonypage text = "Zrušiť"
        onMouseEnter={() => setHover(1)}
        onMouseLeave={() => setHover(null)}
        onClick={() => {setObsahOpen("homelogika") ,setNazovSuboru("")}}
        textStyle={{
           color:hover === 1  ? "var(--farba-cierna)"  : "var(--farba-sivaText)"
          }}
        style={{
            backgroundColor: hover === 1  ? "transparent"  : "var(--farba-main2)" // alebo hocijaká farba/var
          }}
      
        ></Ikonypage>

        
        <Ikonypage text = "Vytvorte"
        onClick={() => kontrola()}
        style={{
            backgroundColor: nazovSuboru.length > 0  ? "var(--farba-main)"  : "transparent" // alebo hocijaká farba/var
          }}
         textStyle={{
           color:nazovSuboru.length > 0  ? "var(--farba-biela)"  : "var(--farba-main2)"
          }}
        ></Ikonypage>
      
       </div>
     
       </div>
      </>

  )
}

export default Tujelogika
