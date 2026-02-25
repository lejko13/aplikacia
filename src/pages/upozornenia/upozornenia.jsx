import './upozornenia.css'

import { useContext, useState,useEffect } from "react";
import Footer from '../footer/footer'
import { GlobalContext } from '../../naviac/reactcontext/reactcontext'

import { MyContext } from '../../naviac/providertelefon/providertelefon'
import Logo from '../../naviac/logo/logo'
import Ukazovatelko from '../../naviac/ukazovatelko/ukazovatelko'
import Gridmapovanie from '../../naviac/gridmapovanie/gridmapovanie'
import Ikonypage from '../../naviac/ikonypage/ikonypage'
import React from 'react' 
import Mapovanie from '../../naviac/mapovanie/mapovanie'
import Nahlad  from '../../naviac/nahlad/nahlad'
import Templatepage from '../tempaltepage/templatepage'
import Mapovanie2 from '../../naviac/mapovanie2/mapovanie2'
import { useMediaQuery } from "react-responsive";
import ObluneneSwiper from '../../naviac/oblubeneswiper/ObluneneSwiper'
const Upozornenia = ({otvorenie,setOtvorenie,lavasipka,pravasipka}) => {
   const { pocetOblubene, setPocetOblubene, filter, setFilter,owerlap,seTeraz,teraz ,popokno,setPopokno,
      lajknute,setLajknute,lajkujem,texdo,setTextdo,kontext,setKontext,oblubene,setOblubene
     } = useContext(GlobalContext);

       const { suborOpen,setSuborOpen,obsahOpen,setObsahOpen,subor,setSubor} = useContext(MyContext);
       const[hover,setHover] = useState(null)

     
        
  const isMobile = useMediaQuery({ maxWidth: 750 });
  const isDesktop = useMediaQuery({ minWidth: 750 });
       
// toto vypíše tvoje pole zbierka

      //  if (subor.zbierka?.length > 0 ) {
      //   console.log("je to viac");
      //  }
      //  else{
      //   console.log("malo");
        
      //  }

  return (
    
    <Templatepage 

hedericek = {{
  display: isDesktop ? "none" : "none"
}}
   >




        <div className='obshauujuju'>
          {/* <div className='lentaknoyvskuska'>kokok</div> */}
{/* {oblubene.length === 0 && subor.length === 0 && (
  <div className="lentakwrapper"></div>
)}
           */}
            <div className="lentakwrapper">
              {isDesktop &&    
              <div className='lentakzenovnoatopude'
 onClick={() => {
                setSuborOpen(true);
                setObsahOpen("Uravitlogika") 
                }}
              ><i class='bx bx-plus'></i></div> }

           
              {/* <div className='WRAPPERNABUTTON'>
       <div className="kruh-button"
        onClick={() => {
                setSuborOpen(true);
                setObsahOpen("Uravitlogika") 
                }}
       ><i class='bx bx-plus' ></i></div>
        </div> */}


      {(oblubene.length <= 0 && subor.length <= 0 ) && 

      <div className='VYTVOERTETEXT'>
        <div style={{ textAlign: "center" }}>
           Pridajte položky do obľúbených alebo vytvorte  <span className='pisemnkolentakm'  
        onClick={() => {
                setSuborOpen(true);
                setObsahOpen("Uravitlogika") 
                }}> nový </span>  zoznam

        </div>
        

       {isMobile && 
        <div className='WRAPPERNABUTTON'   onClick={() => {
                setSuborOpen(true);
                setObsahOpen("Uravitlogika") 
                }}>
    Vytvorte nový
        </div>}
       
       
{/*        
{isDesktop && <button className='vytvoreneinovhych'
 onClick={() => {
                setSuborOpen(true);
                setObsahOpen("Uravitlogika") 
                }}


>Vytvoriť nový</button> } */}
        
        </div>

       


        
        }
      

          {oblubene.length > 0 && <ObluneneSwiper 
          
          lava={el => lavasipka.current[90] = el} 
          prava={el => pravasipka.current[90] = el} 
      textMobile = "Obľúbené apartmány"
      textTablet = "Vaše obľúbené apartmány"
      textDesktop = "Vaše obľúbené apartmány"

      textMobileMALY = "Vyberte si svoje obľúbené ubytovanie pre pohodlný pobyt."
      textTabletMALY = "Vyberte si svoje obľúbené ubytovanie a zažite pohodlný pobyt."
      textDesktopMALY = "Vyberte si svoje obľúbené ubytovanie a zažite pohodlný pobyt v moderných apartmánoch."
        // text= 'Lukratívne bývanie na Slovensku'  
     oblubene2={oblubene}
          ></ObluneneSwiper>}
          
           
          
          {/* {subor.length > 0 && <Mapovanie
            textMobile = "Vaše zoznamy"
      textTablet = "Prehľad vašich uložených ubytovaní"
      textDesktop = "Prehľad vašich uložených ubytovaní"

      textMobileMALY = "Prehľad vašich uložených ubytovaní, ktoré ste si vybrali."
      textTabletMALY = "Prehľad vašich uložených ubytovaní, ktoré ste si vybrali pre budúce cestovanie."
      textDesktopMALY = "Prehľad vašich uložených ubytovaní, ktoré ste si vybrali pre budúce cestovanie a pohodlný pobyt."
      subor={subor}
           ></Mapovanie>} */}
          
          {subor.length > 0 && <Mapovanie2
            textMobile = "Vaše zoznamy"
      textTablet = "Prehľad vašich uložených ubytovaní"
      textDesktop = "Prehľad vašich uložených ubytovaní"

      textMobileMALY = "Prehľad vašich uložených ubytovaní, ktoré ste si vybrali."
      textTabletMALY = "Prehľad vašich uložených ubytovaní, ktoré ste si vybrali pre budúce cestovanie."
      textDesktopMALY = "Prehľad vašich uložených ubytovaní, ktoré ste si vybrali pre budúce cestovanie a pohodlný pobyt."
      subor2={subor}
           ></Mapovanie2>}
          
  
</div>
        </div>

      
     
    </Templatepage>
  )
}

export default Upozornenia
