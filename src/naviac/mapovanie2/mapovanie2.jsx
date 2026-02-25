import './mapovanie2.css'

import React, { useRef, useEffect, useState } from 'react'


import { motion, AnimatePresence, color } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Mousewheel,Virtual } from 'swiper/modules';
import 'swiper/css';
import { MyContext } from '../providertelefon/providertelefon'
import NahladSpecial from '../../naviac/nahladspecial/nahladspecial'
import { useContext } from "react";
import { GlobalContext } from '../reactcontext/reactcontext'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Hodnotenie from '../hodnotenie/hodnotenie'
import Ukazovatelko from '../ukazovatelko/ukazovatelko'
import NahladOblubene from '../nahladoblubene/nahladoblubene'
import {apartmany} from '../fuzzy/fuzzy'

import { ikonyPonuk } from "../ponuka/ponuka";
import Budeto2 from '../../naviac/budeto2/budeto2'

import useBreakpoint from '../hook/breakpoint'
import { useLocation, useNavigate } from "react-router-dom";
import Lajknute from '../lajknute/lajknute'
// import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from "react-responsive";
import Templatelogika from '../../naviac/templatelogika/templatelogika'

import Maleokno from  '../../naviac/maleokno/maleokno'
const Mapovanie2 = ({textMobile,textTablet,textDesktop,subor2,malytext,stilikak,stylicecek,lava,prava,textMobileMALY,textTabletMALY,textDesktopMALY}) => {
 
   const { pocetOblubene, setPocetOblubene, filter, setFilter,owerlap,seTeraz,teraz ,popokno,setPopokno,
      lajknute,setLajknute,lajkujem,texdo,setTextdo,kontext,setKontext,oblubene,setOblubene,mala,setMala 
     } = useContext(GlobalContext);
        const { suborOpen,setSuborOpen,obsahOpen,setObsahOpen,subor,setSubor,nazovSuboru,setNazovSuboru} = useContext(MyContext);


    //  console.log(subor2.zbierka);
    //  console.log("pica")
     console.log(subor2);
     
  const { isMobile,isTablet,isDesktop } = useBreakpoint();
  const swiperRef = useRef(null);
  const [offset, setOffset] = useState(
    window.innerWidth >= 1100 ? 20 : 20
  );

const nastavenie2 = useRef(null)



const malodotadtocen = useMediaQuery({ minWidth: 1295 });              // 1295+
const malo           = useMediaQuery({ minWidth: 1001, maxWidth: 1294 }); // 1001–1294
const malo2          = useMediaQuery({ maxWidth: 1000 });   
const malo3          = useMediaQuery({ maxWidth: 550 });   
const malo4         = useMediaQuery({ maxWidth: 480 });   








  useEffect(() => {
    if (subor2.length > 0 ) {
      nastavenie2.current.style.height = "fit-content"
      nastavenie2.current.style.padding = "0px 0px 10px 0px"
    }
    else{
       nastavenie2.current.style.height = "355px"
    }
  

}, [subor2]);
// console.log(nastavenie2.current);
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

const navigate = useNavigate();


//       ? <Budeto2 setOblubene={setOblubene} data={subor2} />
//          : <Swiper
//           onSwiper={(swiper) => (swiperRef.current = swiper)}
//           modules={[Navigation, Pagination, Autoplay, Mousewheel, Virtual]}
//           observer={true}
//           observeParents={true}
//           resizeObserver={true}
//           spaceBetween={10}
//           slidesPerView={1.5}
//           slidesOffsetAfter={offset}
//           preventInteractionOnTransition={true}
//           touchStartPreventDefault={true}
//           touchMoveStopPropagation={true}
//           breakpoints={{
//             320: { slidesPerView: 1.5, spaceBetween: 10 },
//             480: { slidesPerView: 2.1, spaceBetween: 10 },
//             550: { slidesPerView: 3.2, spaceBetween: 10 },
//             850: { slidesPerView: 3.5, spaceBetween: 10 },
//             930: { slidesPerView: 3.5, spaceBetween: 10 },
//             1000: { slidesPerView: 4.5, spaceBetween: 10 },
//             1294: { slidesPerView: 5.5, spaceBetween: 10 },
//           }}
//           mousewheel={{
//             forceToAxis: true,
//             releaseOnEdges: false,
//             invert: false,
//             sensitivity: 1,
//           }}
//         >
//           {subor2.map((item, index) => (
//             <SwiperSlide key={item.id} virtualIndex={index}>
//                <NahladSpecial
//                style={{
//                   padding: "0px",
//                   width: "100%",
//                   height: "100%",
//                 }}
//         key={item.id}
//         klik22={() => navigate(`/Detailpagee/${item.id}`)}
//          fotky = {item.fotky}
//          unikatne = {item.id}
//                 apartman={item}
//                 nazov = {item.nazov}
//                 location = {`tu ${item.nazov}`}
//                 hodnotenie = {"tudajrok"}
//               fotka69={ <div class="my-div">
//                   {item?.zbierka.length > 0  &&   <img className = "foktafotkafotkateofkeke2" src = {item?.zbierka[0]?.nova44?.fotky[0]}  />}
// </div>}
//                 fotka1 = {
//                 <div class="my-div">
//                   {item?.zbierka.length > 0  &&   <img className = "foktafotkafotkateofkeke" src = {item?.zbierka[0]?.nova44?.fotky[0]}  />}

                


//                 </div>}
               

//                 fotka2 = {<div className="my-div">
//                   {item.zbierka.length > 1 &&  <img className = "foktafotkafotkateofkeke" src = {item?.zbierka[1]?.nova44?.fotky[0]} alt="popis obrázk" /> }
                 
//                 </div>}
//                 fotka3 = {<div  className="my-div">
//                      {item.zbierka.length > 2 &&  <img className = "foktafotkafotkateofkeke" src = {item?.zbierka[2]?.nova44?.fotky[0]} alt="popis obrázk" /> }
                 

//                 </div>}
//                 fotka4 = {<div className="my-div">
//                       {item.zbierka.length > 3 &&  <img className = "foktafotkafotkateofkeke" src = {item?.zbierka[3]?.nova44?.fotky[0]} alt="popis obrázk" /> }
                 

//                 </div>}
//         >

          
           
            
//         </NahladSpecial>
              
//             </SwiperSlide>
//           ))}
//         </Swiper>
//   }

//   if (malo2) {
//     // 880–1099
//     return oblubene.length > 0 && oblubene.length <= 4
//       ? <Budeto2 setOblubene={setOblubene} data={subor2} />
//          : <Swiper
//           onSwiper={(swiper) => (swiperRef.current = swiper)}
//           modules={[Navigation, Pagination, Autoplay, Mousewheel, Virtual]}
//           observer={true}
//           observeParents={true}
//           resizeObserver={true}
//           spaceBetween={10}
//           slidesPerView={1.5}
//           slidesOffsetAfter={offset}
//           preventInteractionOnTransition={true}
//           touchStartPreventDefault={true}
//           touchMoveStopPropagation={true}
//           breakpoints={{
//             320: { slidesPerView: 1.5, spaceBetween: 10 },
//             480: { slidesPerView: 2.1, spaceBetween: 10 },
//             550: { slidesPerView: 3.2, spaceBetween: 10 },
//             850: { slidesPerView: 3.5, spaceBetween: 10 },
//             930: { slidesPerView: 3.5, spaceBetween: 10 },
//             1000: { slidesPerView: 4.5, spaceBetween: 10 },
//             1294: { slidesPerView: 5.5, spaceBetween: 10 },
//           }}
//           mousewheel={{
//             forceToAxis: true,
//             releaseOnEdges: false,
//             invert: false,
//             sensitivity: 1,
//           }}
//         >
//           {subor2.map((item, index) => (
//             <SwiperSlide key={item.id} virtualIndex={index}>
//                <NahladSpecial
//                style={{
//                   padding: "0px",
//                   width: "100%",
//                   height: "100%",
//                 }}
//         key={item.id}
//         klik22={() => navigate(`/Detailpagee/${item.id}`)}
//          fotky = {item.fotky}
//          unikatne = {item.id}
//                 apartman={item}
//                 nazov = {item.nazov}
//                 location = {`tu ${item.nazov}`}
//                 hodnotenie = {"tudajrok"}
//               fotka69={ <div class="my-div">
//                   {item?.zbierka.length > 0  &&   <img className = "foktafotkafotkateofkeke2" src = {item?.zbierka[0]?.nova44?.fotky[0]}  />}
// </div>}
//                 fotka1 = {
//                 <div class="my-div">
//                   {item?.zbierka.length > 0  &&   <img className = "foktafotkafotkateofkeke" src = {item?.zbierka[0]?.nova44?.fotky[0]}  />}

                


//                 </div>}
               

//                 fotka2 = {<div className="my-div">
//                   {item.zbierka.length > 1 &&  <img className = "foktafotkafotkateofkeke" src = {item?.zbierka[1]?.nova44?.fotky[0]} alt="popis obrázk" /> }
                 
//                 </div>}
//                 fotka3 = {<div  className="my-div">
//                      {item.zbierka.length > 2 &&  <img className = "foktafotkafotkateofkeke" src = {item?.zbierka[2]?.nova44?.fotky[0]} alt="popis obrázk" /> }
                 

//                 </div>}
//                 fotka4 = {<div className="my-div">
//                       {item.zbierka.length > 3 &&  <img className = "foktafotkafotkateofkeke" src = {item?.zbierka[3]?.nova44?.fotky[0]} alt="popis obrázk" /> }
                 

//                 </div>}
//         >

          
           
            
//         </NahladSpecial>
              
//             </SwiperSlide>
//           ))}
//         </Swiper>
//   }

//   if (malo) {
//     // 750–879
//     return oblubene.length > 0 && oblubene.length <= 3
//       ? <Budeto2 setOblubene={setOblubene} data={subor2} />
//         : 
//   }

//   return null;
// };
useEffect(() => {
   if (!swiperRef.current)  return;

  if (malodotadtocen) {
  if (subor2.length >= 6) {
   koko()
  } else {
    pipi()
  }
}
 if (malo) {
  if (subor2.length >= 5) {
    koko()   // ak chceš aj simulateTouch
  } else {
  pipi()
  }

}
 
 if (malo2) {
  if (subor2.length >= 4) {
   koko()  // ak chceš aj simulateTouch
  } else {
   pipi()
  }
 }
 if (malo3) {
  if (subor2.length >= 3) {
   koko()  // ak chceš aj simulateTouch
  } else {
   pipi()
  }

}
 if (malo4) {
  if (subor2.length >= 2) {
   koko()  // ak chceš aj simulateTouch
  } else {
   pipi()
  }

}


}, [subor2.length,subor2, malodotadtocen, malo,malo2,malo3,malo4]);




  return (
    <>



            
          

    <div className='Maincast5' style = {stylicecek} ref={nastavenie2}>
        <div className='textCastmain4' style={stilikak}>
          <div>
            <span className='TEXTICEKNEAOVICEK4' >  {isMobile ? textMobile : isTablet ? textTablet : textDesktop}</span>
            <p className='textpodhlavnuym4'> {isMobile ? textMobileMALY : isTablet ? textTabletMALY : textDesktopMALY}</p>
            </div>
            
        </div>
       
       <div className='swipereceobal2'>
        <Swiper
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
         
     
        >
          {subor2.map((item, index) => (
            <SwiperSlide key={item.id} virtualIndex={index}>
               <NahladSpecial
             onClick22 = {() => navigate(`/Detailpagee/${item.id}`)
             }
               zmaz2 = {{color:"var(--farba-cierna)"}}
               style={{
                  padding: "0px",
                  width: "100%",
                  height: "100%",
              // backgroundColor: "red"
                }}
                farbatocopotrebujem = {{
                   backgroundColor: item?.zbierka.length > 0 ? "var(--farba-biela)" : "var(--farba-main2)"
                }}
        key={item.id}
        klik22={() => navigate(`/Detailpagee/${item.id}`)}
        
         fotky = {item.fotky}
         unikatne = {item.id}
                apartman={item}
                nazov = {item.nazov}
                location = {`${item.zbierka.length}`}
                hodnotenie = {item.datum}
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
              
            </SwiperSlide>
          ))}
        </Swiper>
       

      




     
                                        </div>
      
    </div>
    </>
  )
}

export default Mapovanie2

  