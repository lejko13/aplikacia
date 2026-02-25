import './tabulecak.css'

import { useMediaQuery } from "react-responsive";
import React from 'react'
import Dalsi from '../../naviac/dalsi/dalsi'
import Star from '../../naviac/star/star'
const Tabulecak = ({
  fotka,meno,priezvisko,popisek,onClick2,onClick3,
  hodnoteie,hosnoteniepocet,lozka,kupelna,nazov,cislo,ohod,onClick,krajina}) => {



  return (
    
    <div className='Tabulecak'>
       
       <div className='lavastrana'>
        <Dalsi
        kruhuu = {{borderRadius:"10px"}}
        fotka = {fotka}
        meno = {meno}
        priezvisko = {priezvisko}
        popisek = {popisek}
        onClick = {onClick2}

        ></Dalsi>
        {/* <div style={{color:"var(--farba-cierna)",fontSize:"var( --font-size-base4)"}}>
          <span>{isDesktop ? "Celý objekt:" : ""}</span>
      
        <span>{nazov} {krajina}</span>
        </div>
            <div style={{color:"var(--farba-sivaText)",fontSize:"var( --font-size-base2)",display:"flex" ,gap:"5px"}}>
          <span>{hosnoteniepocet}</span>
            <span>{hodnoteie}</span>
          <span>{lozka}</span>
            <span>{kupelna}</span>
            </div> */}
       </div>
       <div className='pravastrana'>
        <div className='tabulececeko3232 '
        onClick={onClick3}
        >
            <span style={{fontSize:"var(    --font-size-base)",color:"var(--farba-cierna)"}}>{ohod}</span>
                  
                    <span style={{ fontSize: "var(--font-size-base69)", color: "var(--farba-sivaText)" }}>Hodnotenie</span>
        </div>
        
        <div style={{height:"100%",width:"1px",backgroundColor:"var(--farba-siva)",}}></div>
        
        <div className='tabulececeko3232'
        onClick={onClick}
       
        >
            <span style={{fontSize:"var(   --font-size-base)",color:"var(--farba-cierna)"}}>{cislo}</span>
                  <Star style={{ fontSize: "12px", color: "GOLD" }} />
        </div>

       </div>
       
      
      
    </div>
  )
}

export default Tabulecak
