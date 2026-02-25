import './header.css';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from "react-router-dom";
import Fuse from 'fuse.js';
import { apartmany } from '../../naviac/fuzzy/fuzzy'


import { useState, useRef, useMemo, useEffect } from 'react';


import { useContext } from "react";
import { GlobalContext } from '../reactcontext/reactcontext'

import Bodky from './bodky/bodky'
import Ikony from './ikony/ikony'
import Ukazovatelko from '../ukazovatelko/ukazovatelko'
import Nahlad from '../nahlad/nahlad'
import Hodnotenie from '../hodnotenie/hodnotenie'
import Oznamenie from '../oznamenie/oznamenie'

import IkonaMobil from '../../naviac/ikonaMobil/ikonaMobil'
import Lenikona from '../../naviac/lenikona/lenikona'

import Owerlap2 from '../../pages/owerlapcopy/oweralcopy';
import Textyheader from '../textyheader/textyheader'
import { RiShoppingBasket2Line } from "react-icons/ri";
import Polozkaitem from '../../naviac/polozkaitem/polozkaitem'
import { MyContext } from '../providertelefon/providertelefon'

import Input from '../../naviac/fuzzy/input'
import { use } from 'react';

import Oknoheader from '../../naviac/okonoheader/oknoheader'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Mousewheel,Virtual } from 'swiper/modules';

import Linka from '../linka/linka';
import { useMediaQuery } from "react-responsive";

import Nahladposleny from './nahladposleny/nahladposleny'


const Header = ({otvorenie,setOtvorenie,hoverheader,sethoverheader,inputRef,farba,setFarba,setQuery,query,setDomov,pojdeme,poslednyref,setQuery2,query2,aktivny,setAktivny
}) => {
   
const referencia = useRef(null)

const okono2 = useMediaQuery({ minWidth: 381 });
const okono1 = useMediaQuery({ maxWidth: 380 });

const vyska = useMediaQuery({ maxHeight: 720 });
const komralo = useMediaQuery({ maxHeight: 750 });

const dvovjka = useRef(null)

     const swiperRef = useRef(null);

     const { pocetOblubene, setPocetOblubene, filter, setFilter,teraz, seTeraz,presun,setPresun } = useContext(GlobalContext);
     const { portal, setPortal,animacia,setAnimacia,rezim,setRezim,lepsiedalej,setLepsiedalej,setSuborOpen,setObsahOpen} = useContext(MyContext);
const uvidime = useRef(null)

console.log(lepsiedalej);

       


    
    const[hover,setHover] = useState(false)

    const[nahlad,setNahlad] = useState(null)


    const[skuska,setSkuska] = useState(null)
    const klik = (apartman) =>  {
        
        navigate(`/Detail/${apartman.id}`);
          setOtvorenie(false);
       setFarba(false)
      setQuery("");
    };
      
    // const klik2 = (apartman) => {
    //   navigate('/StrankaProjekt', { state: apartman });
    //      setQuery("");
    // }

       const navigate = useNavigate();

        // const fuse = useMemo(() => new Fuse(apartmany, { keys: ['krajina', 'kraj','location'], threshold: 0.3 }), []);


       const results = useMemo(() => {
    if (!query || query.trim() === "") return [];
    
    const queryWords = query.trim().split(" "); // napr. "slovensko bra" -> ["slovensko", "bra"]
    
    // Začneme s celým apartmany
    let filtered = apartmany;

    queryWords.forEach(word => {
        const fuseSearch = new Fuse(filtered, { keys: ['krajina', 'kraj','location'], threshold: 0.4 });
        filtered = fuseSearch.search(word).map(r => r.item);
                });

                return filtered;
            }, [query]);



  const formular = () => {
  setSuborOpen(true)
  setObsahOpen("formular")
}



      const results2 = useMemo(() => {
  if (!query2 || query2.trim() === "") return [];

  const queryWords2 = query2.trim().split(" ");
  let filtered = apartmany;

  for (const word of queryWords2) {
    const fuseSearch = new Fuse(filtered, {
      keys: ["krajina", "kraj", "location"],
      threshold: 0.4,
    });

    const results = fuseSearch.search(word).map(r => r.item);

    // 🔴 ak sa nenašlo nič, okamžite skonči
    if (results.length === 0) {
      return [];
    }

    filtered = results;
  }

  return filtered;
}, [query2, apartmany]);
        // const results = query ? fuse.search(query).map(r => r.item): apartmany;

        const lejkova = () => {
             setOtvorenie(false);
       setFarba(false)
      setQuery("");
        }
      const handleClick = () => {



          setOtvorenie(prev => {
    const novaHodnota = !prev;

    if (!novaHodnota) {
      // tu sa vykoná niečo, keď bude false
    setFarba(false)
      console.log("Teraz je false!");
      setQuery("");
    } else {
      // tu sa vykoná niečo, keď bude true
             setFarba(true)
      console.log("Teraz je true!");
      inputRef.current.focus(); 
    }

    return novaHodnota;


    
  });
    


  };
  useEffect(() => {
  function handleClickOutside(e) {
    // ak klik nebol v INPUTE → vymaž input
    if (uvidime.current && !uvidime.current.contains(e.target)) {
      setQuery2("");
    }
    
    
  }

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);


// useEffect(() => {
//   const funkcia = (e) => {

//      if (referencia.current && !referencia.current.contains(e.target)) {
//       seTeraz(false);
//     }

//     document.addEventListener("mousedown", funkcia);

//   return () => {
//     document.removeEventListener("mousedown", funkcia);
//   };
//   }
// },[])
useEffect(() => {
  const funkcia = (e) => {
    if (referencia.current && !referencia.current.contains(e.target)) {
      seTeraz(false);
    }
  };

  document.addEventListener("mousedown", funkcia);

  return () => {
    document.removeEventListener("mousedown", funkcia);
  };
}, []);

useEffect(() => {
  const funkcia = (e) => {
    if (dvovjka.current && !dvovjka.current.contains(e.target)) {
       setAnimacia(false)
    }
  }
   document.addEventListener("mousedown", funkcia);

  return () => {
    document.removeEventListener("mousedown", funkcia);
  };
},[])

const [darkMode, setDarkMode] = useState(() => {
  const ulozene = localStorage.getItem("darkMode");
  return ulozene ? JSON.parse(ulozene) : false;
});

useEffect(() => {
  localStorage.setItem("darkMode", JSON.stringify(darkMode));
}, [darkMode]);




useEffect(() => {
  if (portal) {
    document.documentElement.style.overflow = "hidden"; // html
    document.body.style.overflow = "hidden";
  } else {
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  }

  // cleanup pri unmount
  return () => {
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  };
}, [portal]);



  return (
<>

{/* <Oknoheader></Oknoheader> */}
{!komralo &&  <Owerlap2 open={portal} />}

{komralo &&  <>
<AnimatePresence>
      
    {portal && ( <motion.div
          onClick={() => {setPortal(0),setQuery2("")}}
          className="Owerlap2"

          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        
         
        >
          <div className='obsahtOwerlap' onClick={() => setQuery2("")}>
         {/* <Ukazovatelko
            
              onMouseEnter={() => setHoverecek(1)}
              onMouseLeave={() => setHoverecek(null)}
              style={{
                 zIndex: 300, 
                color:"var(--farba-cierna)",
                backgroundColor: hoverecek === 1 ?"transparent" : "var(--farba-main2)",
                position: "fixed",
                top: "20px",
                right: "20px"
              }}
         ><i class='bx bx-x'></i></Ukazovatelko> */}
            

    
            
     
          </div>
        </motion.div>)}
     
       

    </AnimatePresence>
</>}



{/* <Owerlap2 open={portal} /> */}
{/* <div className='totojelenowraltaky'></div> */}

<div className='hornyheader' 
style={{
  backgroundColor:portal ? "transparent" : "var(--farba-biela)",

  "--deninujem": teraz ? "var(--farba-cierna)" : "var(--farba-sivaText)"}}>
  <motion.div 
    className="obklupuje"
 >
  <div className='obalvnutoroo33'>
    <div className='vnutorooo33' onClick={() => setPortal("true")}>
      <div className='ikonaikona'>
       <IkonaMobil
                  sztylicek = {{display:"none"}}
            
              style = {{color :"var(--deninujem)",position: "absolute",left:"10px"}}  
              ikona={<i class='bx bx-search' ></i>}
              text = {"Obľúbené"}
               stylecek = {{display:"none"}}
              
              ></IkonaMobil>
        </div>
        
          
            <input
                type="text"
                onClick={() => setPortal("true")}
            
                placeholder="Začni vyhľadávať"
                inputMode="text"
                autoComplete="off"
                aria-label="Vyhľadávanie"
                 ref={referencia}  
                className='inputetkkke'
               
                value={query2}                    // 🔌 prepojenie so stavom
                onChange={(e) => setQuery2(e.target.value)}   // 🔥 fuzzy search pri písaní
                />
            


        </div>
      </div>
        {/* <IkonaMobil 
        celocek = {{backgroundColor:"red",height:"100%",width:"50px",zIndex:"1200"}}
        stylecek = {{display:"none"}}
        ikona = {<i class='bx bx-cog' ></i>}
        ></IkonaMobil> */}
            <AnimatePresence>
       <motion.div
       style={{"--deninujem": teraz ? "var(--farba-cierna)" : "var(--farba-sivaText)"}}
       ref={dvovjka}
       
          initial={{ opacity: 1, }}
       animate={{ opacity: 1, height: animacia ? "fit-content" : 0 }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className='infofilter'
         >
          <div className='obashinfofilter'

          style={{
            padding:animacia ? "0px 0px 10px 10px" : "0px 0px 0px 10px",
            border:animacia ? "var(--border)" : "none"

          }}
          >
            
              <div className='buzna3'>
            
{/* toto je ten swiper */}
            <div className='buzna5'>
              <Swiper
               onSwiper={(swiper) => (swiperRef.current = swiper)}
              modules={[Navigation, Pagination, Autoplay, Mousewheel, Virtual]}
              observer={true}
              observeParents={true}
              resizeObserver={true}
              spaceBetween={10}
              slidesPerView={4}
              // dynamický offset podľa state
              preventInteractionOnTransition={true}
              touchStartPreventDefault={true}
              touchMoveStopPropagation={true}
              breakpoints={{
            
                100: { slidesPerView: 4.3, spaceBetween: 0 },
                410: { slidesPerView: 5.3, spaceBetween: 0 },
              
                750: { slidesPerView: 7.3, spaceBetween: 0 },

          
              }}
              mousewheel={{
                forceToAxis: true,
                releaseOnEdges: false,
                invert: false,
                sensitivity: 1,
              }}
            >
        <SwiperSlide >

                  <IkonaMobil
                  onClick = {() => {navigate("/"),setDomov("domov"),setAnimacia(false)}}
                  
                  text = "Domov"
                  ikona={<i className='bx bx-home-alt'></i>}
                  ></IkonaMobil>
        </SwiperSlide>

          <SwiperSlide>
                  <IkonaMobil
                   onClick = {() => {navigate("/"),setDomov("S bazénom"),setAnimacia(false)}}
               text = "S bazénom"
              ikona={<i class='bx bx-swim' ></i>}
              ></IkonaMobil>
        </SwiperSlide>

        <SwiperSlide>
                   <IkonaMobil
                    onClick = {() => {navigate("/"),setDomov("Vidiek"),setAnimacia(false)}}
               text = "Vidiek"
              ikona={<i class='bx bx-wallet' ></i>}
              ></IkonaMobil>
        </SwiperSlide>

        <SwiperSlide>
                  <IkonaMobil
                    onClick = {() => {navigate("/"),setDomov("Pre dvoch"),setAnimacia(false)}}
               text = "Pre dvoch"
              ikona={<i class='bx bx-group'></i>}
              ></IkonaMobil>
        </SwiperSlide>

        <SwiperSlide>
                  <IkonaMobil
                    onClick = {() => {navigate("/"),setDomov("Prémiové"),setAnimacia(false)}}
               text = "Prémiové"
              ikona={<i class='bx bx-star' ></i>}
              ></IkonaMobil>
        </SwiperSlide>

      

        <SwiperSlide>
                  <IkonaMobil
                    onClick = {() => {navigate("/"),setDomov("mestke"),setAnimacia(false)}}
            
                  text = "Mestské"
                  ikona={<i class='bx bx-building-house'></i>}
                  ></IkonaMobil>
        </SwiperSlide>

        {/* <SwiperSlide>
                  <IkonaMobil
                    onClick = {() => {navigate("/"),setDomov("Pre dvoch"),setAnimacia(false)}}
      
                  text = "Domov"
                  ikona={<i className='bx bx-home-alt'></i>}
                  ></IkonaMobil>
        </SwiperSlide>

         <SwiperSlide>
                  <IkonaMobil
                    onClick = {() => {navigate("/"),setDomov("Pre dvoch"),setAnimacia(false)}}
                
                  text = "Domov"
                  ikona={<i className='bx bx-home-alt'></i>}
                  ></IkonaMobil>
        </SwiperSlide>

         <SwiperSlide>
                  <IkonaMobil
                    onClick = {() => {navigate("/"),setDomov("Pre dvoch"),setAnimacia(false)}}
                 
                  text = "Domov"
                  ikona={<i className='bx bx-home-alt'></i>}
                  ></IkonaMobil>
        </SwiperSlide> */}


            
                            
                                
                                
                                        </Swiper>


              


            </div>

            </div>

            

            
          </div>

         </motion.div>
         </AnimatePresence>


       
  </motion.div>
  
  
 <AnimatePresence>
    {query2 !== "" && results2.length === 0 && (<div 
    style={{height:"60px",width:"100%",backgroundColor:"var(--farba-biela"
      ,borderRadius:"12px",display:"flex",alignItems:"center", justifyContent:"start",padding:"20px 10px",gap:"10px"

    }}>
      <span style={{color:"red",fontSize:"25px"}}><i class='bx bx-x'></i></span>
      <span>   Nenašla sa žiadna zhoda</span>

  
      </div>)}


  {results2.length > 0   && (
    <motion.div
    ref={uvidime}
      className='inkognito'
       initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
    >
      <div className='stlystika'>
        {results2.map(item => (
        
        <>
          <div 
          className='ukazkamala'
          key={item.id} onClick={() =>{ klik(item),setPortal(false),setQuery2("")}}>
             <div className='pravastranafotecka'>
            <img  className = "fotkeaaake"src={item.fotky?.[0]} alt="" />
               </div>


            <div className='lavastranatexticekt'>   
              <div className='texticektexcicek'>
                <span style={{fontSize:"var(  --fontspecialny)"}}>{item.name}</span>
{/* 
               {okono2 &&  <div class="rating-box">
                  <span class="rating-icons"></span>
                  <span class="rating-value">
                    <i class="ikonicka bx bxs-star"></i>
                    <span style={{color:"var(--farba-sivaText)"}}>  {item.hodnotenie}</span>
                  </span>
               </div>  }  */}
               
              </div>
              {/* <div className='totozmizne' >{item.typ}</div> */}
              <div style={{color:"var(--farba-sivaText)",display:"flex",gap:"2.5px",fontSize:"var(--font-size-base69)"}}>
                <span><i  className='bx bx-been-here'></i></span>

            <span>{item.krajina} / {item.location} </span> 
          
              </div>
  
                
               </div>
           

            
         
          </div>
        
          </>
        ))}
        
      </div>
      {/* <Linka></Linka> */}
    </motion.div>
  )}
</AnimatePresence>
</div>


  <motion.div
  className="Header"
  initial={{ y: -50, opacity: 0, width:60 }}
  animate={{ y: 0, opacity: 1, width: otvorenie ? 210 : 62 }}
  transition={{ duration: 0.5 }}
>



        <div className='HeaderUp'>
            <div className='HeaderBodky'
            >
                <Bodky style={{ 
                    backgroundColor: "var(--farba-cervena)",
                     
                     }}></Bodky>
                <Bodky 
                style={{ backgroundColor: "var(  --farba-zlta)" }}
                setOtvorenie ={setOtvorenie}
                  onClick={() => {
                    setFarba(false);
                    console.log("Teraz je false!");
                    inputRef.current.value = "";
                    setOtvorenie(false);
                    }}
                ></Bodky>
                <Bodky style={{ backgroundColor: "var(--farba-zelena)" }}
                onClick={() =>{
                    setOtvorenie(true);
                              setFarba(true);
                                console.log("Teraz je true!");
                                inputRef.current.focus();
                }}
                ></Bodky>
            
            </div>


            <div className='HeaderIkony'>
                <div className='horehore'>
                    <div className='Logo'>
                        <div className='logocelocek'>
                            <div className='logoLOgo'>
                                <p style={{
                                    color:"var( --farba-main)",
                                    fontWeight:"900",
                                    fontSize:"25px"
                                    }}>L</p>
                            </div>
                        <div className='todlasie'>
                            <p style={{
                                    color:"var( --farba-main)",
                                    fontWeight:"900",

                                    fontSize:"25px"
                                    }}>LOGO</p>
                        
                        </div>
                      </div>

{vyska === false &&   <Ukazovatelko
                        onClick = {() =>   handleClick()}
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                         style={{
                            backgroundColor: hover ? "var(--farba-main)":"var( --farba-main)",
                            position: "absolute",
                            top: "50%",
                            right:"-30px",
                            transform: "translateY(-50%)"
                            }}
                        >
                            {otvorenie  ? (
                                <i className='bx bx-chevron-left' style={{color:"white"}} ></i>): (
                                <i className='bx bx-chevron-right' style={{color:"white"}}></i>
                            )}
                            </Ukazovatelko>}
                       
                    </div>
                    <div className='Logo'>
                        <div className='logoLOgo2'
                   
                        >
                            <div className='inputieklogo'
                           onClick={() => {
                                    setOtvorenie(true);
                                    setFarba(true);
                                    console.log("Teraz je true!");
                                    inputRef.current.focus();
                            }}>
                            <i class='ikona bx bx-search'  
                        
                        onMouseEnter={() => sethoverheader(12)}
                        onMouseLeave={() => sethoverheader(false)}
                        style={{ 
                            transition:"var( --transition)",
                            cursor:"pointer",
                            color: farba === true 
                                ? 'var(--farba-main)' 
                                : (hoverheader === 12 ? 'var(--farba-main)' : 'var(--farba-cierna')

                    }}
                        
                        ></i></div>

                        <Input
                            farba={farba}
                            inputRef={inputRef}
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            />

                          

                        </div>
                      
                          {results.length > 0 &&  (
                              <div className='zobrazeneeinputu'
                               onMouseLeave={() => setNahlad(null)}
                                >
                                <AnimatePresence>
                                
                                            <motion.ul
                                            className="listocek"
                                            initial={{ opacity: 0, y: 0 }}   // štart: neviditeľné a posunuté hore
                                            animate={{ opacity: 1, y: 0 }}     // animácia: úplne viditeľné a na správnej pozícii
                                            exit={{ opacity: 0, y: 20 }}      // pri odchode: zmizne a posunie sa hore
                                            transition={{ duration: 0.3 }}     // dĺžka animácie
                                            >
                                                <motion.div className='wrapperlistok'>
                                            {results.map((item, i) => (
                                                <motion.li 
                                                onMouseEnter={() => setNahlad(item)}
                                                // onMouseLeave={() => setNahlad(null)}
                                                className="wraperiikeckoskok" 
                                   
                                                onClick={() => klik(item)}
                                                key={i}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.2, delay: i * 0.03 }} // malé oneskorenie pre každý riadok
                                                >
                                                  <Polozkaitem
                                                  nazov = {item.name}
                                                  lokacia = {item.location}
                                                  hodnotenie = {item.hodnotenie}
                                                         ikona = {<i class='bx bxs-star' ></i>}
                                                  ></Polozkaitem>
                                                {/* <p style={{ whiteSpace: 'nowrap' ,fontSize:"var(--font-size-base)",color:"var(--farba-cierna)"}}></p> 
                                                       <div style={{
                                                        width:"100%",
                                                      justifyContent:"space-between",
                                                        display:"flex",
                                                        // backgroundColor:"red"
                                                       }}>
                                                         <p style={{ whiteSpace: 'nowrap' ,fontSize:"var(  --font-size-base2)",color:"var(--farba-sivaText)"}}></p>  
                                                         <Hodnotenie
                                                         text = 
                                                        
                                                         >
                                                         </Hodnotenie>
                                                        

                                                       </div> */}
                                           
                                                </motion.li>
                                                
                                            ))}
                                            </motion.div>
                                            
                                            </motion.ul>
                                            
                              

                                </AnimatePresence>
                           
                                <div className='tu'>
                                     <AnimatePresence>
                                    {nahlad && (
                                        <Nahladposleny 
                                        zmaz = {{display:"none"}}
                                         kontrola = {true}
                                        nazov={nahlad.name}
                                            location={nahlad.location}
                                            hodnotenie={nahlad.hodnotenie}
                                            krajina = {nahlad.krajina}
                                            fotky = {nahlad.fotky}
                                             apartman={nahlad}

                                             setOtvorenie = {setOtvorenie}
                                             setFarba = {setFarba}
                                             setQuery = {setQuery}
                                             otvorenie = {otvorenie}
                                        >
                                            
                                        </Nahladposleny>
                                    )}
                                    </AnimatePresence>
                                </div>
                            
                    
                        </div>
                )}


              {query && results.length === 0 && (
      <div className='zobrazeneeinputu'
                               onMouseLeave={() => setNahlad(null)}
                                >
                                <AnimatePresence>
                                
                                            <motion.ul
                                            className="listocek2"
                                            initial={{ opacity: 0, y: 0 }}   // štart: neviditeľné a posunuté hore
                                            animate={{ opacity: 1, y: 0 }}     // animácia: úplne viditeľné a na správnej pozícii
                                            exit={{ opacity: 0, y: 20 }}      // pri odchode: zmizne a posunie sa hore
                                            transition={{ duration: 0.3 }}     // dĺžka animácie
                                            >
                                                <motion.div className='wrapperlistok2'>
                                                    <div className='llleowmokokmns'>
                                                      <span className='ikonnkalnibyu' onClick={() => setQuery("")}><i class='bx bx-x' ></i></span>
                                                      </div>
                                                 
                                                    <span className='texiceliniloo'>Nič sa nenašlo</span>
                                                  
                                                  

                                                
                                            
                                            </motion.div>
                                            
                                            </motion.ul>
                                            
                              

                                </AnimatePresence>
                           
                             
                            
                    
                        </div>
)}


                
                

                    </div>

                </div>
               
                 

                <div className='texticek'></div>
{/* jsjknsjknsajkvnsajkcnsdajkcnasjdkcnsdakdcnsajkcnsajkcnsajkcnsajkc */}

                  <div style={{position:"relative",width:"auto",height:"auto" ,}}>
                             <AnimatePresence>

                              {vyska === false  && !otvorenie && hoverheader === 3 && (
                                    <Textyheader>Domov</Textyheader>
                                )}


                                                </AnimatePresence>
                            <Ikony
                                slova = "Domov"
                                ref={poslednyref}
                                onClick={() =>     {
                                    navigate("/");
                                    lejkova()
                                    setDomov("domov")
                                    // setFilter(false)
                                }}
                            onMouseEnter={() => sethoverheader(3)}
                            onMouseLeave={() => sethoverheader(false)}

                                style={{ backgroundColor: hoverheader === 3? 'var(--farba-main2)' :"transparent", }}
                
                            
                                ikona={<i className='ikona bx bx-home-alt' ></i>}
                            ></Ikony>
                      </div>
{/* jsjknsjknsajkvnsajkcnsdajkcnasjdkcnsdakdcnsajkcnsajkcnsajkcnsajkc */}

                        <div style={{position:"relative",width:"auto",height:"auto"}}>
                            <AnimatePresence>

                              {presun.length >= 1 && <Oznamenie>{presun.length}</Oznamenie>}
                    
                    </AnimatePresence>
                                            <AnimatePresence>

                                             

                                                    { vyska === false  && !otvorenie && hoverheader === 4 && (
                                           <Textyheader >Rezervácie</Textyheader>
                                                    )}

                                                </AnimatePresence>


                            <Ikony
                                slova = "Moje rezervácie"
                                onClick={() =>     {
                                    navigate("/Rezervacie")
                                     lejkova()
                                      setFilter(false)
                                }}
                            onMouseEnter={() => sethoverheader(4)}
                            onMouseLeave={() => sethoverheader(false)}

                                style={{ backgroundColor: hoverheader === 4 ? 'var(--farba-main2)' :"transparent", }}
                
                            
                                ikona={<RiShoppingBasket2Line className='ikona' />}
                            ></Ikony>

                            </div>
{/* jsjknsjknsajkvnsajkcnsdajkcnasjdkcnsdakdcnsajkcnsajkcnsajkcnsajkc */}

<div style={{position:"relative",width:"auto",height:"auto"}}>
                                           <AnimatePresence>
                                                    { vyska === false && !otvorenie && hoverheader === 5 && (
                                           <Textyheader  >Konverzácia</Textyheader>
                                                    )}
                                                </AnimatePresence>
                <Ikony
                     slova = "Konverzácia"
                       onClick={() =>    { navigate("/Konverzacie");
                         lejkova();
                          setFilter(false)

                       }}
                 onMouseEnter={() => sethoverheader(5)}
                onMouseLeave={() => sethoverheader(false)}

                     style={{ backgroundColor: hoverheader === 5 ? 'var(--farba-main2)' :"transparent", }}
      
                   
                    ikona={<i class='ikona bx bx-chat'></i>}
                ></Ikony>
                 </div>
{/* jsjknsjknsajkvnsajkcnsdajkcnasjdkcnsdakdcnsajkcnsajkcnsajkcnsajkc */}

                 <div style={{position:"relative",width:"auto",height:"auto"}}>

                    <AnimatePresence>
                        {pocetOblubene > 0 && <Oznamenie>{pocetOblubene}</Oznamenie>}
                    
                    </AnimatePresence>
                                           <AnimatePresence>
                                                    { vyska === false && !otvorenie && hoverheader === 6 && (
                                           <Textyheader >Obľúbené</Textyheader>
                                                    )}
                                                </AnimatePresence>
                <Ikony
                     slova = "Obľúbené"
                       onClick={() =>     {navigate("/Upozornenia"); 
                        lejkova();
                        setFilter(false)
                    }}
                 onMouseEnter={() => sethoverheader(6)}
                onMouseLeave={() => sethoverheader(false)}

                     style={{ backgroundColor: hoverheader === 6 ? 'var(--farba-main2)' :"transparent", }}
      
                   
                    ikona={<i class='ikona bx bx-heart' ></i>}
                ></Ikony>
                   </div>
{/* jsjknsjknsajkvnsajkcnsdajkcnasjdkcnsdakdcnsajkcnsajkcnsajkcnsajkc */}

                 <div style={{position:"relative",width:"auto",height:"auto"}}>
                                            <AnimatePresence>
                                                    { vyska === false && !otvorenie && hoverheader === 7 && (
                                           <Textyheader >Profil</Textyheader>
                                                    )}
                                                </AnimatePresence>
                <Ikony
                     slova = "Profil"
                       onClick={() =>     {
                        navigate("/Profil"),
                         lejkova(),
                         setFilter(false)
                        }}
                 onMouseEnter={() => sethoverheader(7)}
                onMouseLeave={() => sethoverheader(false)}

                     style={{ backgroundColor: hoverheader === 7 ? 'var(--farba-main2)' :"transparent", }}
      
                   
                    ikona={<i class='ikona bx bx-user' ></i>}
                >
                    <div></div>
                </Ikony>
                
                 </div>
             
           

            </div>
        </div>
        <div className='HeaderDown'>
            <div className='HeaderIkony2'>
                <div style={{
                    // backgroundColor:"red",
                    width:"100%",
                    flexDirection:"column",
                    display:"flex",
                    height:"fit-content",
                    gap:"5px"
                }}>

                  <div style={{position:"relative",width:"auto",height:"auto"}}>
                             <AnimatePresence>
                                                    { vyska === false && !otvorenie && hoverheader === 8 && (
                                           <Textyheader>Filter</Textyheader>
                                                    )}
                                                </AnimatePresence>
                            <Ikony
                            ref = {pojdeme}
                                slova = "Filter"
                                 onClick={() =>     {setFilter(prev => prev === "otovrene" ? "false" : "otovrene"); lejkova()}}
                            onMouseEnter={() => sethoverheader(8)}
                            onMouseLeave={() => sethoverheader(false)}

                                style={{ backgroundColor: hoverheader === 8? 'var(--farba-main2)' :"transparent", }}
                
                            
                                ikona={<i class='ikona bx bx-cog' ></i>}
                            ></Ikony>
                      </div>
{/* jsjknsjknsajkvnsajkcnsdajkcnasjdkcnsdakdcnsajkcnsajkcnsajkcnsajkc */}

                  {/* <div style={{position:"relative",width:"auto",height:"auto"}}>
                             <AnimatePresence>
                                                    { vyska === false && !otvorenie && hoverheader === 9 && (
                                           <Textyheader  >Informácie</Textyheader>
                                                    )}
                                                </AnimatePresence>
                            <Ikony
                                slova = "Informácie"
                                 onClick={() =>     {navigate("/Informacie"); 
                                    lejkova();
                                    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
                                     
                                }}
                            onMouseEnter={() => sethoverheader(9)}
                            onMouseLeave={() => sethoverheader(false)}

                                style={{ backgroundColor: hoverheader === 9? 'var(--farba-main2)' :"transparent", }}
                
                            
                                ikona={<i class='ikona bx bx-info-circle' ></i>}
                            ></Ikony>
                      </div> */}

                        <div style={{position:"relative",width:"auto",height:"auto"}}>
                        
                            <AnimatePresence>
                              {  vyska === false && !otvorenie && hoverheader === 10 && (
                                <Textyheader
                                
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -10 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  {rezim ? 'Tmavý' : 'Svetlý'}
                                </Textyheader>
                              )}
                            </AnimatePresence>
                            <Ikony
                                slova = 
                                {rezim ? (
                                    "Tmavý"
                                ): (
                                    "Svetlý"
                                )}
                                onClick = {() => {setRezim(prev => !prev)}}
                            onMouseEnter={() => sethoverheader(10)}
                            onMouseLeave={() => sethoverheader(false)}

                                style={{ backgroundColor: hoverheader === 10? 'var(--farba-main2)' :"transparent", }}
                
                            
            ikona={
  rezim ? (
    <i className='ikona bx bx-moon'></i>
  ) : (
    <i className='ikona bx bx-sun'></i>
  )
}
                            ></Ikony>
                      </div>

{/* jsjknsjknsajkvnsajkcnsdajkcnasjdkcnsdakdcnsajkcnsajkcnsajkcnsajkc */}



            </div>

             <div style={{
                    // backgroundColor:"red",
                    width:"100%",
                    flexDirection:"column",
                    justifyContent:"end",
                    display:"flex",
                    height:"fit-content",
                    
                    gap:"15px"
                }}>
                    {/*  */}
                  
                    


                    {/*  */}
     
                   <div className='upozorenie'>

                     
                            <div className='fotkaHeader' onClick={() => { navigate("/Profil"),
                         lejkova(),
                         setFilter(false)}}>
                              <div className='lenzmdnafarby'></div>
                                <img className = "foteckaaa"src={lepsiedalej.fotka} alt="" />
                            </div>
                            <div className='textHeaderspodok'>
                            <p style={{ fontSize: "var(--font-size-base2)", whiteSpace: "nowrap",color:"var(--farba-cierna)" }}>{lepsiedalej.meno} {lepsiedalej.priezvisko}</p>

                                <p  className='textEmail'  >{lepsiedalej.email}</p>
                            </div>
                            <div className='ikonaHeaderodhlasenie'>
                                <i class='ikona2  bx bx-log-in' 
                                style=
                                {{
                                    cursor:"pointer",
                                   color: hoverheader === 11? 'var( --farba-main)' :"var(--farba-cierna)",


                                }}
                                onMouseEnter={() => sethoverheader(11)}
                                onMouseLeave={() => sethoverheader(false)}
                                onClick={() => formular()}
                                ></i>
                            </div>
                       
                       
                            
                           
                    
                    
                   </div>
                   
                   

                 




            </div>
            </div>



        </div>
      
    </motion.div>
 
    </>
  )
}

export default Header
