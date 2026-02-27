import './lengrind2MOBIL.css'

import React, { useState,useEffect } from 'react'
import Maleokno from '../../pages/rezervacie/formularovacast/maleokno/maleokno'
import Maleoknodvojka from '../maleoknodvojka/maleoknodvojka'
import Malespecial from '../malespecial/malespecial'
import Ukazka from '../../pages/detail/ukazka/ukazka'
import { MyContext } from '../providertelefon/providertelefon'
import { GlobalContext } from '../reactcontext/reactcontext'
import { useContext } from "react";
import { BiBorderBottom } from 'react-icons/bi'

import Blokujme from '../blokujem/blokujem'
import { useMediaQuery } from "react-responsive";

const Lengrind2MOBIL = ({hodnotenieKliknutie,recenzieekliknutie,kontrolaBloku,kontrolaPraitelov,uzivatel,cislo1,cislo2,popisek,prezvisko32,meno43,fotka,celok,farba,setFarba,ulozit,setUlozit}) => {

 const { suborOpen,setSuborOpen,obsahOpen,setObsahOpen,subor,setSubor,nazovSuboru,setNazovSuboru,unikattne,setUnikatne,meno,
   priatelia,setPriatelia,
   okolo,setOkolo,lepsiedalej,setLepsiedalej
 } = useContext(MyContext);


   const isMobile = useMediaQuery({ maxWidth: 1060 });
  const isDesktop = useMediaQuery({ minWidth: 750 });
  const mobilspeicla = useMediaQuery({ maxWidth: 450 });
  const mobilspeicla11 = useMediaQuery({ minWidth: 451 });


   const { lajknute,texdo,setTextdo,kontext,setKontext,mala,setMala,  kontorla,setKontrola,kontorlaText,setKontrolaText,automatika } = useContext(GlobalContext);


  const final = celok


const[ano,setAno] = useState("nie")

  
  return (
    <>
    <div className='tujetocelelelenooo'>



       {ulozit === "ulozit" && ano === "nie" &&  
       <div className='blurokienkokoko'>
        <div className='VYTVOERTETEXT2'>
    <div style={{ textAlign: "center" }}>
      {`Naozaj chcete upravit `}
      <span
        className='pisemnkolentakm'
         onClick={() => setAno("ano")}
      >
        udaje?
      </span>
    </div>
  </div>
      

       </div> }


<div className='tutojehoreee' style={{padding:"0px"}}>
  {mobilspeicla11 &&  <Ukazka
        klllppmi = {{background: "var(--farba-biela)",margin:"0px",borderTop:"none",borderBottom:"none"}}
        fotka = {fotka}
        meno = {meno43}
        priezvisko = {prezvisko32}
        popisek = {popisek}
     
        indo44 = {cislo1}
        info20 = {cislo2}
        kontrolaPraitelov = {kontrolaPraitelov}
        kontrolaBloku = {kontrolaBloku}
        hodnotenieKliknutie = {hodnotenieKliknutie}
        recenzieekliknutie = {recenzieekliknutie}
    
        ></Ukazka>}


  {mobilspeicla &&      <Ukazka
        klllppmi = {{ justifyContent:"start"   ,background: "var(--farba-biela)",margin:"0px",borderTop:"none",borderBottom:"none"}}
        fotka = {fotka}
        meno = {meno43}
        priezvisko = {prezvisko32}
        popisek = {popisek}
        // // onClick2 = 
        indo44 = {cislo1}
        info20 = {cislo2}
        kontrolaPraitelov = {kontrolaPraitelov}
        kontrolaBloku = {kontrolaBloku}
        // stilozkkkkzk = {{display:isMobile ? "none" : "block"}}
        ></Ukazka>}
    


      </div> 
      
    
      
      
      <div className='tujetocosaposuvaaaano' >
        {/* <div className='totosazobrazujelekedblok'></div> */}
      


 
     <div className='takzetulleloo'>
     
      <div className='vrhclecekookk'>
         <Maleoknodvojka
                ocomtoje = "Meno"
                placeholder = {uzivatel.meno}
                // dolezite = "koko"
              ></Maleoknodvojka>
         <Maleoknodvojka
                ocomtoje = "Priezvisko"
               placeholder = {uzivatel.priezvisko}
                // dolezite = "koko"
              ></Maleoknodvojka>
        </div>

        <Maleoknodvojka
                ocomtoje = "Email"
              placeholder = {uzivatel.email}
                // dolezite = "koko"
              ></Maleoknodvojka>
               <Maleoknodvojka
                ocomtoje = "Telefon"
              placeholder = {uzivatel.telefon}
                // dolezite = "koko"
              ></Maleoknodvojka>

        {/* <Maleoknodvojka
                ocomtoje = "Telefonné číslo"
                 placeholder = {final.cislo}
                // dolezite = "koko"
              ></Maleoknodvojka> */}

        {/* <Maleoknodvojka
                ocomtoje = "Dátum narodenia"
                 placeholder = {final.datum}
                // dolezite = "koko"
              ></Maleoknodvojka> */}



         <div className='vrhclecekookk23444'>
         <Maleoknodvojka
                ocomtoje = "Krajina"
         placeholder = {uzivatel.lokalita}
                // dolezite = "koko"
              ></Maleoknodvojka>
      
         <Maleoknodvojka
                ocomtoje = "Mesto"
                  placeholder = {uzivatel.kdebyva}
                // dolezite = "koko"
              ></Maleoknodvojka>
        </div>

         <div className='vrhclecekookk'>
       
         <Maleoknodvojka
                ocomtoje = "Dosiahnuta uroven"
                placeholder = {uzivatel.uroven}
                // dolezite = "koko"
              ></Maleoknodvojka>


         <Maleoknodvojka
                ocomtoje = "Vyhody"
                  placeholder = {uzivatel.vyhoda}
                // dolezite = "koko"
              ></Maleoknodvojka>
        </div>

        <Maleoknodvojka
       const still = {{
  height: "fit-content",
  lineHeight: "20px" // väčšia medzera medzi riadkami
}}
                ocomtoje = "O mne"
                  placeholder = {uzivatel.omne}
                // dolezite = "koko"
              ></Maleoknodvojka>


        


    </div> 
    

{/*     
    {ulozit === "ulozit" && 
      <div className='totoco'>
     

         {ano === "ano" && <div className='takzetulleloo'>
     
      <div className='vrhclecekookk'>
         <Malespecial
                ocomtoje = "Meno"
                kliakkmook = {() =>setAleno(prev => ({
                        ...prev,       // zachová všetky ostatné polia
                        meno: ""       // prepíše len meno
                      }))}
                // placeholder = {final.meno}
                hodnota = {aleno.meno}
               zmena={(e) =>
                  setAleno({
                    ...aleno,
                    meno: e.target.value
                  })
                }


              ></Malespecial>
         <Malespecial
                ocomtoje = "Priezvisko"
              //  placeholder = {final.priezvisko}
                hodnota = {aleno.priezvisko}
                 kliakkmook = {() =>setAleno(prev => ({
                        ...prev,       // zachová všetky ostatné polia
                        priezvisko: ""       // prepíše len meno
                      }))}
               zmena={(e) =>
                  setAleno({
                    ...aleno,
                    priezvisko: e.target.value
                  })
                }


           
                
              ></Malespecial>
        </div>

        <Malespecial
                ocomtoje = "Email"
              // placeholder = {final.email}
                // dolezite = "koko"
                     hodnota = {aleno.email}
                 kliakkmook = {() =>setAleno(prev => ({
                        ...prev,       // zachová všetky ostatné polia
                        email: ""       // prepíše len meno
                      }))}
               zmena={(e) =>
                  setAleno({
                    ...aleno,
                    email: e.target.value
                  })
                }
              ></Malespecial>

        <Malespecial
                ocomtoje = "Telefonné číslo"
                //  placeholder = {final.cislo}
                // dolezite = "koko"
                       hodnota = {aleno.cislo}
                kliakkmook = {() =>setAleno(prev => ({
                        ...prev,       // zachová všetky ostatné polia
                        cislo: ""       // prepíše len meno
                      }))}
               zmena={(e) =>
                  setAleno({
                    ...aleno,
                    cislo: e.target.value
                  })
                }
              ></Malespecial>

        <Malespecial
                ocomtoje = "Dátum narodenia"
                //  placeholder = {final.datum}
                // dolezite = "koko"
                       hodnota = {aleno.datum}
                 kliakkmook = {() =>setAleno(prev => ({
                        ...prev,       // zachová všetky ostatné polia
                        datum: ""       // prepíše len meno
                      }))}
               zmena={(e) =>
                  setAleno({
                    ...aleno,
                    datum: e.target.value
                  })
                }
              ></Malespecial>



         <div className='vrhclecekookk23444'>
         <Malespecial
                ocomtoje = "Krajina"
        //  placeholder = {final.krajina}
               hodnota = {aleno.krajina}
                // dolezite = "koko"
                 kliakkmook = {() =>setAleno(prev => ({
                        ...prev,       // zachová všetky ostatné polia
                        krajina: ""       // prepíše len meno
                      }))}
               zmena={(e) =>
                  setAleno({
                    ...aleno,
                    krajina: e.target.value
                  })
                }
              ></Malespecial>
        
         <Malespecial
                ocomtoje = "Mesto"
                  // placeholder = {final.mesto}
                // dolezite = "koko"
                       hodnota = {aleno.mesto}
                  kliakkmook = {() =>setAleno(prev => ({
                        ...prev,       // zachová všetky ostatné polia
                        mesto: ""       // prepíše len meno
                      }))}
               zmena={(e) =>
                  setAleno({
                    ...aleno,
                    mesto: e.target.value
                  })
                }
              ></Malespecial>
        </div>

         <div className='vrhclecekookk'>
       
         <Malespecial
                ocomtoje = "Dosiahnuta uroven"
                // placeholder = {final.uroven}
                // dolezite = "koko"
                       hodnota = {aleno.uroven}
                  kliakkmook = {() =>setAleno(prev => ({
                        ...prev,       // zachová všetky ostatné polia
                        uroven: ""       // prepíše len meno
                      }))}
               zmena={(e) =>
                  setAleno({
                    ...aleno,
                    uroven: e.target.value
                  })
                }
              ></Malespecial>
         <Malespecial
                ocomtoje = "Vyhody"
                  // placeholder = {final.vyhoda1}
                // dolezite = "koko"
                       hodnota = {aleno.vyhoda1}
                 kliakkmook = {() =>setAleno(prev => ({
                        ...prev,       // zachová všetky ostatné polia
                        vyhoda1: ""       // prepíše len meno
                      }))}
               zmena={(e) =>
                  setAleno({
                    ...aleno,
                    vyhoda1: e.target.value
                  })
                }
              ></Malespecial>
        </div>

        <Malespecial
                ocomtoje = "O mne"
                  // placeholder = {final.omne}
                // dolezite = "koko"
                       hodnota = {aleno.omne}
                   kliakkmook = {() =>setAleno(prev => ({
                        ...prev,       // zachová všetky ostatné polia
                        omne: ""       // prepíše len meno
                      }))}
               zmena={(e) =>
                  setAleno({
                    ...aleno,
                    omne: e.target.value
                  })
                }
              ></Malespecial>


        


    </div> }

      </div>
    } */}


      </div>
    


{/* 
   {ulozit === "ulozit" && 
      <div className='tutoupravujeeemm2'>

        
            <div className='buttonnauloyenie' onClick={() => {setAno("nie"),spat()}}>
              <span>Spat</span>
            </div>
        
            <div className='buttonnauloyenie' onClick={() => {zapnutie()}}>
              <span>Ulozit</span>
            </div>
          </div>} */}



    </div>

   
</>
  )
}

export default  Lengrind2MOBIL

  