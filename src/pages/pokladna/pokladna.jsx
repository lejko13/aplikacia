import React, { useState, useEffect, useRef,useContext } from 'react';
import Druhykonnec from '../../naviac/dryhukonnec/druhykonnec'
import './pokladna.css'
import { useNavigate } from 'react-router-dom';
import Picus from '../../naviac/picus/picus'

import { GlobalContext } from '../../naviac/reactcontext/reactcontext';
import { MyContext } from '../../naviac/providertelefon/providertelefon'
const Pokladna = () => {



 const navigate = useNavigate();
const navigovanesapt = () => navigate("/Rezervacie")
const navigovanesapt3 = () => navigate("/Formularovacastposldena")
//  const klik = () => navigate(`/Pokladna`);


const { presun,setPresun,cena,setCena,kvalita,setKvalita,prize,setPrize,zobrazovanie,setZobrazovanie,otvrenie,setOtvorenie,automatika,setKontrolaText,rozdiel,setRozdiel ,ano,setAno} = useContext(GlobalContext); 

    const { suborOpen,setSuborOpen,obsahOpen,setObsahOpen,subor,setSubor,nazovSuboru,setNazovSuboru,unikattne,setUnikatne,meno,dotadok,setDotadok,otazka,setOtazka,formData, setFormData,otvorenieposldenho,setOtvorenieposldenho,vypisovaniechyby,setVypisovaniechyby} = useContext(MyContext);

 const FORMULAR = () => {
  setObsahOpen("formular")
  setSuborOpen(true)
 }


  return (
    <div className='tootjepokladnaaaa'>

        <Picus
                  klikam = {() => {navigovanesapt()}
        
                    
                    // {setOtvorenie(false) ,setAno(true)}
                }
            //  sharekliknutie = {() => FORMULAR()}
             sharekliknutie = {() => FORMULAR()}
            //  onClick = {}

             ></Picus>
      
    </div>
  )
}

export default Pokladna
