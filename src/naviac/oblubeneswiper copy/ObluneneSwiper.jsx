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
import NahladOblubene from '../nahladoblubene/nahladoblubene'
import {apartmany} from '../fuzzy/fuzzy'

import { ikonyPonuk } from "../ponuka/ponuka";
import Budtoaleboto from '../budtoaleboto/budtoaleboto'

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


//     const novymedia = useMediaQuery({ minWidth: 1250 });
//   const stary = useMediaQuery({ maxWidth: 1249 });
// const dalsi = useMediaQuery({ maxWidth: 1050 });
const malo = useMediaQuery({ minWidth: 750 });
const malo2 = useMediaQuery({ minWidth: 880 });
const malo3 = useMediaQuery({ minWidth: 1100 });

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
      nastavenie.current.style.padding = "0px 0px 10px 0px"
    }
    else{
       nastavenie.current.style.height = "355px"
    }
  

}, [oblubene]);


const volam = () => {
  if (malo3) {
    // 1100+
    return oblubene.length > 0 && oblubene.length <= 5
      ? <Budtoaleboto setOblubene={setOblubene} data={oblubene2} />
         : <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Navigation, Pagination, Autoplay, Mousewheel, Virtual]}
          observer={true}
          observeParents={true}
          resizeObserver={true}
          spaceBetween={10}
          slidesPerView={1.5}
          slidesOffsetAfter={offset}
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
          {oblubene2.map((prev, index) => (
            <SwiperSlide key={prev.id} virtualIndex={index}>
              <NahladOblubene
                klik22={() =>
                  setOblubene((smola) => smola.filter((item) => item.id !== prev.id))
                }
                zmaz={{ display: "none" }}
                style={{
                  padding: "0px",
                  width: "100%",
                  height: "100%",
                }}
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
  }

  if (malo2) {
    // 880–1099
    return oblubene.length > 0 && oblubene.length <= 4
      ? <Budtoaleboto setOblubene={setOblubene} data={oblubene2} />
          : <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Navigation, Pagination, Autoplay, Mousewheel, Virtual]}
          observer={true}
          observeParents={true}
          resizeObserver={true}
          spaceBetween={10}
          slidesPerView={1.5}
          slidesOffsetAfter={offset}
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
          {oblubene2.map((prev, index) => (
            <SwiperSlide key={prev.id} virtualIndex={index}>
              <NahladOblubene
                klik22={() =>
                  setOblubene((smola) => smola.filter((item) => item.id !== prev.id))
                }
                zmaz={{ display: "none" }}
                style={{
                  padding: "0px",
                  width: "100%",
                  height: "100%",
                }}
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
  }

  if (malo) {
    // 750–879
    return oblubene.length > 0 && oblubene.length <= 3
      ? <Budtoaleboto setOblubene={setOblubene} data={oblubene2} />
          : <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Navigation, Pagination, Autoplay, Mousewheel, Virtual]}
          observer={true}
          observeParents={true}
          resizeObserver={true}
          spaceBetween={10}
          slidesPerView={1.5}
          slidesOffsetAfter={offset}
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
          {oblubene2.map((prev, index) => (
            <SwiperSlide key={prev.id} virtualIndex={index}>
              <NahladOblubene
                klik22={() =>
                  setOblubene((smola) => smola.filter((item) => item.id !== prev.id))
                }
                zmaz={{ display: "none" }}
                style={{
                  padding: "0px",
                  width: "100%",
                  height: "100%",
                }}
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
  }

  return null;
};

// const volam = () => {

//   if (malo) {
//     return((oblubene.length > 0 && oblubene.length < 2)
//      ?<Budtoaleboto setOblubene={setOblubene} data={oblubene2} />
//       : <div></div>
//   )
    
//   }
//  else if (dalsi) {
//     return((oblubene.length > 0 && oblubene.length < 4)
//     ?<Budtoaleboto setOblubene={setOblubene} data={oblubene2} />
//       : <div></div>
    

//     )
//   } else if (stary) {
//     return(((oblubene.length > 0 && oblubene.length < 6)
//     ?<Budtoaleboto setOblubene={setOblubene} data={oblubene2} />
//     : <div></div>

  
//   ))
    
//   } else if (novymedia) 
//     return ((oblubene.length > 0 && oblubene.length < 7)
//       ? <Budtoaleboto setOblubene={setOblubene} data={oblubene2} />
//         : <div></div>
//       // : 
//       //   <Swiper
//       //     onSwiper={(swiper) => (swiperRef.current = swiper)}
//       //     modules={[Navigation, Pagination, Autoplay, Mousewheel, Virtual]}
//       //     observer={true}
//       //     observeParents={true}
//       //     resizeObserver={true}
//       //     spaceBetween={10}
//       //     slidesPerView={1.5}
//       //     slidesOffsetAfter={offset}
//       //     preventInteractionOnTransition={true}
//       //     touchStartPreventDefault={true}
//       //     touchMoveStopPropagation={true}
//       //     breakpoints={{
//       //       320: { slidesPerView: 1.5, spaceBetween: 10 },
//       //       480: { slidesPerView: 2.1, spaceBetween: 10 },
//       //       550: { slidesPerView: 3.2, spaceBetween: 10 },
//       //       850: { slidesPerView: 3.5, spaceBetween: 10 },
//       //       930: { slidesPerView: 3.5, spaceBetween: 10 },
//       //       1000: { slidesPerView: 4.5, spaceBetween: 10 },
//       //       1294: { slidesPerView: 5.5, spaceBetween: 10 },
//       //     }}
//       //     mousewheel={{
//       //       forceToAxis: true,
//       //       releaseOnEdges: false,
//       //       invert: false,
//       //       sensitivity: 1,
//       //     }}
//       //   >
//       //     {oblubene2.map((prev, index) => (
//       //       <SwiperSlide key={prev.id} virtualIndex={index}>
//       //         <NahladOblubene
//       //           klik22={() =>
//       //             setOblubene((smola) => smola.filter((item) => item.id !== prev.id))
//       //           }
//       //           zmaz={{ display: "none" }}
//       //           style={{
//       //             padding: "0px",
//       //             width: "100%",
//       //             height: "100%",
//       //           }}
//       //           kontrola={false}
//       //           fotky={prev.fotky}
//       //           apartman={prev}
//       //           nazov={prev.name}
//       //           location={prev.location}
//       //           hodnotenie={prev.hodnotenie}
//       //         />
//       //       </SwiperSlide>
//       //     ))}
//       //   </Swiper>
//       )
  

//   return null;
// };

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
       
       <div className='swipereceobal'>
        {volam()}
       

      
{/*     
        {novymedia && (oblubene.length > 0 && oblubene.length < 7)  &&  <Budtoaleboto setOblubene = {setOblubene} data = {oblubene2}></Budtoaleboto>}


        {novymedia && (oblubene.length >= 7)  &&  <Swiper
        
        
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

                {oblubene2.map((prev,index) => (
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
            
                            
                                
                                
                                        </Swiper> }

        {stary && (oblubene.length > 0 && oblubene.length < 6)  &&  <Budtoaleboto setOblubene = {setOblubene} data = {oblubene2}></Budtoaleboto>}


        {stary && (oblubene.length >= 6)  &&  <Swiper
        
        
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

                {oblubene2.map((prev,index) => (
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
            
                            
                                
                                
                                        </Swiper> }

      {dalsi && (oblubene.length > 0 && oblubene.length < 4) && <Budtoaleboto setOblubene = {setOblubene} data = {oblubene2}></Budtoaleboto>}

         {dalsi && (oblubene.length >= 5 )  && 
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

                {oblubene2.map((prev,index) => (
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
            
                            
                                
                                
                                        </Swiper>} */}



     
                                        </div>
      
    </div>
    </>
  )
}

export default ObluneneSwiper

  