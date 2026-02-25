import './special.css'

import React, { useRef, useEffect, useState, use } from 'react'


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
import Nahlad2 from '../../naviac/nahlad2/nahlad2'
import {apartmany} from '../fuzzy/fuzzy'

import { ikonyPonuk } from "../ponuka/ponuka";


import Lajknute from '../lajknute/lajknute'
import useBreakpoint from '../hook/breakpoint'
import { useMediaQuery } from "react-responsive";
const Special = ({textMobile,textTablet,textDesktop,data = [],malytext,stilikak,stylicecek,lava,prava,textMobileMALY,textTabletMALY,textDesktopMALY}) => {
 
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

console.log(oblubene);

const funkcia = (id) => {
  setOblubene(prev => prev.filter(item => item.id !== id));
lajkujem();
setMala(false)


};


//   useEffect(() => {
//   setMala("Pridané");

// }, [pocetOblubene]);

// const referencianaswiper = useRef(null)
const malodotadtocen = useMediaQuery({ minWidth: 1295 });              // 1295+
const malo           = useMediaQuery({ minWidth: 1000, maxWidth: 1294 }); // 1001–1294
const malo2          = useMediaQuery({ maxWidth: 999 });  
const malo3          = useMediaQuery({ maxWidth: 930 });  
const malo4          = useMediaQuery({ maxWidth: 550 });  
const malo5         = useMediaQuery({ maxWidth: 345 });  

const kontorlo         = useMediaQuery({ maxWidth: 480 });  

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
  if (oblubene.length >= 8) {
   koko()
  } else {
    pipi()
  }
}
 if (malo) {
  if (oblubene.length >= 7) {
    koko()   // ak chceš aj simulateTouch
  } else {
  pipi()
  }

}
 
 if (malo2) {
  if (oblubene.length >= 6) {
   koko()  // ak chceš aj simulateTouch
  } else {
   pipi()
  }

}

 if (malo3) {
  if (oblubene.length >= 5) {
   koko()  // ak chceš aj simulateTouch
  } else {
   pipi()
  }

}
 if ( malo4    ) {
  if (oblubene.length >= 4) {
   koko()  // ak chceš aj simulateTouch
  } else {
   pipi()
  }

}
 if ( malo5   ) {
  if (oblubene.length >= 3) {
   koko()  // ak chceš aj simulateTouch
  } else {
   pipi()
  }

}
 

}, [oblubene.length,oblubene, malodotadtocen, malo,malo2,malo3, malo4    ]);
  return (
    <>

    <div className='Maincast32' style = {stylicecek}>
        <div className='textCastmain' style={stilikak}>
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
       
       <div className='swipereceobal'>
        <Swiper
        // ref = {referencianaswiper}
               onSwiper={(swiper) => (swiperRef.current = swiper)}
      modules={[Navigation, Pagination, Autoplay, Mousewheel, Virtual]}
      observer={true}
      observeParents={true}
      resizeObserver={true}
      spaceBetween={10}
      slidesPerView={1.5}
      slidesOffsetAfter={offset} // dynamický offset podľa state
      preventInteractionOnTransition={true}
      touchStartPreventDefault={true}
      touchMoveStopPropagation={true}
      breakpoints={{
        320: { slidesPerView: 2.5, spaceBetween: 10 },
                480: { slidesPerView: 3.1, spaceBetween: 10 },
                550: { slidesPerView: 4.2, spaceBetween: 10},
                850: { slidesPerView: 4.5, spaceBetween: 10},
                930: { slidesPerView: 5.5, spaceBetween: 10 },
                1000: { slidesPerView: 6.5, spaceBetween: 10 },
                1294: { slidesPerView: 7.5, spaceBetween: 10 },
      }}
      mousewheel={{
        forceToAxis: true,
        releaseOnEdges: false,
        invert: false,
        sensitivity: 1,
      }}
            >

                {oblubene.map((prev,index) => (
                  <>

                 
            <SwiperSlide  key={prev.id} virtualIndex={index}>
      
                <Nahlad2
                schovatjmozno = {{display:malo5 ? "none" : "block"}}
                ikonaaaaa={<i class='bx bx-x' ></i>}
                // klikamkoko = {() => funkcia(prev.id) }

              klikkam={(e) => {
  e.stopPropagation();
  funkcia(prev.id);
}}

                // klikamkoko =  {funkcia()}
                // klik22={() => {
                // setKontext(prev => !prev);
                // setTextdo(prev);

                 

               
                // // setTextdo({
                // //             name: prev.name,
                // //             krajina: prev.krajina,
                // //          fotka: prev.fotky[0]
                // //           });
                // ;}}
                zmaz = {{display: "none"}}
                style={{
                
                 
                    padding:"0px",
                    width: "100%",
                    height:"100%",
                }}
                   kontrola = {false}
                  //  prepinam = {}
                   
                   fotky = {prev.fotky}
                apartman={prev}
                nazov = {prev.krajina}
                location = {prev.location}
                krajina={prev.location}
                hodnotenie = {prev.hodnotenie}

            >
            
              </Nahlad2> 
 
     
            </SwiperSlide>
            </>
                ))}
            
                            
                                
                                
                                        </Swiper>
                                        </div>
      
    </div>
    </>
  )
}

export default Special

  