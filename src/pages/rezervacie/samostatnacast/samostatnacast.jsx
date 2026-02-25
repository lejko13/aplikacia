import './samostatnacast.css'

import React, { useState, useRef, useContext, useEffect } from 'react';

import { MyContext } from '../../../naviac/providertelefon/providertelefon'
// import { GlobalContext } from '../reactcontext/reactcontext'

import Templatelogika from '../../../naviac/templatelogika/templatelogika'
import Uravitlogika from '../../../naviac/upravitlogika/upravitlogika';
import { GlobalContext } from '../../../naviac/reactcontext/reactcontext'
const Samostatnacast = ({id,volam,setLenprechod}) => {

        const { suborOpen,setSuborOpen,obsahOpen,setObsahOpen,subor,setSubor,nazovSuboru,setNazovSuboru,unikattne,setUnikatne,meno,dotadok,setDotadok,otazka,setOtazka} = useContext(MyContext);


        const { presun,setPresun,cena,setCena,kvalita,setKvalita } = useContext(GlobalContext); 


        const zatvorenie = () => {setSuborOpen(false),setObsahOpen("")}
const referencia = useRef(null);

const meno22 = presun.find(item => item.apartman.id === id);
// console.log(meno22.apartman.name);

useEffect(() => {
  const handleClickOutside = (e) => {
    if (
      referencia.current &&
      !referencia.current.contains(e.target)
    ) {
      zatvorenie()
      setLenprechod("")
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);



  return (
    <div className='Samostatnacast' ref={referencia}>

         <Templatelogika
            stylecekokok = {{maxWidth:"290px",padding:"10px",gap:"15px"}}
          letkokonitna = {{ height: "20px" }}
            klikatelko = {{display:"none"}}
            klikatelko2 = {{display:"none"}}
            text = "Odstrániť ponuku"
      
            spodocekosti = {{display:"none"}}
            // alternativna = {{display:"block"}}
            
            >
              

            <Uravitlogika
            input = {{display:"none"}}
            fletextsmall = {{display:"none"}}
            dajhe = {{display:"none"}}
                  focus = {focus}
                  children2  = 
                  {<div style={{width:"100%",height:"45px",display:"flex",justifyContent:"space-between"}}>

                    <div style={{width:"80px",backgroundColor:"var(--farba-main2)",color:"var(--farba-sivaText)",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"12px",fontSize:"var(  --font-size-base100)"}}
                         onClick={() => zatvorenie()}
                    >Zrušit</div>

                    <div
                    style={{width:"110px",backgroundColor:"var(--farba-main)",color:"var(--farba-biela)",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"12px",fontSize:"var(  --font-size-base100)"}}

                     onClick = {volam}
             
                    >Odstraniť</div>

                  </div>}
                  >
                    <div style={{height:"100%",textAlign:"center",color:"var( --farba-sivaText)",fontSize:"var(  --font-size-base69)"}}>
                        {`${meno22?.apartman.name} bude odstránený `}</div>
                  </Uravitlogika>

            </Templatelogika>
      
    </div>
  )
}

export default Samostatnacast
