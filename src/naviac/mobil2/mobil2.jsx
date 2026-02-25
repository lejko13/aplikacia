import './mobil2.css'

import React from 'react'
import Impulz from '../impulz/impluz'
import Star from '../star/star'

import { useMediaQuery } from "react-responsive";
const Mobil2 = ({info1,info2}) => {


    const isMobile = useMediaQuery({ maxWidth: 610 });
    const isMobile2 = useMediaQuery({ minWidth: 561 });
    
  return (
    <div>
       
        <div className='tabulececeko2'>
            <span style={{fontSize:"var(  --font-size-base4)"}}>{info1}</span>
                  
                    <span style={{ fontSize: "var( --font-size-base2)", color: "var(--farba-sivaText)" }}>Hodnotenie</span>
        </div>
        
        <div style={{height:"100%",width:"1px",backgroundColor:"var(--farba-siva)",}}></div>


        
      

        
        <div style={{height:"100%",width:"1px",backgroundColor:"var(--farba-siva)"}}></div>

        <div className='tabulececeko2'>
            <span style={{fontSize:"var(  --font-size-base4)"}}>{info2}</span>
                 <Star style={{ fontSize: "13px", color: "gold", whiteSpace: "nowrap" }} />
        </div>

       </div>
      
   
  )
}

export default Mobil2
