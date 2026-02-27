import './ludiakolonkalenmobil.css'

import { useState, useRef, useContext,useEffect } from "react";
import { GlobalContext } from '../reactcontext/reactcontext'

import { motion, AnimatePresence } from "framer-motion";
import React from 'react'
import Linka from '../linka/linka';

const Ludiakolonkalenmobil = ({podminkkak2,srdeckourcuje,podminkkak,srdieckoko,klikluntiiook,podmienka,silooook,textkamos,animovace,style,text4,children,onMouseEnter2,onMouseEnter,onclickokoko,lenta,onMouseLeave,fotecakkklentak,onClick,teext1,text2,text3,fotka,onMouseLeave2,sprava,obmedzit,kamos,pouzivat,zdielat,zablokovat,textovacastzecoaako,odblokovat}) => {
const[hover,setHover] = useState(null)

  const { pocetOblubene, setPocetOblubene, filter, setFilter,owerlap,seTeraz,teraz ,popokno,setPopokno,
         lajknute,setLajknute,lajkujem,texdo,setTextdo,kontext,setKontext,oblubene,setOblubene,mala,setMala,
              pravda,setpravda,
        } = useContext(GlobalContext);

  const referenica = useRef(null)
  const referencia2 = useRef(null)


  const referecnainaklik = useRef(null)

  // console.log(referenica);
useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      referenica.current &&
      !referenica.current.contains(event.target) &&
      referencia2.current &&
      !referencia2.current.contains(event.target)
    ) {
      setpravda(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [pravda]);

const[ano,setAno] = useState(true)
  return (
    <div className='Ludiakolonka' style={style} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onClick}>

      {podminkkak && 
      <div className='zobrazeniecistekamosi' style={srdieckoko}><i class='bx bxs-heart' ></i></div> }


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
          

{podminkkak2 && <div className='tujesrdeickolen' style={srdeckourcuje}><i class='bx bxs-heart' ></i></div>}
  
        
       


          <div className='llojvrbvi'  onMouseEnter={onMouseEnter2} onMouseLeave={onMouseLeave2} onClick={onclickokoko} ref={referencia2} ></div>
            <img  onClick={onclickokoko} className='fotofotkakookopica' src={fotka} alt="" />
            {children}
            
          <AnimatePresence>

            {pravda &&    <motion.div
         
             initial={{ opacity: 0, y: 0 }}   // štart: neviditeľné a posunuté hore
                                            animate={{ opacity: 1, y: 0 }}     // animácia: úplne viditeľné a na správnej pozícii
                                            exit={{ opacity: 0, y: 0 }}      // pri odchode: zmizne a posunie sa hore
                                            transition={{ duration: 0.3 }}
            style={animovace}
            className='popouokonknomale2' 
             ref={referenica}
             onMouseEnter = {() => setpravda(true)}
onMouseLeave = {() => setpravda(false)}
            >


               <div className='definicemojamala'>
      

                <div className='wrapercekkokoktiko'>
                 <div style={{width:"100%",height:"fit-content",alignItems:"center",display:"flex",flexDirection:"row",gap:"10px"}}>
                  <div style={{height:"40px",width:"40px",borderRadius:"12px",display:"flex"}}>
                    <img className='fotofotkakookopica'src={fotka} alt="" />
                  </div>

                      <div className='textovacast909i90' style={{display:"flex",flexDirection:"column",gap:"1.5px"}}>
                          <div style={{display:"flex",gap:"5px"}}>
                              <span className='horetextovacastikook' >{teext1}</span>
                              <span className='horetextovacastikook' >{text3}</span>
                          </div>
                          <p className='doeltexovacast' style={lenta}>{text4}</p>

                      </div>
                 </div>
                  <div className='konjsvnsjvsjkv'>
                    <div className='jsbvahbsvha'>

                        <div className='nvjnasvjka' onClick={sprava}>Zobrazit profil</div>
                      
                      <div className='nvjnasvjka2' onClick={obmedzit}>Zablokovat</div>

                    </div>
                    <div className='jsbvahbsvha32' onClick={kamos}>{textkamos}</div>
 
                  </div>
                         
{/* 
                            <p className='texticekkokokookokriova' 
                             onMouseEnter={() => setHover(3)}
                            onMouseLeave={() => setHover(null)}
                            style={{backgroundColor: hover === 3 ? "transparent" : "var(--farba-main2)"}}
                            onClick={zablokovat}
                            >Zablokovať</p> */}
{/*                         
                      <Linka></Linka>
                 <button className='lentakbuttomraodmoa'  onClick={zdielat}>Zdielať cez...</button> */}

               {/* <div className='kopkoiavij' onClick={pouzivat}>
                <i class='bx bx-error-circle'></i>
                <span>Nahlásiť tohto použivatela</span>
               </div> */}

                </div>

               </div>


             
            </motion.div> }
          
            </AnimatePresence>
           
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

export default Ludiakolonkalenmobil
