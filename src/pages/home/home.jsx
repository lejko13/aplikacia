import React, { useRef, useEffect, useState } from 'react'
import './home.css'
import Templatepage from '../tempaltepage/templatepage'


import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useContext } from "react";
import { GlobalContext } from '../../naviac/reactcontext/reactcontext'

import Hodnotenie from '../../naviac/hodnotenie/hodnotenie'
import Ukazovatelko from '../../naviac/ukazovatelko/ukazovatelko'
import Nahlad  from '../../naviac/nahlad/nahlad'
import Footer from '../footer/footer'
import Maincast from '../../naviac/maincast/maincast'
import Card from '../../naviac/portalpop/portalpop';
import Special from '../../naviac/special/special'

import {apartmany} from '../../naviac/fuzzy/fuzzy'
import Inyrozmer from '../../naviac/inyrozmer/inyrozmer'
import Specialnygrid from '../../naviac/specialnygrid/specialnygrid'
import Maincastoblubene from '../../naviac/maincastoblubene/maincastoblubene'
// import { useBreakpoint } from "../../naviac/hook/breakpoint";
import useBreakpoint from '../../naviac/hook/breakpoint'
import { useMediaQuery } from "react-responsive";
import Maincastmensie from '../../naviac/maincastmenise/maincastmensie'
const Home = ({domov,lavasipka,pravasipka, setDomov,otvorenie,setOtvorenie,scrollToTop}) => {
   
    const { pocetOblubene, setPocetOblubene, filter, setFilter,owerlap,seTeraz,teraz ,popokno,setPopokno,
       lajknute,setLajknute,lajkujem,texdo,setTextdo,kontext,setKontext,oblubene,setOblubene,mala,setMala,novicek,novicek2

      } = useContext(GlobalContext);
 
  const isMobile = useMediaQuery({ maxWidth: 750 });
  const isDesktop = useMediaQuery({ minWidth: 750 });



//   console.log(novicek);
//   console.log(novicek.current);
  
// useEffect(() => {
//   console.log("REF:", novicek.current)
// }, [])

  return (
    
    
    <>
    <motion.div className='Main'
     initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }} 
      
    >
      <Card
      nadpis="Pridané do obľúbených"
      ikona ={ <i className="bx bx-heart"></i>}
      ></Card>
     
{domov === "domov" &&   <div className='vrch' ref={isMobile ? novicek2 : novicek}>



{isDesktop &&     
<>
<Maincast 
      lava={el => lavasipka.current[0] = el} 
       prava={el => pravasipka.current[0] = el} 
      textMobile = "Bývanie na Slovensku"
      textTablet = "Lukratívne bývanie na Slovensku"
      textDesktop = "Lukratívne bývanie na Slovensku"

      textMobileMALY = "Moderné apartmány, vily a rezidencie na Slovenska."
      textTabletMALY = "Objavte moderné apartmány, vily a rezidencie v lokalitách Slovenska."
      textDesktopMALY = "Objavte moderné apartmány, vily a rezidencie v najžiadanejších lokalitách Slovenska."
        // text= 'Lukratívne bývanie na Slovensku'  
     
         data={apartmany.filter(a => 
    ["4BZH","5BZV","1ZDK","5ZR","3ZR","3NL","2NZ","2NZM","4ZM","5ZC","1TBB","3TPD","2PPD","5BLU","3BBY"].includes(a.id))} >

  </Maincast>
    
{oblubene.length >= 1 &&  <Special
lava={el => lavasipka.current[90] = el} 
  prava={el => pravasipka.current[90] = el} 
 textMobile = "Pridané do obľúbených"
      textTablet = "Pridané do obľúbených"
      textDesktop = "Pridané do obľúbených"
  
    textDesktopMALY = "Objavte moderné apartmány, vily a rezidencie v najžiadanejších lokalitách Slovenska."
      textMobileMALY = "Položka bola uložená do vášho zoznamu."
      textTabletMALY = "Položka bola uložená do vášho zoznamu."
       data = {apartmany.filter(a => a.location === "Bratislava")}
></Special>}

   
</>
}

{isMobile &&     
<>

{oblubene.length >= 1 &&  <Special
lava={el => lavasipka.current[90] = el} 
  prava={el => pravasipka.current[90] = el} 
 textMobile = "Pridané do obľúbených"
      textTablet = "Pridané do obľúbených"
      textDesktop = "Pridané do obľúbených"
  
    textDesktopMALY = "Objavte moderné apartmány, vily a rezidencie v najžiadanejších lokalitách Slovenska."
      textMobileMALY = "Položka bola uložená do vášho zoznamu."
      textTabletMALY = "Položka bola uložená do vášho zoznamu."
       data = {apartmany.filter(a => a.location === "Bratislava")}
></Special>}


<Maincast 
          lava={el => lavasipka.current[0] = el} 
  prava={el => pravasipka.current[0] = el} 
      textMobile = "Bývanie na Slovensku"
      textTablet = "Lukratívne bývanie na Slovensku"
      textDesktop = "Lukratívne bývanie na Slovensku"

      textMobileMALY = "Moderné apartmány, vily a rezidencie na Slovenska."
      textTabletMALY = "Objavte moderné apartmány, vily a rezidencie v lokalitách Slovenska."
      textDesktopMALY = "Objavte moderné apartmány, vily a rezidencie v najžiadanejších lokalitách Slovenska."
        // text= 'Lukratívne bývanie na Slovensku'  
     
         data={apartmany.filter(a => 
    ["4BZH","5BZV","1ZDK","5ZR","3ZR","3NL","2NZ","2NZM","4ZM","5ZC","1TBB","3TPD","2PPD","5BLU","3BBY"].includes(a.id))} ></Maincast>

    
</>
}
     


    {isDesktop &&  <Maincast  
             lava={el => lavasipka.current[1] = el} 
  prava={el => pravasipka.current[1] = el} 
   textMobile = "Bývanie v Bratislave"
      textTablet = "Bývanie v Bratislave"
      textDesktop = "Vyhľadávané bývanie v Bratislave"

      textMobileMALY = "Bratislava ponúka moderné nehnuteľnosti s výbornou dostupnosťou."
      textTabletMALY = "Bratislava ponúka moderné a komfortné nehnuteľnosti s výbornou dostupnosťou."

      textDesktopMALY = "Bratislava ponúka širokú škálu nehnuteľností, ktoré spájajú moderný dizajn, komfort a výbornú dostupnosť." 
        // text= 'Lukratívne bývanie na Slovensku'  
 
         data = {apartmany.filter(a => a.location === "Bratislava")} ></Maincast> }


     {isMobile &&
           <Specialnygrid
            style={{ display: isMobile ? 'block' : 'none' }}
           textMobile = "Bývanie v Bratislave"
        textTablet = "Bývanie v Bratislave"

        textMobileMALY = "Bratislava ponúka moderné nehnuteľnosti s výbornou dostupnosťou."
        textTabletMALY = "Bratislava ponúka moderné a komfortné nehnuteľnosti s výbornou dostupnosťou."
        data = {apartmany.filter(a => a.location === "Bratislava")}
          ></Specialnygrid>}     
       
       
  {isDesktop && <Maincast
          lava={el => lavasipka.current[2] = el} 
  prava={el => pravasipka.current[2] = el} 
  
   textMobile = "Lokality pod Tatrami"
      textTablet = "Lokality na bývanie pod Tatrami"
      textDesktop = 'Populárne lokality na bývanie pod Tatrami' 

      textMobileMALY = "Pod Tatrami nájdete miesta, ktoré spájajú pokojné bývanie v prírode s dobrou dostupnosťou do okolitých miest."
      textTabletMALY = "Pod Tatrami nájdete miesta, ktoré spájajú pokojné bývanie v prírode s dobrou dostupnosťou."
      textDesktopMALY =  "Pod Tatrami nájdete miesta, ktoré spájajú pokojné bývanie v prírode s dobrou dostupnosťou do okolitých miest." 

       
         data={apartmany.filter(a => a.location === "Poprad" || a.location === "Kežmarok")} ></Maincast>}

        {isMobile && 
        <Specialnygrid
        textMobile = "Lokality pod Tatrami"
        textTablet = "Lokality na bývanie pod Tatrami"

        textMobileMALY = "Pod Tatrami nájdete miesta, ktoré spájajú pokojné bývanie a prírodu."
        textTabletMALY = "Pod Tatrami nájdete miesta, ktoré spájajú pokojné bývanie v prírode s dobrou dostupnosťou do okolitých miest."
 data={apartmany.filter(a => a.location === "Poprad" || a.location === "Kežmarok")}

        ></Specialnygrid>}
       
      <Maincast 
          lava={el => lavasipka.current[4] = el} 
  prava={el => pravasipka.current[4] = el}  
  textMobile ='Bývanie na západne' 
      textTablet = 'Bývanie na západnom Slovensku' 
      textDesktop = 'Exkluzívne bývanie na západnom Slovensku' 

      textMobileMALY = "Západné Slovensko ponúka prémiové nehnuteľnosti."
      textTabletMALY =  "Západné Slovensko ponúka prémiové nehnuteľnosti s  kombináciu komfortu a moderného dizajnu."
      textDesktopMALY =  "Západné Slovensko ponúka prémiové nehnuteľnosti pre tých, ktorí hľadajú kombináciu komfortu, moderného dizajnu a strategickej polohy."

     
       malytext = "Západné Slovensko ponúka prémiové nehnuteľnosti pre tých, ktorí hľadajú kombináciu komfortu, moderného dizajnu a strategickej polohy." 
      data={apartmany.filter(a => a.location === "Trnava" || a.location === "Nitra")} ></Maincast>


  <Maincast 
            lava={el => lavasipka.current[3] = el} 
  prava={el => pravasipka.current[3] = el}  


   textMobile = "Lokality v strede"
      textTablet = "Lokality na strednom Slovensku"
      textDesktop = 'Obľúbené lokality na strednom Slovensku' 

      textMobileMALY = "Stredné Slovensko ponúka pokojné bývanie a dobré pracovné príležitostí."
      textTabletMALY = "Stredné Slovensko ponúka pokojné bývanie a dobré pracovné príležitostí."
      textDesktopMALY =  "Stredné Slovensko ponúka kombináciu pokojného bývania, dobrých pracovných príležitostí a krásnej prírody." 

        
        data={apartmany.filter(a => a.location === "Banská Bystrica" || a.location === "Žiar nad Hronom")}></Maincast>
       


      
      <Maincast 
       textMobile ='Bývanie na východne' 
      textTablet = 'Bývanie na východnom Slovensku' 
      textDesktop = 'Prémiové bývanie na východnom Slovensku' 

        textMobileMALY = "Západné Slovensko ponúka prémiové nehnuteľnosti."
      textTabletMALY =  "Západné Slovensko ponúka prémiové nehnuteľnosti s  kombináciu komfortu a moderného dizajnu."
      textDesktopMALY =  "Západné Slovensko ponúka prémiové nehnuteľnosti pre tých, ktorí hľadajú kombináciu komfortu, moderného dizajnu a strategickej polohy."

     

          lava={el => lavasipka.current[5] = el} 
  prava={el => pravasipka.current[5] = el}  
       malytext = "Košický kraj ponúka moderné a atraktívne rezidenčné projekty pre všetkých, ktorí hľadajú komfortné bývanie v spojení s prírodou a dobrou občianskou vybavenosťou." 
      data={apartmany.filter(a => a.location === "Košice" || a.location === "Michalovce")} ></Maincast>

        
      </div>}



  {domov === "mestke" && <div className='mestke'>
     <Maincast  
         lava={el => lavasipka.current[6] = el} 
  prava={el => pravasipka.current[6] = el}  
       textMobile = "Bývanie v Bratislave"
textTablet = "Mestské bývanie v Bratislave"
textDesktop = "Bývanie v Bratislave"

textMobileMALY = "Moderné rezidencie a apartmány v Bratislave."
textTabletMALY = "Objavte moderné bývanie v rôznych častiach Bratislavy."
textDesktopMALY = "Objavte moderné apartmány, rezidencie a vily v najvyhľadávanejších lokalitách Bratislavy."

data={apartmany.filter(a =>
  a.location === "Bratislava" &&  // najprv podľa mesta
  a.filter === "mesto"             // potom podľa kategórie
)} ></Maincast>
    {/* kokokokokokokokokokokokokokokokokokoooooooo */}


     <Maincast  
         lava={el => lavasipka.current[7] = el} 
  prava={el => pravasipka.current[7] = el}  
     textMobile = "Bývanie v Košiciach"
textTablet = "Mestské bývanie v Košiciach"
textDesktop = "Bývanie v Košiciach"

textMobileMALY = "Moderné rezidencie a apartmány v Košiciach."
textTabletMALY = "Objavte moderné bývanie v rôznych častiach Košíc."
textDesktopMALY = "Objavte moderné apartmány, rezidencie a vily v najvyhľadávanejších lokalitách Košíc."

         data={apartmany.filter(a =>
  a.location === "Košice" &&  // najprv podľa mesta
  a.filter === "mesto"             // potom podľa kategórie
)} ></Maincast>
        {/* kokokokokokokokokokokokokokokokokokoooooooo */}
     <Maincast  
         lava={el => lavasipka.current[8] = el} 
  prava={el => pravasipka.current[8] = el}  
       textMobile = "Bývanie v Prešove"
textTablet = "Mestské bývanie v Prešove"
textDesktop = "Bývanie v Prešove"

textMobileMALY = "Moderné rezidencie a apartmány v Prešove."
textTabletMALY = "Objavte moderné bývanie v rôznych častiach Prešova."
textDesktopMALY = "Objavte moderné apartmány, rezidencie a vily v najvyhľadávanejších lokalitách Prešova."

         data={apartmany.filter(a =>
  a.location === "Prešov" &&  // najprv podľa mesta
  a.filter === "mesto"             // potom podľa kategórie
)} ></Maincast>
        {/* kokokokokokokokokokokokokokokokokokoooooooo */}
     <Maincast  
         lava={el => lavasipka.current[9] = el} 
  prava={el => pravasipka.current[9] = el}  
        textMobile = "Bývanie v Trnave"
textTablet = "Mestské bývanie v Trnave"
textDesktop = "Bývanie v Trnave"

textMobileMALY = "Moderné rezidencie a apartmány v Trnave."
textTabletMALY = "Objavte moderné bývanie v rôznych častiach Trnavy."
textDesktopMALY = "Objavte moderné apartmány, rezidencie a vily v najvyhľadávanejších lokalitách Trnavy."
 
          data={apartmany.filter(a =>
  a.location === "Trnava" &&  // najprv podľa mesta
  a.filter === "mesto"             // potom podľa kategórie
)} ></Maincast>
        {/* kokokokokokokokokokokokokokokokokokoooooooo */}
     <Maincast  
         lava={el => lavasipka.current[10] = el} 
  prava={el => pravasipka.current[10] = el}  
       textMobile = "Bývanie v Nitre"
textTablet = "Mestské bývanie v Nitre"
textDesktop = "Bývanie v Nitre"

textMobileMALY = "Moderné rezidencie a apartmány v Nitre."
textTabletMALY = "Objavte moderné bývanie v rôznych častiach Nitry."
textDesktopMALY = "Objavte moderné apartmány, rezidencie a vily v najvyhľadávanejších lokalitách Nitry."

         data={apartmany.filter(a =>
  a.location === "Nitra" &&  // najprv podľa mesta
  a.filter === "mesto"             // potom podľa kategórie
)} ></Maincast>
        {/* kokokokokokokokokokokokokokokokokokoooooooo */}
             <Maincast  
                 lava={el => lavasipka.current[11] = el} 
  prava={el => pravasipka.current[11] = el}  
       textMobile = "Bývanie v Poprade"
textTablet = "Mestské bývanie v Poprade"
textDesktop = "Bývanie v Poprade"

textMobileMALY = "Moderné rezidencie a apartmány v Poprade."
textTabletMALY = "Objavte moderné bývanie v rôznych častiach Popradu."
textDesktopMALY = "Objavte moderné apartmány, rezidencie a vily v najvyhľadávanejších lokalitách Popradu."

         data={apartmany.filter(a =>
  a.location === "Poprad" &&  // najprv podľa mesta
  a.filter === "mesto"             // potom podľa kategórie
)} ></Maincast>

   
    
    </div>}
  {domov === "Vidiek" && <div className='Vidiek'>
     <Maincast 
         lava={el => lavasipka.current[12] = el} 
  prava={el => pravasipka.current[12] = el}  

   textMobile = "Vidiecke bývanie na západe"
      textTablet = "Vidiecke bývanie na západnom Slovensku"
      textDesktop = "Vidiecke bývanie na západnom Slovensku"

      textMobileMALY = "Vidiecke prostredie s rýchlym dosahom do mestá."
      textTabletMALY = "Vidiecke prostredie s rýchlym dosahom do mestá na západe."
      textDesktopMALY = "Vidiecke prostredie s rýchlym dosahom do mestá na západe."
       

      
     
      data={apartmany.filter(a => a.kraj === "BratislavskýVIDIEK" )} ></Maincast>
      <div className='vymezodvac'></div>
 

     <Maincast 
     textMobile = "Vidiecke bývanie na strednom Slovensku"
textTablet = "Vidiecke bývanie na strednom Slovensku"
textDesktop = "Vidiecke bývanie na strednom Slovensku"

textMobileMALY = "Vidiecke prostredie s rýchlym dosahom do miest."
textTabletMALY = "Vidiecke prostredie s rýchlym dosahom do miest na strednom Slovensku."
textDesktopMALY = "Vidiecke prostredie s rýchlym dosahom do miest na strednom Slovensku."

         lava={el => lavasipka.current[13] = el} 
  prava={el => pravasipka.current[13] = el}  
      text='Vidiecke bývanie na strednom Slovensku' 
       malytext = "Pokojná krajina obklopená horami a čistým vzduchom." 
        data={apartmany.filter(a => a.kraj === "BanskobystrickýVIDIEK")}></Maincast>
         <div className='vymezodvac'></div>
     

     <Maincast 
     textMobile = "Vidiecke bývanie na východnom Slovensku"
textTablet = "Vidiecke bývanie vo východnej časti Slovenska"
textDesktop = "Vidiecke bývanie na východnom Slovensku"

textMobileMALY = "Pokojné vidiecke prostredie s rýchlym dosahom do miest."
textTabletMALY = "Pokojné vidiecke prostredie s ľahkým prístupom do miest vo východnej časti Slovenska."
textDesktopMALY = "Vidiecke prostredie s rýchlym prístupom do miest na východnom Slovensku."

         lava={el => lavasipka.current[14] = el} 
  prava={el => pravasipka.current[14] = el}  
      text='Vidiecke bývanie na východnom Slovensku' 
       malytext = "Tichý vidiek s tradičnou atmosférou a širokými výhľadmi." 
      data={apartmany.filter(a => a.kraj === "PrešovskýVIDIEKT")} ></Maincast>
         <div className='vymezodvac'></div>
     

  


    </div>}
  {domov === "Pre dvoch" && <div className='dvoch'>
    <Inyrozmer
   halvnytext = {"Bývanie pre dvoch"}
druhy = {"Výber útulných pobytov pre páry po celom Slovensku."}
textmaly = {"Ideálne miesto pre dvojicu – pohodlné, príjemné a stvorené pre spoločné chvíle."}

   
     data={apartmany.filter(a => a.ideal === "predvoch")}

  ></Inyrozmer></div>}
  {/* {domov === "S výhľadom" && <div className='výhľadom'></div>} */}
  {domov === "Prémiové" && <div className='Prémiové'>
    <Maincast      lava={el => lavasipka.current[15] = el} 
  prava={el => pravasipka.current[15] = el}  

     textMobile = "Prémiové bývanie v Bratislave"
textTablet = "Luxusné bývanie v Bratislave"
textDesktop = "Luxusné bývanie v Bratislave"

textMobileMALY = "Exkluzívne apartmány a rezidencie v Bratislave."
textTabletMALY = "Objavte exkluzívne apartmány a prémiové rezidencie v Bratislave."
textDesktopMALY = "Objavte exkluzívne apartmány, luxusné vily a prémiové rezidencie v najvyhľadávanejších lokalitách Bratislavy."

      // text='Prémiové bývanie na západe Slovenska' 
      //  malytext = "Vidiecke prostredie s rýchlym dosahom na mestá." 
      data={apartmany.filter(a => a.kraj === "Bratislavský"  &&   a.premia === "ano" )} ></Maincast>
      <div className='vymezodvac'></div>
 

     <Maincast 
         lava={el => lavasipka.current[16] = el} 
  prava={el => pravasipka.current[16] = el}  
     textMobile = "Prémiové bývanie v Banskej Bystrici"
textTablet = "Luxusné bývanie v Banskej Bystrici"
textDesktop = "Luxusné bývanie v Banskej Bystrici"

textMobileMALY = "Exkluzívne apartmány a rezidencie v Banskej Bystrici."
textTabletMALY = "Objavte exkluzívne apartmány a prémiové rezidencie v Banskej Bystrici."
textDesktopMALY = "Objavte exkluzívne apartmány, luxusné vily a prémiové rezidencie v najžiadanejších lokalitách Banskej Bystrice."

        data={apartmany.filter(a => a.kraj === "Banskobystrický" &&   a.premia === "ano")}></Maincast>
         <div className='vymezodvac'></div>
     

     <Maincast 
         lava={el => lavasipka.current[17] = el} 
  prava={el => pravasipka.current[17] = el}  
      textMobile = "Prémiové bývanie v Košiciach"
textTablet = "Luxusné bývanie v Košiciach"
textDesktop = "Luxusné bývanie v Košiciach"

textMobileMALY = "Exkluzívne apartmány a rezidencie v Košiciach."
textTabletMALY = "Objavte exkluzívne apartmány a prémiové rezidencie v Košiciach."
textDesktopMALY = "Objavte exkluzívne apartmány, luxusné vily a prémiové rezidencie v najvyhľadávanejších lokalitách Košíc."

      data={apartmany.filter(a => a.kraj === "Košický" &&   a.premia === "ano")} ></Maincast>
         <div className='vymezodvac'></div>
    
    </div>}
  {domov === "S bazénom" && <div className='bazénom'>
     <Inyrozmer
    halvnytext = {"Ubytovanie s bazénom"}
    druhy = {"Môžete vychutnať relax pri bazéne."}
    textmaly = {"Moderné a komfortné ubytovanie, kde si môžete počas pobytu vychutnať relax pri vlastnom bazéne."}
     data={apartmany.filter(a => a.bazen === "ano")}

  ></Inyrozmer>
    </div>}
  {domov === "S výhľadom" && <div className='bazénom'>
     <Inyrozmer
    halvnytext = {"S výhľadom"}
    druhy = {"S výhľadom"}
    textmaly = {"S výhľadom"}
     data={apartmany.filter(a => a.bazen === "ano")}

  ></Inyrozmer>
    </div>}
  {/* {domov === "S parkovaním" && <div className='parkovaním'></div>} */}
     
      <div className='dalsie'>
         {/* <Maincast></Maincast>
         <Maincast></Maincast>
         <Maincast></Maincast> */}
      </div>



    




    
    </motion.div>
    </>
  )
}

export default Home
