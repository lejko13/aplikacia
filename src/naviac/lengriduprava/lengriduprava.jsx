import './lengriduprava.css'

import React, { useState,useEffect } from 'react'
import Maleokno from '../../pages/rezervacie/formularovacast/maleokno/maleokno'
import Maleoknodvojka from '../maleoknodvojka/maleoknodvojka'
import Malespecial from '../malespecial/malespecial'
import Ukazka from '../../pages/detail/ukazka/ukazka'
import { MyContext } from '../providertelefon/providertelefon'
import { GlobalContext } from '../reactcontext/reactcontext'
import { useContext } from "react";
import { BiBorderBottom } from 'react-icons/bi'


const Lengriduprava = ({cislo1,cislo2,popisek,prezvisko32,meno43,fotka,celok,farba,setFarba,ulozit,setUlozit}) => {

 const { suborOpen,setSuborOpen,obsahOpen,setObsahOpen,subor,setSubor,nazovSuboru,setNazovSuboru,unikattne,setUnikatne,meno,
   priatelia,setPriatelia,
   okolo,setOkolo,lepsiedalej,setLepsiedalej
 } = useContext(MyContext);



   const { lajknute,texdo,setTextdo,kontext,setKontext,mala,setMala,  kontorla,setKontrola,kontorlaText,setKontrolaText,automatika } = useContext(GlobalContext);


  const final = celok

  // console.log(final);


const[aleno,setAleno] = useState({meno:lepsiedalej.meno,
  priezvisko:lepsiedalej.priezvisko,
  email:lepsiedalej.email,
  cislo:lepsiedalej.cislo,
  datum:lepsiedalej.datum,
  krajina:lepsiedalej.krajina,
  kraj:lepsiedalej.kraj,
  mesto:lepsiedalej.mesto,
  uroven:lepsiedalej.uroven,
  omne:lepsiedalej.omne,
  vyhoda1:lepsiedalej.vyhoda1,
  vyhoda2:lepsiedalej.vyhoda2,
  vyhoda3:lepsiedalej.vyhoda3,
  vyhoda4:lepsiedalej.vyhoda4,
})





// console.log(typeof lepsiedalej.uroven)


const precivicenie = Object.entries(aleno)
// console.log(precivicenie);
// console.log(aleno);


        const noveLepsiedalej = { ...lepsiedalej };
        console.log(noveLepsiedalej);
        


const zapnutie = () => {


  const prazdne  = Object.values(aleno).some(i => i.trim() === "")

  
  if (prazdne) {
    console.log("prazdne");
    // console.log(aleno);
    automatika()
    setKontrolaText("vyplnvsetkyudaje")

    return 
  }
  

  else if (prazdne === false) {


  const allEqual = Object.entries(aleno).every(([klic, hodnota]) =>
    noveLepsiedalej[klic] === hodnota
  );

  if (allEqual) {
    console.log("vsetko plne");
      automatika()
    setKontrolaText("aktualne")
    return null;
  } else {
    const noveLepsiedalej = { ...lepsiedalej };

    Object.entries(aleno).forEach(([klic, hodnota]) => {
      noveLepsiedalej[klic] = hodnota;
    });

    setLepsiedalej(noveLepsiedalej);

         automatika()
    setKontrolaText("informaciesuulozene")
        console.log(lepsiedalej);
        
  }
}



}
useEffect(() => {
  console.log("kokokok");
  
},[aleno])


// console.log(aleno);
const spat = () => {
  
    setAleno({
      meno:lepsiedalej.meno,
        priezvisko:lepsiedalej.priezvisko,
        email:lepsiedalej.email,
        cislo:lepsiedalej.cislo,
        datum:lepsiedalej.datum,
        krajina:lepsiedalej.krajina,
        kraj:lepsiedalej.kraj,
        mesto:lepsiedalej.mesto,
        uroven:lepsiedalej.uroven,
        omne:lepsiedalej.omne,
        vyhoda1:lepsiedalej.vyhoda1,
        vyhoda2:lepsiedalej.vyhoda2,
        vyhoda3:lepsiedalej.vyhoda3,
        vyhoda4:lepsiedalej.vyhoda4,

    })
    
  

}

// const zapinam =  () => {
//   setLepsiedalej(prev => {...prev,})


// }

// console.log(aleno);

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

{ulozit === "upravit" && <div className='tutojehoreee'>
        <Ukazka
        klllppmi = {{    background: "var(--farba-biela)",margin:"0px",borderTop:"none",borderBottom:"none"}}
        fotka = {fotka}
        meno = {meno43}
        priezvisko = {prezvisko32}
        popisek = {popisek}
        // // onClick2 = 
        indo44 = {cislo1}
        info20 = {cislo2}
        ></Ukazka>


      </div> }
      
    
      
      
      <div className='tujetocosaposuvaaaano'>
      


     {ulozit === "upravit" && 
     <div className='takzetulleloo'>
     
      <div className='vrhclecekookk'>
         <Maleoknodvojka
                ocomtoje = "Meno"
                placeholder = {final.meno}
                // dolezite = "koko"
              ></Maleoknodvojka>
         <Maleoknodvojka
                ocomtoje = "Priezvisko"
               placeholder = {final.priezvisko}
                // dolezite = "koko"
              ></Maleoknodvojka>
        </div>

        <Maleoknodvojka
                ocomtoje = "Email"
              placeholder = {final.email}
                // dolezite = "koko"
              ></Maleoknodvojka>

        <Maleoknodvojka
                ocomtoje = "Telefonné číslo"
                 placeholder = {final.cislo}
                // dolezite = "koko"
              ></Maleoknodvojka>

        <Maleoknodvojka
                ocomtoje = "Dátum narodenia"
                 placeholder = {final.datum}
                // dolezite = "koko"
              ></Maleoknodvojka>



         <div className='vrhclecekookk23444'>
         <Maleoknodvojka
                ocomtoje = "Krajina"
         placeholder = {final.krajina}
                // dolezite = "koko"
              ></Maleoknodvojka>
      
         <Maleoknodvojka
                ocomtoje = "Mesto"
                  placeholder = {final.mesto}
                // dolezite = "koko"
              ></Maleoknodvojka>
        </div>

         <div className='vrhclecekookk'>
       
         <Maleoknodvojka
                ocomtoje = "Dosiahnuta uroven"
                placeholder = {final.uroven}
                // dolezite = "koko"
              ></Maleoknodvojka>
         <Maleoknodvojka
                ocomtoje = "Vyhody"
                  placeholder = {final.vyhoda1}
                // dolezite = "koko"
              ></Maleoknodvojka>
        </div>

        <Maleoknodvojka
       const still = {{
  height: "fit-content",
  lineHeight: "20px" // väčšia medzera medzi riadkami
}}
                ocomtoje = "O mne"
                  placeholder = {final.omne}
                // dolezite = "koko"
              ></Maleoknodvojka>


        


    </div> 
    }

    
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
    }


      </div>
    
{/*vmvdosmvdkosmvdoskvmdmvskv  */}
  {/* {ulozit === "upravit" && 
      <div className='tutoupravujeeemm'>

         
            <div className='buttonnauloyenie' onClick={() => {setUlozit("ulozit"),setFarba(5)}}>
            
              <span>Upravit</span>
            </div>
          </div>} */}
{/*vmvdosmvdkosmvdoskvmdmvskv  */}


   {ulozit === "ulozit" && 
      <div className='tutoupravujeeemm2'>

        
            <div className='buttonnauloyenie' onClick={() => {setAno("nie"),spat()}}>
              <span>Spat</span>
            </div>
        
            <div className='buttonnauloyenie' onClick={() => {zapnutie()}}>
              <span>Ulozit</span>
            </div>
          </div>}



    </div>

   
</>
  )
}

export default Lengriduprava

  