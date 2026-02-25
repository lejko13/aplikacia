import './dalsi.css'
import React from 'react'

const Dalsi = ({kontrolaBloku,kontrolaPraitelov,fotka,meno,priezvisko,popisek,onClick,kruhuu,style,texticekkkkkokoko}) => {
    
  return (
    <div className='Dalsi' style={style} onClick={onClick}>


        <div className='fotkeckako' style={kruhuu}>
            <div className='hovercover' ></div>
            <div style={{display:kontrolaPraitelov ? "flex" : "none"}} className='lleezzasmpmmp'><i class='bx bx-heart'></i></div>
            {/* <div style={{display:kontrolaBloku ? "flex" : "none"}} className='lleezzasmpmmp'><i class='bx bx-block' ></i></div> */}
            <img className = "fototto"src={fotka} alt="" />
        </div>


        <div className="idkn-niceo">
            <div className="meno-priezvisko" style={texticekkkkkokoko}>{meno} {priezvisko}</div>
            <div style={{fontSize: "var(--font-size-small)" ,color:"var(  --farba-sivaText)"}}>{popisek}</div>
        
         
        </div>
      
    </div>
  )
}

export default Dalsi
