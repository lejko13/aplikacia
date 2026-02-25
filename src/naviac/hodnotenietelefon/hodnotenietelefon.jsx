import './/hodnotenietelefon.css'

import React, { useRef, useEffect, useState } from 'react'
import { Navigation, Pagination, Autoplay, Mousewheel,Virtual } from 'swiper/modules';
import 'swiper/css';
import { useContext } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { GlobalContext } from '../reactcontext/reactcontext'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Futertex from '../../naviac/futertext/futertex'

const Hodnotenietelefon = ({data}) => {

  
  const swiperRef = useRef(null);
  return (
    <div className='drziazcelejapp'>
      <div className='kokottnejk'>
         <Swiper
        
        
               onSwiper={(swiper) => (swiperRef.current = swiper)}
      modules={[Navigation, Pagination, Autoplay, Mousewheel, Virtual]}
      observer={true}
      observeParents={true}
      resizeObserver={true}
      spaceBetween={10}
      slidesPerView={1.2}
      // slidesOffsetAfter={offset} // dynamický offset podľa state
      preventInteractionOnTransition={true}
      touchStartPreventDefault={true}
      touchMoveStopPropagation={true}
      breakpoints={{
        320: { slidesPerView: 1.2, spaceBetween: 10 },
      
        700: { slidesPerView: 2.4, spaceBetween: 10 },
      
     
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
        
              <Futertex
              stylicek = {{height:"150px"}}
  texthore={prev.klientMeno}
  textdole={prev.klientPriezvisko}
  fotka={prev.klientFotky}
  pobyt={prev.klientAkoDlho}
  popis={prev.klientHodnotenie}
  hodnota={prev.klientHodnotenieVlaste}
  zobrazit={true}   // podľa potreby
  popisecek={prev.klientMesto}
  datum={prev.klientDatum}
 
/>
 
     
            </SwiperSlide>
                ))}
            
                        
                                
                                
                                        </Swiper>
      </div>
       {/* <div className='pohybac'>

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
  )
}

export default Hodnotenietelefon
