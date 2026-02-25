import './/vrchmobilu.css'

import React, { Children } from 'react'
import Star from '../star/star'

import Dalsi from '../dalsi/dalsi'
const Vrchmobilu = ({nazov,info,info2,hostia,spalne,lozka,kupelna,children,fotka,meno,priezvisko,popisek,onClick,indo44,info20}) => {
  return (
    <div className='raazanavzdy'>
        
            <span className='nazovtext'>{nazov}</span>
            <div className="otototojeona">
              <div style={{display:"flex",gap:"5px"}}>
                <span>Cely objekt:</span>
                <span>{info}</span> /
                <span>{info2}</span>
              </div>
            


                <div style={{color:"var(--farba-sivaText)",fontSize:"var(  --font-size-base69)",display:"flex" ,gap:"5px"}}>
                    <span>{hostia}</span>
                    <span>{spalne}</span>
                    <span>{lozka}</span>
                    <span>{kupelna}</span>
                </div>
            </div>
            <div style={{width:"100%",backgroundColor:"var( --farba-main2)",height:"1px"}}></div>
     
        
        <div className='kokoitnana'>
          <Dalsi
          fotka = {fotka}
          meno = {meno}
          priezvisko = {priezvisko}
          popisek = {popisek}
          onClick = {onClick}
          ></Dalsi>
         
          <div className='koakuraio'>
            <div className='obalicekke'>
 
              <div className='tabulececeko25'        onClick = {onClick}>
              <span style={{fontSize:"var(  --font-size-base4)",color:"var(--farba-cierna)"}}>{indo44}</span>
                    
                      <span style={{ fontSize: "var( --font-size-base2)", color: "var(--farba-sivaText)" }}>Hodnotenie</span>
              </div>
                <div>
              <div style={{height:"100%",backgroundColor:"var( --farba-siva)",width:"1px"}}></div>
              </div>

              <div className='tabulececeko25'        onClick = {onClick}>
              <span style={{fontSize:"var(  --font-size-base4)",color:"var(--farba-cierna)"}}>{info20}</span>
                  <Star style={{ fontSize: "13px", color: "gold", whiteSpace: "nowrap" }} />
                </div>

              </div>
            </div>  
          </div>
      
        <div style={{width:"100%",backgroundColor:"var( --farba-main2)",height:"1px"}}></div>
     
    </div>
  )
}

export default Vrchmobilu