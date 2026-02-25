import './polozkaitem.css'

import React from 'react'
import Hodnotenie from '../hodnotenie/hodnotenie'
// import { MyContext } from '../providertelefon/providertelefon'
// import { useContext } from "react";

const Polozkaitem = ({nazov,lokacia,hodnotenie,ikona,dizajnpolozky,kliknutie}) => {
    // const { suborOpen,setSuborOpen,obsahOpen,setObsahOpen,subor,setSubor,nazovSuboru,setNazovSuboru} = useContext(MyContext);
  return (
    <div  className="polozka"  style={dizajnpolozky} onClick={kliknutie}>
        <p style={{ whiteSpace: 'nowrap' ,fontSize:"var(--font-size-base)",color:"var(--farba-cierna)"}}>{nazov}</p> 
            <div style={{
            width:"100%",
            justifyContent:"space-between",
            display:"flex",
            // backgroundColor:"red"
            }}>
                <p style={{ whiteSpace: 'nowrap' ,fontSize:"var(  --font-size-base2)",color:"var(--farba-sivaText)"}}>{lokacia}</p>  
                <Hodnotenie
                text = {hodnotenie}
                ikona = {ikona}
            
                >
                </Hodnotenie>
            

            </div>
      
    </div>
  )
}

export default Polozkaitem
