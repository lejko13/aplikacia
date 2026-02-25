import React, { useState, useEffect, useRef,useContext } from 'react';
import Templatepage from '../../pages/tempaltepage/templatepage'

import { GlobalContext } from '../../naviac/reactcontext/reactcontext';
import { MyContext } from '../../naviac/providertelefon/providertelefon'

import './zhrnutie.css'
// import Castzhrnutie from '../formularovacast/castzhrnutie/castzhrnutie'
import Castzhrnutie from '../../pages/rezervacie/formularovacast/castzhrnutie/castzhrnutie'
import { useNavigate } from 'react-router-dom';
const Zhrnutie = () => {

    const { suborOpen,setSuborOpen,obsahOpen,setObsahOpen,subor,setSubor,nazovSuboru,setNazovSuboru,unikattne,setUnikatne,meno,dotadok,setDotadok,otazka,setOtazka,formData, setFormData,otvorenieposldenho,setOtvorenieposldenho,vypisovaniechyby,setVypisovaniechyby} = useContext(MyContext);
    
         const { presun,setPresun,cena,setCena,kvalita,setKvalita,prize,setPrize,zobrazovanie,setZobrazovanie,otvrenie,setOtvorenie,automatika,setKontrolaText,rozdiel,setRozdiel ,ano,setAno} = useContext(GlobalContext); 


     const navigate = useNavigate();
     const handleClick32 = () => {
        navigate(`/Formularovacastposldena`);
    }

     const FORMULAR = () => {
  setObsahOpen("formular")
  setSuborOpen(true)
 }

  return (

       <Templatepage
 hedericek = {{display:"none"}}

  
   
   >

          <div className='tujeformularfinaluzkoneccenkokot3232'>



         <div className='tujescrollemeltneikcek2332'>



     
          

            <Castzhrnutie
            koore = {() => handleClick32()}
            onClick2 = {() => FORMULAR()}
            ></Castzhrnutie>
            

     
        </div> 
        
 
                             
                                
          
      
    </div>


    </Templatepage>
  
    
  )
}

export default Zhrnutie
