import './specialnygrid.css'

import useBreakpoint from '../../naviac/hook/breakpoint'
import React from 'react'
import Nahlad2 from '../../naviac/nahlad2/nahlad2'
import { useContext } from "react";
import { GlobalContext } from '../reactcontext/reactcontext'
import { useMediaQuery } from "react-responsive";
const Specialnygrid = ({style,textMobile,textTablet,textDesktop,data = [],malytext,stilikak,stylicecek,lava,prava,textMobileMALY,textTabletMALY,textDesktopMALY}) => {
    const { isMobile,isTablet,isDesktop } = useBreakpoint();
    const Mobil = useMediaQuery({ maxWidth: 629, });
      const Notebook = useMediaQuery({ minWidth: 630 });

       const { pocetOblubene, setPocetOblubene, filter, setFilter,owerlap,seTeraz,teraz ,popokno,setPopokno,
            lajknute,setLajknute,lajkujem,texdo,setTextdo,kontext,setKontext,oblubene,setOblubene,mala,setMala 
           } = useContext(GlobalContext);

      const isBetween630and750 = useMediaQuery({ minWidth: 631, maxWidth: 750 });

// const klikkam = (e) => {
//   e.stopPropagation();

//   setKontext(prev => !prev);
//   setTextdo(prev);

//   setOblubene(stary => {
//     const existuje = stary.some(e => e.id === prev.id);

//     if (existuje) {
//       setMala(false);
//       return stary.filter(e => e.id !== prev.id);
//     } else {
//       setMala(true);
//       return [...stary, prev];
//     }
//   });
// };



  return (
    <div className='specialnyGridicek' style={style}>
       <div className='textCastmain' style={stilikak}>
          <div>
            <span className='TEXTICEKNEAOVICEK' >  {isMobile ? textMobile : isTablet ? textTablet : textDesktop}</span>
            <p className='textpodhlavnuym'> {isMobile ? textMobileMALY : isTablet ? textTabletMALY : textDesktopMALY}</p>
            </div>
            
            
        </div>
        <div className='obshahhspecialnyGridicek'>
       {isBetween630and750 && data.slice(0, 8).map((prev, index) => (
    <Nahlad2
      key={index}
      zmaz2={{ display: "none" }}
      style={{
                
        padding: "0px",
        width: "100%",
        height: "100%",
      }}
      ikonaaaaa = {<i class='bx bx-heart'></i>}
      kontrola={false}
      fotky={prev.fotky}
      apartman={prev}
      nazov={prev.name}
      location={prev.location}
      krajina={prev.krajina}
      hodnotenie={prev.hodnotenie}
        klikkam={(e) => {
    e.stopPropagation();

    setKontext(prev => !prev);
    lajkujem()
    setTextdo(prev);

    setOblubene(stary => {
      const existuje = stary.some(item => item.id === prev.id);

      if (existuje) {
        setMala(false);
        return stary.filter(item => item.id !== prev.id);
      } else {
        setMala(true);
        return [...stary, prev];
      }
    });
  }}
    />
  ))}

  {Mobil && data.slice(0, 6).map((prev, index) => (
    <Nahlad2
      key={index}
      zmaz2={{ display: "none" }}
      style={{
        
        padding: "0px",
        width: "100%",
        height: "100%",
      }}
     klikkam={(e) => {
    e.stopPropagation();

    setKontext(prev => !prev);
    lajkujem()
    setTextdo(prev);

    setOblubene(stary => {
      const existuje = stary.some(item => item.id === prev.id);

      if (existuje) {
        setMala(false);
        return stary.filter(item => item.id !== prev.id);
      } else {
        setMala(true);
        return [...stary, prev];
      }
    });
  }}
      
       ikonaaaaa = {<i class='bx bx-heart'></i>}
      kontrola={false}
      fotky={prev.fotky}
      apartman={prev}
      nazov={prev.name}
      location={prev.location}
      krajina={prev.krajina}
      hodnotenie={prev.hodnotenie}
    />
  ))}
         

        </div>
      
    </div>
  )
}

export default Specialnygrid


