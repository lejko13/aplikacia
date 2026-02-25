import './oknopop.css'

import React from 'react'
import { useState, useRef, useContext,useEffect } from "react";
import { GlobalContext } from '../../naviac/reactcontext/reactcontext'
import { motion, AnimatePresence } from "framer-motion";
import Linka from '../linka/linka';
const Oknopop = ({nastaveniesirky,fotka,teext1,tiexz,text3,text4,stlokijivne,lenta,animovace,stilikokok,children,stylocekoko}) => {
    const[hover,setHover] = useState(null)
  return (


           <div style={nastaveniesirky}
            
            className='popouokonknomale24' 
  
             onMouseEnter = {() => setpravda(true)}
onMouseLeave = {() => setpravda(false)}
            >
              


               <div className='definicemojamala3232' style={stlokijivne}>
      

                <div className='wrapercekkokoktiko'>
                 <div style={{width:"100%",height:"fit-content",alignItems:"center",display:"flex",flexDirection:"row",gap:"10px"}}>
                    {children}
                  <div  className="yellow-box" style={stilikokok}>
                    <img className='fotofotkakookopica'src={fotka} alt="" />
                  </div>

                      <div className='textovacast909i90' style={stylocekoko}>
                          <div style={{display:"flex",gap:"5px"}}>
                              <span className='horetextovacastikook' >{teext1}</span>
                              <span className='horetextovacastikook' >{text3}</span>
                          </div>
                          <p className='doeltexovacast' style={lenta}>{text4}</p>

                      </div>
                 </div>
                  <div className='konjsvnsjvsjkv' style={tiexz}>
                    <div className='jsbvahbsvha'>

                        <div className='nvjnasvjka'>Napísať správu</div>
                      
                      <div className='nvjnasvjka2'>Obmedziť</div>

                    </div>
                    <div className='jsbvahbsvha32'>Pridať ako priateľa</div>
 
                  </div>
                         

                            <p className='texticekkokokookokriova' 
                             onMouseEnter={() => setHover(3)}
                            onMouseLeave={() => setHover(null)}
                            style={{backgroundColor: hover === 3 ? "transparent" : "var(--farba-main2)"}}
                            >Zablokovať</p>
                        
                      <Linka></Linka>
                 <button className='lentakbuttomraodmoa'>Zdielať cez...</button>

               <div className='kopkoiavij'>
                <i class='bx bx-error-circle'></i>
                <span>Nahlásiť tohto použivatela</span>
               </div>

                </div>

               </div>

           


             
            </div> 
          
       
  )
}

export default Oknopop
