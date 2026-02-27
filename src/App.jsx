import { useState,useRef,useContext,useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import './App.css'
import { motion, AnimatePresence } from 'framer-motion';

import { GlobalProvider} from "./naviac/reactcontext/reactcontext";
import 'boxicons/css/boxicons.min.css';

import Detailpage from './naviac/detail/detailpage'


import Detail from './pages/detail/detail'
import  Home from './pages/home/home'
import Rezervacie from './pages/rezervacie/rezervacie'
import Konverzacie from './pages/konverzacie/konverzacie'
import Header from './naviac/header/header'
import Upozornenia from './pages/upozornenia/upozornenia'
import Profil from './pages/profil/profil'  
import Nastavenia from './pages/nastavenia/nastavenia'
import Informacie from './pages/informacie/informacie'
import Maincast from './naviac/maincast/maincast'

import Clovekpage from './pages/clovekpage/clovekpage'
import Navigaciamobil from './naviac/navigaciamobil/navigaciamobil'
import Castcosahyba from './naviac/castcosahybe/castcosahyba'

import Owerlap from './pages/owerlap/owerlap';
import { MyProvider } from './naviac/providertelefon/providertelefon'

import StrankaProjekt from './pages/strankaProjekt/strankaProjekt'

import Card from './naviac/portalpop/portalpop'
import Scrool from './naviac/scrool/scrool'
import Uporoznujes from './naviac/upozornujes/upozornujes'
import Lajknute from './naviac/lajknute/lajknute'
import Poslednyowerlap from './naviac/poslednyowerlap/poslednyowerlap'
import Detailpagee from './pages/Detailpagee/Detailpagee'

import Jednotlivec from './pages/jednotlivec/jednotlivec'

import Finalobjedvanak from './pages/finalobjedvanak/finalobjedvanak'

import Footer from './pages/footer/footer'

import { useMediaQuery } from "react-responsive";




import ScrollToTop from './naviac/opravascrolu/opravascrolu'

import Pokladna from './pages/pokladna/pokladna'
import Formularikceokko from './pages/formularikceokko/formularikceokko'
import Zhrnutie from './pages/zhrnutie/zhrnutie'


import Formularovacastposldena from './pages/poslednacast/for'



import { GlobalContext } from './naviac/reactcontext/reactcontext'
import Loading from './pages/loading/loading'

function App() {
    
  

  const { pocetOblubene, setPocetOblubene, filter, setFilter,owerlap,seTeraz,teraz ,popokno,setPopokno,
         lajknute,setLajknute,lajkujem,texdo,setTextdo,kontext,setKontext,oblubene,setOblubene,mala,setMala,novicek,novicek2,referencielplpl
  
        } = useContext(GlobalContext);
  


  const[otvorenie,setOtvorenie] = useState(false)
  const[hoverheader,sethoverheader] = useState(false)

  const[domov,setDomov] = useState("domov")
  const [query, setQuery] = useState("");
  const [query2, setQuery2] = useState("");


  const [aktivny, setAktivny] = useState(1);
  const inputRef = useRef(null);
        const[farba,setFarba] = useState(false)


          // const { zmena } = useContext(GlobalContext);

           const zmena = useRef(null)

           const rodic = useRef(null)
   const posledny = useRef(null)
    const dva = useRef(null)
    const tri = useRef(null)
    const styri = useRef(null)
    const pat = useRef(null)
    const sest = useRef(null)
    const sedem = useRef(null)
    const domovcek = useRef(null)
    const poslednyref = useRef(null)
     const pojdeme = useRef(null)

const lavasipka = useRef([])
const pravasipka = useRef([])


const focus = useRef(null)


const scrollToTop = () => {
  if (zmena.current) {
    zmena.current.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
};
 



const finalna = useMediaQuery({ maxWidth: 750 });



// const hideFooter = location.pathname === "/Konverzacie";


 

const [show, setShow] = useState(true);


useEffect(() => {
  // hneď zablokuje scroll
  document.body.style.overflow = "hidden";

  const timer = setTimeout(() => {
  setShow(false)
    document.body.style.overflow = "auto";
  }, 2000);

  return () => {
    clearTimeout(timer);
    document.body.style.overflow = "auto";
  };
}, []);

  
  return (
      <MyProvider>
        <GlobalProvider zmena = {zmena}>  

 <motion.div 
animate = {{
 opacity: show ? 1 : 0,
pointerEvents: show ? "auto" : "none",
}}
className='tootjelenloaaderkok'>
<Loading
show = {show}
></Loading>
  
  </motion.div >
 




{finalna && <>
   <BrowserRouter>
     <Scrool
     domov = {domov}
    zmena = {zmena}
    ></Scrool>
    
    <ScrollToTop></ScrollToTop>

       <Lajknute
       otvorenie = {otvorenie}
            setOtvorenie = {setOtvorenie}
       ></Lajknute>
 
    <Poslednyowerlap
    focus = {focus}
    ></Poslednyowerlap>


    <Uporoznujes></Uporoznujes>
 {/* <Owerlap
 dizajnicek = {{display:"none"}}
    style={{backgroundColor:"var(--farba-bielaEfekty)"}}
    ></Owerlap> */}
   

 
    <AnimatePresence>
  {otvorenie && (
    <motion.div
      className='velkyzatvarac'
      initial={{ opacity: 0 }}      // začína neviditeľný
      animate={{ opacity: 1 }}      // keď sa otvorí, fade in
      exit={{ opacity: 0 }}         // pri zatváraní fade out
      transition={{ duration: 0.3 }} // čas animácie
      onClick={() => {
        setOtvorenie(false);
        setFarba(false);
        setQuery("");
      }}
    ></motion.div>
  )}
</AnimatePresence>


    
   
   
            <Header  pojdeme = {pojdeme}
            inputRef = {inputRef}
            otvorenie = {otvorenie}
            setOtvorenie = {setOtvorenie}

            hoverheader = {hoverheader}
            sethoverheader = {sethoverheader}

            farba = {farba}
            setFarba = {setFarba}
            setQuery = {setQuery}
            query = {query}
            
            setDomov = {setDomov}
            poslednyref = {poslednyref}

            setQuery2 = {setQuery2}
            query2 = {query2}

             aktivny = {aktivny}
            setAktivny = {setAktivny}

            
          
            ></Header>

     
            <Castcosahyba  
            lavasipka = {lavasipka}  
            pravasipka = {pravasipka}
            pojdeme = {pojdeme}
            rodic = {rodic}
            posledny = {posledny}
            dva = {dva}
            tri = {tri}
            styri = {styri}
            pat = {pat}
            sest = {sest}
            sedem = {sedem}
            domovcek = {domovcek}
            setDomov = {setDomov}
             poslednyref = {poslednyref}
            domov = {domov}></Castcosahyba>


            
        {/* <div className='zakladny' ref={zmena}> */}
          
         
        <AnimatePresence>

          <div className='zachrana'>
          <Routes>
                
            <Route path="/" 
            
            element={<Home 
             setDomov = {setDomov}
            domov = {domov}  
            lavasipka = {lavasipka}  
            pravasipka = {pravasipka}  
              otvorenie = {otvorenie}
            setOtvorenie = {setOtvorenie}/>} />

            <Route path="/Rezervacie" element={<Rezervacie />} />

            <Route path="/Konverzacie" element={<Konverzacie />} />
            
            <Route path="/Upozornenia" element={
              <Upozornenia
              lavasipka = {lavasipka}  
            pravasipka = {pravasipka}  
            otvorenie = {otvorenie}
            setOtvorenie = {setOtvorenie}
             />} />
            <Route path="/Profil" element={<Profil />} />
            <Route path="/Profil/:id" element={<Jednotlivec />} />
            <Route path="/Centrum" element={<Nastavenia />} />
            <Route path="/Zhrnutie" element={<Finalobjedvanak />} />
            <Route path="/Informacie" element={<Informacie />} />
            <Route path="/StrankaProjekt" element={<StrankaProjekt />} />
            <Route path="/Clovekpage/:id" element={<Clovekpage />} />
            
            <Route path="/Detail/:id" element={<Detail />} />
            <Route path="/Detailpagee/:id" element={<Detailpagee />} />

         
            <Route path="/Pokladna" element={<Pokladna />} />
            <Route path="/Formularikceokko" element={<Formularikceokko />} />
            <Route path="/Zhrnutiefinal" element={<Zhrnutie />} />
             <Route path="/Formularovacastposldena" element={<Formularovacastposldena />} />
          
           

          </Routes>

      
{/* <div style={{width:"100%",height:"500px", backgroundColor:"red"}}></div> */}


<Footer
         setDomov = {setDomov}
        ></Footer>
 
     

       
       
          </div>
          <div className='lekokollomomo'>
                   <Navigaciamobil
       scrollToTop = {scrollToTop}
       pojdeme = {pojdeme}
            inputRef = {inputRef}
            otvorenie = {otvorenie}
            setOtvorenie = {setOtvorenie}

            hoverheader = {hoverheader}
            sethoverheader = {sethoverheader}

            farba = {farba}
            setFarba = {setFarba}
            setQuery = {setQuery}
            query = {query}
            
            setDomov = {setDomov}
            poslednyref = {poslednyref}

            aktivny = {aktivny}
            setAktivny = {setAktivny}
       ></Navigaciamobil>
          </div>

        
       
    
           </AnimatePresence>
     

     


 
          


    

          
    </BrowserRouter>

</>}            




{!finalna && <>
   <BrowserRouter>
     <Scrool
     domov = {domov}
    zmena = {zmena}
    ></Scrool>
    

       <Lajknute
       otvorenie = {otvorenie}
            setOtvorenie = {setOtvorenie}
       ></Lajknute>
 
    <Poslednyowerlap
    focus = {focus}
    ></Poslednyowerlap>


    <Uporoznujes></Uporoznujes>
 {/* <Owerlap
 dizajnicek = {{display:"none"}}
    style={{backgroundColor:"var(--farba-bielaEfekty)"}}
    ></Owerlap> */}
   

 
    <AnimatePresence>
  {otvorenie && (
    <motion.div
      className='velkyzatvarac'
      initial={{ opacity: 0 }}      // začína neviditeľný
      animate={{ opacity: 1 }}      // keď sa otvorí, fade in
      exit={{ opacity: 0 }}         // pri zatváraní fade out
      transition={{ duration: 0.3 }} // čas animácie
      onClick={() => {
        setOtvorenie(false);
        setFarba(false);
        setQuery("");
      }}
    ></motion.div>
  )}
</AnimatePresence>


    
   
          <div className='lentak'>
            <Header  pojdeme = {pojdeme}
            inputRef = {inputRef}
            otvorenie = {otvorenie}
            setOtvorenie = {setOtvorenie}

            hoverheader = {hoverheader}
            sethoverheader = {sethoverheader}

            farba = {farba}
            setFarba = {setFarba}
            setQuery = {setQuery}
            query = {query}
            
            setDomov = {setDomov}
            poslednyref = {poslednyref}

            setQuery2 = {setQuery2}
            query2 = {query2}

             aktivny = {aktivny}
            setAktivny = {setAktivny}

            
          
            ></Header>

           <div className='zakladny2'>
            <Castcosahyba  
            lavasipka = {lavasipka}  
            pravasipka = {pravasipka}
            pojdeme = {pojdeme}
            rodic = {rodic}
            posledny = {posledny}
            dva = {dva}
            tri = {tri}
            styri = {styri}
            pat = {pat}
            sest = {sest}
            sedem = {sedem}
            domovcek = {domovcek}
            setDomov = {setDomov}
             poslednyref = {poslednyref}
            domov = {domov}></Castcosahyba>
            
        <div className='zakladny' ref={zmena}>
          
         
        <AnimatePresence>
          <Routes>
                
            <Route path="/" 
            
            element={<Home 
             setDomov = {setDomov}
            domov = {domov}  
            lavasipka = {lavasipka}  
            pravasipka = {pravasipka}  
              otvorenie = {otvorenie}
              scrollToTop = {scrollToTop}
            setOtvorenie = {setOtvorenie}/>} />

            <Route path="/Rezervacie" element={<Rezervacie />} />

            <Route path="/Konverzacie" element={<Konverzacie />} />
            
            <Route path="/Upozornenia" element={
              <Upozornenia
              lavasipka = {lavasipka}  
            pravasipka = {pravasipka}  
            otvorenie = {otvorenie}
            setOtvorenie = {setOtvorenie}
             />} />

            <Route path="/Profil" element={<Profil />} />
            <Route path="/Profil/:id" element={<Jednotlivec />} />
            <Route path="/Centrum" element={<Nastavenia />} />
            <Route path="/Zhrnutie" element={<Finalobjedvanak />} />
            <Route path="/Informacie" element={<Informacie />} />
            <Route path="/StrankaProjekt" element={<StrankaProjekt />} />
            <Route path="/Clovekpage/:id" element={<Clovekpage />} />
            
            <Route path="/Detail/:id" element={<Detail />} />
            <Route path="/Detailpagee/:id" element={<Detailpagee />} />
             <Route path="/Pokladna" element={<Pokladna />} />
            <Route path="/Formularikceokko" element={<Formularikceokko />} />
             <Route path="/Zhrnutiefinal" element={<Zhrnutie />} />
             <Route path="/Formularovacastposldena" element={<Formularovacastposldena />} />
           

          </Routes>

          <Footer

          scrollToTop = {scrollToTop}
         setDomov = {setDomov}
        ></Footer>
           </AnimatePresence>
        </div>


        </div>
          


       <Navigaciamobil
       scrollToTop = {scrollToTop}
       pojdeme = {pojdeme}
            inputRef = {inputRef}
            otvorenie = {otvorenie}
            setOtvorenie = {setOtvorenie}

            hoverheader = {hoverheader}
            sethoverheader = {sethoverheader}

            farba = {farba}
            setFarba = {setFarba}
            setQuery = {setQuery}
            query = {query}
            
            setDomov = {setDomov}
            poslednyref = {poslednyref}

            aktivny = {aktivny}
            setAktivny = {setAktivny}
       ></Navigaciamobil>
          </div>

          
    </BrowserRouter>

</>}       
 
    

       </GlobalProvider>
       </MyProvider>
       
  )
}

export default App
