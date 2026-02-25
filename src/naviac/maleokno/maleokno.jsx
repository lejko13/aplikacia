import './maleokno.css'

import React, { useState } from 'react'
import Linka from '../linka/linka';
import { MyContext } from '../../naviac/providertelefon/providertelefon'
import { useContext } from "react";
import { GlobalContext } from '../reactcontext/reactcontext'
import Ikonypage from '../ikonypage/ikonypage';
import { use } from 'react';
import { color } from 'framer-motion';

const Maleokno = ({onClick2,onClick,text1,text2}) => {
  const[hover,setHover] = useState(null)
     const { suborOpen,setSuborOpen,obsahOpen,setObsahOpen,subor,setSubor,nazovSuboru,setNazovSuboru,meno,setMeno} = useContext(MyContext);
  return (
    <div className='Maleokno'>
      
      <div className='tenvrhchobycajny'>
                <p style={{color:"var(--farba-cierna)",fontSize:"var(  --font-size-base4)"}}>{text2}</p>
                  
      <p style={{color:"var(--farba-sivaText)",fontSize:"var( --font-size-base69)",width:"190px"}}>{text1}</p>
    </div>

     

          <Linka></Linka>

      <div className='koktinaknonon'>
        <Ikonypage
        onClick={onClick}
        onMouseEnter={() => setHover(2)}
        onMouseLeave={() => setHover(null)}
       style={{
  backgroundColor: 'transparent'
}}
        textStyle = {{
            color:hover === 2 ? "var(--farba-sivaText)" : "var(--farba-cierna)"
          }}
        text = "Zrušit"
        ></Ikonypage>

        <Ikonypage 
          onClick={onClick2}
        onMouseEnter={() => setHover(1)}
        onMouseLeave={() => setHover(null)}
        style={{
            backgroundColor:hover === 1 ? "var(--farba-main2)" : "var(--farba-main)"
          }}

        textStyle = {{
            color:hover === 1 ? "var(--farba-cierna)" : "var(--farba-biela)"
          }}
         text = "Odstraniť"
        ></Ikonypage>

      </div>

      <div></div>
    </div>
  )
}

export default Maleokno
