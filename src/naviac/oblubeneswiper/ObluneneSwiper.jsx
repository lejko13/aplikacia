import './ObluneneSwiper.css'

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
import NahladOblubene from '../../naviac/nahladoblubene/nahladoblubene'
import {apartmany} from '../fuzzy/fuzzy'
import Nahlad2 from '../nahlad2/nahlad2';

import { ikonyPonuk } from "../ponuka/ponuka";
import Budtoaleboto from '../../naviac/budtoaleboto/budtoaleboto'

import useBreakpoint from '../hook/breakpoint'
import Lajknute from '../lajknute/lajknute'

import { useMediaQuery } from "react-responsive";
const ObluneneSwiper = ({textMobile,textTablet,textDesktop,oblubene2 = [],malytext,stilikak,stylicecek,lava,prava,textMobileMALY,textTabletMALY,textDesktopMALY}) => {
 
   const { pocetOblubene, setPocetOblubene, filter, setFilter,owerlap,seTeraz,teraz ,popokno,setPopokno,
      lajknute,setLajknute,lajkujem,texdo,setTextdo,kontext,setKontext,oblubene,setOblubene,mala,setMala 
     } = useContext(GlobalContext);



     
  const { isMobile,isTablet,isDesktop } = useBreakpoint();
  const swiperRef = useRef(null);
  const [offset, setOffset] = useState(
    window.innerWidth >= 1100 ? 20 : 20
  );



  // const funkcia = () => setOblubene(prev => prev.filter(item => item.id === ))
//     const novymedia = useMediaQuery({ minWidth: 1250 });
//   const stary = useMediaQuery({ maxWidth: 1249 });
// const dalsi = useMediaQuery({ maxWidth: 1050 });
// const malo = useMediaQuery({ minWidth: 750 });
// const malo2 = useMediaQuery({ minWidth: 880 });
// const malo3 = useMediaQuery({ minWidth: 1100 });

const malodotadtocen = useMediaQuery({ minWidth: 1295 });              // 1295+
const malo           = useMediaQuery({ minWidth: 1001, maxWidth: 1294 }); // 1001–1294
const malo2          = useMediaQuery({ maxWidth: 1000 });
const malo3          = useMediaQuery({ maxWidth: 550 });     
const malo4         = useMediaQuery({ maxWidth: 480 });   
const malo5         = useMediaQuery({ maxWidth: 750 });   
  //  useEffect(() => {
  //   const handleResize = () => {
  //     setOffset(window.innerWidth >= 1100 ? 20 : 20);
  //   };
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);
const nastavenie = useRef(null)
  useEffect(() => {
  setPocetOblubene(oblubene.length);

}, [oblubene]);

  useEffect(() => {
    if (oblubene.length > 0 ) {
      nastavenie.current.style.height = "fit-content"
      nastavenie.current.style.padding = "0px 20px 10px 0px"
    }
    else{
       nastavenie.current.style.height = "355px"
    }
  

}, [oblubene]);









const koko = () => {
 swiperRef.current.mousewheel.enable();      // OK
    swiperRef.current.allowSlideNext = true;    // správne
    swiperRef.current.allowSlidePrev = true;    // spravne
    swiperRef.current.allowTouchMove = true;    // ak chceš aj touch
    swiperRef.current.simulateTouch = true;     // ak chceš aj simulateTouch
}

const pipi = () => {
swiperRef.current.mousewheel.disable();
    swiperRef.current.allowSlideNext = false;
    swiperRef.current.allowSlidePrev = false;
    swiperRef.current.allowTouchMove = false;
    swiperRef.current.simulateTouch = false;
}



useEffect(() => {
   if (!swiperRef.current)  return;

  if (malodotadtocen) {
  if (oblubene2.length >= 6) {
   koko()
  } else {
    pipi()
  }
}
 if (malo) {
  if (oblubene2.length >= 5) {
    koko()   // ak chceš aj simulateTouch
  } else {
  pipi()
  }

}
 
 if (malo2) {
  if (oblubene2.length >= 4) {
   koko()  // ak chceš aj simulateTouch
  } else {
   pipi()
  }

}
 if (malo3) {
  if (oblubene2.length >= 3) {
   koko()  // ak chceš aj simulateTouch
  } else {
   pipi()
  }

}
 if (malo4) {
  if (oblubene2.length >= 2) {
   koko()  // ak chceš aj simulateTouch
  } else {
   pipi()
  }

}
 

}, [oblubene2.length,oblubene2, malodotadtocen, malo,malo2,malo3,malo4]);

  return (
    <>

    <div className='Maincast4' style = {stylicecek} ref={nastavenie}>
        <div className='textCastmain4' style={stilikak}>
          <div>
            <span className='TEXTICEKNEAOVICEK4' >  {isMobile ? textMobile : isTablet ? textTablet : textDesktop}</span>
            <p className='textpodhlavnuym4'> {isMobile ? textMobileMALY : isTablet ? textTabletMALY : textDesktopMALY}</p>
            </div>
            {/* <div className='pohybac4'>

              <div  className='spikecakk2'
       ref={lava}
               style={{
                zIndex:"1",
                position:"relative"

            }}
           onClick={() => swiperRef.current?.slidePrev()}
              >
                <i className='bx bx-chevron-left'></i>
              </div>

              <div className='spikecakk'
                ref={prava}
         
              style={{
                zIndex:"1",
                 position:"relative"

              }}
             onClick={() => swiperRef.current?.slideNext()}
              >
                <i className='bx bx-chevron-right'></i>
              </div>
            </div> */}
        </div>
       
       <div className='swipereceobal4' style={{ padding: malo5 ? "0px 0px 0px 10px" : "0px 0px 0px 20px" }}
  
       >

         <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Navigation, Pagination, Autoplay, Mousewheel, Virtual]}
          observer={true}
          observeParents={true}
         
          resizeObserver={true}
          spaceBetween={10}
          slidesPerView={1.5}
          slidesOffsetAfter={malo5 ? 10 : 20}
          preventInteractionOnTransition={true}
          touchStartPreventDefault={true}
          touchMoveStopPropagation={true}
          
     

          breakpoints={{
             320: { slidesPerView: 1.5, spaceBetween: 10 },
            480: { slidesPerView: 2.1, spaceBetween: 10 },
            550: { slidesPerView: 3.2, spaceBetween: 10 },
            850: { slidesPerView: 3.5, spaceBetween: 10 },
            930: { slidesPerView: 3.5, spaceBetween: 10 },
            1000: { slidesPerView: 4.5, spaceBetween: 10 },
            1294: { slidesPerView: 5.5, spaceBetween: 10 },
          }}
      >
          {oblubene2.map((prev, index) => (
            <SwiperSlide key={prev.id} virtualIndex={index}>

              <NahladOblubene

              idecko = {prev.id}
                klik22={() =>{
                 
             
                console.log("okno");
                
                }
                }
                zmaz={{ display: "none" }}
                style={{
                  padding: "0px",
                  width: "100%",
                  height: "100%",
                }}
                unikat = {prev.id}
                kontrola={false}
                fotky={prev.fotky}
                apartman={prev}
                nazov={prev.name}
                location={prev.location}
                hodnotenie={prev.hodnotenie}
              />
            </SwiperSlide>
          ))}
        </Swiper>
   
       

      



     
                                        </div>
      
    </div>
    </>
  )
}

export default ObluneneSwiper

  