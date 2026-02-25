import './mapovanie.css'

import React, { useRef, useEffect, useState } from 'react'

import NahladSpecial from '../../naviac/nahladspecial/nahladspecial'
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
import NahladOblubene from '../nahladoblubene/nahladoblubene'
import {apartmany} from '../fuzzy/fuzzy'

import { ikonyPonuk } from "../ponuka/ponuka";
import { useLocation, useNavigate } from "react-router-dom";

import useBreakpoint from '../hook/breakpoint'
import Lajknute from '../lajknute/lajknute'
const Mapovanie = ({textMobile,textTablet,textDesktop,subor = [],malytext,stilikak,stylicecek,lava,prava,textMobileMALY,textTabletMALY,textDesktopMALY}) => {
 
   const { pocetOblubene, setPocetOblubene, filter, setFilter,owerlap,seTeraz,teraz ,popokno,setPopokno,
      lajknute,setLajknute,lajkujem,texdo,setTextdo,kontext,setKontext,oblubene,setOblubene,mala,setMala 
     } = useContext(GlobalContext);
      const navigate = useNavigate();

  const { isMobile,isTablet,isDesktop } = useBreakpoint();
  const swiperRef = useRef(null);
  const [offset, setOffset] = useState(
    window.innerWidth >= 1100 ? 20 : 20
  );

  return (
    <>

    <div className='Maincast5' style = {stylicecek} >
        <div className='textCastmain4' style={stilikak}>
          <div>
            <span className='TEXTICEKNEAOVICEK4' >  {isMobile ? textMobile : isTablet ? textTablet : textDesktop}</span>
            <p className='textpodhlavnuym4'> {isMobile ? textMobileMALY : isTablet ? textTabletMALY : textDesktopMALY}</p>
            </div>
            
        </div>
       
       <div className='swipereceobal'>
           <div className='gridmapovanie'>
         {subor.map((item,index) => (

        <NahladSpecial
        key={item.id}
 
        klik22={() => navigate(`/Detailpagee/${item.id}`)}
         fotky = {item.fotky}
         unikatne = {item.id}
                apartman={item}
                nazov = {item.nazov}
                location = {`tu ${item.nazov}`}
                hodnotenie = {"tudajrok"}
              fotka69={ <div class="my-div">
                  {item?.zbierka.length > 0  &&   <img className = "foktafotkafotkateofkeke2" src = {item?.zbierka[0]?.nova44?.fotky[0]}  />}
</div>}
                fotka1 = {
                <div class="my-div">
                  {item?.zbierka.length > 0  &&   <img className = "foktafotkafotkateofkeke" src = {item?.zbierka[0]?.nova44?.fotky[0]}  />}

                


                </div>}
               

                fotka2 = {<div className="my-div">
                  {item.zbierka.length > 1 &&  <img className = "foktafotkafotkateofkeke" src = {item?.zbierka[1]?.nova44?.fotky[0]} alt="popis obrázk" /> }
                 
                </div>}
                fotka3 = {<div  className="my-div">
                     {item.zbierka.length > 2 &&  <img className = "foktafotkafotkateofkeke" src = {item?.zbierka[2]?.nova44?.fotky[0]} alt="popis obrázk" /> }
                 

                </div>}
                fotka4 = {<div className="my-div">
                      {item.zbierka.length > 3 &&  <img className = "foktafotkafotkateofkeke" src = {item?.zbierka[3]?.nova44?.fotky[0]} alt="popis obrázk" /> }
                 

                </div>}
        >

          
           
            
        </NahladSpecial>
      ))}
      </div>
        {/* <Swiper
        
        
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
        320: { slidesPerView: 1.5, spaceBetween: 10 },
        480: { slidesPerView: 2.1, spaceBetween: 10 },
        550: { slidesPerView: 3.2, spaceBetween: 10 },
        850: { slidesPerView: 3.5, spaceBetween: 10 },
        930: { slidesPerView: 3.5, spaceBetween: 10 },
        1000: { slidesPerView: 4.5, spaceBetween: 10 },
        1294: { slidesPerView: 5.5, spaceBetween: 10 },
      }}
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
      
                <NahladOblubene
                
                klik22={() =>  setOblubene(smola => smola.filter(item => item.id !== prev.id))}
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

            >
            
              </NahladOblubene> 
 
     
            </SwiperSlide>
            </>
                ))}
            
                            
                                
                                
                                        </Swiper> */}
                                        </div>
      
    </div>
    </>
  )
}

export default Mapovanie

  