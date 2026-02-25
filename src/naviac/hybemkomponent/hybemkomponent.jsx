import './hybemkomponent.css'
import React, { useState } from 'react';
import Ukazovatelko from '../ukazovatelko/ukazovatelko'
import { color } from 'framer-motion'

const Hybemkomponent = ({ onClick, zvacseny,texthore,odpoved }) => {

  

 const styilik = {
  height: "55px",
  width: "100%",
  backgroundColor: "var(--farba-biela)",
  opacity: "1",
  padding: "20px 40px 20px 20px",
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  textAlign: "center",
  color: "var(--farba-cierna)",
  fontSize: "var( --font-size-base69)",
  whiteSpace: "nowrap"
}

const styilik2 = {
  height: "55px",
  width: "100%",
  backgroundColor: "var(--farba-biela)",
  opacity: "1",
  padding: "20px",
 fontSize: "var( --font-size-base69)",
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  textAlign: "center",
  color: "var(--farba-sivaText)",
  whiteSpace: "nowrap"
}

  
  return (
    <div
      style={{
     overflow: "hidden",
     border:"var( --border)",
      boxShadow: "var( --boxtien)",
        height: zvacseny ? '105px' : '55px',
        backgroundColor: 'red',
        // padding:"10px",
        transition: 'height 0.4s ease',
        width: '100%',
        cursor:"pointer",
        borderRadius:"var(--border-radius-maly)",
        position:"relative",
        
      
      }}
    >
      <div onClick={onClick} style={{display:"flex",flexDirection:"column"}}>
       <div style={styilik } className='kokovnej'>
        <span className='mojlkjnjkntext'>
            {texthore}
        </span>
       
        </div>
       <div style={styilik2}>
        <span className='mojlkjnjkntext'>
                {odpoved}
        </span>
   
        </div>
       
        

       <Ukazovatelko
       style ={{
        top:"17px",
        backgroundColor: zvacseny ? "var(--farba-main)" : "var(--farba-siva)",
        right:"10px", 
              cursor:"pointer",
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              color:"white",
        transition:"var(--transition)",
        position: "absolute"
      
       }}
       >
        

         
            {zvacseny  ? <i class='bx bx-chevron-up' ></i> : <i class='bx bx-chevron-down' ></i>}
          


          
      
       </Ukazovatelko>
      </div>
    </div>
  )
}

export default Hybemkomponent
