
import './tototodrzi.css'

import React, { Children,useState, useEffect, useRef,useContext } from 'react';
import { MyContext } from '../../../../naviac/providertelefon/providertelefon'
import { GlobalContext } from '../../../../naviac/reactcontext/reactcontext'

import { useMediaQuery } from "react-responsive";
const Tototodrzi = ({children,hlvanytext,textdole,stilik}) => {

   const isMobile = useMediaQuery({ maxWidth: 1200 });
  const isDesktop = useMediaQuery({ minWidth: 810 });
  // const dalsi = useMediaQuery({ maxWidth: 600 });

  

    const { suborOpen,setSuborOpen,obsahOpen,setObsahOpen,subor,setSubor,nazovSuboru,setNazovSuboru,unikattne,setUnikatne,meno,dotadok,setDotadok,otazka,setOtazka} = useContext(MyContext);
     const FORMULAR = () => {
  setObsahOpen("formular")
  setSuborOpen(true)
 }
  return (
    <div className='oinvrianvi'>
        <div className='vrchtujetextcavic'>
          <div style={{display:"flex",flexDirection:"column",gap:"5px"}}>
            <p style={{color:"var(--farba-cierna)",fontSize:"var(  --font-size-base4)",whiteSpace:"nowrap"}}>{hlvanytext}</p>
            {isDesktop  &&      <p style={{color:"var(--farba-sivaText)",fontSize:"var(  --font-size-small)"}}>{textdole}</p>}
            {/* {dalsi  &&      <p style={{color:"var(--farba-sivaText)",fontSize:"var(  --font-size-small)"}}>{textdole}</p>}
        */}
          </div>

        <div className='tujenovametoda' style={stilik}>
          <span style={{fontSize:"var(--font-size-small)"}}
          onClick={() => FORMULAR()}
          > + Pridať platbu</span>
        </div>
        </div>
      {children}
    </div>
  )
}

export default Tototodrzi
