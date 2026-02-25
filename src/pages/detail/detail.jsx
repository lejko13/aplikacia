import './detail.css'

import React, { useState,useEffect,useContext,useRef } from 'react';


import Templatepage from '../tempaltepage/templatepage'
import Footer from '../footer/footer'
import Otazky from '../../naviac/otazky/otazky'
import Ikonypage from '../../naviac/ikonypage/ikonypage'
import Ikonyhore from '../detail/ikonyhore/ikonyhore'
import Vyhodyzaklad from '../../naviac/vyhodyzakalad/vyhodyzaklad'
import Doleelement from '../../naviac/doleelement/doleelement'
import { useMediaQuery } from "react-responsive";
import Tabulecak from '../../naviac/tabulecak/tabulecak'
import Dalsi from '../../naviac/dalsi/dalsi'
import Komponenta from '../../naviac/komponenta/komponenta'
import Linka from '../../naviac/linka/linka'
import {vyhody} from  '../../naviac/vyhody/vyhody'
import Navrh from './navrh/navrh'
import {TestimonialCard} from "../../naviac/TestimonialCard/TestimonialCard"
import Vrchmobilu from '../../naviac/vrchmobilu/vrchmobilu'
import Fotkapage from './fotkypage/fotkapage'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Mousewheel,Virtual } from 'swiper/modules';
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { color } from 'framer-motion';



import { MyContext } from '../../naviac/providertelefon/providertelefon'
import { GlobalContext } from '../../naviac/reactcontext/reactcontext'

import DoleelementUpravuj from '../../naviac/doleelementUpravuj/doleelementUpravuj'



import { useNavigate } from 'react-router-dom';
import { useParams, useLocation } from 'react-router-dom';

import {apartmany,ludia,koment} from '../../naviac/fuzzy/fuzzy'

import {majitel} from '../../naviac/zoznamosoby/zoznamosoby'
import { use } from 'react';

import Informacnyowerla from '../../naviac/informacnyowerlap/informacnyowerla'
import Overlapiceko from '../../naviac/mobilnyoweraal/mobilnyoweraal'
import Ukazka from '../detail/ukazka/ukazka'
import Lenabybolo from '../detail/lenabyboolo/lenabybolo'


const Detail = () => {

  const text22 = useMediaQuery({ maxWidth: 750 });
  
    const swiperRef = useRef(null);

   const { id } = useParams(); // z URL získame ID
   const navigate = useNavigate();

  const apartman = apartmany.find(a => a.id === id);

  const clovek = ludia.find(item => item.id === apartman.autor)

 const recenzie = ludia.filter(item =>
  clovek.recenzie.includes(item.id)
);


 const { suborOpen,setSuborOpen,obsahOpen,setObsahOpen,subor,setSubor,nazovSuboru,setNazovSuboru,unikattne,setUnikatne,meno,dotadok,setDotadok,lepsiedalej,setLepsiedalej} = useContext(MyContext);

    const { pocetOblubene, setPocetOblubene, filter, setFilter,owerlap,seTeraz,teraz ,popokno,setPopokno,
       lajknute,setLajknute,lajkujem,texdo,setTextdo,kontext,setKontext,oblubene,setOblubene,mala,setMala,
       
        dene,setDene,mesiace,setMesiace,roky,setRoky
      } = useContext(GlobalContext);

const formular = () => {
  setSuborOpen(true)
  setObsahOpen("formular")
}
const prazdno = () => {
  setSuborOpen(true)
  setObsahOpen("prazdno")
  setDotadok(
  <Fotkapage
  data = {apartman.fotky}
  ></Fotkapage>)
}

const openInstagram = () => {
  window.open("https://www.instagram.com/leofudaly/", "_blank");
}




 const smerujem  = useNavigate();

    // const handleClick = () => {
    //     // presmeruje na inú stránku s ID
    //     navigate(`/Profil/id`);
    // }
    const handleClick = () => {
        // presmeruje na inú stránku s ID
        navigate(`/Profil/${clovek.id}`);
    }
    const handleClick2 = (parameter) => {
        // presmeruje na inú stránku s ID
        navigate(`/Profil/${parameter}`);
    }

// console.log(oblubene);

  // const novy10 = koment.filter(item => item.komentId === apartman.autor)
useEffect(() => {
  setPocetOblubene(oblubene.length);

}, [oblubene]);

// console.log(apartman)

  // const clovkk = apartman.find(a => a.autor === ludia.id)

  const[pocitam,setPocitam] = useState(apartman?.cena)
  const[hover,setHover] = useState(false)

   const isMobile = useMediaQuery({ maxWidth: 750 });
    const isMobile2 = useMediaQuery({ minWidth: 751 });
    const text = useMediaQuery({ maxWidth: 1170 });
    const textmaly = useMediaQuery({ minWidth: 1169 });
    const isDesktop = useMediaQuery({ minWidth: 1160 });
    const novy = useMediaQuery({ minWidth: 510 });
    const letakkk = useMediaQuery({ maxWidth: 1050 });
    const letakkk2 = useMediaQuery({ minWidth: 1050 });


const koko = () => {
  setTextdo(apartman);
   setOblubene(stary => {
                    const existuje = stary.some(e => e.id === apartman.id)
                    if (existuje) {
                setMala(false)
                return stary.filter(e => e.id !== apartman.id)     
                    }
                    else{
                      setMala(true)
                      
                      return [...stary,apartman]
                    }
                  })

}

   

    // console.log(apartman);
    // console.log(clovek);
    
// 

  const handleProfil = () => {
    navigate("/Profil");
  };

console.log(majitel[0].byvanieotazky[0].otazka1);


    // console.log(novy10)

    const[obsah,setObsah] = useState(null)
    

const[otvorenie,setOtvorenei] = useState(false)

const open = () => setOtvorenei(true);
const jeden = () => setObsah("fotky")
const textick = () => setObsah("text")
const vyhoda = () => setObsah("vyhoda")
const rerencze = () => setObsah("rerencze")
const fotky = apartman.fotky


const existuje = majitel[0].ponuka.some(
  item => item.id === apartman.id
);



// console.log(existuje);

console.log(clovek.byvanieotazky);





  const handleSpat = () => {
    navigate(-1); // krok späť v histórii
  };



  return (
    <>
      {isMobile && <>
      <Informacnyowerla
          show = {otvorenie}
          setOtvaram = {setOtvorenei}

          ></Informacnyowerla>
            <Overlapiceko
            show = {otvorenie}
            klik = {() => setOtvorenei(false)}
            >
              {obsah === "fotky" && 
              <Lenabybolo
              fotka = {clovek.fotka}
              meno = {clovek.meno}
              priezvisko = {clovek.priezvisko}
              popisek = {clovek.aktivny}
             onClick2={() => handleClick()}
            //  onClick = {() => handleClick()}
              indo44 = {clovek.pocetrecenzie}
              info20= {clovek.pocethodnoteteni}
              >
                <Fotkapage data = {fotky}></Fotkapage>
              </Lenabybolo>
              }
              {obsah === "text" && 
               <Lenabybolo
              fotka = {clovek.fotka}
              meno = {clovek.meno}
              priezvisko = {clovek.priezvisko}
              popisek = {clovek.aktivny}
              // onClick = {onClick}
                 onClick2={() => handleClick()}
              indo44 = {clovek.pocetrecenzie}
              info20= {clovek.pocethodnoteteni}
              >
                <div className='textovacasoklenniviv'>{clovek.popisek}</div>
              </Lenabybolo>
      
               
                
             
         }
              {obsah === "vyhoda" && 
              <Lenabybolo
              fotka = {clovek.fotka}
              meno = {clovek.meno}
              priezvisko = {clovek.priezvisko}
              popisek = {clovek.aktivny}
              // onClick = {onClick}
                 onClick2={() => handleClick()}
              indo44 = {clovek.pocetrecenzie}
              info20= {clovek.pocethodnoteteni}
              >
                      <div className='obsahovacasttttt' >
                      <div className='nutttoj'>
                        {clovek?.majitel?.map((key) => {
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
                                                            
                      </div>

                


    </div>
              </Lenabybolo>}



               {obsah === "rerencze" && 
              <Lenabybolo
              fotka = {clovek.fotka}
              meno = {clovek.meno}
              priezvisko = {clovek.priezvisko}
              popisek = {clovek.aktivny}
              // onClick = {onClick}
                 onClick2={() => handleClick()}
              indo44 = {clovek.pocetrecenzie}
              info20= {clovek.pocethodnoteteni}
              >
           
                <div className='sipwerpreludiii'>
          
   {recenzie.map((item) =>

                   <TestimonialCard 
                sytle={{
                  color:"pink",
                  border:"var(--border)",
                  width:"100%",
                    boxSizing: "border-box",
                  height:"   145px",
                  flexShrink:0,
                
                   overflow: "hidden",
                  // backgroundColor:"red",
                  
                }}
                stylikk = {{
                  width:'100%',
                    boxSizing: "border-box",
                  height:"100%",
                  // backgroundColor:"pink"
                }}
      
                        name = {item.meno}
                        priezvisko = {item.priezvisko}
                        image = {item.fotka}
                company = {item.email}
                text = {item.koment}
                        hodnotim = {item.hodnotim}
                        hodnotenie = {item.cislo}
                        uzivatel = {() => handleClick2(item.id)
                        }
                
                        ></TestimonialCard>


  )}
</div>
         
             
                      
              </Lenabybolo>}

            </Overlapiceko>
        

      </>}
    


    <Templatepage
    hedericek = {{display:isMobile  ? "none" : "block"}}
    header = {
      isMobile2 && 
    <div style={{width:"100%",height:"100%",    justifyContent: "space-between",display:"flex"}}>
       <div>
            <span className='TEXTICEKNEAOVICEK' >  {apartman.name}</span>
            <p className='textpodhlavnuym'> {apartman.krajina} / {apartman.kraj} / {apartman.location}</p>
            </div>

            <div className='fleximakogot'>
              <div className='ikonnka'
              onClick={() => formular()}
              ><i class='bx bx-share-alt' ></i></div>

              {existuje === false && <div className='ikonnka'
                onClick={() => 
                {
                      lajkujem()  ,
                  koko()}}
              ><i class='bx bx-heart' ></i></div>}

              


              <div className='ikonnka'
                onClick={() => prazdno()}
              ><i class='bx bx-image-alt' ></i></div>

            </div>

    </div>}
    >
    {/* <div className='zakladnoveho'>{apartman.id}</div> */}
    <div className='celkooooom'>
      <div className='obsahhhhkoiij'>
     

{/*fotka mobil a inoky nic viac  */}
{isMobile && (
  <div className="ivsvivfhj">
    <div style={{width:"100%",height:"fit-content",padding:"10px 10px 0px 10px",position:"absolute",zIndex:10,display:"flex",justifyContent:"space-between"}}>
      <div className='ikonnka' onClick={() => handleSpat()}><i class='bx bx-chevron-left'></i></div>

      <div className='fleximakogot' >
      <div className='ikonnka'
        onClick={() => formular()}
      ><i class='bx bx-share-alt' ></i></div>

            {existuje === false && 
             <div className='ikonnka'
        onClick={() => {lajkujem()  ,
                  koko()}}
      ><i class='bx bx-heart' ></i></div>
            
            }
      
     

      <div className='ikonnka'
        onClick={() => {open(),jeden()}}
      ><i class='bx bx-image-alt' ></i></div>
      </div>
    </div>
    <Swiper className='tototoceledrziii'
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      modules={[Navigation, Pagination, Autoplay, Mousewheel, Virtual]}
      observer={true}
      observeParents={true}
      resizeObserver={true}
      spaceBetween={10}
      slidesPerView={1}
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
      {apartman.fotky.map((foto, index) => (
        <SwiperSlide key={index} className="ttotobudewrapper">
          
          <img className="fotakrazanavzdy2" src={foto} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>

    {/* <div className='fleximakogot' style={{position:"absolute",zIndex:500}}>
      <div className='ikonnka'><i class='bx bx-share-alt' ></i></div>
      <div className='ikonnka'><i class='bx bx-heart' ></i></div>
      <div className='ikonnka'><i class='bx bx-image-alt' ></i></div>
    </div> */}
  
  </div>
)}
{/*fotka mobil a inoky nic viac  */}
          {/* onClick2 = {() => handleClick()} */}
{isMobile && <div style={{position:"relative",height:"140px",width:"100%",backgroundColor:"reds"}}>


{existuje === false &&  <div className='tujetextovacastkokokopoj'>
    <Vrchmobilu
    nazov={apartman.name}
            info = {apartman.location}
            info2 = {apartman.krajina}

            hostia={clovek.info?.hostia}
            spalne = {clovek.info?.spalne}
            lozka ={clovek.info?.lozka}
            kupelna = {clovek.info?.kupelna}

            fotka = {clovek.fotka}
            meno = {clovek.meno}
            priezvisko = {clovek.priezvisko}
            popisek = {clovek.aktivny}


            indo44 = {clovek.pocetrecenzie}
            info20 = {clovek.pocethodnoteteni}
            onClick = {() => handleClick()}
    ></Vrchmobilu>

   </div>}



{existuje === true &&  <div className='tujetextovacastkokokopoj'>
    <Vrchmobilu
    nazov={apartman.name}
            info = {apartman.location}
            info2 = {apartman.krajina}

            hostia={clovek.info?.hostia}
            spalne = {clovek.info?.spalne}
            lozka ={clovek.info?.lozka}
            kupelna = {clovek.info?.kupelna}

            fotka = {lepsiedalej.fotka}
            meno = {lepsiedalej.meno}
            priezvisko = {lepsiedalej.priezvisko}
            popisek = {lepsiedalej.email}


            indo44 = {clovek.pocethodnoteteni}
            info20 = {clovek.pocetrecenzie}

            onClick = {() => handleProfil()}
    ></Vrchmobilu>

   </div>}



   



</div>}


{existuje === false && isMobile && (
  <>
    <div style={{ padding: "0px 10px" }}>
      <DoleelementUpravuj
        pocitam={pocitam}
        setPocitam={setPocitam}
        apartman={apartman}
        clovek={clovek}
        ponuka={formular}
      />
    </div>

    <div style={{ padding: "10px 10px" }}>
      <Linka />
    </div>
  </>
)}



{/* text */}
{isMobile && 

<>
<div style={{padding:"0px 10px"}}>
  <div className='lentextnicviac'>
    <span>{clovek.popisek}</span>

  </div>
  
  <Navrh textbutton  = "Zobraziť viac" onClick = {() => {open(),textick()}}>
    <div className='obsahovacasttttt'></div>
  </Navrh> 
  </div>
  <div style={{padding:"10px 10px"}}>
         <Linka></Linka>
</div>
</>
  
  }

{/* vyhody */}
{isMobile && 
<>
<div style={{padding:"0px 10px"}}>
  <Navrh textbutton  = "Zobraziť výhody" onClick = {() => {open(),vyhoda()}}>
    <div className='obsahovacasttttt' >
      <div className='nutttoj'>
         {clovek?.majitel?.slice(0, 4).map((key) => {
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
     </div>


    </div>
  </Navrh>
  </div>
   <div style={{padding:"10px 10px"}}>
         <Linka></Linka>
</div>
</>
  }


{/* otazky */}
{isMobile && 
<>
<div style={{padding:"0px 10px"}}>
    {existuje === true &&
 <Otazky
 odpoved1 = {majitel[0].byvanieotazky[0].odpoved1}
  otazka1 =  {majitel[0].byvanieotazky[0].otazka1}

  odpoved2 = {majitel[0].byvanieotazky[0].odpoved2}
  otazka2 = {majitel[0].byvanieotazky[0].otazka2}

   odpoved3 = {majitel[0].byvanieotazky[0].odpoved3}
  otazka3 = {majitel[0].byvanieotazky[0].otazka3}

  odpoved4 = {majitel[0].byvanieotazky[0].odpoved4}
  otazka4 = {majitel[0].byvanieotazky[0].otazka4}

  odpoved5 = {majitel[0].byvanieotazky[0].odpoved5}
  otazka5 = {majitel[0].byvanieotazky[0].otazka5}



></Otazky> }
  </div>

<div style={{padding:"0px 10px"}}>
    {existuje === false &&
 <Otazky
odpoved1 = {clovek.byvanieotazky[0].odpoved1}
  otazka1 =  {clovek.byvanieotazky[0].otazka1}

  odpoved2 = {clovek.byvanieotazky[0].odpoved2}
  otazka2 = {clovek.byvanieotazky[0].otazka2}

   odpoved3 = {clovek.byvanieotazky[0].odpoved3}
  otazka3 = {clovek.byvanieotazky[0].otazka3}

  odpoved4 = {clovek.byvanieotazky[0].odpoved4}
  otazka4 = {clovek.byvanieotazky[0].otazka4}

  odpoved5 = {clovek.byvanieotazky[0].odpoved5}
  otazka5 = {clovek.byvanieotazky[0].otazka5}



></Otazky> }
  </div>


  <div style={{padding:"10px 10px"}}>
         <Linka></Linka>
</div>

</>
  }
{/* hodnoteniea */}
{isMobile && 
<>

<div style={{padding:"0px 10px"}}>
  <Navrh 
  textbutton = "Zobraziť hodnotenia" onClick = {() => {open(),rerencze()}}

  >
    <div className='obsahovacasttttt'>
       <Swiper className='usmerenie'
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              modules={[Navigation, Pagination, Autoplay, Mousewheel, Virtual]}
              observer={true}
              observeParents={true}
              resizeObserver={true}
              spaceBetween={10}
              slidesPerView={1}
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
             {recenzie.map((item) => 
              <SwiperSlide  className='silededejeden'> 
              <div style={{width:"100%",height:"fit-content",overflow: "hidden",  boxSizing: "border-box",}}>

                
                   <TestimonialCard 
                sytle={{
                  color:"pink",
                  border:"var(--border)",
                  width:"100%",
                    boxSizing: "border-box",
                  height:"   145px",
                
                   overflow: "hidden",
                  // backgroundColor:"red",
                  
                }}
                stylikk = {{
                  width:'100%',
                    boxSizing: "border-box",
                  height:"100%",
                  // backgroundColor:"pink"
                }}
      
                        name = {item.meno}
                        priezvisko = {item.priezvisko}
                        image = {item.fotka}
                company = {item.email}
                text = {item.koment}
                        hodnotim = {item.hodnotim}
                        hodnotenie = {item.cislo}
                        uzivatel = {() => handleClick2(item.id)
                        }
                
                        ></TestimonialCard>


              </div>
               
           
            </SwiperSlide>

            )}
           
                 
           
            
            
                            
                                
                                
              </Swiper>
      
    </div>
  </Navrh>
  
  </div>
  </>
  }
  


         

       
        {isMobile2 &&  <div className='fotofotookotkiky'>

          <div className='lavastranahalvna'>
            
            

              <div className='oblanaswiper'>
                <div className='lentotoko'  
             style={{left:"10px"}}
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <i className='bx bx-chevron-left'></i>
              </div>

              <div className='lentotoko'
              style={{right:"10px"}}
                onClick={() => swiperRef.current?.slideNext()}
              >
                <i className='bx bx-chevron-right'></i>
              </div>
             <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              modules={[Navigation, Pagination, Autoplay, Mousewheel, Virtual]}
              observer={true}
              observeParents={true}
              resizeObserver={true}
              spaceBetween={10}
              slidesPerView={1}
              preventInteractionOnTransition={true}
              touchStartPreventDefault={true}
              touchMoveStopPropagation={true}
              // breakpoints={{
              //   320: { slidesPerView: 1.5, spaceBetween: 10 },
              //   480: { slidesPerView: 2.1, spaceBetween: 10 },
              //   550: { slidesPerView: 3.2, spaceBetween: 10 },
              //   850: { slidesPerView: 3.5, spaceBetween: 10 },
              //   930: { slidesPerView: 3.5, spaceBetween: 10 },
              //   1000: { slidesPerView: 4.5, spaceBetween: 10 },
              //   1294: { slidesPerView: 5.5, spaceBetween: 10 },
              // }}
              mousewheel={{
                forceToAxis: true,
                releaseOnEdges: false,
                invert: false,
                sensitivity: 1,
              }}
            >
             {apartman.fotky.map((item) => 
              <SwiperSlide className='LISKOT'
              onClick={() => prazdno()} 
              > 
             <img className='fotakrazanavzdy' src={item} alt="" />   
            </SwiperSlide>

            )}
           
                 
           
            
            
                            
                                
                                
              </Swiper>
              </div>
           
            
          </div>

          <div className='lavastranahalvna2'>

            <div className='vnutorprefotku' onClick={() => prazdno()} >
              <div className='lenpaelnahoer'
              onMouseEnter={() => setHover(1)}
          onMouseLeave={() => setHover(null)}
          style={{
            boxShadow:"var(--box-shadow)",
            height:"100%",
            transition:"var(--transition)",
            opacity:"1",
            zIndex:"2",
            position:"absolute",
            width:"100%",
            backgroundColor: hover=== 1 ?"var(  --farba-bielaEfekty)" : "transparent"
          }}
              ></div>

               <img className='fotakrazanavzdy' src={apartman.fotky[0]} alt=""
                  style={{
                    transition: "transform 0.3s ease", // hladka animacia
                    transform: hover === 1 ? "scale(1.05)" : "scale(1)" // mierne zväčšenie pri hover
                  }}
                />
            </div>

            <div className='vnutorprefotku' onClick={() => prazdno()} >
              <div className='lenpaelnahoer'
              onMouseEnter={() => setHover(3)}
          onMouseLeave={() => setHover(null)}
          style={{
            boxShadow:"var(--box-shadow)",
            height:"100%",
            transition:"var(--transition)",
            opacity:"1",
            zIndex:"2",
            position:"absolute",
            width:"100%",
            backgroundColor: hover=== 3 ?"var(  --farba-bielaEfekty)" : "transparent"
          }}
              ></div>

               <img className='fotakrazanavzdy' src={apartman.fotky[0]} alt=""
                  style={{
                    transition: "transform 0.3s ease", // hladka animacia
                    transform: hover === 3 ? "scale(1.05)" : "scale(1)" // mierne zväčšenie pri hover
                  }}
                />
            </div>

            <div className='vnutorprefotku' onClick={() => prazdno()} >
              <div className='lenpaelnahoer'
              onMouseEnter={() => setHover(4)}
          onMouseLeave={() => setHover(null)}
          style={{
            boxShadow:"var(--box-shadow)",
            height:"100%",
            transition:"var(--transition)",
            opacity:"1",
            zIndex:"2",
            position:"absolute",
            width:"100%",
            backgroundColor: hover=== 4 ?"var(  --farba-bielaEfekty)" : "transparent"
          }}
              ></div>

               <img className='fotakrazanavzdy' src={apartman.fotky[0]} alt=""
                  style={{
                    transition: "transform 0.3s ease", // hladka animacia
                    transform: hover === 4 ? "scale(1.05)" : "scale(1)" // mierne zväčšenie pri hover
                  }}
                />
            </div>

            <div className='vnutorprefotku' onClick={() => prazdno()} >
              <div className='lenpaelnahoer'
              onMouseEnter={() => setHover(5)}
          onMouseLeave={() => setHover(null)}
          style={{
            boxShadow:"var(--box-shadow)",
            height:"100%",
            transition:"var(--transition)",
            opacity:"1",
            zIndex:"2",
            position:"absolute",
            width:"100%",
            backgroundColor: hover=== 5 ?"var(  --farba-bielaEfekty)" : "transparent"
          }}
              ></div>

               <img className='fotakrazanavzdy' src={apartman.fotky[0]} alt=""
                  style={{
                    transition: "transform 0.3s ease", // hladka animacia
                    transform: hover  === 5? "scale(1.05)" : "scale(1)" // mierne zväčšenie pri hover
                  }}
                />
            </div>
            
            {/* <img className='fotakrazanavzdy' src={apartman.fotky[0]} alt="" />
             */}
          </div>
         
        </div>}
       

       
   {/* tu zacinam s brekpotny toto je desktop */}
        {isMobile2 && 
        <div>
        
          {/* <Ikonyhore></Ikonyhore> */}
        {/*  */}
        <div className='tusadajucari'>
          <div className='tujeobsahhhova'>

{existuje === false &&        <div style={{margin:"10px 0px 0px 0px"}}>

              
              <Tabulecak
            fotka = {clovek.fotka}
              meno = {clovek.meno}
              priezvisko = {clovek.priezvisko}
              popisek = {clovek.aktivny}
              ohod =  {clovek.pocethodnoteteni}
              
              cislo= {clovek.pocetrecenzie}
              onClick2 = {() => handleClick()}
              onClick = {() => handleClick()}
              onClick3 = {() => handleClick()}
              ></Tabulecak>


  
            </div> }
  
  {existuje === true &&   

   <div style={{margin:"10px 0px 0px 0px"}}>

              
              <Tabulecak

                  fotka = {lepsiedalej.fotka}
            meno = {lepsiedalej.meno}
            priezvisko = {lepsiedalej.priezvisko}
            popisek = {lepsiedalej.email}


            indo44 = {clovek.pocethodnoteteni}
            info20 = {clovek.pocetrecenzie}

            onClick = {() => handleProfil()}

            // fotka = {clovek.fotka}
              // meno = {clovek.meno}
              // priezvisko = {clovek.priezvisko}
              // popisek = {clovek.aktivny}
              ohod = {clovek.pocetrecenzie}
              cislo= {clovek.pocethodnoteteni}
              onClick2 = {() => handleProfil()}
              // onClick = {() => handleClick()}
              onClick3 = {() => handleProfil()}
              ></Tabulecak>


  
            </div>
  }


<div style={{padding:"10px 0px"}}>
         <Linka></Linka>
</div>




{existuje === false && letakkk && (
  <>
    <div className="mobilsystemobjednevka">
      <DoleelementUpravuj
        pocitam={pocitam}
        setPocitam={setPocitam}
        apartman={apartman}
        clovek={clovek}
        ponuka={formular}
      />
    </div>

    <div style={{ padding: "10px 0px" }}>
      <Linka />
    </div>
  </>
)}


 <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
  {/* <div className='lentakkokokoookjhbh'>
    <span>{apartman.popisek}</span>



  </div> */}
              {clovek?.majitel?.slice(0, 4).map((key) => {
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

</div>

<div style={{padding:"10px 0px"}}>
         <Linka></Linka>
</div>
                      <div className='tusurecenzieee'>
                        <div className='tujescroolkokoksfs'>
                        {recenzie.map((item) => 
                        <TestimonialCard
                        uzivatel = {() => {
                             navigate(`/Profil/${item.id}`);
                          console.log("koko")
                        }}
                        name = {item.meno}
                        priezvisko = {item.priezvisko}
                        image = {item.fotka}
                company = {item.email}
                text = {item.koment}
                        hodnotim = {item.hodnotim}
                        hodnotenie = {item.cislo}
                        //  name = {item.meno}
                        ></TestimonialCard>
                        )}
                        </div>
                               
                      </div>
<div style={{padding:"10px 0px"}}>
         <Linka></Linka>
</div>
             
{existuje === true &&
 <Otazky
 odpoved1 = {majitel[0].byvanieotazky[0].odpoved1}
  otazka1 =  {majitel[0].byvanieotazky[0].otazka1}

  odpoved2 = {majitel[0].byvanieotazky[0].odpoved2}
  otazka2 = {majitel[0].byvanieotazky[0].otazka2}

   odpoved3 = {majitel[0].byvanieotazky[0].odpoved3}
  otazka3 = {majitel[0].byvanieotazky[0].otazka3}

  odpoved4 = {majitel[0].byvanieotazky[0].odpoved4}
  otazka4 = {majitel[0].byvanieotazky[0].otazka4}

  odpoved5 = {majitel[0].byvanieotazky[0].odpoved5}
  otazka5 = {majitel[0].byvanieotazky[0].otazka5}



></Otazky> }
{existuje === false && 
<Otazky

odpoved1 = {clovek.byvanieotazky[0].odpoved1}
  otazka1 =  {clovek.byvanieotazky[0].otazka1}

  odpoved2 = {clovek.byvanieotazky[0].odpoved2}
  otazka2 = {clovek.byvanieotazky[0].otazka2}

   odpoved3 = {clovek.byvanieotazky[0].odpoved3}
  otazka3 = {clovek.byvanieotazky[0].otazka3}

  odpoved4 = {clovek.byvanieotazky[0].odpoved4}
  otazka4 = {clovek.byvanieotazky[0].otazka4}

  odpoved5 = {clovek.byvanieotazky[0].odpoved5}
  otazka5 = {clovek.byvanieotazky[0].otazka5}
></Otazky> }
             
             

          </div>

          {existuje === false && letakkk2 && (
  <div className="panelcosahyb">
    <div className="obalnahyby">


      <DoleelementUpravuj
        pocitam={pocitam}
        setPocitam={setPocitam}
        apartman={apartman}
        clovek={clovek}
        ponuka={formular}
      />


    </div>
  </div>
)}
         
          
          
          

        </div>

        {/* <Komponenta></Komponenta>

       */}
       
        
      </div>}
        

    
      </div>
    </div>

  <Footer>
    </Footer> 
     

    </Templatepage>
    </>
  )
}

export default Detail

