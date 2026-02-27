import React, { useState, useEffect, useRef,useContext } from 'react';

import './formular.css' // externý CSS súbor


import Posldenyuzfakt from './posldenyuzfakt/posldenyuzfakt'

import { MyContext } from '../providertelefon/providertelefon'
import { GlobalContext } from '../reactcontext/reactcontext'
const Form = ({setSuborOpen,setObsahOpen}) => {





    const { lajknute,texdo,setTextdo,kontext,setKontext,mala,setMala,  kontorla,setKontrola,kontorlaText,setKontrolaText,automatika } = useContext(GlobalContext);
     const { suborOpen,obsahOpen,zobraziekamosa,setZobraziekamosa,
         ukazkameno,setUkazkameno,ukazkamenoODSTRANENEI,setUkazkamenoODSTRANENIE,vypisovaniechyby,setVypisovaniechyby
     } = useContext(MyContext);


  const referencia = useRef(null);
  useEffect(() => {

  const handle = (e) => {
if (referencia.current && !referencia.current.contains(e.target)) {
  setSuborOpen(false)
  setObsahOpen("")

    }

 
  }
   document.addEventListener('mousedown', handle);
   return () => {
      document.removeEventListener('mousedown', handle);
    };



},[])

console.log(referencia);
  return (
    <div className="form-wrapper" ref={referencia}>
    
      <form className="form">
        <span className="title">Prihlasit sa</span>
        <p className="message" >Zaregistruj sa teraz a získaj plný prístup k našej aplikácii</p>

        <div className="flex">
            <Posldenyuzfakt
            textice = {"Meno"}
            ></Posldenyuzfakt>

          <Posldenyuzfakt
                  textice = {"Priezvisko"}
          ></Posldenyuzfakt>
        </div>

        <label>
            <Posldenyuzfakt
                  textice = {"Email"}
          ></Posldenyuzfakt>
        </label>
        <label>
          <Posldenyuzfakt
                  textice = {"Heslo"}
          ></Posldenyuzfakt>
          
        </label>
        <label>
           <Posldenyuzfakt
                  textice = {"Potvrdit heslo"}
          ></Posldenyuzfakt>
        </label>


        <div className='Posldenyuzfakt32'
        onClick={() => {automatika(),setKontrolaText("prhalsit")}}
        >
          <span>Pokracovat</span>

        </div>



        
        <p className="signin">
         Už máš účet? <a 
         onClick={() => {automatika(),setKontrolaText("prhalsit")}}
         href="#" style={{color:"var(--farba-main)"}}>Prihlás sa</a>
        </p>
      </form>
    </div>
  );
};

export default Form;
