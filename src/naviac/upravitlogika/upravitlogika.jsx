import './upravitlogika.css'


import { useRef, useState, useEffect } from "react";
import Linka from '../linka/linka';
import Ukazovatelko from '../ukazovatelko/ukazovatelko'
import { MyContext } from '../providertelefon/providertelefon'
import { useContext } from "react";
import { GlobalContext } from '../reactcontext/reactcontext'
import Ikonypage from '../ikonypage/ikonypage'
import { use } from 'react';
import { color } from 'framer-motion';
import { useMediaQuery } from "react-responsive";
const Uravitlogika = ({focus,children,input,fletextsmall,children2,dajhe}) => {
  const { suborOpen,setSuborOpen,obsahOpen,setObsahOpen,subor,setSubor,nazovSuboru,setNazovSuboru} = useContext(MyContext);
  const { lajknute,texdo,setTextdo,kontext,setKontext,mala,setMala,  kontorla,setKontrola,kontorlaText,setKontrolaText,automatika } = useContext(GlobalContext);
  const zatvorenie = useRef(null)

  useEffect(() => {
  const handleClickOutside = (e) => {
    if (!zatvorenie?.current.contains(e.target)) {
      setSuborOpen(false);
    }
  };

    console.log(subor[0]?.nazov === nazovSuboru)
    console.log(nazovSuboru)

  

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


const dnes = new Date();

const den = String(dnes.getDate()).padStart(2, '0');
const mesiac = String(dnes.getMonth() + 1).padStart(2, '0'); // mesiace sú 0–11
const rok = dnes.getFullYear();

const datum = `${den}.${mesiac}.${rok}`;


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
        console.log("plne")
        setSuborOpen(false)
 
        setNazovSuboru("")
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
    { id: Date.now(),
       nazov: nazovSuboru, 
      cas: new Date().toLocaleString(), 
      zbierka: [],
       datum: datum }
  ]);

  console.log("plne");
  setObsahOpen("")
  setNazovSuboru("")
  setSuborOpen(false)
};

const jeMobile         = useMediaQuery({ minWidth: 750 });   
  return (
    <>
    <div className='vraperecekosti2'>
      <Linka></Linka>
    <div className='strednyobsahinput'  style={input}>
<div className="flex-column-gap">
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
       
            <div  style = {fletextsmall}className='flex-text-small'>
              <span>{nazovSuboru.trim().length}</span>
              <span>/</span>
              <span>50</span>
            </div>
          
        </div>
        
       </div>
        {children}
          <Linka></Linka>
          {children2}
       <div className='tusuikony' style={dajhe} >

        <Ikonypage text = "Zrušiť"
        onMouseEnter={() => setHover(1)}
        onMouseLeave={() => setHover(null)}
        onClick={() => {setObsahOpen(""),setSuborOpen(false),setNazovSuboru("")} }
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
  backgroundColor: jeMobile
    ? (nazovSuboru.length > 0
        ? "var(--farba-main)"
        : "transparent")
    : "var(--farba-main)"
}}
        textStyle={{
  color: jeMobile
    ? (nazovSuboru.length > 0
        ? "var(--farba-biela)"
        : "var(--farba-main2)")
    : "white"
}}
        ></Ikonypage>
      
       </div>
     
       </div>
      </>

  )
}

export default Uravitlogika


// textStyle={{
//     color: jeMobile
//       ? hover === 1
//         ? "var(--farba-cierna)"
//         : "var(--farba-sivaText)"
//       : undefined
//   }}
//   style={{
//     backgroundColor: jeMobile
//       ? hover === 1
//         ? "transparent"
//         : "var(--farba-main2)"
//       : undefined
//   }}