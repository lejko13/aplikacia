import React, { useState, useEffect, useRef,useContext } from 'react';
import './castzhrnutie.css'

import { useMediaQuery } from "react-responsive";


import { MyContext } from '../../../../naviac/providertelefon/providertelefon'
import { GlobalContext } from '../../../../naviac/reactcontext/reactcontext'
import Platba from '../platba/platba'
import Paltbacovidim from '../paltbacovidim/paltbacovidim'
const Castzhrnutie = ({onClick2,onClick}) => {

    const { presun,setPresun,cena,setCena,kvalita,setKvalita,prize,setPrize,zobrazovanie,setZobrazovanie,otvrenie,setOtvorenie,automatika } = useContext(GlobalContext); 
    
    
    
          const { suborOpen,setSuborOpen,obsahOpen,setObsahOpen,subor,setSubor,nazovSuboru,setNazovSuboru,unikattne,setUnikatne,meno,dotadok,setDotadok,otazka,setOtazka,formData, setFormData,otvorenieposldenho,setOtvorenieposldenho} = useContext(MyContext);


     const isMobile = useMediaQuery({ maxWidth: 1200 });
  const isDesktop = useMediaQuery({ minWidth: 1201 });
  return (
    <div className='celkokokollooo'>
        <div className='tujescrollainfo'>

<Paltbacovidim></Paltbacovidim>








        </div>




       <div className='ovaldacaipanel'>
            <div className='buttonjetaotakze'  onClick={() =>  {setZobrazovanie("nah2la3d"),setOtvorenieposldenho(false)}}>Upravit</div>

              
            <div style={{position:"relative"}}>
                <div className='buttonjetaotakze'
                onClick={onClick2}
               >Záväzne objednať</div>
                {kvalita?.length > 0 && <div className='malykruzok2'>{kvalita.length}</div>}
                
                </div>
              
       
          
        </div>
    </div>
  )
}

export default Castzhrnutie
