 
 import './ukazka.css'

 import React from 'react'
 import Dalsi from '../../../naviac/dalsi/dalsi'
 import Star from '../../../naviac/star/star'
 
 const Ukazka = ({hodnotenieKliknutie,recenzieekliknutie,stilozkkkkzk,kontrolaBloku,kontrolaPraitelov,fotka,meno,priezvisko,klllppmi,popisek,onClick2,indo44,info20}) => {
   return (
     <div className='kokoitnana2' style={klllppmi}>
     
          <Dalsi
          fotka = {fotka}
          meno = {meno}
          priezvisko = {priezvisko}
          popisek = {popisek}
          kontrolaPraitelov = {kontrolaPraitelov}
          onClick = {onClick2}
          kontrolaBloku = {kontrolaBloku}
          style={{padding:"0px 0px 0px 10px"}}
          ></Dalsi>
 
         
          <div className='koakuraio2' style={stilozkkkkzk}>
            <div className='obalicekke2'>

              <div className='tabulececeko252' onClick={hodnotenieKliknutie}>
              <span style={{fontSize:"var(  --font-size-base4)",color:"var(--farba-cierna)"}}>{indo44}</span>
                    
                      <span style={{ fontSize: "var( --font-size-base2)", color: "var(--farba-sivaText)" }}>Hodnotenie</span>
              </div>

              
                <div>
              <div style={{height:"100%",backgroundColor:"var( --farba-siva)",width:"1px"}}></div>
              </div>

              <div className='tabulececeko252' onClick={recenzieekliknutie}>
              <span style={{fontSize:"var(  --font-size-base4)",color:"var(--farba-cierna)"}}>{info20}</span>
                  <Star style={{ fontSize: "13px", color: "gold", whiteSpace: "nowrap" }} />
                </div>

              </div>
            </div>  
          </div>
   )
 }
 
 export default Ukazka
 
 
