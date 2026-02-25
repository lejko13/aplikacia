import './strankaProjekt.css'
// import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence, color } from "framer-motion";
import Footer from '../footer/footer'

import React, { useState, useRef,useContext,useEffect } from 'react';
import { GlobalContext } from '../../naviac/reactcontext/reactcontext'

import Templatepage from '../tempaltepage/templatepage'
import Ikonypage from '../../naviac/ikonypage/ikonypage'

import Zobrazeniedat from '../../naviac/zobrazeniedat/zobrazeniedat'
import Kolazfotka from '../../naviac/kolazfotka/kolazfotka'
import Ukazkahodnoteie from '../../naviac/ukazkahodnotenie/ukazkahodnotenie'
// import Impulz from '../impulz/impluz'
import Owerlap from '../owerlap/owerlap'
import Textvzorecek from '../../naviac/textvzrorecek/textvzorecek'

import Prihlasenie from '../../naviac/prihlasenie/prihlasenie'

import Form from '../../naviac/formular/formular'

import Lenkukazka from '../../naviac/lenukazka/lenkukazka'
import Impulz from '../../naviac/impulz/impluz'

import Futertex from '../../naviac/futertext/futertex'

import Doleelement from '../../naviac/doleelement/doleelement'

import Linka from '../../naviac/linka/linka'

import Hybesa from '../../naviac/hybesa/hybesa'
import {ludia} from '../../naviac/zoznamosoby/zoznamosoby'

import Tabulecak from '../../naviac/tabulecak/tabulecak'
import Lenhodnotenie from '../../naviac/lenhodnotenie/lenhodnotenie'

import Hybesto from '../../naviac/hybesto/hybesto'
import Komponenta from '../../naviac/komponenta/komponenta'
import Star from '../../naviac/star/star'
import { MdOutlineCleaningServices } from "react-icons/md";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoMdTime } from "react-icons/io";
import { RiGraduationCapLine } from "react-icons/ri";
import { FiFileText } from "react-icons/fi";
import { MdOutlineTextsms } from "react-icons/md";
import { FaRegMap } from "react-icons/fa6";
import { PiMoney } from "react-icons/pi";

import { LuBriefcaseBusiness } from "react-icons/lu";
import Zobrazenieuctu from '../../naviac/zobrazenieuctu/zobrazenieuctu'
import Vnutrozobrazenie from '../../naviac/vnutrozobrazenie/vnutrozobrazenie'

import Vertikala from '../../naviac/vertikala/vertikala'
import Ikonaikona from '../../naviac/ikonaikona/ikonaikona'
import Vyhodyzaklad from '../../naviac/vyhodyzakalad/vyhodyzaklad'
import Ikonyukazka from '../../naviac/ikonyukazka/ikonyukazka'
import Otomto from '../../naviac/otomto/otomto'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Mousewheel,Virtual } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Sipkavelka from '../../naviac/sipkavelka/sipkavelka'

import Card from '../../naviac/portalpop/portalpop';
import { GrSecure } from "react-icons/gr";
import Mobil2 from '../../naviac/mobil2/mobil2'

import Otazky from '../../naviac/otazky/otazky'
import Dalsi from '../../naviac/dalsi/dalsi'
import Malytexticek from '../../naviac/malytext/malytexticek'

import Nepomenujem from '../../naviac/nepomenujem/nepomenujem'
import {ikonyPonuk} from '../../naviac/ponuka/ponuka'
import { use } from 'react';

import {vyhody} from  '../../naviac/vyhody/vyhody'
import { useMediaQuery } from "react-responsive";
import Vrchmobilu from '../../naviac/vrchmobilu/vrchmobilu'
import Mobillayout from '../../naviac/mobillayout/mobillayout'
import Hodnotenietelefon from '../../naviac/hodnotenietelefon/hodnotenietelefon'

import Overlapiceko from '../../naviac/mobilnyoweraal/mobilnyoweraal'
import Informacnyowerla from '../../naviac/informacnyowerlap/informacnyowerla'

import Mobiltlacidlo from '../../naviac/mobiltlacidlo/mobiltlacidlo'
import Gridfotky from '../../naviac/girdfotky/gridfotky'
const StrankaProjekt = () => {
const toggleRef1 = useRef(null);
const toggleRef2 = useRef(null);
const toggleRef3 = useRef(null);
const premenna = useRef(null)
const premenna2 = useRef(null)
const inteligent = useRef(null)
    
  

  const location = useLocation()
 const navigate = useNavigate();

  const apartman = location.state;

  const { pocetOblubene, setPocetOblubene, filter, setFilter,owerlap,seTeraz,teraz ,setInfo,scrollToRef,informacie,hodnotenie,majitel,otazky,
     vidim,setVidim,text2,druha,tretia,akotofunugje,klikanec,objekt1,random,setRandom
  } = useContext(GlobalContext);
  const[hover,setHover] = useState(null)




    const isMobile = useMediaQuery({ maxWidth: 750 });
    const isMobile2 = useMediaQuery({ minWidth: 751 });
    const text = useMediaQuery({ maxWidth: 1170 });
    const textmaly = useMediaQuery({ minWidth: 1169 });
    const isDesktop = useMediaQuery({ minWidth: 1160 });
    const novy = useMediaQuery({ minWidth: 510 });
         
 // objekt z navigate()

if (!apartman) {
  return <p>Žiadne dáta pre tento projekt</p>;
}

const[pocitam,setPocitam] = useState(apartman?.cena)

const dalsieInfoRef = useRef(null);

const triedy = ["lavahore", "lavadole", "pravahore", "pravadole"];

const fotky = apartman.fotky || []; 

 const swiperRef = useRef(null);

const[otovaram,setOtvaram] = useState(null)
const [overlayContent, setOverlayContent] = useState(null);



 
 
  console.log(apartman.vybavenie);

useEffect(() => {
  function handleClickOutside(e) {
    if (
      (!toggleRef2.current || !toggleRef2.current.contains(e.target)) &&
      (!toggleRef1.current || !toggleRef1.current.contains(e.target)) &&
      (!toggleRef3.current || !toggleRef3.current.contains(e.target)) &&
      (!premenna.current || !premenna.current.contains(e.target)) &&
      (!premenna2.current || !premenna2.current.contains(e.target)) &&
      (!inteligent.current || !inteligent.current.contains(e.target)) &&
      (!objekt1.current || !objekt1.current.contains(e.target))
    ) {
      setVidim(false);
    }
  }

  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, [vidim]);

  return (
    <>
    {isMobile && 
    <>
    <Informacnyowerla
      show = {otovaram}
          setOtvaram = {setOtvaram}
    ></Informacnyowerla>
    
    <Overlapiceko 
    setOverlayContent = {setOverlayContent}
      setOtvaram = {setOtvaram}
      show={otovaram}>
       {overlayContent === "texthorny" && <div>texthorny</div>}
       {overlayContent === "viacfotiek" &&

          <Komponenta
          stilicekostko = {{height:"100%",}}
            dizajnicek = {{fontSize:"var( --font-size-base5)",fontWeight: 500}}
            nazov = {"Fotografie apartmánu"}
            doleziet = {{display:"none"}}
            desing = {{display:"none"}}
            >   <Gridfotky
            jeden={apartman.fotky[0]}
            dva={apartman.fotky[1]}
            tri={apartman.fotky[2]}
            styri={apartman.fotky[3]}
            ></Gridfotky>
           
              
                                      
                                       

          </Komponenta> 
         
      }
      
       {overlayContent === "ikonky" &&
        

          <Komponenta
          stilicekostko = {{height:"100%",}}
            dizajnicek = {{fontSize:"var( --font-size-base5)",fontWeight: 500}}
            nazov = {"Čo toto miesto ponúka"}
            doleziet = {{display:"none"}}
            desing = {{display:"none"}}
            > 
            <Ikonyukazka
            style = {{backgroundColor:"var(--farba-biela)",width:"100%",height:"100%"}}
            >
            {apartman.vybavenie.map((item) => {
              const ikonaObj = ikonyPonuk[item];
            if (!ikonaObj) return null; // ignoruj, ak ikonka neexistuje

                  const Ikona = ikonaObj?.ikona;
                  const popis = ikonaObj?.popis;

                    return (

                      <Nepomenujem
                        key={item}
                        ikona = {<Ikona />}
                        text = {popis}
                      >
                                                
                      </Nepomenujem>
                      );
                      })}

          </Ikonyukazka>
          <div style={{height:"20px"}}></div>
              
                                      
                                       

          </Komponenta> 
         
       }
    </Overlapiceko>
    </>
    }
    
    
   <Templatepage
   
   hedericek={{
    display: isMobile ? "none" : "block",
  }}
    header = {
    <div className='horeobl'>
          <div>
          <span className='texticekohlavny'>{apartman.name}</span>
          <div style={{whiteSpace: 'nowrap', fontSize: "var(--font-size-base2)", color: "var(--farba-sivaText)"}}>
            <span>{apartman.krajina} </span>
            <span>{apartman.kraj} </span>
            <span>{apartman.location}</span>
            
            </div>
          
          </div>
          {/* horene */}
          <div className='zazdielam'>
          <Ikonypage
            onMouseEnter={() => setHover(10)}
            onMouseLeave={() => setHover(null)}
            onClick={() => {seTeraz(true),

              setRandom(<Form></Form>)
            }}

          style={{
              cursor: "pointer",
      
          backgroundColor: hover === 10 ? "var(--farba-main2)" : "transparent"
          }}
            ikona = {<i class='bx bx-share' ></i>}
            ikonastyle = {{ color: hover === 10 ? "var(--farba-cierna)" : "var(--farba-sivaText)",}}
            text = "Zdieľať"
            textStyle={{
              color: hover === 10 ? "var(--farba-cierna)" : "var(--farba-sivaText)",
            }}
          ></Ikonypage>


          <Ikonypage
          
              onMouseEnter={() => setHover(20)}
              onMouseLeave={() => setHover(null)}
              
            style={{
              cursor: "pointer",
            backgroundColor: hover === 20 ? "var(--farba-main2)" : "transparent"
            }}
              onClick= {() => 

              
                {setPocetOblubene(prev => prev+1)
                  // setRandom(<div style={{width:"200px",height:"200px",backgroundColor:"red"}}></div>) ,      
                  // seTeraz(true)
                }}
              ikona = {<i class='bx bx-heart' ></i>}
              text = "Uložiť"
                   ikonastyle = {{ color: hover === 20 ? "var(--farba-cierna)" : "var(--farba-sivaText)",}}
     
            textStyle={{
        color: hover === 20 ? "var(--farba-cierna)" : "var(--farba-sivaText)",
      }}
          ></Ikonypage>
          
          <Ikonypage
          
              onMouseEnter={() => setHover(15)}
              onMouseLeave={() => setHover(null)}
              
            style={{
              cursor: "pointer",
            backgroundColor: hover === 15 ? "var(--farba-main2)" : "transparent"
            }}
              onClick= {() => {
                seTeraz(true),
                setRandom(<Kolazfotka
                fotky = {fotky}
                apartman = {apartman}
                ></Kolazfotka>)}

              
                
                } 
              ikona = {<i class='bx bx-photo-album' ></i>}
              text = "Prezrieť viac fotiek"
                   ikonastyle = {{ color: hover === 15 ? "var(--farba-cierna)" : "var(--farba-sivaText)",}}
            
            textStyle={{
    color: hover === 15 ? "var(--farba-cierna)" : "var(--farba-sivaText)",
  }}
          ></Ikonypage>

           


        </div>

        </div>}>
    <Card
      nadpis="Pridané do rezervácie."
      ikona ={ <i class='bx bx-cart' ></i>}
      ></Card>
      
    <Owerlap
    style={{backgroundColor:"var(--farba-bielaEfekty)"}}
    >{random}</Owerlap>
   
    <div className='obalicek'>
    
        {/* <div className='horeobl'>
          <div>
          <span className='texticekohlavny'>{apartman.name}</span>
          <div style={{whiteSpace: 'nowrap', fontSize: "var(--font-size-base2)", color: "var(--farba-sivaText)"}}>
            <span>{apartman.krajina} </span>
            <span>{apartman.kraj} </span>
            <span>{apartman.location}</span>
            
            </div>
          
          </div>
          <div className='zazdielam'>
          <Ikonypage
            onMouseEnter={() => setHover(10)}
            onMouseLeave={() => setHover(null)}
            onClick={() => {seTeraz(true),

              setRandom(<Form></Form>)
            }}

          style={{
              cursor: "pointer",
      
          backgroundColor: hover === 10 ? "var(--farba-main2)" : "transparent"
          }}
            ikona = {<i class='bx bx-share' ></i>}
            ikonastyle = {{ color: hover === 10 ? "var(--farba-cierna)" : "var(--farba-sivaText)",}}
            text = "Zdieľať"
            textStyle={{
              color: hover === 10 ? "var(--farba-cierna)" : "var(--farba-sivaText)",
            }}
          ></Ikonypage>


          <Ikonypage
          
              onMouseEnter={() => setHover(20)}
              onMouseLeave={() => setHover(null)}
              
            style={{
              cursor: "pointer",
            backgroundColor: hover === 20 ? "var(--farba-main2)" : "transparent"
            }}
              onClick= {() => 

              
                {setPocetOblubene(prev => prev+1)
                  // setRandom(<div style={{width:"200px",height:"200px",backgroundColor:"red"}}></div>) ,      
                  // seTeraz(true)
                }}
              ikona = {<i class='bx bx-heart' ></i>}
              text = "Uložiť"
                   ikonastyle = {{ color: hover === 20 ? "var(--farba-cierna)" : "var(--farba-sivaText)",}}
     
            textStyle={{
        color: hover === 20 ? "var(--farba-cierna)" : "var(--farba-sivaText)",
      }}
          ></Ikonypage>
          
          <Ikonypage
          
              onMouseEnter={() => setHover(15)}
              onMouseLeave={() => setHover(null)}
              
            style={{
              cursor: "pointer",
            backgroundColor: hover === 15 ? "var(--farba-main2)" : "transparent"
            }}
              onClick= {() => {
                seTeraz(true),
                setRandom(<Kolazfotka
                fotky = {fotky}
                apartman = {apartman}
                ></Kolazfotka>)}

              
                
                } 
              ikona = {<i class='bx bx-photo-album' ></i>}
              text = "Prezrieť viac fotiek"
                   ikonastyle = {{ color: hover === 15 ? "var(--farba-cierna)" : "var(--farba-sivaText)",}}
            
            textStyle={{
    color: hover === 15 ? "var(--farba-cierna)" : "var(--farba-sivaText)",
  }}
          ></Ikonypage>

           


        </div>

        </div> */}
        <div className='obalciekk2'>
        <div className='foktaCastik'>
         
            
            

          <div className='lavafoktaCastik'>
            <Swiper
          className="swiperecek"  
            modules={[Navigation, Pagination, Autoplay,Mousewheel]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}  // <-- teraz ref existuje
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            freeMode={true}
              mousewheel={{
            forceToAxis: true, // scrolluje iba horizontálne
            releaseOnEdges: true,
               invert: false,
                  sensitivity: 1, // nastav podľa potreby
              }}
            //    breakpoints={{
            //     350: { slidesPerView: 1.8 },
            //      450: { slidesPerView: 2.2 },
            //       500: { slidesPerView: 2.5 },
            //     750: { slidesPerView: 1.5 },

            //   950: { slidesPerView: 1 },
            //   }}
            // autoplay={{ delay: 3000 }}
            // navigation={true}
            // pagination={{ clickable: true }}
            
   
              >
             
             {fotky.map((prev,index) => (
                <SwiperSlide>
                  <div className='polozka333'>
                     
                   
                        <img  className = "fkokokokok" src={prev} 
                        // style={{
                        //     borderRadius:  "var(--border-radius-maly)"
                        // }}
                        alt="" />
                         
                         
                    </div> 

                    {/* {isMobile && <div className='lentelefonzobrazenie'>
                      <div style={{padding:"10px"}}>
                         <img  className = "fkokokokok" src={prev} 
                        // style={{
                        //     borderRadius:  "var(--border-radius-maly)"
                        // }}
                        alt="" />
                        </div>


                        </div>} */}
                   
                  
                </SwiperSlide>
             ))}

             {isMobile2 && 
             <>
              <Sipkavelka
                         style={{
                            right:"10px",
                             top: "50%",
                             zIndex:"5",
                            transform: "translateY(-50%)",
                            position:"absolute"
                        }}

                        onClick={() => swiperRef.current?.slidePrev()}
                        ><i class='bx bx-right-arrow-alt' ></i>
                        </Sipkavelka>


                        <Sipkavelka
                        style={{
                            left:"10px",
                             top: "50%",
                             zIndex:"5",
                            transform: "translateY(-50%)",
                            position:"absolute"
                        }}
                        onClick={() => swiperRef.current?.slideNext()}
                        ><i class='bx bx-left-arrow-alt' ></i>
                        </Sipkavelka>
                        </> }

            </Swiper>

            
          </div>

         
             <div className='pravafoktaCastik'>

           
           {apartman.fotky.slice(0, 4).map((fotka,index) => (
            <div key={index} className={triedy[index]}>
             <div 
                    onMouseEnter={() => setHover(index)}
                    onMouseLeave={() => setHover(null)}
                  onClick = {() => {
                      seTeraz(true), setRandom(<Kolazfotka
                                  fotky = {fotky}
                                  apartman = {apartman}
                                  ></Kolazfotka>)
                  }}
                
             style={{
              position:"absolute",
              height:"100%",
              zIndex:"2",
              transition:"var(  --transition)",
              width:"100%",
              backgroundColor: hover === index ? "var( --farba-bielaEfekty)" : "transparent"
             }} ></div>
                <img  className = "fotke2" src={fotka}  
                              style={{
                  transform: hover === index ? "scale(1.05)" : "scale(1)",
                  transition:"var(  --transition)",
                }}
                />
             

            </div>

           ))}

          </div>
          {isMobile && <div className="ikonky-male-moje">
            <Ikonaikona
            klik = {() => setOtvaram(true) }
            kliknutie = {() => {setOtvaram(true),setOverlayContent("viacfotiek")}
            }
            ></Ikonaikona></div>}
          {isMobile && <div className='lentelefonicekk'>

            <Vrchmobilu
            nazov={apartman.name}
            info = {apartman.info?.lokalita}
            info2 = {apartman.info?.krajina}

            hostia={apartman.info?.hostia}
            spalne = {apartman.info?.spalne}
            lozka ={apartman.info?.lozka}
            kupelna = {apartman.info?.kupelna}

            fotka = {apartman.veduci.fotka}
            meno = {apartman.veduci.meno}
            priezvisko = {apartman.veduci.priezvisko}
            popisek = {apartman.veduci.popisek}


            indo44 = {apartman.hodnotenie}
            info20 = {apartman.cena}


        
            >
        
            </Vrchmobilu>
  
 

                </div>}
          
        </div>

        <div className='kokokostulekoko'>
          <div className='lentapaddingesek'>

        <div
        className='filtreakoko'>
          

          <Ikonypage
onClick={() => {setInfo(1),scrollToRef(informacie, 100)}}
              onMouseEnter={() => setHover(16)}
              onMouseLeave={() => setHover(null)}
            style={{
              cursor: "pointer",
            backgroundColor: hover === 16 ? "var(--farba-main2)" : "transparent"
            }}
              ikona = {<i class='bx bx-info-circle' ></i>}
              text = "Ďalšie informácie"
              ikonastyle = {{ color: hover === 16 ? "var(--farba-cierna)" : "var(--farba-sivaText)",}}
            textStyle={{
             color: hover === 16 ? "var(--farba-cierna)" : "var(--farba-sivaText)",
  }}
          ></Ikonypage>

          <Ikonypage
          onClick={() => {setInfo(1),scrollToRef(hodnotenie, 100)}}
              onMouseEnter={() => setHover(17)}
              onMouseLeave={() => setHover(null)}
            style={{
              cursor: "pointer",
            backgroundColor: hover === 17 ? "var(--farba-main2)" : "transparent"
            }}
              ikona = {<i class='bx bx-info-circle' ></i>}
              text = "Hodnotenie a recenzie"
              ikonastyle = {{ color: hover === 17 ? "var(--farba-cierna)" : "var(--farba-sivaText)",}}
            textStyle={{
             color: hover === 17 ? "var(--farba-cierna)" : "var(--farba-sivaText)",
  }}
          ></Ikonypage>

          <Ikonypage
          onClick={() => {setInfo(1),scrollToRef(majitel, 100)}}
              onMouseEnter={() => setHover(18)}
              onMouseLeave={() => setHover(null)}
            style={{
              cursor: "pointer",
            backgroundColor: hover === 18 ? "var(--farba-main2)" : "transparent"
            }}
              ikona = {<i class='bx bx-info-circle' ></i>}
              text = "Hostiteľ / majiteľ"
              ikonastyle = {{ color: hover === 18 ? "var(--farba-cierna)" : "var(--farba-sivaText)",}}
            textStyle={{
             color: hover === 18 ? "var(--farba-cierna)" : "var(--farba-sivaText)",
  }}
          ></Ikonypage>
          <Ikonypage
          onClick={() => {setInfo(1),scrollToRef(otazky, 100)}}
              onMouseEnter={() => setHover(19)}
              onMouseLeave={() => setHover(null)}
            style={{
              cursor: "pointer",
            backgroundColor: hover === 19 ? "var(--farba-main2)" : "transparent"
            }}
              ikona = {<i class='bx bx-info-circle' ></i>}
              text = "FAQ / Často kladené otázky"
              ikonastyle = {{ color: hover === 19 ? "var(--farba-cierna)" : "var(--farba-sivaText)",}}
            textStyle={{
             color: hover === 19 ? "var(--farba-cierna)" : "var(--farba-sivaText)",
  }}
          ></Ikonypage>
        </div>
             {/* <div className={triedy[0]}></div>
             <div className={triedy[1]}></div> */}
           

            <div className='skorlovacka'>
                  {/* toto je len zobrazenie toto co je aj na mobile aj na deskpte */}   
                                <div className='textinfo'>

                  
                                    <div className='ubodiceke'>
                                      {isMobile &&    
                                        <Doleelement
                                        zobrazenie = {{display:"none"}}
                                        pocita = {apartman.cena}
                                        kokokopok = {{display:"none"}}
                                        skryto = {{display:"none"}}
                                        pocitam= {pocitam} 
                                        setPocitam = {setPocitam}
                                        ></Doleelement>
                                      }
                                      {isMobile2 && 
                                      <Tabulecak
                                                hodnoteie = {apartman.info?.hostia}
                                                hosnoteniepocet = {apartman.info?.spalne}
                                                lozka =  {apartman.info?.lozka}
                                                kupelna =  {apartman.info?.kupelna}
                                                nazov = {apartman.info?.lokalita}
                                                krajina = {apartman.info?.krajina}

                                                cislo = {apartman.info?.hodnotenie}
                                                ohod = {apartman.info?.reference}
                                            
                                                onClick = {() => {seTeraz(true),

                                                  setRandom(<Hybesa
                                                  onClick={() => seTeraz(false)}
                                                  >
                                                    <Hybesto
                                                    premenna={premenna}

                                                    ></Hybesto>


                                                  </Hybesa>
                                                  )}}
                                                  >
                                      </Tabulecak>}
                                  

                                        {isMobile2 && 
                                          <div className='styliskitka'>

                                        <Dalsi
                                        meno = {apartman.veduci?.meno}
                                        priezvisko = {apartman.veduci?.priezvisko}
                                        fotka = {apartman.veduci?.fotka}
                                        popisek = {apartman.veduci?.popisek}
                                        Linkastyle = {{ display: "none" }}
                                        onClick = {() => {seTeraz(true),

                                          setRandom(<Form></Form>)
                                        }}
                                        ></Dalsi>
                                          </div>  }
                                  
                                
                                    </div>
                                
                                      <div style={{padding:"15px 0px"}}><Linka></Linka></div>


                                      <div className='majitel32' >
                                          <Komponenta
                                          doleziet = {{display:"none"}}
                                          dizajnicek  = {{display:"none"}}
                                          desing ={{display:"none"}}
                                          
                                            unikat = {toggleRef3}
                                              kliknutie={() => setVidim(prev => (prev === "marek" ? false : "marek"))}
                                          // stylececek = {{display:"none"}}
                                            linktext = "tretia"
                                        nazov= "Dalšie Informácie"
                                        >
                              
                                      {apartman?.majitel?.slice(0, 4).map((key) => {
                                        const vyhoda = vyhody[key];
                                        const Ikona = vyhoda.ikona;

                                        return (
                                          <Vyhodyzaklad
                                            key={key}
                                            ikona={<Ikona />}
                                            horetext={vyhoda.text}
                                            doletext={vyhoda.text2}
                                          />
                                        );
                                      })}
                                
                                          
                                        
                                        </Komponenta>

                                    <div className='drzacekosdt'>
                              
                                        <AnimatePresence>
                                          {vidim ===  "marek" && <Lenkukazka
                                    
                                            key="lenkukazka"
                                      style={{  height: "200px",
                                                top: "0px",
                                                right:"0px",
                                                position: "absolute",
                                                backgroundColor: "blue",
                                                width: "200px" }}
                                          
                                          >koko</Lenkukazka>}
                                          </AnimatePresence>
                                          </div>


                                      </div>
                                      <div style={{padding:"15px 0px"}}><Linka></Linka></div>

                  {/* toto je len zobrazenie toto co je aj na mobile aj na deskpte */}

                                {isMobile2 && 
                                <>
                                  <div className='dalsieinformacie' ref={informacie}>

                                      <Komponenta
                                        unikat = {toggleRef1}
                                      linktext = "Ako môžem začať prenajímať byt?"
                                      nazov= "Dalšie informácie"
                                      text = {apartman.popisek}
                                        kliknutie={() => setVidim(prev => (prev === "kar" ? false : "kar"))}
                                        textikona = "Zistiť viac"
                                        kvak = {() => {seTeraz(true),console.log("kareck")
                                        ,setRandom(<Hybesa><Otomto

                                        popisek = {apartman.popisek}
                                        priestor = {apartman.priestor}
                                        poloha = {apartman.poloha}
                                        upratovanie = {apartman.upratovanie}
                                        pravidla = {apartman.pravidla} 
                                      
                                        
                                        ></Otomto></Hybesa>)}}
                                        


                                      
                                      ></Komponenta>
                                      <div className='drzacekosdt'>
                                      
                                      
                                      <AnimatePresence>
                                        {vidim ===  "kar" && <Lenkukazka
                                          key="lenkukazka"
                                        >
                                          <div >
                                            <p>Hodnotenia predchádzajúcich hostí pomáhajú našej komunite dozvedieť sa viac o jednotlivých bývaniach. Hodnotenia sú predvolene zoradené podľa relevantnosti. Relevantnosť je založená na aktuálnosti, dĺžke a informáciách, ktoré nám poskytnete, ako sú vyhľadávanie rezervácií, krajina a jazykové preferencie.</p>  
                                            <br/>
                                            <p>Hodnotenie môže napísať len hosť, ktorý rezerváciu vytvoril. Airbnb moderuje iba hodnotenia, ktoré boli nahlásené pre porušenie našich pravidiel.</p>
                                              <br/>
                                              <p>Ponuky musia mať aspoň 5 hodnotení za posledné 4 roky, aby mohli byť označené ako Obľúbené medzi hosťami alebo aby sa pri nich zobrazovalo percentilové poradie. Kritériá sa môžu meniť.</p>
                                          </div>
                                          </Lenkukazka>}
                                        </AnimatePresence>

                                      </div>
                                    

                                    
                                

                                      
                                  </div> 

                                    <div style={{padding:"15px 0px"}}>
                                    <Linka></Linka>
                                    </div>
                                    
                              
                                <div className='hodnotenie232' >
                                      <Komponenta
                                          unikat = {toggleRef2}
                                            kliknutie={() => setVidim(prev => (prev === "kokot" ? false : "kokot"))}
                                        
                                        // stylececek = {{display:"none"}}
                                        doleziet={{ display: "none" }}
                                              nazov= "Čo toto miesto ponúka"
                                                linktext = "Zistiť viac o vybavenom byte."
                                              textikona = "Zobraziť všetko vybavenie"
                                              kvak = {() => {seTeraz(true),setRandom(<Hybesa>
                                                <div style={{
                                                          height:"30px",
                                                          width:"100%",

                                                          display:"flex",
                                                          
                                                        flexDirection: "column",
                                                          // backgroundColor:"red"
                                                        }}>
                                                          <p style={{fontSize:"var( --font-size-base4)"}}>Čo toto miesto ponúka</p>
                                              </div>
                                      <Ikonyukazka>
                                        
                                        {apartman.vybavenie.map((item) => {
                                          const ikonaObj = ikonyPonuk[item];
                                          if (!ikonaObj) return null; // ignoruj, ak ikonka neexistuje

                                          const Ikona = ikonaObj?.ikona;
                                          const popis = ikonaObj?.popis;

                                          return (

                                            <Nepomenujem
                                            key={item}
                                            ikona = {<Ikona />}
                                            text = {popis}
                                            >
                                              
                                            </Nepomenujem>
                                          
                                          );
                                        })}

                                      </Ikonyukazka>
                                      </Hybesa>)}}
                                    >
                                        <div className='tuzobrazujemikony'>
                                          <div className='lavastrankakola'>
                                            {apartman.vybavenie.slice(0, 4).map((item) => {
                                          const ikonaObj = ikonyPonuk[item];
                                          if (!ikonaObj) return null; // ignoruj, ak ikonka neexistuje

                                          const Ikona = ikonaObj?.ikona;
                                          const popis = ikonaObj?.popis;

                                          return (

                                            <Nepomenujem
                                            key={item}
                                            ikona = {<Ikona />}
                                            text = {popis}
                                            ></Nepomenujem>
                                          
                                          );
                                        })}
                                            
                                          </div>
                                        <div className='pravastarankkol'>
                                          {apartman.vybavenie.slice(4, 8).map((item) => {
                                        const ikonaObj = ikonyPonuk[item];
                                        if (!ikonaObj) return null; // ignoruj, ak ikonka neexistuje

                                        const Ikona = ikonaObj?.ikona;
                                        const popis = ikonaObj?.popis;

                                        return (

                                          <Nepomenujem
                                          key={item}
                                          ikona = {<Ikona />}
                                          text = {popis}
                                          ></Nepomenujem>
                                        
                                        );
                                      })}

                                        </div>
                    
                    


                  
                                        </div>
                                      </Komponenta>

                                      <div className='drzacekosdt'>
                          
                                    <AnimatePresence>
                                      {vidim ===  "kokot" && <Lenkukazka
                                
                                        key="lenkukazka"
                                  style={{  height: "200px",
                                            top: "0px",
                                            right:"0px",
                                            position: "absolute",
                                            backgroundColor: "blue",
                                            width: "200px" }}
                                      
                                      >koko</Lenkukazka>}
                                      </AnimatePresence>
                                      </div>
                                  </div>
                                
                                  <div style={{padding:"15px 0px"}}>
                                      <Linka ></Linka>
                                  </div>
                                  

                                  <div className='otazky32' ref={otazky}>
                                    <Komponenta
                                    dizajnicek ={{ display: "none" }}
                                    //  nazov = "Často kladené otázky"
                                    desing ={{ display: "none" }}
                                      doleziet={{ display: "none" }}
                                    
                                    >
                                        <Otazky></Otazky>
                                    </Komponenta>
                              



                                  </div>

                                  </>
                                  } 
                                  
                                  {isMobile && 
                                  <>
                                  <div style={{display:"flex",flexDirection:"column",gap:"15px"}}>
                                    <div className='diviviknatext'>
                                  {apartman.popisek}
                                    </div>
                                    {/* <button onClick={() => {setOtvaram(true),setOverlayContent("jeden")} } style={{height:"50px",width:"100px"}}></button>
                                    <button onClick={() => {setOtvaram(true),setOverlayContent("dva")} } style={{height:"50px",width:"100px"}}></button> */}
                                    <Mobiltlacidlo
                                    onClick={() => {setOtvaram(true),setOverlayContent("texthorny")}}
                                    text = "Zobraziť viac"
                                    ></Mobiltlacidlo>
                                    </div>
                                     <div style={{padding:"15px 0px"}}><Linka></Linka></div>
                                     <Komponenta
                                     dizajnicek = {{fontSize:"var( --font-size-base5)",fontWeight: 500}}
                                     nazov = {"Čo toto miesto ponúka"}
                                     doleziet = {{display:"none"}}
                                     desing = {{display:"none"}}

                                     
                                     >

                                      <div className='pravastarankkol'>
                                          {apartman.vybavenie.slice(4, 8).map((item) => {
                                        const ikonaObj = ikonyPonuk[item];
                                        if (!ikonaObj) return null; // ignoruj, ak ikonka neexistuje

                                        const Ikona = ikonaObj?.ikona;
                                        const popis = ikonaObj?.popis;

                                        return (

                                          <Nepomenujem
                                          key={item}
                                          ikona = {<Ikona />}
                                          text = {popis}
                                          ></Nepomenujem>
                                        
                                        );
                                      })}

                                        </div>
                                       <Mobiltlacidlo
                                    onClick={() => {setOtvaram(true),setOverlayContent("ikonky")}}
                                    text = "Zobraziť všetko vybavenie"
                                    ></Mobiltlacidlo>


                                     </Komponenta>


                                     <div style={{padding:"15px 0px"}}><Linka></Linka></div>

                                      <Komponenta
                                     dizajnicek = {{fontSize:"var( --font-size-base5)",fontWeight: 500}}
                                     nazov = {"Najčastejšie otázky"}
                                     doleziet = {{display:"none"}}
                                     desing = {{display:"none"}}
                                     >
                                      <Otazky></Otazky>
                                     </Komponenta>
                                     </>
                                    }
                    

                                </div>

                                
                  {/*toto je len ta cast co sa hybe nic extra  */}
                                  {isDesktop &&  
                                  <div className='scroollentak'>

                                          <div className='scroolelement'>
                                            <Doleelement
                                            pocitam= {pocitam}
                                            setPocitam = {setPocitam}
                                            ></Doleelement>
                                            <div
                                            style={{
                                              width:"100%",
                                              backgroundColor:"var(--farba-biela)",
                                              height:"25px"
                                            }}></div>
                          
                                          </div>
                                  </div>}
                  {/*toto je len ta cast co sa hybe nic extra  */}
            </div>
            
            <div style={{padding:"15px 0px"}}><Linka></Linka></div>


{/* zoznamnte sa s hostitelom  */}
            {isMobile2 && 
            <>
            <div ref={majitel}></div>
              <Komponenta
                                  nazov = "Zoznámte sa s hostiteľom"
                                    stylececek = {{ display: "none" }}
                                    desing = {{display: "none" }}
                                    zobrazenie = {{ display: "none" }}
                                    doleziet = {{ display: "none" }}
                                  >
                                    <div className='zoznamntesaobal' >
                                      <div className='totokdejetexoto'>
                                      

                                        <Zobrazenieuctu
                                        meno={apartman.veduci.meno}
                                        priezvisko = {apartman.veduci.priezvisko}
                                        fotka = {apartman.veduci.fotka}
                                        titul = {apartman.veduci.popisek}
                                        >
                                          <Ukazkahodnoteie
                                    onClick={() => navigate(`/Clovekpage/${apartman.id}`)}
                                          cislo={apartman.info.reference}
                                          co = "Počet hodnotení"

                                          ></Ukazkahodnoteie>
                                          <div style={{width: "calc(100% - 10px)",backgroundColor:"var( --farba-main2)",height:"1px"}}>

                                          </div>

                            
                                            <Ukazkahodnoteie
                                            onClick = {() => console.log("pic")
                                          }
                                            ikona = {<i class='bx bxs-heart'></i>}
                                              cislo={apartman.info.hodnotenie}
                                          co = "Ohodnotenie"

                                            ></Ukazkahodnoteie>

                                        </Zobrazenieuctu>
                                        <div className='obaltexty' >


                                          <Malytexticek
                                          ikona= {<RiGraduationCapLine />}
                                          text = "Moja škola:"
                                        
                                          text2= {apartman.veduci.skola}
                                          ></Malytexticek>

                                          <Malytexticek
                                          ikona= {<LuBriefcaseBusiness />}
                                          text = "Moja práca:"
                                        
                                          text2= {apartman.veduci.praca}
                                          ></Malytexticek>
                                        </div>
                                        </div >
                                        

                                      

                                    
                                      <div className='totokdeniejetext'>
                                        <Textvzorecek
                                        nazov={`${apartman.veduci.meno} je ${apartman.veduci.typ}`}

                                        text = "Superhostitelia sú skúsení, vysoko hodnotení hostitelia, ktorí chcú svojim hosťom čo najviac spríjemniť pobyt."
                                        
                                        ></Textvzorecek>
                                        <Textvzorecek
                                        nazov="Podrobnosti o hostiteľovi"
                                      

                                        text1 = {apartman.veduci.podrobnost1}
                                        text2 = {apartman.veduci.podrobnost2}
                                        
                                        ></Textvzorecek>
                                    
                                        
                                        

                                        <Ikonypage

                                        style={{
                                          backgroundColor:hover === 100 ? "var(--farba-main2)" : "var(--farba-main)",
                                        
                                          cursor:"pointer"
                                        }}
                                        ikonastyle ={{
                                          color:hover === 100 ? "var(--farba-sivaText)" : "var(--farba-biela)",

                                        }}
                                        textStyle
                                        ={{
                                          color:hover === 100 ? "var(--farba-sivaText)" : "var(--farba-biela)",

                                        }}
                                        onMouseEnter={() => setHover(100)}
                                        onMouseLeave={() => setHover(null)}
                                        ikona = {<MdOutlineTextsms/>}
                                        text = "Napíšte hostiteľovi"
                                          ></Ikonypage>

                                          <div style={{position:"relative",width:"fit-content"}}>
                                          <p className='kliknetexticek'
                                          ref={inteligent}
                                          onClick={() => setVidim(prev => prev === "ukazka" ? false : "ukazka")}
                                        >Túto ponuku spravuje jednotlivec. Viac informácií</p>
                                        <AnimatePresence>
                                            {vidim === "ukazka" &&
                                                  <Lenkukazka
                                                  style={{
                                                    left:"0px",
                                                    top:"30px"
                                                  }}
                                                  ><span>Túto ponuku spravuje jednotlivec, ktorý sa osobne stará o každý detail, aby bol váš pobyt čo najpríjemnejší. Komunikácia s hostiteľom prebieha priamo a rýchlo, takže všetky vaše otázky a požiadavky sú vybavené promptne. Hostiteľ poskytuje jasné a presné informácie o ubytovaní, vybavení a okolí, a zároveň sa snaží vytvoriť priateľskú a bezpečnú atmosféru. Platby a rezervácie sú zabezpečené cez oficiálny systém, aby ste mali istotu a ochranu pri každej transakcii. Vaša spokojnosť a pohodlie sú prioritou, pričom hostiteľ kladie dôraz na čistotu, pohodlie a kvalitný zážitok počas celej doby pobytu.</span></Lenkukazka>
                                            }
                                        </AnimatePresence>
                                    




                                          </div>
                                          <div style={{padding:"10px 0px"}}>
                                  <Linka ></Linka>
                                </div>

                                    <div  className='malitexcekekhover' style={{display:"flex",gap:"10px",fontSize:"var(  --font-size-small)"}}>
                                    <GrSecure />
                                          <p >Na ochranu platby posielajte peniaze a komunikujte s hostiteľmi vždy prostredníctvom Airbnb.</p>
                                      </div>
                                        </div>
                                    </div>
              </Komponenta>
            <div style={{padding:"15px 0px"}}><Linka></Linka></div>
            
                  
            <div className='hodnoteineieeapge'>
                {ludia.slice(0, 6).map((prev,index) => (
                  <Futertex
                  texthore = {prev.klientMeno}
                  textdole = {prev.klientPriezvisko}
                  fotka = {prev.klientFotky}
                  pobyt = {prev.klientMesto}
                popis = {prev.klientHodnotenie}
                hodnota = {prev.klientHodnotenieVlaste}
                popisecek = {prev.klientAkoDlho}
                datum = {prev.klientDatum}
                zobrazit = "Zobrazit Viac"
                onClick = {() => {seTeraz(true),

                                  setRandom(<Hybesa
                                  onClick={() => seTeraz(false)}
                                  >
                                    <Hybesto
                                           premenna={premenna2}
                  

                                    ></Hybesto>


                                  </Hybesa>
                                  )}}
                  >
                    
                  </Futertex>
                ))}


            </div>
            </> }
</div>
            {isMobile && 
            <div style={{padding:"0px 0px 0px 20PX"}}>
              <Komponenta
                nazov = "Hodnotenie hostí"
                  stylececek = {{ display: "none" }}
                  desing = {{display: "none" }}
                  zobrazenie = {{ display: "none" }}
                  doleziet = {{ display: "none" }}
                >
                  <Hodnotenietelefon
                    data = {ludia}
                    ></Hodnotenietelefon>
                  
<div style={{padding:"0px 20px 0px 0px"}}>
                    <Mobiltlacidlo
                        onClick={() => {setOtvaram(true),setOverlayContent("texthorny")}}
                        text = "Všetky hodnotenia"
                        ></Mobiltlacidlo>
                  </div>
                        <div style={{width:"100%",height:"fit-content",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"var(--font-size-base69)",color:"var(--farba-sivaText)"}}>Ako fungujú hodnotenia</div>
                                    
              </Komponenta>
              <div style={{padding:"15px 0px"}}><Linka></Linka></div>
<div style={{padding:"0px 20px 0px 0px"}}>
                <Komponenta
                nazov = "Zoznámte sa s hostiteľom"
                  stylececek = {{ display: "none" }}
                  desing = {{display: "none" }}
                  zobrazenie = {{ display: "none" }}
                  doleziet = {{ display: "none" }}
                >
               
               <div className='zoznamntesaobal' >


                                      <div className='totokdejetexoto'>
                                      

                                        <Zobrazenieuctu
                                        meno={apartman.veduci.meno}
                                        priezvisko = {apartman.veduci.priezvisko}
                                        fotka = {apartman.veduci.fotka}
                                        titul = {apartman.veduci.popisek}
                                        >
                                          <Ukazkahodnoteie
                                    onClick={() => navigate(`/Clovekpage/${apartman.id}`)}
                                          cislo={apartman.info.reference}
                                          co = "Počet hodnotení"

                                          ></Ukazkahodnoteie>
                                          <div style={{width:"100%",backgroundColor:"var( --farba-main2)",height:"1px"}}>

                                          </div>

                            
                                            <Ukazkahodnoteie
                                            onClick = {() => console.log("pic")
                                          }
                                            ikona = {<i class='bx bxs-star' ></i>}
                                              cislo={apartman.info.hodnotenie}
                                          co = "Ohodnotenie"

                                            ></Ukazkahodnoteie>

                                        </Zobrazenieuctu>
                                        <div className='obaltexty' >


                                          <Malytexticek
                                          ikona= {<RiGraduationCapLine />}
                                          text = "Moja škola:"
                                        
                                          text2= {apartman.veduci.skola}
                                          ></Malytexticek>

                                          <Malytexticek
                                          ikona= {<LuBriefcaseBusiness />}
                                          text = "Moja práca:"
                                        
                                          text2= {apartman.veduci.praca}
                                          ></Malytexticek>
                                        </div>
                                        </div >
                                        

                                      

                                    
                                      {/* <div className='totokdeniejetext'>
                                        <Textvzorecek
                                        nazov={`${apartman.veduci.meno} je ${apartman.veduci.typ}`}

                                        text = "Superhostitelia sú skúsení, vysoko hodnotení hostitelia, ktorí chcú svojim hosťom čo najviac spríjemniť pobyt."
                                        
                                        ></Textvzorecek>
                                        <Textvzorecek
                                        nazov="Podrobnosti o hostiteľovi"
                                      

                                        text1 = {apartman.veduci.podrobnost1}
                                        text2 = {apartman.veduci.podrobnost2}
                                        
                                        ></Textvzorecek>
                                    
                                        
                                        

                                        <Ikonypage

                                        style={{
                                          backgroundColor:hover === 100 ? "var(--farba-main2)" : "var(--farba-main)",
                                        
                                          cursor:"pointer"
                                        }}
                                        ikonastyle ={{
                                          color:hover === 100 ? "var(--farba-sivaText)" : "var(--farba-biela)",

                                        }}
                                        textStyle
                                        ={{
                                          color:hover === 100 ? "var(--farba-sivaText)" : "var(--farba-biela)",

                                        }}
                                        onMouseEnter={() => setHover(100)}
                                        onMouseLeave={() => setHover(null)}
                                        ikona = {<MdOutlineTextsms/>}
                                        text = "Napíšte hostiteľovi"
                                          ></Ikonypage>

                                          <div style={{position:"relative",width:"fit-content"}}>
                                          <p className='kliknetexticek'
                                          ref={inteligent}
                                          onClick={() => setVidim(prev => prev === "ukazka" ? false : "ukazka")}
                                        >Túto ponuku spravuje jednotlivec. Viac informácií</p>
                                        <AnimatePresence>
                                            {vidim === "ukazka" &&
                                                  <Lenkukazka
                                                  style={{
                                                    left:"0px",
                                                    top:"30px"
                                                  }}
                                                  ><span>Túto ponuku spravuje jednotlivec, ktorý sa osobne stará o každý detail, aby bol váš pobyt čo najpríjemnejší. Komunikácia s hostiteľom prebieha priamo a rýchlo, takže všetky vaše otázky a požiadavky sú vybavené promptne. Hostiteľ poskytuje jasné a presné informácie o ubytovaní, vybavení a okolí, a zároveň sa snaží vytvoriť priateľskú a bezpečnú atmosféru. Platby a rezervácie sú zabezpečené cez oficiálny systém, aby ste mali istotu a ochranu pri každej transakcii. Vaša spokojnosť a pohodlie sú prioritou, pričom hostiteľ kladie dôraz na čistotu, pohodlie a kvalitný zážitok počas celej doby pobytu.</span></Lenkukazka>
                                            }
                                        </AnimatePresence>
                                    




                                          </div>
                                          <div style={{padding:"10px 0px"}}>
                                  <Linka ></Linka>
                                </div>

                                    <div  className='malitexcekekhover' style={{display:"flex",gap:"10px",fontSize:"var(  --font-size-small)"}}>
                                    <GrSecure />
                                          <p >Na ochranu platby posielajte peniaze a komunikujte s hostiteľmi vždy prostredníctvom Airbnb.</p>
                                      </div>
                                        </div> */}
                                    </div>
                                    
              </Komponenta>
              </div>
              </div>
            
           }






                    

     
        </div>
    </div>

      </div>
    
     
  <div className='footerecekostiku'>
    <div ref={hodnotenie}></div>
    <Footer>
    </Footer>
  </div>

   </Templatepage>
        
</>
        
  )
}

export default StrankaProjekt

// const scrollToRef = (ref, offset = 0) => {
//   if (ref.current && zmena.current) {
//     const top = ref.current.offsetTop; // vzdialenosť od vrchu scroll kontajnera
//     zmena.current.scrollTo({ top: top - offset, behavior: "smooth" });
//   }
// };

// onClick={() => {setInfo(1),scrollToRef(informacie, 50)}}

// <div className='dalsieinformacie' ref={informacie}>informacie</div>
