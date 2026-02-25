import './maincastmensie.css'

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
import Nahlad  from '../nahlad/nahlad'
import {apartmany} from '../fuzzy/fuzzy'

import { ikonyPonuk } from "../ponuka/ponuka";

import useBreakpoint from '../hook/breakpoint'

const Maincastmensie = ({textMobile,textTablet,textDesktop,data = [],malytext,stilikak,stylicecek,lava,prava,textMobileMALY,textTabletMALY,textDesktopMALY}) => {
 
  const { pocetOblubene, setPocetOblubene, filter, setFilter } = useContext(GlobalContext);

  const { isMobile,isTablet,isDesktop } = useBreakpoint();
  const swiperRef = useRef(null);
  const [offset, setOffset] = useState(
    window.innerWidth >= 1100 ? 40 : 20
  );

   useEffect(() => {
    const handleResize = () => {
      setOffset(window.innerWidth >= 1100 ? 40 : 20);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className='Maincast' style = {stylicecek}>
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
        320: { slidesPerView: 2.1, spaceBetween: 10 },
        480: { slidesPerView: 3.2, spaceBetween: 10 },
        550: { slidesPerView: 4.2, spaceBetween: 10 },
        850: { slidesPerView: 4.2, spaceBetween: 10 },
        930: { slidesPerView: 4.2, spaceBetween: 10 },
        1000: { slidesPerView: 5.2, spaceBetween: 10 },
        1294: { slidesPerView: 6.2, spaceBetween: 10 },
      }}
      mousewheel={{
        forceToAxis: true,
        releaseOnEdges: false,
        invert: false,
        sensitivity: 1,
      }}
            >

                {data.map((prev,index) => (
            <SwiperSlide  key={prev.id} virtualIndex={index}>
        
                <Nahlad
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
                nazov = {prev.name}
                location = {prev.location}
                hodnotenie = {prev.hodnotenie}

            ></Nahlad> 
 
     
            </SwiperSlide>
                ))}
            
                            
                                
                                
                                        </Swiper>
                                        </div>
      
    </div>
  )
}

export default Maincastmensie

  