import './nahladPage.css'
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

import { useContext } from "react";
import { GlobalContext } from '../reactcontext/reactcontext'

import Card from '../portalpop/portalpop'

import Lajknute from '../lajknute/lajknute'
import { Children } from 'react';

const NahladPage = ({ nazov, klik22,location, hodnotenie, children,krajina, fotky = [],style, kontrola,prepinam ,apartman,setOtvorenie,setFarba,setQuery,otvorenie,zmaz,zmaz2}) => {
  const swiperRef = useRef(null);
  const[hover,setHover] = useState(false)
  const [poslednyLajk, setPoslednyLajk] = useState(null);
    const navigate = useNavigate();
   const { pocetOblubene, setPocetOblubene, filter, setFilter,owerlap,seTeraz,teraz ,popokno,setPopokno,
    lajknute,setLajknute,lajkujem,texdo,setTextdo,kontext,setKontext,oblubene,setOblubene
   } = useContext(GlobalContext);

    // const klik = () =>  navigate('/StrankaProjekt', { state: apartman });
    const klik = () => navigate(`/Detail/${apartman.id}`);





  return (
    
 <>

 
 
      <motion.div
      style={style}
        className='Nahlad23'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        
         
      >
        <div className='fotkaNahlad'>
         {!kontrola &&  
         <div className='wrapperprecelok'
         onClick={() => {klik() ,setFilter(false)}}
         >
           <Ukazovatelko 
            style={{
              zIndex:20,
              position:"absolute",
        fontSize:"18px",
        top:"5px",
        right:"5px",
        color:"var(--farba-cierna)"
      }}
      onClick={(e) => {
    setPopokno(true)
    e.stopPropagation();   
    console.log(popokno); 
    klik22()  
    lajkujem()        // zastaví bublanie
    // setPocetOblubene(prev => prev + 1); 

    // console.log(apartman.name);
    //  setPoslednyLajk(apartman.name);
      // tvoja pôvodná funkcia
  }}
           
            ><i class='bx bx-heart' ></i></Ukazovatelko>
          {/* <Pridanie
          style = {{zIndex:20}}
  
  ikona = {}
  setHover={setHover}
/> */}
          <div 
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            boxShadow:"var(--box-shadow)",
            height:"100%",
            transition:"var(--transition)",
            opacity:"1",
            zIndex:"2",
            position:"absolute",
            width:"100%",
            backgroundColor: hover=== true ?"var(  --farba-bielaEfekty)" : "transparent"
          }}></div>
         <img className='obrazocekok2'
        style={{
    transition: "transform 0.3s ease", // hladka animacia
    transform: hover ? "scale(1.05)" : "scale(1)" // mierne zväčšenie pri hover
  }}
          src={fotky[0]}   />
         </div>}

          {kontrola &&   <Swiper
        
            
            onSwiper={(swiper) => (swiperRef.current = swiper)}
              modules={[Navigation, Pagination, Autoplay, Mousewheel,Virtual]}
              pagination={{ clickable: true }}
              spaceBetween={10}
                  virtual
              mousewheel={{ forceToAxis: true, releaseOnEdges: true, invert: false, sensitivity: 1 }}
             
            >

              {fotky?.map((foto, index) => (
                <SwiperSlide key={index} virtualIndex={index} className='slideSwipeer' style={{ position: "relative" }}>
                  <div style={{ position: "relative", display: "flex" }}>
                    {/* <img className='obrazocekok' src={foto} alt={`foto-${index}`} /> */}
                  </div>
                </SwiperSlide>
              ))}

              <div  className='spikecakk2'
           onClick={() => swiperRef.current?.slidePrev()}
              >
                <i className='bx bx-chevron-left'></i>
              </div>

              <div className='spikecakk'
             onClick={() => swiperRef.current?.slideNext()}
              >
                <i className='bx bx-chevron-right'></i>
              </div>

            </Swiper>}
          
           
          
        </div>

        <div className='textNahlad'>
          <div className='textHore'>
            <span className='textNazov' 
            style={zmaz2}
            onClick={() => {
  if (otvorenie) {
    setOtvorenie(false);
    setFarba(false);
    setQuery("");
  }
  klik();
  setFilter(false)
}}
          >
              {nazov}</span>

              <span style={zmaz}>{krajina}</span>


            <div className='zobrazujjemmee2'>
               <Hodnotenie text={hodnotenie} ikona={<i class='bx bxs-star'></i>} />
              </div>
          </div>
          <div className='textDole'>
            <div style={{ display: "flex", gap: "5px"}}>
              <i  className='ikonainko bx bx-been-here'></i>
              <span className='textLokacia'
                style={{ whiteSpace: 'nowrap', fontSize: "var(--font-size-base2)", color: "var(--farba-sivaText)" }}
              >
                {location}
              </span>
              
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

export default NahladPage;
