import React, { useState } from 'react';
import './druhezobrazenie.css'
import Linka from '../linka/linka'
import Tempaltenaodpoced from '../tempaltenaodpoced/tempaltenaodpoced'
import Ukazovatelko from '../ukazovatelko/ukazovatelko'
import { color } from 'framer-motion';

import Biela3322 from '../../naviac/biela3322/biela3322'

const Druhezobrazenie = ({obrazok,textpvacast,pat,sets,stiri,halvny,dalsi,cislo,farba,jeden,dva,trie}) => {

    // 950


    const openInstagram = () => {
  window.open("https://www.instagram.com/leofudaly/", "_blank");
}



    const[hover,setHover] = useState(null)
 
  return (

    <div className='notakkasitootljent'>


       
        <div className='tootlenvrchniciac'>

          <Biela3322
          style = {{backgroundColor:"var(--farba-main)"}}
          farbaobrazok3232 = {{display:"none"}}

           obrazok = {obrazok}
                  textpvacast = {textpvacast}


          ></Biela3322>
              <Linka></Linka>
            <div className='horelenifrmaicenicine3232322'>
              <div className='sckrolovatelnacstikca'>

<Tempaltenaodpoced
odpoved = {"Odpoveď:"}
odpovedww = {jeden}
></Tempaltenaodpoced>
    

<Tempaltenaodpoced
odpoved = {"Prečo:"}
odpovedww = {dva}
></Tempaltenaodpoced>


<Tempaltenaodpoced
odpoved = {"Čo urobiť:"}
odpovedww = {trie}
></Tempaltenaodpoced>

 
<Tempaltenaodpoced
odpoved = {"Čo urobiť:"}
odpovedww = {stiri}
></Tempaltenaodpoced>

<Tempaltenaodpoced
odpoved = {"Čo urobiť:"}
odpovedww = {pat}
></Tempaltenaodpoced>


</div>




            </div>
            <Linka></Linka>
            <div className='doleikonylennicvillo'>
               <span style={{
                fontSize:"var(--font-size-base)",
                color:"var(--farba-main)",
                fontWeight:700
              }}>LOGO</span> 


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

export default Druhezobrazenie
