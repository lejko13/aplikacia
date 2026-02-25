import './nahladspecial.css'
import React, { useRef, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Mousewheel,Virtual } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Hodnotenie from '../hodnotenie/hodnotenie';
import Ukazovatelko from '../ukazovatelko/ukazovatelko'
import { useNavigate } from 'react-router-dom';

import Pridanie from '../pridanie/pridanie'
import { MyContext } from '../../naviac/providertelefon/providertelefon'
import { useContext } from "react";
import { GlobalContext } from '../reactcontext/reactcontext'

import Card from '../portalpop/portalpop'

import Lajknute from '../lajknute/lajknute'
import { Children } from 'react';

import useLogikaokna from '../logikaokna/logikaokna'
// toot je ten specialne kde su 4 fotky ako keby 
const NahladSpecial = ({ onClick22,farbatocopotrebujem,nazov, klik22,location, hodnotenie, children,krajina, fotky = [],style, kontrola,prepinam ,apartman,setOtvorenie,setFarba,setQuery,otvorenie,zmaz,zmaz2,fotka1,fotka2,fotka3,fotka4,unikatne,fotka69}) => {


         const { suborOpen,setSuborOpen,obsahOpen,setObsahOpen,subor,setSubor,meno,setMeno,unikattne,setUnikatne} = useContext(MyContext);
         const {klikam}  = useLogikaokna()

  const swiperRef = useRef(null);
  const[hover,setHover] = useState(false)
  const [poslednyLajk, setPoslednyLajk] = useState(null);
    const navigate = useNavigate();
   const { pocetOblubene, setPocetOblubene, filter, setFilter,owerlap,seTeraz,teraz ,popokno,setPopokno,
    lajknute,setLajknute,lajkujem,texdo,setTextdo,kontext,setKontext,oblubene,setOblubene
   } = useContext(GlobalContext);

    // const klik = () =>  navigate('/StrankaProjekt', { state: apartman });

const item = subor.find(i => i.id === unikatne)
const len = item?.zbierka?.length




// console.log(subor.nazov)
// console.log(subor[unikatne].nazov)
// console.log(len)c


// const funkce = () => setSubor(prev => prev.filter(item => item.id !== unikatne));
// const[hover,sethover] = useState(null)

  return (
    
 <>
      <motion.div
      style={style}
        className='NahladSpecial'
        onClick={onClick22}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
      >
        <div className='fotkaNahladspecial' style={farbatocopotrebujem}>
           <div style={{justifyContent:"end",padding:"5px",gap:"5px",height:"fit-content",width:"fit-content",backgroundColor:"transparent",zIndex:500,position:"absolute",display:"flex",right:"0px"}}>
            <Ukazovatelko 
            style={{
        fontSize:"18px",
        backgroundColor:"var(--farba-biela)",
        color:"var(--farba-cierna)"
      }}
           onClick={(e) => {
          
            e.stopPropagation();   
            // funkce()
             console.log("okno");
             klikam()
             setMeno(item.nazov)
             setUnikatne(unikatne)
            //  setSuborOpen(true)
            
            // klik22()
            // setMala(false)  
            // lajkujem()        // zastaví bublanie
        
          }}
            ><i class='bx bx-x' ></i></Ukazovatelko>

           
 

           </div>



          {len === 0 && <div className='tuiuiesvienxbiu'></div>}



            {len > 0 && len < 4 && (
              <div className='uvideimakosastym'  onMouseEnter={() => setHover(90)}  onMouseLeave={() => setHover(null)}>
                <div  
                      className='fotkaNahladHoverreceko'
                            style={{
                                transform: hover === 90 ? "scale(1.05)" : "scale(1)" // mierne zväčšenie pri hover
                              }}> {fotka69}
                        </div>
                          <div className='lenvizualnaukazka' style={{  transition:"var(--transition)", backgroundColor: hover=== 90 ?"var(  --farba-bielaEfekty)" : "transparent"}}></div>

              
              </div>
            )}

            {len >= 4 && (
              <div  className='gridnastavenei'
                onClick={() => {
                  klik()
                  setFilter(false)
                }}>
              <div className='malyobrazocekostki' onMouseEnter={() => setHover(1)}  onMouseLeave={() => setHover(null)}>
                  <div style={{overflow:"hidden"}}>
                      <div  
                      className='fotkaNahladHoverreceko'
                            style={{
                                transform: hover === 1 ? "scale(1.05)" : "scale(1)" // mierne zväčšenie pri hover
                              }}> {fotka1}
                        </div>
                          <div className='lenvizualnaukazka' style={{  transition:"var(--transition)", backgroundColor: hover=== 1 ?"var(  --farba-bielaEfekty)" : "transparent"}}></div>

                
                    </div>
                </div>


                      <div className='malyobrazocekostki' onMouseEnter={() => setHover(2)}  onMouseLeave={() => setHover(null)}>
                        <div style={{overflow:"hidden"}}>
                          <div  
                          className='fotkaNahladHoverreceko'
                          style={{
                                transform: hover === 2 ? "scale(1.05)" : "scale(1)" // mierne zväčšenie pri hover
                              }}>{fotka2} 
                          </div>
                        
                          <div className='lenvizualnaukazka' style={{  transition:"var(--transition)", backgroundColor: hover=== 2 ?"var(  --farba-bielaEfekty)" : "transparent"}}></div>
                        </div>
                      </div>


                <div className='malyobrazocekostki' onMouseEnter={() => setHover(3)}  onMouseLeave={() => setHover(null)}>
                    <div style={{overflow:"hidden"}}>
                      <div className='fotkaNahladHoverreceko' 
                          style={{
                                transform: hover === 3 ? "scale(1.05)" : "scale(1)" // mierne zväčšenie pri hover
                              }}> {fotka3}
                        </div>
                        <div className='lenvizualnaukazka' style={{  transition:"var(--transition)", backgroundColor: hover=== 3 ?"var(  --farba-bielaEfekty)" : "transparent"}}></div>
                      
                        </div>
                </div>



                <div className='malyobrazocekostki' onMouseEnter={() => setHover(4)}  onMouseLeave={() => setHover(null)}>
                    <div style={{overflow:"hidden"}}>
                      <div className='fotkaNahladHoverreceko'
                        style={{
                                transform: hover === 4 ? "scale(1.05)" : "scale(1)" // mierne zväčšenie pri hover
                              }}> {fotka4}
                        </div>
                        <div className='lenvizualnaukazka' style={{  transition:"var(--transition)", backgroundColor: hover=== 4 ?"var(  --farba-bielaEfekty)" : "transparent"}}></div>
                    </div>
                </div>
              </div>
            )}

          
        </div>

        <div className='textNahlad'>
          <div className='textHore'>
            <span className='textNazov' 
            style={zmaz2}
            onClick={klik22}
          >
              {nazov}</span>

              <span style={zmaz}>{krajina}</span>


            <div className='zobrazujjemmee2'>
               <Hodnotenie text={hodnotenie} />
              </div>
          </div>
          
          <div className='textDole'>
            <div style={{ display: "flex", gap: "5px"}}>
              {/* <i  className='ikonainko bx bx-been-here'></i> */}
              <span className='textLokacia'
                style={{ whiteSpace: 'nowrap',width:"100%",display:"flex",justifyContent: "space-between",fontSize: "var(--font-size-base2)", color: "var(--farba-sivaText)" }}
              >
               <span >Počet ubytovaní</span>
              
                
              </span>
              
            </div>
            <div style={{display:"flex",gap:"5px",alignItems:"center",fontSize:"14px" ,color:"var(--farba-sivaText)"}}>
                 
                <i class='bx bx-home-alt-2' style={{color:"gold",fontSize:"14px"}}></i>
                {location}
                </div>
            {/* <span style={{ whiteSpace: 'nowrap', fontSize: "var(--font-size-base3)", color: "var(--farba-sivaText)" }}>
              {krajina}
            </span> */}
            <div className='zobrazujjemmee'>
               <Hodnotenie text={hodnotenie} />
              </div>
          </div>
        </div>
        {children}
      </motion.div>

</>
  )
}

export default NahladSpecial;
