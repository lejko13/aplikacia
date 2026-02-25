import './profilswiper.css'

import React, { useRef, useEffect, useState } from 'react'


import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Mousewheel,Virtual } from 'swiper/modules';
import 'swiper/css';
import { useContext } from "react";
import { GlobalContext } from '../reactcontext/reactcontext'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Hodnotenie from '../hodnotenie/hodnotenie'
import Ukazovatelko from '../ukazovatelko/ukazovatelko'
import NahladPage from '../../naviac/nahladPage/nahladPage'
import {apartmany} from '../fuzzy/fuzzy'

import { ikonyPonuk } from "../ponuka/ponuka";

import useBreakpoint from '../hook/breakpoint'
import Lajknute from '../lajknute/lajknute'
const Profilswiper = ({textMobile,textTablet,textDesktop,data = [],malytext,stilikak,stylicecek,lava,prava,textMobileMALY,textTabletMALY,textDesktopMALY}) => {
 
   const { pocetOblubene, setPocetOblubene, filter, setFilter,owerlap,seTeraz,teraz ,popokno,setPopokno,
      lajknute,setLajknute,lajkujem,texdo,setTextdo,kontext,setKontext,oblubene,setOblubene,mala,setMala 
     } = useContext(GlobalContext);

  const { isMobile,isTablet,isDesktop } = useBreakpoint();
  const swiperRef = useRef(null);
  const [offset, setOffset] = useState(
    window.innerWidth >= 1100 ? 20 : 20
  );

   useEffect(() => {
    const handleResize = () => {
      setOffset(window.innerWidth >= 1100 ? 20 : 20);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
  setPocetOblubene(oblubene.length);

}, [oblubene]);

//   useEffect(() => {
//   setMala("Pridané");

// }, [pocetOblubene]);



  return (
    <>

    <div className='MaincastSwiper' style = {stylicecek}>
        <div className='textCastmainSWIPER' style={stilikak}>
          <div>
            <span className='TEXTICEKNEAOVICEK' >  {isMobile ? textMobile : isTablet ? textTablet : textDesktop}</span>
            <p className='textpodhlavnuym'> {isMobile ? textMobileMALY : isTablet ? textTabletMALY : textDesktopMALY}</p>
            </div>
            <div className='pohybac'>

              <div  className='spikecakk2'
       ref={lava}
               style={{
                zIndex:"1",
                position:"relative",
                color:"var(--farba-cierna)",

            }}
           onClick={() => swiperRef.current?.slidePrev()}
              >
                <i className='bx bx-chevron-left'></i>
              </div>

              <div className='spikecakk'
                ref={prava}
         
              style={{
                zIndex:"1",
                 position:"relative",
                color:"var(--farba-cierna)",

              }}
             onClick={() => swiperRef.current?.slideNext()}
              >
                <i className='bx bx-chevron-right'></i>
              </div>
            </div>
        </div>
       
       <div className='swipereceobal32'>
        <Swiper
        
        
               onSwiper={(swiper) => (swiperRef.current = swiper)}
      modules={[Navigation, Pagination, Autoplay, Mousewheel, Virtual]}
      observer={true}
      observeParents={true}
      resizeObserver={true}
      spaceBetween={10}
      slidesPerView="auto"
      slidesOffsetAfter={offset} // dynamický offset podľa state
      preventInteractionOnTransition={true}
      touchStartPreventDefault={true}
      touchMoveStopPropagation={true}
      mousewheel={{
        forceToAxis: true,
        releaseOnEdges: false,
        invert: false,
        sensitivity: 1,
      }}
            >

                {data.map((prev,index) => (
                  <>

                 
            <SwiperSlide  key={prev.id} virtualIndex={index}>
      
                <NahladPage
               style={{
                      
                      padding:"0px"
                    }}
                
                klik22={() => {
                setKontext(prev => !prev);
                setTextdo(prev);

                  setOblubene(stary => {
                    const existuje = stary.some(e => e.id === prev.id)
                    if (existuje) {
                setMala(false)
                return stary.filter(e => e.id !== prev.id)     
                    }
                    else{
                      setMala(true)
                      return [...stary,prev]
                    }
                  })

                ;}}
                zmaz = {{display: "none"}}
               
                   kontrola = {false}
                  //  prepinam = {}
                   
                fotky = {prev.fotky}
                apartman={prev}
                nazov = {prev.name}
                location = {prev.location}
                hodnotenie = {prev.hodnotenie}

            >
            
              </NahladPage> 
 
     
            </SwiperSlide>
            </>
                ))}
            
                            
                                
                                
        </Swiper>
      </div>
      
    </div>
    </>
  )
}

export default Profilswiper

  