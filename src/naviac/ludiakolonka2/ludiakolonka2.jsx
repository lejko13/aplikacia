import './ludiakolonka2.css'

import { useState, useRef, useContext,useEffect } from "react";
import { GlobalContext } from '../reactcontext/reactcontext'

import { motion, AnimatePresence } from "framer-motion";
import React from 'react'
import Linka from '../linka/linka';

const Ludiakolonka2 = ({podmienkaaa,totojetocosahybe,podminkkak2,srdeckourcuje,podminkkak,srdieckoko,klikluntiiook,podmienka,silooook,textkamos,animovace,style,text4,children,onMouseEnter2,onMouseEnter,onclickokoko,lenta,onMouseLeave,fotecakkklentak,onClick,teext1,text2,text3,fotka,onMouseLeave2,sprava,obmedzit,kamos,pouzivat,zdielat,zablokovat,textovacastzecoaako,odblokovat}) => {
const[hover,setHover] = useState(null)

  const { pocetOblubene, setPocetOblubene, filter, setFilter,owerlap,seTeraz,teraz ,popokno,setPopokno,
         lajknute,setLajknute,lajkujem,texdo,setTextdo,kontext,setKontext,oblubene,setOblubene,mala,setMala,
              pravda,setpravda,
        } = useContext(GlobalContext);

  const referenica = useRef(null)


  // console.log(referenica);
  
//  useEffect(() => {
//   const handleClickOutside = (event) => {
//     if (referenica.current && !referenica.current.contains(event.target)) {
//       setpravda(false); // klik mimo → zatvoriť
//     }
//   };
//   document.addEventListener("mousedown", handleClickOutside);
//   return () => document.removeEventListener("mousedown", handleClickOutside);
// }, []);

const[ano,setAno] = useState(true)
  return (
    <div className='Ludiakolonka' style={style} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onClick}>

      {podminkkak && 
      <div className='zobrazeniecistekamosi' style={srdieckoko}><i class='bx bx-heart' ></i></div> }

      {podmienka && 
      <div className='zobrazeniecistekamosi2' style={srdieckoko}><i class='bx bx-block' ></i></div> }


 {podmienka && 
      <div className='takeoknocosazobrazuje32' style={silooook}>
        <div className='llojvrbvi434'></div>
        <div style={{display:"flex",flexDirection:"column"}}>
          <div style={{display:"flex",flexDirection:"row",gap:"5px"}}>
             <span className='horetextovacastikook' >{teext1}</span>
                              <span className='horetextovacastikook' >{text3}</span>


          </div>
         
          <span className='doeltexovacast'
          ><span onClick={klikluntiiook} className="textvoacastlenini">{odblokovat}</span> pouzivatela</span>


        </div>
         
    
      
        {/* <span>  {textovacastzecoaako}</span> */}
      

        </div>}

        <div className='fotofotofototecak' style={fotecakkklentak} >
          

{podminkkak2 && <div className='tujesrdeickolen' style={srdeckourcuje}><i class='bx bx-heart'></i></div>}
  
        
       


          <div className='llojvrbvi'  onMouseEnter={onMouseEnter2} onMouseLeave={onMouseLeave2} onClick={onclickokoko} style={totojetocosahybe} ></div>
            <img className='fotofotkakookopica' src={fotka} alt="" />
            {children}
            
          
           
        </div>

        <div className='textovacast909i90' style={{display:"flex",flexDirection:"column",gap:"1.5px"}}>
            <div style={{display:"flex",gap:"5px"}}>
                <span className='horetextovacastikook' onClick={onclickokoko}>{teext1}</span>
                <span className='horetextovacastikook' onClick={onclickokoko}>{text3}</span>
            </div>
            <p className='doeltexovacast' style={lenta}>{text2}</p>

        </div>
      
    </div>
  )
}

export default Ludiakolonka2
