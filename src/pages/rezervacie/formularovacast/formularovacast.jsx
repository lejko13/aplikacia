import React, { useState, useEffect, useRef,useContext } from 'react';
import './formularovacast.css'
import Platba from './platba/platba'
import {Providerform} from './providerfrom/providerfrom'
import { GlobalContext } from '../../../naviac/reactcontext/reactcontext'

import { useMediaQuery } from "react-responsive";

import { MyContext } from '../../../naviac/providertelefon/providertelefon'

import Castzhrnutie from '../formularovacast/castzhrnutie/castzhrnutie'
// import 
const Formularovacast = ({onClick,onClick2}) => {
  const { presun,setPresun,cena,setCena,kvalita,setKvalita,prize,setPrize,zobrazovanie,setZobrazovanie,otvrenie,setOtvorenie,automatika } = useContext(GlobalContext); 



      const { suborOpen,setSuborOpen,obsahOpen,setObsahOpen,subor,setSubor,nazovSuboru,setNazovSuboru,unikattne,setUnikatne,meno,dotadok,setDotadok,otazka,setOtazka,formData, setFormData,otvorenieposldenho,setOtvorenieposldenho} = useContext(MyContext);


   const isMobile = useMediaQuery({ maxWidth: 1200 });
  const isDesktop = useMediaQuery({ minWidth: 1201 });




 const FORMULAR = () => {
  setObsahOpen("formular")
  setSuborOpen(true)
 }



  return (
    <div className='formulariiikoko'>

        <div className='castekdejefomrularr'>

{/* 
          {otvorenieposldenho &&             
          <div className='totojeuzfinalfnezobrazenie'>

            <Castzhrnutie
            onClick2 = {() => FORMULAR()}
            ></Castzhrnutie>
            </div>} */}

          <Providerform>
            <Platba></Platba>
          </Providerform>


        </div>


        <div className='ovaldacaipanel'>
            <div className='buttonjetaotakze'  onClick={onClick}>Späť</div>

            
   <div style={{position:"relative"}}>
                <div className='buttonjetaotakze'
                onClick={onClick2}
               >Zobrazit zhrnutie</div>
                {kvalita?.length > 0 && <div className='malykruzok2'>{kvalita.length}</div>}
                
                </div>


         
             
       
          
        </div>
      
    </div>
  )
}

export default Formularovacast
// {otvorenieposldenho  &&