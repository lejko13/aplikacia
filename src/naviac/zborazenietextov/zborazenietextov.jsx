import React, { useState } from 'react';
import './zborazenietextov.css'
import Linka from '../linka/linka'
import Tempaltenaodpoced from '../../naviac/tempaltenaodpoced/tempaltenaodpoced'
import Ukazovatelko from '../../naviac/ukazovatelko/ukazovatelko'
import { color } from 'framer-motion';

const Zborazenietextov = ({pat,sets,stiri,halvny,dalsi,cislo,farba,jeden,dva,trie}) => {

    // 950

    const[hover,setHover] = useState(null)
 
  return (

    <div className='notakkasitootljent'>

<div className='tootjelenvrhlcekokokllnoic'>
    <div className='cislolennaukzasku'>{cislo}</div>
 <div className='textCastmain90llpl' >
          <div>
            <span className='TEXTICEKNEAOVICEK00pppmkmk' > {halvny}</span>
            <p className='textpodhlavnuym3223323'> {dalsi}</p>
            </div>
           
  </div>


</div>
       
        <div className='tootlenvrchniciac'>
            <div className='horelenifrmaicenicine'>
<Tempaltenaodpoced
odpoved = {"Odpoveď:"}
odpovedww = {jeden}
></Tempaltenaodpoced>
    {/* <Linka></Linka> */}

<Tempaltenaodpoced
odpoved = {"Prečo:"}
odpovedww = {dva}
></Tempaltenaodpoced>

    {/* <Linka></Linka> */}
<Tempaltenaodpoced
odpoved = {"Čo urobiť:"}
odpovedww = {trie}
></Tempaltenaodpoced>

    {/* <Linka></Linka> */}
<Tempaltenaodpoced
odpoved = {"Čo urobiť:"}
odpovedww = {stiri}
></Tempaltenaodpoced>

<Tempaltenaodpoced
odpoved = {"Čo urobiť:"}
odpovedww = {pat}
></Tempaltenaodpoced>

<Tempaltenaodpoced
odpoved = {"Čo urobiť:"}
odpovedww = {sets}
></Tempaltenaodpoced>






            </div>
            <Linka></Linka>
            <div className='doleikonylennicvillo'>
              <div> <span style={{
                fontSize:"var(--font-size-base)",
                color:"var(--farba-main)",
                fontWeight:700
              }}>LOGO</span> </div>

                 <div style={{display:"flex",gap:"5px"}}>
        <Ukazovatelko
        onClick = {() => openInstagram()}
            onMouseEnter={() => setHover(1)}
            onMouseLeave={() => setHover(null)}
            style={{
              backgroundColor: hover === 1 ? "var(--farba-biela)" : "var(--farba-main2)",
              fontSize:"16px" ,
              color:"var(--farba-cierna)"
            }}
          >
            <i style={farba} className='bx bxl-instagram'></i>
          </Ukazovatelko>

          <Ukazovatelko
                 onClick = {() => openInstagram()}
            onMouseEnter={() => setHover(2)}
            onMouseLeave={() => setHover(null)}
            style={{
              backgroundColor: hover === 2 ? "var(--farba-biela)" : "var(--farba-main2)",
                fontSize:"16px" ,
              color:"var(--farba-cierna)"
            }}
          >
            <i style={farba} className='bx bxl-twitter'></i>
          </Ukazovatelko>

          <Ukazovatelko
                 onClick = {() => openInstagram()}
            onMouseEnter={() => setHover(3)}
            onMouseLeave={() => setHover(null)}
            style={{
              backgroundColor: hover === 3 ? "var(--farba-biela)" : "var(--farba-main2)",
                fontSize:"16px" ,
              color:"var(--farba-cierna)"
            }}
          >
            <i style={farba} className='bx bxl-facebook'></i>
          </Ukazovatelko>

          <Ukazovatelko
                 onClick = {() => openInstagram()}
            onMouseEnter={() => setHover(4)}
            onMouseLeave={() => setHover(null)}
            style={{
              backgroundColor: hover === 4 ? "var(--farba-biela)" : "var(--farba-main2)",
            fontSize:"16px" ,
              color:"var(--farba-cierna)"
            }}
          >
            <i style={farba} className='bx bxl-pinterest'></i>
          </Ukazovatelko>
          </div>
            </div>
            {/* <div className='totodrziakhejzejk'>
                 
                    
                      <span className='notaktexicekhalvny'> {halvny}</span>

            </div>
      
        <span className='NOTOKOKMOOMOM'>        {dalsi}</span> */}


        </div>
        
       

      
    </div>
  )
}

export default Zborazenietextov
